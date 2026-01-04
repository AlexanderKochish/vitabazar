'use server'

import { wooFetch } from '@/shared/utils/wooFetch'
import { WooCategory } from '../types/types'

export async function fetchCategories() {
  try {
    const categories = (await wooFetch('products/categories', {
      per_page: 100,
    })) as WooCategory[]
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}
