"use client"

import { useEffect, useCallback, useState } from "react"
import Link from "next/link"
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

function formatCurrency(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`
}

function getCartItemDiscount(item: {
  price: number
  compareAtPrice?: number
  quantity: number
}) {
  if (!item.compareAtPrice || item.compareAtPrice <= item.price) {
    return null
  }

  const originalTotal = item.compareAtPrice * item.quantity
  const currentTotal = item.price * item.quantity
  const savings = originalTotal - currentTotal
  const percentage = Math.round(((item.compareAtPrice - item.price) / item.compareAtPrice) * 100)

  return { originalTotal, currentTotal, savings, percentage }
}

export function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, totalSavings, removeItem, updateQuantity, closeCart } = useCart()
  const [isStartingCheckout, setIsStartingCheckout] = useState(false)
  const [checkoutError, setCheckoutError] = useState("")
  const handleCloseCart = useCallback(() => {
    closeCart()
  }, [closeCart])

  const handleStartCheckout = useCallback(async () => {
    if (isStartingCheckout) return

    setIsStartingCheckout(true)
    setCheckoutError("")

    try {
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            slug: item.slug,
            quantity: item.quantity,
          })),
        }),
      })
      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.error || "Nao foi possivel iniciar o checkout.")
      }

      handleCloseCart()
      window.location.assign("/checkout")
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Nao foi possivel iniciar o checkout.")
    } finally {
      setIsStartingCheckout(false)
    }
  }, [handleCloseCart, isStartingCheckout, items])

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
        className={`fixed inset-0 z-[10000] bg-[#1a1a1a]/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[10010] w-full max-w-sm bg-[#ffffff] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
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
              <span className="bg-[#ff5252] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? "item" : "itens"}
              </span>
            )}
          </div>
          <button
            onClick={handleCloseCart}
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
              <p className="text-sm font-semibold text-[#1a1a1a]">Seu carrinho está vazio</p>
              <p className="text-xs text-[#737373] mt-1">Adicione produtos para continuar</p>
            </div>
            <Link
              href="/"
              onClick={handleCloseCart}
              className="bg-gradient-to-r from-[#ff5252] to-[#c91e5a] text-[#ffffff] text-xs font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all uppercase tracking-wider"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-[#f0f0f0]">
              {items.map((item) => {
                const discount = getCartItemDiscount(item)

                return (
                  <li key={item.id} className="flex gap-3 px-4 py-4">
                    {/* Product image */}
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={handleCloseCart}
                      className="relative w-20 h-20 rounded-lg bg-[#f5f5f5] overflow-hidden shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </Link>

                    {/* Product details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={handleCloseCart}
                          className="text-xs font-medium text-[#1a1a1a] line-clamp-2 leading-tight hover:text-[#ff5252] transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          {discount && (
                            <span className="text-[11px] font-semibold text-[#9ca3af] line-through">
                              {formatCurrency(discount.originalTotal)}
                            </span>
                          )}
                          <span className="text-sm font-bold text-[#1a1a1a]">
                            {formatCurrency(discount?.currentTotal ?? item.price * item.quantity)}
                          </span>
                          {discount && (
                            <span className="rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[10px] font-extrabold text-[#15803d]">
                              -{discount.percentage}%
                            </span>
                          )}
                        </div>
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
                )
              })}
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
                {formatCurrency(totalPrice)}
              </span>
            </div>

            {totalSavings > 0 && (
              <div className="flex items-center justify-between rounded-lg bg-[#f0fdf4] px-3 py-2">
                <span className="text-xs font-bold text-[#15803d]">Desconto aplicado</span>
                <span className="text-xs font-extrabold text-[#15803d]">
                  -{formatCurrency(totalSavings)}
                </span>
              </div>
            )}

            <p className="text-[10px] text-[#737373] text-center">
              Frete calculado no checkout
            </p>

            {/* Checkout button */}
            <button
              type="button"
              onClick={handleStartCheckout}
              disabled={isStartingCheckout}
              className="w-full bg-gradient-to-r from-[#ff5252] to-[#c91e5a] disabled:opacity-60 text-[#ffffff] text-sm font-bold py-3.5 rounded-full uppercase tracking-wider shadow-lg shadow-[#ff5252]/30 hover:brightness-110 active:scale-[0.98] transition-all text-center block"
            >
              {isStartingCheckout ? "Iniciando..." : "Finalizar Compra"}
            </button>
            {checkoutError && (
              <p className="text-[11px] text-red-600 text-center font-semibold">
                {checkoutError}
              </p>
            )}

            {/* Continue shopping */}
            <button
              onClick={handleCloseCart}
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
