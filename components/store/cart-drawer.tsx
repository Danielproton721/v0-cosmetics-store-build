"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, closeCart } = useCart()

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-[#1a1a1a]/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#ffffff] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#1a1a1a]" />
            <h2 className="text-base font-bold text-[#1a1a1a]">
              Seu Carrinho
            </h2>
            {totalItems > 0 && (
              <span className="bg-[#d4a017] text-[#1a1a1a] text-[10px] font-bold px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? "item" : "itens"}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} className="text-[#1a1a1a]" />
          </button>
        </div>

        {/* Items list */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <ShoppingBag size={32} className="text-[#737373]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Seu carrinho esta vazio</p>
              <p className="text-xs text-[#737373] mt-1">Adicione produtos para continuar</p>
            </div>
            <Link
              href="/"
              onClick={closeCart}
              className="bg-[#1a1a1a] text-[#ffffff] text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#1a1a1a]/85 transition-colors uppercase tracking-wider"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-[#f0f0f0]">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 px-4 py-4">
                  {/* Product image */}
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative w-20 h-20 rounded-lg bg-[#f5f5f5] overflow-hidden shrink-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </Link>

                  {/* Product details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="text-xs font-medium text-[#1a1a1a] line-clamp-2 leading-tight hover:text-[#d4a017] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm font-bold text-[#1a1a1a] mt-1">
                        R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-[#e5e5e5] rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#f5f5f5] transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={12} className="text-[#737373]" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold text-[#1a1a1a]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#f5f5f5] transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={12} className="text-[#737373]" />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 rounded-full hover:bg-red-50 transition-colors group"
                        aria-label={`Remover ${item.name}`}
                      >
                        <Trash2 size={14} className="text-[#737373] group-hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer with total and checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#e5e5e5] px-4 py-4 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#737373]">Subtotal</span>
              <span className="text-base font-bold text-[#1a1a1a]">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <p className="text-[10px] text-[#737373] text-center">
              Frete calculado no checkout
            </p>

            {/* Checkout button */}
            <button className="w-full bg-[#22c55e] text-[#ffffff] text-sm font-bold py-3.5 rounded-full uppercase tracking-wider hover:bg-[#16a34a] active:scale-[0.98] transition-all">
              Finalizar Compra
            </button>

            {/* Continue shopping */}
            <button
              onClick={closeCart}
              className="w-full text-xs text-[#737373] font-medium py-2 hover:text-[#1a1a1a] transition-colors underline underline-offset-2"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
