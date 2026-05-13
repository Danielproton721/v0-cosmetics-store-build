"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { products } from "@/lib/products"

const smoothEase = [0.16, 1, 0.3, 1] as const

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: smoothEase }
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase }
  },
}

const HERO_IMAGE_COUNT = 3
const HERO_BACKGROUND_IMAGE = "/images/hero-bedroom-bg.png"

const heroImagePool = Array.from(
  new Set(
    products
      .flatMap((product) => [product.image, ...(product.images ?? [])])
      .filter((image): image is string => Boolean(image))
  )
)

const fallbackHeroImages = heroImagePool.slice(0, HERO_IMAGE_COUNT)

function getRandomHeroImages() {
  const shuffledImages = [...heroImagePool]

  for (let index = shuffledImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentImage = shuffledImages[index]
    shuffledImages[index] = shuffledImages[randomIndex]
    shuffledImages[randomIndex] = currentImage
  }

  return shuffledImages.slice(0, HERO_IMAGE_COUNT)
}

const heroImageClasses = [
  "relative w-24 h-32 md:w-32 md:h-40",
  "relative w-28 h-36 md:w-36 md:h-44 -mb-1",
  "relative w-24 h-32 md:w-32 md:h-40",
]

export function Hero() {
  const [heroImages, setHeroImages] = useState(fallbackHeroImages)

  useEffect(() => {
    setHeroImages(getRandomHeroImages())
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#8c7a68] pt-4 pb-0">
      <img
        src={HERO_BACKGROUND_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/25 via-transparent to-[#1a1a1a]/10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 pt-2 pb-4"
      >
        <motion.p variants={textVariants} className="text-[#ffffff] text-xs font-medium uppercase tracking-widest mb-1">
          Renove sua
        </motion.p>
        <motion.h2 variants={textVariants} className="text-5xl md:text-6xl font-extrabold text-[#ffffff] leading-none tracking-tight">
          {"Casa"}
        </motion.h2>
        <motion.p variants={textVariants} className="text-[#ffffff]/80 text-xs mt-2 tracking-wide">
          com a <span className="font-semibold text-[#ffffff]">ConfortBem</span>
        </motion.p>

        {/* Discount badge */}
        <motion.div variants={textVariants} className="inline-flex items-center mt-4 bg-[#d4a017] rounded-xl px-4 py-2 shadow-lg">
          <div className="text-left mr-2">
            <p className="text-[10px] text-[#1a1a1a]/70 leading-tight uppercase">
              Todos os<br />produtos<br />com até
            </p>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-[#1a1a1a]">10</span>
            <span className="text-lg font-bold text-[#1a1a1a] ml-0.5">%</span>
          </div>
          <span className="text-xs font-bold text-[#1a1a1a] ml-1 uppercase">OFF</span>
        </motion.div>
      </motion.div>

      {/* Product images at bottom */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-end justify-center gap-2 px-4 mt-2"
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
            variants={imageVariants}
            className={heroImageClasses[index] ?? heroImageClasses[0]}
          >
            <img
              src={image}
              alt={`Produto em destaque ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-md drop-shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

