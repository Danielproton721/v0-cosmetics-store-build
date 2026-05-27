import { NextResponse } from "next/server";
import {
  consumeRateLimit,
  getCheckoutSessionToken,
  getClientIp,
  hashRateLimitValue,
  validateCheckoutSession,
} from "@/lib/checkout-security";
import { isGatewayPaidStatus } from "@/lib/payment-status";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const ipLimit = consumeRateLimit(`card:create:ip:${ip}`, 5, 10 * 60 * 1000);
  if (!ipLimit.ok) {
    return NextResponse.json(
      { error: "Muitas tentativas de pagamento. Tente novamente em instantes." },
      { status: 429, headers: { "Retry-After": String(ipLimit.retryAfterSeconds) } }
    );
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { value, name, email, cpf, phone, token, installments, title } = body ?? {};

  if (!value || value <= 0)
    return NextResponse.json({ error: "Valor da transação inválido." }, { status: 400 });
  if (!name?.trim())
    return NextResponse.json({ error: "Nome é obrigatório." }, { status: 400 });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  if (!token || typeof token !== "string" || !token.startsWith("pgct_"))
    return NextResponse.json(
      { error: "Token de cartão ausente ou inválido. Atualize a página e tente novamente." },
      { status: 400 }
    );

  const phoneDigits = (phone || "").replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 11)
    return NextResponse.json({ error: "Telefone deve ter 10 ou 11 dígitos." }, { status: 400 });

  const cpfDigits = (cpf || "").replace(/\D/g, "");
  if (cpfDigits.length !== 11)
    return NextResponse.json({ error: "CPF inválido." }, { status: 400 });

  const identityLimit = consumeRateLimit(
    `card:create:identity:${hashRateLimitValue(`${cpfDigits}|${email}|${phoneDigits}`)}`,
    3,
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
    console.error("[CARD API] Chave PAGOUAI_SECRET_KEY ausente.");
    return NextResponse.json({ error: "Gateway não configurado." }, { status: 500 });
  }

  const secretKey = rawKey.trim().replace(/^Bearer\s+/i, "");
  const installmentCount = Math.max(1, Math.min(12, parseInt(installments) || 1));
  const externalRef = `order_${Date.now()}_${hashRateLimitValue(`${cpfDigits}|${amountCents}|${email}`).slice(0, 8)}`;

  const payload = {
    external_ref: externalRef,
    amount: amountCents,
    currency: "BRL",
    method: "credit_card",
    token,
    installments: installmentCount,
    buyer: {
      name: name.trim(),
      email: email.trim(),
      document: {
        type: "CPF",
        number: cpfDigits,
      },
    },
    products: [
      {
        name: title || "Combo Enxoval",
        price: amountCents,
        quantity: 1,
      },
    ],
  };

  try {
    const upstream = await fetch("https://api.pagou.ai/v2/transactions", {
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
    console.log(`[CARD API] Status: ${upstream.status}`);

    let data: any = null;
    try { data = raw ? JSON.parse(raw) : null; } catch { data = null; }

    if (!upstream.ok) {
      const detail =
        data?.detail ||
        data?.message ||
        data?.error ||
        (Array.isArray(data?.errors) ? data.errors.map((e: any) => e.message || e).join(", ") : null) ||
        raw ||
        "Erro desconhecido no gateway";

      console.error(`[CARD API] Erro (${upstream.status}):`, detail);

      if (upstream.status === 401)
        return NextResponse.json({ error: "Chave de autenticação inválida." }, { status: 401 });

      return NextResponse.json({ error: detail }, { status: 502 });
    }

    const transaction = data?.data ?? data ?? {};
    const status = transaction?.status ?? "unknown";
    const transactionId = transaction?.id ?? transaction?.transactionId ?? null;
    const approved = isGatewayPaidStatus(status);
    const nextAction = transaction?.next_action ?? null;

    return NextResponse.json({
      txid: transactionId,
      status,
      approved,
      nextAction,
      message:
        approved
          ? "Pagamento aprovado! ✅"
          : nextAction
          ? "Autenticação 3D Secure necessária."
          : status === "refused" || status === "failed"
          ? "Cartão recusado. Verifique os dados ou tente outro cartão."
          : "Pagamento em análise.",
    });
  } catch (err) {
    console.error("[CARD API] Falha de comunicação:", err);
    return NextResponse.json({ error: "Falha de comunicação com o servidor de pagamento." }, { status: 502 });
  }
}
