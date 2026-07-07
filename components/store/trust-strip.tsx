import { Truck, ShieldCheck, RefreshCw, Star, CreditCard } from "lucide-react"

// Faixa de confiança "na cara": ícones grandes e coloridos com os benefícios que
// destravam a compra do público de massa. Sem carrossel — tudo visível de uma vez.
const TRUST_ITEMS = [
  { Icon: Truck, title: "Frete grátis", sub: "acima de R$199", bg: "bg-emerald-100", fg: "text-emerald-600" },
  { Icon: ShieldCheck, title: "Compra segura", sub: "site protegido", bg: "bg-blue-100", fg: "text-blue-600" },
  { Icon: RefreshCw, title: "Troca fácil", sub: "em 30 dias", bg: "bg-orange-100", fg: "text-orange-600" },
  { Icon: Star, title: "Bem avaliada", sub: "no Reclame AQUI", bg: "bg-amber-100", fg: "text-amber-600" },
  { Icon: CreditCard, title: "Até 12x", sub: "no cartão", bg: "bg-violet-100", fg: "text-violet-600" },
]

export function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
          {TRUST_ITEMS.map(({ Icon, title, sub, bg, fg }) => (
            <div
              key={title}
              className="flex min-w-[150px] shrink-0 items-center gap-2.5 md:min-w-0 md:flex-col md:gap-2 md:text-center"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${bg}`}>
                <Icon className={`h-5 w-5 ${fg}`} strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-[#1a1a1a]">{title}</p>
                <p className="text-[11px] text-[#737373]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
