// Presença "ao vivo" + visitantes únicos por dia. Desenhado pra gastar o MÍNIMO
// de comandos do Upstash (KV Free):
//
//  - Ao vivo: sorted set (score = timestamp). Cada visitante manda um heartbeat
//    (só 1 ZADD por ping). "Online" = quem pingou nos últimos WINDOW_MS. A poda
//    dos ausentes acontece na LEITURA (countOnline), não em todo heartbeat.
//  - Únicos/dia: HyperLogLog (PFADD/PFCOUNT). O client chama recordDailyVisit
//    UMA vez por navegador por dia (trava no localStorage) → ~1 comando por
//    visitante único por dia. Memória fixa e barata; expira em 45 dias.
//
// Sem KV configurado, tudo degrada gracioso (conta 0 / histórico vazio).

import {
  kvConfigured,
  kvZAdd,
  kvZCard,
  kvZRemRangeByScore,
  kvPfAdd,
  kvPfCount,
  kvExpire,
} from "./kv-store"

const KEY = "presence:online"
// Janela de presença: considera online quem pingou nos últimos 90s.
const WINDOW_MS = 90_000

// Dia no fuso do Brasil (UTC-3, sem horário de verão desde 2019).
const BRT_OFFSET_MS = 3 * 60 * 60 * 1000
export function dayKey(nowMs: number): string {
  return new Date(nowMs - BRT_OFFSET_MS).toISOString().slice(0, 10)
}
const visitorsKey = (day: string) => `visitors:${day}`
// Mantém ~45 dias de histórico e some sozinho (não acumula lixo no KV).
const DAILY_TTL_S = 45 * 24 * 60 * 60

// Heartbeat do visitante ao vivo — só 1 ZADD (a poda é na leitura).
export async function recordHeartbeat(id: string, nowMs: number): Promise<void> {
  if (!kvConfigured() || !id) return
  await kvZAdd(KEY, nowMs, id)
}

// Marca 1 visita única do dia (HLL). Chamado 1x por navegador por dia.
export async function recordDailyVisit(id: string, nowMs: number): Promise<void> {
  if (!kvConfigured() || !id) return
  const key = visitorsKey(dayKey(nowMs))
  await kvPfAdd(key, id)
  await kvExpire(key, DAILY_TTL_S)
}

export async function countOnline(nowMs: number): Promise<number> {
  if (!kvConfigured()) return 0
  await kvZRemRangeByScore(KEY, 0, nowMs - WINDOW_MS)
  return kvZCard(KEY)
}

// Visitantes únicos de hoje (aproximado via HLL).
export async function countToday(nowMs: number): Promise<number> {
  if (!kvConfigured()) return 0
  return kvPfCount(visitorsKey(dayKey(nowMs)))
}

// Histórico dos últimos `days` dias (mais antigo → mais recente).
export async function dailyHistory(
  nowMs: number,
  days: number,
): Promise<{ date: string; count: number }[]> {
  if (!kvConfigured()) return []
  const out: { date: string; count: number }[] = []
  for (let i = days - 1; i >= 0; i--) {
    const day = dayKey(nowMs - i * 24 * 60 * 60 * 1000)
    const count = await kvPfCount(visitorsKey(day))
    out.push({ date: day, count })
  }
  return out
}
