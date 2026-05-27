import { NextResponse } from "next/server"

import { recordPaymentStatus } from "@/lib/payment-status"

export const dynamic = "force-dynamic"

function getPayloadValue(payload: any, keys: string[]) {
  for (const key of keys) {
    const value = key.split(".").reduce((current, part) => current?.[part], payload)
    if (value !== undefined && value !== null && value !== "") return value
  }

  return null
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "pagouai-webhook",
  })
}

export async function POST(request: Request) {
  const rawBody = await request.text()
  let payload: any = {}

  try {
    payload = rawBody ? JSON.parse(rawBody) : {}
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalido." }, { status: 400 })
  }

  const event =
    getPayloadValue(payload, ["event", "type", "action", "name"]) ??
    "transaction.updated"
  const transactionId = getPayloadValue(payload, [
    "transactionId",
    "data.transactionId",
    "data.id",
    "transaction.transactionId",
    "transaction.id",
    "id",
  ])
  const status = getPayloadValue(payload, [
    "status",
    "event_type",
    "data.status",
    "data.event_type",
    "transaction.status",
  ]) ?? (String(event).toLowerCase().includes("paid") ? "paid" : null)
  const paymentMethod = getPayloadValue(payload, [
    "paymentMethod",
    "data.paymentMethod",
    "transaction.paymentMethod",
  ])

  console.log("[PAGOUAI WEBHOOK]", {
    event,
    transactionId,
    status,
    paymentMethod,
    receivedAt: new Date().toISOString(),
  })

  if (transactionId && status) {
    recordPaymentStatus({
      event: String(event),
      transactionId: String(transactionId),
      status: String(status),
      paymentMethod: paymentMethod ? String(paymentMethod) : null,
      updatedAt: new Date().toISOString(),
    })
  }

  return NextResponse.json({
    ok: true,
    received: true,
  })
}
