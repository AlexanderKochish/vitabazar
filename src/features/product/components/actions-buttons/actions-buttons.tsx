'use client'

import { useCartStore } from '@/features/cart/store/cart'
import React, { useState } from 'react'
import { WooProduct } from '../../types/types'

interface Props {
  product: WooProduct
}

const AcctionsButtons = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((s) => s.addItem)

  const handleMinus = () => setQuantity((prev) => Math.max(1, prev - 1))
  const handlePlus = () => setQuantity((prev) => prev + 1)

  return (
    <div className="oneproduct__user-activity">
      <form className="oneproduct__form">
        <div className="oneproduct__actions">
          <div className="oneproduct__quantity quantity" data-fls-quantity="">
            <button
              onClick={handleMinus}
              type="button"
              className="quantity__button quantity__button--minus"
            ></button>
            <div className="quantity__input">
              <input defaultValue={1} type="text" value={quantity} />
            </div>
            <button
              onClick={handlePlus}
              type="button"
              className="quantity__button quantity__button--plus"
            ></button>
          </div>
          <button
            className="oneproduct__add-to-cart button button--icon-cart"
            onClick={() => addItem(product, quantity)}
          >
            Add to Cart
          </button>
          <a
            href="#"
            className="oneproduct__favourite oneproduct__favourite--icon-favourite"
          ></a>
        </div>
      </form>
    </div>
  )
}

export default AcctionsButtons
