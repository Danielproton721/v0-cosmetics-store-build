"use client"

import { useEffect, useState } from "react"

type Day = { date: string; count: number }

// Histórico de visitantes únicos por dia (últimos 7 dias). Busca UMA vez ao abrir
// o painel (não fica em poll) → custo de KV desprezível.
export function VisitorsHistory() {
  const [days, setDays] = useState<Day[] | null>(null)

  useEffect(() => {
    let stopped = false
    fetch("/api/presence?range=7", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (!stopped && Array.isArray(d?.days)) setDays(d.days)
      })
      .catch(() => {})
    return () => {
      stopped = true
    }
  }, [])

  if (!days || days.length === 0) return null

  const max = Math.max(1, ...days.map((d) => d.count))

  return (
    <div className="mb-5 rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-foreground">Visitantes por dia</h2>
        <span className="text-xs text-muted-foreground">últimos 7 dias · únicos</span>
      </div>
      <div className="flex items-end justify-between gap-2">
        {days.map((d) => {
          const label = weekday(d.date)
          const h = Math.round((d.count / max) * 56) // altura máx. 56px
          return (
            <div key={d.date} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="text-xs font-bold text-foreground">{d.count}</span>
              <div
                className="w-full max-w-[38px] rounded-md bg-primary/80"
                style={{ height: `${Math.max(h, 3)}px` }}
                title={`${d.date}: ${d.count} visitante(s)`}
              />
              <span className="text-[10px] text-muted-foreground">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// "2026-07-06" → "seg" (dia da semana curto, sem depender de fuso do browser).
function weekday(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return ""
  const names = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]
  // Constrói em UTC pra o índice do dia não escorregar pelo fuso local.
  const idx = new Date(Date.UTC(y, m - 1, d)).getUTCDay()
  return names[idx] ?? ""
}
