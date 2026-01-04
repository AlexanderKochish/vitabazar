'use client'

import { useState } from 'react'
import styles from '../header/header.module.css'

export default function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useState('usd')

  return (
    <select
      name="currency"
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
      data-fls-select=""
      data-fls-select-modif="form"
      className={styles.select}
    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="uah">UAH</option>
      <option value="pln">PLN</option>
    </select>
  )
}
