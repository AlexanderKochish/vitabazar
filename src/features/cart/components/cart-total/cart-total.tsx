import Link from 'next/link'
import React from 'react'
import { useCartTotal } from '../../store/cart'

const CartTotal = () => {
  const cartTotal = useCartTotal()
  return (
    <div className="area-cart__total total-area-cart">
      <div className="total-area-cart__label">Cart Total</div>
      <div className="total-area-cart__body">
        <div className="total-area-cart__subtotal">
          <span>Subtotal:</span>${cartTotal.toFixed(2)}
        </div>
        <div className="total-area-cart__shipping">
          <span>Shipping:</span>
          Free
        </div>
        <div className="total-area-cart__sum">
          <span>Total:</span>${cartTotal.toFixed(2)}
        </div>
      </div>
      <Link className="total-area-cart__btn button" href="/checkout">
        Proceed to checkout
      </Link>
    </div>
  )
}

export default CartTotal
