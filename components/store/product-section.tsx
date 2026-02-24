"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { CategoryFilter } from "./category-filter"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
  slug?: string
  isTest?: boolean
}

interface ProductSectionProps {
  title: string
  products: Product[]
  categories?: string[]
  bgClass?: string
}

export function ProductSection({
  title,
  products,
  categories,
  bgClass = "bg-[#ffffff]",
}: ProductSectionProps) {
  const allCategories = categories
    ? ["Todos", ...categories]
    : ["Todos"]
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section className={`py-8 ${bgClass}`}>
      <h2 className="text-xl font-bold text-[#1a1a1a] text-center mb-5 uppercase tracking-wide">
        {title}
      </h2>

      {categories && categories.length > 0 && (
        <div className="mb-5">
          <CategoryFilter
            categories={allCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
            slug={product.slug}
            isTest={product.isTest}
          />
        ))}
      </div>
    </section>
  )
}
