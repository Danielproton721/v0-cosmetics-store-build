import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "FAQ | ConfortBem",
  description: "Perguntas frequentes sobre compras, entrega e atendimento na ConfortBem.",
}

const questions = [
  {
    question: "Como acompanho meu pedido?",
    answer:
      "Apos a confirmacao do pagamento, voce recebe as atualizacoes do pedido pelo e-mail cadastrado na compra.",
  },
  {
    question: "Quais formas de pagamento sao aceitas?",
    answer:
      "Aceitamos Pix e cartoes de credito conforme as opcoes exibidas no checkout.",
  },
  {
    question: "Os produtos tem garantia?",
    answer:
      "Sim. Em caso de defeito de fabricacao ou problema no recebimento, entre em contato com nosso atendimento para avaliacao.",
  },
  {
    question: "Posso trocar um produto?",
    answer:
      "Sim. As solicitacoes de troca seguem os prazos e condicoes informados na pagina de Trocas e Devolucoes.",
  },
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
          Ajuda
        </p>
        <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
          FAQ
        </h1>

        <div className="mt-7 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
          {questions.map((item) => (
            <div key={item.question} className="py-5">
              <h2 className="text-base font-bold text-[#1a1a1a]">
                {item.question}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#525252]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
