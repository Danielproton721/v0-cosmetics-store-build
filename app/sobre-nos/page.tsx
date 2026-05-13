import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "Sobre Nos | ConfortBem",
  description: "Conheca a ConfortBem e o cuidado por tras dos nossos enxovais.",
}

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f0e8] shadow-sm md:aspect-[21/9]">
          <img
            src="/images/fachadaia.png"
            alt="Fachada da loja ConfortBem"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl pt-8 text-center md:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
            A Loja
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
            Sobre Nos
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#525252] md:text-base">
            <p>
              A ConfortBem nasceu para ajudar voce a montar uma casa mais
              confortavel, bonita e acolhedora, com produtos escolhidos para o uso
              real do dia a dia.
            </p>
            <p>
              Trabalhamos com cama, banho e decoracao pensando em toque,
              durabilidade e acabamento. Cada colecao e organizada para facilitar
              a escolha de pecas que combinem com o seu estilo e com a rotina da
              sua casa.
            </p>
            <p>
              Nosso compromisso e oferecer uma experiencia de compra simples,
              segura e transparente, desde a escolha do produto ate a entrega.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
