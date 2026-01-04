import Image from 'next/image'
import Link from 'next/link'
// import Countdown from '@/components/Countdown/Countdown'
import styles from './deals.module.css'

const deals = [
  {
    type: 'countdown',
    label: 'Best Deals',
    title: 'Sale of the Month',
    image: '/assets/img/deals/deals01.webp',
    imageMobile: '/assets/img/deals/deals01-600.webp',
    targetDate: '2025-09-29',
    link: '#',
  },
  {
    type: 'price',
    label: 'Rich & Creamy',
    title: '70% Cocoa',
    image: '/assets/img/deals/deals02.webp',
    imageMobile: '/assets/img/deals/deals02-600.webp',
    price: 7.99,
    link: '#',
  },
  {
    type: 'discount',
    label: 'Feel summer',
    title: '100% Fresh Fruit',
    image: '/assets/img/deals/deals03.webp',
    imageMobile: '/assets/img/deals/deals03-600.webp',
    discount: 64,
    darkColor: true,
    link: '#',
  },
]

export default function Deals() {
  return (
    <section className="page__deals deals">
      <div className="deals__container">
        <div className="deals__items">
          <a className="deals__item item-deals" href="#">
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="./assets/img/deals/deals01-600.webp"
                type="image/webp"
              />
              <img
                className="item-deals__image"
                alt="Image"
                src="./assets/img/deals/deals01.webp"
              />
            </picture>
            <div className="item-deals__body">
              <div className="item-deals__label">Best Deals</div>
              <h4 className="item-deals__title">Sale of the Month</h4>

              <div
                className="countdown"
                data-target="2025-09-29"
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
              <div
                data-fls-button=""
                className="button button--light button--icon-next"
              >
                Shop now
              </div>
            </div>
          </a>
          <a className="deals__item item-deals" href="#">
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="./assets/img/deals/deals02-600.webp"
                type="image/webp"
              />
              <img
                className="item-deals__image"
                alt="Image"
                src="./assets/img/deals/deals02.webp"
              />
            </picture>
            <div className="item-deals__body">
              <div className="item-deals__label">Rich & Creamy</div>
              <h4 className="item-deals__title">70% Cocoa</h4>
              <div className="item-deals__started">
                Started at
                <span>7.99$</span>
              </div>
              <div
                data-fls-button=""
                className="button button--light button--icon-next"
              >
                Shop now
              </div>
            </div>
          </a>
          <a className="deals__item item-deals item-deals--dark-color" href="#">
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="./assets/img/deals/deals03-600.webp"
                type="image/webp"
              />
              <img
                className="item-deals__image"
                alt="Image"
                src="./assets/img/deals/deals03.webp"
              />
            </picture>
            <div className="item-deals__body">
              <div className="item-deals__label">Feel summer</div>
              <h4 className="item-deals__title">100% Fresh Fruith</h4>
              <div className="item-deals__upto">
                Up to
                <span>64% OFF</span>
              </div>
              <div
                data-fls-button=""
                className="button button--light button--icon-next"
              >
                Shop now
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
