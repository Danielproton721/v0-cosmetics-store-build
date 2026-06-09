import { NextResponse } from "next/server";

import { getPaymentStatus, isGatewayPaidStatus } from "@/lib/payment-status";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const txid = url.searchParams.get("txid")?.trim();

  if (!txid) {
    return NextResponse.json({ error: "txid obrigatorio." }, { status: 400 });
  }

  const payment = await getPaymentStatus(txid);

  return NextResponse.json({
    txid,
    paid: isGatewayPaidStatus(payment?.status),
    status: payment?.status ?? "pending",
    updatedAt: payment?.updatedAt ?? null,
  });
}
