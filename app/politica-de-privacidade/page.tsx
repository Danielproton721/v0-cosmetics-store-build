import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "Política de Privacidade | ConfortBem",
  description: "Entenda como a ConfortBem trata informações e dados pessoais.",
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
          A Loja
        </p>
        <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
          Política de Privacidade
        </h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-[#525252] md:text-base">
          <p>
            A ConfortBem respeita a sua privacidade e utiliza informações pessoais
            apenas para processar pedidos, prestar atendimento, melhorar a
            experiência de compra e cumprir obrigações legais.
          </p>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Informações coletadas
            </h2>
            <p className="mt-2">
              Podemos coletar dados como nome, e-mail, telefone, endereço de
              entrega, dados de pagamento processados por parceiros seguros e
              informações de navegação no site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Uso das informações
            </h2>
            <p className="mt-2">
              Os dados são usados para confirmar compras, enviar atualizações de
              pedido, responder solicitações, prevenir fraudes e melhorar nossos
              serviços.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Compartilhamento
            </h2>
            <p className="mt-2">
              Compartilhamos informações somente quando necessário com parceiros de
              pagamento, entrega, tecnologia e atendimento, sempre dentro da
              finalidade da operação.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Seus direitos
            </h2>
            <p className="mt-2">
              Você pode solicitar acesso, correção ou exclusão de dados pessoais
              entrando em contato pelo e-mail informado no rodapé da loja.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
