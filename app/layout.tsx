import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { MenuProvider } from '@/lib/menu-context'
import { CartDrawer } from '@/components/store/cart-drawer'
import { CookieConsent } from '@/components/store/cookie-consent'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fio Nobre | O Conforto que Abraça Sua Casa',
  description: 'Especialistas em enxovais para sua casa. Conforto, estilo e qualidade para o seu dia a dia.',
  generator: 'v0.app',
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4a017',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <CartProvider>
          <MenuProvider>
            {children}
            <CartDrawer />
            <CookieConsent />
          </MenuProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
