'use client'
import Breadcrumb from '@/shared/components/breadcrumb/breadcrumb'
import { getCategoryName } from '@/shared/utils/get-category-name'
import Subscribe from '@/widgets/subscribe/subscribe'
import { CategoryFilter } from '../category-filter/category-filter'
import { PriceFilter } from '../price-filter/price-filter'
import { RatingFilter } from '../rating-filter/rating-filter'
import { TagsFilter } from '../tags-filter/tags-filter'
import { ProductsGrid } from '@/features/product/components/products-grid/products-grid'
import { useProducts } from '@/features/product/hooks/use-products'

interface Props {
  slug: string[]
  currentCategory: string | null
  filters?: {
    price: string | undefined
    brand: string | undefined
    sort: string
  }
}

const CategorySection = ({ currentCategory, filters }: Props) => {
  const { data: productsData } = useProducts({
    category: currentCategory,
    searchParams: {
      ...filters,
    },
  })
  return (
    <main className="page page--category">
      <Breadcrumb
        items={[
          { label: 'Categories', href: '/category' },
          ...(currentCategory
            ? [
                {
                  label: getCategoryName(currentCategory),
                  href: `/category/${currentCategory}`,
                },
              ]
            : []),
        ]}
      />

      <div className="page__category category">
        <form method="post" name="category-filter-form" acceptCharset="UTF-8">
          <div className="category__container">
            <div className="category__header header-cat">
              <div
                className="header-cat__actions"
                data-fls-dynamic=".header-cat__body, 767,98"
              >
                <button
                  className="button button--icon-filter"
                  type="button"
                  data-fls-button=""
                >
                  Filter
                </button>
              </div>
              <div className="header-cat__body">
                <div className="header-cat__sort-condition">
                  <div className="header-cat__label">Sort by:</div>
                  <select
                    className="header-cat__select"
                    id="sort-by"
                    name="sort-by"
                    data-fls-select=""
                    data-fls-select-modif="form"
                  >
                    <option value="latest" selected>
                      Latest
                    </option>
                    <option value="newest">Newest</option>
                    <option value="popular">Popular</option>
                    <option value="discounted">Discounted</option>
                  </select>
                </div>
                <div className="header-cat__sort-rez-quantity">
                  <span>({productsData?.products.length})</span>
                  Results Found
                </div>
              </div>
            </div>
            <div className="category__inner inner-cat">
              <aside className="inner-cat__filter filter" data-fls-spollers="">
                <CategoryFilter currentCategory={currentCategory} />
                <PriceFilter maxPrice={1000} minPrice={0} />
                <RatingFilter />
                <TagsFilter />
                <div className="filter__item banner-filter">
                  <picture>
                    <img alt="Image" src="./assets/img/filter/banner.webp" />
                  </picture>
                  <div className="banner-filter__body">
                    <div className="banner-filter__label">
                      <span>79%</span>
                      Discount
                    </div>
                    <div className="banner-filter__text">
                      on your first order
                    </div>
                    <a
                      data-fls-viewall=""
                      href="#"
                      className="more-link more-link--icon-next"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
                <div className="filter__item">
                  <h2 className="filter__label">Sale Products</h2>
                  <div className="filter__sale-items">
                    <a
                      className="product-item product-item--small"
                      data-fls-product=""
                      href="#"
                    >
                      <div className="product-item__image-wrap">
                        <picture>
                          <source
                            media="(max-width: 200px)"
                            srcSet="./assets/img/products/parsley-200.webp"
                            type="image/webp"
                          />
                          <source
                            media="(max-width: 150px)"
                            srcSet="./assets/img/products/parsley- 150.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </div>
                      <div className="product-item__body">
                        <div className="product-item__content">
                          <h3 className="product-item__title">
                            Parslay Lorem ipsum
                          </h3>
                          <div className="product-item__prices">
                            <div className="product-item__current-price">
                              $13.00
                            </div>
                            <div className="product-item__old-price">
                              $16.00
                            </div>
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="product-item__rate rating"
                          ></div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="product-item product-item--small"
                      data-fls-product=""
                      href="#"
                    >
                      <div className="product-item__image-wrap">
                        <picture>
                          <source
                            media="(max-width: 200px)"
                            srcSet="./assets/img/products/parsley-200.webp"
                            type="image/webp"
                          />
                          <source
                            media="(max-width: 150px)"
                            srcSet="./assets/img/products/parsley- 150.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </div>
                      <div className="product-item__body">
                        <div className="product-item__content">
                          <h3 className="product-item__title">Parslay</h3>
                          <div className="product-item__prices">
                            <div className="product-item__current-price">
                              $13.00
                            </div>
                            <div className="product-item__old-price">
                              $16.00
                            </div>
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="product-item__rate rating"
                          ></div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="product-item product-item--small"
                      data-fls-product=""
                      href="#"
                    >
                      <div className="product-item__image-wrap">
                        <picture>
                          <source
                            media="(max-width: 200px)"
                            srcSet="./assets/img/products/parsley-200.webp"
                            type="image/webp"
                          />
                          <source
                            media="(max-width: 150px)"
                            srcSet="./assets/img/products/parsley- 150.webp"
                            type="image/webp"
                          />
                          <img
                            alt="Image"
                            src="./assets/img/products/parsley.webp"
                          />
                        </picture>
                      </div>
                      <div className="product-item__body">
                        <div className="product-item__content">
                          <h3 className="product-item__title">Parslay</h3>
                          <div className="product-item__prices">
                            <div className="product-item__current-price">
                              $13.00
                            </div>
                            <div className="product-item__old-price">
                              $16.00
                            </div>
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="product-item__rate rating"
                          ></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </aside>
              <ProductsGrid category={currentCategory} filters={filters} />
            </div>
          </div>
        </form>
      </div>
      <Subscribe />
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.25 6.25L18.75 18.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeLinecap="square"
                ></path>
                <path
                  opacity="0.850056"
                  d="M21.2667 1.48883L1.45309 21.0288"
                  stroke="#000000"
                  strokeLinecap="square"
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

export default CategorySection
