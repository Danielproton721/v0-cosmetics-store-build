"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  slug?: string
  isTest?: boolean
}

export function ProductCard({ name, price, image, rating, reviews, slug, isTest }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const productHref = slug ? `/product/${slug}` : "#"

  const handleAddToCart = useCallback(() => {
    const itemId = slug
      ? slug.split("").reduce((acc, ch) => ((acc << 5) - acc + ch.charCodeAt(0)) | 0, 0)
      : Math.floor(Math.random() * 100000)
    addItem({
      id: Math.abs(itemId),
      slug: slug || "",
      name,
      price,
      image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }, [addItem, slug, name, price, image])

  return (
    <div className="group bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Image area */}
      <div className="relative aspect-square bg-[#f5f5f5] p-3">
        {isTest && (
          <span className="absolute top-2 left-2 z-10 bg-[#ef4444] text-[#ffffff] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
            Teste
          </span>
        )}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full hover:bg-[#1a1a1a]/5 transition-colors"
          aria-label={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-[#737373] hover:text-[#1a1a1a]"
            }
          />
        </button>
        <Link href={productHref} prefetch={true} className="relative w-full h-full block">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>
      </div>

      {/* Info area */}
      <div className="p-3">
        <Link href={productHref} prefetch={true}>
          <h3 className="text-xs font-medium text-[#1a1a1a] line-clamp-2 leading-tight min-h-[2rem] hover:text-[#d4a017] transition-colors">
            {name}
          </h3>
        </Link>

        {/* Star rating */}
        <div className="flex items-center gap-0.5 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(rating)
                  ? "fill-[#d4a017] text-[#d4a017]"
                  : "text-[#e5e5e5] fill-[#e5e5e5]"
              }
            />
          ))}
          {reviews > 0 && (
            <span className="text-[10px] text-[#737373] ml-1">{reviews}</span>
          )}
        </div>

        {/* Price */}
        <p className="text-sm font-bold text-[#1a1a1a] mt-2">
          R$ {price.toFixed(2).replace(".", ",")} <span className="text-[10px] font-normal text-[#737373]">BRL</span>
        </p>

        {/* Add button */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-2.5 text-xs font-semibold py-2.5 rounded-full active:scale-[0.98] transition-all duration-150 uppercase tracking-wider flex items-center justify-center gap-1.5 ${
            added
              ? "bg-[#22c55e] text-[#ffffff]"
              : "bg-[#1a1a1a] text-[#ffffff] hover:bg-[#1a1a1a]/85"
          }`}
        >
          {added ? (
            <>
              <Check size={14} />
              Adicionado
            </>
          ) : (
            "Adicionar"
          )}
        </button>
      </div>
    </div>
  )
}
