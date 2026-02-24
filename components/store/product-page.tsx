"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
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
  const [showStickyBar, setShowStickyBar] = useState(false)
  const { addItem } = useCart()
  const quantityRef = useRef<HTMLDivElement>(null)

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

  // Observe when the quantity selector scrolls out of view
  useEffect(() => {
    const el = quantityRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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

      {/* Quantity selector - observed for sticky bar trigger */}
      <div ref={quantityRef}>
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      </div>

      {/* Static Add to Cart inline button */}
      <div className="px-4 pb-4">
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

    {/* Sticky Add to Cart Bar - slides up when user scrolls past quantity selector */}
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        showStickyBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#ffffff] border-t border-[#e5e5e5] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Mini product thumbnail */}
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>

          {/* Name + price */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#1a1a1a] truncate">{product.name}</p>
            <p className="text-xs font-bold text-[#1a1a1a]">
              {"R$ " + product.price.toFixed(2).replace(".", ",")}
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={handleAddToCart}
            className={`shrink-0 text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider active:scale-[0.95] transition-all flex items-center gap-1.5 ${
              added
                ? "bg-[#1a1a1a] text-[#ffffff]"
                : "bg-[#22c55e] text-[#ffffff] hover:bg-[#16a34a]"
            }`}
          >
            {added ? <Check size={14} /> : <ShoppingBag size={14} />}
            {added ? "Adicionado" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
