import Image from 'next/image'
import Link from 'next/link'
import styles from '../header/header.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.logoIcon}
        src="/assets/img/logo-icon.svg"
        alt="Vitabazar"
        width={32}
        height={32}
      />
      <div className={styles.logoText}>Vitabazar</div>
    </div>
  )
}
