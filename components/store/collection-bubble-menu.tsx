import Link from "next/link"
import { collections, getProductsByCollection } from "@/lib/products"

const preferredCollectionOrder = [
  "novidades",
  "mais-vendidos",
  "jogos-de-lencol",
  "colchas-e-cobre-leito",
  "toalhas",
  "edredons",
  "kit-cama-posta-queen",
  "kit-cama-posta-king",
  "roupas-de-cama-365",
  "cortinas",
  "decoracoes",
  "diversos",
]

const hiddenCollectionSlugs = new Set(["kit-cama-posta"])

const collectionLabels: Record<string, string> = {
  "jogos-de-lencol": "Jogo de Lençol",
  "colchas-e-cobre-leito": "Cobre Leito",
  "mais-vendidos": "Mais Vendidos",
  diversos: "Diversos",
  toalhas: "Toalhas",
  edredons: "Edredons",
  novidades: "Novidades",
  "roupas-de-cama-365": "Cama 365",
  "kit-cama-posta-queen": "Kit Queen",
  decoracoes: "Decorações",
  cortinas: "Cortinas",
  "kit-cama-posta-king": "Kit King",
}

function getOrderedCollections() {
  return collections
    .filter((collection) => !hiddenCollectionSlugs.has(collection.slug))
    .sort((a, b) => {
      const aIndex = preferredCollectionOrder.indexOf(a.slug)
      const bIndex = preferredCollectionOrder.indexOf(b.slug)

      if (aIndex === -1 && bIndex === -1) return a.name.localeCompare(b.name)
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    })
}

export function CollectionBubbleMenu() {
  const items = getOrderedCollections().map((collection) => {
    const firstProduct = getProductsByCollection(collection.slug)[0]

    return {
      slug: collection.slug,
      label: collectionLabels[collection.slug] ?? collection.name,
      image: firstProduct?.image ?? collection.image,
    }
  })

  return (
    <nav
      aria-label="Coleções em destaque"
      className="border-b border-[#ece7df] bg-[#ffffff]"
    >
      <div className="collection-bubble-scroll flex gap-4 overflow-x-auto px-4 py-4 md:justify-center md:px-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/colecoes/${item.slug}`}
            className="group flex w-[76px] shrink-0 flex-col items-center gap-2 text-center outline-none"
          >
            <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#f7f3ed] ring-1 ring-[#eadfce] transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-[#ff5252]">
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="line-clamp-2 min-h-[30px] text-[11px] font-semibold leading-[1.15] text-[#2b2b2b] transition-colors group-hover:text-[#1a1a1a]">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
