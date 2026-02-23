"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Collection } from "@/lib/products"

interface CollectionGridProps {
  collections: Collection[]
}

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <section className="px-4 py-6">
      <div className="flex flex-col gap-3">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/colecoes/${collection.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-[#f5f5f5] shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-4 p-4">
              {/* Collection image */}
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#e5e5e5]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="96px"
                />
              </div>

              {/* Collection info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#d4a017] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-[11px] text-[#737373] leading-relaxed mt-1 line-clamp-2">
                  {collection.description}
                </p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-[#d4a017] uppercase tracking-wider">
                  {collection.productCount} {collection.productCount === 1 ? "produto" : "produtos"}
                </span>
              </div>

              {/* Chevron */}
              <ChevronRight
                size={18}
                className="text-[#737373] group-hover:text-[#d4a017] shrink-0 transition-colors"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
