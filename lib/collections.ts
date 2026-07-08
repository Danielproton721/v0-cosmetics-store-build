// Coleções num módulo próprio e leve: componentes client (header/menus) podem
// importar daqui sem arrastar o catálogo inteiro (lib/products.ts, ~345KB) pro
// bundle do navegador. lib/products.ts re-exporta para compatibilidade.
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
    "productCount": 3,
    "description": "Nossa coleção de Diversos"
  },
  {
    "slug": "toalhas",
    "name": "Toalhas",
    "image": "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/kit-toalhas-paris-banho-2-pecas-450gm2-100-algodao-bege-claro-69b2bb6abaec0-large.png?v=1777590285",
    "productCount": 18,
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
    "productCount": 35,
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
