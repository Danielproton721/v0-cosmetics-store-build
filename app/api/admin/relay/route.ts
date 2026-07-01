import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { addTarget, getLog, getTargets, removeTarget, kvConfigured } from "@/lib/relay";

export const dynamic = "force-dynamic";

// Lista as lojas conectadas + o log de eventos recentes.
export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const [targets, log] = await Promise.all([getTargets(), getLog(60)]);
  return NextResponse.json({ kvOk: kvConfigured(), targets, log });
}

// Conecta uma loja nova: recebe { name, url } e devolve a chave + segredo gerados.
export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  if (!kvConfigured()) {
    return NextResponse.json({ error: "KV (Upstash) não configurado." }, { status: 409 });
  }
  let body: any;
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const name = String(body?.name ?? "");
  const url = String(body?.url ?? "").trim();
  if (!/^https?:\/\/.+/i.test(url)) {
    return NextResponse.json({ error: "URL de destino inválida (use https://...)." }, { status: 400 });
  }
  const target = await addTarget(name, url);
  return NextResponse.json({ ok: true, target });
}

// Remove uma loja conectada.
export async function DELETE(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const key = new URL(request.url).searchParams.get("key") || "";
  if (!key) {
    return NextResponse.json({ error: "chave obrigatória." }, { status: 400 });
  }
  await removeTarget(key);
  return NextResponse.json({ ok: true });
}
