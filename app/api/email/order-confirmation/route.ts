import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderOrderConfirmationEmail, type OrderEmailInput } from "@/lib/order-email";

export const dynamic = "force-dynamic";

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const order = body as Partial<OrderEmailInput>;

  if (!order?.orderCode || !order?.customer || !isValidEmail(order.customer.email)) {
    return NextResponse.json({ error: "Dados do pedido incompletos." }, { status: 400 });
  }
  if (!Array.isArray(order.items) || order.items.length === 0) {
    return NextResponse.json({ error: "Pedido sem itens." }, { status: 400 });
  }
  if (!order.address) {
    return NextResponse.json({ error: "Endereço ausente." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[ORDER EMAIL] RESEND_API_KEY ausente.");
    return NextResponse.json({ error: "Servidor de e-mail não configurado." }, { status: 500 });
  }

  const fromAddress =
    process.env.RESEND_FROM_EMAIL || "Confortebem <suporte.oficial@confortebem.shop>";

  try {
    const { subject, html } = renderOrderConfirmationEmail(order as OrderEmailInput);
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: fromAddress,
      to: [order.customer.email as string],
      subject,
      html,
      replyTo: process.env.RESEND_REPLY_TO || undefined,
    });

    if (result.error) {
      console.error("[ORDER EMAIL] Resend error:", result.error);
      return NextResponse.json({ error: result.error.message || "Falha ao enviar e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (err: any) {
    console.error("[ORDER EMAIL] Falha inesperada:", err);
    return NextResponse.json({ error: err?.message || "Falha ao enviar e-mail." }, { status: 500 });
  }
}
