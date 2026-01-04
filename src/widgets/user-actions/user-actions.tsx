import Link from 'next/link'
import styles from '../header/header.module.css'

interface UserActionsProps {
  onMenuToggle: () => void
}

export default function UserActions({ onMenuToggle }: UserActionsProps) {
  return (
    <div className={styles.userActions}>
      <Link href="/wishlist" className={styles.favourite}>
        {/* Icon for favourite */}
      </Link>
      <Link
        href="#"
        className={styles.cartHeader}
        data-fls-popup-link="popup-cart"
      >
        <div className={styles.cartIcon}>
          <span data-fls-addtocart="">0</span>
        </div>
        <div className={styles.cartBody}>
          <div className={styles.cartLabel}>Shopping cart:</div>
          <div className={styles.cartValue}>$57.00</div>
        </div>
      </Link>
      <button
        type="button"
        data-fls-menu=""
        className={styles.iconMenu}
        onClick={onMenuToggle}
      >
        <span></span>
      </button>
    </div>
  )
}
