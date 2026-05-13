"use client"

import { useState, useCallback, useEffect, useRef, useMemo } from "react"
import { createPortal } from "react-dom"
import { Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { ProductGallery } from "./product-gallery"
import { ShippingCalculator } from "./shipping-calculator"
import { AccordionSection } from "./accordion-section"
import { RelatedProducts } from "./related-products"
import { ReviewsSection } from "./reviews-section"
import { VariantSelector } from "./variant-selector"
import type { Product, ProductVariant } from "@/lib/products"

// Lista de tamanhos que conhecemos
const sizeKeywords = ["Solteiro", "Casal", "Queen", "King"]
const bedCategories = ["Jogos de Lençol", "Colchas e Cobre-Leito", "Edredons", "Kit Cama Posta"]
const nonBedKeywords = ["tapete", "banho", "banheiro", "toalha", "almofada", "decorativa", "sofa", "sofá"]
const colorKeywords = [
  "Azul Claro",
  "Azul Marinho",
  "Azul Encantado",
  "Verde Água",
  "Verde Pinho",
  "Verde Sutil",
  "Off White",
  "Cinza Escuro",
  "Cinza Névoa",
  "Cinza/Rosê",
  "Rosê/Verde",
  "Pérola/Bambu",
  "Rosa Romã",
  "Verde",
  "Cinza",
  "Rosê",
  "Rose",
  "Rosa",
  "Branco",
  "Bege",
  "Areia",
  "Taupe",
  "Chumbo",
  "Petróleo",
  "Marinho",
  "Fendi",
  "Prata",
  "Caqui",
  "Cáqui",
  "Mostarda",
  "Grafite",
]

function extractSizeFromName(name: string): string | null {
  const lower = name.toLowerCase()
  for (const size of sizeKeywords) {
    if (lower.includes(size.toLowerCase())) {
      return size
    }
  }
  return null
}

const availableSizes = ["Casal", "King", "Queen"]

function normalizeValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function isBedProduct(product: Product) {
  const normalizedName = normalizeValue(product.name)
  const normalizedCategory = normalizeValue(product.category)
  const matchesBedCategory = bedCategories.some((category) =>
    normalizedCategory.startsWith(normalizeValue(category))
  )
  const matchesNonBedKeyword = nonBedKeywords.some((keyword) =>
    normalizedName.includes(normalizeValue(keyword))
  )

  return matchesBedCategory && !matchesNonBedKeyword
}

function extractColorFromName(name: string): string | null {
  const normalizedName = normalizeValue(name)
  const color = colorKeywords.find((keyword) =>
    normalizedName.includes(normalizeValue(keyword))
  )

  if (color) return color

  const suffix = name.split(" - ").pop()?.trim()
  if (suffix && suffix !== name && suffix.length <= 28) return suffix

  return null
}

interface ProductPageProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductPage({ product, relatedProducts }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants?.[0] ?? null
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const { addItem } = useCart()
  const inlineButtonRef = useRef<HTMLDivElement>(null)

  // Derive active price, image and images from selected variant or product defaults
  const activePrice = selectedVariant?.price ?? product.price
  const activeCompareAtPrice = selectedVariant?.compareAtPrice ?? product.compareAtPrice
  const activeImage = selectedVariant?.image ?? product.image
  const activeImages = selectedVariant?.images ?? product.images ?? [product.image]

  const totalPrice = activePrice * quantity

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

  // Detectar tamanho do nome do produto
  const productSize = useMemo(() => extractSizeFromName(product.name), [product.name])
  const shouldShowBedDetails = useMemo(() => isBedProduct(product), [product])
  const productColor = useMemo(
    () => selectedVariant?.label ?? extractColorFromName(product.name),
    [product.name, selectedVariant]
  )

  const handleAddToCart = useCallback(() => {

    const variantSuffix = selectedVariant ? ` - ${selectedVariant.label}` : ""
    addItem(
      {
        id: selectedVariant?.id ?? product.id,
        slug: product.slug,
        name: product.name + variantSuffix,
        price: activePrice,
        image: activeImage,
      },
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }, [addItem, product, quantity, selectedVariant, activePrice, activeImage])

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-8 md:py-12">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
          {/* Left Column - Gallery */}
          <div className="md:sticky md:top-24">
            <ProductGallery images={activeImages} name={product.name} />
            <div className="h-2 bg-[#f5f5f5] md:hidden" />
          </div>

          {/* Right Column - Info */}
          <div className="flex flex-col">
            <div className="px-4 md:px-0 pt-4 md:pt-0">
              <div className="flex gap-2 mb-3">
                <span className="bg-[#fff9e6] text-[#d4a017] text-xs font-semibold px-2.5 py-1 rounded-full">Manta Flannel</span>
                <span className="bg-[#fff9e6] text-[#d4a017] text-xs font-semibold px-2.5 py-1 rounded-full">Toque Macio</span>
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight text-balance mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 border border-[#e5e5e5] rounded px-2 py-1">
                  <span className="text-[#d4a017] font-bold text-sm">★ 5</span>
                  <span className="text-xs text-[#737373]">(3)</span>
                </div>
                <a href="#descricao" className="text-xs text-[#1a1a1a] underline underline-offset-2">Ver descricao do produto</a>
              </div>
            </div>

            <div className="bg-[#f9f9f9] rounded-2xl p-4 md:p-6 mb-8 mx-4 md:mx-0">
              {/* Price section */}
              <div className="mb-6">
                {activeCompareAtPrice && (
                  <div className="text-sm text-[#737373] line-through mb-1">
                    R$ {activeCompareAtPrice.toFixed(2).replace(".", ",")}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#ef4444]">
                    R$ {activePrice.toFixed(2).replace(".", ",")} <span className="text-lg font-bold">no Pix</span>
                  </span>
                  <span className="bg-[#00c9a7] text-white text-xs font-bold px-2 py-1 rounded-full">
                    -21%
                  </span>
                </div>
                <div className="text-[#00c9a7] font-bold text-sm mb-2">
                  (5% de desconto)
                </div>
                <div className="text-sm text-[#1a1a1a] font-medium">
                  ou 6x de R$ {(activePrice / 6).toFixed(2).replace(".", ",")} sem juros
                </div>
                <a href="#" className="text-xs text-[#1a1a1a] underline mt-1 block">Ver parcelamento</a>
              </div>

              {/* Variant selector */}
              {product.variants && product.variants.length > 0 && selectedVariant && (
                <div className="mb-4">
                  <VariantSelector
                    label="Cor"
                    variants={product.variants}
                    selectedId={selectedVariant.id}
                    onSelect={setSelectedVariant}
                  />
                </div>
              )}

              {shouldShowBedDetails ? (
                <div className="mb-6">
                  <span className="text-sm text-[#1a1a1a] font-medium block mb-2">Tamanho:</span>
                  <div className="flex gap-2">
                    {availableSizes.map((size) => {
                      const isAvailable = productSize ? size.toLowerCase() === productSize.toLowerCase() : false
                      return (
                        <button
                          key={size}
                          disabled={!isAvailable}
                          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isAvailable
                              ? "bg-[#1a1a1a] text-white"
                              : "bg-white border border-[#e5e5e5] text-[#b3b3b3] cursor-not-allowed opacity-60"
                            }`}
                          title={!isAvailable ? "Nao disponivel para este produto" : ""}
                        >
                          {size}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : productColor ? (
                <div className="mb-6">
                  <span className="text-sm text-[#1a1a1a] font-medium block mb-2">Cor:</span>
                  <div className="inline-flex min-h-10 items-center rounded-md border border-[#e5e5e5] bg-white px-4 text-sm font-medium text-[#737373]">
                    {productColor}
                  </div>
                </div>
              ) : null}

              {/* Actions */}
              <div ref={inlineButtonRef} className="flex gap-3 mb-6">
                <div className="flex border border-[#e5e5e5] rounded-md items-center bg-white h-12">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 h-full text-[#737373] hover:text-[#1a1a1a] flex items-center justify-center text-lg"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm font-bold text-[#1a1a1a]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 h-full text-[#737373] hover:text-[#1a1a1a] flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 text-sm font-bold h-12 rounded-md uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 ${added
                    ? "bg-[#1a1a1a] text-[#ffffff]"
                    : "bg-[#00c9a7] text-[#ffffff] hover:bg-[#00b396]"
                    }`}
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      <span>Adicionado</span>
                    </>
                  ) : (
                    <>
                      <span>Comprar agora</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a855f7]"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" /><path d="m14 7 3 3" /></svg>
                  <span className="text-[#737373]">Troca descomplicada: <span className="font-semibold text-[#a855f7]">30 dias</span> para devolver</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ef4444]"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
                  <span className="text-[#737373]">Frete <span className="font-semibold text-[#ef4444]">rapido e seguro</span> para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a855f7]"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                  <span className="text-[#737373]">Ganhe <span className="font-semibold text-[#a855f7]">5% em Cashback</span> nesta compra</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block px-4 md:px-0">
              {shouldShowBedDetails && (
                <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Caracteristicas</h3>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                    <span className="text-xs text-[#1a1a1a] font-medium mb-1">Quantidade de Pecas</span>
                    <span className="text-sm font-medium text-[#737373]">1 Peca</span>
                  </div>
                  <div className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                    <span className="text-xs text-[#1a1a1a] font-medium mb-1">Cor</span>
                    <span className="text-sm font-medium text-[#737373]">{productColor ?? "Prata"}</span>
                  </div>
                  <div className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                    <span className="text-xs text-[#1a1a1a] font-medium mb-1">Tamanho</span>
                    <span className="text-sm font-medium text-[#737373]">Casal</span>
                  </div>
                  <div className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                    <span className="text-xs text-[#1a1a1a] font-medium mb-1">Material</span>
                    <span className="text-sm font-medium text-[#737373]">100% Poliester</span>
                  </div>
                  <div className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                    <span className="text-xs text-[#1a1a1a] font-medium mb-1">Gramatura</span>
                    <span className="text-sm font-medium text-[#737373]">240g/m²</span>
                  </div>
                </div>

                {/* Description Desktop */}
                <div id="descricao" className="border-t border-[#e5e5e5] pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Descricao</h3>
                    <span className="text-2xl font-light text-[#737373]">−</span>
                  </div>
                  <div className="text-sm text-[#737373] leading-relaxed">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
              )}
              {!shouldShowBedDetails && (
                <div id="descricao" className="border-t border-[#e5e5e5] pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Descricao</h3>
                    <span className="text-2xl font-light text-[#737373]">âˆ’</span>
                  </div>
                  <div className="text-sm text-[#737373] leading-relaxed">
                    <p>{product.description}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <ShippingCalculator />
              <div className="h-2 bg-[#f5f5f5]" />
              <AccordionSection
                hairTypes={product.hairTypes}
                needs={product.needs}
                benefits={product.benefits}
                description={product.description}
                howToUse={product.howToUse}
                touchTest={product.touchTest}
                precautions={product.precautions}
              />
            </div>
          </div>
        </div>

        <div className="md:mt-16">
          <div className="h-2 bg-[#f5f5f5] md:hidden" />
          <RelatedProducts products={relatedProducts} />
          <div className="h-2 bg-[#f5f5f5] md:hidden" />
          <ReviewsSection
            rating={product.rating}
            totalReviews={product.reviews}
            reviews={product.customerReviews}
          />
        </div>
      </div>

      {/* Floating overlay via Portal */}
      {isMounted &&
        createPortal(
          <div
            className={`fixed bottom-5 left-4 right-4 z-[9999] transition-all duration-300 ease-in-out md:hidden ${showFloating
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
              }`}
          >
            <button
              onClick={handleAddToCart}
              className={`w-full text-sm font-bold py-3.5 rounded-full uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(0,0,0,0.3)] ${added
                ? "bg-[#1a1a1a] text-[#ffffff]"
                : "bg-[#00c9a7] text-[#ffffff] hover:bg-[#00b396]"
                }`}
            >
              {added ? (
                <>
                  <Check size={18} />
                  <span>Adicionado ao Carrinho</span>
                </>
              ) : (
                <>
                  <span>Comprar agora</span>
                </>
              )}
            </button>
          </div>,
          document.body
        )}
    </>
  )
}
