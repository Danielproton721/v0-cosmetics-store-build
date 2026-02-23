import { collections } from "@/lib/products"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { CollectionGrid } from "@/components/store/collection-grid"

export const metadata = {
  title: "Colecoes | Gota Dourada",
  description: "Explore todas as colecoes de produtos capilares Gota Dourada.",
}

export default function ColecoesPge() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      {/* Page heading */}
      <section className="px-4 pt-6 pb-2">
        <h1 className="text-xl font-bold text-[#1a1a1a] uppercase tracking-wide text-center">
          Nossas Colecoes
        </h1>
        <p className="text-xs text-[#737373] text-center mt-1.5 leading-relaxed max-w-xs mx-auto">
          Encontre a linha ideal para o seu tipo de cabelo
        </p>
      </section>

      <CollectionGrid collections={collections} />

      <Footer />
    </main>
  )
}
