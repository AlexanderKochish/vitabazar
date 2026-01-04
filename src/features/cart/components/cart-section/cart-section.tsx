'use client'

import Link from 'next/link'
import React, { FormEvent } from 'react'
import { useCartStore } from '../../store/cart'
import CartItem from '../cart-item/cart-item'
import CartTotal from '../cart-total/cart-total'
import Breadcrumb from '@/shared/components/breadcrumb/breadcrumb'

const CartSection = () => {
  const { items, updateQty, removeItem } = useCartStore()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const handleDecrease = (id: number, currentQty: number) => {
    updateQty(id, currentQty - 1)
  }

  const handleIncrease = (id: number, currentQty: number) => {
    updateQty(id, currentQty + 1)
  }

  if (items.length === 0) return <div>Cart is empty</div>

  return (
    <main className="page page--cart-area">
      <Breadcrumb items={[{ label: 'Shopping Cart', href: '/cart' }]} />
      <section className="page__cart-area area-cart">
        <div className="area-cart__container">
          <h1 data-fls-title="" className="title title--center">
            My Shopping Cart
          </h1>
          <div className="area-cart__body">
            <form
              className="area-cart__form"
              onSubmit={handleSubmit}
              name="area-cart_quantity"
              acceptCharset="UTF-8"
            >
              <div className="area-cart__table table-area-cart">
                <div className="table-area-cart__body">
                  <div className="table-area-cart__titles">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                  </div>
                  <div className="table-area-cart__items">
                    <CartItem
                      items={items}
                      handleDecrease={handleDecrease}
                      handleIncrease={handleIncrease}
                      removeItem={removeItem}
                    />
                  </div>

                  <div className="table-area-cart__actions">
                    <Link
                      className="table-area-cart__return-btn button button--gray"
                      href="/"
                    >
                      Return to shop
                    </Link>
                    <button
                      className="table-area-cart__update-btn button button--gray"
                      type="submit"
                    >
                      Update Cart
                    </button>
                  </div>
                </div>
                <div className="table-area-cart__coupon coupon">
                  <div className="coupon__label">Coupon Code</div>
                  <div className="coupon__code">
                    <input
                      className="coupon__input"
                      type="text"
                      name="coupon_value"
                      id="coupon_value"
                      placeholder="Enter code"
                    />
                    <button
                      className="button button--apply-coupon"
                      type="submit"
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <CartTotal />
          </div>
        </div>
      </section>
      <aside className="subcribe" data-fls-subcribe="">
        <div className="subcribe__container">
          <div className="subcribe__body">
            <div className="subcribe__content">
              <div className="subcribe__label">Subcribe our Newsletter</div>
              <div className="subcribe__text">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </div>
            </div>
            <div className="subcribe__form-wrap">
              <form
                onSubmit={handleSubmit}
                name="subscribe_form"
                acceptCharset="UTF-8"
              >
                <div className="subcribe__form form-subscribe">
                  <input
                    className="form-subscribe__input"
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Your email address"
                    required
                  />
                  <button
                    className="form-subscribe__button button"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <ul className="subcribe__social-list list-social">
              <li className="list-social__item">
                <a
                  href="#"
                  className="list-social__link list-social__link--icon-facebook"
                ></a>
              </li>
              <li className="list-social__item">
                <a
                  href="#"
                  className="list-social__link list-social__link--icon-twitter"
                ></a>
              </li>
              <li className="list-social__item">
                <a
                  href="#"
                  className="list-social__link list-social__link--icon-pinterest"
                ></a>
              </li>
              <li className="list-social__item">
                <a
                  href="#"
                  className="list-social__link list-social__link--icon-instagram"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  )
}

export default CartSection
