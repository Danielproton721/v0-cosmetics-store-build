import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"

export const metadata = {
  title: "Politica de Privacidade | ConfortBem",
  description: "Entenda como a ConfortBem trata informacoes e dados pessoais.",
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
          Politica de Privacidade
        </h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-[#525252] md:text-base">
          <p>
            A ConfortBem respeita a sua privacidade e utiliza informacoes pessoais
            apenas para processar pedidos, prestar atendimento, melhorar a
            experiencia de compra e cumprir obrigacoes legais.
          </p>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Informacoes coletadas
            </h2>
            <p className="mt-2">
              Podemos coletar dados como nome, e-mail, telefone, endereco de
              entrega, dados de pagamento processados por parceiros seguros e
              informacoes de navegacao no site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Uso das informacoes
            </h2>
            <p className="mt-2">
              Os dados sao usados para confirmar compras, enviar atualizacoes de
              pedido, responder solicitacoes, prevenir fraudes e melhorar nossos
              servicos.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Compartilhamento
            </h2>
            <p className="mt-2">
              Compartilhamos informacoes somente quando necessario com parceiros de
              pagamento, entrega, tecnologia e atendimento, sempre dentro da
              finalidade da operacao.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Seus direitos
            </h2>
            <p className="mt-2">
              Voce pode solicitar acesso, correcao ou exclusao de dados pessoais
              entrando em contato pelo e-mail informado no rodape da loja.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
