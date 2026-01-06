'use client'

import { useCategory } from '@/features/category/hooks/use-category'

interface CategoryFilterProps {
  currentCategory: string | null
}

export const CategoryFilter = ({ currentCategory }: CategoryFilterProps) => {
  const { data: categories, isLoading } = useCategory()

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === currentCategory) return

    const url = categorySlug ? `/category/${categorySlug}` : '/category'
    const searchParams = new URLSearchParams(window.location.search)
    window.location.href = `${url}?${searchParams.toString()}`
  }

  return (
    <details className="filter__item" data-fls-spollers-open="">
      <summary>
        <h2 className="filter__label filter__label--dropdown">
          All Categories
        </h2>
      </summary>
      {isLoading && <p>Loading...</p>}
      <div className="filter__options options" data-fls-radio="">
        {categories?.length === 0 && <p>Categories not found</p>}
        {categories?.map((category) => (
          <label key={category.id} className="options__item">
            <input
              className="options__input"
              type="radio"
              name="category"
              value={category.slug}
              checked={currentCategory === category.slug}
              onChange={(e) => handleCategoryChange(e.target.value)}
            />
            <div className="options__text">
              {category.name}
              <span className="options__quantity">({category.count})</span>
            </div>
          </label>
        ))}
      </div>
    </details>
  )
}
