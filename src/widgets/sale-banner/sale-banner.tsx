import React from 'react'

const SaleBanner = () => {
  return (
    <div className="page__sale-banner banner-sale" data-fls-parallax-parent="">
      <div className="banner-sale__container">
        <div className="banner-sale__body">
          <img
            className="banner-sale__image"
            src="./assets/img/%D0%B2iscount-bannar_01.jpg"
            alt="Image"
            data-fls-parallax=""
            data-fls-parallax-coefficient="15"
          />
          <div className="banner-sale__content">
            <div className="banner-sale__label">big sale</div>
            <div className="banner-sale__value">
              <span>37%</span>
              off
            </div>
            <div className="banner-sale__text">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </div>
            <a data-fls-button="" href="#" className="button button--icon-next">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaleBanner
