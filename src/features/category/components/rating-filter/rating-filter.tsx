'use client'

import { useUrlFilters } from '@/shared/hooks/use-url-filters'

export const RatingFilter = () => {
  const { currentFilters, updateFilters } = useUrlFilters()
  const currentRatings = currentFilters.rating || []

  const ratings = [
    { value: '5', label: '5.0', stars: 5 },
    { value: '4', label: '4.0 & up', stars: 4 },
    { value: '3', label: '3.0 & up', stars: 3 },
    { value: '2', label: '2.0 & up', stars: 2 },
    { value: '1', label: '1.0 & up', stars: 1 },
  ]

  const handleRatingChange = (ratingValue: string) => {
    const newRatings = currentRatings.includes(ratingValue)
      ? currentRatings.filter((r) => r !== ratingValue)
      : [...currentRatings, ratingValue]

    updateFilters({ rating: newRatings.length > 0 ? newRatings : undefined })
  }

  return (
    <details className="filter__item" data-fls-spollers-open="">
      <summary>
        <h2 className="filter__label filter__label--dropdown">Rating</h2>
      </summary>
      <div className="filter__rating">
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="5"
            name="filter_rating[]"
          />
          <div className="checkbox__text">
            <div className="rating-filter">
              <div className="rating-filter__item rating-filter__item--fill"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
            </div>
            <span>5.0</span>
          </div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="4"
            name="filter_rating[]"
            checked
          />
          <div className="checkbox__text">
            <div className="rating-filter">
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item rating-filter__item--fill"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
            </div>
            <span>4.0 & up</span>
          </div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="3"
            name="filter_rating[]"
          />
          <div className="checkbox__text">
            <div className="rating-filter">
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item rating-filter__item--fill"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
            </div>
            <span>3.0 & up</span>
          </div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="2"
            name="filter_rating[]"
          />
          <div className="checkbox__text">
            <div className="rating-filter">
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item rating-filter__item--fill"></div>
              <div className="rating-filter__item"></div>
            </div>
            <span>2.0 & up</span>
          </div>
        </label>
        <label data-fls-checkbox="" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            value="1"
            name="filter_rating[]"
          />
          <div className="checkbox__text">
            <div className="rating-filter">
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item"></div>
              <div className="rating-filter__item rating-filter__item--fill"></div>
            </div>
            <span>1.0 & up</span>
          </div>
        </label>
      </div>
    </details>
  )
}
