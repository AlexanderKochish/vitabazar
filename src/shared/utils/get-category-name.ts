export function getCategoryName(slug: string) {
  const categoryMap: Record<string, string> = {
    'fresh-fruits': 'Fresh Fruits',
    'fresh-vegetables': 'Fresh Vegetables',
    'natural-oils': 'Natural Oils',
    'honey-jams': 'Honey & Jams',
    'keto-products': 'Keto Products',
  }
  return categoryMap[slug] || slug
}
