import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { ProductSection } from "@/components/store/product-section"
import { Footer } from "@/components/store/footer"

const bestSellerProducts = [
  {
    id: 1,
    name: "Kit Tonico Fortalecimento Com 3 Unidades",
    price: 44.90,
    image: "/images/product-1.jpg",
    rating: 5,
    reviews: 69,
    category: "Fortalecimento",
    slug: "kit-tonico-fortalecimento-3-unidades",
    isTest: true,
  },
  {
    id: 2,
    name: "Tonico Milagroso Gota Dourada 200 Ml",
    price: 26.90,
    image: "/images/product-2.jpg",
    rating: 4,
    reviews: 15,
    category: "Tonicos",
    slug: "tonico-milagroso-200ml",
    isTest: true,
  },
  {
    id: 3,
    name: "Tonico Fortalecimento Tradicional Gota Dourada 100ml",
    price: 16.90,
    image: "/images/product-3.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
    slug: "tonico-fortalecimento-tradicional",
    isTest: true,
  },
  {
    id: 4,
    name: "Kit 3 Tonico Fortalecimento + Milagroso Gota Dourada",
    price: 59.90,
    image: "/images/product-4.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
    isTest: true,
  },
  {
    id: 5,
    name: "Tonico Antiqueda Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-5.jpg",
    rating: 3,
    reviews: 5,
    category: "Antiqueda",
    slug: "tonico-antiqueda-100ml",
    isTest: true,
  },
  {
    id: 6,
    name: "Tonico Biotina Gota Dourada 100 Ml",
    price: 17.90,
    image: "/images/product-6.jpg",
    rating: 3,
    reviews: 2,
    category: "Tonicos",
    slug: "tonico-biotina-100ml",
    isTest: true,
  },
  {
    id: 7,
    name: "Tonico Extraordinario Combate a Queda Gota Dourada 100 Ml",
    price: 18.90,
    image: "/images/product-7.jpg",
    rating: 4,
    reviews: 3,
    category: "Antiqueda",
    slug: "tonico-extraordinario-combate-queda-100ml",
    isTest: true,
  },
  {
    id: 8,
    name: "Tonico Ricino Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-8.jpg",
    rating: 0,
    reviews: 0,
    category: "Tonicos",
    slug: "tonico-ricino-100ml",
    isTest: true,
  },
  {
    id: 9,
    name: "Tonico Cravo Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-1.jpg",
    rating: 0,
    reviews: 0,
    category: "Tonicos",
    isTest: true,
  },
  {
    id: 10,
    name: "Kit 3 Tonicos Fortalecimento Tradicional + 1 Tonico",
    price: 44.10,
    image: "/images/product-7.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
    isTest: true,
  },
]

const pigmentacaoProducts = [
  {
    id: 11,
    name: "Mascara Techno Hair Desmarelador Gota Dourada",
    price: 37.90,
    image: "/images/product-9.jpg",
    rating: 0,
    reviews: 0,
    category: "Desmarelador",
    isTest: true,
  },
  {
    id: 12,
    name: "Kit Techno Hair Desmarelador Shampoo + Condicionador",
    price: 85.90,
    image: "/images/product-10.jpg",
    rating: 0,
    reviews: 0,
    category: "Desmarelador",
    isTest: true,
  },
  {
    id: 13,
    name: "Tonico Pigmentacao Platinado Gota Dourada 100ml",
    price: 22.90,
    image: "/images/product-9.jpg",
    rating: 4,
    reviews: 12,
    category: "Tonalidade",
    isTest: true,
  },
  {
    id: 14,
    name: "Kit Pigmentacao Completo Gota Dourada",
    price: 69.90,
    image: "/images/product-10.jpg",
    rating: 5,
    reviews: 8,
    category: "Tonalidade",
    isTest: true,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <Hero />

      <ProductSection
        title="Mais Vendidos"
        products={bestSellerProducts}
        categories={["Tonicos", "Fortalecimento", "Antiqueda"]}
      />

      <ProductSection
        title="Pigmentação e Tonalidade"
        products={pigmentacaoProducts}
        categories={["Desmarelador", "Tonalidade"]}
        bgClass="bg-[#f5f5f5]"
      />

      <Footer />
    </main>
  )
}
