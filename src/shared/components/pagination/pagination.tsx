'use client'

import React from 'react'
import { useUrlFilters } from '@/shared/hooks/use-url-filters'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const { updateFilters } = useUrlFilters()

  if (totalPages <= 1) return null

  const goToPage = (page: number) => {
    updateFilters({ page })
  }

  const getPages = () => {
    const pages: (number | '...')[] = []

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }

    return pages
  }

  return (
    <div className="inner-cat__pagination" aria-label="Pagination Navigation">
      <ul className="inner-cat__pages pages">
        <li className="pages__item pages__item--prev">
          <button
            className="pages__link pages__link--prev pages__link--icon-shevron"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          />
        </li>

        {getPages().map((page, index) =>
          page === '...' ? (
            <li key={index} className="pages__item">
              <span className="pages__link pages__link--ellipsis">…</span>
            </li>
          ) : (
            <li key={page} className="pages__item">
              <button
                className={`pages__link ${
                  page === currentPage ? 'pages__link--current' : ''
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          )
        )}

        <li className="pages__item pages__item--next">
          <button
            className="pages__link pages__link--next pages__link--icon-shevron"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
