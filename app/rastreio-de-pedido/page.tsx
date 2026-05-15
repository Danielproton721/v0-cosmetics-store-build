import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "Rastreio de Pedido | ConfortBem",
  description: "Acompanhe as informações de envio do seu pedido ConfortBem.",
}

export default function RastreioDePedidoPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
          Ajuda
        </p>
        <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
          Rastreio de Pedido
        </h1>

        <div className="mt-6 rounded-2xl bg-[#f9f9f9] p-5 md:p-6">
          <p className="text-sm leading-7 text-[#525252] md:text-base">
            As atualizações de envio são encaminhadas para o e-mail informado no
            checkout assim que o pedido é preparado e postado.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#525252] md:text-base">
            Se você já recebeu um código de rastreio e precisa de ajuda, envie o
            número do pedido para contato@confortbem.com.br.
          </p>
        </div>

        <a
          href="mailto:contato@confortbem.com.br"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#1a1a1a] px-6 text-sm font-bold uppercase tracking-wide text-[#ffffff] transition-colors hover:bg-[#333333]"
        >
          Falar com atendimento
        </a>
      </section>

      <Footer />
    </main>
  )
}
