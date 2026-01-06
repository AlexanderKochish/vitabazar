'use client'

interface ActiveFiltersProps {
  filters: Record<string, any>
  onClear: () => void
  onRemove: (key: string) => void
}

export const ActiveFilters = ({
  filters,
  onClear,
  onRemove,
}: ActiveFiltersProps) => {
  const activeFilters = Object.entries(filters).filter(
    ([_, value]) => value !== undefined && value !== ''
  )

  if (activeFilters.length === 0) return null

  return (
    <div className="active-filters">
      <div className="active-filters__header">
        <h3>Active Filters</h3>
        <button type="button" className="clear-all" onClick={onClear}>
          Clear All
        </button>
      </div>

      <div className="active-filters__chips">
        {activeFilters.map(([key, value]) => (
          <div key={key} className="filter-chip">
            <span className="filter-chip__label">
              {key}: {Array.isArray(value) ? value.join(', ') : value}
            </span>
            <button
              type="button"
              className="filter-chip__remove"
              onClick={() => onRemove(key)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
