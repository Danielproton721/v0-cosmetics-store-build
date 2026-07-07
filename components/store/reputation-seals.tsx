// Selos de reputação REAIS da loja (Loja Protegida + RA1000 no Reclame Aqui).
// Prova de confiança de terceiros — o gatilho que mais reduz abandono por medo.
// PNGs transparentes; o "Loja Protegida" tem texto branco, então vai num chip
// escuro pra continuar legível sobre fundo claro.
export function ReputationSeals({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-3 ${className}`}>
      <span className="inline-flex items-center rounded-lg bg-[#1a1a1a] px-3 py-1.5">
        <img
          src="/selos/loja-protegida.png"
          alt="Loja Protegida — Compra 100% Segura"
          width={276}
          height={60}
          className="h-8 w-auto"
          loading="lazy"
        />
      </span>
      <img
        src="/selos/ra1000.png"
        alt="Selo RA1000 — melhor reputação no Reclame Aqui"
        width={40}
        height={40}
        className="h-11 w-11"
        loading="lazy"
      />
      <img
        src="/selos/reclame-aqui.png"
        alt="Reclame Aqui"
        width={257}
        height={41}
        className="h-5 w-auto"
        loading="lazy"
      />
    </div>
  )
}
