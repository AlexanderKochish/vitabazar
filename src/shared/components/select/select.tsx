'use client'

import { useState } from 'react'
import styles from './select.module.css'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export default function Select({
  options,
  defaultValue,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || value || ''
  )

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setIsOpen(false)
    if (onChange) {
      onChange(optionValue)
    }
  }

  const selectedOption = options.find((opt) => opt.value === selectedValue)
  const displayValue = selectedOption ? selectedOption.label : placeholder

  return (
    <div
      className={`${styles.select} ${className} ${isOpen ? styles.selectOpen : ''}`}
    >
      <div className={styles.selectBody}>
        <button
          type="button"
          className={styles.selectTitle}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <div className={styles.selectValue}>
            <div className={styles.selectContent}>
              <div className={styles.selectText}>{displayValue}</div>
            </div>
            <span className={styles.selectArrow}>▼</span>
          </div>
        </button>

        {isOpen && (
          <div className={styles.selectOptions}>
            <div className={styles.selectScroll}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`${styles.selectOption} ${selectedValue === option.value ? styles.selected : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <input type="hidden" name="select_value" value={selectedValue} />
    </div>
  )
}
