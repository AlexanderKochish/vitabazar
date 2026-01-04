import React from 'react'
import { WooProduct } from '../types/types'
import { discountPercent } from '@/shared/utils/discount-percent'
import Image from 'next/image'
import AcctionsButtons from '../components/actions-buttons/actions-buttons'

interface Props {
  product: WooProduct
}

const ProductDetails = ({ product }: Props) => {
  return (
    <section className="oneproduct__container">
      <div className="oneproduct__top-area">
        <div className="oneproduct__body">
          <div className="carousel">
            {/* MAIN */}
            <div className="carousel__images">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {product.images.map((img) => (
                    <div className="swiper-slide" key={img.id}>
                      <div className="carousel__image">
                        <Image
                          src={img.src}
                          alt={img.alt || product.name}
                          width={600}
                          height={600}
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* THUMBS */}
            <div className="carousel__thumbs">
              <div className="swiper" data-fls-slider="">
                <div className="swiper-wrapper">
                  {product.images.map((img) => (
                    <div className="swiper-slide" key={img.id}>
                      <div className="carousel__image">
                        <Image
                          src={img.src}
                          alt={img.alt || product.name}
                          width={300}
                          height={300}
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel__prev carousel__prev--icon-shevron" />
              <button className="carousel__next carousel__next--icon-shevron" />
            </div>
          </div>
        </div>
        <div className="oneproduct__column">
          <div className="oneproduct__details">
            <div className="oneproduct__header">
              <div className="oneproduct__caption">
                <h1 className="oneproduct__title">{product.name}</h1>
                <div className="oneproduct__label-in-stock">In Stock</div>
              </div>
              <div className="oneproduct__rating">
                <div
                  data-fls-rating=""
                  data-fls-rating-value="4"
                  className="rating rating--2xl"
                ></div>
                <a className="oneproduct__review-text" href="#">
                  4 Review
                </a>
                <div className="oneproduct__sku">
                  <span>SKU:</span>
                  2,51,594
                </div>
              </div>
              <div className="oneproduct__cost">
                <div className="oneproduct__old-price">
                  ${product.regular_price}
                </div>
                <div className="oneproduct__current-price">
                  ${product.sale_price}
                </div>
                {product.sale_price && (
                  <div className="oneproduct__label-off">
                    {discountPercent(product.regular_price, product.sale_price)}
                    % Off
                  </div>
                )}
              </div>
            </div>
            <div className="oneproduct__description description-oneproduct">
              <div className="description-oneproduct__links">
                <div className="description-oneproduct__brand-area area-brand">
                  <span>Brand:</span>
                  <a className="area-brand__image" href="#">
                    <img src="./assets/img/oneproduct/brand.svg" alt="Image" />
                  </a>
                </div>
                <div
                  className="description-oneproduct__sicial-links links-social"
                  data-fls-dynamic=".oneproduct__description, 768"
                >
                  <div className="links-social__label">Share item:</div>
                  <ul className="links-social__items">
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-facebook"
                        href="#"
                      ></a>
                    </li>
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-twitter"
                        href="#"
                      ></a>
                    </li>
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-pinterest"
                        href="#"
                      ></a>
                    </li>
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-instagram"
                        href="#"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="description-oneproduct__text">
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </div>
            </div>
            <AcctionsButtons product={product} />
            <div className="oneproduct__keywords keywords">
              <div className="keywords__category">
                <span>Category:</span>
                Coffee
              </div>
              <div className="keywords__tags tags-category">
                <span>Tag:</span>
                <ul>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Healthy</a>
                  </li>
                  <li>
                    <a href="#">Chinese</a>
                  </li>
                  <li>
                    <a className="--active" href="#">
                      Cabbage
                    </a>
                  </li>
                  <li>
                    <a href="#">Green Cabbage</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
