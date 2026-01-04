import React from 'react'

const HotDeals = () => {
  return (
    <div className="page__hot-deals hot-deals">
      <div className="hot-deals__container">
        <div className="caption-box" data-fls-caption="">
          <h2 className="title" data-fls-title="">
            Hot Deals
          </h2>
          <a
            data-fls-viewall=""
            href="#"
            className="more-link more-link--icon-next"
          >
            View all
          </a>
        </div>
        <div className="hot-deals__items">
          <article
            className="product-item product-item--common-line product-item--large"
            data-fls-product=""
            data-fls-addtocart-product=""
          >
            <div className="product-labels" data-fls-label="">
              <a className="label label--sale" href="#">
                Sale
                <span>50%</span>
              </a>
              <a className="label label--best" href="#">
                Best Sale
              </a>
            </div>
            <a className="product-item__image-wrap" href="#">
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcSet="./assets/img/products/parsley-600.webp"
                  type="image/webp"
                />
                <img
                  alt="Image"
                  data-fls-addtocart-image="800"
                  src="./assets/img/products/parsley.webp"
                />
              </picture>
            </a>
            <div className="product-item__body">
              <div className="product-item__actions">
                <a
                  href="#"
                  className="product-item__action product-item__action--icon-favourite"
                ></a>
                <button
                  className="button button--icon-cart"
                  data-fls-addtocart-button=""
                >
                  Add to Cart
                </button>
                <a
                  href="#"
                  className="product-item__action product-item__action--icon-eye"
                ></a>
              </div>
              <div className="product-item__content">
                <h3 className="product-item__title">
                  <a href="#">Parslay</a>
                </h3>
                <div className="product-item__prices">
                  <div className="product-item__current-price">$12.00</div>
                  <div className="product-item__old-price">$24.00</div>
                </div>
                <div className="product-item__rate-wrap">
                  <div
                    data-fls-rating=""
                    data-fls-rating-value="5"
                    className="product-item__rate rating rating--xl"
                  ></div>
                  <a className="product-item__text" href="#">
                    (524 Feedback)
                  </a>
                </div>
              </div>
              <div className="product-item__countdown-label">
                Hurry up! Offer ends In:
              </div>

              <div
                className="countdown"
                data-target="2025-09-15"
                data-fls-countdown=""
              >
                <div className="countdown__body">
                  <div className="countdown__digits">
                    <span className="days"></span>
                    <span className="hours"></span>
                    <span className="minutes"></span>
                    <span className="seconds"></span>
                  </div>
                  <div className="countdown__labels">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Mins</span>
                    <span>Secs</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default HotDeals
