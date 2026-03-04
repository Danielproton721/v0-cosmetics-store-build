"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, Search, ShoppingBag, Home, X, Grid3X3, Tag, ChevronDown } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const pathname = usePathname()
  const menuHistoryRef = useRef(false)
  const searchHistoryRef = useRef(false)

  const isHomePage = pathname === "/"

  // Hardware back button support for menu overlay
  useEffect(() => {
    if (!menuOpen) return
    window.history.pushState({ menuOpen: true }, "")
    menuHistoryRef.current = true
    const handlePop = () => {
      menuHistoryRef.current = false
      setMenuOpen(false)
    }
    window.addEventListener("popstate", handlePop)
    return () => window.removeEventListener("popstate", handlePop)
  }, [menuOpen])

  // Hardware back button support for search overlay
  useEffect(() => {
    if (!searchOpen) return
    window.history.pushState({ searchOpen: true }, "")
    searchHistoryRef.current = true
    const handlePop = () => {
      searchHistoryRef.current = false
      setSearchOpen(false)
    }
    window.addEventListener("popstate", handlePop)
    return () => window.removeEventListener("popstate", handlePop)
  }, [searchOpen])

  // Close menu manually (pops history to keep stack clean)
  const closeMenu = useCallback(() => {
    if (menuHistoryRef.current) {
      menuHistoryRef.current = false
      window.history.back()
    } else {
      setMenuOpen(false)
    }
  }, [])

  // Close search manually
  const closeSearch = useCallback(() => {
    if (searchHistoryRef.current) {
      searchHistoryRef.current = false
      window.history.back()
    } else {
      setSearchOpen(false)
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#d4a017] shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {isHomePage ? (
            <button
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          ) : (
            <Link
              href="/"
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
              aria-label="Inicio"
            >
              <Home size={22} />
            </Link>
          )}

          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold tracking-wide text-[#1a1a1a]">
              Gota Dourada
            </h1>
            <p className="text-[10px] text-[#1a1a1a]/70 -mt-0.5 tracking-widest uppercase">
              Cosméticos
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity relative"
              aria-label="Carrinho"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#1a1a1a] text-[#ffffff] text-[10px] font-bold min-w-[16px] h-4 px-0.5 rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="px-4 pb-3">
            <div className="flex items-center bg-[#1a1a1a]/10 rounded-full px-4 py-2">
              <Search size={16} className="text-[#1a1a1a]/60 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="bg-transparent w-full text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/50 outline-none"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile slide menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-[#1a1a1a]/40"
            onClick={closeMenu}
          />
          <nav className="absolute top-0 left-0 bottom-0 w-72 bg-[#ffffff] shadow-2xl pt-20 px-5 animate-in slide-in-from-left duration-200 overflow-y-auto">
            <div className="flex flex-col gap-0.5">
              {/* Inicio */}
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors text-sm font-medium"
              >
                <Home size={18} className="text-[#d4a017]" />
                Inicio
              </Link>

              {/* Colecoes - mega menu */}
              <div>
                <button
                  onClick={() => setCollectionsOpen(!collectionsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors text-sm font-medium"
                >
                  <span className="flex items-center gap-3">
                    <Grid3X3 size={18} className="text-[#d4a017]" />
                    Colecoes
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#737373] transition-transform duration-200 ${
                      collectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Sub-items */}
                <div
                  className={`overflow-hidden transition-all duration-250 ease-in-out ${
                    collectionsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 pl-4 border-l-2 border-[#d4a017]/20 flex flex-col gap-0.5 py-1">
                    <Link
                      href="/colecoes"
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors text-[13px] font-medium"
                    >
                      <Grid3X3 size={15} className="text-[#d4a017]" />
                      Ver Todas
                    </Link>
                    {[
                      { label: "Loreal Paris", href: "/colecoes/loreal-paris" },
                      { label: "Pantene", href: "/colecoes/pantene" },
                      { label: "TRESemme", href: "/colecoes/tresemme" },
                      { label: "Kerastase", href: "/colecoes/kerastase" },
                    ].map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors text-[13px] font-medium"
                      >
                        <Tag size={15} className="text-[#d4a017]" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
