'use client'

import { useState } from 'react'
import styles from '../header/header.module.css'

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('eng')

  return (
    <select
      name="language"
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
      data-fls-select=""
      data-fls-select-modif="form"
      className={styles.select}
    >
      <option value="eng">Eng</option>
      <option value="uk">Uk</option>
      <option value="pl">Pl</option>
      <option value="de">De</option>
    </select>
  )
}
