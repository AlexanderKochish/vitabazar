'use client'

import { useDebounce } from '@/shared/hooks/use-debounce'
import { useUrlFilters } from '@/shared/hooks/use-url-filters'
import { useState, useEffect } from 'react'

interface PriceFilterProps {
  minPrice: number
  maxPrice: number
}

export const PriceFilter = ({
  minPrice = 0,
  maxPrice = 1000,
}: PriceFilterProps) => {
  const { currentFilters, updateFilters } = useUrlFilters()
  const [localMin, setLocalMin] = useState(currentFilters.min_price || minPrice)
  const [localMax, setLocalMax] = useState(currentFilters.max_price || maxPrice)

  const debouncedMin = useDebounce(localMin, 500)
  const debouncedMax = useDebounce(localMax, 500)

  useEffect(() => {
    if (
      debouncedMin !== currentFilters.min_price ||
      debouncedMax !== currentFilters.max_price
    ) {
      updateFilters({
        min_price: debouncedMin,
        max_price: debouncedMax,
      })
    }
  }, [debouncedMin, debouncedMax, updateFilters, currentFilters])

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), localMax - 1)
    setLocalMin(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), localMin + 1)
    setLocalMax(value)
  }

  const priceRanges = [
    { label: 'Under $25', value: 'under-25', min: 0, max: 25 },
    { label: '$25 - $50', value: '25-50', min: 25, max: 50 },
    { label: '$50 - $100', value: '50-100', min: 50, max: 100 },
    { label: 'Over $100', value: 'over-100', min: 100, max: maxPrice },
  ]

  return (
    <details className="filter__item" data-fls-spollers-open="">
      <summary>
        <h2 className="filter__label filter__label--dropdown">Price</h2>
      </summary>
      <div className="price-filter" data-fls-noslider="">
        <div className="price-slider"></div>
        <div className="price-filter__body">
          <div className="price-filter__label">Price:</div>
          <div className="price-filter__value">
            <input
              type="hidden"
              name="price-filter_start"
              className="price-filter__start"
            />
            <input
              type="hidden"
              name="price-filter_start"
              className="price-filter__end"
            />
          </div>
        </div>
      </div>
    </details>
  )
}
