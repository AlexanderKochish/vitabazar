import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface FilterOptions {
  price?: string
  brand?: string
  sort?: string
  rating?: string[]
  tags?: string[]
  min_price?: number
  max_price?: number
  page?: number
  [key: string]: string | string[] | number | undefined
}

export const useUrlFilters = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateFilters = useCallback(
    (updates: Partial<FilterOptions>) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          params.delete(key)
        } else if (Array.isArray(value)) {
          params.delete(key)
          if (value.length > 0) {
            params.append(key, value.join(','))
          }
        } else {
          params.set(key, String(value))
        }
      })

      if (!updates.page) {
        params.delete('page')
      }

      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  const clearFilters = useCallback(() => {
    router.push(pathname)
  }, [router, pathname])

  const getCurrentFilters = useCallback((): FilterOptions => {
    const filters: FilterOptions = {}

    for (const [key, value] of searchParams.entries()) {
      if (key === 'rating' || key === 'tags') {
        filters[key] = value.split(',')
      } else if (key === 'min_price' || key === 'max_price' || key === 'page') {
        filters[key] = parseInt(value)
      } else {
        filters[key] = value
      }
    }

    return filters
  }, [searchParams])

  return {
    updateFilters,
    clearFilters,
    getCurrentFilters,
    currentFilters: getCurrentFilters(),
  }
}
