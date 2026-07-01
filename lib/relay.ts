// ============================================================================
//  RELAY HUB — esta loja (Fio Nobre) serve de FACHADA pra outras lojas.
//
//  Cada loja conectada tem uma CHAVE própria. O gateway chama
//  /api/webhooks/payment/<chave> (domínio desta loja) e o hub repassa pro
//  webhook real daquela loja, que fica oculta. Cada evento que passa é logado
//  pra o painel /admin mostrar o que está indo e voltando.
//
//  Guardado no KV:
//   • relay:targets  → { [chave]: RelayTarget }   (as lojas conectadas)
//   • relay:log      → sorted set de eventos por timestamp (histórico recente)
// ============================================================================

import { randomBytes } from "crypto"
import {
  kvConfigured,
  kvGetJSON,
  kvSetJSON,
  kvZAdd,
  kvZRevRange,
  kvZRemRangeByScore,
} from "./kv-store"

export { kvConfigured }

const TARGETS_KEY = "relay:targets"
const LOG_KEY = "relay:log"
const LOG_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7 // guarda 7 dias de histórico

export type RelayTarget = {
  key: string
  name: string
  url: string // webhook de destino da loja de trás
  secret: string // enviado no header x-relay-secret pra loja validar
  createdAt: string
}

export type RelayEvent = {
  id: string
  ts: number
  key: string
  name: string
  event?: string
  status?: string
  txid?: string
  amount?: number
  forwarded: boolean
  forwardStatus?: number
  error?: string
  payload?: string // corpo cru recebido do gateway (truncado)
  response?: string // resposta da loja de trás (truncada)
}

// --- Lojas conectadas (targets) --------------------------------------------
export async function getTargets(): Promise<Record<string, RelayTarget>> {
  if (!kvConfigured()) return {}
  return (await kvGetJSON<Record<string, RelayTarget>>(TARGETS_KEY)) ?? {}
}

export async function getTarget(key: string): Promise<RelayTarget | null> {
  if (!key) return null
  const targets = await getTargets()
  return targets[key] ?? null
}

// url é opcional: dá pra conectar a loja só com o apelido (gera chave + segredo
// na hora, pro prompt do agente) e preencher o webhook de destino depois, quando
// o agente da outra loja reportar.
export async function addTarget(name: string, url = ""): Promise<RelayTarget> {
  if (!kvConfigured()) throw new Error("KV (Upstash) não configurado.")
  const targets = await getTargets()
  const key = randomBytes(6).toString("hex") // 12 chars, o identificador na URL
  const secret = randomBytes(24).toString("base64url")
  const target: RelayTarget = {
    key,
    name: (name || "").trim() || key,
    url: (url || "").trim(),
    secret,
    createdAt: new Date().toISOString(),
  }
  targets[key] = target
  await kvSetJSON(TARGETS_KEY, targets)
  return target
}

// Edita apelido e/ou webhook de destino de uma loja já conectada.
export async function updateTarget(
  key: string,
  patch: { name?: string; url?: string },
): Promise<RelayTarget | null> {
  if (!kvConfigured() || !key) return null
  const targets = await getTargets()
  const current = targets[key]
  if (!current) return null
  if (patch.name !== undefined) current.name = patch.name.trim() || current.key
  if (patch.url !== undefined) current.url = patch.url.trim()
  targets[key] = current
  await kvSetJSON(TARGETS_KEY, targets)
  return current
}

export async function removeTarget(key: string): Promise<void> {
  if (!kvConfigured() || !key) return
  const targets = await getTargets()
  if (targets[key]) {
    delete targets[key]
    await kvSetJSON(TARGETS_KEY, targets)
  }
}

// --- Log de eventos ---------------------------------------------------------
export async function logEvent(entry: Omit<RelayEvent, "id" | "ts"> & { ts?: number }): Promise<void> {
  if (!kvConfigured()) return
  const ts = entry.ts ?? Date.now()
  const id = `${ts}-${randomBytes(4).toString("hex")}`
  try {
    await kvZAdd(LOG_KEY, ts, JSON.stringify({ ...entry, id, ts }))
    await kvZRemRangeByScore(LOG_KEY, 0, ts - LOG_MAX_AGE_MS)
  } catch {
    // log é best-effort — nunca derruba o repasse do webhook.
  }
}

export async function getLog(limit = 60): Promise<RelayEvent[]> {
  if (!kvConfigured()) return []
  const raw = await kvZRevRange(LOG_KEY, 0, limit - 1)
  const out: RelayEvent[] = []
  for (const r of raw) {
    try {
      out.push(JSON.parse(r) as RelayEvent)
    } catch {
      // ignora entradas corrompidas
    }
  }
  return out
}

// Extrai infos úteis do payload do gateway pra exibir no log (tolerante a formato).
export function summarizePayload(body: string): Pick<RelayEvent, "event" | "status" | "txid" | "amount"> {
  try {
    const p = JSON.parse(body)
    const pick = (...keys: string[]) => {
      for (const k of keys) {
        const v = k.split(".").reduce((c: any, part) => c?.[part], p)
        if (v !== undefined && v !== null && v !== "") return v
      }
      return undefined
    }
    return {
      event: pick("event", "type", "action"),
      status: pick("status", "data.status", "transaction.status"),
      txid: pick("transactionId", "data.transactionId", "data.id", "transaction.id", "id"),
      amount: Number(pick("amount", "data.amount", "transaction.amount")) || undefined,
    }
  } catch {
    return {}
  }
}
