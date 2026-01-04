'use client'

import { useState } from 'react'
import styles from './Form.module.css'

interface SelectFieldProps {
  name: string
  label: string
  options: Array<{ value: string; label: string }>
  defaultValue?: string
  required?: boolean
  error?: string
  className?: string
}

export default function SelectField({
  name,
  label,
  options,
  defaultValue = '',
  required = false,
  error,
  className = '',
}: SelectFieldProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles.select} ${error ? styles.error : ''}`}
        required={required}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
}
