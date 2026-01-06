import Breadcrumb from '@/shared/components/breadcrumb/breadcrumb'
import React from 'react'

const WishlistSection = () => {
  return (
    <main className="page page--wishlist">
      <Breadcrumb items={[{ label: 'Wishlist' }]} />
      <section className="page__wishlist wishlist">
        <div className="wishlist__container">
          <h1 data-fls-title="" className="title title--center">
            My Wishlist
          </h1>
          <div className="wishlist__table table-wishlist">
            <div className="table-wishlist__titles">
              <div>Product</div>
              <div>Price</div>
              <div>Stock Status</div>
            </div>
            <div className="table-wishlist__body">
              <div className="table-wishlist__inner">
                <div className="table-wishlist__item item-wishlist">
                  <div className="item-wishlist__view">
                    <a className="item-wishlist__img" href="/oneproduct">
                      <picture>
                        <source
                          media="(max-width: 600px)"
                          srcSet="./assets/img/products/parsley-600.webp"
                          type="image/webp"
                        />
                        <img
                          alt="Image"
                          src="./assets/img/products/parsley.webp"
                        />
                      </picture>
                    </a>
                    <a className="item-wishlist__prod-name" href="/oneproduct">
                      Green Capsicum
                    </a>
                  </div>
                  <div className="item-wishlist__prices">
                    <div className="item-wishlist__current-price">$12.00</div>
                    <div className="item-wishlist__old-price">$15.00</div>
                  </div>
                  <div className="item-wishlist__label-in-stock">
                    <span>In stock</span>
                  </div>
                  <div className="item-wishlist__btn">
                    <a data-fls-button="" href="#" className="button">
                      Add to Cart
                    </a>
                  </div>
                  <button
                    className="item-wishlist__delete item-wishlist__delete--icon-cross"
                    type="button"
                  ></button>
                </div>
                <div className="table-wishlist__item item-wishlist">
                  <div className="item-wishlist__view">
                    <a className="item-wishlist__img" href="/oneproduct">
                      <picture>
                        <source
                          media="(max-width: 600px)"
                          srcSet="./assets/img/products/parsley-600.webp"
                          type="image/webp"
                        />
                        <img
                          alt="Image"
                          src="./assets/img/products/parsley.webp"
                        />
                      </picture>
                    </a>
                    <div className="item-wishlist__prod-name">
                      Green Capsicum
                    </div>
                  </div>
                  <div className="item-wishlist__prices">
                    <div className="item-wishlist__current-price">$12.00</div>
                    <div className="item-wishlist__old-price">$15.00</div>
                  </div>
                  <div className="item-wishlist__label-in-stock">
                    <span>In stock</span>
                  </div>
                  <div className="item-wishlist__btn">
                    <a data-fls-button="" href="#" className="button">
                      Add to Cart
                    </a>
                  </div>
                  <button
                    className="item-wishlist__delete item-wishlist__delete--icon-cross"
                    type="button"
                  ></button>
                </div>
                <div className="table-wishlist__item item-wishlist">
                  <div className="item-wishlist__view">
                    <a className="item-wishlist__img" href="/oneproduct">
                      <picture>
                        <source
                          media="(max-width: 600px)"
                          srcSet="./assets/img/products/parsley-600.webp"
                          type="image/webp"
                        />
                        <img
                          alt="Image"
                          src="./assets/img/products/parsley.webp"
                        />
                      </picture>
                    </a>
                    <div className="item-wishlist__prod-name">
                      Green Capsicum
                    </div>
                  </div>
                  <div className="item-wishlist__prices">
                    <div className="item-wishlist__current-price">$12.00</div>
                    <div className="item-wishlist__old-price">$15.00</div>
                  </div>
                  <div className="item-wishlist__label-out-of-stock">
                    <span>Out of stock</span>
                  </div>
                  <div className="item-wishlist__btn">
                    <a
                      data-fls-button=""
                      href="#"
                      className="button button--out-of-stock"
                    >
                      Add to Cart
                    </a>
                  </div>
                  <button
                    className="item-wishlist__delete item-wishlist__delete--icon-cross"
                    type="button"
                  ></button>
                </div>
              </div>
              <div className="table-wishlist__social-links links-social">
                <div className="links-social__body">
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
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-instagram"
                        href="#"
                      ></a>
                    </li>
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-instagram"
                        href="#"
                      ></a>
                    </li>
                    <li className="links-social__item">
                      <a
                        className="links-social__link links-social__link--icon-instagram"
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
            </div>
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
                action="#"
                method="post"
                name="subscribe_form"
                accept-charset="UTF-8"
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
                    data-fls-button=""
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
      <div
        data-fls-popup="quick-view"
        aria-hidden="true"
        className="popup popup--quick-view"
      >
        <div data-fls-popup-wrapper="" className="popup__wrapper">
          <div data-fls-popup-body="" className="popup__body">
            <button
              data-fls-popup-close=""
              type="button"
              className="popup__close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.75 6.25L6.25 18.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.25 6.25L18.75 18.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div data-fls-popup-content="">
              <div className="oneproduct__top-area">
                <div className="oneproduct__body">
                  <div className="carousel">
                    <div className="carousel__images-popup">
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/deals/deals01-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/deals/deals01.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/hero/cheese-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/hero/cheese.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/coffee-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/coffee.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/nuts-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/nuts.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/fresh-fruits-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/fresh-fruits.webp"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__thumbs-popup">
                      <div className="swiper" data-fls-slider="">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/deals/deals01-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/deals/deals01.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/hero/cheese-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/hero/cheese.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/coffee-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/coffee.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/nuts-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/nuts.webp"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="carousel__image">
                              <picture>
                                <source
                                  media="(max-width: 600px)"
                                  srcSet="./assets/img/popular/fresh-fruits-600.webp"
                                  type="image/webp"
                                />
                                <img
                                  alt="Image"
                                  src="./assets/img/popular/fresh-fruits.webp"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel__prev carousel__prev--icon-shevron"
                        type="button"
                      ></button>
                      <button
                        className="carousel__next carousel__next--icon-shevron"
                        type="button"
                      ></button>
                    </div>
                  </div>
                </div>
                <div className="oneproduct__column">
                  <div className="oneproduct__details">
                    <div className="oneproduct__header">
                      <div className="oneproduct__caption">
                        <h1 className="oneproduct__title">Chinese Cabbage</h1>
                        <div className="oneproduct__label-in-stock">
                          In Stock
                        </div>
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
                        <div className="oneproduct__old-price">$48.00</div>
                        <div className="oneproduct__current-price">$19.99</div>
                        <div className="oneproduct__label-off">64% Off</div>
                      </div>
                    </div>
                    <div className="oneproduct__description description-oneproduct">
                      <div className="description-oneproduct__links">
                        <div className="description-oneproduct__brand-area area-brand">
                          <span>Brand:</span>
                          <a className="area-brand__image" href="#">
                            <img
                              src="./assets/img/oneproduct/brand.svg"
                              alt="Image"
                            />
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
                        className aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                        blandit vel consequat nec, ultrices et ipsum. Nulla
                        varius magna a consequat pulvinar.
                      </div>
                    </div>
                    <div className="oneproduct__user-activity">
                      <form
                        className="oneproduct__form"
                        action="#"
                        method="post"
                        name="oneproduct_quantity"
                        accept-charset="UTF-8"
                      >
                        <div className="oneproduct__actions">
                          <div
                            className="oneproduct__quantity quantity"
                            data-fls-quantity=""
                          >
                            <button
                              data-fls-quantity-minus=""
                              type="button"
                              className="quantity__button quantity__button--minus"
                            ></button>
                            <div className="quantity__input">
                              <input
                                data-fls-quantity-value=""
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                value="1"
                              />
                            </div>
                            <button
                              data-fls-quantity-plus=""
                              type="button"
                              className="quantity__button quantity__button--plus"
                            ></button>
                          </div>
                          <button
                            className="oneproduct__add-to-cart button button--icon-cart"
                            data-fls-addtocart-button=""
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
            </div>
          </div>
        </div>
      </div>
      <div
        data-fls-popup="popup-cart"
        aria-hidden="true"
        className="popup popup--cart"
      >
        <div data-fls-popup-wrapper="" className="popup__wrapper">
          <div data-fls-popup-body="" className="popup__body">
            <button
              data-fls-popup-close=""
              type="button"
              className="popup__close"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.850056"
                  d="M1.73333 1.48883L21.5469 21.0288"
                  stroke="#000000"
                  stroke-linecap="square"
                ></path>
                <path
                  opacity="0.850056"
                  d="M21.2667 1.48883L1.45309 21.0288"
                  stroke="#000000"
                  stroke-linecap="square"
                ></path>
              </svg>
            </button>
            <div data-fls-popup-content="" className="popup__text">
              <div className="popup__cart cart-popup">
                <div className="cart-popup__title">Shopping Card (2)</div>
                <div className="cart-popup__items">
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                  <div className="cart-popup__item item-cart-popup">
                    <div className="item-cart-popup__view">
                      <a className="item-cart-popup__img" href="/oneproduct">
                        <picture>
                          <source
                            media="(max-width: 600px)"
                            srcSet="./assets/img/products/parsley-600.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </a>
                      <div className="item-cart-popup__content">
                        <a
                          className="item-cart-popup__title"
                          href="/oneproduct"
                        >
                          Fresh Indian Orange
                        </a>
                        <div className="item-cart-popup__price">
                          1 x<span>14.00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="item-cart-popup__delete item-cart-popup__delete--icon-cross"
                      type="button"
                    ></button>
                  </div>
                </div>
                <div className="cart-popup__bottom">
                  <div className="cart-popup__total">
                    2 products
                    <span>$26.00</span>
                  </div>
                  <a className="button" href="/checkout">
                    Checkout
                  </a>
                  <a className="button button--light-green" href="/cart">
                    Go to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WishlistSection
