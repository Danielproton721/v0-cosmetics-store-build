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
    <div className="pb-20">
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

      {/* Sticky Add to Cart CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff] border-t border-[#f0f0f0] px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button
          onClick={handleAddToCart}
          className={`w-full text-sm font-bold py-3.5 rounded-full uppercase tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
            added
              ? "bg-[#1a1a1a] text-[#ffffff]"
              : "bg-[#22c55e] text-[#ffffff] hover:bg-[#16a34a]"
          }`}
        >
          {added ? (
            <>
              <Check size={18} />
              <span>Adicionado ao Carrinho</span>
            </>
          ) : (
            <>
              <ShoppingBag size={18} />
              <span>Adicionar</span>
              <span className="text-xs font-normal opacity-90">
                - R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
