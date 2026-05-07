import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { ProductSection } from "@/components/store/product-section"
import { Footer } from "@/components/store/footer"
import { products } from "@/lib/products"

const roupas365Products = products.filter(p => p.category === "Roupas de Cama 365")
const maisVendidosProducts = products.filter(p => p.category === "Mais Vendidos")
const jogosLencolProducts = products.filter(p => p.category === "Jogos de Lençol")

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <Hero />

      <ProductSection
        title="Mais Vendidos"
        products={maisVendidosProducts}
      />

      {/* Promotional Banner — coloque a imagem em /public/images/banner-promo.jpg */}
      <a href="/colecoes/jogos-de-lencol" className="block w-full">
        <img
          src="/images/banner-promo.jpg"
          alt="Banner Promocional"
          className="w-full object-cover"
          style={{ maxHeight: "300px" }}
        />
      </a>

      <ProductSection
        title="Roupas de Cama 365"
        products={roupas365Products}
        bgClass="bg-[#f5f5f5]"
      />

      {/* Promotional Banner 2 — coloque a imagem em /public/images/banner-promo-2.jpg */}
      <a href="/colecoes/roupas-de-cama-365" className="block w-full">
        <img
          src="/images/banner-promo-2.jpg"
          alt="Banner Promocional 2"
          className="w-full object-cover"
          style={{ maxHeight: "300px" }}
        />
      </a>

      <ProductSection
        title="Jogos de Lençol"
        products={jogosLencolProducts}
        bgClass="bg-[#ffffff]"
      />

      <Footer />
    </main>
  )
}
