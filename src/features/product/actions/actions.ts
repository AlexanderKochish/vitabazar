'use server'

import { wooFetch, wooFetchWithPagination } from '@/shared/utils/wooFetch'
import { WooCategory, WooProduct } from '../types/types'
import { ProductsResponse, UseProductsParams } from '../types/types'

export async function fetchProducts({
  category,
  searchParams = {},
}: UseProductsParams = {}): Promise<ProductsResponse> {
  const params: Record<string, string | number | boolean> = {
    per_page: searchParams.per_page || 12,
    page: searchParams.page || 1,
  }

  if (category) {
    const categories = await wooFetch<WooCategory[]>('products/categories', {
      slug: category,
    })

    if (categories.length > 0) {
      params.category = categories[0].id
    }
  }

  if (searchParams.sort) {
    const sortMap: Record<string, { orderby: string; order: 'desc' | 'asc' }> =
      {
        popular: { orderby: 'popularity', order: 'desc' },
        rating: { orderby: 'rating', order: 'desc' },
        'price-asc': { orderby: 'price', order: 'asc' },
        'price-desc': { orderby: 'price', order: 'desc' },
        newest: { orderby: 'date', order: 'desc' },
      }

    Object.assign(
      params,
      sortMap[searchParams.sort] ?? {
        orderby: 'menu_order',
        order: 'asc',
      }
    )
  }

  if (searchParams.min_price) params.min_price = searchParams.min_price
  if (searchParams.max_price) params.max_price = searchParams.max_price

  if (searchParams.price) {
    const priceMap: Record<string, { max_price?: number; min_price?: number }> =
      {
        'under-25': { max_price: 25 },
        '25-50': { min_price: 25, max_price: 50 },
        '50-100': { min_price: 50, max_price: 100 },
        'over-100': { min_price: 100 },
      }

    Object.assign(params, priceMap[searchParams.price] ?? {})
  }

  if (searchParams.featured) params.featured = true
  if (searchParams.on_sale) params.on_sale = true

  if (searchParams.brand) {
    params.attribute = 'pa_brand'
    params.attribute_term = searchParams.brand
  }

  const stringParams = Object.entries(params).reduce(
    (acc, [key, value]) => {
      acc[key] = String(value)
      return acc
    },
    {} as Record<string, string>
  )

  const { data, headers } = await wooFetchWithPagination<WooProduct[]>(
    'products',
    stringParams
  )

  return {
    products: data,
    pagination: {
      total: Number(headers['x-wp-total'] || 0),
      totalPages: Number(headers['x-wp-totalpages'] || 1),
      currentPage: Number(params.page),
      perPage: Number(params.per_page),
    },
  }
}
