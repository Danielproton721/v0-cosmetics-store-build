"use client"

import { useState, useCallback } from "react"
import { Check, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { ProductGallery } from "./product-gallery"
import { ProductInfo } from "./product-info"
import { QuantitySelector } from "./quantity-selector"
import { ShippingCalculator } from "./shipping-calculator"
import { AccordionSection } from "./accordion-section"
import { RelatedProducts } from "./related-products"
import { ReviewsSection } from "./reviews-section"
import type { Product } from "@/lib/products"

interface ProductPageProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductPage({ product, relatedProducts }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const totalPrice = product.price * quantity

  const handleAddToCart = useCallback(() => {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }, [addItem, product, quantity])

  return (
    <div>
      {/* Gallery */}
      <ProductGallery images={product.images} name={product.name} />

      {/* Divider */}
      <div className="h-2 bg-[#f5f5f5]" />

      {/* Product info */}
      <ProductInfo
        name={product.name}
        price={product.price}
        compareAtPrice={product.compareAtPrice}
        rating={product.rating}
        reviews={product.reviews}
        recentSales={product.recentSales}
      />

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/* Shipping calculator */}
      <ShippingCalculator />

      {/* Divider */}
      <div className="h-2 bg-[#f5f5f5]" />

      {/* Accordion sections */}
      <AccordionSection
        hairTypes={product.hairTypes}
        needs={product.needs}
        benefits={product.benefits}
        description={product.description}
        howToUse={product.howToUse}
        touchTest={product.touchTest}
        precautions={product.precautions}
      />

      {/* Divider */}
      <div className="h-2 bg-[#f5f5f5]" />

      {/* Related products */}
      <RelatedProducts products={relatedProducts} />

      {/* Divider */}
      <div className="h-2 bg-[#f5f5f5]" />

      {/* Reviews */}
      <ReviewsSection rating={product.rating} totalReviews={product.reviews} />

      {/* Floating Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`fixed bottom-6 right-5 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.25)] active:scale-90 transition-all duration-200 ${
          added
            ? "bg-[#1a1a1a] text-[#ffffff]"
            : "bg-[#22c55e] text-[#ffffff] hover:bg-[#16a34a]"
        }`}
        aria-label="Adicionar ao carrinho"
      >
        {added ? <Check size={22} /> : <ShoppingBag size={22} />}
      </button>
    </div>
  )
}
