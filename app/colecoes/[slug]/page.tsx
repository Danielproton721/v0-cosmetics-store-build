import { notFound } from "next/navigation"
import Image from "next/image"
import {
  collections,
  getCollectionBySlug,
  getProductsByCollection,
  products as allProducts,
} from "@/lib/products"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { CollectionProducts } from "@/components/store/collection-products"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) return { title: "Colecao nao encontrada" }
  return {
    title: `${collection.name} | ConfortBem`,
    description: collection.description,
  }
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) notFound()

  // Get products that belong to this collection
  let collectionProducts = getProductsByCollection(slug)

  // Also include home-page-only products that match the category
  // (some products in page.tsx aren't in products.ts yet)
  const categoryMap: Record<string, string> = {
    tonicos: "Tonicos",
    fortalecimento: "Fortalecimento",
    antiqueda: "Antiqueda",
    desmarelador: "Desmarelador",
    tonalidade: "Tonalidade",
  }
  const category = categoryMap[slug]

  // Combine all unique products
  const allSlugs = new Set(collectionProducts.map((p) => p.slug))
  const extraProducts = allProducts.filter(
    (p) => p.category === category && !allSlugs.has(p.slug)
  )
  collectionProducts = [...collectionProducts, ...extraProducts]

  const serializedProducts = collectionProducts.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    rating: p.rating,
    reviews: p.reviews,
    slug: p.slug,
  }))

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />
      <div className="h-14" />

      {/* Collection hero */}
      <section className="relative h-44 overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-xl font-bold text-[#ffffff] uppercase tracking-wide">
            {collection.name}
          </h1>
          <p className="text-xs text-[#ffffff]/80 mt-1 leading-relaxed max-w-sm">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Product count */}
      <div className="px-4 py-3 border-b border-[#e5e5e5]">
        <p className="text-xs text-[#737373]">
          {serializedProducts.length}{" "}
          {serializedProducts.length === 1 ? "produto" : "produtos"}
        </p>
      </div>

      <CollectionProducts products={serializedProducts} />

      <Footer />
    </main>
  )
}
