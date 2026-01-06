import CategorySection from '@/features/category/components/category-section/category-section'

interface PageProps {
  params: Promise<{ slug?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const CategoryPage = async ({ searchParams, params }: PageProps) => {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ])

  const slug = (resolvedParams.slug as string[]) || []
  const currentCategory = slug[0] || null

  const filters = {
    price: resolvedSearchParams.price as string | undefined,
    brand: resolvedSearchParams.brand as string | undefined,
    sort: (resolvedSearchParams.sort as string) || 'popular',
  }

  return (
    <CategorySection
      slug={slug}
      currentCategory={currentCategory}
      filters={filters}
    />
  )
}

export default CategoryPage
