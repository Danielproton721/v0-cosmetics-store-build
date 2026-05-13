/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  // Otimizações de performance para dev
  swcMinify: true,
  // Turbopack: otimizações de watch e cache
  experimental: {
    // Aumenta o cache do SWC para reduzir recompilações
    swcTraceProfiling: false,
  },
  // Desativa verificações desnecessárias em dev para acelerar
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
