export interface WooCategoryImage {
  id: number
  src: string
  name: string
  alt: string
}

export interface WooCategory {
  id: number
  name: string
  slug: string
  parent: number
  description: string
  count: number
  image: WooCategoryImage | null
}
