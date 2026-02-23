"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="relative bg-[#ffffff]">
      {/* Main image */}
      <div className="relative aspect-square bg-[#ffffff] flex items-center justify-center p-6">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={name}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Expand button */}
        <button
          className="absolute bottom-4 left-4 p-2 bg-[#ffffff] rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label="Ampliar imagem"
        >
          <Expand size={16} className="text-[#1a1a1a]" />
        </button>
      </div>

      {/* Image counter */}
      <div className="flex items-center justify-center gap-1 py-3 text-xs text-[#737373]">
        <span>{currentIndex + 1}</span>
        <span>/</span>
        <span>{images.length}</span>
      </div>

      {/* Thumbnail dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-[#1a1a1a]" : "bg-[#e5e5e5]"
              }`}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
