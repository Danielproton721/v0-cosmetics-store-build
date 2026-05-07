"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { products } from "@/lib/products"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
}

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
}

export function Hero() {
  // Pegar os primeiros 4 produtos que tenham imagem
  const heroProducts = products.filter(p => p.image).slice(0, 4)
  const [img1, img2, img3, img4] = heroProducts.map(p => p.image)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#10b981] pt-4 pb-0">
      {/* Decorative leaves */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="30" cy="50" rx="25" ry="40" transform="rotate(-30 30 50)" />
        </svg>
      </div>
      <div className="absolute top-4 right-0 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="70" cy="50" rx="20" ry="35" transform="rotate(20 70 50)" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-4 w-16 h-16 opacity-10">
        <svg viewBox="0 0 100 100" fill="white">
          <ellipse cx="50" cy="50" rx="15" ry="30" transform="rotate(-45 50 50)" />
        </svg>
      </div>

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
        {img1 && (
          <motion.div variants={imageVariants} className="relative w-24 h-32 md:w-32 md:h-40">
            <img
              src={img1}
              alt="Produto 1"
              className="absolute inset-0 w-full h-full object-cover rounded-md drop-shadow-lg"
            />
          </motion.div>
        )}
        {img2 && (
          <motion.div variants={imageVariants} className="relative w-28 h-36 md:w-36 md:h-44 -mb-1">
            <img
              src={img2}
              alt="Produto 2"
              className="absolute inset-0 w-full h-full object-cover rounded-md drop-shadow-lg"
            />
          </motion.div>
        )}
        {img3 && (
          <motion.div variants={imageVariants} className="relative w-24 h-32 md:w-32 md:h-40">
            <img
              src={img3}
              alt="Produto 3"
              className="absolute inset-0 w-full h-full object-cover rounded-md drop-shadow-lg"
            />
          </motion.div>
        )}
        {img4 && (
          <motion.div variants={imageVariants} className="relative w-20 h-28 md:w-28 md:h-36 hidden sm:block">
            <img
              src={img4}
              alt="Produto 4"
              className="absolute inset-0 w-full h-full object-cover rounded-md drop-shadow-lg"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

