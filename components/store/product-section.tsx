"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { CategoryFilter } from "./category-filter"

interface Product {
  id: number
  name: string
  price: number
  compareAtPrice?: number
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
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

  const filteredProducts = (
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory)
  ).slice(0, 6)

  return (
    <section className={`py-8 overflow-hidden ${bgClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-[#1a1a1a] text-center mb-5 uppercase tracking-wide">
          {title}
        </h2>
      </motion.div>

      {categories && categories.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <CategoryFilter
            categories={allCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </motion.div>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard
              name={product.name}
              price={product.price}
              compareAtPrice={product.compareAtPrice}
              image={product.image}
              rating={product.rating}
              reviews={product.reviews}
              slug={product.slug}
              isTest={product.isTest}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

