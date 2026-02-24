export interface ProductVariant {
  id: number
  label: string
  price: number
  compareAtPrice?: number
  image: string
  images: string[]
  available: boolean
}

export interface Product {
  id: number
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  images: string[]
  rating: number
  reviews: number
  recentSales: number
  category: string
  description: string
  benefits: string[]
  hairTypes: string[]
  needs: string[]
  howToUse: string[]
  touchTest: string[]
  precautions: string[]
  relatedSlugs: string[]
  variants?: ProductVariant[]
  variantLabel?: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "kit-tonico-fortalecimento-3-unidades",
    name: "Kit Tonico Fortalecimento Com 3 Unidades",
    price: 44.90,
    compareAtPrice: 52.90,
    image: "/images/product-1.jpg",
    images: ["/images/product-1.jpg"],
    rating: 5,
    reviews: 69,
    recentSales: 24,
    category: "Fortalecimento",
    description: "Kit completo com 3 tonicos de fortalecimento capilar Gota Dourada. Formula exclusiva que fortalece os fios desde a raiz, combatendo a quebra e proporcionando mais resistencia e brilho natural.",
    benefits: [
      "Fortalece os fios desde a raiz",
      "Combate a quebra capilar",
      "Proporciona mais resistencia",
      "Devuelve o brilho natural dos fios",
      "Estimula o crescimento saudavel"
    ],
    hairTypes: ["Cabelos fracos e quebradiços", "Cabelos finos", "Todos os tipos de cabelo"],
    needs: ["Fortalecimento", "Anti-quebra", "Crescimento"],
    howToUse: [
      "Aplique uma dose do tonico diretamente na raiz dos cabelos.",
      "Massageie suavemente com a ponta dos dedos durante 3 minutos.",
      "Deixe agir por 10 minutos antes de enxaguar.",
      "Repita o procedimento 3 vezes por semana durante 3 meses."
    ],
    touchTest: [
      "Antes de aplicar o tonico, e importante realizar a prova de toque para garantir que nao havera reacoes alergicas.",
      "Aplique uma pequena quantidade do produto no antebraco ou atras da orelha.",
      "Deixe agir de 30 a 40 minutos e depois lave o local.",
      "Aguarde 24 horas para verificar se ha algum sinal de irritacao. Se houver, nao utilize o produto."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Nao ingerir o produto.",
      "Em caso de contato com os olhos, enxague com agua em abundancia.",
      "Se houver irritacao no couro cabeludo, suspenda o uso e consulte um dermatologista."
    ],
    relatedSlugs: ["tonico-fortalecimento-tradicional", "tonico-milagroso-200ml"]
  },
  {
    id: 2,
    slug: "tonico-milagroso-200ml",
    name: "Tonico Milagroso Gota Dourada 200 Ml",
    price: 26.90,
    image: "/images/product-2.jpg",
    images: ["/images/product-2.jpg"],
    rating: 4,
    reviews: 15,
    recentSales: 18,
    category: "Tonicos",
    description: "O Tonico Milagroso Gota Dourada 200ml e um produto revolucionario para o cuidado capilar. Sua formula exclusiva oferece um tratamento eficaz e rapido, com resultados visiveis apos o uso continuo.",
    benefits: [
      "Revitaliza os fios danificados",
      "Proporciona brilho intenso",
      "Fortalece a fibra capilar",
      "Hidrata profundamente"
    ],
    hairTypes: ["Cabelos danificados", "Cabelos secos", "Todos os tipos de cabelo"],
    needs: ["Revitalizacao", "Hidratacao", "Brilho"],
    howToUse: [
      "Aplique o tonico na raiz dos cabelos limpos.",
      "Massageie suavemente com movimentos circulares.",
      "Deixe agir por 15 minutos.",
      "Enxague com agua morna."
    ],
    touchTest: [
      "Aplique uma pequena quantidade no antebraco.",
      "Aguarde 24 horas antes do uso completo.",
      "Se houver irritacao, nao utilize o produto."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Uso externo.",
      "Evitar contato com os olhos."
    ],
    relatedSlugs: ["kit-tonico-fortalecimento-3-unidades", "tonico-biotina-100ml"]
  },
  {
    id: 3,
    slug: "tonico-fortalecimento-tradicional",
    name: "Tonico Fortalecimento Tradicional Gota Dourada 100ml",
    price: 16.90,
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg"],
    rating: 0,
    reviews: 0,
    recentSales: 8,
    category: "Fortalecimento",
    description: "O Tonico de Fortalecimento Tradicional Gota Dourada 100ml e um classico da marca. Formula concentrada que atua diretamente na raiz, estimulando a regeneracao capilar e proporcionando mais forca e vitalidade aos fios.",
    benefits: [
      "Combate a queda de cabelo desde a raiz",
      "Estimula o crescimento saudavel dos fios",
      "Reduz cabelos quebradiços e frageis",
      "Proporciona forca e vitalidade aos cabelos",
      "Melhora a textura e o brilho natural dos fios"
    ],
    hairTypes: ["Cabelos com queda", "Cabelos fracos", "Cabelos finos"],
    needs: ["Fortalecimento", "Anti-queda", "Crescimento"],
    howToUse: [
      "Faca a prova de toque antes de usar o produto.",
      "Aplique uma dose do tonico diretamente na raiz dos cabelos.",
      "Massageie suavemente com a ponta dos dedos durante 3 minutos.",
      "Deixe agir por 10 minutos antes de enxaguar.",
      "Repita o procedimento 3 vezes por semana durante 3 meses."
    ],
    touchTest: [
      "Antes de aplicar o tonico, realize a prova de toque.",
      "Aplique uma pequena quantidade no antebraco ou atras da orelha.",
      "Deixe agir de 30 a 40 minutos e depois lave o local.",
      "Aguarde 24 horas para verificar se ha algum sinal de irritacao."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Nao ingerir o produto.",
      "Em caso de contato com os olhos, enxague com agua em abundancia.",
      "Se houver irritacao no couro cabeludo, suspenda o uso."
    ],
    relatedSlugs: ["kit-tonico-fortalecimento-3-unidades", "tonico-antiqueda-100ml"]
  },
  {
    id: 5,
    slug: "tonico-antiqueda-100ml",
    name: "Tonico Antiqueda Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-5.jpg",
    images: ["/images/product-5.jpg"],
    rating: 3,
    reviews: 5,
    recentSales: 12,
    category: "Antiqueda",
    description: "O Tonico Antiqueda Gota Dourada 100ml atua diretamente na raiz, estimulando a regeneracao capilar e prevenindo a queda excessiva dos fios. Formula enriquecida com ativos naturais.",
    benefits: [
      "Previne a queda capilar",
      "Fortalece a raiz dos fios",
      "Estimula o crescimento",
      "Nutre o couro cabeludo"
    ],
    hairTypes: ["Cabelos com queda", "Todos os tipos"],
    needs: ["Antiqueda", "Fortalecimento"],
    howToUse: [
      "Aplique diretamente no couro cabeludo.",
      "Massageie por 3 minutos.",
      "Nao enxague.",
      "Use diariamente."
    ],
    touchTest: [
      "Aplique uma pequena quantidade no antebraco.",
      "Aguarde 24 horas.",
      "Se houver irritacao, nao use."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Uso externo.",
      "Evitar contato com os olhos."
    ],
    relatedSlugs: ["tonico-fortalecimento-tradicional", "tonico-biotina-100ml"],
    variantLabel: "Tamanho",
    variants: [
      {
        id: 501,
        label: "100 ml",
        price: 16.90,
        image: "/images/product-5.jpg",
        images: ["/images/product-5.jpg"],
        available: true,
      },
      {
        id: 502,
        label: "200 ml",
        price: 28.90,
        compareAtPrice: 33.80,
        image: "/images/product-5-200ml.jpg",
        images: ["/images/product-5-200ml.jpg"],
        available: true,
      },
      {
        id: 503,
        label: "Kit 3 Unidades",
        price: 42.90,
        compareAtPrice: 50.70,
        image: "/images/product-5-kit.jpg",
        images: ["/images/product-5-kit.jpg"],
        available: true,
      },
    ],
  },
  {
    id: 6,
    slug: "tonico-biotina-100ml",
    name: "Tonico Biotina Gota Dourada 100 Ml",
    price: 17.90,
    image: "/images/product-6.jpg",
    images: ["/images/product-6.jpg"],
    rating: 3,
    reviews: 2,
    recentSales: 6,
    category: "Tonicos",
    description: "O Tonico de Biotina Gota Dourada 100ml e enriquecido com vitamina B7, essencial para a saude capilar. Fortalece os fios e estimula o crescimento.",
    benefits: [
      "Rico em Biotina (vitamina B7)",
      "Fortalece os fios",
      "Estimula o crescimento",
      "Reduz a queda"
    ],
    hairTypes: ["Cabelos finos", "Cabelos fracos", "Todos os tipos"],
    needs: ["Fortalecimento", "Crescimento", "Nutricao"],
    howToUse: [
      "Aplique no couro cabeludo.",
      "Massageie suavemente.",
      "Nao enxague.",
      "Use 3x por semana."
    ],
    touchTest: [
      "Faca a prova de toque antes de usar.",
      "Aplique no antebraco e aguarde 24 horas."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Uso externo."
    ],
    relatedSlugs: ["tonico-antiqueda-100ml", "tonico-milagroso-200ml"]
  },
  {
    id: 7,
    slug: "tonico-extraordinario-combate-queda-100ml",
    name: "Tonico Extraordinario Combate a Queda Gota Dourada 100 Ml",
    price: 18.90,
    compareAtPrice: 24.90,
    image: "/images/product-7.jpg",
    images: ["/images/product-7.jpg"],
    rating: 4,
    reviews: 3,
    recentSales: 12,
    category: "Antiqueda",
    description: "O Tonico Extraordinario Combate a Queda Gota Dourada 100 ml e um produto desenvolvido para combater a queda e os cabelos quebradiços. Sua formula exclusiva oferece um tratamento eficaz e rapido, com resultados visiveis apos o uso continuo. Ele atua diretamente na raiz, estimulando a regeneracao capilar e proporcionando mais forca e vitalidade aos fios.",
    benefits: [
      "Combate a queda de cabelo desde a raiz",
      "Estimula o crescimento saudavel dos fios",
      "Reduz cabelos quebradiços e a fragilidade",
      "Proporciona forca e vitalidade aos cabelos",
      "Melhora a textura e o brilho natural dos fios"
    ],
    hairTypes: ["Cabelos com queda", "Cabelos quebradiços", "Cabelos finos", "Todos os tipos de cabelo"],
    needs: ["Antiqueda", "Fortalecimento", "Crescimento", "Revitalizacao"],
    howToUse: [
      "Faca a prova de toque antes de usar o produto.",
      "Aplique uma dose do tonico diretamente na raiz dos cabelos.",
      "Massageie suavemente com a ponta dos dedos durante 3 minutos.",
      "Deixe agir por 10 minutos antes de enxaguar.",
      "Repita o procedimento 3 vezes por semana durante 3 meses."
    ],
    touchTest: [
      "Antes de aplicar o Tonico Extraordinario Combate a Queda Gota Dourada 100 ml, e importante realizar a prova de toque para garantir que nao havera reacoes alergicas. Para isso, siga os passos abaixo:",
      "Aplique uma pequena quantidade do produto no antebraco ou atras da orelha.",
      "Deixe agir de 30 a 40 minutos e depois lave o local.",
      "Aguarde 24 horas para verificar se ha algum sinal de irritacao. Se houver, nao utilize o produto."
    ],
    precautions: [
      "Embora o Tonico Extraordinario Combate a Queda 100 ml seja seguro para uso, e importante seguir as recomendacoes de precaucoes:",
      "Manter fora do alcance de criancas.",
      "Nao ingerir o produto.",
      "Em caso de contato com os olhos, enxague com agua em abundancia.",
      "Se houver irritacao no couro cabeludo, suspenda o uso e consulte um dermatologista."
    ],
    relatedSlugs: ["tonico-antiqueda-100ml", "tonico-fortalecimento-tradicional"]
  },
  {
    id: 8,
    slug: "tonico-ricino-100ml",
    name: "Tonico Ricino Gota Dourada 100 Ml",
    price: 16.90,
    image: "/images/product-8.jpg",
    images: ["/images/product-8.jpg"],
    rating: 0,
    reviews: 0,
    recentSales: 4,
    category: "Tonicos",
    description: "O Tonico de Ricino Gota Dourada 100ml e enriquecido com oleo de ricino, conhecido por estimular o crescimento e fortalecer os fios capilares.",
    benefits: [
      "Rico em oleo de ricino",
      "Estimula o crescimento",
      "Fortalece os fios",
      "Nutre profundamente"
    ],
    hairTypes: ["Cabelos fracos", "Todos os tipos"],
    needs: ["Crescimento", "Fortalecimento"],
    howToUse: [
      "Aplique no couro cabeludo.",
      "Massageie suavemente.",
      "Deixe agir por 10 minutos.",
      "Enxague normalmente."
    ],
    touchTest: [
      "Faca a prova de toque antes de usar.",
      "Aguarde 24 horas apos teste."
    ],
    precautions: [
      "Manter fora do alcance de criancas.",
      "Uso externo."
    ],
    relatedSlugs: ["tonico-biotina-100ml", "tonico-antiqueda-100ml"]
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug))
}

// ─── Collections ─────────────────────────────────────────────
export interface Collection {
  slug: string
  name: string
  description: string
  image: string
  productCount: number
}

export const collections: Collection[] = [
  {
    slug: "tonicos",
    name: "Tonicos",
    description: "Tonicos capilares para nutricao, crescimento e revitalizacao dos fios.",
    image: "/images/collection-tonicos.jpg",
    productCount: 4,
  },
  {
    slug: "fortalecimento",
    name: "Fortalecimento",
    description: "Linha completa para fortalecer os fios desde a raiz e combater a quebra capilar.",
    image: "/images/collection-fortalecimento.jpg",
    productCount: 3,
  },
  {
    slug: "antiqueda",
    name: "Antiqueda",
    description: "Produtos especializados no combate a queda e estimulo ao crescimento capilar.",
    image: "/images/collection-antiqueda.jpg",
    productCount: 2,
  },
  {
    slug: "desmarelador",
    name: "Desmarelador",
    description: "Linha Techno Hair para neutralizar tons amarelados e manter o loiro perfeito.",
    image: "/images/collection-desmarelador.jpg",
    productCount: 2,
  },
  {
    slug: "tonalidade",
    name: "Pigmentacao e Tonalidade",
    description: "Produtos para pigmentacao, tonalizacao e realce de cor dos cabelos.",
    image: "/images/collection-tonalidade.jpg",
    productCount: 2,
  },
]

const categoryMap: Record<string, string> = {
  tonicos: "Tonicos",
  fortalecimento: "Fortalecimento",
  antiqueda: "Antiqueda",
  desmarelador: "Desmarelador",
  tonalidade: "Tonalidade",
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  const category = categoryMap[collectionSlug]
  if (!category) return []
  return products.filter((p) => p.category === category)
}
