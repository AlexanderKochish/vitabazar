export interface WooImage {
  id: number
  src: string
  name: string
  alt: string
}

export interface WooCategory {
  id: number
  name: string
  slug: string
}

export interface WooTag {
  id: number
  name: string
  slug: string
}

export interface WooDimensions {
  length: string
  width: string
  height: string
}

export interface WooProduct {
  id: number
  name: string
  slug: string
  permalink: string

  description: string
  short_description: string

  price: string
  regular_price: string
  sale_price: string | null
  on_sale: boolean

  stock_status: 'instock' | 'outofstock' | 'onbackorder'
  purchasable: boolean

  weight: string
  dimensions: WooDimensions

  categories: WooCategory[]
  tags: WooTag[]

  images: WooImage[]

  average_rating: string
  rating_count: number
}

export type CartProduct = WooProduct & {
  quantity: number
  variationId?: number
}

export interface Product {
  id: number
  name: string
  slug: string
  price: string
  regular_price: string
  sale_price: string
  images: Array<{ src: string; alt: string }>
  stock_status: string
  average_rating: string
  rating_count: number
  categories: Array<{ id: number; name: string; slug: string }>
  attributes: Array<{ name: string; options: string[] }>
  on_sale: boolean
  featured: boolean
  type: string
}

export interface ProductsResponse {
  products: WooProduct[]
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    perPage: number
  }
}

export interface UseProductsParams {
  category?: string | null
  searchParams?: {
    price?: string
    brand?: string
    sort?: string
    rating?: string[]
    tags?: string[]
    min_price?: number
    max_price?: number
    page?: number
    per_page?: number
    featured?: boolean
    on_sale?: boolean
  }
}

export interface ProductsGridProps {
  category: string | null
  filters?: {
    price?: string
    brand?: string
    sort?: string
    rating?: string[]
    tags?: string[]
    min_price?: number
    max_price?: number
    page?: number
  }
}
