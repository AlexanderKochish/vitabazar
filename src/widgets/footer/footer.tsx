import React from 'react'

const Footer = () => {
  return (
    <footer data-fls-footer="" className="footer">
      <div className="footer__container">
        <div className="footer__body body-footer" data-fls-spollers="375">
          <div className="body-footer__content">
            <div className="body-footer__logo logo">
              <img
                className="logo__icon"
                src="./assets/img/logo-icon.svg"
                alt="Vitabazar"
              />
              <div className="logo__text">Vitabazar</div>
            </div>
            <div className="body-footer__text">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </div>
            <div className="body-footer__cantacts">
              <a className="body-footer__tel" href="tel:2195550114">
                <span>(219) 555-0114</span>
              </a>
              or
              <a className="body-footer__mail" href="mailto:Proxy@gmail.com">
                Proxy@gmail.com
              </a>
            </div>
          </div>
          <details className="body-footer__col">
            <summary className="body-footer__label body-footer__label--icon-shevron">
              My Account
            </summary>
            <ul className="body-footer__list">
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  My Account
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Order History
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Shoping Cart
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Wishlist
                </a>
              </li>
            </ul>
          </details>
          <details className="body-footer__col">
            <summary className="body-footer__label body-footer__label--icon-shevron">
              Helps
            </summary>
            <ul className="body-footer__list">
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Contact
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Faqs
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Terms & Condition
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </details>
          <details className="body-footer__col">
            <summary className="body-footer__label body-footer__label--icon-shevron">
              Proxy
            </summary>
            <ul className="body-footer__list">
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  About
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Shop
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Product
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Track Order
                </a>
              </li>
            </ul>
          </details>
          <details className="body-footer__col">
            <summary className="body-footer__label body-footer__label--icon-shevron">
              Categories
            </summary>
            <ul className="body-footer__list">
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Fruit & Vegetables
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Meat & Fish
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Bread & Bakery
                </a>
              </li>
              <li className="body-footer__item">
                <a href="#" className="body-footer__link">
                  Beauty & Health
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            Ecobazar eCommerce &copy; 2021. All Rights Reserved
          </div>
          <ul className="footer__payments">
            <li>
              <img
                src="./assets/img/footer/apple-pay.svg"
                alt="Image"
                data-fls-image-ignore=""
              />
            </li>
            <li>
              <img
                src="./assets/img/footer/visa.svg"
                alt="Image"
                data-fls-image-ignore=""
              />
            </li>
            <li>
              <img
                src="./assets/img/footer/discover.svg"
                alt="Image"
                data-fls-image-ignore=""
              />
            </li>
            <li>
              <img
                src="./assets/img/footer/mastercard.svg"
                alt="Image"
                data-fls-image-ignore=""
              />
            </li>
            <li>
              <img
                src="./assets/img/footer/cart.svg"
                alt="Image"
                data-fls-image-ignore=""
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
