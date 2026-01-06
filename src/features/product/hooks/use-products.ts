import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../actions/actions'
import { ProductsResponse, UseProductsParams } from '../types/types'

export const useProducts = (params: UseProductsParams = {}) => {
  return useQuery<ProductsResponse>({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
  })
}
