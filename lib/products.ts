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
    slug: "mais-vendidos",
    name: "Mais Vendidos",
    image: "/images/product-2.jpg",
    productCount: 19,
    description: "Os produtos favoritos dos nossos clientes",
  },
  {
    slug: "roupas-de-cama-365",
    name: "Roupas de Cama 365",
    image: "/images/product-1.jpg",
    productCount: 4,
    description: "Nossa linha completa Roupas de Cama 365",
  },
  {
    slug: "jogos-de-lencol",
    name: "Jogos de Lençol",
    image: "/images/product-3.jpg",
    productCount: 36,
    description: "O melhor para o seu quarto",
  },
  {
    slug: "solteiro",
    name: "Solteiro",
    image: "/images/product-1.jpg",
    productCount: 29,
    description: "Jogos e conjuntos tamanho solteiro",
  },
  {
    slug: "casal-queen-king",
    name: "Casal, Queen e King",
    image: "/images/product-2.jpg",
    productCount: 23,
    description: "Conjuntos para camas de casal, queen e king",
  },
  {
    slug: "colchas",
    name: "Colchas e Cobre-Leito",
    image: "/images/product-3.jpg",
    productCount: 15,
    description: "Colchas e cobre-leitos para todos os gostos",
  },
  {
    slug: "hotelaria",
    name: "Linha Hotelaria",
    image: "/images/product-1.jpg",
    productCount: 11,
    description: "Qualidade de hotel para a sua casa",
  },
  {
    slug: "bordado-ingles",
    name: "Bordado Inglês",
    image: "/images/product-2.jpg",
    productCount: 8,
    description: "Sofisticação com bordado inglês artesanal",
  },
  {
    slug: "estampados",
    name: "Estampados",
    image: "/images/product-3.jpg",
    productCount: 31,
    description: "Designs exclusivos e estampas modernas",
  },
];

export const products: Product[] = [
  {
    "id": 1,
    "name": "Roupas de Cama Afrodite  / 3 Peças em Algodão Super Soft",
    "price": 359.4,
    "compareAtPrice": 539.0999999999999,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/Sd9ffa45715d0413e850cbf2f2cfbbdb79.jpg?v=1762747754",
    "rating": 4.5,
    "reviews": 208,
    "category": "Roupas de Cama 365",
    "slug": "conjunto-afrodite",
    "description": "RENOVE A APARÊNCIA DE SEU QUARTO COM O CONJUNTO AFRODITE DE COLCHA E FRONHAS! Este lindo conjunto de fronhas e colcha são refinados, respiráveis e muito confortáveis. Feitos com tecido de alta qualida...",
    "isTest": false
  },
  {
    "id": 2,
    "name": "Conjunto Sleep Luxury™ /  Lençol de Seda Cetim + Fronhas",
    "price": 359.9,
    "compareAtPrice": 539.8499999999999,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/product-image-1778381317.jpg?v=1762747754",
    "rating": 4.3,
    "reviews": 59,
    "category": "Roupas de Cama 365",
    "slug": "conjunto-sleep-luxury",
    "description": "DESFRUTE DE UMA ÓTIMA NOITE DE SONO QUE SÓ O NOSSO LENÇOL DE SEDA CETIM PODE TE OFERECER! O mais refinado, respirável e macio do mercado! As propriedades reguladoras de temperatura naturais do Silk ma...",
    "isTest": false
  },
  {
    "id": 3,
    "name": "Conjunto Gihng Pure Luxury-  Peças em 100% Algodão Egípcio",
    "price": 929.9,
    "compareAtPrice": 1394.85,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/product-image-1992823793.jpg?v=1762747754",
    "rating": 4.5,
    "reviews": 109,
    "category": "Roupas de Cama 365",
    "slug": "conjunto-gihng-pure-luxury-pecas-em-100-algodao-egipcio",
    "description": "Genuíno Conjunto de Roupas de Cama em Algodão Egípcio: Luxo &amp; Conforto que Você Jamais Viu ou Sentiu! Considerado um item altamente luxuoso, feito com fibras naturais exclusivas do magnífico algod...",
    "isTest": false
  },
  {
    "id": 4,
    "name": "Conjunto Calme™ de Lençol + Fronhas em Veludo Super Macio",
    "price": 345.9,
    "compareAtPrice": 518.8499999999999,
    "image": "https://cdn.shopify.com/s/files/1/0630/7040/4667/files/He2558c5a0c7d47bdbef1fd76916c31d8Z.jpg?v=1762747754",
    "rating": 4.2,
    "reviews": 168,
    "category": "Roupas de Cama 365",
    "slug": "conjunto-calme-veludo",
    "description": "O CONJUNTO NÚMERO UM EM ACONCHEGO, MACIEZ E BELEZA! Este belíssimo conjunto consegue te proporcionar um mix incomparável de conforto e praticidade ao deitar-se... Esqueça aqueles lençóis fininhos e de...",
    "isTest": false
  },
  {
    "id": 5,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças Itália 150 Fios Grid Dupla Face Grafite 210x230 cm",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-69ebc8316663f-large_65a1059b-46b9-46d1-9ea1-b163cd9a8a4e.png?v=1777590239",
    "rating": 4.3,
    "reviews": 41,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-italia-150-fios-grid-dupla-face-grafite-210x230-cm-1",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false
  },
  {
    "id": 6,
    "name": "Jogo de Lençol Queen 3 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 69.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-3-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b38b54e7e-large.png?v=1777590244",
    "rating": 4.0,
    "reviews": 82,
    "category": "Mais Vendidos",
    "slug": "jogo-de-lencol-queen-3-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 7,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Verde",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-verde-160x220-cm-69ebb489d6592-large_392aac2a-6767-4854-a0f9-e958129d49fb.png?v=1777590250",
    "rating": 4.9,
    "reviews": 171,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-verde-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 8,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-3-pecas-italia-150-fios-poa-dupla-face-rosa-682771b693cb0-large.png?v=1777590256",
    "rating": 3.9,
    "reviews": 46,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 9,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Fendi",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-italia-150-fios-poa-dupla-face-fendi-160x220-cm-69ebc6f68f0ae-large_981e7e7a-ce2c-4a76-94fd-b762bd84cd12.png?v=1777590262",
    "rating": 4.8,
    "reviews": 59,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-fendi-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 10,
    "name": "Tapete Foam Absorvente 38x58 cm Soft Antiderrapante Toque Macio - Azul",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-6981f5174203a-large_a6ec36a6-b411-4d3e-ac7b-d8a2f18d5d14.png?v=1777590268",
    "rating": 4.6,
    "reviews": 204,
    "category": "Mais Vendidos",
    "slug": "tapete-foam-absorvente-38x58-cm-soft-antiderrapante-toque-macio-azul-1",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Foam é a combinação ideal entre beleza, praticidade e aconchego. Com toque maci...",
    "isTest": false
  },
  {
    "id": 11,
    "name": "Kit Colcha Cobre Leito Solteiro 2Pç Estampada Itália 150 Fios Dupla Face Flora 220x160cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm-69eba66aa2127-large_55fba4c5-30cf-4811-bfd8-62b058440079.png?v=1777590273",
    "rating": 4.9,
    "reviews": 123,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-flora-220x160cm-1",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false
  },
  {
    "id": 12,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Rosa",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-poa-dupla-face-rosa-250x270-cm-69ebc78324408-large_0dc1b544-ca39-4b58-9151-ff3119a03484.png?v=1777590280",
    "rating": 4.7,
    "reviews": 194,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-rosa-1",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 13,
    "name": "Kit Toalhas Paris Banho 2 Peças 450g/m² 100% Algodão Bege Claro",
    "price": 54.0,
    "compareAtPrice": 129.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-toalhas-paris-banho-2-pecas-450gm2-100-algodao-bege-claro-69b2bb6abaec0-large.png?v=1777590285",
    "rating": 4.8,
    "reviews": 226,
    "category": "Mais Vendidos",
    "slug": "kit-toalhas-paris-banho-2-pecas-450g-m-100-algodao-bege-claro",
    "description": "Descrição do produto                           Jogo de Banho Paris 2 Peças   Conforto, Estilo e Qualidade para o Seu Dia a Dia Transforme sua rotina com o Jogo de Banho Paris, composto por 2 peça 100%...",
    "isTest": false
  },
  {
    "id": 14,
    "name": "Kit Colcha Cobre Leito Solteiro 2Pç Estampada Itália 150 Fios Dupla Face Rami 220x160cm",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-rami-220x160cm-69eba548b1adf-large.png?v=1777590291",
    "rating": 4.4,
    "reviews": 187,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2pc-estampada-italia-150-fios-dupla-face-rami-220x160cm",
    "description": "Descrição do produto                           Dê um novo visual ao seu quarto com o Kit Colcha Itália!Com 6 estampas exclusivas e modernas, essa colcha é perfeita para quem busca praticidade, beleza ...",
    "isTest": false
  },
  {
    "id": 15,
    "name": "Tapete Chenille Bolinha Popcorn  38x58 cm Toque Macio e Design Moderno - Areia",
    "price": 16.0,
    "compareAtPrice": 39.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-areia-69b45c5de9f28-large.png?v=1777590296",
    "rating": 4.3,
    "reviews": 173,
    "category": "Mais Vendidos",
    "slug": "tapete-chenille-bolinha-popcorn-38x58-cm-toque-macio-e-design-moderno-areia",
    "description": "Descrição do produto                           Tapete  38x58 cm  Conforto, Cores e Versatilidade para o Seu Lar O Tapete Chenille é a combinação ideal entre beleza, praticidade e aconchego. Com toque ...",
    "isTest": false
  },
  {
    "id": 16,
    "name": "Kit Colcha Cobre Leito King 3 Peças Itália 150 Fios Grid Dupla Face Grafite 250x270 cm",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm-69ebc815ed27f-large_212b4578-f418-4197-9a52-4ea73b3551fc.png?v=1777590302",
    "rating": 4.9,
    "reviews": 207,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-italia-150-fios-grid-dupla-face-grafite-250x270-cm-1",
    "description": "Descrição do produto                           Conforto, praticidade e estilo para seu quarto! O Kit Colcha Itália Grid é ideal para quem busca um toque sofisticado e moderno na decoração. Confecciona...",
    "isTest": false
  },
  {
    "id": 17,
    "name": "Kit Colcha Cobre Leito Queen 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 109.0,
    "compareAtPrice": 169.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25d56f2be7-large.png?v=1777590308",
    "rating": 3.9,
    "reviews": 133,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-queen-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 18,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Azul",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-azul-69f25ce6c40c3-large.png?v=1777590313",
    "rating": 4.1,
    "reviews": 135,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-azul",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 19,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25d2d2cdf5-large.png?v=1777590319",
    "rating": 4.3,
    "reviews": 31,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 20,
    "name": "Kit Colcha Cobre Leito Casal 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 89.0,
    "compareAtPrice": 159.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25e1d9be60-large.png?v=1777590324",
    "rating": 4.6,
    "reviews": 223,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-casal-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 21,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Brown",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown-69f25cbaf1e48-large.png?v=1777590330",
    "rating": 4.0,
    "reviews": 18,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-brown",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 22,
    "name": "Kit Colcha Cobre Leito King 3 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 119.0,
    "compareAtPrice": 179.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25e9c462c5-large.png?v=1777590335",
    "rating": 4.9,
    "reviews": 178,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-king-3-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 23,
    "name": "Kit Colcha Cobre Leito Solteiro 2 Peças 150 Fios Matelado Dupla Face Estampado Itália Poá Grey",
    "price": 69.0,
    "compareAtPrice": 119.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey-69f25eab5c208-large.png?v=1777590341",
    "rating": 4.8,
    "reviews": 168,
    "category": "Mais Vendidos",
    "slug": "kit-colcha-cobre-leito-solteiro-2-pecas-150-fios-matelado-dupla-face-estampado-italia-poa-grey",
    "description": "Descrição do produto                           O Kit Cobre Leito Itália chegou para dar um novo charme ao seu quarto. O estampado Poá traz um toque clássico e atemporal à decoração, enquanto a dupla f...",
    "isTest": false
  },
  {
    "id": 24,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Rós",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros-68a5ddf0b0435-large.png?v=1777595622",
    "rating": 4.6,
    "reviews": 86,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-ros",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 25,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Rosas",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-rosas-68a5db2e4ee3e-large.png?v=1777595630",
    "rating": 4.9,
    "reviews": 137,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 26,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Grey",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-grey-68a4b3a4396ba-large.png?v=1777595636",
    "rating": 5.0,
    "reviews": 73,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-grey",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 27,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Fend Stone",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-fend-stone-693ad80d36641-large.jpg?v=1777595642",
    "rating": 4.1,
    "reviews": 142,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-fend-stone",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 28,
    "name": "Jogo de Lençol Solteiro Roma 3 Pç Percal 300 Fios Estampado - Rosas",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-rosas-68a5dceeb2344-large.png?v=1777595649",
    "rating": 4.1,
    "reviews": 75,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 29,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Azul",
    "price": 49.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-azul-693ad808d560e-large.jpg?v=1777595655",
    "rating": 4.2,
    "reviews": 145,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-azul",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 30,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Blush",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-blush-693ad80a551b3-large.jpg?v=1777595660",
    "rating": 5.0,
    "reviews": 42,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-blush",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 31,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Rose",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-rose-693ad80f7cbae-large.jpg?v=1777595666",
    "rating": 4.4,
    "reviews": 114,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-rose",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 32,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Neve",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-neve-693ad8073ba78-large.jpg?v=1777595672",
    "rating": 4.3,
    "reviews": 71,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-neve",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 33,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Green",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-green-68a4b39e386eb-large.png?v=1777595679",
    "rating": 4.1,
    "reviews": 100,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-green",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 34,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Arabesco",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-arabesco-68a5db8c6167a-large.png?v=1777595685",
    "rating": 4.4,
    "reviews": 63,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-arabesco",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 35,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Green",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-green-68a4b3a9b8929-large.png?v=1777595693",
    "rating": 4.0,
    "reviews": 228,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-green",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 36,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - White",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-white-68a4b3a61da4a-large.png?v=1777595699",
    "rating": 4.6,
    "reviews": 26,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-white",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 37,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - White",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-white-68a4b39e164e2-large.png?v=1777595706",
    "rating": 4.9,
    "reviews": 187,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-white",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 38,
    "name": "Jogo de Lençol Queen Poá 3 Pçs Percal 300 Fios Estampado - Poá Rose",
    "price": 69.0,
    "compareAtPrice": 109.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-poa-3-pcs-percal-300-fios-estampado-poa-rose-689e17fd82169-large.png?v=1777595712",
    "rating": 4.5,
    "reviews": 69,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-poa-3-pcs-percal-300-fios-estampado-poa-rose",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false
  },
  {
    "id": 39,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Fend",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-fend-689e18081a465-large.png?v=1777595719",
    "rating": 4.9,
    "reviews": 70,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-fend",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false
  },
  {
    "id": 40,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Névoa",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-nevoa-693ad802b4eae-large.jpg?v=1777595725",
    "rating": 5.0,
    "reviews": 167,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-nevoa",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 41,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Vintage",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-vintage-68a5db4688190-large.png?v=1777595732",
    "rating": 4.0,
    "reviews": 229,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 42,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Arabesco",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-arabesco-68a5dfc5ef932-large.png?v=1777595739",
    "rating": 4.0,
    "reviews": 85,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-arabesco",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 43,
    "name": "Jogo de Lençol Queen Roma 3 Pçs Percal 300 Fios Estampado - Rosas",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-queen-roma-3-pcs-percal-300-fios-estampado-rosas-68a5daa577794-large.png?v=1777595745",
    "rating": 4.3,
    "reviews": 59,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-queen-roma-3-pcs-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 44,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b39fb983c-large.png?v=1777595752",
    "rating": 4.2,
    "reviews": 82,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 45,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Beige",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-beige-68a4b3986b800-large.png?v=1777595759",
    "rating": 4.9,
    "reviews": 181,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-beige",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 46,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Rosas",
    "price": 39.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-rosas-68a5ddb517f29-large.png?v=1777595765",
    "rating": 4.3,
    "reviews": 133,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-rosas",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 47,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Rose",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-rose-689e180324476-large.png?v=1777595771",
    "rating": 4.7,
    "reviews": 43,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-rose",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false
  },
  {
    "id": 48,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Rós",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-ros-68a5db624a267-large.png?v=1777595778",
    "rating": 4.2,
    "reviews": 39,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-ros",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 49,
    "name": "Jogo de Lençol Casal Roma 3 Pçs Percal 300 Fios Estampado - Olive",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-olive-689b4a5939ed1-large.png?v=1777595785",
    "rating": 4.1,
    "reviews": 123,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-roma-3-pcs-percal-300-fios-estampado-olive",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 50,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Verde",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-verde-693ad80bd9cab-large.jpg?v=1777595793",
    "rating": 4.5,
    "reviews": 74,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-verde",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 51,
    "name": "Jogo de Lençol Solteiro 2 Peças Percal 300 Fios Bordado Inglês Veneza Tofu",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-veneza-2-pcs-solteiro-300-fios-percal-bordado-ingles-tofu-693ad805928f0-large.jpg?v=1777595799",
    "rating": 4.5,
    "reviews": 225,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-percal-300-fios-bordado-ingles-veneza-tofu",
    "description": "Descrição do produto                           Como é versátil, o estilo básico possibilita muitas decorações. Pode casar com qualquer outro estilo, pois as peças lisas e neutras são coringas. Aposte ...",
    "isTest": false
  },
  {
    "id": 52,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Vintage",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-vintage-68a5ddd808743-large.png?v=1777595805",
    "rating": 4.9,
    "reviews": 216,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 53,
    "name": "Jogo de Lençol Casal Poá 3 Pçs Percal 300 Fios Estampado - Poá Sage",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-sage-689e1801192ab-large.png?v=1777595811",
    "rating": 4.9,
    "reviews": 119,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-poa-3-pcs-percal-300-fios-estampado-poa-sage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 3 Cores Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 3 lindas cores, oferecendo praticidade e um to...",
    "isTest": false
  },
  {
    "id": 54,
    "name": "Jogo de Lençol Solteiro Roma 3 Pç Percal 300 Fios Estampado - Vintage",
    "price": 59.0,
    "compareAtPrice": 139.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-vintage-69e9235b58993-large.png?v=1777595817",
    "rating": 4.8,
    "reviews": 79,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-3-pc-percal-300-fios-estampado-vintage",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 55,
    "name": "Jogo de Lençol Solteiro Estampado 3 Peças Percal 300 Fios Roma Roses",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-3-pecas-percal-300-fios-roma-estampado-roses-67aa2cd301726-large.png?v=1777595823",
    "rating": 4.2,
    "reviews": 12,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-estampado-3-pecas-percal-300-fios-roma-roses",
    "description": "Descrição do produto                           O Jogo de Cama 300 fios Percal Roma traz estampas em tons claros e neutros, clássico e elegante com qualidade impecável.  Além de beleza o toque em 300 f...",
    "isTest": false
  },
  {
    "id": 56,
    "name": "Jogo de Lençol Solteiro 2 Peças Valencia Percal 300 Fios Hotelaria - Beige",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-beige-68a4b3a273d53-large.png?v=1777595829",
    "rating": 4.3,
    "reviews": 137,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-beige",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 57,
    "name": "Jogo de Lençol Solteiro Roma 2 Pç Percal 300 Fios Estampado - Olive",
    "price": 99.9,
    "compareAtPrice": 149.85000000000002,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-olive-68a5dfe46b3a4-large.png?v=1777595836",
    "rating": 4.3,
    "reviews": 32,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-solteiro-roma-2-pc-percal-300-fios-estampado-olive",
    "description": "Descrição do produto                           Jogo de Cama Roma em 5 Estampas  Renove seu quarto com conforto e estilo! Este jogo de cama está disponível em 5 lindas estampas, oferecendo praticidade ...",
    "isTest": false
  },
  {
    "id": 58,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Nude",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-nude-68a4b3982c265-large.png?v=1777595843",
    "rating": 4.5,
    "reviews": 117,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-nude",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  },
  {
    "id": 59,
    "name": "Jogo de Lençol Casal 3 Peças Valencia Percal 300 Fios Hotelaria - Grey",
    "price": 59.0,
    "compareAtPrice": 99.9,
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-grey-68a4b399c862c-large.png?v=1777595849",
    "rating": 4.8,
    "reviews": 43,
    "category": "Jogos de Lençol",
    "slug": "jogo-de-lencol-casal-3-pecas-valencia-percal-300-fios-hotelaria-grey",
    "description": "Descrição do produto                           Bem-vindo ao inigualável conforto excepcional da nossa linha Hotelaria Valencia. Experimente a suavidade sublime dos nossos produtos da linha hotelaria c...",
    "isTest": false
  }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category);
}

export function getCollectionBySlug(slug: string) {
  const col = collections.find(c => c.slug === slug);
  if (!col) return undefined;
  // Usa a imagem do 2º produto da coleção (fallback pro 1º)
  const colProducts = getProductsByCollection(slug);
  const coverProduct = colProducts[1] || colProducts[0];
  if (coverProduct?.image) {
    return { ...col, image: coverProduct.image };
  }
  return col;
}

export function getProductsByCollection(slug: string) {
  if (slug === 'roupas-de-cama-365') return products.filter(p => p.category === 'Roupas de Cama 365');
  if (slug === 'mais-vendidos') return products.filter(p => p.category === 'Mais Vendidos');
  if (slug === 'jogos-de-lencol') return products.filter(p => p.category === 'Jogos de Lençol');
  if (slug === 'solteiro') return products.filter(p => p.name.toLowerCase().includes('solteiro'));
  if (slug === 'casal-queen-king') return products.filter(p => {
    const n = p.name.toLowerCase();
    return n.includes('casal') || n.includes('queen') || n.includes('king');
  });
  if (slug === 'colchas') return products.filter(p => {
    const n = p.name.toLowerCase();
    return n.includes('colcha') || n.includes('cobre leito');
  });
  if (slug === 'hotelaria') return products.filter(p => p.name.toLowerCase().includes('hotelaria'));
  if (slug === 'bordado-ingles') return products.filter(p => p.name.toLowerCase().includes('bordado'));
  if (slug === 'estampados') return products.filter(p => p.name.toLowerCase().includes('estampado'));
  return products;
}

// Retorna collections com imagens dinâmicas (2º produto de cada)
export function getCollectionsWithCovers(): Collection[] {
  return collections.map(col => {
    const colProducts = getProductsByCollection(col.slug);
    const coverProduct = colProducts[1] || colProducts[0];
    return coverProduct?.image ? { ...col, image: coverProduct.image } : col;
  });
}

