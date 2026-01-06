import { useQuery } from '@tanstack/react-query'
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchCategoryTree,
} from '../actions/actions'
import { WooCategory } from '../types/types'

export const useCategory = () => {
  return useQuery<WooCategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
  })
}

export const useCategoryBySlug = (slug: string | null) => {
  return useQuery<WooCategory | null>({
    queryKey: ['category', slug],
    queryFn: () => (slug ? fetchCategoryBySlug(slug) : null),
    enabled: !!slug,
    staleTime: 1000 * 60 * 30,
  })
}

export const useCategoryTree = () => {
  return useQuery({
    queryKey: ['categories-tree'],
    queryFn: fetchCategoryTree,
    staleTime: 1000 * 60 * 30,
  })
}
