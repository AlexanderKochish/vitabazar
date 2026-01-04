import Image from 'next/image'
import Link from 'next/link'
import styles from '../hero/hero.module.css'

interface HeroDealProps {
  label: string
  value?: string
  title: string
  imageSrc: string
  imageSrcMobile: string
  link: string
  overlay?: boolean
}

export default function HeroDeal({
  label,
  value,
  title,
  imageSrc,
  imageSrcMobile,
  link,
  overlay = false,
}: HeroDealProps) {
  return (
    <article
      className={`${styles.itemHero} ${overlay ? styles.itemHeroOverlay : ''}`}
    >
      <div className={styles.itemHeroLabel}>{label}</div>
      {value && <div className={styles.itemHeroValue}>{value}</div>}
      <h2
        className={styles.itemHeroTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Link
        data-fls-viewall=""
        href={link}
        className={`${styles.moreLink} ${styles.moreLinkIconNext}`}
      >
        Shop now
      </Link>
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={imageSrcMobile}
          type="image/webp"
        />
        <Image
          src={imageSrc}
          alt="Deal image"
          fill
          className={styles.itemHeroImage}
        />
      </picture>
    </article>
  )
}
