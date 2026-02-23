import { notFound } from "next/navigation"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { ProductPage } from "@/components/store/product-page"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: "Produto nao encontrado | Gota Dourada" }
  }

  return {
    title: `${product.name} | Gota Dourada`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.relatedSlugs)

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <ProductPage product={product} relatedProducts={relatedProducts} />

      <Footer />
    </main>
  )
}
