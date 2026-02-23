"use client"

import { Star, Zap, Eye } from "lucide-react"

interface ProductInfoProps {
  name: string
  price: number
  compareAtPrice?: number
  rating: number
  reviews: number
  recentSales: number
}

export function ProductInfo({
  name,
  price,
  compareAtPrice,
  rating,
  reviews,
  recentSales,
}: ProductInfoProps) {
  const discount = compareAtPrice
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0

  return (
    <div className="px-4 py-4 bg-[#ffffff]">
      {/* Product name */}
      <h1 className="text-lg font-semibold text-[#1a1a1a] leading-tight text-balance">
        {name}
      </h1>

      {/* Recent sales indicator */}
      {recentSales > 0 && (
        <div className="flex items-center gap-1.5 mt-2">
          <Zap size={14} className="text-[#d4a017] fill-[#d4a017]" />
          <span className="text-xs text-[#d4a017] font-medium">
            {recentSales} vendidos nas ultimas 21 horas
          </span>
        </div>
      )}

      {/* Star rating */}
      <div className="flex items-center gap-1 mt-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < Math.floor(rating)
                ? "fill-[#d4a017] text-[#d4a017]"
                : "text-[#e5e5e5] fill-[#e5e5e5]"
            }
          />
        ))}
        {reviews > 0 && (
          <span className="text-xs text-[#737373] ml-1">({reviews})</span>
        )}
      </div>

      {/* Price */}
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-[#1a1a1a]">
          R$ {price.toFixed(2).replace(".", ",")}
        </span>
        <span className="text-sm text-[#737373]">BRL</span>
      </div>

      {compareAtPrice && (
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-[#737373] line-through">
            R$ {compareAtPrice.toFixed(2).replace(".", ",")}
          </span>
          {discount > 0 && (
            <span className="text-xs font-semibold text-[#ffffff] bg-[#d4a017] px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
      )}

      {/* Viewing count */}
      <div className="flex items-center gap-1.5 mt-3 text-xs text-[#737373]">
        <Eye size={14} />
        <span>18 clientes estao visualizando este produto</span>
      </div>
    </div>
  )
}
