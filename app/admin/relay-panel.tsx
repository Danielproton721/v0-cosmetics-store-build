"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Copy, Link2, Plus, RefreshCw, Trash2, X } from "lucide-react"

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

function CopyBtn({ text }: { text: string }) {
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
      {done ? "Copiado" : "Copiar"}
    </button>
  )
}

export function RelayPanel() {
  const [data, setData] = useState<Data | null>(null)
  const [origin, setOrigin] = useState("")
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  const [justCreated, setJustCreated] = useState<RelayTarget | null>(null)

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
    const t = setInterval(load, 8000) // log ao vivo
    return () => clearInterval(t)
  }, [load])

  const notifyUrl = (key: string) => `${origin}/api/webhooks/payment/${key}`

  async function connect() {
    if (!url.trim()) {
      setMsg({ ok: false, text: "Informe a URL do webhook da loja de trás." })
      return
    }
    setBusy(true)
    setMsg(null)
    try {
      const r = await fetch("/api/admin/relay", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, url }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(d?.error || "Erro ao conectar.")
      setJustCreated(d.target)
      setName("")
      setUrl("")
      await load()
      setMsg({ ok: true, text: "Loja conectada. Copie o endereço e o segredo abaixo." })
    } catch (e: any) {
      setMsg({ ok: false, text: e?.message || "Erro ao conectar." })
    } finally {
      setBusy(false)
    }
  }

  async function remove(key: string) {
    if (!confirm("Desconectar esta loja? O relay para de repassar os webhooks dela.")) return
    setBusy(true)
    try {
      await fetch(`/api/admin/relay?key=${encodeURIComponent(key)}`, { method: "DELETE" })
      await load()
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
        Esta loja é a <strong>fachada</strong>: o gateway só vê o domínio dela. Conecte uma loja pra receber uma URL
        neutra pra colar no checkout dela (campo <code className="font-mono">notify</code>) e um segredo. Os pagamentos
        chegam aqui e são repassados pra loja — que fica oculta.
      </div>

      {/* Conectar loja */}
      <section>
        <h3 className="mb-2 text-sm font-bold text-foreground">Conectar uma loja</h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_2fr_auto]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Apelido (ex: Loja B)"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Webhook de destino: https://loja-de-tras/api/webhooks/pagouai"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={connect}
            disabled={busy}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground disabled:opacity-50"
          >
            <Plus className="h-4 w-4" /> Conectar
          </button>
        </div>
        {msg && <p className={`mt-2 text-sm ${msg.ok ? "text-emerald-700" : "text-red-600"}`}>{msg.text}</p>}

        {justCreated && (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-emerald-800">Dados pra ligar a loja "{justCreated.name}"</span>
              <button onClick={() => setJustCreated(null)} className="text-emerald-700 hover:text-emerald-900">
                <X className="h-4 w-4" />
              </button>
            </div>
            <Field label="1) notify URL (cole no checkout da loja de trás)" value={notifyUrl(justCreated.key)} />
            <Field label="2) Segredo (RELAY_SECRET da loja de trás)" value={justCreated.secret} />
          </div>
        )}
      </section>

      {/* Lojas conectadas */}
      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">Lojas conectadas ({targets.length})</h3>
        </div>
        {targets.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
            Nenhuma loja conectada ainda.
          </div>
        ) : (
          <div className="space-y-2">
            {targets.map((t) => (
              <div key={t.key} className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Link2 className="h-3.5 w-3.5 text-muted-foreground" /> {t.name}
                    </div>
                    <div className="mt-0.5 break-all text-xs text-muted-foreground">→ {t.url}</div>
                  </div>
                  <button
                    onClick={() => remove(t.key)}
                    className="shrink-0 rounded-lg border border-border p-1.5 text-red-600 hover:bg-red-50"
                    title="Desconectar"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="mt-2 space-y-1.5">
                  <Field label="notify URL" value={notifyUrl(t.key)} small />
                  <Field label="segredo" value={t.secret} small />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Log ao vivo */}
      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">Tráfego recente</h3>
          <button
            onClick={load}
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="h-3 w-3" /> Atualizar
          </button>
        </div>
        {log.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
            Nenhum evento ainda. Quando um pagamento passar pelo relay, aparece aqui.
          </div>
        ) : (
          <div className="space-y-2">
            {log.map((e) => (
              <div key={e.id} className="rounded-lg border border-border bg-card p-3 text-xs">
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
                        e.forwardStatus && e.forwardStatus < 300
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      entregue {e.forwardStatus}
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-2 py-0.5 font-bold text-red-700">
                      falhou{e.error ? ` · ${e.error}` : ""}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
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
