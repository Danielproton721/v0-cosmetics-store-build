"use client"

import Image from "next/image"
import Link from "next/link"
import type { Collection } from "@/lib/products"

interface CollectionGridProps {
  collections: Collection[]
}

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <section className="px-4 py-6">
      <div className="grid grid-cols-2 gap-3">
        {collections.map((collection, index) => {
          // First item spans full width
          const isFirst = index === 0
          return (
            <Link
              key={collection.slug}
              href={`/colecoes/${collection.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-[#f5f5f5] shadow-sm hover:shadow-md transition-all duration-200 ${
                isFirst ? "col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative w-full overflow-hidden bg-[#e5e5e5] ${
                  isFirst ? "h-44" : "h-36"
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes={isFirst ? "100vw" : "50vw"}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />

                {/* Product count badge */}
                <span className="absolute top-2.5 right-2.5 bg-[#d4a017] text-[#ffffff] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {collection.productCount} {collection.productCount === 1 ? "produto" : "produtos"}
                </span>

                {/* Name over the image */}
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                  <h3
                    className={`font-bold text-[#ffffff] group-hover:text-[#d4a017] transition-colors text-balance leading-tight ${
                      isFirst ? "text-base" : "text-sm"
                    }`}
                  >
                    {collection.name}
                  </h3>
                  {isFirst && (
                    <p className="text-[11px] text-[#ffffff]/80 leading-relaxed mt-1 line-clamp-2">
                      {collection.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
