'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../header/header.module.css'

interface NavigationProps {
  isOpen: boolean
}

export default function Navigation({ isOpen }: NavigationProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const menuItems = [
    {
      title: 'Home',
      href: '/',
      submenu: null,
    },
    {
      title: 'Shop',
      href: '#',
      submenu: [
        { title: 'Fresh fruits', href: '/category' },
        { title: 'Fresh vegetables', href: '/category' },
        { title: 'Natural Oils', href: '/category' },
        { title: 'Honey & Jams', href: '/category' },
        { title: 'Keto Products', href: '/category' },
      ],
    },
    {
      title: 'Pages',
      href: '#',
      submenu: [
        { title: 'Fresh fruits', href: '#' },
        { title: 'Fresh vegetables', href: '#' },
        { title: 'Oils', href: '#' },
      ],
    },
    {
      title: 'Blog',
      href: '#',
      submenu: [
        { title: 'Fresh fruits', href: '#' },
        { title: 'Fresh vegetables', href: '#' },
        { title: 'Oils', href: '#' },
      ],
    },
    {
      title: 'About us',
      href: '/about',
      submenu: null,
    },
  ]

  return (
    <div className={styles.menu}>
      <nav className={`${styles.menuBody} ${isOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${activeSubmenu === item.title ? styles.active : ''}`}
            >
              <Link href={item.href} className={styles.menuLink}>
                {item.title}
              </Link>
              {item.submenu && (
                <>
                  <button
                    className={styles.menuButton}
                    type="button"
                    aria-label="Toggle submenu"
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === item.title ? null : item.title
                      )
                    }
                  ></button>
                  <ul className={styles.subMenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.subMenuItem}>
                        <Link
                          href={subItem.href}
                          className={styles.subMenuLink}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
