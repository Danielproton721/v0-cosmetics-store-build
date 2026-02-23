"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface ReviewsSectionProps {
  rating: number
  totalReviews: number
}

export function ReviewsSection({ rating, totalReviews }: ReviewsSectionProps) {
  const [showForm, setShowForm] = useState(false)

  const starDistribution = [
    { stars: 5, count: 0, percentage: 0 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  return (
    <section className="py-6 bg-[#ffffff] border-t border-[#f5f5f5]">
      <div className="px-4">
        {/* Average rating */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl font-bold text-[#1a1a1a]">
            {rating > 0 ? rating.toFixed(1) : "0.0"}
          </span>
          <div className="flex items-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(rating)
                    ? "fill-[#d4a017] text-[#d4a017]"
                    : "text-[#e5e5e5] fill-[#e5e5e5]"
                }
              />
            ))}
          </div>
          <span className="text-xs text-[#737373] mt-1">
            {totalReviews} Avaliacoes
          </span>
        </div>

        {/* Star distribution bars */}
        <div className="flex flex-col gap-2 mb-6">
          {starDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2">
              <span className="text-xs text-[#737373] w-4 text-right">{item.stars}</span>
              <Star size={12} className="fill-[#d4a017] text-[#d4a017] shrink-0" />
              <div className="flex-1 h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#d4a017] rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-xs text-[#737373] w-8 text-right">{item.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Write review button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full border border-[#e5e5e5] rounded-lg py-3 text-sm font-medium text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors"
        >
          Escreva uma avaliacao
        </button>

        {/* Review form */}
        {showForm && (
          <div className="mt-4 border border-[#e5e5e5] rounded-lg p-4">
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} aria-label={`${i + 1} estrelas`}>
                  <Star
                    size={24}
                    className="text-[#e5e5e5] hover:fill-[#d4a017] hover:text-[#d4a017] transition-colors cursor-pointer"
                  />
                </button>
              ))}
            </div>
            <textarea
              placeholder="Conte sobre sua experiencia com o produto..."
              className="w-full border border-[#e5e5e5] rounded-lg p-3 text-sm text-[#1a1a1a] placeholder:text-[#737373]/50 outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/30 resize-none h-24 bg-[#ffffff]"
            />
            <button className="mt-3 w-full bg-[#1a1a1a] text-[#ffffff] text-sm font-semibold py-2.5 rounded-lg hover:bg-[#1a1a1a]/85 transition-all">
              Enviar avaliacao
            </button>
          </div>
        )}

        {/* Empty reviews state */}
        {totalReviews === 0 && !showForm && (
          <p className="text-center text-xs text-[#737373] mt-4">
            Sem avaliacoes ainda. Seja o primeiro a avaliar!
          </p>
        )}
      </div>
    </section>
  )
}
