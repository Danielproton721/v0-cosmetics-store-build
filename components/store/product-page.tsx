"use client"

import { useState, useCallback, useEffect, useRef } from "react"
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
  const [showFloating, setShowFloating] = useState(false)
  const { addItem } = useCart()
  const inlineButtonRef = useRef<HTMLDivElement>(null)

  const totalPrice = product.price * quantity

  // Show floating button only when the inline button scrolls out of view
  useEffect(() => {
    const el = inlineButtonRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
    <>
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

      {/* Static Add to Cart inline button */}
      <div ref={inlineButtonRef} className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className={`w-full text-sm font-bold py-3.5 rounded-full uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 ${
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
                {"- R$ " + totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </>
          )}
        </button>
      </div>

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
    </div>

    {/* Floating overlay Add to Cart - above everything, appears when inline button scrolls out */}
    <div
      className={`fixed bottom-5 left-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        showFloating
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleAddToCart}
        className={`w-full text-sm font-bold py-3.5 rounded-full uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.25)] ${
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
              {"- R$ " + totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </>
        )}
      </button>
    </div>
    </>
  )
}
