'use server'

import { wooFetch } from '@/shared/utils/wooFetch'
import { WooProduct } from '../types/types'

export async function fetchProducts(): Promise<WooProduct[]> {
  try {
    const products = await wooFetch<WooProduct[]>('products', { per_page: 20 })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export async function getProductBySlug(
  slug: string
): Promise<WooProduct | null> {
  try {
    const products = await wooFetch<WooProduct[]>(`products?slug=${slug}`)

    return products.length ? products[0] : null
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error')
    throw error
  }
}
