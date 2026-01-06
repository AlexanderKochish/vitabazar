'use client'

import { useProducts } from '../../hooks/use-products'
import Pagination from '@/shared/components/pagination/pagination'
import ProductItem from '../product-item/product-item'
import { useRouter } from 'next/navigation'
import { ProductsGridProps } from '../../types/types'

export const ProductsGrid = ({ category, filters = {} }: ProductsGridProps) => {
  const router = useRouter()

  const {
    data: productsData,
    isLoading,
    error,
    refetch,
  } = useProducts({
    category,
    searchParams: {
      ...filters,
      page: filters.page ?? 1,
      per_page: 12,
    },
  })

  if (isLoading) return <p>Loading...</p>

  if (error) {
    return (
      <div className="products-error">
        <h3>Unable to load products</h3>
        <p>{error.message}</p>
        <button onClick={() => refetch()} className="retry-button">
          Try Again
        </button>
      </div>
    )
  }

  if (!productsData?.products.length) {
    return (
      <div className="products-empty">
        <div className="products-empty__icon">📦</div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or browse different categories</p>
        <button
          onClick={() =>
            router.push(category ? `/category/${category}` : '/category')
          }
          className="clear-filters-button"
        >
          Clear Filters
        </button>
      </div>
    )
  }

  return (
    <div className="inner-cat__content">
      <div className="inner-cat__items">
        {productsData.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={productsData.pagination.currentPage}
        totalPages={productsData.pagination.totalPages}
      />
    </div>
  )
}
