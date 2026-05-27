"use client"

import { useState, useCallback, useEffect, useRef, useMemo } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { ProductGallery } from "./product-gallery"
import { ShippingCalculator } from "./shipping-calculator"
import { AccordionSection } from "./accordion-section"
import { RelatedProducts } from "./related-products"
import { ReviewsSection } from "./reviews-section"
import { VariantSelector } from "./variant-selector"
import { getVariantSiblings, getSizeSiblings } from "@/lib/products"
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

const cardInstallmentRates = [
  { installments: 2, rate: 11.89 },
  { installments: 3, rate: 13.29 },
  { installments: 4, rate: 14.74 },
  { installments: 5, rate: 15.97 },
  { installments: 6, rate: 16.65 },
  { installments: 7, rate: 16.99 },
  { installments: 8, rate: 17.01 },
  { installments: 9, rate: 17.99 },
  { installments: 10, rate: 18.01 },
  { installments: 11, rate: 18.99 },
  { installments: 12, rate: 23.99 },
]

function formatCurrency(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`
}

function extractSizeFromName(name: string): string | null {
  const lower = name.toLowerCase()
  for (const size of sizeKeywords) {
    if (lower.includes(size.toLowerCase())) {
      return size
    }
  }
  return null
}

const availableSizes = ["Solteiro", "Casal", "King", "Queen"]

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

type ProductCharacteristic = {
  label: string
  value: string
}

function compactText(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function formatPieceCount(value: string) {
  const amount = Number(value)
  if (!Number.isFinite(amount)) return null

  return `${amount} ${amount === 1 ? "Peça" : "Peças"}`
}

function extractPieceCount(text: string): string | null {
  const match = text.match(/\b(\d{1,2})\s*(?:p(?:e[cç]as?|çs?|cs?)|pe[cç]a?s?)\b/i)
  if (!match) return null

  return formatPieceCount(match[1])
}

function extractDimensions(text: string): string | null {
  const match = text.match(/\b(\d+(?:[,.]\d+)?)\s*x\s*(\d+(?:[,.]\d+)?)\s*(cm|m)\b/i)
  if (!match) return null

  return `${match[1]}x${match[2]}${match[3].toLowerCase()}`
}

function extractMaterial(text: string): string | null {
  const materialPatterns = [
    /\b100%\s*algod[aã]o\b/i,
    /\b100%\s*poli[eé]ster\b/i,
    /\b100%\s*microfibra\b/i,
    /\bgaze de linho\b/i,
    /\bchenille\b/i,
    /\bpercal\b/i,
    /\blinho\b/i,
    /\bflannel\b/i,
  ]

  for (const pattern of materialPatterns) {
    const match = text.match(pattern)
    if (match) return compactText(match[0])
  }

  return null
}

function extractGrammage(text: string): string | null {
  const match = text.match(/\b(\d{2,4})\s*g\s*\/?\s*m(?:²|2)?\b/i)
  if (!match) return null

  return `${match[1]}g/m²`
}

function extractThreadCount(text: string): string | null {
  const match = text.match(/\b(\d{2,4})\s*fios?\b/i)
  if (!match) return null

  return `${match[1]} Fios`
}

function buildProductCharacteristics(
  product: Product,
  productSize: string | null,
  productColor: string | null
): ProductCharacteristic[] {
  const sourceText = compactText(
    [product.name, product.description, ...(product.tags ?? [])].filter(Boolean).join(" ")
  )

  return [
    { label: "Quantidade de Peças", value: extractPieceCount(sourceText) },
    { label: "Cor", value: productColor },
    { label: "Tamanho", value: productSize },
    { label: "Medidas", value: extractDimensions(sourceText) },
    { label: "Material", value: extractMaterial(sourceText) },
    { label: "Gramatura", value: extractGrammage(sourceText) },
    { label: "Fios", value: extractThreadCount(sourceText) },
  ].filter((item): item is ProductCharacteristic => Boolean(item.value))
}

interface ProductPageProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductPage({ product, relatedProducts }: ProductPageProps) {
  const shouldReduceMotion = useReducedMotion()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants?.[0] ?? null
  )
  const [isMounted, setIsMounted] = useState(false)
  const [installmentsOpen, setInstallmentsOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const { addItem, isOpen: isCartOpen } = useCart()
  const inlineButtonRef = useRef<HTMLDivElement>(null)

  // Derive active price, image and images from selected variant or product defaults
  const activePrice = selectedVariant?.price ?? product.price
  const activeCompareAtPrice = selectedVariant?.compareAtPrice ?? product.compareAtPrice
  const hasActiveDiscount = Boolean(activeCompareAtPrice && activeCompareAtPrice > activePrice)
  const activeDiscountPercentage =
    hasActiveDiscount && activeCompareAtPrice
      ? Math.round(((activeCompareAtPrice - activePrice) / activeCompareAtPrice) * 100)
      : 0
  const activeImage = selectedVariant?.image ?? product.image
  const activeImages = selectedVariant?.images ?? product.images ?? [product.image]

  const totalPrice = activePrice * quantity
  const shouldShowFloatingCTA = showFloating && !isCartOpen
  const installmentOptions = useMemo(
    () =>
      cardInstallmentRates.map((option) => {
        const totalWithRate = activePrice * (1 + option.rate / 100)

        return {
          ...option,
          totalWithRate,
          installmentValue: totalWithRate / option.installments,
        }
      }),
    [activePrice]
  )

  useEffect(() => {
    if (!installmentsOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setInstallmentsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [installmentsOpen])

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
  const productCharacteristics = useMemo(
    () => buildProductCharacteristics(product, productSize, productColor),
    [product, productSize, productColor]
  )
  const variantSiblings = useMemo(() => getVariantSiblings(product.slug), [product.slug])
  const sizeSiblings = useMemo(() => getSizeSiblings(product.slug), [product.slug])

  const handleAddToCart = useCallback(() => {

    const variantSuffix = selectedVariant ? ` - ${selectedVariant.label}` : ""
    addItem(
      {
        id: selectedVariant?.id ?? product.id,
        slug: product.slug,
        name: product.name + variantSuffix,
        price: activePrice,
        compareAtPrice: hasActiveDiscount ? activeCompareAtPrice : undefined,
        image: activeImage,
      },
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }, [addItem, product, quantity, selectedVariant, activePrice, activeCompareAtPrice, activeImage, hasActiveDiscount])

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
                <a href="#descricao" className="text-xs text-[#1a1a1a] underline underline-offset-2">Ver descrição do produto</a>
              </div>
            </div>

            <div className="bg-[#f9f9f9] rounded-2xl p-4 md:p-6 mb-8 mx-4 md:mx-0">
              {/* Price section */}
              <div className="mb-6">
                {hasActiveDiscount && activeCompareAtPrice && (
                  <div className="text-sm text-[#737373] line-through mb-1">
                    R$ {activeCompareAtPrice.toFixed(2).replace(".", ",")}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#15803d]">
                    R$ {activePrice.toFixed(2).replace(".", ",")} <span className="text-lg font-bold">no Pix</span>
                  </span>
                  {activeDiscountPercentage > 0 && (
                    <span className="bg-[#00c9a7] text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{activeDiscountPercentage}%
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#1a1a1a] font-medium">
                  ou veja as opções no cartão
                </div>
                <button
                  type="button"
                  onClick={() => setInstallmentsOpen(true)}
                  className="mt-1 block text-left text-xs font-semibold text-[#1a1a1a] underline underline-offset-2 transition-colors hover:text-[#d4a017]"
                >
                  Ver parcelamento
                </button>
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
                    {sizeSiblings.map((sib) => {
                      if (sib.isCurrent) {
                        return (
                          <button
                            key={sib.size}
                            type="button"
                            aria-current="true"
                            className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-[#1a1a1a] text-white"
                          >
                            {sib.size}
                          </button>
                        )
                      }
                      if (sib.slug) {
                        return (
                          <Link
                            key={sib.size}
                            href={`/product/${sib.slug}`}
                            className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-white border border-[#e5e5e5] text-[#1a1a1a] hover:border-[#1a1a1a]"
                          >
                            {sib.size}
                          </Link>
                        )
                      }
                      return (
                        <button
                          key={sib.size}
                          disabled
                          className="px-4 py-2 text-sm font-medium rounded-md bg-white border border-[#e5e5e5] text-[#b3b3b3] cursor-not-allowed opacity-60"
                          title="Não disponível para este produto"
                        >
                          {sib.size}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : productColor && variantSiblings.length === 0 ? (
                <div className="mb-6">
                  <span className="text-sm text-[#1a1a1a] font-medium block mb-2">Cor:</span>
                  <div className="inline-flex min-h-10 items-center rounded-md border border-[#e5e5e5] bg-white px-4 text-sm font-medium text-[#737373]">
                    {productColor}
                  </div>
                </div>
              ) : null}

              {variantSiblings.length > 0 && (
                <div className="mb-6">
                  <span className="text-sm text-[#1a1a1a] font-medium block mb-2">Cor/Estampa:</span>
                  <div className="flex flex-wrap gap-2">
                    {variantSiblings.map((sibling) =>
                      sibling.isCurrent ? (
                        <button
                          key={sibling.slug}
                          type="button"
                          aria-current="true"
                          className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-[#1a1a1a] text-white"
                        >
                          {sibling.label}
                        </button>
                      ) : (
                        <Link
                          key={sibling.slug}
                          href={`/product/${sibling.slug}`}
                          className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-white border border-[#e5e5e5] text-[#1a1a1a] hover:border-[#1a1a1a]"
                        >
                          {sibling.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div id="comprar-agora" ref={inlineButtonRef} className="flex gap-3 mb-6">
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
                    : "bg-[#15803d] text-[#ffffff] hover:bg-[#166534]"
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
                  <span className="text-[#737373]">Frete <span className="font-semibold text-[#ef4444]">rápido e seguro</span> para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a855f7]"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                  <span className="text-[#737373]">Ganhe <span className="font-semibold text-[#a855f7]">5% em Cashback</span> nesta compra</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block px-4 md:px-0">
              {productCharacteristics.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Características</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {productCharacteristics.map((item) => (
                      <div key={item.label} className="bg-[#fff9e6] p-3 rounded-lg flex flex-col items-center text-center">
                        <span className="text-xs text-[#1a1a1a] font-medium mb-1">{item.label}</span>
                        <span className="text-sm font-medium text-[#737373]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div id="descricao" className="border-t border-[#e5e5e5] pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">Descrição</h3>
                  <span className="text-2xl font-light text-[#737373]">−</span>
                </div>
                <div className="text-sm text-[#737373] leading-relaxed">
                  <p>{product.description}</p>
                </div>
              </div>
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

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {installmentsOpen && (
              <motion.div
                className="fixed inset-0 z-[10000] flex items-end justify-center bg-[#1a1a1a]/55 px-3 pb-3 pt-12 backdrop-blur-[2px] md:items-center md:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="installments-title"
                onClick={() => setInstallmentsOpen(false)}
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: [0.25, 1, 0.5, 1] }}
              >
                <motion.div
                  className="w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#ffffff] shadow-[0_24px_80px_rgba(0,0,0,0.28)] will-change-transform"
                  onClick={(event) => event.stopPropagation()}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.985 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start justify-between border-b border-[#eee7dc] bg-[#fffaf0] px-5 py-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4a017]">
                        Cartão de crédito
                      </p>
                      <h2 id="installments-title" className="mt-1 text-lg font-extrabold text-[#1a1a1a]">
                        Parcelamento
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setInstallmentsOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#737373] shadow-sm transition-colors hover:text-[#1a1a1a] active:scale-95"
                      aria-label="Fechar parcelamento"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="max-h-[72vh] overflow-y-auto px-5 py-5">
                    <div className="mb-4 rounded-xl border border-[#eee7dc] bg-[#fdfbf7] px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-[#737373]">Valor base</span>
                        <strong className="text-sm font-extrabold text-[#1a1a1a]">
                          {formatCurrency(activePrice)}
                        </strong>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {installmentOptions.map((option, index) => (
                        <motion.div
                          key={option.installments}
                          className="rounded-xl border border-[#eee7dc] bg-[#ffffff] p-3 shadow-[0_6px_18px_rgba(26,26,26,0.05)]"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.22,
                            delay: shouldReduceMotion ? 0 : 0.04 + index * 0.015,
                            ease: [0.25, 1, 0.5, 1],
                          }}
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <strong className="text-sm font-extrabold text-[#1a1a1a]">
                              {option.installments}x
                            </strong>
                            <span className="rounded-full bg-[#fff3d2] px-2 py-0.5 text-[10px] font-bold text-[#9b7410]">
                              {option.rate.toFixed(2).replace(".", ",")}%
                            </span>
                          </div>
                          <p className="mt-2 text-sm font-bold text-[#d4a017]">
                            {formatCurrency(option.installmentValue)}
                          </p>
                          <p className="mt-1 text-[11px] font-medium text-[#737373]">
                            Total {formatCurrency(option.totalWithRate)}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <p className="mt-4 text-xs leading-5 text-[#737373]">
                      Os valores consideram as taxas do cartão informadas para cada quantidade de parcelas.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Floating overlay via Portal */}
      {isMounted &&
        createPortal(
          <div
            className={`fixed bottom-5 left-4 right-4 z-[9999] transition-all duration-300 ease-in-out md:hidden ${shouldShowFloatingCTA
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
              }`}
          >
            <button
              onClick={handleAddToCart}
              className={`w-full text-sm font-bold py-3.5 rounded-full uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(0,0,0,0.3)] ${added
                ? "bg-[#1a1a1a] text-[#ffffff]"
                : "bg-[#15803d] text-[#ffffff] hover:bg-[#166534]"
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
