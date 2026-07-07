import { ShieldCheck, Lock, BadgeCheck, RefreshCw } from "lucide-react"

// Selos de segurança REAIS (a loja roda em HTTPS/SSL) — reduzem a desconfiança
// que faz ~1 em 5 clientes abandonar o checkout. Ícones próprios (sem imagem
// externa que possa falhar) pra não passar sensação de selo "colado".
const SEALS = [
  { Icon: ShieldCheck, title: "Compra 100% Segura", sub: "ambiente protegido" },
  { Icon: Lock, title: "Dados Criptografados", sub: "conexão SSL" },
  { Icon: BadgeCheck, title: "Pagamento Verificado", sub: "PIX e cartão" },
  { Icon: RefreshCw, title: "Troca Garantida", sub: "em 30 dias" },
]

export function SecuritySeals({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid grid-cols-2 gap-2 sm:grid-cols-4 ${compact ? "" : "mx-auto max-w-3xl px-4"}`}
    >
      {SEALS.map(({ Icon, title, sub }) => (
        <div
          key={title}
          className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2.5"
        >
          <Icon className="h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2.2} />
          <div className="leading-tight">
            <p className="text-[12px] font-bold text-[#1a1a1a]">{title}</p>
            <p className="text-[10px] text-[#737373]">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
