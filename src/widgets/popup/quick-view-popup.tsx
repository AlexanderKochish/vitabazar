'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './popup.module.css'

interface QuickViewPopupProps {
  isOpen: boolean
  onClose: () => void
  product: any
}

export default function QuickViewPopup({
  isOpen,
  onClose,
  product,
}: QuickViewPopupProps) {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen) return null

  return (
    <div
      data-fls-popup="quick-view"
      aria-hidden="true"
      className={styles.popup}
    >
      <div data-fls-popup-wrapper="" className={styles.popupWrapper}>
        <div data-fls-popup-body="" className={styles.popupBody}>
          <button
            data-fls-popup-close=""
            type="button"
            className={styles.popupClose}
            onClick={onClose}
          >
            {/* Close icon */}
          </button>
          <div data-fls-popup-content="">
            {/* Product quick view content */}
          </div>
        </div>
      </div>
    </div>
  )
}
