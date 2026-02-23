import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { ProductSection } from "@/components/store/product-section"
import { Footer } from "@/components/store/footer"

const bestSellerProducts = [
  {
    id: 1,
    name: "Kit Tônico Fortalecimento Com 3 Unidades",
    price: 44.90,
    image: "/images/product-1.jpg",
    rating: 5,
    reviews: 69,
    category: "Fortalecimento",
  },
  {
    id: 2,
    name: "Tônico Milagroso Gota Dourada 200 Ml",
    price: 26.90,
    image: "/images/product-2.jpg",
    rating: 4,
    reviews: 0,
    category: "Tônicos",
  },
  {
    id: 3,
    name: "Tônico Fortalecimento Tradicional Gota Dourada 100ml",
    price: 16.90,
    image: "/images/product-3.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
  },
  {
    id: 4,
    name: "Kit 3 Tônico Fortalecimento + Milagroso Gota Dourada",
    price: 59.90,
    image: "/images/product-4.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
  },
  {
    id: 5,
    name: "Tônico Antiqueda Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-5.jpg",
    rating: 3,
    reviews: 0,
    category: "Antiqueda",
  },
  {
    id: 6,
    name: "Tônico Biotina Gota Dourada 100 Ml",
    price: 17.90,
    image: "/images/product-6.jpg",
    rating: 3,
    reviews: 0,
    category: "Tônicos",
  },
  {
    id: 7,
    name: "Tônico Extraordinário Combate à Queda Gota Dourada 100 Ml",
    price: 18.90,
    image: "/images/product-7.jpg",
    rating: 0,
    reviews: 0,
    category: "Antiqueda",
  },
  {
    id: 8,
    name: "Tônico Ricino Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-8.jpg",
    rating: 0,
    reviews: 0,
    category: "Tônicos",
  },
  {
    id: 9,
    name: "Tônico Cravo Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-1.jpg",
    rating: 0,
    reviews: 0,
    category: "Tônicos",
  },
  {
    id: 10,
    name: "Kit 3 Tônicos Fortalecimento Tradicional + 1 Tônico",
    price: 44.10,
    image: "/images/product-7.jpg",
    rating: 0,
    reviews: 0,
    category: "Fortalecimento",
  },
]

const pigmentacaoProducts = [
  {
    id: 11,
    name: "Máscara Techno Hair Desmarelador Gota Dourada",
    price: 37.90,
    image: "/images/product-9.jpg",
    rating: 0,
    reviews: 0,
    category: "Desmarelador",
  },
  {
    id: 12,
    name: "Kit Techno Hair Desmarelador Shampoo + Condicionador",
    price: 85.90,
    image: "/images/product-10.jpg",
    rating: 0,
    reviews: 0,
    category: "Desmarelador",
  },
  {
    id: 13,
    name: "Tônico Pigmentação Platinado Gota Dourada 100ml",
    price: 22.90,
    image: "/images/product-9.jpg",
    rating: 4,
    reviews: 12,
    category: "Tonalidade",
  },
  {
    id: 14,
    name: "Kit Pigmentação Completo Gota Dourada",
    price: 69.90,
    image: "/images/product-10.jpg",
    rating: 5,
    reviews: 8,
    category: "Tonalidade",
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
        categories={["Tônicos", "Fortalecimento", "Antiqueda"]}
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
