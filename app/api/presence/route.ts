import { NextResponse } from "next/server"
import {
  countOnline,
  countToday,
  dailyHistory,
  recordDailyVisit,
  recordHeartbeat,
} from "@/lib/presence"

export const dynamic = "force-dynamic"

// Crawlers/preview/monitores executam o JS da loja e inflam o "online". Como o
// contador é métrica interna (só o admin vê), descartamos quem se identifica como
// bot. Não é anti-fraude — só higiene da contagem pra refletir gente de verdade.
const BOT_UA =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|facebot|whatsapp|telegrambot|discordbot|embedly|quora|pinterest|redditbot|applebot|petalbot|yandex|baidu|sogou|duckduckbot|headless|phantomjs|lighthouse|pagespeed|gtmetrix|pingdom|uptimerobot|statuscake|monitor|python-requests|axios|node-fetch|curl|wget|go-http|java\/|okhttp|apache-httpclient|adsbot|mediapartners|apis-google|google-inspectiontool|vercelbot|preview/i

function isBot(ua: string): boolean {
  if (!ua) return true // sem User-Agent = quase sempre robô/health-check
  return BOT_UA.test(ua)
}

// Heartbeat do visitante: a loja chama isto periodicamente com um id de sessão.
// `count: true` (só no 1º ping do dia daquele navegador) registra a visita única.
export async function POST(request: Request) {
  if (isBot(request.headers.get("user-agent") || "")) {
    return NextResponse.json({ ok: true, skipped: "bot" })
  }

  let body: any
  try {
    body = await request.json()
  } catch {
    body = {}
  }
  const id = String(body?.id || "").slice(0, 64)
  if (!id) return NextResponse.json({ ok: false }, { status: 400 })

  const now = Date.now()
  try {
    await recordHeartbeat(id, now)
    if (body?.count === true) await recordDailyVisit(id, now)
  } catch {
    // best effort — presença nunca derruba a navegação
  }
  return NextResponse.json({ ok: true })
}

// GET padrão → { online, today } (usado no poll ao vivo do painel).
// GET ?range=N → { days: [{date,count}...] } (histórico, buscado 1x ao abrir).
export async function GET(request: Request) {
  const range = Number(new URL(request.url).searchParams.get("range") || 0)
  const now = Date.now()
  try {
    if (range > 0) {
      const days = await dailyHistory(now, Math.min(range, 31))
      return NextResponse.json({ days })
    }
    const [online, today] = await Promise.all([countOnline(now), countToday(now)])
    return NextResponse.json({ online, today })
  } catch {
    return range > 0
      ? NextResponse.json({ days: [] })
      : NextResponse.json({ online: 0, today: 0 })
  }
}
