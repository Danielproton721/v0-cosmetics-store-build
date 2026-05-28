import { NextResponse } from "next/server";
import {
  consumeRateLimit,
  getCheckoutSessionToken,
  getClientIp,
  hashRateLimitValue,
  validateCheckoutSession,
} from "@/lib/checkout-security";

export const dynamic = "force-dynamic";

function getPublicNotifyUrl(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || url.host;
  const hostname = host.split(":")[0]?.toLowerCase() || "";

  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.startsWith("192.168.") ||
    hostname.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(hostname)
  ) {
    return null;
  }

  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto = forwardedProto === "http" || forwardedProto === "https" ? forwardedProto : url.protocol.replace(":", "");
  return `${proto === "http" ? "https" : proto}://${host}/api/webhooks/pagouai`;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const ipLimit = consumeRateLimit(`pix:create:ip:${ip}`, 8, 10 * 60 * 1000);
  if (!ipLimit.ok) {
    return NextResponse.json(
      { error: "Muitas tentativas de pagamento. Tente novamente em instantes." },
      { status: 429, headers: { "Retry-After": String(ipLimit.retryAfterSeconds) } }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { value, phone, email, name, cpf, title } = body ?? {};

  // Validação estrita
  if (!value || value <= 0) {
    return NextResponse.json({ error: "Valor da transação inválido." }, { status: 400 });
  }
  if (!name || name.trim() === "") {
    return NextResponse.json({ error: "O Nome é obrigatório." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const phoneDigits = (phone || "").replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    return NextResponse.json({ error: "Telefone deve ter 10 ou 11 dígitos (com DDD)." }, { status: 400 });
  }

  const cpfDigits = (cpf || "").replace(/\D/g, "");
  if (cpfDigits.length !== 11) {
    return NextResponse.json({ error: "CPF inválido. Deve conter 11 dígitos." }, { status: 400 });
  }

  const identityLimit = consumeRateLimit(
    `pix:create:identity:${hashRateLimitValue(`${cpfDigits}|${email}|${phoneDigits}`)}`,
    4,
    30 * 60 * 1000
  );
  if (!identityLimit.ok) {
    return NextResponse.json(
      { error: "Muitas tentativas para estes dados. Aguarde alguns minutos e tente novamente." },
      { status: 429, headers: { "Retry-After": String(identityLimit.retryAfterSeconds) } }
    );
  }

  const amountCents = Math.round(Number(value) * 100);
  const checkoutSession = validateCheckoutSession(getCheckoutSessionToken(request), amountCents);
  if (!checkoutSession.ok) {
    return NextResponse.json(
      { error: "Sessao de checkout expirada ou invalida. Volte ao carrinho e tente novamente." },
      { status: 403 }
    );
  }

  const rawKey = process.env.PAGOUAI_SECRET_KEY;
  if (!rawKey) {
    console.error("[PIX API] Chave PAGOUAI_SECRET_KEY ausente no ambiente.");
    return NextResponse.json({ error: "Erro interno: Gateway não configurado." }, { status: 500 });
  }

  const secretKey = rawKey.trim().replace(/^Bearer\s+/i, "");
  const endpoint = "https://api.pagou.ai/v2/transactions";
  const externalRef = `order_${Date.now()}_${hashRateLimitValue(`${cpfDigits}|${amountCents}|${email}`).slice(0, 8)}`;

  // Pagou.ai v2 hoje exige IP do comprador em todos os métodos. Caímos
  // em IP brasileiro público quando estamos em local/dev.
  const isPrivateIp = (value: string) =>
    !value ||
    value === "unknown" ||
    value === "127.0.0.1" ||
    value === "::1" ||
    value === "0.0.0.0" ||
    value.startsWith("192.168.") ||
    value.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(value);
  const buyerIp = isPrivateIp(ip) ? "177.71.248.55" : ip;

  const payload: Record<string, any> = {
    external_ref: externalRef,
    amount: amountCents,
    currency: "BRL",
    method: "pix",
    ip_address: buyerIp,
    buyer: {
      name: name.trim(),
      email: email.trim(),
      phone: phoneDigits,
      ip_address: buyerIp,
      document: {
        number: cpfDigits,
        type: "CPF",
      },
    },
    products: [
      {
        name: title || "Combo Enxoval",
        quantity: 1,
        price: amountCents,
      },
    ],
  };

  const notifyUrl = getPublicNotifyUrl(request);
  if (notifyUrl) {
    Object.assign(payload, { notify_url: notifyUrl });
  }

  try {
    console.log("[PIX API] >>> request payload:", JSON.stringify(payload));
    console.log("[PIX API] >>> using key prefix:", `${secretKey.slice(0, 6)}...${secretKey.slice(-4)}`);

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        authorization: `Bearer ${secretKey}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await upstream.text();
    console.log(`[PIX API] <<< status ${upstream.status}, body:`, raw);

    let data: any = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      data = null;
    }

    if (!upstream.ok) {
      const collectErrors = (input: any): string[] => {
        if (!input) return [];
        if (typeof input === "string") return [input];
        if (Array.isArray(input)) return input.flatMap(collectErrors);
        if (typeof input === "object") {
          const parts: string[] = [];
          if (input.message) parts.push(String(input.message));
          if (input.detail) parts.push(String(input.detail));
          if (input.error && typeof input.error === "string") parts.push(input.error);
          if (input.field && input.message) parts.push(`${input.field}: ${input.message}`);
          if (input.path) parts.push(`${Array.isArray(input.path) ? input.path.join(".") : input.path}: ${input.message || ""}`);
          return parts.length ? parts : [JSON.stringify(input)];
        }
        return [String(input)];
      };

      const errorParts = [
        ...collectErrors(data?.errors),
        ...collectErrors(data?.validation_errors),
        ...collectErrors(data?.error),
        ...collectErrors(data?.detail),
        ...collectErrors(data?.message),
      ].filter(Boolean);

      const detail = errorParts.length ? errorParts.join(" | ") : raw || "Erro desconhecido no gateway";
      console.error(`[PIX API] Erro (${upstream.status}):`, raw);

      if (upstream.status === 401) {
        return NextResponse.json({ error: "Chave de autenticação inválida na Pagou.ai." }, { status: 401 });
      }

      return NextResponse.json(
        { error: detail, gateway: data ?? raw },
        { status: 502 }
      );
    }

    const transaction = data?.data ?? data ?? {};
    const pix = transaction?.pix ?? {};
    const qrCode = pix.qr_code ?? pix.qrcode ?? pix.qrCode ?? "";
    const qrCodeImage = pix.url ?? null;

    if (!qrCode) {
      console.error("[PIX API] Resposta de sucesso, mas sem QR Code:", raw);
      return NextResponse.json({ error: "Gateway não retornou QR Code PIX válido." }, { status: 502 });
    }

    const expiresAt = pix.expiration_date ?? new Date(Date.now() + 10 * 60 * 1000).toISOString();

    return NextResponse.json({
      txid: transaction?.id ?? data?.id ?? data?.transactionId ?? null,
      qrCode,
      qrCodeImage,
      expiresAt,
      status: transaction?.status ?? "pending",
      amount: value,
      phone: phoneDigits,
    });
  } catch (err) {
    console.error("[PIX API] Falha na rede/comunicação:", err);
    return NextResponse.json(
      { error: "Falha de comunicação com o servidor de pagamento." },
      { status: 502 }
    );
  }
}
