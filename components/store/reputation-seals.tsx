// Selos de reputação REAIS da loja (Loja Protegida + RA1000 no Reclame Aqui).
// Prova de confiança de terceiros — o gatilho que mais reduz abandono por medo.
export function ReputationSeals({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-3 ${className}`}>
      <img
        src="/selos/loja-protegida.jpeg"
        alt="Loja Protegida — Compra 100% Segura"
        width={276}
        height={60}
        className="h-11 w-auto rounded-md"
        loading="lazy"
      />
      <span className="flex items-center gap-2">
        <img
          src="/selos/ra1000.jpeg"
          alt="Selo RA1000 — melhor reputação no Reclame Aqui"
          width={40}
          height={40}
          className="h-10 w-10"
          loading="lazy"
        />
        <img
          src="/selos/reclame-aqui.jpeg"
          alt="Reclame Aqui"
          width={257}
          height={41}
          className="h-5 w-auto"
          loading="lazy"
        />
      </span>
    </div>
  )
}
