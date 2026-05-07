export interface Product {
  id: number;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  slug: string;
  description?: string;
  isTest?: boolean;
  tags?: string[];
}

export interface Collection {
  slug: string;
  name: string;
  image: string;
  productCount: number;
  description: string;
}

export const collections: Collection[] = [
  {
    "slug": "jogos-de-lencol",
    "name": "Jogos de Lençol",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros-68a5ddf0b0435-large.png?v=1777595622",
    "productCount": 48,
    "description": "Nossa coleção de Jogos de Lençol"
  },
  {
    "slug": "jogo-de-lencol",
    "name": "Jogo De Lencol",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros-68a5ddf0b0435-large.png?v=1777595622",
    "productCount": 36,
    "description": "Nossa coleção de Jogo De Lencol"
  },
  {
    "slug": "colchas-e-cobre-leito",
    "name": "Colchas e Cobre-Leito",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-69ebc8316663f-large_65a1059b-46b9-46d1-9ea1-b163cd9a8a4e.png?v=1777590239",
    "productCount": 60,
    "description": "Nossa coleção de Colchas e Cobre-Leito"
  },
  {
    "slug": "mais-vendidos",
    "name": "Mais Vendidos",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-69ebc8316663f-large_65a1059b-46b9-46d1-9ea1-b163cd9a8a4e.png?v=1777590239",
    "productCount": 19,
    "description": "Nossa coleção de Mais Vendidos"
  },
  {
    "slug": "diversos",
    "name": "Diversos",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-6981f5174203a-large_a6ec36a6-b411-4d3e-ac7b-d8a2f18d5d14.png?v=1777590268",
    "productCount": 13,
    "description": "Nossa coleção de Diversos"
  },
  {
    "slug": "toalhas",
    "name": "Toalhas",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-toalhas-paris-banho-2-pecas-450gm2-100-algodao-bege-claro-69b2bb6abaec0-large.png?v=1777590285",
    "productCount": 1,
    "description": "Nossa coleção de Toalhas"
  },
  {
    "slug": "edredons",
    "name": "Edredons",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-bege-69c56f0c5cd5e-large.png?v=1777586120",
    "productCount": 4,
    "description": "Nossa coleção de Edredons"
  },
  {
    "slug": "novidades",
    "name": "Novidades",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-bege-69c56f0c5cd5e-large.png?v=1777586120",
    "productCount": 67,
    "description": "Nossa coleção de Novidades"
  },
  {
    "slug": "roupass-de-cama-365",
    "name": "Roupass De Cama 365",
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/Sd9ffa45715d0413e850cbf2f2cfbbdb79.jpg?v=1762747754",
    "productCount": 4,
    "description": "Nossa coleção de Roupass De Cama 365"
  }
];

export const products: Product[] = [
  {
    "id": 1,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Rós",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros-68a5ddf0b0435-large.png?v=1777595622",
    "rating": 5.0,
    "reviews": 240,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 2,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Rosas",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-rosas-68a5db2e4ee3e-large.png?v=1777595630",
    "rating": 4.2,
    "reviews": 221,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 3,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Grey",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-grey-68a4b3a4396ba-large.png?v=1777595636",
    "rating": 4.7,
    "reviews": 162,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-grey",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 4,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Fend Stone",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-fend-stone-693ad80d36641-large.jpg?v=1777595642",
    "rating": 4.3,
    "reviews": 58,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-fend-stone",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 5,
    "name": "Jogo de Lençol Solteiro Roma 3 Pç Percal 300 Fios Estampado - Rosas",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-rosas-68a5dceeb2344-large.png?v=1777595649",
    "rating": 5.0,
    "reviews": 120,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 6,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Azul",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-azul-693ad808d560e-large.jpg?v=1777595655",
    "rating": 4.0,
    "reviews": 125,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-azul",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 7,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Blush",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-blush-693ad80a551b3-large.jpg?v=1777595660",
    "rating": 4.3,
    "reviews": 63,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-blush",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 8,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Rose",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-rose-693ad80f7cbae-large.jpg?v=1777595666",
    "rating": 4.2,
    "reviews": 221,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-rose",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 9,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Neve",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-neve-693ad8073ba78-large.jpg?v=1777595672",
    "rating": 5.0,
    "reviews": 58,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-neve",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 10,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Green",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-green-68a4b39e386eb-large.png?v=1777595679",
    "rating": 4.9,
    "reviews": 235,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-green",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 11,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Arabesco",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-arabesco-68a5db8c6167a-large.png?v=1777595685",
    "rating": 4.4,
    "reviews": 89,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-arabesco",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 12,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Green",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-green-68a4b3a9b8929-large.png?v=1777595693",
    "rating": 4.5,
    "reviews": 69,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-green",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 13,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - White",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-white-68a4b3a61da4a-large.png?v=1777595699",
    "rating": 4.1,
    "reviews": 188,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-white",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 14,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - White",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-white-68a4b39e164e2-large.png?v=1777595706",
    "rating": 4.1,
    "reviews": 54,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-white",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 15,
    "name": "Jogo de Lençol Queen Poá 3 Pçs Percal 300 Fios Estampado - Poá Rose",
    "price": 69.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-poa-3-pcs-percal-300-fios-estampado-poa-rose-689e17fd82169-large.png?v=1777595712",
    "rating": 5.0,
    "reviews": 179,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-poa-3-pcs-percal-300-fios-estampado-poa-rose",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 16,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Fend",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-fend-689e18081a465-large.png?v=1777595719",
    "rating": 5.0,
    "reviews": 20,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-fend",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 17,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Névoa",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-nevoa-693ad802b4eae-large.jpg?v=1777595725",
    "rating": 4.0,
    "reviews": 49,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-nevoa",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 18,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Vintage",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-vintage-68a5db4688190-large.png?v=1777595732",
    "rating": 4.4,
    "reviews": 43,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 19,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Arabesco",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-arabesco-68a5dfc5ef932-large.png?v=1777595739",
    "rating": 4.7,
    "reviews": 24,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-arabesco",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 20,
    "name": "Jogo de Lençol Queen Roma 3 Pçs Percal 300 Fios Estampado - Rosas",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-roma-3-pcs-percal-300-fios-estampado-rosas-68a5daa577794-large.png?v=1777595745",
    "rating": 4.2,
    "reviews": 23,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-roma-3-pcs-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 21,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b39fb983c-large.png?v=1777595752",
    "rating": 4.9,
    "reviews": 139,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 22,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Beige",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-beige-68a4b3986b800-large.png?v=1777595759",
    "rating": 4.3,
    "reviews": 106,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-beige",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 23,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Rosas",
    "price": 39.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-rosas-68a5ddb517f29-large.png?v=1777595765",
    "rating": 4.1,
    "reviews": 71,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 24,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Rose",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-rose-689e180324476-large.png?v=1777595771",
    "rating": 4.5,
    "reviews": 210,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-rose",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 25,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Rós",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-ros-68a5db624a267-large.png?v=1777595778",
    "rating": 4.4,
    "reviews": 43,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-ros",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 26,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Olive",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-olive-689b4a5939ed1-large.png?v=1777595785",
    "rating": 4.8,
    "reviews": 37,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-olive",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 27,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Verde",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-verde-693ad80bd9cab-large.jpg?v=1777595793",
    "rating": 4.0,
    "reviews": 69,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-verde",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 28,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Tofu",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-tofu-693ad805928f0-large.jpg?v=1777595799",
    "rating": 4.0,
    "reviews": 64,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-tofu",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 29,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Vintage",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-vintage-68a5ddd808743-large.png?v=1777595805",
    "rating": 4.5,
    "reviews": 31,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 30,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Sage",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-sage-689e1801192ab-large.png?v=1777595811",
    "rating": 4.3,
    "reviews": 23,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-sage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 31,
    "name": "Jogo de Lençol Solteiro Roma 3 Pç Percal 300 Fios Estampado - Vintage",
    "price": 59.0,
    "compareAtPrice": 139.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-vintage-69e9235b58993-large.png?v=1777595817",
    "rating": 4.8,
    "reviews": 84,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 32,
    "name": "Jogo de Lençol Solteiro Estampado 3 Peças Percal 300 Fios Roma Roses",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-3-pecas-percal-300-fios-roma-estampado-roses-67aa2cd301726-large.png?v=1777595823",
    "rating": 4.0,
    "reviews": 72,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-estampado-3-pecas-percal-300-fios-roma-roses",
    "description": "Descrição do produto                           O Jogo de Cama 300 fios Percal Roma traz estampas em tons claros e neutros, clássico e elegante com qualidade impecável.  Além de beleza o toque em 300 f...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 33,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Beige",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-beige-68a4b3a273d53-large.png?v=1777595829",
    "rating": 4.4,
    "reviews": 80,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-beige",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 34,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Olive",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-olive-68a5dfe46b3a4-large.png?v=1777595836",
    "rating": 4.8,
    "reviews": 100,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-olive",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 35,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b3982c265-large.png?v=1777595843",
    "rating": 4.2,
    "reviews": 138,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 36,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Grey",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-grey-68a4b399c862c-large.png?v=1777595849",
    "rating": 4.5,
    "reviews": 96,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-grey",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Jogo De Lencol"
    ]
  },
  {
    "id": 37,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Itália 150 Fios Grid Dupla Face Grafite 210x230 cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-69ebc8316663f-large_65a1059b-46b9-46d1-9ea1-b163cd9a8a4e.png?v=1777590239",
    "rating": 4.6,
    "reviews": 63,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-1",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 38,
    "name": "Jogo de Lençol Queen 3 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 69.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-3-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b38b54e7e-large.png?v=1777590244",
    "rating": 4.7,
    "reviews": 18,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-3-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 39,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Verde",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-verde-160x220-cm-69ebb489d6592-large_392aac2a-6767-4854-a0f9-e958129d49fb.png?v=1777590250",
    "rating": 4.4,
    "reviews": 222,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-verde-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 40,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-3-pecas-italia-150-fios-poa-dupla-face-rosa-682771b693cb0-large.png?v=1777590256",
    "rating": 5.0,
    "reviews": 178,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 41,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-fendi-160x220-cm-69ebc6f68f0ae-large_981e7e7a-ce2c-4a76-94fd-b762bd84cd12.png?v=1777590262",
    "rating": 4.0,
    "reviews": 42,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 42,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Azul",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-6981f5174203a-large_a6ec36a6-b411-4d3e-ac7b-d8a2f18d5d14.png?v=1777590268",
    "rating": 4.6,
    "reviews": 136,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-1",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 43,
    "name": "Kit Colcha Cobre Leito Solteiro 2Pç Estampada Itália 150 Fios Dupla Face Flora 220x160cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm-69eba66aa2127-large_55fba4c5-30cf-4811-bfd8-62b058440079.png?v=1777590273",
    "rating": 4.5,
    "reviews": 193,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm-1",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 44,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-poa-dupla-face-rosa-250x270-cm-69ebc78324408-large_0dc1b544-ca39-4b58-9151-ff3119a03484.png?v=1777590280",
    "rating": 4.0,
    "reviews": 194,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 45,
    "name": "Kit Toalhas Paris Banho 2 Peças 450g/m² 100% Algodão Bege Claro",
    "price": 54.0,
    "compareAtPrice": 129.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-toalhas-paris-banho-2-pecas-450gm2-100-algodao-bege-claro-69b2bb6abaec0-large.png?v=1777590285",
    "rating": 4.9,
    "reviews": 149,
    "category": "Toalhas",
    "slug": "kit-toalhas-paris-banho-2-pecas-450g-m-100-algodao-bege-claro",
    "description": "Descrição do produto                           Jogo de Banho Paris 2 Peças   Conforto, Estilo e Qualidade para o Seu Dia a Dia Transforme sua rotina com o Jogo de Banho Paris, composto por 2 peça 100%...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 46,
    "name": "Kit Colcha Cobre Leito Solteiro 2Pç Estampada Itália 150 Fios Dupla Face Rami 220x160cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-rami-220x160cm-69eba548b1adf-large.png?v=1777590291",
    "rating": 4.0,
    "reviews": 167,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-rami-220x160cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 47,
    "name": "Tapete Chenille Bolinha Popcorn  38x58 cm Toque Macio e Design Moderno - Areia",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-areia-69b45c5de9f28-large.png?v=1777590296",
    "rating": 4.1,
    "reviews": 233,
    "category": "Diversos",
    "slug": "tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-areia",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Chenille é a combinação ideal entre beleza, praticidade e aconchego. Com toque ...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 48,
    "name": "Kit Colcha Cobre Leito King 3 Peças Itália 150 Fios Grid Dupla Face Grafite 250x270 cm",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm-69ebc815ed27f-large_212b4578-f418-4197-9a52-4ea73b3551fc.png?v=1777590302",
    "rating": 4.4,
    "reviews": 150,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm-1",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 49,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25d56f2be7-large.png?v=1777590308",
    "rating": 4.8,
    "reviews": 57,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 50,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Azul",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-azul-69f25ce6c40c3-large.png?v=1777590313",
    "rating": 4.7,
    "reviews": 86,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-azul",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 51,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25d2d2cdf5-large.png?v=1777590319",
    "rating": 4.5,
    "reviews": 145,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 52,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25e1d9be60-large.png?v=1777590324",
    "rating": 4.8,
    "reviews": 183,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 53,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25cbaf1e48-large.png?v=1777590330",
    "rating": 4.2,
    "reviews": 86,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 54,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25e9c462c5-large.png?v=1777590335",
    "rating": 4.9,
    "reviews": 58,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 55,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25eab5c208-large.png?v=1777590341",
    "rating": 4.5,
    "reviews": 147,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Mais Vendidos"
    ]
  },
  {
    "id": 56,
    "name": "Edredom Hotelaria 300 Fios Toque de Algodão Casal Queen King Dupla Face Matelassê Super Macio 260x240cm - Bege",
    "price": 219.0,
    "compareAtPrice": 269.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-bege-69c56f0c5cd5e-large.png?v=1777586120",
    "rating": 4.6,
    "reviews": 71,
    "category": "Edredons",
    "slug": "edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-bege",
    "description": "Descrição do produto                           EDREDOM HOTELARIA PREMIUM TOQUE DE ALGODÃOSinta o conforto de um hotel 5 estrelas todos os dias.Se você procura um edredom muito mais macio que os comuns...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 57,
    "name": "Edredom Hotelaria 300 Fios Toque de Algodão Casal Queen King Dupla Face Matelassê Super Macio 260x240cm - Branco",
    "price": 219.0,
    "compareAtPrice": 269.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-branco-69c56f1714d1e-large.png?v=1777586197",
    "rating": 4.3,
    "reviews": 185,
    "category": "Edredons",
    "slug": "edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-branco",
    "description": "Descrição do produto                           EDREDOM HOTELARIA PREMIUM TOQUE DE ALGODÃOSinta o conforto de um hotel 5 estrelas todos os dias.Se você procura um edredom muito mais macio que os comuns...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 58,
    "name": "Edredom Hotelaria 300 Fios Toque de Algodão Casal Queen King Dupla Face Matelassê Super Macio 260x240cm - Cinza",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-cinza-69c56f1303869-large.png?v=1777586126",
    "rating": 4.2,
    "reviews": 177,
    "category": "Edredons",
    "slug": "edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-cinza",
    "description": "Descrição do produto                           EDREDOM HOTELARIA PREMIUM TOQUE DE ALGODÃOSinta o conforto de um hotel 5 estrelas todos os dias.Se você procura um edredom muito mais macio que os comuns...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 59,
    "name": "Edredom Hotelaria 300 Fios Toque de Algodão Casal Queen King Dupla Face Matelassê Super Macio 260x240cm- Verde",
    "price": 219.0,
    "compareAtPrice": 269.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-verde-69c56f0a10bea-large.png?v=1777586132",
    "rating": 4.3,
    "reviews": 106,
    "category": "Edredons",
    "slug": "edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-verde",
    "description": "Descrição do produto                           EDREDOM HOTELARIA PREMIUM TOQUE DE ALGODÃOSinta o conforto de um hotel 5 estrelas todos os dias.Se você procura um edredom muito mais macio que os comuns...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 60,
    "name": "Jogo de Lençol Mona lisa 3 Pçs Casal 300 Fios percal Bordado - Bege",
    "price": 79.0,
    "compareAtPrice": 149.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-3-pcs-casal-300-fios-percal-bordado-bege-693c0e80a2732-large.png?v=1777586458",
    "rating": 4.5,
    "reviews": 220,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-3-pcs-casal-300-fios-percal-bordado-bege",
    "description": "Descrição do produto                            Jogo de Lençol Mona Lisa com Renda Contrastante  Elegância Clássica para o Seu Quarto O Jogo de Lençol Mona Lisa traz o equilíbrio perfeito entre sofist...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 61,
    "name": "Jogo de Lençol Mona lisa 3 Pçs King 300 Fios percal Bordado - Rose",
    "price": 99.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-3-pcs-king-300-fios-percal-bordado-rose-693c0e7560b0f-large.png?v=1777586514",
    "rating": 4.3,
    "reviews": 191,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-3-pcs-king-300-fios-percal-bordado-rose",
    "description": "Descrição do produto                            Jogo de Lençol Mona Lisa com Renda Contrastante  Elegância Clássica para o Seu Quarto O Jogo de Lençol Mona Lisa traz o equilíbrio perfeito entre sofist...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 62,
    "name": "Jogo de Lençol Mona lisa 3 Pçs Queen 300 Fios percal Bordado - Cinza",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-cinza-693c0e77f2feb-large.png?v=1777586490",
    "rating": 4.1,
    "reviews": 117,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-cinza",
    "description": "Descrição do produto                            Jogo de Lençol Mona Lisa com Renda Contrastante  Elegância Clássica para o Seu Quarto O Jogo de Lençol Mona Lisa traz o equilíbrio perfeito entre sofist...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 63,
    "name": "Jogo de Lençol Mona lisa 3 Pçs Queen 300 Fios percal Bordado - Rose",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-rose-693c0e7e79ada-large.png?v=1777586502",
    "rating": 4.1,
    "reviews": 111,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-rose",
    "description": "Descrição do produto                            Jogo de Lençol Mona Lisa com Renda Contrastante  Elegância Clássica para o Seu Quarto O Jogo de Lençol Mona Lisa traz o equilíbrio perfeito entre sofist...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 64,
    "name": "Jogo de Lençol Mona lisa 3 Pçs Queen 300 Fios percal Bordado - Verde",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-verde-693c0e79517d6-large.png?v=1777586496",
    "rating": 4.3,
    "reviews": 41,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-3-pcs-queen-300-fios-percal-bordado-verde",
    "description": "Descrição do produto                            Jogo de Lençol Mona Lisa com Renda Contrastante  Elegância Clássica para o Seu Quarto O Jogo de Lençol Mona Lisa traz o equilíbrio perfeito entre sofist...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 65,
    "name": "Jogo de Lençol Mona lisa 4 Pçs King 300 Fios percal Bordado - Branco",
    "price": 129.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-4-pcs-king-300-fios-percal-bordado-branco-693c0e5240fe5-large.png?v=1777586533",
    "rating": 4.6,
    "reviews": 80,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-4-pcs-king-300-fios-percal-bordado-branco",
    "description": "Descrição do produto                           Jogo de Lençol Mona Lisa com Renda Contrastante 4 Peças Sofisticação e Delicadeza no Seu Quarto O Jogo de Lençol Mona Lisa 4 peças é a escolha perfeita p...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 66,
    "name": "Jogo de Lençol Mona lisa 4 Pçs King 300 Fios percal Bordado - Rose",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-4-pcs-king-300-fios-percal-bordado-rose-693c0e52a1eb7-large.png?v=1777586527",
    "rating": 4.9,
    "reviews": 134,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-4-pcs-king-300-fios-percal-bordado-rose",
    "description": "Descrição do produto                           Jogo de Lençol Mona Lisa com Renda Contrastante 4 Peças Sofisticação e Delicadeza no Seu Quarto O Jogo de Lençol Mona Lisa 4 peças é a escolha perfeita p...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 67,
    "name": "Jogo de Lençol Mona lisa 4 Pçs Queen 300 Fios percal Bordado - Cinza",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-4-pcs-queen-300-fios-percal-bordado-cinza-693c0e538fc3e-large.png?v=1777586520",
    "rating": 4.7,
    "reviews": 137,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-4-pcs-queen-300-fios-percal-bordado-cinza",
    "description": "Descrição do produto                           Jogo de Lençol Mona Lisa com Renda Contrastante 4 Peças Sofisticação e Delicadeza no Seu Quarto O Jogo de Lençol Mona Lisa 4 peças é a escolha perfeita p...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 68,
    "name": "Jogo de Lençol Mona lisa 4 Pçs Queen 300 Fios percal Bordado - Verde",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-mona-lisa-4-pcs-queen-300-fios-percal-bordado-verde-693c0e55970f9-large.png?v=1777586471",
    "rating": 4.9,
    "reviews": 138,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-mona-lisa-4-pcs-queen-300-fios-percal-bordado-verde",
    "description": "Descrição do produto                           Jogo de Lençol Mona Lisa com Renda Contrastante 4 Peças Sofisticação e Delicadeza no Seu Quarto O Jogo de Lençol Mona Lisa 4 peças é a escolha perfeita p...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 69,
    "name": "Kit 3 Tapetes Foam Absorvente 38x58 cm Soft Antiderrapante - Cinza",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-3-tapetes-foam-absorvente-38x58-cm-soft-antiderrapante-cinza-6995e8a7a4b10-large.png?v=1777586507",
    "rating": 4.0,
    "reviews": 55,
    "category": "Diversos",
    "slug": "kit-3-tapetes-foam-absorvente-38x58-cm-soft-antiderrapante-cinza",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 70,
    "name": "Kit 3 Tapetes Foam Absorvente 38x58 cm Soft Antiderrapante - Cinza Escuro",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-3-tapetes-foam-absorvente-38x58-cm-soft-antiderrapante-cinza-escuro-6995e8a7d34eb-large.png?v=1777586464",
    "rating": 4.4,
    "reviews": 104,
    "category": "Diversos",
    "slug": "kit-3-tapetes-foam-absorvente-38x58-cm-soft-antiderrapante-cinza-escuro",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 71,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-poa-dupla-face-fendi-210x230-cm-69ebc6ebe0da1-large.png?v=1777586231",
    "rating": 4.3,
    "reviews": 172,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 72,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-poa-dupla-face-rosa-210x230-cm-69ebc79e7cf95-large.png?v=1777586217",
    "rating": 4.4,
    "reviews": 37,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 73,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Dupla Face Estampado 150 Fios Itália Rós",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-cobre-leito-colcha-casal-3pc-dupla-face-150-fios-italia-ros-210x230cm-69efbaae6ba3a-large.png?v=1777586255",
    "rating": 4.5,
    "reviews": 134,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-dupla-face-estampado-150-fios-italia-ros",
    "description": "Descrição do produto                           Os pequenos detalhes fazem a diferença em nossos lares. As colchas/Cobre Leitos também são itens de decoração, e são peças para transformar seu quarto em...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 74,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Dupla Face Matelado Pompeia Cinza",
    "price": 139.0,
    "compareAtPrice": 229.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-pompeia-casal-3-pecas-dupla-face-cinza-6984c891adfde-large.png?v=1777586413",
    "rating": 4.3,
    "reviews": 60,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-dupla-face-matelado-pompeia-cinza",
    "description": "Descrição do produto                           Colcha Pompéia Dupla Face Conforto, Estilo e Versatilidade A Colcha Pompéia Dupla Face é a escolha ideal para quem busca transformar o quarto com confort...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 75,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Dupla Face Matelado Pompeia Rose",
    "price": 139.0,
    "compareAtPrice": 229.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-pompeia-casal-3-pecas-dupla-face-rose-6984c88eb6956-large.png?v=1777586425",
    "rating": 4.4,
    "reviews": 66,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-dupla-face-matelado-pompeia-rose",
    "description": "Descrição do produto                           Colcha Pompéia Dupla Face Conforto, Estilo e Versatilidade A Colcha Pompéia Dupla Face é a escolha ideal para quem busca transformar o quarto com confort...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 76,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Itália 150 Fios Grid Dupla Face Cinza 210x230 cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-cinza-210x230-cm-69ebc64d8320a-large.png?v=1777586145",
    "rating": 4.5,
    "reviews": 144,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-cinza-210x230-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 77,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Itália 150 Fios Grid Dupla Face Grafite 210x230 cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-69ebc8316663f-large.png?v=1777586236",
    "rating": 4.5,
    "reviews": 226,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 78,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Itália 150 Fios Grid Dupla Face Verde 210x230 cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-verde-210x230-cm-69ebb60baace8-large.png?v=1777586178",
    "rating": 4.1,
    "reviews": 43,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-verde-210x230-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 79,
    "name": "Kit Colcha Cobre Leito Casal 3Pç Estampada Itália 150 Fios Dupla Face Alora 230x210cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-alora-230x210cm-69ebaba35adb0-large.png?v=1777586279",
    "rating": 4.8,
    "reviews": 222,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-alora-230x210cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 80,
    "name": "Kit Colcha Cobre Leito Casal 3Pç Estampada Itália 150 Fios Dupla Face Fiori 230x210cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-fiori-230x210cm-69eba8d312309-large.png?v=1777586292",
    "rating": 4.6,
    "reviews": 73,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-fiori-230x210cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 81,
    "name": "Kit Colcha Cobre Leito Casal 3Pç Estampada Itália 150 Fios Dupla Face Flora 230x210cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-flora-230x210cm-69eba6610c2b2-large.png?v=1777586224",
    "rating": 4.5,
    "reviews": 236,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-flora-230x210cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 82,
    "name": "Kit Colcha Cobre Leito Casal 3Pç Estampada Itália 150 Fios Dupla Face Genevieve 230x210cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-genevieve-230x210cm-69eba7920d2ab-large.png?v=1777586381",
    "rating": 4.3,
    "reviews": 58,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-genevieve-230x210cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 83,
    "name": "Kit Colcha Cobre Leito Casal 3Pç Estampada Itália 150 Fios Dupla Face Rami 230x210cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-rami-230x210cm-69eba53ed0148-large.png?v=1777586164",
    "rating": 4.0,
    "reviews": 146,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-casal-3pc-estampada-italia-150-fios-dupla-face-rami-230x210cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 84,
    "name": "Kit Colcha Cobre Leito Dohler Casal 3 peças Dupla Face - Serena",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-dohler-casal-3-pecas-dupla-face-serena-699ed68cf1348-large.png?v=1777586452",
    "rating": 4.5,
    "reviews": 231,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-dohler-casal-3-pecas-dupla-face-serena",
    "description": "Descrição do produto                           Colcha Dohler Estampada Dupla Face  Conforto, Praticidade e Estilo Renove seu quarto com a Colcha Estampada Dupla Face, desenvolvida para unir conforto, ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 85,
    "name": "Kit Colcha Cobre Leito Dohler Solteiro 2 peças Dupla Face - Calvin",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-dohler-solteiro-2-pecas-dupla-face-calvin-699ed69858987-large.png?v=1777586484",
    "rating": 4.7,
    "reviews": 30,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-dohler-solteiro-2-pecas-dupla-face-calvin",
    "description": "Descrição do produto                           Colcha Dohler Estampada Dupla Face  Conforto, Praticidade e Estilo Renove seu quarto com a Colcha Estampada Dupla Face, desenvolvida para unir conforto, ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 86,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-poa-dupla-face-fendi-250x270-cm-69ebc6d4a9f35-large.png?v=1777586262",
    "rating": 4.5,
    "reviews": 120,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 87,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-poa-dupla-face-rosa-250x270-cm-69ebc78324408-large.png?v=1777586352",
    "rating": 4.6,
    "reviews": 26,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 88,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Verde",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-poa-dupla-face-verde-250x270-cm-69ebb460b70b1-large.png?v=1777586267",
    "rating": 4.3,
    "reviews": 29,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-verde",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 89,
    "name": "Kit Colcha Cobre Leito King 3 Peças Dupla Face Estampado 150 Fios Itália Arabesco",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-cobre-leito-colcha-king-3pc-dupla-face-150-fios-italia-arabesco-250x270cm-69eb957547540-large.png?v=1777586317",
    "rating": 4.1,
    "reviews": 231,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-dupla-face-estampado-150-fios-italia-arabesco",
    "description": "Descrição do produto                           Os pequenos detalhes fazem a diferença em nossos lares. As colchas/Cobre Leitos também são itens de decoração, e são peças para transformar seu quarto em...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 90,
    "name": "Kit Colcha Cobre Leito King 3 Peças Itália 150 Fios Grid Dupla Face Grafite 250x270 cm",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm-69ebc815ed27f-large.png?v=1777586399",
    "rating": 5.0,
    "reviews": 112,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 91,
    "name": "Kit Colcha Cobre Leito King 3 Peças Itália 150 Fios Grid Dupla Face Verde 250x270 cm",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-verde-250x270-cm-69ebb5f9e0dbb-large.png?v=1777586406",
    "rating": 3.9,
    "reviews": 92,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-verde-250x270-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 92,
    "name": "Kit Colcha Cobre Leito King 3Pç Estampada Itália 150 Fios Dupla Face Flora 270x250cm",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-flora-270x250cm-69eba64e4afb0-large.png?v=1777586341",
    "rating": 4.9,
    "reviews": 18,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-flora-270x250cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 93,
    "name": "Kit Colcha Cobre Leito King 3Pç Estampada Itália 150 Fios Dupla Face Natura",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-natura-69eb819e6f17d-large.png?v=1777586431",
    "rating": 4.4,
    "reviews": 172,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-natura",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 94,
    "name": "Kit Colcha Cobre Leito King 3Pç Estampada Itália 150 Fios Dupla Face Rami 270x250cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-rami-270x250cm-69eba51c597c4-large.png?v=1777586185",
    "rating": 4.3,
    "reviews": 245,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-king-3pc-estampada-italia-150-fios-dupla-face-rami-270x250cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 95,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-poa-dupla-face-fendi-230x250-cm-69ebc6e162977-large.png?v=1777586323",
    "rating": 4.0,
    "reviews": 172,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 96,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Verde",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-poa-dupla-face-verde-230x250-cm-69ebb46a0f955-large.png?v=1777586205",
    "rating": 4.8,
    "reviews": 141,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-verde",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 97,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças Dupla Face Estampado 150 Fios Itália Arabesco",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-cobre-leito-colcha-queen-3pc-dupla-face-150-fios-italia-arabesco-688bad4438ced-large.png?v=1777586138",
    "rating": 4.6,
    "reviews": 234,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-dupla-face-estampado-150-fios-italia-arabesco",
    "description": "Descrição do produto                           Os pequenos detalhes fazem a diferença em nossos lares. As colchas/Cobre Leitos também são itens de decoração, e são peças para transformar seu quarto em...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 98,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças Dupla Face Matelado Pompeia Off White",
    "price": 149.0,
    "compareAtPrice": 239.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-pompeia-queen-3-pecas-dupla-face-off-white-6984c88116531-large.png?v=1777586151",
    "rating": 4.2,
    "reviews": 73,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-dupla-face-matelado-pompeia-off-white",
    "description": "Descrição do produto                           Colcha Pompéia Dupla Face Conforto, Estilo e Versatilidade A Colcha Pompéia Dupla Face é a escolha ideal para quem busca transformar o quarto com confort...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 99,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças Itália 150 Fios Grid Dupla Face Cinza 230x250 cm",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-cinza-230x250-cm-69ebc64484a43-large.png?v=1777586171",
    "rating": 4.4,
    "reviews": 17,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-cinza-230x250-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 100,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças Itália 150 Fios Grid Dupla Face Grafite 230x250 cm",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-grafite-230x250-cm-69ebc82676006-large.png?v=1777586305",
    "rating": 5.0,
    "reviews": 241,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-grafite-230x250-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 101,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças Itália 150 Fios Grid Dupla Face Verde 230x250 cm",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-verde-230x250-cm-69ebb60321731-large.png?v=1777586192",
    "rating": 4.6,
    "reviews": 194,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-italia-150-fios-grid-dupla-face-verde-230x250-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 102,
    "name": "Kit Colcha Cobre Leito Queen 3Pç Estampada Itália 150 Fios Dupla Face Fiori 250x230cm",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-fiori-250x230cm-69eba8ca0d66d-large.png?v=1777586419",
    "rating": 4.9,
    "reviews": 240,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-fiori-250x230cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 103,
    "name": "Kit Colcha Cobre Leito Queen 3Pç Estampada Itália 150 Fios Dupla Face Genevieve 250x230cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-genevieve-250x230cm-69eba78830762-large.png?v=1777586394",
    "rating": 4.2,
    "reviews": 152,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-genevieve-250x230cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 104,
    "name": "Kit Colcha Cobre Leito Queen 3Pç Estampada Itália 150 Fios Dupla Face Natura 250x230cm",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-natura-250x230cm-69eb81ad21980-large.png?v=1777586298",
    "rating": 4.0,
    "reviews": 95,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-natura-250x230cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 105,
    "name": "Kit Colcha Cobre Leito Queen 3Pç Estampada Itália 150 Fios Dupla Face Rami 250x230cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-rami-250x230cm-69eba533271c2-large.png?v=1777586211",
    "rating": 4.5,
    "reviews": 77,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-queen-3pc-estampada-italia-150-fios-dupla-face-rami-250x230cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 106,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-fendi-160x220-cm-69ebc6f68f0ae-large.png?v=1777586347",
    "rating": 5.0,
    "reviews": 103,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 107,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Verde",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-verde-160x220-cm-69ebb489d6592-large.png?v=1777586242",
    "rating": 5.0,
    "reviews": 115,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-verde",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 108,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Dupla Face Estampado 150 Fios Itália Arabesco",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-cobre-leito-colcha-solteiro-2pc-dp-face-150-fios-italia-arabesco-160x220-cm-69ea6dc1d7e29-large.png?v=1777586329",
    "rating": 4.5,
    "reviews": 16,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-dupla-face-estampado-150-fios-italia-arabesco",
    "description": "Descrição do produto                           Os pequenos detalhes fazem a diferença em nossos lares. As colchas/Cobre Leitos também são itens de decoração, e são peças para transformar seu quarto em...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 109,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Dupla Face Matelado Pompeia Caqui",
    "price": 119.0,
    "compareAtPrice": 139.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-pompeia-solteiro-2-pecas-dupla-face-caqui-6984c894670c3-large.png?v=1777586335",
    "rating": 4.5,
    "reviews": 155,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-dupla-face-matelado-pompeia-caqui",
    "description": "Descrição do produto                           Colcha Pompéia Dupla Face Conforto, Estilo e Versatilidade A Colcha Pompéia Dupla Face é a escolha ideal para quem busca transformar o quarto com confort...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 110,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Dupla Face Matelado Pompeia Rose",
    "price": 119.0,
    "compareAtPrice": 139.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-pompeia-solteiro-2-pecas-dupla-face-rose-6984c89782373-large.png?v=1777586387",
    "rating": 4.4,
    "reviews": 68,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-dupla-face-matelado-pompeia-rose",
    "description": "Descrição do produto                           Colcha Pompéia Dupla Face Conforto, Estilo e Versatilidade A Colcha Pompéia Dupla Face é a escolha ideal para quem busca transformar o quarto com confort...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 111,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Itália 150 Fios Grid Dupla Face Cinza 160x220 cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-cinza-160x220-cm-69ebc6568cdce-large.png?v=1777586364",
    "rating": 4.5,
    "reviews": 171,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-cinza-160x220-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto!O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confeccionad...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 112,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Itália 150 Fios Grid Dupla Face Fendi 160x220 cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-fendi-160x220-cm-69ebb54fe05ea-large.png?v=1777586444",
    "rating": 3.9,
    "reviews": 130,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-fendi-160x220-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto!O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confeccionad...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 113,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Itália 150 Fios Grid Dupla Face Grafite 160x220 cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-grafite-160x220-cm-69ebc8397d8f4-large.png?v=1777586273",
    "rating": 4.5,
    "reviews": 203,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-grafite-160x220-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto!O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confeccionad...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 114,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças Itália 150 Fios Grid Dupla Face Verde 160x220 cm",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-verde-160x220-cm-69ebb61601244-large.png?v=1777586312",
    "rating": 4.5,
    "reviews": 35,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-grid-dupla-face-verde-160x220-cm",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto!O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confeccionad...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 115,
    "name": "Kit Colcha Cobre Leito Solteiro 2Pç Estampada Itália 150 Fios Dupla Face Flora 220x160cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm-69eba66aa2127-large.png?v=1777586375",
    "rating": 5.0,
    "reviews": 116,
    "category": "Colchas e Cobre-Leito",
    "slug": "kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 116,
    "name": "Tapete Chenille Bolinha Popcorn  38x58 cm Toque Macio e Design Moderno - Rosa",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-rosa-69b45c6934934-large.png?v=1777586477",
    "rating": 4.8,
    "reviews": 87,
    "category": "Diversos",
    "slug": "tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-rosa",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Chenille é a combinação ideal entre beleza, praticidade e aconchego. Com toque ...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 117,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Areia",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-areia-6983552665f58-large.png?v=1777586158",
    "rating": 4.5,
    "reviews": 48,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-areia",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 118,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Azul",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-6981f5174203a-large.png?v=1777586358",
    "rating": 4.4,
    "reviews": 24,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 119,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Cinza",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-cinza-698357d8723d3-large.png?v=1777586286",
    "rating": 4.3,
    "reviews": 78,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-cinza",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 120,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Cinza Escuro",
    "price": 99.9,
    "compareAtPrice": 149.85,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-cinza-escuro-69835572a8ff6-large.png?v=1777586249",
    "rating": 4.1,
    "reviews": 47,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-cinza-escuro",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 121,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Taupe",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-taupe-6983586c3c28c-large.png?v=1777586370",
    "rating": 4.1,
    "reviews": 244,
    "category": "Diversos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-taupe",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 122,
    "name": "Tapete Foam Passadeira Absorvente 40x110 cm Soft Antiderrapante Toque Macio - Rosa",
    "price": 19.0,
    "compareAtPrice": 49.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-passadeira-absorvente-40x110-cm-soft-antiderrapante-toque-macio-rosa-6981f0fdd3934-large.png?v=1777586437",
    "rating": 4.8,
    "reviews": 90,
    "category": "Diversos",
    "slug": "tapete-foam-passadeira-absorvente-40x110-cm-soft-antiderrapante-toque-macio-rosa",
    "description": "Descrição do produto                           Tapete  40x110 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque mac...",
    "isTest": false,
    "tags": [
      "Novidades"
    ]
  },
  {
    "id": 123,
    "name": "Roupas de Cama Afrodite  / 3 Peças em Algodão Super Soft",
    "price": 359.4,
    "compareAtPrice": 539.1,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/Sd9ffa45715d0413e850cbf2f2cfbbdb79.jpg?v=1762747754",
    "rating": 4.7,
    "reviews": 133,
    "category": "Diversos",
    "slug": "conjunto-afrodite",
    "description": "RENOVE A APARÊNCIA DE SEU QUARTO COM O CONJUNTO AFRODITE DE COLCHA E FRONHAS! Este lindo conjunto de fronhas e colcha são refinados, respiráveis e muito confortáveis. Feitos com tecido de alta qualida...",
    "isTest": false,
    "tags": [
      "Roupass De Cama 365"
    ]
  },
  {
    "id": 124,
    "name": "Conjunto Sleep Luxury™ /  Lençol de Seda Cetim + Fronhas",
    "price": 359.9,
    "compareAtPrice": 539.85,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/product-image-1778381317.jpg?v=1762747754",
    "rating": 4.9,
    "reviews": 108,
    "category": "Jogos de Lençol",
    "slug": "conjunto-sleep-luxury",
    "description": "DESFRUTE DE UMA ÓTIMA NOITE DE SONO QUE SÓ O NOSSO LENÇOL DE SEDA CETIM PODE TE OFERECER! O mais refinado, respirável e macio do mercado! As propriedades reguladoras de temperatura naturais do Silk ma...",
    "isTest": false,
    "tags": [
      "Roupass De Cama 365"
    ]
  },
  {
    "id": 125,
    "name": "Conjunto Gihng Pure Luxury-  Peças em 100% Algodão Egípcio",
    "price": 929.9,
    "compareAtPrice": 1394.85,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/product-image-1992823793.jpg?v=1762747754",
    "rating": 4.3,
    "reviews": 31,
    "category": "Diversos",
    "slug": "conjunto-gihng-pure-luxury-pecas-em-100-algodao-egipcio",
    "description": "Genuíno Conjunto de Roupas de Cama em Algodão Egípcio: Luxo &amp; Conforto que Você Jamais Viu ou Sentiu! Considerado um item altamente luxuoso, feito com fibras naturais exclusivas do magnífico algod...",
    "isTest": false,
    "tags": [
      "Roupass De Cama 365"
    ]
  },
  {
    "id": 126,
    "name": "Conjunto Calme™ de Lençol + Fronhas em Veludo Super Macio",
    "price": 345.9,
    "compareAtPrice": 518.85,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/He2558c5a0c7d47bdbef1fd76916c31d8Z.jpg?v=1762747754",
    "rating": 4.4,
    "reviews": 126,
    "category": "Jogos de Lençol",
    "slug": "conjunto-calme-veludo",
    "description": "O CONJUNTO NÚMERO UM EM ACONCHEGO, MACIEZ E BELEZA! Este belíssimo conjunto consegue te proporcionar um mix incomparável de conforto e praticidade ao deitar-se... Esqueça aqueles lençóis fininhos e de...",
    "isTest": false,
    "tags": [
      "Roupass De Cama 365"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category || (p.tags && p.tags.includes(category)));
}

export function getCollectionBySlug(slug: string) {
  return collections.find(c => c.slug === slug);
}

export function getProductsByCollection(slug: string) {
  const col = collections.find(c => c.slug === slug);
  if (col) return products.filter(p => p.category === col.name || (p.tags && p.tags.includes(col.name)));
  return products;
}
