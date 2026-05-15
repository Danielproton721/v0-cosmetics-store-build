"use client"

import { motion, type Variants } from "framer-motion"

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

const HERO_BACKGROUND_IMAGE = "/images/hero-bedroom-bg.png"

const fixedHeroImages = [
  "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/cortina-semi-blackout-590x260m-para-varao-4m-gaze-de-linho-grecia-prata-6928aa5faa224-large.jpg?v=1778626318",
  "https://cdn.shopify.com/s/files/1/1000/7153/9053/files/kit-cama-posta-queen-isabelle-8-pecas-palharosemarfim-699719c894712-large.jpg?v=1778538670",
  "https://cdn.shopify.com/s/files/1/0818/1540/4758/files/jogo-de-lencol-solteiro-2-pecas-valencia-percal-300-fios-hotelaria-grey-68a4b3a4396ba-large.png?v=1777595636",
]

const heroImageClasses = [
  "relative w-[116px] h-[148px] md:w-[148px] md:h-[180px]",
  "relative w-[132px] h-[164px] md:w-[164px] md:h-[196px] -mb-1",
  "relative w-[116px] h-[148px] md:w-[148px] md:h-[180px]",
]

export function Hero() {
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

      </motion.div>

      {/* Product images at bottom */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative left-1/2 z-10 mt-2 flex w-max -translate-x-1/2 items-center justify-center gap-2"
      >
        {fixedHeroImages.map((image, index) => (
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

      {/* Discount badge */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex justify-center px-4 pb-4 pt-4"
      >
        <motion.div variants={textVariants} className="inline-flex min-w-[250px] items-center justify-center rounded-xl bg-[#d4a017] px-6 py-2.5 shadow-lg md:min-w-[300px]">
          <div className="mr-3 text-left">
            <p className="text-[10px] font-extrabold leading-tight tracking-wide text-[#1a1a1a]/75 uppercase">
              Oferta<br />especial<br />at&eacute;
            </p>
          </div>
          <div className="flex items-baseline">
            <span className="text-4xl font-extrabold leading-none text-[#1a1a1a]">10</span>
            <span className="ml-1 text-xl font-extrabold text-[#1a1a1a]">%</span>
          </div>
          <span className="ml-2 text-sm font-extrabold tracking-wide text-[#1a1a1a] uppercase">OFF</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

