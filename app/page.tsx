import Link from "next/link"
import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { ProductSection } from "@/components/store/product-section"
import { Footer } from "@/components/store/footer"
import { TrustStrip } from "@/components/store/trust-strip"
import { getProductsByCategory } from "@/lib/products"

const roupas365Products = getProductsByCategory("Roupas de Cama 365")
const maisVendidosProducts = getProductsByCategory("Mais Vendidos")
const novidadesProducts = getProductsByCategory("Novidades")
const jogosLencolProducts = getProductsByCategory("Jogos de Lençol")

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <Hero />

      <TrustStrip />

      <ProductSection
        title="Novidades"
        products={novidadesProducts}
        collectionHref="/colecoes/novidades"
      />

      <ProductSection
        title="Mais Vendidos"
        products={maisVendidosProducts}
        collectionHref="/colecoes/mais-vendidos"
      />

      {/* Promotional Banner — coloque a imagem em /public/images/banner-promo.jpg */}
      <Link href="/colecoes/jogos-de-lencol" className="block w-full">
        <img
          src="/images/banner-promo.jpg"
          alt="Banner Promocional"
          className="w-full object-cover"
          style={{ maxHeight: "300px" }}
        />
      </Link>

      <ProductSection
        title="Roupas de Cama 365"
        products={roupas365Products}
        bgClass="bg-[#f5f5f5]"
        collectionHref="/colecoes/roupas-de-cama-365"
      />

      {/* Promotional Banner 2 — coloque a imagem em /public/images/banner-promo-2.jpg */}
      <Link href="/colecoes/roupas-de-cama-365" className="block w-full">
        <img
          src="/images/banner-promo-2.jpg"
          alt="Banner Promocional 2"
          className="w-full object-cover"
          style={{ maxHeight: "300px" }}
        />
      </Link>

      <ProductSection
        title="Jogos de Lençol"
        products={jogosLencolProducts}
        bgClass="bg-[#ffffff]"
        collectionHref="/colecoes/jogos-de-lencol"
      />

      <section className="bg-[#ffffff] px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f0e8] md:aspect-[21/9]">
            <img
              src="/images/fachadaia.png"
              alt="Fachada da loja ConfortBem"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto max-w-2xl px-2 pt-7 text-center md:pt-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
              Sobre nos
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] md:text-4xl">
              Conforto escolhido para a rotina da sua casa
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5f5f] md:text-base">
              A ConfortBem nasceu para reunir produtos de cama, banho e enxoval
              com toque macio, bom acabamento e visual acolhedor. Cada colecao e
              pensada para deixar sua casa mais bonita, pratica e confortavel no
              dia a dia.
            </p>
            <Link
              href="/sobre-nos"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#1a1a1a] px-7 text-xs font-bold uppercase tracking-wide text-[#ffffff] transition-colors hover:bg-[#333333]"
            >
              Conhecer a loja
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
