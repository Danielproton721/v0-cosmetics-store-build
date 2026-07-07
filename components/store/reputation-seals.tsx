// Selos de reputação REAIS da loja (Loja Protegida + RA1000 no Reclame Aqui).
// Prova de confiança de terceiros — o gatilho que mais reduz abandono por medo.
//
// Os selos têm cores OPOSTAS: "Loja Protegida" tem letra branca (some no claro),
// o Reclame Aqui tem verde escuro (some no escuro). Por isso cada modo protege
// o selo que precisaria: em fundo claro, chip escuro no Loja Protegida; em fundo
// escuro, chip claro no Reclame Aqui.
export function ReputationSeals({
  className = "",
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-3 ${className}`}>
      {onDark ? (
        <img
          src="/selos/loja-protegida.png"
          alt="Loja Protegida — Compra 100% Segura"
          width={276}
          height={60}
          className="h-9 w-auto"
          loading="lazy"
        />
      ) : (
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
      )}

      <img
        src="/selos/ra1000.png"
        alt="Selo RA1000 — melhor reputação no Reclame Aqui"
        width={40}
        height={40}
        className="h-11 w-11"
        loading="lazy"
      />

      {onDark ? (
        <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5">
          <img
            src="/selos/reclame-aqui.png"
            alt="Reclame Aqui"
            width={257}
            height={41}
            className="h-5 w-auto"
            loading="lazy"
          />
        </span>
      ) : (
        <img
          src="/selos/reclame-aqui.png"
          alt="Reclame Aqui"
          width={257}
          height={41}
          className="h-5 w-auto"
          loading="lazy"
        />
      )}
    </div>
  )
}
