import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#10b981] pt-4 pb-0">
      {/* Decorative leaves */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="30" cy="50" rx="25" ry="40" transform="rotate(-30 30 50)" />
        </svg>
      </div>
      <div className="absolute top-4 right-0 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="70" cy="50" rx="20" ry="35" transform="rotate(20 70 50)" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="50" cy="50" rx="15" ry="30" transform="rotate(-45 50 50)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 pt-2 pb-4">
        <p className="text-[#ffffff] text-xs font-medium uppercase tracking-widest mb-1">
          Aproveite esse
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#ffffff] leading-none tracking-tight">
          {"Verão"}
        </h2>
        <p className="text-[#ffffff]/80 text-xs mt-2 tracking-wide">
          com a <span className="font-semibold text-[#ffffff]">Gota Dourada</span>
        </p>

        {/* Discount badge */}
        <div className="inline-flex items-center mt-4 bg-[#d4a017] rounded-xl px-4 py-2 shadow-lg">
          <div className="text-left mr-2">
            <p className="text-[10px] text-[#1a1a1a]/70 leading-tight uppercase">
              Todos os<br />produtos<br />com até
            </p>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-[#1a1a1a]">10</span>
            <span className="text-lg font-bold text-[#1a1a1a] ml-0.5">%</span>
          </div>
          <span className="text-xs font-bold text-[#1a1a1a] ml-1 uppercase">OFF</span>
        </div>
      </div>

      {/* Product images at bottom */}
      <div className="relative z-10 flex items-end justify-center gap-2 px-4 mt-2">
        <div className="relative w-24 h-32 md:w-32 md:h-40">
          <Image
            src="/images/product-1.jpg"
            alt="Produto fortalecimento"
            fill
            priority
            className="object-contain drop-shadow-lg"
          />
        </div>
        <div className="relative w-28 h-36 md:w-36 md:h-44 -mb-1">
          <Image
            src="/images/product-2.jpg"
            alt="Produto tratamento"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
        <div className="relative w-24 h-32 md:w-32 md:h-40">
          <Image
            src="/images/product-3.jpg"
            alt="Produto antiqueda"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
        <div className="relative w-20 h-28 md:w-28 md:h-36 hidden sm:block">
          <Image
            src="/images/product-4.jpg"
            alt="Produto biotina"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
