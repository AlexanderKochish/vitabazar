import { CartProduct } from '@/features/product/types/types'
import Link from 'next/link'
import React from 'react'

interface Props {
  items: CartProduct[]
  handleDecrease: (id: number, currentQty: number) => void
  handleIncrease: (id: number, currentQty: number) => void
  removeItem: (productId: number) => void
}

const CartItem = ({
  items,
  handleDecrease,
  handleIncrease,
  removeItem,
}: Props) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="table-area-cart__item item-area-cart">
          <div className="item-area-cart__view">
            <Link className="item-area-cart__img" href={`/product/${item.id}`}>
              <picture>
                <img alt={item.name} src={item.images[0].src} />
              </picture>
            </Link>

            <h2 className="item-area-cart__prod-name">{item.name}</h2>
          </div>

          <div className="item-area-cart__current-price">
            ${Number(item.price).toFixed(2)}
          </div>

          <div
            className="item-area-cart__quantity quantity"
            data-fls-quantity=""
          >
            <button
              // data-fls-quantity-minus=""
              type="button"
              className="quantity__button quantity__button--minus"
              onClick={() => handleDecrease(item.id, item.quantity)}
            />

            <div className="quantity__input">
              <input
                data-fls-quantity-value=""
                autoComplete="off"
                type="text"
                readOnly
                value={item.quantity}
              />
            </div>

            <button
              // data-fls-quantity-plus=""
              type="button"
              className="quantity__button quantity__button--plus"
              onClick={() => handleIncrease(item.id, item.quantity)}
            />
          </div>

          <div className="item-area-cart__total-price">
            ${(Number(item.price) * item.quantity).toFixed(2)}
          </div>

          <button
            className="item-area-cart__delete item-area-cart__delete--icon-cross"
            type="button"
            onClick={() => removeItem(item.id)}
          />
        </div>
      ))}
    </>
  )
}

export default CartItem
