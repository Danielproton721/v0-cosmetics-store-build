"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { getProductBySlug } from "@/lib/products"

export interface CartItem {
  id: number
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  totalCompareAtPrice: number
  totalSavings: number
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = "gota-dourada-cart"

function getValidCompareAtPrice(item: Pick<CartItem, "price" | "compareAtPrice">) {
  return item.compareAtPrice && item.compareAtPrice > item.price
    ? item.compareAtPrice
    : undefined
}

function enrichCartItem<T extends Pick<CartItem, "slug" | "price" | "compareAtPrice">>(item: T): T {
  if (getValidCompareAtPrice(item) || !item.slug) return item

  const product = getProductBySlug(item.slug)
  const compareAtPrice = product?.compareAtPrice

  return compareAtPrice && compareAtPrice > item.price
    ? { ...item, compareAtPrice }
    : item
}

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed.map(enrichCartItem) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // silent fail
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setItems(loadCart())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      saveCart(items)
    }
  }, [items, mounted])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalCompareAtPrice = items.reduce(
    (sum, item) => sum + (getValidCompareAtPrice(item) ?? item.price) * item.quantity,
    0
  )
  const totalSavings = Math.max(0, totalCompareAtPrice - totalPrice)

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const normalizedItem = enrichCartItem(newItem)
      const existing = prev.find((item) => item.id === newItem.id)
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, ...normalizedItem, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...normalizedItem, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((item) => item.id !== id))
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const toggleCart = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalItems,
        totalPrice,
        totalCompareAtPrice,
        totalSavings,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
