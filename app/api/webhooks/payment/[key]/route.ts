import { NextResponse } from "next/server";
import { getTarget, logEvent, summarizePayload } from "@/lib/relay";

// ============================================================================
//  HUB DE RELAY (por loja) — a Pagou chama /api/webhooks/payment/<chave> e o
//  hub repassa pro webhook da loja daquela chave, logando o evento pro painel.
//  A loja de trás nunca é revelada ao gateway.
// ============================================================================

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;
  const body = await request.text();
  const info = summarizePayload(body);

  const target = await getTarget(key);

  if (!target) {
    await logEvent({ key, name: "(chave desconhecida)", forwarded: false, error: "loja não conectada", ...info });
    // 200 pra Pagou não ficar re-tentando eternamente uma chave inexistente.
    return NextResponse.json({ ok: true, note: "no target" });
  }

  try {
    const resp = await fetch(target.url, {
      method: "POST",
      headers: {
        "content-type": request.headers.get("content-type") || "application/json",
        "x-relay-secret": target.secret,
      },
      body,
      cache: "no-store",
    });
    await logEvent({
      key,
      name: target.name,
      forwarded: true,
      forwardStatus: resp.status,
      ...info,
    });
    const text = await resp.text();
    return new NextResponse(text || JSON.stringify({ ok: true }), {
      status: resp.status,
      headers: { "content-type": "application/json" },
    });
  } catch {
    await logEvent({ key, name: target.name, forwarded: false, error: "falha ao repassar", ...info });
    // 502 → a Pagou re-tenta o webhook depois (não perde o evento).
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
