import Image from 'next/image'
import Link from 'next/link'

import styles from './product-item.module.css'
import { WooProduct } from '../../types/types'
import { discountPercent } from '@/shared/utils/discount-percent'

interface Props {
  product: WooProduct
}

export default function ProductItem({ product }: Props) {
  return (
    <article
      className="product-item product-item--common-line"
      data-fls-product=""
      data-fls-addtocart-product=""
    >
      {product.sale_price && (
        <div className="product-labels" data-fls-label="">
          <a className="label label--sale" href="#">
            Sale
            <span>
              {discountPercent(product.regular_price, product.sale_price)} %
            </span>
          </a>
        </div>
      )}
      <div className="product-item__actions">
        <a
          href="#"
          className="product-item__action product-item__action--icon-favourite"
        ></a>
        <a
          href="#"
          className="product-item__action product-item__action--icon-eye"
          data-fls-popup-link="quick-view"
        ></a>
      </div>
      <a className="product-item__image-wrap" href="#">
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          height={300}
          width={300}
          unoptimized
        />
      </a>
      <div className="product-item__body">
        <div className="product-item__content">
          <h3 className="product-item__title">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <div className="product-item__prices">
            <div className="product-item__current-price">
              {product.sale_price}$
            </div>
            <div className="product-item__old-price">{product.price}$</div>
          </div>
          <div
            data-fls-rating=""
            data-fls-rating-value="4"
            className="product-item__rate rating"
          ></div>
        </div>
        <button
          className="product-item__add-to-cart product-item__add-to-cart--icon-cart"
          data-fls-addtocart-button=""
        ></button>
      </div>
    </article>
  )
}
