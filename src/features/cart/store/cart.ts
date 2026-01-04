'use client'

import { CartProduct, WooProduct } from '@/features/product/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartState = {
  items: CartProduct[]

  addItem: (product: WooProduct, quantity?: number) => void
  removeItem: (productId: number) => void
  updateQty: (productId: number, quantity: number) => void
  clear: () => void
}

export const useCartCount = () =>
  useCartStore((state) => state.items.reduce((sum, i) => sum + i.quantity, 0))

export const useCartTotal = () =>
  useCartStore((state) =>
    state.items.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0)
  )

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === product.id && i.variationId === undefined
          )

          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? { ...i, quantity: i.quantity + quantity } : i
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                quantity,
              },
            ],
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        })),

      updateQty: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === productId ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // localStorage ключ
    }
  )
)
