'use client'

import { useUrlFilters } from '@/shared/hooks/use-url-filters'
import { useEffect, useState } from 'react'

interface Tag {
  id: number
  name: string
  slug: string
  count: number
}

export const TagsFilter = () => {
  const { currentFilters, updateFilters } = useUrlFilters()
  const [tags, setTags] = useState<Tag[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)

  const currentTags = currentFilters.tags || []

  // Загрузка тегов из API
  useEffect(() => {
    const fetchTags = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/tags')

        if (!response.ok) {
          throw new Error('Failed to fetch tags')
        }

        const data = await response.json()
        setTags(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tags')
        console.error('Error fetching tags:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTags()
  }, [])

  // Обработчик выбора тега
  const handleTagChange = (tagSlug: string) => {
    const newTags = currentTags.includes(tagSlug)
      ? currentTags.filter((t) => t !== tagSlug)
      : [...currentTags, tagSlug]

    updateFilters({ tags: newTags.length > 0 ? newTags : undefined })
  }

  // Сброс выбранных тегов
  const handleResetTags = () => {
    updateFilters({ tags: undefined })
  }

  // Фильтрация тегов по поиску
  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Показываем только первые 10 тегов по умолчанию, остальные - по клику
  const displayedTags = showAll ? filteredTags : filteredTags.slice(0, 10)
  const hasMoreTags = filteredTags.length > 10

  if (error) {
    return (
      <details className="filter__item">
        <summary>
          <h2 className="filter__label filter__label--dropdown">
            Popular Tags
          </h2>
        </summary>
        <div className="filter__error">
          <p>Unable to load tags</p>
          <button
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Retry
          </button>
        </div>
      </details>
    )
  }

  return (
    <details className="filter__item" data-fls-spollers-open="">
      <summary>
        <h2 className="filter__label filter__label--dropdown">Popular Tag</h2>
      </summary>
      <div className="filter__tags">
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="helthy"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Healthy</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="snacks"
            name="filter__tags[]"
            checked
          />
          <div className="checkbox__text">Snacks</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="vitamins"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Vitamins</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="nosugar"
            name="filter__tags[]"
          />
          <div className="checkbox__text">No sugar</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="vegetarian"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Vegetarian</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="alternatives"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Dairy Alternatives</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="keto"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Keto-friendly</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="familypack"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Family Pack</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="herbal"
            name="filter__tags[]"
          />
          <div className="checkbox__text">Herbal</div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="highprotein"
            name="filter__tags[]"
          />
          <div className="checkbox__text">High Protein</div>
        </label>
      </div>
    </details>
  )
}
