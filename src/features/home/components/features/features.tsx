import Image from 'next/image'
import styles from './features.module.css'

const features = [
  {
    icon: '/assets/img/features/01.svg',
    title: 'Free Shipping',
    text: 'Free shipping on all your order',
  },
  {
    icon: '/assets/img/features/02.svg',
    title: 'Customer Support 24/7',
    text: 'Instant access to Support',
  },
  {
    icon: '/assets/img/features/03.svg',
    title: '100% Secure Payment',
    text: 'We ensure your money is save',
  },
  {
    icon: '/assets/img/features/04.svg',
    title: 'Money-Back Guarantee',
    text: '30 Days Money-Back Guarantee',
  },
]

export default function Features() {
  return (
    <div className="page__features features">
      <div className="features__container">
        <div className="features__items">
          <div className="features__item item-features">
            <div className="item-features__icon">
              <img src="./assets/img/features/01.svg" alt="Image" />
            </div>
            <div className="item-features__body">
              <div className="item-features__title">Free Shipping</div>
              <div className="item-features__text">
                Free shipping on all your order
              </div>
            </div>
          </div>
          <div className="features__item item-features">
            <div className="item-features__icon">
              <img src="./assets/img/features/02.svg" alt="Image" />
            </div>
            <div className="item-features__body">
              <div className="item-features__title">Customer Support 24/7</div>
              <div className="item-features__text">
                Instant access to Support
              </div>
            </div>
          </div>
          <div className="features__item item-features">
            <div className="item-features__icon">
              <img src="./assets/img/features/03.svg" alt="Image" />
            </div>
            <div className="item-features__body">
              <div className="item-features__title">100% Secure Payment</div>
              <div className="item-features__text">
                We ensure your money is save
              </div>
            </div>
          </div>
          <div className="features__item item-features">
            <div className="item-features__icon">
              <img src="./assets/img/features/04.svg" alt="Image" />
            </div>
            <div className="item-features__body">
              <div className="item-features__title">Money-Back Guarantee</div>
              <div className="item-features__text">
                30 Days Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
