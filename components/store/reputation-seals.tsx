// Selos de reputação REAIS da loja (Loja Protegida + RA1000 no Reclame Aqui),
// cada um dentro de uma caixa no mesmo padrão dos selos de garantia.
// O "Loja Protegida" tem letra branca → caixa escura; os outros (verdes) →
// caixa branca. Assim funciona tanto em fundo claro quanto escuro.
export function ReputationSeals({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      <div className="flex items-center justify-center rounded-xl border border-white/10 bg-[#1a1a1a] px-3 py-3">
        <img
          src="/selos/loja-protegida.png"
          alt="Loja Protegida — Compra 100% Segura"
          width={276}
          height={60}
          className="h-8 w-auto"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center rounded-xl border border-emerald-100 bg-white px-3 py-3">
        <img
          src="/selos/ra1000.png"
          alt="Selo RA1000 — melhor reputação no Reclame Aqui"
          width={40}
          height={40}
          className="h-11 w-11"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center rounded-xl border border-emerald-100 bg-white px-3 py-3">
        <img
          src="/selos/reclame-aqui.png"
          alt="Reclame Aqui"
          width={257}
          height={41}
          className="h-6 w-auto"
          loading="lazy"
        />
      </div>
    </div>
  )
}
