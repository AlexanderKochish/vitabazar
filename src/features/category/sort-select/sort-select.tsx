'use client'

interface SortSelectProps {
  value: string
  onChange: (value: string) => void
}

const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Best Rating' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'discount', label: 'Biggest Discount' },
]

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <div className="header-cat__sort-condition">
      <div className="header-cat__label">Sort by:</div>
      <select
        className="header-cat__select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
