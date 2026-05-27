import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "Trocas e Devoluções | Confortebem",
  description: "Informações sobre trocas, devoluções e prazos da Confortebem.",
}

export default function TrocasEDevolucoesPage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
          Ajuda
        </p>
        <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
          Trocas e Devoluções
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-[#525252] md:text-base">
          <p>
            Você pode solicitar troca ou devolução dentro do prazo informado no
            momento da compra, desde que o produto esteja sem sinais de uso, com
            embalagem preservada e acompanhado dos itens recebidos.
          </p>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Como solicitar
            </h2>
            <p className="mt-2">
              Envie uma mensagem para contato@confortebem.com.br com o número do
              pedido, nome completo, motivo da solicitação e fotos do produto, se
              houver defeito ou avaria.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Produto com avaria
            </h2>
            <p className="mt-2">
              Caso o pedido chegue com embalagem violada ou produto danificado,
              registre fotos e fale com nosso atendimento antes de descartar a
              embalagem.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Reembolso
            </h2>
            <p className="mt-2">
              Após o recebimento e análise do item devolvido, o reembolso é
              processado conforme o meio de pagamento utilizado na compra.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
