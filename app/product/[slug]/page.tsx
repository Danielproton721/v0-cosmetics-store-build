import { notFound } from "next/navigation"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { ProductPage } from "@/components/store/product-page"
import { PageTransition } from "@/components/store/page-transition"
import { getProductBySlug, getProductsByCategory, products } from "@/lib/products"
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
    return { title: "Produto não encontrado | Fio Nobre" }
  }

  return {
    title: `${product.name} | Fio Nobre`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14" />

      <PageTransition>
        <ProductPage product={product} relatedProducts={relatedProducts} />
      </PageTransition>

      <Footer />
    </main>
  )
}
