"use client"

import { useEffect, useMemo, useState } from "react"
import { DayPicker, type DateRange } from "react-day-picker"
import { ptBR } from "date-fns/locale"
import { format, startOfMonth, subDays } from "date-fns"
import { CalendarDays, ChevronDown } from "lucide-react"
import * as Popover from "@radix-ui/react-popover"
import "react-day-picker/style.css"

type Day = { date: string; count: number }
type Report = { days: Day[]; total: number }

// Data local → "AAAA-MM-DD" (usa os componentes que o usuário VÊ no calendário,
// sem conversão de fuso — a loja e o operador são BR, bate com o servidor).
function isoLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

const MAX_DAYS = 45

// Presets calculados a partir de "hoje" (meia-noite local).
function buildPresets(today: Date) {
  const d = (n: number) => subDays(today, n)
  return [
    { key: "today", label: "Hoje", from: today, to: today },
    { key: "yesterday", label: "Ontem", from: d(1), to: d(1) },
    { key: "7", label: "Últimos 7 dias", from: d(6), to: today },
    { key: "14", label: "Últimos 14 dias", from: d(13), to: today },
    { key: "month", label: "Este mês", from: startOfMonth(today), to: today },
    { key: "30", label: "Últimos 30 dias", from: d(29), to: today },
    { key: "all", label: "Todo o período", from: d(MAX_DAYS - 1), to: today },
  ] as const
}

// Visitantes únicos por período, com seletor de intervalo estilo Google.
export function VisitorsHistory() {
  const today = useMemo(() => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return t
  }, [])
  const presets = useMemo(() => buildPresets(today), [today])

  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<DateRange>({ from: presets[2].from, to: presets[2].to })
  const [presetKey, setPresetKey] = useState<string>("7")
  // Rascunho enquanto o popover está aberto (só "Aplicar" confirma o range custom).
  const [draft, setDraft] = useState<DateRange | undefined>(range)

  const [report, setReport] = useState<Report | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchRange = (r: DateRange) => {
    if (!r.from || !r.to) return
    setLoading(true)
    fetch(`/api/presence?from=${isoLocal(r.from)}&to=${isoLocal(r.to)}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((d) => {
        if (Array.isArray(d?.days)) setReport({ days: d.days, total: Number(d.total) || 0 })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  // Carrega o range inicial (últimos 7 dias) uma vez.
  useEffect(() => {
    fetchRange(range)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const applyPreset = (p: { key: string; from: Date; to: Date }) => {
    const r = { from: p.from, to: p.to }
    setRange(r)
    setDraft(r)
    setPresetKey(p.key)
    setOpen(false)
    fetchRange(r)
  }

  const applyDraft = () => {
    if (!draft?.from) return
    const r: DateRange = { from: draft.from, to: draft.to ?? draft.from }
    setRange(r)
    setPresetKey("custom")
    setOpen(false)
    fetchRange(r)
  }

  const triggerLabel = (() => {
    const p = presets.find((x) => x.key === presetKey)
    if (p) return p.label
    if (range.from && range.to) {
      const same = isoLocal(range.from) === isoLocal(range.to)
      return same
        ? format(range.from, "d 'de' MMM", { locale: ptBR })
        : `${format(range.from, "d MMM", { locale: ptBR })} – ${format(range.to, "d MMM", { locale: ptBR })}`
    }
    return "Selecionar período"
  })()

  return (
    <div className="mb-5 rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold text-foreground">Visitantes únicos</h2>
          <p className="text-xs text-muted-foreground">no período selecionado</p>
        </div>

        <Popover.Root open={open} onOpenChange={(o) => { setOpen(o); if (o) setDraft(range) }}>
          <Popover.Trigger asChild>
            <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              {triggerLabel}
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="end"
              sideOffset={8}
              className="z-50 w-[min(92vw,560px)] rounded-xl border border-border bg-card p-0 shadow-xl outline-none"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Presets */}
                <div className="flex flex-row flex-wrap gap-1 border-b border-border p-2 sm:w-44 sm:flex-col sm:flex-nowrap sm:border-b-0 sm:border-r">
                  {presets.map((p) => (
                    <button
                      key={p.key}
                      onClick={() => applyPreset(p)}
                      className={`rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                        presetKey === p.key
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Calendário custom */}
                <div className="flex flex-col p-3">
                  <DayPicker
                    mode="range"
                    locale={ptBR}
                    selected={draft}
                    onSelect={(r) => { setDraft(r); setPresetKey("custom") }}
                    disabled={{ before: subDays(today, MAX_DAYS - 1), after: today }}
                    className="rdp-fn"
                  />
                  <div className="mt-2 flex items-center justify-end gap-2 border-t border-border pt-3">
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={applyDraft}
                      disabled={!draft?.from}
                      className="rounded-lg bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground disabled:opacity-50"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>

      {/* Total do período */}
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">
          {loading ? "…" : (report?.total ?? 0).toLocaleString("pt-BR")}
        </span>
        <span className="text-xs text-muted-foreground">visitantes únicos</span>
      </div>

      {/* Gráfico por dia */}
      <RangeChart days={report?.days ?? []} loading={loading} />

      {/* Estilo do calendário casado com a marca (dourado) */}
      <style jsx global>{`
        .rdp-fn {
          --rdp-accent-color: #d4a017;
          --rdp-accent-background-color: #f6eccf;
          --rdp-today-color: #d4a017;
          --rdp-day-width: 34px;
          --rdp-day-height: 34px;
          --rdp-day_button-width: 34px;
          --rdp-day_button-height: 34px;
          margin: 0;
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}

function RangeChart({ days, loading }: { days: Day[]; loading: boolean }) {
  if (loading && days.length === 0) {
    return <div className="h-20 animate-pulse rounded-md bg-muted" />
  }
  if (days.length === 0) {
    return <p className="text-sm text-muted-foreground">Sem dados no período.</p>
  }
  const max = Math.max(1, ...days.map((d) => d.count))
  const showLabels = days.length <= 14

  return (
    <div className="flex items-end gap-1 overflow-x-auto">
      {days.map((d) => {
        const h = Math.round((d.count / max) * 64)
        return (
          <div key={d.date} className="flex min-w-[16px] flex-1 flex-col items-center gap-1">
            {showLabels && <span className="text-[10px] font-bold text-foreground">{d.count}</span>}
            <div
              className="w-full max-w-[40px] rounded-sm bg-primary/80"
              style={{ height: `${Math.max(h, 3)}px` }}
              title={`${labelDay(d.date)}: ${d.count} visitante(s)`}
            />
            {showLabels && <span className="whitespace-nowrap text-[10px] text-muted-foreground">{labelDay(d.date)}</span>}
          </div>
        )
      })}
    </div>
  )
}

// "2026-07-06" → "06/07" (sem depender do fuso do browser).
function labelDay(iso: string): string {
  const [, m, d] = iso.split("-")
  return `${d}/${m}`
}
