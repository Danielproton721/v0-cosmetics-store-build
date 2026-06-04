const HERO_BANNER_IMAGE = "/images/banner-home-principal.png"

export function Hero() {
  return (
    <section className="bg-[#ffffff]">
      <div className="mx-auto w-full max-w-[1600px]">
        <img
          src={HERO_BANNER_IMAGE}
          alt="Banner principal Fio Nobre"
          className="block h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
