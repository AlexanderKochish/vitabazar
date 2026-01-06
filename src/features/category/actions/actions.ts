'use server'

import { wooFetch } from '@/shared/utils/wooFetch'
import { WooCategory } from '../types/types'

/** Получить все категории */
export async function fetchCategories() {
  return wooFetch<WooCategory[]>('products/categories', {
    per_page: '100',
    orderby: 'count',
    order: 'desc',
    hide_empty: 'true',
  })
}

/** Получить категорию по slug */
export async function fetchCategoryBySlug(slug: string) {
  const categories = await wooFetch<WooCategory[]>('products/categories', {
    slug,
  })

  return categories.length > 0 ? categories[0] : null
}

/** Получить дерево категорий */
export async function fetchCategoryTree() {
  const categories = await wooFetch<WooCategory[]>('products/categories', {
    per_page: '100',
    hide_empty: 'true',
  })

  const parents = categories.filter((c) => c.parent === 0)
  const children = categories.filter((c) => c.parent !== 0)

  return parents.map((parent) => ({
    ...parent,
    children: children.filter((child) => child.parent === parent.id),
  }))
}
