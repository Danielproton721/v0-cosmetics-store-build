import { NextResponse } from "next/server";
import {
  consumeRateLimit,
  getCheckoutSessionToken,
  getClientIp,
  hashRateLimitValue,
  validateCheckoutSession,
} from "@/lib/checkout-security";

export const dynamic = "force-dynamic";

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

  const secretKey = rawKey.trim();
  const baseUrl = "https://api.conta.pagou.ai";
  const endpoint = `${baseUrl}/v1/transactions`;

  // expirationDate v1 aceita formato AAAA-MM-DD
  const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const payload = {
    amount: amountCents,
    paymentMethod: "pix",
    customer: {
      name: name.trim(),
      email: email.trim(),
      phone: phoneDigits,
      document: {
        number: cpfDigits,
        type: "cpf",
      },
    },
    items: [
      {
        title: title || "Combo Enxoval",
        quantity: 1,
        unitPrice: amountCents,
        tangible: false,
      },
    ],
    pix: {
      expirationDate,
    },
  };

  const basicAuth = Buffer.from(`${secretKey}:x`).toString("base64");

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        authorization: `Basic ${basicAuth}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await upstream.text();
    let data: any = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      data = null;
    }

    if (!upstream.ok) {
      const detail = data?.message || data?.error || data?.errors?.[0]?.message || "Erro desconhecido no gateway";
      console.error(`[PIX API] Erro no Gateway (${upstream.status}):`, detail);
      
      if (upstream.status === 401) {
         return NextResponse.json({ error: "Chave de autenticação inválida na Pagou.ai." }, { status: 401 });
      }
      
      return NextResponse.json(
        { error: `Falha ao processar PIX no gateway.`, detail },
        { status: 502 }
      );
    }

    const pix = data?.pix ?? {};
    const qrCode = pix.qrcode ?? pix.qrCode ?? "";
    const qrCodeImage = pix.url ?? null;

    if (!qrCode) {
      console.error("[PIX API] Resposta de sucesso, mas sem QR Code:", raw);
      return NextResponse.json({ error: "Gateway não retornou QR Code PIX válido." }, { status: 502 });
    }

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    return NextResponse.json({
      txid: data?.id ?? data?.transactionId ?? null,
      qrCode,
      qrCodeImage,
      expiresAt,
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
