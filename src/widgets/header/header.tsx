'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import Logo from '../logo/logo'
import LanguageSelector from '../language-selector/language-selector'
import CurrencySelector from '../currency-selector/currency-selector'
import SearchBar from '../search-bar/search-bar'
import UserActions from '../user-actions/user-actions'
import Navigation from '../navigation/navigation'
import { useCart } from '@/features/cart/hooks/use-cart'
import {
  useCartCount,
  useCartStore,
  useCartTotal,
} from '@/features/cart/store/cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartTotal = useCartTotal()
  const cartCount = useCartCount()

  return (
    <header data-fls-header="" className="header">
      <div className="header__top top-header">
        <div className="top-header__container">
          <address className="top-header__address address-top-header">
            <a
              href="#"
              className="address-top-header__link address-top-header__link--icon-location"
            >
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </a>
          </address>
          <div
            data-fls-dynamic=".menu__body, 767,98"
            className="top-header__actions actions-top-header"
          >
            <div className="actions-top-header__utils">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <div className="actions-top-header__auth-links links-auth">
              <a className="links-auth__sign-in" href="#">
                Sign in
              </a>
              <span>/</span>
              <a className="links-auth__sign-up" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__middle middle-header">
        <div className="middle-header__container">
          <div className="middle-header__logo logo">
            <img
              className="logo__icon"
              src="./assets/img/logo-icon.svg"
              alt="Vitabazar"
            />
            <div className="logo__text">Vitabazar</div>
          </div>
          <div
            data-fls-dynamic=".bottom-header__container, 767,98"
            className="middle-header__search search-header"
          >
            <form action="#" method="post" name="search" id="search">
              <div className="search-header__form search-header__form--icon-search">
                <input
                  data-fls-input=""
                  name="search"
                  autoComplete="off"
                  type="search"
                  placeholder="Search"
                  className="input search-header__input"
                />
                <button
                  data-fls-button=""
                  className="button-search"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="middle-header__actions-user user-actions">
            <a
              href="/wishlist"
              className="user-actions__favourite user-actions__favourite--icon-favourite"
            ></a>
            <a
              href="/cart"
              className="user-actions__cart cart-header"
              data-fls-popup-link="popup-cart"
            >
              <div className="cart-header__icon cart-header__icon--icon-cart">
                <span data-fls-addtocart="">{cartCount ?? 0}</span>
              </div>
              <div className="cart-header__body">
                <div className="cart-header__label">Shopping cart:</div>
                <div className="cart-header__value">
                  ${cartTotal.toFixed(2)}
                </div>
              </div>
            </a>
            <button type="button" data-fls-menu="" className="icon-menu">
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className="header__bottom bottom-header">
        <div className="bottom-header__container">
          <div className="bottom-header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link href="/" className="menu__link">
                    Home
                  </Link>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Shop
                  </a>
                  <button
                    className="menu__button menu__button--icon-shevron"
                    type="button"
                    aria-label="Toggle submenu"
                  ></button>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <a href="/category" className="sub-menu__link">
                        Fresh fruits
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="/category" className="sub-menu__link">
                        Fresh vegetables
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="/category" className="sub-menu__link">
                        Natural Oils
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="/category" className="sub-menu__link">
                        Honey & Jams
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="/category" className="sub-menu__link">
                        Keto Products
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Pages
                  </a>
                  <button
                    className="menu__button menu__button--icon-shevron"
                    type="button"
                    aria-label="Toggle submenu"
                  ></button>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Fresh fruits
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Fresh vegetables
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Oils
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Blog
                  </a>
                  <button
                    className="menu__button menu__button--icon-shevron"
                    type="button"
                    aria-label="Toggle submenu"
                  ></button>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Fresh fruits
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Fresh vegetables
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="#" className="sub-menu__link">
                        Oils
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <a href="/about" className="menu__link">
                    About us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <a
            data-fls-dynamic=".cart-header, 767,98"
            className="bottom-header__tel bottom-header__tel--icon-phone"
            href="tel:2195550114"
          >
            <span>(219) 555-0114</span>
          </a>
        </div>
      </div>
    </header>
  )
}
