'use client'
import { Control, Controller } from 'react-hook-form'
import { billingSchemaType } from '../../lib/zod/billing.schema'
import { useCartTotal } from '@/features/cart/store/cart'
import Link from 'next/link'
import { CartProduct } from '@/features/product/types/types'

interface Props {
  control: Control<billingSchemaType>
  items: CartProduct[]
  updateQty: (productId: number, quantity: number) => void
  cartTotal: number
}

const OrderSummary = ({ control, items, updateQty, cartTotal }: Props) => {
  return (
    <div className="form-checkout__summary summary">
      <div className="summary__order">
        <h2 className="title title--baby">Order Summary</h2>
        <div className="summary__cards">
          {items.length === 0 && <p>order summary is empty</p>}
          {items.map((item, index) => (
            <div key={item.id} className="summary__card card-summary">
              <div className="card-summary__row">
                <Link
                  className="card-summary__image"
                  href={`/product/${item.slug}`}
                >
                  <img
                    alt={item.images[0].alt || item.name}
                    src={item.images[0].src}
                  />
                </Link>
                <Link
                  className="card-summary__link"
                  href={`/product/${item.slug}`}
                >
                  {item.name}
                </Link>
                <label>
                  x
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => {
                      const value = Math.max(1, Number(e.target.value))
                      updateQty(item.id, value)
                    }}
                  />
                </label>
              </div>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <div className="summary__item">
          <div>
            Subtotal:
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div>
            Shopping:
            <span>Free</span>
          </div>
          <div className="summary__total">
            Total:
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="summary__payment">
        <h2 className="title title--baby">Payment Method</h2>
        <Controller
          name="payment_method"
          control={control}
          defaultValue="cash"
          render={({ field }) => (
            <div className="summary__options options">
              <label className="options__item">
                <input
                  className="options__input"
                  type="radio"
                  value="cash"
                  checked={field.value === 'cash'}
                  onChange={() => field.onChange('cash')}
                />
                <div className="options__text">Cash on Delivery</div>
              </label>

              <label className="options__item">
                <input
                  className="options__input"
                  type="radio"
                  value="paypal"
                  checked={field.value === 'paypal'}
                  onChange={() => field.onChange('paypal')}
                />
                <div className="options__text">Paypal</div>
              </label>

              <label className="options__item">
                <input
                  className="options__input"
                  type="radio"
                  value="amazon"
                  checked={field.value === 'amazon'}
                  onChange={() => field.onChange('amazon')}
                />
                <div className="options__text">Amazon Pay</div>
              </label>
            </div>
          )}
        />
      </div>
      <button form="summary-form" className="button" type="submit">
        Place Order
      </button>
    </div>
  )
}

export default OrderSummary
