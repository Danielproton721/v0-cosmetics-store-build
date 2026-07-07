import Link from "next/link"
import { Header } from "@/components/store/header"
import { AnnouncementBar } from "@/components/store/announcement-bar"
import { Hero } from "@/components/store/hero"
import { CollectionBubbleMenu } from "@/components/store/collection-bubble-menu"
import { ProductSection } from "@/components/store/product-section"
import { Footer } from "@/components/store/footer"
import { TrustStrip } from "@/components/store/trust-strip"
import { getProductsByCategory, type Product } from "@/lib/products"
import { applyOverlay } from "@/lib/catalog-runtime"

const homeProductLimit = 8

const variantWords = new Set([
  "areia",
  "azul",
  "bambu",
  "bege",
  "beige",
  "blush",
  "branco",
  "branca",
  "brown",
  "caqui",
  "chumbo",
  "cinza",
  "claro",
  "dublin",
  "escuro",
  "fendi",
  "fend",
  "grafite",
  "green",
  "grey",
  "marfim",
  "marinho",
  "marsala",
  "mostarda",
  "neve",
  "nevoa",
  "nude",
  "off",
  "olive",
  "palha",
  "perola",
  "petroleo",
  "prata",
  "rosa",
  "ros",
  "rose",
  "rosas",
  "sage",
  "stone",
  "taupe",
  "tofu",
  "verde",
  "vinho",
  "white",
])

function normalizeProductName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&amp;/g, " e ")
    .replace(/[™®]/g, "")
    .replace(/\b\d+(?:[,.]\d+)?\s*x\s*\d+(?:[,.]\d+)?(?:\s*x\s*\d+(?:[,.]\d+)?)?\s*(?:cm|m)?\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function getProductFamilyKey(product: Product) {
  const words = normalizeProductName(product.name).split(" ").filter(Boolean)

  while (words.length > 0 && variantWords.has(words[words.length - 1])) {
    words.pop()
  }

  return words.join(" ")
}

function getHomeProducts(products: Product[]) {
  const families = new Set<string>()
  const uniqueProducts: Product[] = []
  const repeatedProducts: Product[] = []

  for (const product of products) {
    const familyKey = getProductFamilyKey(product)

    if (!families.has(familyKey)) {
      families.add(familyKey)
      uniqueProducts.push(product)
    } else {
      repeatedProducts.push(product)
    }

    if (uniqueProducts.length >= homeProductLimit) break
  }

  return [...uniqueProducts, ...repeatedProducts].slice(0, homeProductLimit)
}

export default async function Home() {
  const roupas365Products = getHomeProducts(await applyOverlay(getProductsByCategory("Roupas de Cama 365")))
  const maisVendidosProducts = getHomeProducts(await applyOverlay(getProductsByCategory("Mais Vendidos")))
  const novidadesProducts = getHomeProducts(await applyOverlay(getProductsByCategory("Novidades")))
  const jogosLencolProducts = getHomeProducts(await applyOverlay(getProductsByCategory("Jogos de Lençol")))

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <AnnouncementBar />

      <Hero />

      <TrustStrip />

      <CollectionBubbleMenu />

      <ProductSection
        title="Novidades"
        products={novidadesProducts}
        collectionHref="/colecoes/novidades"
      />


      {/* Promotional Banner — coloque a imagem em /public/images/banner-promo.png */}
      <Link href="/colecoes/jogos-de-lencol" className="block w-full">
        <img
          src="/images/banner-promo.png"
          alt="Banner Promocional"
          className="w-full object-cover"
          style={{ maxHeight: "300px" }}
        />
      </Link>

      <ProductSection
        title="Mais Vendidos"
        products={maisVendidosProducts}
        collectionHref="/colecoes/mais-vendidos"
      />

      <ProductSection
        title="Roupas de Cama 365"
        products={roupas365Products}
        bgClass="bg-surface-warm"
        collectionHref="/colecoes/roupas-de-cama-365"
      />

      {/* Promotional Banner 2 — coloque a imagem em /public/images/banner-promo-2.jpg */}
      <Link href="/colecoes/roupas-de-cama-365" className="block w-full">
        <img
          src="/images/banner-promo-2.png"
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
              alt="Fachada da loja Fio Nobre"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto max-w-2xl px-2 pt-7 text-center md:pt-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4a017]">
              Sobre nós
            </p>
            <h2 className="mt-3 font-serif text-[28px] font-medium leading-tight tracking-tight text-[#1a1a1a] md:text-[42px]">
              Conforto escolhido para a rotina da sua casa
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5f5f] md:text-base">
              A Fio Nobre nasceu para reunir produtos de cama, banho e enxoval
              com toque macio, bom acabamento e visual acolhedor. Cada coleção é
              pensada para deixar sua casa mais bonita, prática e confortável no
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
