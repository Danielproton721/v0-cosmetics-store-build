"use client"

import { useState } from "react"
import { Menu, Search, ShoppingBag, User, X, Heart, Home, Grid3X3, Tag } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#d4a017] shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

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
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              className="p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity relative"
              aria-label="Carrinho"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#1a1a1a] text-[#ffffff] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
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
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-0 left-0 bottom-0 w-72 bg-[#ffffff] shadow-2xl pt-20 px-6 animate-in slide-in-from-left duration-200">
            <div className="flex flex-col gap-1">
              {[
                { icon: Home, label: "Início" },
                { icon: Grid3X3, label: "Categorias" },
                { icon: Tag, label: "Ofertas" },
                { icon: Heart, label: "Favoritos" },
                { icon: User, label: "Minha Conta" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors text-sm font-medium"
                >
                  <item.icon size={18} className="text-[#d4a017]" />
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
