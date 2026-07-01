"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Copy, Link2, Plus, RefreshCw, Sparkles, Trash2, X } from "lucide-react"

type RelayTarget = { key: string; name: string; url: string; secret: string; createdAt: string }
type RelayEvent = {
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
}
type Data = { kvOk: boolean; targets: Record<string, RelayTarget>; log: RelayEvent[] }

const brl = (v?: number) => (v ? `R$ ${(v / 100).toFixed(2).replace(".", ",")}` : "—")
const fmt = (ts: number) => new Date(ts).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
const pretty = (s?: string) => {
  if (!s) return ""
  try {
    return JSON.stringify(JSON.parse(s), null, 2)
  } catch {
    return s
  }
}

// Prompt pronto pra colar no agente (Claude Code/Cursor) da OUTRA loja: ensina a
// integrar com o relay e a devolver o webhook pra registrar aqui.
function buildAgentPrompt(notifyUrl: string, secret: string) {
  return `Configure ESTA loja pra usar um relay de webhook de pagamento externo, pra o gateway (Pagou.ai) NUNCA receber o dominio real desta loja. Um relay intermediario ja existe e vai receber o webhook do gateway e repassar pra ca.

CONTRATO (faca exatamente isto, adaptando a estrutura desta loja):

1) notify_url: ao criar QUALQUER cobranca (PIX/cartao) no gateway, o campo notify_url/callback desta loja deve ser:
   ${notifyUrl}
   Deixe isso configuravel pela env NOTIFY_URL_OVERRIDE e use-a quando estiver definida (senao, o dominio proprio da loja).

2) Validacao de entrada: o webhook desta loja (o endpoint que recebe o gateway, ex.: /api/webhooks/pagouai) vai passar a receber um header "x-relay-secret". Valide contra a env RELAY_SECRET:
   - se RELAY_SECRET estiver definida e o header NAO bater => responda 401;
   - se nao estiver definida => aceite normalmente (nao quebre nada).

3) NAO altere a logica de processar o pagamento (e-mail, marcar pago, etc.). O corpo do webhook chega identico ao do gateway; so muda de onde ele vem.

4) Defina no ambiente de producao desta loja:
   NOTIFY_URL_OVERRIDE=${notifyUrl}
   RELAY_SECRET=${secret}

5) IMPORTANTE: ao terminar, me DEVOLVA a URL publica do webhook desta loja (ex.: https://SEU-DOMINIO/api/webhooks/pagouai), pra eu registrar no relay como destino.

Antes de editar, investigue onde a loja monta o notify_url ao criar a cobranca e onde esta o handler do webhook do gateway. Se for Next.js, aplique via env. Se for outra estrutura, adapte mantendo o contrato acima. Nada pode dar erro por falta das envs (degrade gracioso).`
}

function CopyBtn({ text, label = "Copiar" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setDone(true)
          setTimeout(() => setDone(false), 1500)
        } catch {}
      }}
      className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-semibold text-muted-foreground hover:bg-muted"
    >
      {done ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
      {done ? "Copiado" : label}
    </button>
  )
}

function Field({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div>
      <div className={`mb-0.5 ${small ? "text-[10px]" : "text-xs"} font-semibold uppercase tracking-wide text-muted-foreground`}>
        {label}
      </div>
      <div className="flex items-center gap-2">
        <code className="min-w-0 flex-1 truncate rounded-md bg-muted px-2 py-1.5 font-mono text-xs text-foreground">
          {value}
        </code>
        <CopyBtn text={value} />
      </div>
    </div>
  )
}

function TargetCard({
  target,
  notifyUrl,
  onChanged,
}: {
  target: RelayTarget
  notifyUrl: string
  onChanged: () => void
}) {
  const [url, setUrl] = useState(target.url)
  const [saving, setSaving] = useState(false)
  const dirty = url.trim() !== target.url

  async function saveUrl() {
    setSaving(true)
    try {
      await fetch("/api/admin/relay", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ key: target.key, url }),
      })
      onChanged()
    } finally {
      setSaving(false)
    }
  }

  async function remove() {
    if (!confirm("Desconectar esta loja? O relay para de repassar os webhooks dela.")) return
    await fetch(`/api/admin/relay?key=${encodeURIComponent(target.key)}`, { method: "DELETE" })
    onChanged()
  }

  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <Link2 className="h-3.5 w-3.5 text-muted-foreground" /> {target.name}
          {!target.url && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
              aguardando webhook
            </span>
          )}
        </div>
        <button onClick={remove} className="shrink-0 rounded-lg border border-border p-1.5 text-red-600 hover:bg-red-50" title="Desconectar">
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-3">
        <CopyBtn text={buildAgentPrompt(notifyUrl, target.secret)} label="Copiar prompt pro agente da loja" />
        <p className="mt-1 text-[11px] text-muted-foreground">
          Cole no agente (Claude Code/Cursor) da outra loja — ele configura tudo e te devolve o webhook.
        </p>
      </div>

      <div className="mt-3 space-y-1.5">
        <Field label="notify URL (vai no checkout da loja)" value={notifyUrl} small />
        <Field label="segredo (RELAY_SECRET da loja)" value={target.secret} small />
      </div>

      <div className="mt-3">
        <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Webhook de destino (cole o que o agente te devolver)
        </div>
        <div className="flex items-center gap-2">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://loja-de-tras/api/webhooks/pagouai"
            className="min-w-0 flex-1 rounded-md border border-border bg-background px-2 py-1.5 text-xs outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={saveUrl}
            disabled={!dirty || saving}
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground disabled:opacity-40"
          >
            {saving ? "…" : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  )
}

export function RelayPanel() {
  const [data, setData] = useState<Data | null>(null)
  const [origin, setOrigin] = useState("")
  const [name, setName] = useState("")
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const load = useCallback(async () => {
    const r = await fetch("/api/admin/relay", { cache: "no-store" })
    const d = await r.json().catch(() => null)
    if (d) setData(d)
  }, [])

  useEffect(() => {
    load()
    const t = setInterval(load, 8000)
    return () => clearInterval(t)
  }, [load])

  const notifyUrl = (key: string) => `${origin}/api/webhooks/payment/${key}`

  async function connect() {
    if (!name.trim()) {
      setMsg({ ok: false, text: "Dê um apelido pra loja (ex: Loja B)." })
      return
    }
    setBusy(true)
    setMsg(null)
    try {
      const r = await fetch("/api/admin/relay", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(d?.error || "Erro ao conectar.")
      setName("")
      await load()
      setMsg({ ok: true, text: "Loja criada. Copie o prompt no card dela e cole no agente da outra loja." })
    } catch (e: any) {
      setMsg({ ok: false, text: e?.message || "Erro ao conectar." })
    } finally {
      setBusy(false)
    }
  }

  const targets = data ? Object.values(data.targets) : []
  const log = data?.log ?? []

  return (
    <div className="space-y-6">
      {data && !data.kvOk && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          KV (Upstash) não configurado — sem relay. Provisione o Upstash na Vercel pra conectar lojas.
        </div>
      )}

      <div className="rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
        <strong className="text-foreground">Como funciona:</strong> crie uma loja aqui (só o apelido) → copie o{" "}
        <strong>prompt pro agente</strong> no card dela e cole no agente (Claude Code/Cursor) da loja nova → o agente
        configura a loja e te devolve o webhook → cole o webhook no card. Pronto: o gateway só vê o domínio desta loja.
      </div>

      {/* Criar loja */}
      <section>
        <h3 className="mb-2 text-sm font-bold text-foreground">Nova loja mascarada</h3>
        <div className="flex flex-wrap gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Apelido (ex: Loja B)"
            className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={connect}
            disabled={busy}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-50"
          >
            <Plus className="h-4 w-4" /> Criar
          </button>
        </div>
        {msg && <p className={`mt-2 text-sm ${msg.ok ? "text-emerald-700" : "text-red-600"}`}>{msg.text}</p>}
      </section>

      {/* Lojas conectadas */}
      <section>
        <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-foreground">
          <Sparkles className="h-4 w-4 text-primary" /> Lojas ({targets.length})
        </h3>
        {targets.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
            Nenhuma loja ainda. Crie uma acima.
          </div>
        ) : (
          <div className="space-y-2">
            {targets.map((t) => (
              <TargetCard key={t.key} target={t} notifyUrl={notifyUrl(t.key)} onChanged={load} />
            ))}
          </div>
        )}
      </section>

      {/* Log ao vivo */}
      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">Tráfego recente</h3>
          <button onClick={load} className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <RefreshCw className="h-3 w-3" /> Atualizar
          </button>
        </div>
        {log.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
            Nenhum evento ainda. Quando um pagamento passar pelo relay, aparece aqui.
          </div>
        ) : (
          <div className="space-y-2">
            {log.map((e) => {
              const open = expanded === e.id
              return (
                <div key={e.id} className="rounded-lg border border-border bg-card text-xs">
                  <button
                    onClick={() => setExpanded(open ? null : e.id)}
                    className="w-full p-3 text-left"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-foreground">{e.name}</span>
                      <span className="text-muted-foreground">{fmt(e.ts)}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
                      {e.status && <span>status: <strong className="text-foreground">{e.status}</strong></span>}
                      {e.amount ? <span>{brl(e.amount)}</span> : null}
                      {e.txid && <span className="break-all">txid: {String(e.txid).slice(0, 16)}…</span>}
                      {e.forwarded ? (
                        <span
                          className={`rounded-full px-2 py-0.5 font-bold ${
                            e.forwardStatus && e.forwardStatus < 300 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          entregue {e.forwardStatus}
                        </span>
                      ) : (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 font-bold text-red-700">
                          falhou{e.error ? ` · ${e.error}` : ""}
                        </span>
                      )}
                      <span className="ml-auto text-[10px] text-muted-foreground">{open ? "▲ fechar" : "▼ ver payload"}</span>
                    </div>
                  </button>
                  {open && (
                    <div className="space-y-2 border-t border-border px-3 pb-3 pt-2">
                      <div>
                        <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Payload recebido do gateway
                        </div>
                        <pre className="max-h-64 overflow-auto rounded-md bg-muted p-2 font-mono text-[11px] leading-relaxed text-foreground">
                          {pretty(e.payload) || "(não capturado)"}
                        </pre>
                      </div>
                      {e.response !== undefined && (
                        <div>
                          <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                            Resposta da loja de trás
                          </div>
                          <pre className="max-h-40 overflow-auto rounded-md bg-muted p-2 font-mono text-[11px] leading-relaxed text-foreground">
                            {pretty(e.response) || "(vazia)"}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
