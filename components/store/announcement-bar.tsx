import { Truck, Flame, CreditCard, RefreshCw, ShieldCheck } from "lucide-react"

// Faixa de gatilhos rolando no topo — movimento constante + benefícios "na cara".
const ITEMS = [
  { Icon: Truck, text: "FRETE GRÁTIS ACIMA DE R$199" },
  { Icon: Flame, text: "OFERTAS COM ATÉ 50% OFF" },
  { Icon: CreditCard, text: "PARCELE EM ATÉ 12X" },
  { Icon: RefreshCw, text: "TROCA FÁCIL EM 30 DIAS" },
  { Icon: ShieldCheck, text: "COMPRA 100% SEGURA" },
]

function Sequence() {
  return (
    <>
      {ITEMS.map(({ Icon, text }) => (
        <span key={text} className="mx-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide">
          <Icon size={14} className="shrink-0" />
          {text}
          <span className="ml-6 opacity-50">•</span>
        </span>
      ))}
    </>
  )
}

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 py-2 text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {/* Duas cópias em sequência = loop contínuo sem emenda */}
        <Sequence />
        <Sequence />
      </div>
    </div>
  )
}
