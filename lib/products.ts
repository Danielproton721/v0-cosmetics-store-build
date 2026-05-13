export interface Product {
  id: number;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  category: string;
  slug: string;
  description: string;
  isTest?: boolean;
  tags?: string[];
  customerReviews?: ProductReview[];
  variants?: ProductVariant[];
  hairTypes?: string[];
  needs?: string[];
  benefits?: string[];
  howToUse?: string[];
  touchTest?: string[];
  precautions?: string[];
}

export interface ProductReview {
  id: string;
  author: string;
  comment: string;
  rating: number;
  photo?: string;
  date?: string;
}

export interface ProductVariant {
  id: number;
  label: string;
  price: number;
  compareAtPrice?: number;
  image?: string;
  images?: string[];
  available?: boolean;
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
    "productCount": 71,
    "description": "Nossa coleção de Jogos de Lençol"
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
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-3-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b38b54e7e-large.png?v=1777590244",
    "productCount": 19,
    "description": "Nossa coleção de Mais Vendidos"
  },
  {
    "slug": "diversos",
    "name": "Diversos",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-6981f5174203a-large_a6ec36a6-b411-4d3e-ac7b-d8a2f18d5d14.png?v=1777590268",
    "productCount": 14,
    "description": "Nossa coleção de Diversos"
  },
  {
    "slug": "toalhas",
    "name": "Toalhas",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-toalhas-paris-banho-2-pecas-450gm2-100-algodao-bege-claro-69b2bb6abaec0-large.png?v=1777590285",
    "productCount": 25,
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
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/edredom-hotelaria-300-fios-toque-de-algodao-casal-queen-king-dupla-face-matelasse-super-macio-260x240cm-branco-69c56f1714d1e-large.png?v=1777586197",
    "productCount": 67,
    "description": "Nossa coleção de Novidades"
  },
  {
    "slug": "roupas-de-cama-365",
    "name": "Roupas de Cama 365",
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/Sd9ffa45715d0413e850cbf2f2cfbbdb79.jpg?v=1762747754",
    "productCount": 4,
    "description": "Nossa coleção de Roupas de Cama 365"
  },
  {
    "slug": "kit-cama-posta-queen",
    "name": "Kit Cama Posta Queen",
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-brancocaquimarfim-69971bcd0137b-large.jpg?v=1778538599",
    "productCount": 24,
    "description": "Nossa coleção de Kit Cama Posta Queen"
  },
  {
    "slug": "kit-cama-posta",
    "name": "Kit Cama Posta",
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-brancocaquimarfim-69971bca9ebe7-large.jpg?v=1778538599",
    "productCount": 48,
    "description": "Nossa coleção de Kit Cama Posta"
  },
  {
    "slug": "decoracoes",
    "name": "Decorações",
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1db3b2199d-large.jpg?v=1778571844",
    "productCount": 20,
    "description": "Nossa coleção de Decorações"
  },
  {
    "slug": "cortinas",
    "name": "Cortinas",
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-cinza-60b63dcb62a3d-large.jpg?v=1778626273",
    "productCount": 20,
    "description": "Nossa coleção de Cortinas"
  },
  {
    "slug": "kit-cama-posta-king",
    "name": "Kit Cama Posta King",
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e38a991536-large.jpg?v=1778626571",
    "productCount": 24,
    "description": "Nossa coleção de Kit Cama Posta King"
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
    "tags": []
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
      "Roupas de Cama 365"
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
      "Roupas de Cama 365"
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
      "Roupas de Cama 365"
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
      "Roupas de Cama 365"
    ]
  },
  {
    "id": 127,
    "name": "Kit Cama Posta Queen Isabelle 8 Peças Branco/Cáqui/Marfim",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-brancocaquimarfim-69971bcd0137b-large.jpg?v=1778538599",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-brancocaquimarfim-69971bcd0137b-large.jpg?v=1778538599",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-brancocaquimarfim-69971bca9ebe7-large.jpg?v=1778538599"
    ],
    "rating": 4.7,
    "reviews": 44,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-isabelle-8-pecas-branco-caqui-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-127-1",
        "author": "Jarlene",
        "comment": "Amei o kit. Chegou no prazo. Recomendo.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 128,
    "name": "Kit Cama Posta Queen Isabelle 8 Peças Cinza/Marfim",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-cinzamarfim-69971b5ce7f57-large.jpg?v=1778538632",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-cinzamarfim-69971b5ce7f57-large.jpg?v=1778538632",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-cinzamarfim-69971b5dcac77-large.jpg?v=1778538632"
    ],
    "rating": 4.2,
    "reviews": 39,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-isabelle-8-pecas-cinza-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 129,
    "name": "Kit Cama Posta Queen Isabelle 8 Peças Fendi/Azul Marinho/Marfim",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-fendiazul-marinhomarfim-69971a3577152-large.jpg?v=1778538678",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-fendiazul-marinhomarfim-69971a3577152-large.jpg?v=1778538678",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-fendiazul-marinhomarfim-69971a362da49-large.jpg?v=1778538678"
    ],
    "rating": 4.7,
    "reviews": 20,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-isabelle-8-pecas-fendi-azul-marinho-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 130,
    "name": "Kit Cama Posta Queen Isabelle 8 Peças Palha/Rosê/Marfim",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palharosemarfim-699719c894712-large.jpg?v=1778538670",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palharosemarfim-699719c894712-large.jpg?v=1778538670",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palharosemarfim-699719c897d58-large.jpg?v=1778538670"
    ],
    "rating": 3.9,
    "reviews": 192,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-isabelle-8-pecas-palha-rose-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 131,
    "name": "Kit Cama Posta Queen Isabelle 8 Peças Palha/Vinho/Marfim",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palhavinhomarfim-699718db302e5-large.jpg?v=1778538694",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palhavinhomarfim-699718db302e5-large.jpg?v=1778538694",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palhavinhomarfim-699718db7cd26-large.jpg?v=1778538694"
    ],
    "rating": 4.6,
    "reviews": 205,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-isabelle-8-pecas-palha-vinho-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-131-1",
        "author": "Simone",
        "comment": "Simplesmente maravilhoso! Amei. Lindos e de excelente qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 132,
    "name": "Kit Cama Posta Queen Mônica 10 Peças Lótus Cinza/Branco/Prata",
    "price": 419.0,
    "compareAtPrice": 559.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-monica-10-pecas-percal-200-fios-estampado-matelado-lotus-cinzabrancoprata-697b6b4c593e5-large.jpg?v=1778538708",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-monica-10-pecas-percal-200-fios-estampado-matelado-lotus-cinzabrancoprata-697b6b4c593e5-large.jpg?v=1778538708",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-primavera-10-pecas-percal-200-fios-estampado-matelado-lotus-cinzabrancoprata-697a05e086b74-large.jpg?v=1778538708"
    ],
    "rating": 4.5,
    "reviews": 90,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-monica-10-pecas-lotus-cinza-branco-prata",
    "description": "O Kit Cama Posta Mônica foi pensado para transformar o quarto em um ambiente leve, elegante e acolhedor. A combinação do percal 200 fios , do acabamento matelado e da estampa floral cria uma cama post...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 133,
    "name": "Kit Cama Posta Queen Sabrina 8 Peças Branco/Outono/Bege",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-brancooutonobege-69931cb34c00f-large.jpg?v=1778538648",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-brancooutonobege-69931cb34c00f-large.jpg?v=1778538648",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-brancooutonobege-69931cb30b94d-large.jpg?v=1778538648"
    ],
    "rating": 4.9,
    "reviews": 22,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-sabrina-8-pecas-branco-outono-bege",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 134,
    "name": "Kit Cama Posta Queen Sabrina 8 Peças Cinza/Jardim Rosê/Prata",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzajardim-roseprata-69931d6535a2b-large.jpg?v=1778538640",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzajardim-roseprata-69931d6535a2b-large.jpg?v=1778538640",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzajardim-roseprata-69931d653a148-large.jpg?v=1778538640"
    ],
    "rating": 4.9,
    "reviews": 202,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-sabrina-8-pecas-cinza-jardim-rose-prata",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-134-1",
        "author": "ROSANGELA",
        "comment": "Simplesmente maravilhoso,amei esse kit, a qualidade dos itens me surpreendeu!!!!Super recomendo os produtos da linda casa.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 135,
    "name": "Kit Cama Posta Queen Sabrina 8 Peças Cinza/Xadrez Verde/Prata",
    "price": 379.0,
    "compareAtPrice": 499.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzaxadrez-verdeprata-69931da773fd1-large.jpg?v=1778538613",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzaxadrez-verdeprata-69931da773fd1-large.jpg?v=1778538613",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-sabrina-8-pecas-cinzaxadrez-verdeprata-69931da733f16-large.jpg?v=1778538613"
    ],
    "rating": 4.3,
    "reviews": 244,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-sabrina-8-pecas-cinza-xadrez-verde-prata",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 136,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Azul/Branco",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e378bb493c-large.jpg?v=1778538624",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e378bb493c-large.jpg?v=1778538624",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e378be3e3e-large.jpg?v=1778538624"
    ],
    "rating": 4.6,
    "reviews": 169,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-azul-branco",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-136-1",
        "author": "Luciane",
        "comment": "Lindo!!!",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/69ae23242713f.jpg"
      },
      {
        "id": "rev-136-2",
        "author": "Renan",
        "comment": "Comprei para fazer surpresa pra minha esposa e deu super certo. Recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-136-3",
        "author": "Lúcia",
        "comment": "Produtos muito bonitos, fáceis de lavar e tecidos frescos e muito macios.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 137,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Azul/Prata",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulprata-696e385a70401-large.jpg?v=1778538722",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulprata-696e385a70401-large.jpg?v=1778538722",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-azulprata-696e385a3601a-large.jpg?v=1778538722"
    ],
    "rating": 4.8,
    "reviews": 183,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-azul-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 138,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Cinza/Azul",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaazul-6967e21065f05-large.jpg?v=1778538654",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaazul-6967e21065f05-large.jpg?v=1778538654",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaazul-6967e21161395-large.jpg?v=1778538654"
    ],
    "rating": 4.9,
    "reviews": 112,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-cinza-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 139,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Cinza/Prata",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e35219dd2-large.jpg?v=1778538702",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e35219dd2-large.jpg?v=1778538702",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e352044cd-large.jpg?v=1778538702"
    ],
    "rating": 4.9,
    "reviews": 64,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-cinza-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 140,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Fendi/Marfim",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e355b48d04-large.jpg?v=1778538562",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e355b48d04-large.jpg?v=1778538562",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e355b46520-large.jpg?v=1778538562"
    ],
    "rating": 4.1,
    "reviews": 74,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-fendi-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 141,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Fendi/Prata",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e35f56736c-large.jpg?v=1778538619",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e35f56736c-large.jpg?v=1778538619",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e35f561656-large.jpg?v=1778538619"
    ],
    "rating": 4.1,
    "reviews": 14,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-fendi-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 142,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Marfim",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e55597b74-large.jpg?v=1778538687",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e55597b74-large.jpg?v=1778538687",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e5559ca9e-large.jpg?v=1778538687"
    ],
    "rating": 4.6,
    "reviews": 217,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 143,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Rosê/Azul",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseazul-6967e3c2b5f16-large.jpg?v=1778538731",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseazul-6967e3c2b5f16-large.jpg?v=1778538731",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseazul-6967e3c2c5a69-large.jpg?v=1778538731"
    ],
    "rating": 4.7,
    "reviews": 86,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-rose-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 144,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Rosê/Marfim",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-queen-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e3f7b48d93-large.jpg?v=1778538584",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-queen-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e3f7b48d93-large.jpg?v=1778538584",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-queen-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e3f7b5a526-large.jpg?v=1778538584"
    ],
    "rating": 4.2,
    "reviews": 123,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-rose-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 145,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Rosê/Prata",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e40240977-large.jpg?v=1778538716",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e40240977-large.jpg?v=1778538716",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e404569c3-large.jpg?v=1778538716"
    ],
    "rating": 4.9,
    "reviews": 142,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-branco-rose-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 146,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Cinza/Azul",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e4eb43b04-large.jpg?v=1778538591",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e4eb43b04-large.jpg?v=1778538591",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e4eb56ea5-large.jpg?v=1778538591"
    ],
    "rating": 3.9,
    "reviews": 120,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-cinza-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 147,
    "name": "Kit Cama Posta Queen Serena 10 Peças Percal 300 Fios Bordado Inglês Fendi/Azul",
    "price": 469.0,
    "compareAtPrice": 619.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e363a6aa35-large.jpg?v=1778538662",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e363a6aa35-large.jpg?v=1778538662",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e363a1c16b-large.jpg?v=1778538662"
    ],
    "rating": 4.2,
    "reviews": 27,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-serena-10-pecas-percal-300-fios-bordado-ingles-fendi-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 148,
    "name": "Kit Cama Posta Queen Vitória 8 Peças Cinza/Rosê",
    "price": 339.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-cinzarose-6985f0b46f52e-large.jpg?v=1778538607",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-cinzarose-6985f0b46f52e-large.jpg?v=1778538607",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-cinzarose-6985f0b269431-large.jpg?v=1778538607"
    ],
    "rating": 4.2,
    "reviews": 51,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-vitoria-8-pecas-cinza-rose",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-148-1",
        "author": "Yasmin",
        "comment": "Conjunto lindo e de qualidade! Ficou elegante.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 149,
    "name": "Kit Cama Posta Queen Vitória 8 Peças Dublin/Branco/Verde",
    "price": 339.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-dublinbrancoverde-6985f0f0eb7fa-large.jpg?v=1778538578",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-dublinbrancoverde-6985f0f0eb7fa-large.jpg?v=1778538578",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-dublinbrancoverde-6985f0f4141bb-large.jpg?v=1778538578"
    ],
    "rating": 5.0,
    "reviews": 215,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-vitoria-8-pecas-dublin-branco-verde",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 150,
    "name": "Kit Cama Posta Queen Vitória 8 Peças Fendi/Bege",
    "price": 339.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-fendibege-6985f140726f6-large.jpg?v=1778538570",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-fendibege-6985f140726f6-large.jpg?v=1778538570",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-vitoria-8-pecas-fendibege-6985f14070780-large.jpg?v=1778538570"
    ],
    "rating": 4.9,
    "reviews": 154,
    "category": "Kit Cama Posta Queen",
    "slug": "kit-cama-posta-queen-vitoria-8-pecas-fendi-bege",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 151,
    "name": "Tapete De Banheiro Bolinha Popcorn Antiderrapante 40x60cm Chenille Cinza",
    "price": 17.0,
    "compareAtPrice": 52.28,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza-691e0f27373f5-large.jpg?v=1778571837",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza-691e0f27373f5-large.jpg?v=1778571837",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza-64b2797616b47-large.jpg?v=1778571837",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza-691e0f27373f5-large_2a2f4244-6c13-4663-b032-733c27e90f75.jpg?v=1778618719",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza-64b2797616b47-large_957b1011-01cf-4a12-93af-530b911c024e.jpg?v=1778618719"
    ],
    "rating": 4.6,
    "reviews": 211,
    "category": "Toalhas",
    "slug": "tapete-de-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-cinza",
    "description": "O Tapete de Banheiro Bolinha Popcorn é a escolha perfeita para quem busca conforto e segurança no banheiro. Feito com uma superfície de chenille extremamente macia, este tapete proporciona uma sensaçã...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-151-1",
        "author": "Cristiana",
        "comment": "Muito bom!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-2",
        "author": "FLAVIO",
        "comment": "Atendeu plenamente às expectativas. Muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-3",
        "author": "Maria",
        "comment": "São bons e entregam o que prometem.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-4",
        "author": "Maria",
        "comment": "Ameiiii, são lindos, macios e bem derapante, e as cores são perfeitas, lindos estão de parabéns, na verdade já virei cliente de vocês, adoro seus produtos, só teve os travesseiro que não gostei, me decepcionei só com eles os outros produtos Amei",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/699b33dc4cecc.jpg"
      },
      {
        "id": "rev-151-5",
        "author": "Cristiana",
        "comment": "Muito bom!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-6",
        "author": "FLAVIO",
        "comment": "Atendeu plenamente às expectativas. Muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-7",
        "author": "Maria",
        "comment": "São bons e entregam o que prometem.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-151-8",
        "author": "Maria",
        "comment": "Ameiiii, são lindos, macios e bem derapante, e as cores são perfeitas, lindos estão de parabéns, na verdade já virei cliente de vocês, adoro seus produtos, só teve os travesseiro que não gostei, me decepcionei só com eles os outros produtos Amei",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/699b33dc4cecc.jpg"
      }
    ]
  },
  {
    "id": 152,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Azul",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1db3b2199d-large.jpg?v=1778571844",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1db3b2199d-large.jpg?v=1778571844",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1f76fbc2ee-large.jpg?v=1778571844",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1db3b2199d-large_5e572ceb-5134-4794-80d6-66b3762d04b9.jpg?v=1778618726",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul-63a1f76fbc2ee-large_cd458d07-a8d6-4c35-8868-07b9f3d18153.jpg?v=1778618726"
    ],
    "rating": 4.6,
    "reviews": 217,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-azul",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [
      "Toalhas"
    ],
    "customerReviews": [
      {
        "id": "rev-152-1",
        "author": "Maria",
        "comment": "ADOREI",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-2",
        "author": "Orlanda",
        "comment": "Lindo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-3",
        "author": "CARLOS",
        "comment": "MUITO BOM!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-4",
        "author": "Fatima",
        "comment": "Adorei o tapete. Lindo",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/69b32e43d2e5a.jpg"
      },
      {
        "id": "rev-152-5",
        "author": "Maria",
        "comment": "ADOREI",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-6",
        "author": "Orlanda",
        "comment": "Lindo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-7",
        "author": "CARLOS",
        "comment": "MUITO BOM!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-152-8",
        "author": "Fatima",
        "comment": "Adorei o tapete. Lindo",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/69b32e43d2e5a.jpg"
      }
    ]
  },
  {
    "id": 153,
    "name": "Tapete De Banheiro Bolinha Popcorn Antiderrapante 60x40cm Chenille Azul Marinho",
    "price": 17.0,
    "compareAtPrice": 52.28,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-marinho-691e0f13c15c7-large.jpg?v=1778571851",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-marinho-691e0f13c15c7-large.jpg?v=1778571851",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-azul-marinho-64b279744abdb-large.jpg?v=1778571851",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-marinho-691e0f13c15c7-large_ef5fc31e-ea4b-4bfa-af84-a8bf48bf6cf7.jpg?v=1778618742",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-banheiro-bolinha-popcorn-antiderrapante-40x60cm-chenille-azul-marinho-64b279744abdb-large_f89b7d11-172e-4dbc-b4d8-866ab097bcc1.jpg?v=1778618742"
    ],
    "rating": 4.9,
    "reviews": 76,
    "category": "Toalhas",
    "slug": "tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-marinho",
    "description": "O Tapete de Banheiro Bolinha Popcorn é a escolha perfeita para quem busca conforto e segurança no banheiro. Feito com uma superfície de chenille extremamente macia, este tapete proporciona uma sensaçã...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-153-1",
        "author": "Bruna",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-2",
        "author": "Bleiner",
        "comment": "Top...",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-3",
        "author": "Isabela",
        "comment": "Tapete lindo, confortável, elegante! Material de qualidade. Deu um super up no meu banheiro",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-4",
        "author": "Marcelo",
        "comment": "Muito bom custo benefício",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-5",
        "author": "Bruna",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-6",
        "author": "Bleiner",
        "comment": "Top...",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-7",
        "author": "Isabela",
        "comment": "Tapete lindo, confortável, elegante! Material de qualidade. Deu um super up no meu banheiro",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-153-8",
        "author": "Marcelo",
        "comment": "Muito bom custo benefício",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 154,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Off White",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white-66d60368d26e4-large.jpg?v=1778571858",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white-66d60368d26e4-large.jpg?v=1778571858",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white-66d603690d0fe-large.jpg?v=1778571859",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white-66d60368d26e4-large_269354b5-cd4b-4a82-81a0-c075ca8ddd2e.jpg?v=1778618754",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white-66d603690d0fe-large_711a92d0-1fa5-42cb-b075-68d20cbd0f3e.jpg?v=1778618754"
    ],
    "rating": 5.0,
    "reviews": 191,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-off-white",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [
      "Toalhas"
    ],
    "customerReviews": [
      {
        "id": "rev-154-1",
        "author": "Quenia",
        "comment": "Fofinho,adere ao solo,bonito e com preço bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-2",
        "author": "Elenice",
        "comment": "De qualidade e macio .",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-3",
        "author": "Rosane",
        "comment": "Excelente produto. Recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-4",
        "author": "Anna",
        "comment": "Produto lindo, super fofinho, tapete confortavel, Otima Qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-5",
        "author": "Quenia",
        "comment": "Fofinho,adere ao solo,bonito e com preço bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-6",
        "author": "Elenice",
        "comment": "De qualidade e macio .",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-7",
        "author": "Rosane",
        "comment": "Excelente produto. Recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-154-8",
        "author": "Anna",
        "comment": "Produto lindo, super fofinho, tapete confortavel, Otima Qualidade",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 155,
    "name": "Tapete De Banheiro Bolinha Popcorn Antiderrapante 60x40cm Chenille Rosa",
    "price": 17.0,
    "compareAtPrice": 52.28,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa-691e0f9987057-large.jpg?v=1778571866",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa-691e0f9987057-large.jpg?v=1778571866",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa-66d603b7b46c0-large.jpg?v=1778571866",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa-691e0f9987057-large_6930aba4-366b-4ca4-adb3-48a42e39ef70.jpg?v=1778618760",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa-66d603b7b46c0-large_a0291c1b-3fe9-4a8f-a1ce-9f11f65096a8.jpg?v=1778618760"
    ],
    "rating": 4.9,
    "reviews": 142,
    "category": "Toalhas",
    "slug": "tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-rosa",
    "description": "O Tapete de Banheiro Bolinha Popcorn é a escolha perfeita para quem busca conforto e segurança no banheiro. Feito com uma superfície de chenille extremamente macia, este tapete proporciona uma sensaçã...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-155-1",
        "author": "Beatriz",
        "comment": "Tapete de boa qualidade. Ele seca rápido",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-2",
        "author": "Dayane",
        "comment": "Ótima qualidade, super indicações!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-3",
        "author": "VERA",
        "comment": "Produto muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-4",
        "author": "Neusa",
        "comment": "Achei muito pequeno. Teria que ser 50×70",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-5",
        "author": "Beatriz",
        "comment": "Tapete de boa qualidade. Ele seca rápido",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-6",
        "author": "Dayane",
        "comment": "Ótima qualidade, super indicações!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-7",
        "author": "VERA",
        "comment": "Produto muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-155-8",
        "author": "Neusa",
        "comment": "Achei muito pequeno. Teria que ser 50×70",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 156,
    "name": "Tapete De Banheiro Bolinha Popcorn Antiderrapante 60x40cm Chenille Azul Claro",
    "price": 17.0,
    "compareAtPrice": 52.28,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro-691e0f749ea1d-large.jpg?v=1778571874",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro-691e0f749ea1d-large.jpg?v=1778571874",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro-66d603a44acec-large.jpg?v=1778571874",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro-691e0f749ea1d-large_39c41543-73cd-44f6-a74d-94af56eb49f9.jpg?v=1778618771",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro-66d603a44acec-large_a931973a-3cb7-4aa2-abaa-6d38f4d0b814.jpg?v=1778618771"
    ],
    "rating": 4.5,
    "reviews": 42,
    "category": "Toalhas",
    "slug": "tapete-de-banheiro-bolinha-popcorn-antiderrapante-60x40cm-chenille-azul-claro",
    "description": "O Tapete de Banheiro Bolinha Popcorn é a escolha perfeita para quem busca conforto e segurança no banheiro. Feito com uma superfície de chenille extremamente macia, este tapete proporciona uma sensaçã...",
    "isTest": false,
    "tags": []
  },
  {
    "id": 157,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm 200 Fios Estampadas Petit Poá Cáqui",
    "price": 39.0,
    "compareAtPrice": 59.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-caqui-6565c8ed84fca-large.jpg?v=1778571881",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-caqui-6565c8ed84fca-large.jpg?v=1778571881",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-caqui-6565c8ed8869e-large.jpg?v=1778571881"
    ],
    "rating": 4.1,
    "reviews": 122,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-200-fios-estampadas-petit-poa-caqui",
    "description": "Dê um novo ar ao seu sofá com o Kit 4 Capas de Almofadas Petit Poá. Estampadas com um design encantador, essas capas de 45x45cm são a escolha ideal para adicionar cor e estilo ao seu espaço. O tecido ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-157-1",
        "author": "Marlene",
        "comment": "Produto de excelente qualidade! Gostei muito , eu recomendo .",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-157-2",
        "author": "Daniela",
        "comment": "Lindas!!! Material de ótima qualidade. Acabento perfeito.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-157-3",
        "author": "Helenice",
        "comment": "Ótimo produto!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-157-4",
        "author": "Marta",
        "comment": "São lindas e clássicas, amei",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 158,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Micro Percal 300 Fios Aveline Off White",
    "price": 69.0,
    "compareAtPrice": 106.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-off-white-6572ff6783f51-large.jpg?v=1778571888",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-off-white-6572ff6783f51-large.jpg?v=1778571888",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-off-white-6572ff67855c3-large.jpg?v=1778571888"
    ],
    "rating": 4.3,
    "reviews": 154,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-micro-percal-300-fios-aveline-off-white",
    "description": "Que tal renovar o visual do seu sofá com muito estilo e praticidade? O Kit 4 Capas de Almofadas Aveline é o aliado perfeito nessa missão! Feitas em micro percal 300 fios, essas capas trazem o equilíbr...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-158-1",
        "author": "Sandy",
        "comment": "Gostei, muito bonitas e de qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-158-2",
        "author": "Adriana",
        "comment": "Lindas.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-158-3",
        "author": "Marilene",
        "comment": "Achei maravilhoso linda bem como a entrega foi muito rápida , cada vez fico feliz em comprar na linda casa",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-158-4",
        "author": "Tania",
        "comment": "Simplesmente amei, ótima qualidade, ótimo acabamento",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 159,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Chumbo",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo-697a5505e79d1-large.jpg?v=1778571895",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo-697a5505e79d1-large.jpg?v=1778571895",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo-697a55064a96f-large.jpg?v=1778571895",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo-697a5505e79d1-large_46ef3ac9-d79b-44c5-b5ef-84b826b1c67a.jpg?v=1778618863",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo-697a55064a96f-large_946cfab2-3425-451a-9ac8-d9ee64ad8166.jpg?v=1778618863"
    ],
    "rating": 4.6,
    "reviews": 97,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-chumbo",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [
      "Toalhas"
    ],
    "customerReviews": [
      {
        "id": "rev-159-1",
        "author": "Adriana",
        "comment": "Já tenho um e é maravilhoso. Por isso comprei. O preço também muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-2",
        "author": "Daiane",
        "comment": "Chegou dentro do prazo e é exatamente como nas fotos",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-3",
        "author": "Magali",
        "comment": "GOSTEI MUITO",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-4",
        "author": "Luciane",
        "comment": "Ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-5",
        "author": "Adriana",
        "comment": "Já tenho um e é maravilhoso. Por isso comprei. O preço também muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-6",
        "author": "Daiane",
        "comment": "Chegou dentro do prazo e é exatamente como nas fotos",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-7",
        "author": "Magali",
        "comment": "GOSTEI MUITO",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-159-8",
        "author": "Luciane",
        "comment": "Ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 160,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm 200 Fios Estampadas Petit Poá Rosê",
    "price": 39.0,
    "compareAtPrice": 59.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-rose-6565c9351671a-large.jpg?v=1778571902",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-rose-6565c9351671a-large.jpg?v=1778571902",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-rose-6565c935178b7-large.jpg?v=1778571902"
    ],
    "rating": 4.7,
    "reviews": 170,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-200-fios-estampadas-petit-poa-rose",
    "description": "Dê um novo ar ao seu sofá com o Kit 4 Capas de Almofadas Petit Poá. Estampadas com um design encantador, essas capas de 45x45cm são a escolha ideal para adicionar cor e estilo ao seu espaço. O tecido ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-160-1",
        "author": "Sebastiana",
        "comment": "São maravilhosas, lindas eu gostei muito, material ótimo comprem sem medo, são excelentes",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-160-2",
        "author": "SOLANGE",
        "comment": "Eu amei. Podem comprar sem dúvidas, vores bivas e são grossas e confortavel! Pura qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-160-3",
        "author": "Selma",
        "comment": "Uma graça, conforme o anúncio!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-160-4",
        "author": "Helenice",
        "comment": "Adorei as capas, ficaram perfeitas com o cobre leito.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 161,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm 200 Fios Estampadas Petit Poá Marinho",
    "price": 39.0,
    "compareAtPrice": 59.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-marinho-6565c90e92494-large.jpg?v=1778571910",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-marinho-6565c90e92494-large.jpg?v=1778571910",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-200-fios-estampadas-petit-poa-marinho-6565c90e9381f-large.jpg?v=1778571910"
    ],
    "rating": 4.3,
    "reviews": 112,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-200-fios-estampadas-petit-poa-marinho",
    "description": "Dê um novo ar ao seu sofá com o Kit 4 Capas de Almofadas Petit Poá. Estampadas com um design encantador, essas capas de 45x45cm são a escolha ideal para adicionar cor e estilo ao seu espaço. O tecido ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-161-1",
        "author": "Maria",
        "comment": "Ótimo produto superou todas as minhas expectativas obrigado",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-161-2",
        "author": "Helenice",
        "comment": "Ficaram perfeitas com o cobre leito!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-161-3",
        "author": "Luzia",
        "comment": "São lindas as capas de almofadas em poá estou apaixonada sem palavras obrigado casa linda minha loja preferida",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/698b18b85f3c7.jpg"
      },
      {
        "id": "rev-161-4",
        "author": "Roselaine",
        "comment": "Ótimo",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 162,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Bege",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-bege-697a54cb6e59b-large.jpg?v=1778571918",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-bege-697a54cb6e59b-large.jpg?v=1778571918",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-bege-697a54cb5f1f1-large.jpg?v=1778571918"
    ],
    "rating": 4.5,
    "reviews": 192,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-bege",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-162-1",
        "author": "Maria",
        "comment": "ADOREI",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-162-2",
        "author": "Vânia",
        "comment": "Muito lindo. Gostei do material.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-162-3",
        "author": "FERNANDA",
        "comment": "Produto bom é útil",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 163,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Micro Percal 300 Fios Aveline Caqui",
    "price": 69.0,
    "compareAtPrice": 106.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-caqui-6572ff666413c-large.jpg?v=1778571926",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-caqui-6572ff666413c-large.jpg?v=1778571926",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-caqui-6572ff66656bb-large.jpg?v=1778571926"
    ],
    "rating": 4.8,
    "reviews": 21,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-micro-percal-300-fios-aveline-caqui",
    "description": "Que tal renovar o visual do seu sofá com muito estilo e praticidade? O Kit 4 Capas de Almofadas Aveline é o aliado perfeito nessa missão! Feitas em micro percal 300 fios, essas capas trazem o equilíbr...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-163-1",
        "author": "Suzana",
        "comment": "Ameiii",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-163-2",
        "author": "MARIA",
        "comment": "Tecido bom, cor bonita. Ainda não estou usando-as.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-163-3",
        "author": "Telma",
        "comment": "Simplesmente amei as capas,chegaram antes do prazo. Em breve irei efetuar mais compras.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-163-4",
        "author": "TACIANA",
        "comment": "Perfeitas! Simplesmente amei. Qualidade excelente!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 164,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Petróleo",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-petroleo-697a539f933fd-large.jpg?v=1778571933",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-petroleo-697a539f933fd-large.jpg?v=1778571933",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-petroleo-697a539edb9dd-large.jpg?v=1778571933"
    ],
    "rating": 3.9,
    "reviews": 234,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-petroleo",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-164-1",
        "author": "Leticia",
        "comment": "Ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-164-2",
        "author": "Quenia",
        "comment": "Fofinho,adere ao solo,bonito e com preço bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-164-3",
        "author": "Luciane",
        "comment": "Ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 165,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Flannel Bariloche Mostarda",
    "price": 59.0,
    "compareAtPrice": 79.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-flannel-bariloche-mostarda-663cf1a558af0-large.jpg?v=1778571940",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-flannel-bariloche-mostarda-663cf1a558af0-large.jpg?v=1778571940",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-mostarda-666445a97cf41-large.jpg?v=1778571940"
    ],
    "rating": 4.0,
    "reviews": 193,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-mostarda",
    "description": "Quer dar um toque aconchegante e estiloso ao seu sofá? Com o Kit 4 Capas De Almofadas Flannel Bariloche, você transforma qualquer ambiente com charme e praticidade. As capas, no tamanho perfeito de 45...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-165-1",
        "author": "Ana",
        "comment": "Kit lindo! Eu amei, ficou perfeito aqui em casa, ótima qualidade e preço justo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-165-2",
        "author": "Claudirene",
        "comment": "Amei além de ser lindas são de ótima qualidade show",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-165-3",
        "author": "Claudirene",
        "comment": "Adorei além de ser lindas e de ótima qualidade show",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-165-4",
        "author": "Marley",
        "comment": "Gostei muito, qualidade excelente, cor vibrante",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 166,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 60x30cm Micro Percal 300 Fios Aveline Off White",
    "price": 69.0,
    "compareAtPrice": 106.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-657307d33654b-large.jpg?v=1778571948",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-657307d33654b-large.jpg?v=1778571948",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-6572ff6a2cd9b-large.jpg?v=1778571948"
    ],
    "rating": 3.9,
    "reviews": 150,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-60x30cm-micro-percal-300-fios-aveline-off-white",
    "description": "O Kit Capas de Almofadas Aveline é a escolha perfeita para quem deseja renovar a decoração do sofá com elegância e conforto. Com tamanho de 60cm x 30cm, essas capas são feitas de micro percal de 300 f...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-166-1",
        "author": "VANIA",
        "comment": "Lindas! Superou as minhas expectativas!! As capas são grandes e muito delicadas.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-166-2",
        "author": "Telma",
        "comment": "Amei as capas,valeu a pena Chegou antes da data previsto. Em breve irei efetuar mais compras.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-166-3",
        "author": "Denilda",
        "comment": "Amei os produtos, todos de excelente qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-166-4",
        "author": "Linda",
        "comment": "Amei era tudo que eu esperava",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 167,
    "name": "Tapete de Banheiro Hotelaria Antiderrapante 50x70cm Algodão 400g/m² Basic Verde Pinho",
    "price": 19.0,
    "compareAtPrice": 29.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-verde-pinho-6904a03e03085-large.jpg?v=1778571955",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-verde-pinho-6904a03e03085-large.jpg?v=1778571955",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-verde-pinho-6904a03e1d9d8-large.jpg?v=1778571955"
    ],
    "rating": 4.5,
    "reviews": 240,
    "category": "Decorações",
    "slug": "tapete-de-banheiro-hotelaria-antiderrapante-50x70cm-algodao-400g-m-basic-verde-pinho",
    "description": "Deixe seu banheiro mais bonito e confortável com o Tapete de Banheiro Basic. Feito em algodão macio, ele proporciona uma sensação suave aos pés, tornando o momento após o banho muito mais agradável. S...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-167-1",
        "author": "Amaziles",
        "comment": "Chegou antes do prazo, parece muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-167-2",
        "author": "Dayane",
        "comment": "Lindoooo",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 168,
    "name": "Kit 4 Almofadas Cheias Decorativas para Sofá 60x30cm Micro Percal 300 Fios Aveline Off White",
    "price": 139.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-65730b2d44240-large.jpg?v=1778571962",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-65730b2d44240-large.jpg?v=1778571962",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-almofadas-60x30cm-micro-percal-300-fios-aveline-off-white-65730b2d452d1-large.jpg?v=1778571962"
    ],
    "rating": 4.2,
    "reviews": 195,
    "category": "Decorações",
    "slug": "kit-4-almofadas-cheias-decorativas-para-sofa-60x30cm-micro-percal-300-fios-aveline-off-white",
    "description": "Transforme o visual do seu sofá ou cama com o Kit 4 Almofadas Cheias Aveline. Ideal para trazer um toque de sofisticação e conforto para sua sala, este kit oferece quatro almofadas retangulares que sã...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-168-1",
        "author": "Valéria",
        "comment": "As almofadas são lindas e valorizam a arrumação com certeza! Amei!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-168-2",
        "author": "Ivete",
        "comment": "Boa qualidade, gostei.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-168-3",
        "author": "Ivete",
        "comment": "Excelente",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-168-4",
        "author": "NILDA",
        "comment": "ADOREI AS ALMOFADAS SÃO LINDAS",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 169,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Flannel Bariloche Marinho",
    "price": 59.0,
    "compareAtPrice": 79.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-flannel-bariloche-marinho-663cf193246c5-large.jpg?v=1778571970",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-flannel-bariloche-marinho-663cf193246c5-large.jpg?v=1778571970",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-marinho-66644582b1d7d-large.jpg?v=1778571970"
    ],
    "rating": 3.9,
    "reviews": 222,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-marinho",
    "description": "Quer dar um toque aconchegante e estiloso ao seu sofá? Com o Kit 4 Capas De Almofadas Flannel Bariloche, você transforma qualquer ambiente com charme e praticidade. As capas, no tamanho perfeito de 45...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-169-1",
        "author": "Angela",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-169-2",
        "author": "Rosemeire",
        "comment": "Lindas,amei, vocês estão de parabéns.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-169-3",
        "author": "Rodrigo",
        "comment": "As capas são ótimas, minha mãe adorou! Enviaram bem rápido. Obrigado!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-169-4",
        "author": "Caroline",
        "comment": "São lindas e macias! Excelente custo benefício :)",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 170,
    "name": "Tapete de Banheiro Hotelaria Antiderrapante 50x70cm Algodão 400g/m² Basic Petróleo",
    "price": 19.0,
    "compareAtPrice": 29.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-petroleo-6904a027e0861-large.jpg?v=1778571977",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-petroleo-6904a027e0861-large.jpg?v=1778571977",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-petroleo-6904a02886a08-large.jpg?v=1778571977"
    ],
    "rating": 4.5,
    "reviews": 174,
    "category": "Decorações",
    "slug": "tapete-de-banheiro-hotelaria-antiderrapante-50x70cm-algodao-400g-m-basic-petroleo",
    "description": "Deixe seu banheiro mais bonito e confortável com o Tapete de Banheiro Basic. Feito em algodão macio, ele proporciona uma sensação suave aos pés, tornando o momento após o banho muito mais agradável. S...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-170-1",
        "author": "ADRIANO",
        "comment": "Produto bom para o uso diário, de boa qualidade.",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/696fb0fab586b.jpeg"
      }
    ]
  },
  {
    "id": 171,
    "name": "Tapete de Banheiro Hotelaria Antiderrapante 50x70cm Algodão 400g/m² Basic Azul",
    "price": 19.0,
    "compareAtPrice": 29.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-azul-69049fdd469e1-large.jpg?v=1778571983",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-de-banheiro-50x70cm-algodao-400gm2-piso-antiderrapante-basic-azul-69049fdd469e1-large.jpg?v=1778571983"
    ],
    "rating": 4.9,
    "reviews": 82,
    "category": "Decorações",
    "slug": "tapete-de-banheiro-hotelaria-antiderrapante-50x70cm-algodao-400g-m-basic-azul",
    "description": "Deixe seu banheiro mais bonito e confortável com o Tapete de Banheiro Basic. Feito em algodão macio, ele proporciona uma sensação suave aos pés, tornando o momento após o banho muito mais agradável. S...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-171-1",
        "author": "Marilia",
        "comment": "Muito bom, principalmente pelo detalhe de ser antiderrapante",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-171-2",
        "author": "Ernesto",
        "comment": "São excelentes, antiderrapantes bonitas, combinando perfeitamente com as de banho e rosto. Ficou conjunto perfeito. Parabéns!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 172,
    "name": "Tapete Ultra Absorvente 60x40cm Soft Antiderrapante 100% Poliéster Rosa",
    "price": 19.0,
    "compareAtPrice": 55.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-rosa-697a5468d3544-large.jpg?v=1778571990",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-rosa-697a5468d3544-large.jpg?v=1778571990",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-rosa-697a5468bd819-large.jpg?v=1778571990"
    ],
    "rating": 4.8,
    "reviews": 183,
    "category": "Decorações",
    "slug": "tapete-ultra-absorvente-60x40cm-soft-antiderrapante-100-poliester-rosa",
    "description": "O Tapete Ultra Absorvente Soft Antiderrapante é o aliado perfeito para quem valoriza conforto e praticidade no dia a dia. Com uma superfície macia e altamente absorvente, ele é ideal para manter o amb...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-172-1",
        "author": "Lílian",
        "comment": "Bom custo benefício. É fofinho (não muito, mas é fofinho), seca rápido e é antiderrapante.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 173,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Flannel Bariloche Cinza",
    "price": 59.0,
    "compareAtPrice": 79.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-cinza-66632a3f14e6b-large.jpg?v=1778571997",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-cinza-66632a3f14e6b-large.jpg?v=1778571997",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-cinza-66632ccedf0a0-large.jpg?v=1778571997"
    ],
    "rating": 4.2,
    "reviews": 177,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-flannel-bariloche-cinza",
    "description": "Quer dar um toque aconchegante e estiloso ao seu sofá? Com o Kit 4 Capas De Almofadas Flannel Bariloche, você transforma qualquer ambiente com charme e praticidade. As capas, no tamanho perfeito de 45...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-173-1",
        "author": "Natalia",
        "comment": "Não gostei do tecido brilhante",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-173-2",
        "author": "Rosemeire",
        "comment": "Lindas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-173-3",
        "author": "Lana",
        "comment": "Lindas e práticas. O zíper embutido é muito útil!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-173-4",
        "author": "Geni",
        "comment": "Adorei!!!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 174,
    "name": "Kit 4 Capas De Almofadas Decorativas para Sofá 45x45cm Micro Percal 300 Fios Aveline Rosê",
    "price": 69.0,
    "compareAtPrice": 106.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-rose-6572ff687f911-large.jpg?v=1778572004",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-rose-6572ff687f911-large.jpg?v=1778572004",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-4-capas-de-almofadas-45x45cm-micro-percal-300-fios-aveline-rose-6572ff6881c13-large.jpg?v=1778572004"
    ],
    "rating": 3.9,
    "reviews": 120,
    "category": "Decorações",
    "slug": "kit-4-capas-de-almofadas-decorativas-para-sofa-45x45cm-micro-percal-300-fios-aveline-rose",
    "description": "Que tal renovar o visual do seu sofá com muito estilo e praticidade? O Kit 4 Capas de Almofadas Aveline é o aliado perfeito nessa missão! Feitas em micro percal 300 fios, essas capas trazem o equilíbr...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-174-1",
        "author": "Vera",
        "comment": "Gostei muito das almofadas. Ótimo material. Estão enfeitando minha sala.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-174-2",
        "author": "MARIA",
        "comment": "Almofadas maravilhosas, amei e recomendo! Lindas , excelente material e cores lindas! A linda casa é a minha loja preferida em itens de cama e banho, mantas, almofadas etc... ! Parabéns pelo bom gosto das estampas também!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-174-3",
        "author": "Angela",
        "comment": "Muito linda e aconchegante ! É muita macies do tecido Já comprei outra para dar de presente !",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-174-4",
        "author": "Maria",
        "comment": "Maravilhosa",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 175,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Munique Cinza/Rosê",
    "price": 119.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-cinzarose-641ac8de6a4f7-large.jpg?v=1778618735",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-cinzarose-641ac8de6a4f7-large.jpg?v=1778618735",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-cinzarose-641ac8de6b81c-large.jpg?v=1778618735"
    ],
    "rating": 4.8,
    "reviews": 123,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-munique-cinza-rose",
    "description": "Imagine a sensação de sair do banho e se envolver em toalhas que são a combinação perfeita de suavidade e absorção. É isso que você encontra no Jogo de Banho Munique. Feito de 100% algodão e com uma g...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-175-1",
        "author": "Helena",
        "comment": "Gostei bastante.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-175-2",
        "author": "Elizabeth",
        "comment": "São boas e bonitas, gostei muito",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-175-3",
        "author": "Vera",
        "comment": "Amei.Super indico todos os produtos da linda casa.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-175-4",
        "author": "Fabricia",
        "comment": "Gostei do produto",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 176,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Branco",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-branco-648c609e92d53-large.jpg?v=1778618749",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-branco-648c609e92d53-large.jpg?v=1778618749",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-branco-648c609e946a2-large.jpg?v=1778618749"
    ],
    "rating": 4.3,
    "reviews": 76,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-branco",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-176-1",
        "author": "Maria",
        "comment": "Amei!! Bem oque eu queria!!Chegou mais rápido que imaginei!!Parabéns!!Obrigado",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-176-2",
        "author": "ELAINE",
        "comment": "Lindo, ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-176-3",
        "author": "MARIA",
        "comment": "Lindo muito bom amei.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-176-4",
        "author": "Maria",
        "comment": "Lindo demais muito bom mesmo parabéns",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 177,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Cinza",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinza-648c609f434ab-large.jpg?v=1778618766",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinza-648c609f434ab-large.jpg?v=1778618766",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinza-648c609f44a5c-large.jpg?v=1778618766"
    ],
    "rating": 4.9,
    "reviews": 148,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-cinza",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-177-1",
        "author": "Consuelo",
        "comment": "Maravilhosos",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-177-2",
        "author": "Nayla",
        "comment": "Tolha grande, macia, enxuga super bem, além de ser muito bonita, escolhi a cor cinza. O processo de compra e entrega foi simples e rápido, chegou antes do previsto.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-177-3",
        "author": "Paulo",
        "comment": "Produto de ótima qualidade, estou muito satisfeito, processo de compra até a entrega, perfeito!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-177-4",
        "author": "Ernesto",
        "comment": "São excelentes os dois jogos de toalhas de banho e rosto que comprei. Parabéns!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 178,
    "name": "Jogo De Banho 2 Peças 430g/M² Capri Toalhas Banhão 100% Algodão Off White",
    "price": 79.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-off-white-667ecedc449a3-large.jpg?v=1778618779",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-off-white-667ecedc449a3-large.jpg?v=1778618779",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-off-white-667ecedd7be94-large.jpg?v=1778618779"
    ],
    "rating": 4.8,
    "reviews": 135,
    "category": "Toalhas",
    "slug": "jogo-de-banho-2-pecas-430g-m-capri-toalhas-banhao-100-algodao-off-white",
    "description": "Descubra o prazer de um banho relaxante com o Jogo de Banho 2 Peças Capri. Feitas com 100% algodão de alta qualidade e gramatura de 430g/m², estas toalhas são sinônimo de suavidade, conforto e elegânc...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-178-1",
        "author": "Fernanda",
        "comment": "Maravilhosa. Macia,seca direitinho e muito bonita.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-178-2",
        "author": "Francisco",
        "comment": "Excelente qualidade e detalhes.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-178-3",
        "author": "Leila",
        "comment": "Boa tarde linda casa obrigada por a agilidade na entrega amei minhas toalhas são boas e super macias e cheirosas valeu comprarei más vezes com vocês bjs.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-178-4",
        "author": "Norival",
        "comment": "Produtos de excelente de alta qualidade, entrega muito rápida.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 179,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Munique Verde/Rosê",
    "price": 119.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-verderose-641ac8df7478f-large.jpg?v=1778618787",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-verderose-641ac8df7478f-large.jpg?v=1778618787",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-munique-100-algodao-verderose-641ac8df7613b-large.jpg?v=1778618787"
    ],
    "rating": 4.8,
    "reviews": 135,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-munique-verde-rose",
    "description": "Imagine a sensação de sair do banho e se envolver em toalhas que são a combinação perfeita de suavidade e absorção. É isso que você encontra no Jogo de Banho Munique. Feito de 100% algodão e com uma g...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-179-1",
        "author": "Gizela",
        "comment": "As toalhas foram compradas para presente. Achei lindas, chegou bem rápido, bem embaladas, como são para presente não foram usadas, mas acredito que a pessoa que vai ganhar gostou muito.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-179-2",
        "author": "Nilma",
        "comment": "Gostei TB mas ainda vou usar pra ver se é macia rssss",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-179-3",
        "author": "Evelyn",
        "comment": "Toalhas bonitas e de bom tamanho.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-179-4",
        "author": "Márcia",
        "comment": "Adorei. Lindas, tamanho perfeito, macias.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 180,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Cinza/Rosê",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinzarose-648c60a00909d-large.jpg?v=1778618794",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinzarose-648c60a00909d-large.jpg?v=1778618794",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-cinzarose-648c60a00a2d3-large.jpg?v=1778618794"
    ],
    "rating": 4.7,
    "reviews": 26,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-cinza-rose",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-180-1",
        "author": "Vânia",
        "comment": "Ótimas! Secam muito bem, todos gostaram!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-180-2",
        "author": "Elizete",
        "comment": "O produto parece bom, não usei!Mas o preço é bem acessível e a entrega foi rápida!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-180-3",
        "author": "Alessandra",
        "comment": "Qualidade muito boa.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-180-4",
        "author": "Edinalva",
        "comment": "Ótimos produtos",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 181,
    "name": "Jogo De Banho 2 Peças 430g/M² Capri Toalhas Banhão 100% Algodão Azul Encantado",
    "price": 79.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-azul-encantado-667ecf30e8c29-large.jpg?v=1778618800",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-azul-encantado-667ecf30e8c29-large.jpg?v=1778618800",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-azul-encantado-667ecf3090db5-large.jpg?v=1778618800"
    ],
    "rating": 5.0,
    "reviews": 233,
    "category": "Toalhas",
    "slug": "jogo-de-banho-2-pecas-430g-m-capri-toalhas-banhao-100-algodao-azul-encantado",
    "description": "Descubra o prazer de um banho relaxante com o Jogo de Banho 2 Peças Capri. Feitas com 100% algodão de alta qualidade e gramatura de 430g/m², estas toalhas são sinônimo de suavidade, conforto e elegânc...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-181-1",
        "author": "Maria",
        "comment": "Produtos de qualidade valeu a compra,",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-181-2",
        "author": "Albeve",
        "comment": "Excelente",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-181-3",
        "author": "Meirilane",
        "comment": "Produto de qualidade e entrega antes do prazo. Super indico!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-181-4",
        "author": "Rovena",
        "comment": "Produto muito bonito e de muita qualidade. Ótimo custo benefício. E o vendedor, nota 10. Tive todo o suporte necessário, até a entrega. Super recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 182,
    "name": "Jogo De Banho 2 Peças 430g/M² Capri Toalhas Banhão 100% Algodão Verde Sutil",
    "price": 79.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-verde-sutil-667ecf21d719a-large.jpg?v=1778618808",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-verde-sutil-667ecf21d719a-large.jpg?v=1778618808",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-verde-sutil-667ecf22ba31a-large.jpg?v=1778618808"
    ],
    "rating": 4.0,
    "reviews": 13,
    "category": "Toalhas",
    "slug": "jogo-de-banho-2-pecas-430g-m-capri-toalhas-banhao-100-algodao-verde-sutil",
    "description": "Descubra o prazer de um banho relaxante com o Jogo de Banho 2 Peças Capri. Feitas com 100% algodão de alta qualidade e gramatura de 430g/m², estas toalhas são sinônimo de suavidade, conforto e elegânc...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-182-1",
        "author": "Ieda",
        "comment": "Produto muito bom, enxuga bem, o tecido é agradavel e um bom tamanho.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-182-2",
        "author": "Maria",
        "comment": "Adorei,muito macias,e grandes",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-182-3",
        "author": "ELIANA",
        "comment": "As toalhas corresponderam á expectativa, a gramatura delas é perfeita, não são pesadas e muito macias",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-182-4",
        "author": "Márcia",
        "comment": "Amei as toalhas! São macias e absorvem bem a água.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 183,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Verde",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-verde-648c60a230a6a-large.jpg?v=1778618816",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-verde-648c60a230a6a-large.jpg?v=1778618816",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-verde-648c60a231dca-large.jpg?v=1778618816"
    ],
    "rating": 5.0,
    "reviews": 137,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-verde",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-183-1",
        "author": "Regina",
        "comment": "Toalha maravilhosa",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-183-2",
        "author": "Laurinete",
        "comment": "A toalha e muito bonita e boa. Gostei muito. Recomendo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-183-3",
        "author": "Liora",
        "comment": "São mesmo muito macias, preço justo, cores lindas, com certeza recomendo e vou fazer novas compras.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-183-4",
        "author": "Elizangela",
        "comment": "Produto bom",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 184,
    "name": "Jogo De Banho 2 Peças 430g/M² Capri Toalhas Banhão 100% Algodão Rosa Romã",
    "price": 79.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-rosa-roma-667ed16cc48f0-large.jpg?v=1778618821",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-rosa-roma-667ed16cc48f0-large.jpg?v=1778618821",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-100-algodao-rosa-roma-667ed16cc6d85-large.jpg?v=1778618821"
    ],
    "rating": 3.9,
    "reviews": 12,
    "category": "Toalhas",
    "slug": "jogo-de-banho-2-pecas-430g-m-capri-toalhas-banhao-100-algodao-rosa-roma",
    "description": "Descubra o prazer de um banho relaxante com o Jogo de Banho 2 Peças Capri. Feitas com 100% algodão de alta qualidade e gramatura de 430g/m², estas toalhas são sinônimo de suavidade, conforto e elegânc...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-184-1",
        "author": "Andréa",
        "comment": "Toalhas maravilhosa,grande e seca bem",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-184-2",
        "author": "Leila",
        "comment": "Adorei as toalhas chegaram super rápido e são de excelente qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-184-3",
        "author": "Angela",
        "comment": "Adorei já vem macia e cheirosas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-184-4",
        "author": "Leni",
        "comment": "Achei lindo. Muito bom.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 185,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Rosê/Verde",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-roseverde-648c60a16edee-large.jpg?v=1778618826",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-roseverde-648c60a16edee-large.jpg?v=1778618826",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-roseverde-648c60a16fe4c-large.jpg?v=1778618826"
    ],
    "rating": 4.1,
    "reviews": 98,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-rose-verde",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-185-1",
        "author": "Claudio",
        "comment": "Produto muito bom. Toalhas macias e boa absorção",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-185-2",
        "author": "Marco",
        "comment": "perfeito , como mostra nas fotos",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-185-3",
        "author": "Roberto",
        "comment": "Produto muito bom! Superou minha expectativa.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-185-4",
        "author": "Célia",
        "comment": "Muito macia! Adorei!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 186,
    "name": "Jogo De Banho 2 Peças 430g/M² Capri Toalhas Banhão 100% Algodão Cinza Névoa",
    "price": 79.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-banhao-100-algodao-cinza-nevoa-681bb33809d7b-large.jpg?v=1778618834",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-banhao-100-algodao-cinza-nevoa-681bb33809d7b-large.jpg?v=1778618834",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-2-pecas-430gm2-capri-toalhas-banhao-100-algodao-cinza-nevoa-681bb337712d2-large.jpg?v=1778618834"
    ],
    "rating": 4.1,
    "reviews": 188,
    "category": "Toalhas",
    "slug": "jogo-de-banho-2-pecas-430g-m-capri-toalhas-banhao-100-algodao-cinza-nevoa",
    "description": "Descubra o prazer de um banho relaxante com o Jogo de Banho 2 Peças Capri. Feitas com 100% algodão de alta qualidade e gramatura de 430g/m², estas toalhas são sinônimo de suavidade, conforto e elegânc...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-186-1",
        "author": "Cleia",
        "comment": "Bom tamanho e textura macia",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-186-2",
        "author": "Marta",
        "comment": "Ótimo produto",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-186-3",
        "author": "Jane",
        "comment": "Amei minha compra, estão de parabéns com a qualidade e tempo de entrega.Com certeza comprarei mais",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-186-4",
        "author": "Ronaldo",
        "comment": "Além de linda a toalha é muito boa, vou comprar novamente",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 187,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Hortência Marinho",
    "price": 129.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-marinho-6604795c4e4dd-large.jpg?v=1778618842",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-marinho-6604795c4e4dd-large.jpg?v=1778618842",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-marinho-6604795c51474-large.jpg?v=1778618842"
    ],
    "rating": 4.1,
    "reviews": 116,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-hortencia-marinho",
    "description": "Transforme sua rotina de banho em uma experiência de conforto e bem-estar com o Jogo de Banho Hortência. Feitas 100% de algodão, essas toalhas são incrivelmente macias e absorventes, graças à sua gram...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-187-1",
        "author": "Jênifer",
        "comment": "A toalha realmente é maior que o padrão porém o tecido é fino, de pouca qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-187-2",
        "author": "Helvia",
        "comment": "As toalhas são lindas! Ótima qualidade. Chegaram antes do prazo. Super recomendo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-187-3",
        "author": "Maria",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-187-4",
        "author": "James",
        "comment": "veio yudo normal",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 188,
    "name": "Jogo De Banho 5 Peças 100% Algodão 430g/M² Comfort Rosê",
    "price": 167.0,
    "compareAtPrice": 226.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-rose-648c60a0b6137-large.jpg?v=1778618850",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-rose-648c60a0b6137-large.jpg?v=1778618850",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-5-pcs-comfort-100-algodao-rose-648c60a0b4da2-large.jpg?v=1778618850"
    ],
    "rating": 4.1,
    "reviews": 152,
    "category": "Toalhas",
    "slug": "jogo-de-banho-5-pecas-100-algodao-430g-m-comfort-rose",
    "description": "Desfrute de um toque de luxo todos os dias com o Jogo de Banho Comfort 100% Algodão. Feito com materiais de alta qualidade e uma gramatura de 430g/m², este jogo de toalhas transforma o simples ato de ...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-188-1",
        "author": "Regiane",
        "comment": "Amei já virei cliente",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-188-2",
        "author": "Gizelda",
        "comment": "Produto de ótima qualidade ,maciez ,sit confiável. Pretendo comprar mais !",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-188-3",
        "author": "Salete",
        "comment": "Bom o produto",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-188-4",
        "author": "Ivani",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 189,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Hortência Pérola/Bambu",
    "price": 129.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-toalhas-banhao-100-algodao-perolabambu-682b0eb8bdd03-large.jpg?v=1778618855",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-toalhas-banhao-100-algodao-perolabambu-682b0eb8bdd03-large.jpg?v=1778618855",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-toalhas-banhao-100-algodao-perolabambu-682b0eb8bf7e7-large.jpg?v=1778618855"
    ],
    "rating": 4.2,
    "reviews": 33,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-hortencia-perola-bambu",
    "description": "Transforme sua rotina de banho em uma experiência de conforto e bem-estar com o Jogo de Banho Hortência. Feitas 100% de algodão, essas toalhas são incrivelmente macias e absorventes, graças à sua gram...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-189-1",
        "author": "Leandra",
        "comment": "Lindas!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-189-2",
        "author": "ANGELA",
        "comment": "Adorei! O tamanho e a maciez são ótimas. Chegou bem rápido e direitinho.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-189-3",
        "author": "Maria",
        "comment": "Lindos",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-189-4",
        "author": "ALEXSANDRO",
        "comment": "Muito bom recomendo o produto",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 190,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Hortência Rosê",
    "price": 129.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-rose-66047984bd7c3-large.jpg?v=1778618868",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-rose-66047984bd7c3-large.jpg?v=1778618868",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-370gm2-hortencia-100-algodao-rose-66047984c0237-large.jpg?v=1778618868"
    ],
    "rating": 3.9,
    "reviews": 156,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-hortencia-rose",
    "description": "Transforme sua rotina de banho em uma experiência de conforto e bem-estar com o Jogo de Banho Hortência. Feitas 100% de algodão, essas toalhas são incrivelmente macias e absorventes, graças à sua gram...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-190-1",
        "author": "Lisete",
        "comment": "Gostei das toalhas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-190-2",
        "author": "eliana",
        "comment": "Produto excelente",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-190-3",
        "author": "Vera",
        "comment": "Produtos muito bons",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-190-4",
        "author": "Maria",
        "comment": "Amei do jeito que imaginei tamanho grande enchuga que é uma beleza.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 191,
    "name": "Jogo De Banho 4 Peças 100% Algodão 370g/M² Toalhas Banhão Hortência Verde Água",
    "price": 129.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-100-algodao-370gm2-toalhas-banhao-hortencia-verde-agua-699cb3e5e965b-large.png?v=1778618874",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-100-algodao-370gm2-toalhas-banhao-hortencia-verde-agua-699cb3e5e965b-large.png?v=1778618874",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-banho-4-pecas-100-algodao-370gm2-toalhas-banhao-hortencia-verde-agua-699cb3e633895-large.jpg?v=1778618874"
    ],
    "rating": 4.0,
    "reviews": 175,
    "category": "Toalhas",
    "slug": "jogo-de-banho-4-pecas-100-algodao-370g-m-toalhas-banhao-hortencia-verde-agua",
    "description": "Transforme sua rotina de banho em uma experiência de conforto e bem-estar com o Jogo de Banho Hortência. Feitas 100% de algodão, essas toalhas são incrivelmente macias e absorventes, graças à sua gram...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-191-1",
        "author": "Kimie",
        "comment": "As toalhas são lindas, macias e bem grandes, amei l",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-191-2",
        "author": "Rita",
        "comment": "Gostei muito, excelente qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-191-3",
        "author": "paulo",
        "comment": "cinco estrelas lindas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-191-4",
        "author": "Bernardino",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 192,
    "name": "Jogo de Lençol Queen 4 Peças Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 129.0,
    "compareAtPrice": 239.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-branco-618561a8b1a64-large_fb193465-f215-4667-8816-e1618107c17b.jpg?v=1778625598",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-branco-618561a8b1a64-large_fb193465-f215-4667-8816-e1618107c17b.jpg?v=1778625598",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-branco-618561a8c10ed-large_1a401e7d-1b3d-48c1-b68b-b18239cc68d9.jpg?v=1778625598"
    ],
    "rating": 4.2,
    "reviews": 81,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "A base que nunca erra e dura anos na decoração",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-192-1",
        "author": "Ana",
        "comment": "Amei!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-192-2",
        "author": "Regina",
        "comment": "Acabo de receber. Produto excelente! Maciez do tecido, beleza do detalhe bordado em ponto palito, ótimo acabamento, além do preço da excelente. Estou muito feliz pela compra!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-192-3",
        "author": "Nayara",
        "comment": "Simplesmente perfeito.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-192-4",
        "author": "Luana",
        "comment": "Excelente qualidade! Produto idêntico à descrição. Vou comprar mais!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 193,
    "name": "Jogo de Lençol Queen 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Rose",
    "price": 119.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eeccaa8e38c-large_9d5a441a-6572-402a-9493-c7536d238fd1.jpg?v=1778625604",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eeccaa8e38c-large_9d5a441a-6572-402a-9493-c7536d238fd1.jpg?v=1778625604",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eeccaa9fcd5-large_0bb72ebf-41be-4c94-89a1-bf76480a1e53.jpg?v=1778625604"
    ],
    "rating": 4.0,
    "reviews": 193,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-193-1",
        "author": "Monica",
        "comment": "Excelente compra, muito confortável, o lençol te abraça",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-193-2",
        "author": "Maria",
        "comment": "Muito bom .Excelente qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-193-3",
        "author": "Jael",
        "comment": "amei o produto é bonito e confortável",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-193-4",
        "author": "Fatima",
        "comment": "Recomendo.Excelente qualidade",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 194,
    "name": "Jogo de Lençol Queen 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Fendi",
    "price": 119.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecc90ccdec-large_307f0b57-6348-40f2-9bff-2809916e47ab.jpg?v=1778625610",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecc90ccdec-large_307f0b57-6348-40f2-9bff-2809916e47ab.jpg?v=1778625610",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecc90dde6f-large_1830a03c-a946-4d3c-ae89-2ed5c1bf7751.jpg?v=1778625610"
    ],
    "rating": 4.2,
    "reviews": 81,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-194-1",
        "author": "Eunice",
        "comment": "Excelente, já comprei pelo menos 15 conjunto desses lençóis, presenteei, filhas , nora, netos e amigas .Super recomendo",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-194-2",
        "author": "JOAQUIM",
        "comment": "excelente produto",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-194-3",
        "author": "Silvana",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-194-4",
        "author": "Bruna",
        "comment": "Ótimo",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 195,
    "name": "Jogo de Lençol Queen 4 Peças Percal 400 Fios Imperial Ponto Palito Cinza",
    "price": 129.0,
    "compareAtPrice": 239.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-cinza-618561d3de4c5-large_2fe6ead2-fe63-4373-94ac-d0d55c32a34f.jpg?v=1778625615",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-cinza-618561d3de4c5-large_2fe6ead2-fe63-4373-94ac-d0d55c32a34f.jpg?v=1778625615",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-cinza-618561d3e3f08-large_174dfa26-fd9b-4b32-83a7-e5edcbb48279.jpg?v=1778625615"
    ],
    "rating": 4.5,
    "reviews": 90,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-percal-400-fios-imperial-ponto-palito-cinza-1",
    "description": "O tom que resolve o quarto sem precisar de mais nada",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-195-1",
        "author": "Antonia",
        "comment": "Produto muito excelente",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-195-2",
        "author": "Fernanda",
        "comment": "Ótimo tecido",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-195-3",
        "author": "DANIELLE",
        "comment": "Excelente produto!Compro sempre lençóis na Linda Casa......são maravilhosos!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-195-4",
        "author": "Jeferson",
        "comment": "Bom custo benefício",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 196,
    "name": "Jogo de Lençol Queen 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Cinza",
    "price": 119.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eecbddea0af-large_237b2101-d44f-446c-92f3-bc5dc9f36072.jpg?v=1778625626",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eecbddea0af-large_237b2101-d44f-446c-92f3-bc5dc9f36072.jpg?v=1778625626",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eecbdccb4b1-large_9cc6702b-3106-4d9a-9d43-9ab9bf20b3a7.jpg?v=1778625626"
    ],
    "rating": 4.0,
    "reviews": 91,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-196-1",
        "author": "Karine",
        "comment": "Amei , superou minhas expectativas. São lindos e macios.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-196-2",
        "author": "Jael",
        "comment": "amei o produto é bonito e confortável",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-196-3",
        "author": "María",
        "comment": "Veio rápido tudo certinho recomendo",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-196-4",
        "author": "Bruna",
        "comment": "Bonita",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 197,
    "name": "Jogo de Lençol Casal 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Rose",
    "price": 99.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eecb8b6b2e1-large_8afa96f2-50a4-4de4-a590-bc127d681297.jpg?v=1778625631",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eecb8b6b2e1-large_8afa96f2-50a4-4de4-a590-bc127d681297.jpg?v=1778625631",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-67eecb8caf9da-large_4ff670c1-ca69-46f5-a8c9-910a0d1ff55e.jpg?v=1778625631"
    ],
    "rating": 4.1,
    "reviews": 158,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-rose-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-197-1",
        "author": "Fernanda",
        "comment": "Muito delicado. Um tecido muito gostoso e aconchegante ! Apaixonada e comprarei mais vezes!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-197-2",
        "author": "KARLA",
        "comment": "Gostei muito dos lençóis.Com toque suave .Com certeza comprarei de outras cores.Vale a pena comprar!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-197-3",
        "author": "ALDERISA",
        "comment": "Foi a primeira vez que comprei ,fiquei satisfeita",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-197-4",
        "author": "Sirlene",
        "comment": "Os produtos da linda casa são de excelente qualidade,a entrega é rápida e segura ,já comprei várias vezes e vou comprar mais .É tudo muito lindo,barato e perfeito",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 198,
    "name": "Jogo de Lençol Casal 4 Peças Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 119.0,
    "compareAtPrice": 209.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-4pcs-branco-61855f790961c-large_d120c092-06e7-4450-a265-3623ca963110.jpg?v=1778625636",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-4pcs-branco-61855f790961c-large_d120c092-06e7-4450-a265-3623ca963110.jpg?v=1778625636",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-4pcs-branco-61855f790f00e-large_c0b3b0db-ea85-47ec-9da2-1d2abde87438.jpg?v=1778625636"
    ],
    "rating": 4.3,
    "reviews": 112,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "A base que nunca erra e dura anos na decoração",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-198-1",
        "author": "Ana",
        "comment": "A minha avaliação é a melhor possível! Já comprei tanto o cobertor quanto o lençol de 400 fios, e ambos são maravilhosos. A qualidade do produto é excelente, o tecido é muito confortável e faz toda a diferença no dia a dia. Super recomendo, indico.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-198-2",
        "author": "Virginia",
        "comment": "Gostei muito",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-198-3",
        "author": "Gloria",
        "comment": "Produto atendeu totalmente minhas expectativas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-198-4",
        "author": "MARIA",
        "comment": "MUITO LINDO!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 199,
    "name": "Par de Fronhas 50x70cm Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 39.0,
    "compareAtPrice": 57.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/par-de-fronhas-2-fronhas-percal-400-fios-ponto-palito-branco-6185697a77021-large_8b815e88-9e5a-49be-ada9-43cd163057ed.jpg?v=1778625643",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/par-de-fronhas-2-fronhas-percal-400-fios-ponto-palito-branco-6185697a77021-large_8b815e88-9e5a-49be-ada9-43cd163057ed.jpg?v=1778625643"
    ],
    "rating": 4.9,
    "reviews": 82,
    "category": "Jogos de Lençol",
    "slug": "par-de-fronhas-50x70cm-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "O par que faltava no seu jogo",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-199-1",
        "author": "Virginia",
        "comment": "Gostei muito",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-199-2",
        "author": "Lilian",
        "comment": "Excelente!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-199-3",
        "author": "Edmilson",
        "comment": "Bom custo benefício.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-199-4",
        "author": "CARLOS",
        "comment": "BOA QUALIDADE!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 200,
    "name": "Jogo de Lençol Solteiro 3 Peças Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 89.0,
    "compareAtPrice": 149.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-3pcs-branco-61855caa12a8c-large_b1494bc5-952a-4e14-8939-ce833257d691.jpg?v=1778625648",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-3pcs-branco-61855caa12a8c-large_b1494bc5-952a-4e14-8939-ce833257d691.jpg?v=1778625648",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-3pcs-branco-61855caa1770a-large_0d50e349-dcb8-4726-8db2-bc79ec9dff9a.jpg?v=1778625648"
    ],
    "rating": 3.9,
    "reviews": 156,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-3-pecas-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "A base que nunca erra e dura anos na decoração",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-200-1",
        "author": "Camila",
        "comment": "AMEI O PRODUTO. Que qualidade, que delicia tocar o produto!!! Vou comprar mais conjuntos com certeza!!! Super recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-200-2",
        "author": "Marcia",
        "comment": "Muito bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-200-3",
        "author": "Silvania",
        "comment": "Excelente produto! Muito macio, ótima qualidade e custo benefício. Entrega no prazo, tudo certon",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-200-4",
        "author": "MARINA",
        "comment": "Para quem gosta de lençol de poliéster, esse é dos melhores. Fresco, bonito, boa qualidade, não amassa, não deforma com tempo. Tem um visual elegante. Recomendo.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 201,
    "name": "Jogo de Lençol Queen 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Azul",
    "price": 119.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67efd13b676c0-large_40164f3b-e3f4-49fe-b687-3e625303e66c.jpg?v=1778625653",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67efd13b676c0-large_40164f3b-e3f4-49fe-b687-3e625303e66c.jpg?v=1778625653",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67efd13a81875-large_66382e13-f576-46a4-87bb-77bf5d4f1f90.jpg?v=1778625653"
    ],
    "rating": 4.0,
    "reviews": 121,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-201-1",
        "author": "Joao",
        "comment": "Aprovei entrega muito rápido e produto bom",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-201-2",
        "author": "Karine",
        "comment": "Sao bem lindos , as cores bem do jeitinho que estão na postagem de vendas. Já comprei mais 2 e estou no aguardo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-201-3",
        "author": "Marília",
        "comment": "Excelente produto!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-201-4",
        "author": "Gloria",
        "comment": "Lençóis lindos e de excelente qualidade. Prende bem no colchão, não deixando a cama desordenada com os movimentos do corpo ao se movimentar durante o sono. Adorei!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 202,
    "name": "Jogo de Lençol Casal 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Fendi",
    "price": 99.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecaf8bfbd3-large_fae4f4e6-e391-4ed6-90e1-cca39ac0c0a5.jpg?v=1778625661",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecaf8bfbd3-large_fae4f4e6-e391-4ed6-90e1-cca39ac0c0a5.jpg?v=1778625661",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-67eecaf47d69b-large_08d1181b-2442-4253-b38d-9e7e60343767.jpg?v=1778625661"
    ],
    "rating": 4.1,
    "reviews": 158,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-fendi-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-202-1",
        "author": "Viviane",
        "comment": "Fiquei satisfeita com a minha compra. A cor é bonita e de boa qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-202-2",
        "author": "Cássia",
        "comment": "Gostei agora lavar e usar",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-202-3",
        "author": "Marcio",
        "comment": "Excelente. Material muito fresco e leve.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-202-4",
        "author": "Michele",
        "comment": "Gostamos muito do tecido do jogo de lençol. Vale o preço!!! Minha cama ficou linda!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 203,
    "name": "Jogo de Lençol Queen 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Branco",
    "price": 119.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eecbb724795-large_10e60b8b-07eb-4ac8-8080-1f24f84dc586.jpg?v=1778625667",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eecbb724795-large_10e60b8b-07eb-4ac8-8080-1f24f84dc586.jpg?v=1778625667",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eecbb72e7e7-large_f59feecb-f14c-47ca-8157-fd1005c47d56.jpg?v=1778625667"
    ],
    "rating": 5.0,
    "reviews": 35,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-203-1",
        "author": "MARCIA",
        "comment": "Produto excelente e preço ótimo. Já é o quarto jogo de lençol que compro na Linda Casa. Adoro esse e o com ponto palito.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-203-2",
        "author": "Rozania",
        "comment": "Amei ! Chegou tudo certinho.Material de ótima qualidade.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-203-3",
        "author": "Jael",
        "comment": "amei o produto é bonito e confortável",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-203-4",
        "author": "Luciano",
        "comment": "Produto muito bom, conforme a descrição. Ótimo custo benefício. Ótimo atendimento. Entrega dentro do prazo estabelecido.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 204,
    "name": "Jogo de Lençol Casal 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Cinza",
    "price": 99.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eeca61143d1-large_a20c6ee7-dffa-4598-bfbf-ecf214b1c15d.jpg?v=1778625672",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eeca61143d1-large_a20c6ee7-dffa-4598-bfbf-ecf214b1c15d.jpg?v=1778625672",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-67eeca61cf962-large_840c080b-abd7-4728-a246-e0bf6c490be4.jpg?v=1778625672"
    ],
    "rating": 4.0,
    "reviews": 31,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-cinza-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-204-1",
        "author": "Ana",
        "comment": "Achei lindo, macio eparece confortável. Sinda não usei...chegou muito rápido.Recomendo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-204-2",
        "author": "Jheniffer",
        "comment": "Produto de ótima qualidade, comprem sem medo.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-204-3",
        "author": "JURACI",
        "comment": "Excelente produto, eu gostei do jogo de lençol que comprei e do tapete tambem. otimo material",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-204-4",
        "author": "Marcos",
        "comment": "Qualidade do tecido é muito boa, tudo muito bem acabado com relação as costuras. A gente fica com receio do site, ou até mesmo de demorar chegar a comprar, porém a minha chegou com três dias, tudo muito bem embalado. Eu super recomendo",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/69daf80407c87.jpg"
      }
    ]
  },
  {
    "id": 205,
    "name": "Jogo de Lençol Casal 3 Peças Percal 400 Fios Imperial Ponto Palito Cinza",
    "price": 69.0,
    "compareAtPrice": 139.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-cinza-61856015e10e6-large_ff863030-8f57-4a8b-bce6-ed1d016810b6.jpg?v=1778625677",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-cinza-61856015e10e6-large_ff863030-8f57-4a8b-bce6-ed1d016810b6.jpg?v=1778625677",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-cinza-61856015e59ec-large_e7532e02-d201-4f4c-ac33-d3abdcdbf5da.jpg?v=1778625677"
    ],
    "rating": 5.0,
    "reviews": 71,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-percal-400-fios-imperial-ponto-palito-cinza-1",
    "description": "O tom que resolve o quarto sem precisar de mais nada",
    "isTest": false,
    "tags": []
  },
  {
    "id": 206,
    "name": "Jogo de Lençol Casal 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Azul",
    "price": 99.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67efd1227ea8a-large_ad53787a-e777-4af9-9620-302f3acc9795.jpg?v=1778625683",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67efd1227ea8a-large_ad53787a-e777-4af9-9620-302f3acc9795.jpg?v=1778625683",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-67eecd952fb47-large_c491870d-197d-463d-81b9-8c37043d5838.jpg?v=1778625683"
    ],
    "rating": 4.5,
    "reviews": 216,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-azul-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": []
  },
  {
    "id": 207,
    "name": "Jogo de Lençol Queen 4 Peças Percal 400 Fios Imperial Ponto Palito Palha",
    "price": 129.0,
    "compareAtPrice": 239.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-palha-618561bdcf194-large_69e56abb-b03d-4a82-9c31-413d45fff5d1.jpg?v=1778625690",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-palha-618561bdcf194-large_69e56abb-b03d-4a82-9c31-413d45fff5d1.jpg?v=1778625690",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-palha-618561bdd44da-large_3ccbcef9-b9da-47a7-9ba0-5d8f78b9fc9f.jpg?v=1778625690"
    ],
    "rating": 4.0,
    "reviews": 79,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-percal-400-fios-imperial-ponto-palito-palha-1",
    "description": "Tom natural que traz calma sem monotonia",
    "isTest": false,
    "tags": []
  },
  {
    "id": 208,
    "name": "Par de Fronhas Charme Percal 300 Fios 50x70 com Aba Americana Branco",
    "price": 29.0,
    "compareAtPrice": 47.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/par-de-fronhas-charme-percal-300-fios-70x50-com-aba-americana-branco-614882120a4df-large_b377c7b0-e7c4-41a1-b258-a0cfe92bad12.jpg?v=1778625698",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/par-de-fronhas-charme-percal-300-fios-70x50-com-aba-americana-branco-614882120a4df-large_b377c7b0-e7c4-41a1-b258-a0cfe92bad12.jpg?v=1778625698",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/par-de-fronhas-charme-percal-300-fios-70x50-com-aba-americana-branco-614882120f70c-large_3fb4abe4-80e9-4c8a-af89-543a99b8c23a.jpg?v=1778625698"
    ],
    "rating": 3.9,
    "reviews": 138,
    "category": "Jogos de Lençol",
    "slug": "par-de-fronhas-charme-percal-300-fios-50x70-com-aba-americana-branco-1",
    "description": "Adicione um toque de sofisticação e conforto duradouro ao seu quarto com o Par de Fronhas Charme Percal 300 Fios. Essas fronhas foram projetadas pensando em cada detalhe, desde o tecido de alta qualid...",
    "isTest": false,
    "tags": []
  },
  {
    "id": 209,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 400 Fios Imperial Ponto Palito Cinza",
    "price": 49.0,
    "compareAtPrice": 99.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-cinza-61855d31b69bb-large_195df9dc-d6e6-4671-8034-996c4c8a4117.jpg?v=1778625703",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-cinza-61855d31b69bb-large_195df9dc-d6e6-4671-8034-996c4c8a4117.jpg?v=1778625703",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-cinza-61855d31bc041-large_09b7135d-3d21-4815-b4d0-ff9f5fcdcf4e.jpg?v=1778625703"
    ],
    "rating": 4.1,
    "reviews": 38,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-400-fios-imperial-ponto-palito-cinza-1",
    "description": "O tom que resolve o quarto sem precisar de mais nada",
    "isTest": false,
    "tags": []
  },
  {
    "id": 210,
    "name": "Jogo de Lençol Casal 3 Peças Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 69.0,
    "compareAtPrice": 139.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-branco-61855ff41ffe7-large_e4666fbd-3ea1-45de-b48f-a0299be0fabd.jpg?v=1778625708",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-branco-61855ff41ffe7-large_e4666fbd-3ea1-45de-b48f-a0299be0fabd.jpg?v=1778625708",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-branco-61855ff425d5a-large_08a513ea-f0a0-410f-8e88-f4038d267939.jpg?v=1778625708"
    ],
    "rating": 4.1,
    "reviews": 20,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "A base que nunca erra e dura anos na decoração",
    "isTest": false,
    "tags": []
  },
  {
    "id": 211,
    "name": "Jogo de Lençol Queen 4 Peças Percal 400 Fios Imperial Ponto Palito Dublin",
    "price": 129.0,
    "compareAtPrice": 239.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-dublin-61e5b8a66a2ca-large_6cad49e8-7c76-4135-aeef-7b96a89a2c66.jpg?v=1778625714",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-dublin-61e5b8a66a2ca-large_6cad49e8-7c76-4135-aeef-7b96a89a2c66.jpg?v=1778625714",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-queen-4pcs-dublin-61e5b8a66efc9-large_62e61b23-7125-42b1-93cf-9a2d22e87db8.jpg?v=1778625714"
    ],
    "rating": 4.6,
    "reviews": 199,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-4-pecas-percal-400-fios-imperial-ponto-palito-dublin-1",
    "description": "O cinza-verde que ninguém mais tem",
    "isTest": false,
    "tags": []
  },
  {
    "id": 212,
    "name": "Jogo de Lençol Casal 3 Peças Percal 400 Fios Imperial Ponto Palito Palha",
    "price": 69.0,
    "compareAtPrice": 139.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-palha-6185600a9dd23-large_09c91bc8-6b5f-40fe-97ac-a6d4551a01e2.jpg?v=1778625721",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-palha-6185600a9dd23-large_09c91bc8-6b5f-40fe-97ac-a6d4551a01e2.jpg?v=1778625721",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-cama-casal-3-pecas-palha-6185600aa3e23-large_fa7b2dbf-08b4-48de-bc0f-780bdacc4253.jpg?v=1778625721"
    ],
    "rating": 4.3,
    "reviews": 148,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-percal-400-fios-imperial-ponto-palito-palha-1",
    "description": "Tom natural que traz calma sem monotonia",
    "isTest": false,
    "tags": []
  },
  {
    "id": 213,
    "name": "Jogo de Lençol Casal 4 Peças Napoli Percal 300 Fios Lese Bordado Inglês Branco",
    "price": 99.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eeca09c7538-large_daf2ae22-d1f1-4cd0-9fe1-13883242bdbb.jpg?v=1778625726",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eeca09c7538-large_daf2ae22-d1f1-4cd0-9fe1-13883242bdbb.jpg?v=1778625726",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-67eeca09d7ba4-large_dd253884-94cc-4625-9321-b7a8438456f6.jpg?v=1778625726"
    ],
    "rating": 4.9,
    "reviews": 112,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-4-pecas-napoli-percal-300-fios-lese-bordado-ingles-branco-1",
    "description": "Cama posta com a delicadeza do lese bordado inglês",
    "isTest": false,
    "tags": []
  },
  {
    "id": 214,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 400 Fios Imperial Ponto Palito Branco",
    "price": 49.0,
    "compareAtPrice": 99.99,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-branco-61855d0410a77-large_10b9bdfd-b7da-4d51-80b4-23b2119478d3.jpg?v=1778625731",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-branco-61855d0410a77-large_10b9bdfd-b7da-4d51-80b4-23b2119478d3.jpg?v=1778625731",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/jogo-lencol-percal-400-fios-ponto-palito-solteiro-2pcs-branco-61855d04154e0-large_a7a46cc8-8b8c-4bbb-9521-49410e8a6ecb.jpg?v=1778625731"
    ],
    "rating": 4.0,
    "reviews": 151,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-400-fios-imperial-ponto-palito-branco-1",
    "description": "A base que nunca erra e dura anos na decoração",
    "isTest": false,
    "tags": []
  },
  {
    "id": 215,
    "name": "Protetor de Colchão Sem Ruído Impermeável 100% Algodão 180 Fios Casal Branco",
    "price": 54.0,
    "compareAtPrice": 104.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/protetor-de-colchao-sem-ruido-impermeavel-100-algodao-180-fios-casal-branco-634ef520515a4-large_f63c21f5-d091-4802-bb07-6843f3747b14.jpg?v=1778625737",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/protetor-de-colchao-sem-ruido-impermeavel-100-algodao-180-fios-casal-branco-634ef520515a4-large_f63c21f5-d091-4802-bb07-6843f3747b14.jpg?v=1778625737",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/protetor-de-colchao-sem-ruido-impermeavel-100-algodao-180-fios-casal-60fabbe54eb53-large_a7af8a0c-12c9-4ac2-8211-ddaf45866ae1.jpg?v=1778625737"
    ],
    "rating": 4.6,
    "reviews": 31,
    "category": "Diversos",
    "slug": "protetor-de-colchao-sem-ruido-impermeavel-100-algodao-180-fios-casal-branco-1",
    "description": "Proteja seu colchão e garanta noites de sono ainda mais tranquilas com este protetor de colchão impermeável. Além de ser altamente funcional, ele é super confortável, feito com tecido 100% algodão, tr...",
    "isTest": false,
    "tags": []
  },
  {
    "id": 216,
    "name": "Cortina Blackout 100% Vedação Premium 5,90x2,60m Sala Quarto Varão 4M Cinza",
    "price": 379.0,
    "compareAtPrice": 579.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-cinza-60b63dcb62a3d-large.jpg?v=1778626273",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-cinza-60b63dcb62a3d-large.jpg?v=1778626273",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-cinza-60b63dcb68fdb-large.jpg?v=1778626273"
    ],
    "rating": 4.3,
    "reviews": 232,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-5-90x2-60m-sala-quarto-varao-4m-cinza",
    "description": "Crie o ambiente ideal para descanso e conforto absoluto com a Cortina Blackout 100% Vedação Premium. Projetada para bloquear completamente a luz externa, ela transforma qualquer sala ou quarto em um e...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-216-1",
        "author": "Orlanda",
        "comment": "Amei a minha compra!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-216-2",
        "author": "Thais",
        "comment": "A cortina é de excelente qualidade, grossa e muito linda!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-216-3",
        "author": "Marli",
        "comment": "Eu simplesmente adorei. Superou a expectativa. Excelente qualidade, muito bem acabado. A única que deveria ser 10 cm mais cumprido, ficou curto na minha janela, mas isso não tira qualidade do produto. Estão de parabéns!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-216-4",
        "author": "Selma",
        "comment": "Perfeito",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 217,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 5,90x2,60m para Varão 4M Grécia Marfim",
    "price": 349.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-marfim-6928aa0faeb22-large.jpg?v=1778626278",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-marfim-6928aa0faeb22-large.jpg?v=1778626278",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-marfim-6928aa0f141b7-large.jpg?v=1778626278"
    ],
    "rating": 4.6,
    "reviews": 19,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-5-90x2-60m-para-varao-4m-grecia-marfim",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-217-1",
        "author": "rita",
        "comment": "Simplesmente linda comprei pro quarto mas coloquei na sala além de linda e muito bem feita",
        "rating": 5,
        "date": "Compra verificada",
        "photo": "https://cdn.yampi.io/rocket/uploads/reviews/lindacasa/69efce916f1dd.jpg"
      }
    ]
  },
  {
    "id": 218,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 2,70x1,80m para Varão 2M Grécia Bege",
    "price": 169.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-bege-69b845a5b3910-large.jpg?v=1778626283",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-bege-69b845a5b3910-large.jpg?v=1778626283",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-bege-69b845a56972a-large.jpg?v=1778626283"
    ],
    "rating": 4.4,
    "reviews": 179,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-2-70x1-80m-para-varao-2m-grecia-bege",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 219,
    "name": "Cortina Blackout 100% Vedação Luxor 3,90 x 2,60m Sala Quarto Para Varão 3M Caqui",
    "price": 179.0,
    "compareAtPrice": 349.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-390-x-260m-sala-quarto-para-varao-3m-caqui-653fe6af41469-large.jpg?v=1778626288",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-390-x-260m-sala-quarto-para-varao-3m-caqui-653fe6af41469-large.jpg?v=1778626288",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-390-x-260m-sala-quarto-para-varao-3m-caqui-653fe6af43a9c-large.jpg?v=1778626288"
    ],
    "rating": 4.7,
    "reviews": 26,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-luxor-3-90-x-2-60m-sala-quarto-para-varao-3m-caqui",
    "description": "Transforme sua sala ou quarto em um ambiente aconchegante e sofisticado com a Cortina Blackout Luxor. Com vedação completa de luminosidade, essa cortina é perfeita para garantir total privacidade e bl...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-219-1",
        "author": "Lea",
        "comment": "Adorei a cortina! O tecido é de ótima qualidade, bem mais grosso do que imaginei. A cor é fiel às fotos e o bloqueio de luz é muito bom. Chegou bem embalada e rápido. Cumpre exatamente o que promete. Parabéns ao vendedor!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-219-2",
        "author": "Ana",
        "comment": "Ameiii minha compra!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-219-3",
        "author": "IVANETE",
        "comment": "Produto de excelente qualidade, indico a compra, já até comprei mais.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-219-4",
        "author": "Cely",
        "comment": "A cortina é excelente, a vedação é de 100% mesmo!! amei a qualidade do tecido e o acabamento!! Só a cor q achei que seria mas clara, se ela tivesse na cor areia compraria mais 2 cortinas Luxor!!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 220,
    "name": "Cortina Blackout 100% Vedação Luxor 2,70 x 1,70m Sala Quarto Janela Para Varão 2M Cinza",
    "price": 109.0,
    "compareAtPrice": 186.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-cinza-653fffb7765c3-large.jpg?v=1778626295",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-cinza-653fffb7765c3-large.jpg?v=1778626295",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-cinza-653fe602401ac-large.jpg?v=1778626295"
    ],
    "rating": 4.7,
    "reviews": 104,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-luxor-2-70-x-1-70m-sala-quarto-janela-para-varao-2m-cinza",
    "description": "A Cortina Blackout Luxor é a solução definitiva para quem busca total vedação de luz em seus ambientes. Com 2,70m de largura por 1,70m de altura, dividida em duas partes, ela é perfeita para varões de...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-220-1",
        "author": "MARILENE",
        "comment": "maravilhoso",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-220-2",
        "author": "Juliana",
        "comment": "Gostei muito do produto, realmente veda a claridade, recomendo muito.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-220-3",
        "author": "EDUARDA",
        "comment": "Além da entrega antecipada, o produto e maravilhoso. E o que dizer da comunicação da Linda Casa? Impecável! Disparado a Linda Casa e a Melhor empresa que já comprei na internet sem dúvidas, cada movimento dos meus produtos recebo um e-mail. Simplesmente espetacular! Parabéns",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-220-4",
        "author": "Juliana",
        "comment": "Ótimo produto, chegou muito bem embalado.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 221,
    "name": "Cortina Blackout 100% Vedação Luxor 2,70 x 1,70m Sala Quarto Janela Para Varão 2M Marfim",
    "price": 109.0,
    "compareAtPrice": 186.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-marfim-653fedb7c774b-large.jpg?v=1778626300",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-marfim-653fedb7c774b-large.jpg?v=1778626300",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-luxor-270-x-170m-sala-quarto-janela-para-varao-2m-marfim-653fedb7c9792-large.jpg?v=1778626300"
    ],
    "rating": 3.9,
    "reviews": 210,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-luxor-2-70-x-1-70m-sala-quarto-janela-para-varao-2m-marfim",
    "description": "A Cortina Blackout Luxor é a solução definitiva para quem busca total vedação de luz em seus ambientes. Com 2,70m de largura por 1,70m de altura, dividida em duas partes, ela é perfeita para varões de...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-221-1",
        "author": "Adriana",
        "comment": "Adorei, black out 100%, ótimo custo benefícioSuper recomendo!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-221-2",
        "author": "Maria",
        "comment": "Produto bom, cortina bonita.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-221-3",
        "author": "Neide",
        "comment": "Bom fiquei satisfeita com o produto recomendo quer uma cortina para ficar tranquila é está ótima obgd",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-221-4",
        "author": "Thiara",
        "comment": "Maravilhosas as cortinas, de ótima qualidade é realmente 100% blackout, adorei.",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 222,
    "name": "Cortina Blackout 100% Vedação Premium 4,40x2,60m Sala Quarto Varão 3M Areia",
    "price": 299.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-areia-60b63dbd4de54-large.jpg?v=1778626306",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-areia-60b63dbd4de54-large.jpg?v=1778626306",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-areia-60ba3af832259-large.jpg?v=1778626306"
    ],
    "rating": 4.5,
    "reviews": 12,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-4-40x2-60m-sala-quarto-varao-3m-areia",
    "description": "Transforme o ambiente da sua sala ou quarto com a Cortina Blackout Premium. Com 100% de vedação, ela é perfeita para quem busca privacidade total e bloqueio eficiente da luz, criando um espaço aconche...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-222-1",
        "author": "Eny",
        "comment": "ótima vedação.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-222-2",
        "author": "ROSILENE",
        "comment": "A cortina é linda. Deixou o ambiente bem escuro. Atendeu minha expectativa. Sem contar que chegou rápido.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-222-3",
        "author": "Selma",
        "comment": "Produto excelente ótima qualidade, amei",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-222-4",
        "author": "Susana",
        "comment": "A cortina é linda, da pra ver que o tecido é de ótima qualidade e veio exatamente da tamanho e cor que pedi. Ah! Não passa luz por ser grosso. E chegou rapidinho. Agora bora instalar!!!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 223,
    "name": "Cortina Blackout 100% Vedação Premium 5,90x2,60m Sala Quarto Varão 4M Areia",
    "price": 379.0,
    "compareAtPrice": 579.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-areia-60b63ddcde00d-large.jpg?v=1778626311",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-areia-60b63ddcde00d-large.jpg?v=1778626311",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-590x260m-sala-quarto-varao-4m-areia-60ba3b4adc374-large.jpg?v=1778626311"
    ],
    "rating": 4.9,
    "reviews": 64,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-5-90x2-60m-sala-quarto-varao-4m-areia",
    "description": "Crie o ambiente ideal para descanso e conforto absoluto com a Cortina Blackout 100% Vedação Premium. Projetada para bloquear completamente a luz externa, ela transforma qualquer sala ou quarto em um e...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-223-1",
        "author": "ROSILENE",
        "comment": "A cortina é linda. Deixou o ambiente bem escuro. Atendeu minha expectativa. Sem contar que chegou rápido.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-223-2",
        "author": "Lucas",
        "comment": "Cumprir oque promete muito bommmm",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-223-3",
        "author": "Edson",
        "comment": "A cortina e de excelente qualidade. Compõe muito bem o ambiente a qual foi integrada.",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-223-4",
        "author": "FATIMA",
        "comment": "A cortina é linda! Excelente qualidade! Corta a claridade mesmo!",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 224,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 5,90x2,60m para Varão 4M Grécia Prata",
    "price": 349.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-590x260m-para-varao-4m-grecia-prata-699f09c86bc2f-large.jpg?v=1778626318",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-590x260m-para-varao-4m-grecia-prata-699f09c86bc2f-large.jpg?v=1778626318",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-prata-6928aa5faa224-large.jpg?v=1778626318"
    ],
    "rating": 4.6,
    "reviews": 133,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-5-90x2-60m-para-varao-4m-grecia-prata",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 225,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 5,90x2,60m para Varão 4M Grécia Bege",
    "price": 349.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-590x260m-para-varao-4m-grecia-bege-69b845c7f2132-large.jpg?v=1778626324",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-590x260m-para-varao-4m-grecia-bege-69b845c7f2132-large.jpg?v=1778626324",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-590x260m-para-varao-4m-grecia-bege-69b845c7d20b8-large.jpg?v=1778626324"
    ],
    "rating": 4.4,
    "reviews": 53,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-5-90x2-60m-para-varao-4m-grecia-bege",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 226,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 5,90x2,60m para Varão 4M Grécia Branco",
    "price": 349.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-branco-6928a992df60e-large.jpg?v=1778626330",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-branco-6928a992df60e-large.jpg?v=1778626330",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-branco-6928a993484ce-large.jpg?v=1778626330"
    ],
    "rating": 4.4,
    "reviews": 17,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-5-90x2-60m-para-varao-4m-grecia-branco",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 227,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 4,40x2,60m para Varão 3M Grécia Prata",
    "price": 279.0,
    "compareAtPrice": 354.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-440x260m-para-varao-3m-grecia-prata-699f09bfb10a4-large.jpg?v=1778626337",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-440x260m-para-varao-3m-grecia-prata-699f09bfb10a4-large.jpg?v=1778626337",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-prata-6928a93a2a4a3-large.jpg?v=1778626337"
    ],
    "rating": 4.1,
    "reviews": 236,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-4-40x2-60m-para-varao-3m-grecia-prata",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 228,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 4,40x2,60m para Varão 3M Grécia Bege",
    "price": 279.0,
    "compareAtPrice": 354.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-440x260m-para-varao-3m-grecia-bege-69b845b96544b-large.jpg?v=1778626343",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-440x260m-para-varao-3m-grecia-bege-69b845b96544b-large.jpg?v=1778626343",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-440x260m-para-varao-3m-grecia-bege-69b845ba698f5-large.jpg?v=1778626343"
    ],
    "rating": 4.2,
    "reviews": 51,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-4-40x2-60m-para-varao-3m-grecia-bege",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 229,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 4,40x2,60m para Varão 3M Grécia Marfim",
    "price": 279.0,
    "compareAtPrice": 354.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-marfim-6928a82f9aca7-large.jpg?v=1778626348",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-marfim-6928a82f9aca7-large.jpg?v=1778626348",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-marfim-6928a8308c73e-large.jpg?v=1778626348"
    ],
    "rating": 4.8,
    "reviews": 45,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-4-40x2-60m-para-varao-3m-grecia-marfim",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 230,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 4,40x2,60m para Varão 3M Grécia Branco",
    "price": 279.0,
    "compareAtPrice": 354.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-branco-6928a81004746-large.jpg?v=1778626354",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-branco-6928a81004746-large.jpg?v=1778626354",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-440x260m-para-varao-3m-gaze-de-linho-com-voil-grecia-branco-6928a82589c96-large.jpg?v=1778626354"
    ],
    "rating": 4.0,
    "reviews": 163,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-4-40x2-60m-para-varao-3m-grecia-branco",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 231,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 2,70x1,80m para Varão 2M Grécia Prata",
    "price": 169.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-prata-69b848369a75c-large.jpg?v=1778626359",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-prata-69b848369a75c-large.jpg?v=1778626359",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-prata-69b84835bbf57-large.jpg?v=1778626359"
    ],
    "rating": 3.9,
    "reviews": 54,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-2-70x1-80m-para-varao-2m-grecia-prata",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 232,
    "name": "Cortina Voil Gaze de Linho com Forro Tecido Blackout 2,70x1,80m para Varão 2M Grécia Marfim",
    "price": 169.0,
    "compareAtPrice": 209.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-marfim-69b84820c4497-large.jpg?v=1778626365",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-marfim-69b84820c4497-large.jpg?v=1778626365",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-voil-gaze-de-linho-com-forro-tecido-blackout-270x180m-para-varao-2m-grecia-marfim-69b84820bf826-large.jpg?v=1778626365"
    ],
    "rating": 5.0,
    "reviews": 197,
    "category": "Cortinas",
    "slug": "cortina-voil-gaze-de-linho-com-forro-tecido-blackout-2-70x1-80m-para-varao-2m-grecia-marfim",
    "description": "A Cortina Semi Blackout Gaze de Linho transforma o ambiente com elegância e suavidade. O tecido em gaze de linho oferece textura sofisticada. O efeito semi blackout garante proteção luminosa equilibra...",
    "isTest": false,
    "tags": [],
    "customerReviews": []
  },
  {
    "id": 233,
    "name": "Cortina Blackout 100% Vedação Premium 2,70x1,80m Sala Quarto Varão 2M Cinza",
    "price": 149.0,
    "compareAtPrice": 239.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-cinza-68cd4c2dde867-large.jpg?v=1778626372",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-cinza-68cd4c2dde867-large.jpg?v=1778626372",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-cinza-60b63a2e44f2f-large.jpg?v=1778626372"
    ],
    "rating": 3.9,
    "reviews": 192,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-2-70x1-80m-sala-quarto-varao-2m-cinza",
    "description": "Transforme qualquer ambiente da sua casa com a Cortina Blackout Premium. Com medidas ideais para salas e quartos, esta cortina cinza oferece total bloqueio de luz, proporcionando privacidade e confort...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-233-1",
        "author": "Ana",
        "comment": "Nota 1.000/10 Muita qualidade, é muito bonita. Perfeita!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-233-2",
        "author": "Ana",
        "comment": "Nota 10!",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-233-3",
        "author": "Daniele",
        "comment": "Muito linda, superou minhas expectativas",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-233-4",
        "author": "Karina",
        "comment": "Maravilhosa!! Muita qualidade. Amei",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 234,
    "name": "Cortina Blackout 100% Vedação Premium 2,70x1,80m Sala Quarto Varão 2M Areia",
    "price": 149.0,
    "compareAtPrice": 239.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-areia-68cd4c3610e26-large.jpg?v=1778626377",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-areia-68cd4c3610e26-large.jpg?v=1778626377",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-270x180m-sala-quarto-varao-2m-areia-60ba3ab008902-large.jpg?v=1778626377"
    ],
    "rating": 4.5,
    "reviews": 216,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-2-70x1-80m-sala-quarto-varao-2m-areia",
    "description": "Transforme qualquer ambiente da sua casa com a Cortina Blackout Premium. Com medidas ideais para salas e quartos, esta cortina cinza oferece total bloqueio de luz, proporcionando privacidade e confort...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-234-1",
        "author": "Carla",
        "comment": "Ótima qualidade",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-234-2",
        "author": "Janaina",
        "comment": "Produto impecável, qualidade, cor e acabamento. Amei",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-234-3",
        "author": "CHRISTINE",
        "comment": "Bonita, parece linho e escurece bem o cômodo",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-234-4",
        "author": "Geovani",
        "comment": "Gostei muito e bonita e chegou no prazo e tudo perfeito",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 235,
    "name": "Cortina Blackout 100% Vedação Premium 4,40x2,60m Sala Quarto Varão 3M Cinza",
    "price": 299.0,
    "compareAtPrice": 449.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-cinza-60b63dabab2f3-large.jpg?v=1778626385",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-cinza-60b63dabab2f3-large.jpg?v=1778626385",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-cinza-60b63dabb1afd-large.jpg?v=1778626385"
    ],
    "rating": 4.7,
    "reviews": 128,
    "category": "Cortinas",
    "slug": "cortina-blackout-100-vedacao-premium-4-40x2-60m-sala-quarto-varao-3m-cinza",
    "description": "Transforme o ambiente da sua sala ou quarto com a Cortina Blackout Premium. Com 100% de vedação, ela é perfeita para quem busca privacidade total e bloqueio eficiente da luz, criando um espaço aconche...",
    "isTest": false,
    "tags": [],
    "customerReviews": [
      {
        "id": "rev-235-1",
        "author": "HOTEL",
        "comment": "Rapides na entrega e exelente produto",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-235-2",
        "author": "NADIA",
        "comment": "Realmente veda bem a claridade, bom acabamento. Recomendo",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-235-3",
        "author": "Thiago",
        "comment": "O blackout é muito bom, realmente bloqueia a luz. Bom acabamento e bonita",
        "rating": 5,
        "date": "Compra verificada"
      },
      {
        "id": "rev-235-4",
        "author": "Stephani",
        "comment": "A cortina é maravilhosa, sem mais.... só comprem. Ainda não instalei, mas o matéria me surpreendeu demais",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 236,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Fendi/Marfim",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e38a991536-large.jpg?v=1778626571",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e38a991536-large.jpg?v=1778626571",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendimarfim-696e38aad59c6-large.jpg?v=1778626571"
    ],
    "rating": 4.6,
    "reviews": 19,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-fendi-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 237,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Azul/Branco",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e3a3806b5b-large.jpg?v=1778626577",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e3a3806b5b-large.jpg?v=1778626577",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-azulbranco-696e3a3816f91-large.jpg?v=1778626577"
    ],
    "rating": 4.9,
    "reviews": 82,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-azul-branco",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 238,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Fendi/Prata",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e39401d43d-large.jpg?v=1778626582",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e39401d43d-large.jpg?v=1778626582",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancofendiprata-696e393fd892c-large.jpg?v=1778626582"
    ],
    "rating": 4.8,
    "reviews": 105,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-fendi-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 239,
    "name": "Kit Cama Posta King Vitória 8 Peças Rosê/Azul Marinho",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-roseazul-marinho-6985f3f7852a2-large.jpg?v=1778626590",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-roseazul-marinho-6985f3f7852a2-large.jpg?v=1778626590",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-roseazul-marinho-6985f3f68e549-large.jpg?v=1778626590"
    ],
    "rating": 4.0,
    "reviews": 163,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-vitoria-8-pecas-rose-azul-marinho",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-239-1",
        "author": "Patricia",
        "comment": "Lençol lindo.Cobre cama solta muito pelo.Cobertor muito macio",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 240,
    "name": "Kit Cama Posta King Isabelle 8 Peças Branco/Cáqui/Marfim",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-brancocaquimarfim-69971f74a987b-large.jpg?v=1778626597",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-brancocaquimarfim-69971f74a987b-large.jpg?v=1778626597",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-brancocaquimarfim-69971f75215ee-large.jpg?v=1778626597"
    ],
    "rating": 4.8,
    "reviews": 159,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-isabelle-8-pecas-branco-caqui-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": []
  },
  {
    "id": 241,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Rosê/Prata",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e8af01ff7-large.jpg?v=1778626604",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e8af01ff7-large.jpg?v=1778626604",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoroseprata-6967e8aed174f-large.jpg?v=1778626604"
    ],
    "rating": 5.0,
    "reviews": 89,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-rose-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 242,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Rosê/Prata",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-roseprata-6965325e4a709-large.jpg?v=1778626610",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-roseprata-6965325e4a709-large.jpg?v=1778626610",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-roseprata-6965325e58580-large.jpg?v=1778626610"
    ],
    "rating": 4.2,
    "reviews": 33,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-rose-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 243,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Cinza/Prata",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e78dc4faf-large.jpg?v=1778626615",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e78dc4faf-large.jpg?v=1778626615",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzaprata-6967e78e59076-large.jpg?v=1778626615"
    ],
    "rating": 4.1,
    "reviews": 140,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-cinza-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 244,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Cinza/Azul",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e8f37a292-large.jpg?v=1778626621",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e8f37a292-large.jpg?v=1778626621",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-cinzaazul-6967e8f37d62c-large.jpg?v=1778626621"
    ],
    "rating": 4.0,
    "reviews": 73,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-cinza-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 245,
    "name": "Kit Cama Posta King Vitória 8 Peças Dublin/Branco/Verde",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-dublinbrancoverde-6985f35df27bb-large.jpg?v=1778626629",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-dublinbrancoverde-6985f35df27bb-large.jpg?v=1778626629",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-dublinbrancoverde-6985f35d1dea7-large.jpg?v=1778626629"
    ],
    "rating": 5.0,
    "reviews": 101,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-vitoria-8-pecas-dublin-branco-verde",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 246,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Prata",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoprata-6967e990bdd47-large.jpg?v=1778626636",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoprata-6967e990bdd47-large.jpg?v=1778626636",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoprata-6967e990bfc39-large.jpg?v=1778626636"
    ],
    "rating": 4.2,
    "reviews": 111,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-prata",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 247,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fio Bordado Inglês Fendi/Azul",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e39a17fe61-large.jpg?v=1778626644",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e39a17fe61-large.jpg?v=1778626644",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-fendiazul-696e39a1d5db8-large.jpg?v=1778626644"
    ],
    "rating": 5.0,
    "reviews": 35,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-fendi-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ],
    "customerReviews": [
      {
        "id": "rev-247-1",
        "author": "Marilene",
        "comment": "Dei de presente para a minha filha, amamos. Ficou uma cama linda, toda coordenada e estilosa. A qualidade é ótima. Estou apaixonada",
        "rating": 5,
        "date": "Compra verificada"
      }
    ]
  },
  {
    "id": 248,
    "name": "Kit Cama Posta King Sabrina 8 Peças Branco/Outono/Bege",
    "price": 419.0,
    "compareAtPrice": 559.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancooutonobege-69931f3ad4483-large.jpg?v=1778626651",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancooutonobege-69931f3ad4483-large.jpg?v=1778626651",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancooutonobege-69931f3b4c2a4-large.jpg?v=1778626651"
    ],
    "rating": 4.9,
    "reviews": 58,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-sabrina-8-pecas-branco-outono-bege",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 249,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Rosê/Marfim",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-king-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e40bb2b144-large.jpg?v=1778626659",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-king-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e40bb2b144-large.jpg?v=1778626659",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-coordenado-king-napoli-10-pecas-percal-300-fio-bordado-ingles-rosemarfim-695e40bb47682-large.jpg?v=1778626659"
    ],
    "rating": 4.8,
    "reviews": 27,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-rose-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 250,
    "name": "Kit Cama Posta King Isabelle 8 Peças Fendi/Azul Marinho/Marfim",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-fendiazul-marinhomarfim-69971dd771e63-large.jpg?v=1778626664",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-fendiazul-marinhomarfim-69971dd771e63-large.jpg?v=1778626664",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-fendiazul-marinhomarfim-69971dd7b9d3a-large.jpg?v=1778626664"
    ],
    "rating": 4.3,
    "reviews": 166,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-isabelle-8-pecas-fendi-azul-marinho-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 251,
    "name": "Kit Cama Posta King Sabrina 8 Peças Cinza/Jardim Rosê/Prata",
    "price": 419.0,
    "compareAtPrice": 559.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzajardim-roseprata-69931f8f30de0-large.jpg?v=1778626669",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzajardim-roseprata-69931f8f30de0-large.jpg?v=1778626669",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzajardim-roseprata-69931f8f34b57-large.jpg?v=1778626669"
    ],
    "rating": 4.1,
    "reviews": 32,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-sabrina-8-pecas-cinza-jardim-rose-prata",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 252,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Marfim",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e954f2e52-large.jpg?v=1778626676",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e954f2e52-large.jpg?v=1778626676",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancomarfim-6967e9565f652-large.jpg?v=1778626676"
    ],
    "rating": 4.1,
    "reviews": 26,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 253,
    "name": "Kit Cama Posta King Sabrina 8 Peças Branco/Floral Marsala/Marfim",
    "price": 419.0,
    "compareAtPrice": 559.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancofloral-marsalamarfim-69931eb4296ca-large.jpg?v=1778626684",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancofloral-marsalamarfim-69931eb4296ca-large.jpg?v=1778626684",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-brancofloral-marsalamarfim-69931eb5603e6-large.jpg?v=1778626684"
    ],
    "rating": 5.0,
    "reviews": 95,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-sabrina-8-pecas-branco-floral-marsala-marfim",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 254,
    "name": "Kit Cama Posta King Vitória 8 Peças Cinza/Rosê",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-cinzarose-6985f3201add3-large.jpg?v=1778626691",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-cinzarose-6985f3201add3-large.jpg?v=1778626691",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-vitoria-8-pecas-cinzarose-6985f32732a36-large.jpg?v=1778626691"
    ],
    "rating": 5.0,
    "reviews": 227,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-vitoria-8-pecas-cinza-rose",
    "description": "O Kit Cama Posta Vitória foi desenvolvido para transformar o quarto em um ambiente elegante, acolhedor e cheio de personalidade. A combinação de tecidos agradáveis ao toque, acabamentos bem definidos ...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 255,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Azul",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoazul-6967e9c783182-large.jpg?v=1778626698",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoazul-6967e9c783182-large.jpg?v=1778626698",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancoazul-6967e9c76d79b-large.jpg?v=1778626698"
    ],
    "rating": 4.9,
    "reviews": 148,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-azul",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 256,
    "name": "Kit Cama Posta King Isabelle 8 Peças Palha/Vinho/Marfim",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-palhavinhomarfim-69971c8ab7b3e-large.jpg?v=1778626703",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-palhavinhomarfim-69971c8ab7b3e-large.jpg?v=1778626703",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-palhavinhomarfim-69971c8bc9829-large.jpg?v=1778626703"
    ],
    "rating": 3.9,
    "reviews": 174,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-isabelle-8-pecas-palha-vinho-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 257,
    "name": "Kit Cama Posta King Serena 10 Peças Percal 300 Fios Bordado Inglês Branco/Cinza/Marfim",
    "price": 489.0,
    "compareAtPrice": 649.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzamarfim-6967e74c5f1fa-large.jpg?v=1778626710",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzamarfim-6967e74c5f1fa-large.jpg?v=1778626710",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-serena-10-pecas-percal-300-fio-bordado-ingles-brancocinzamarfim-6967e74d51687-large.jpg?v=1778626710"
    ],
    "rating": 4.1,
    "reviews": 14,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-serena-10-pecas-percal-300-fios-bordado-ingles-branco-cinza-marfim",
    "description": "O Kit Cama Posta Serena é composto por 3 produtos: 1 Jogo de Lençol Napoli, 1 Kit Cobre Leito Napoli e 1 Kit Manta e Capa de Almofada Domus. Essa combinação foi pensada para criar um ambiente elegante...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 258,
    "name": "Kit Cama Posta King Sabrina 8 Peças Cinza/Xadrez Verde/Prata",
    "price": 419.0,
    "compareAtPrice": 559.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzaxadrez-verdeprata-6993201beef0f-large.jpg?v=1778626718",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzaxadrez-verdeprata-6993201beef0f-large.jpg?v=1778626718",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-sabrina-8-pecas-cinzaxadrez-verdeprata-6993201c1a8ac-large.jpg?v=1778626718"
    ],
    "rating": 5.0,
    "reviews": 239,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-sabrina-8-pecas-cinza-xadrez-verde-prata",
    "description": "O Kit Cama Posta Sabrina foi desenvolvido para transformar o quarto em um ambiente acolhedor, elegante e cheio de personalidade. A combinação de tecidos macios, acabamento matelado e detalhes que valo...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  },
  {
    "id": 259,
    "name": "Kit Cama Posta King Isabelle 8 Peças Cinza/Marfim",
    "price": 399.0,
    "compareAtPrice": 529.9,
    "image": "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-cinzamarfim-69971f1a89fa5-large.jpg?v=1778626725",
    "images": [
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-cinzamarfim-69971f1a89fa5-large.jpg?v=1778626725",
      "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-king-isabelle-8-pecas-cinzamarfim-69971f1a5962a-large.jpg?v=1778626725"
    ],
    "rating": 4.9,
    "reviews": 160,
    "category": "Kit Cama Posta King",
    "slug": "kit-cama-posta-king-isabelle-8-pecas-cinza-marfim",
    "description": "O Kit Cama Posta Isabelle foi criado para transformar o quarto em um espaço acolhedor, elegante e cheio de charme. A união de tecidos confortáveis, acabamento matelado e detalhes que valorizam o enxov...",
    "isTest": false,
    "tags": [
      "Kit Cama Posta"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

const collectionSlugAliases: Record<string, string> = {
  "jogo-de-lencol": "jogos-de-lencol",
  "cortina": "cortinas",
  "decoracao": "decoracoes",
};

function normalizeCollectionValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function toCollectionSlug(value: string) {
  return normalizeCollectionValue(value)
    .replace(/&/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function canonicalCollectionSlug(value: string) {
  const slug = toCollectionSlug(value);
  return collectionSlugAliases[slug] ?? slug;
}

function matchesCollectionValue(value: string, target: string) {
  return (
    normalizeCollectionValue(value) === normalizeCollectionValue(target) ||
    canonicalCollectionSlug(value) === canonicalCollectionSlug(target)
  );
}

function productMatchesCollection(product: Product, collection: Collection) {
  const productValues = [product.category, ...(product.tags ?? [])];

  return productValues.some(
    (value) =>
      matchesCollectionValue(value, collection.name) ||
      matchesCollectionValue(value, collection.slug)
  );
}

export function getProductsByCategory(category: string) {
  return products.filter((p) =>
    [p.category, ...(p.tags ?? [])].some((value) =>
      matchesCollectionValue(value, category)
    )
  );
}

export function getCollectionBySlug(slug: string) {
  const targetSlug = canonicalCollectionSlug(slug);

  return collections.find(
    (c) =>
      canonicalCollectionSlug(c.slug) === targetSlug ||
      canonicalCollectionSlug(c.name) === targetSlug
  );
}

export function getProductsByCollection(slug: string) {
  const col = getCollectionBySlug(slug);
  if (col) return products.filter((p) => productMatchesCollection(p, col));
  return products;
}
