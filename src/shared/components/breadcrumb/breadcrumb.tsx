'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BreadcrumbProps } from './breadcrumb.types'

const formatSegment = (segment: string) =>
  decodeURIComponent(segment)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

const Breadcrumb = ({ items, background = true }: BreadcrumbProps) => {
  const pathname = usePathname()

  const autoItems = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => {
      const href = '/' + array.slice(0, index + 1).join('/')
      return {
        label: formatSegment(segment),
        href,
      }
    })

  const breadcrumbItems = items ?? autoItems

  return (
    <div className="breadcrumb">
      {background && (
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/assets/img/breadcrumb/bg-600.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1200px)"
            srcSet="/assets/img/breadcrumb/bg-1200.webp"
            type="image/webp"
          />
          <img
            className="breadcrumb__bg"
            alt="Breadcrumb background"
            src="/assets/img/breadcrumb/bg.webp"
          />
        </picture>
      )}

      <nav className="breadcrumb__container" aria-label="Breadcrumb">
        <ul className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link
              href="/"
              className="breadcrumb__link breadcrumb__link--icon-home"
              aria-label="Home"
            />
          </li>

          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1

            return (
              <li key={item.href ?? item.label} className="breadcrumb__item">
                {isLast ? (
                  <span className="breadcrumb__active">{item.label}</span>
                ) : (
                  <Link href={item.href!} className="breadcrumb__link">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumb
