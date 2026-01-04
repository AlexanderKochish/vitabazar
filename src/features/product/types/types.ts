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
