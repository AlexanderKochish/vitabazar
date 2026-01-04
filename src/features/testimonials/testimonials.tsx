import Image from 'next/image'
// import Rating from '@/components/Rating/Rating'
import styles from './testimonials.module.css'

const testimonials = [
  {
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    name: 'Dianne Russell',
    role: 'Customer',
    image: '/assets/img/testimonials/dianne-russell.webp',
    imageMobile: '/assets/img/testimonials/dianne-russell-150.webp',
    rating: 5,
  },
  // Add more testimonials...
]

export default function Testimonials() {
  return (
    <section className="page__testimonials testimonials">
      <div className="testimonials__container">
        <div className="testimonials__caption">
          <h2 data-fls-title="" className="title">
            Client Testimonials
          </h2>
          <div className="testimonials__slider-actions">
            <button
              aria-label="Slider previouse button"
              data-fls-sliderprevarrow=""
              className="slider-arrow slider-arrow--prev slider-arrow--icon-prev"
              type="button"
            ></button>
            <button
              aria-label="Slider next button"
              data-fls-slidernextarrow=""
              className="slider-arrow slider-arrow--next slider-arrow--icon-next"
              type="button"
            ></button>
          </div>
        </div>
        <div className="testimonials__swiper swiper" data-fls-slider="">
          <div className="swiper-wrapper">
            <div className="testimonials__slide slide-testimonials swiper-slide">
              <div className="slide-testimonials__text slide-testimonials__text--icon-quote">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </div>
              <div className="slide-testimonials__body body-testimonials">
                <div className="body-testimonials__author">
                  <figure className="body-testimonials__avatar">
                    <picture>
                      <source
                        media="(max-width: 150px)"
                        srcSet="
                              ./assets/img/testimonials/dianne-russell-150.webp
                            "
                        type="image/webp"
                      />
                      <img
                        alt="Dianne Russelle"
                        src="./assets/img/testimonials/dianne-russell.webp"
                      />
                    </picture>
                  </figure>
                  <div className="body-testimonials__body">
                    <div className="body-testimonials__name">
                      Dianne Russell
                    </div>
                    <div className="body-testimonials__type">Customer</div>
                  </div>
                </div>
                <div
                  data-fls-rating=""
                  data-fls-rating-value="5"
                  className="body-testimonials__rate rating rating--xxl"
                ></div>
              </div>
            </div>
            <div className="testimonials__slide slide-testimonials swiper-slide">
              <div className="slide-testimonials__text slide-testimonials__text--icon-quote">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus.
              </div>
              <div className="slide-testimonials__body body-testimonials">
                <div className="body-testimonials__author">
                  <figure className="body-testimonials__avatar">
                    <picture>
                      <source
                        media="(max-width: 150px)"
                        srcSet="
                              ./assets/img/testimonials/adel-sione-150.webp
                            "
                        type="image/webp"
                      />
                      <img
                        alt="Adel Sione"
                        src="./assets/img/testimonials/adel-sione.webp"
                      />
                    </picture>
                  </figure>
                  <div className="body-testimonials__body">
                    <div className="body-testimonials__name">Adel Sione</div>
                    <div className="body-testimonials__type">Customer</div>
                  </div>
                </div>
                <div
                  data-fls-rating=""
                  data-fls-rating-value="5"
                  className="body-testimonials__rate rating rating--xxl"
                ></div>
              </div>
            </div>
            <div className="testimonials__slide slide-testimonials swiper-slide">
              <div className="slide-testimonials__text slide-testimonials__text--icon-quote">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </div>
              <div className="slide-testimonials__body body-testimonials">
                <div className="body-testimonials__author">
                  <figure className="body-testimonials__avatar">
                    <picture>
                      <source
                        media="(max-width: 150px)"
                        srcSet="
                              ./assets/img/testimonials/eloisa-more-150.webp
                            "
                        type="image/webp"
                      />
                      <img
                        alt="Eloisa More"
                        src="./assets/img/testimonials/eloisa-more.webp"
                      />
                    </picture>
                  </figure>
                  <div className="body-testimonials__body">
                    <div className="body-testimonials__name">Eloisa More</div>
                    <div className="body-testimonials__type">Customer</div>
                  </div>
                </div>
                <div
                  data-fls-rating=""
                  data-fls-rating-value="5"
                  className="body-testimonials__rate rating rating--xxl"
                ></div>
              </div>
            </div>
            <div className="testimonials__slide slide-testimonials swiper-slide">
              <div className="slide-testimonials__text slide-testimonials__text--icon-quote">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </div>
              <div className="slide-testimonials__body body-testimonials">
                <div className="body-testimonials__author">
                  <figure className="body-testimonials__avatar">
                    <picture>
                      <source
                        media="(max-width: 150px)"
                        srcSet="
                              ./assets/img/testimonials/dianne-russell-150.webp
                            "
                        type="image/webp"
                      />
                      <img
                        alt="Dianne Russell"
                        src="./assets/img/testimonials/dianne-russell.webp"
                      />
                    </picture>
                  </figure>
                  <div className="body-testimonials__body">
                    <div className="body-testimonials__name">
                      Dianne Russell
                    </div>
                    <div className="body-testimonials__type">Customer</div>
                  </div>
                </div>
                <div
                  data-fls-rating=""
                  data-fls-rating-value="5"
                  className="body-testimonials__rate rating rating--xxl"
                ></div>
              </div>
            </div>
            <div className="testimonials__slide slide-testimonials swiper-slide">
              <div className="slide-testimonials__text slide-testimonials__text--icon-quote">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </div>
              <div className="slide-testimonials__body body-testimonials">
                <div className="body-testimonials__author">
                  <figure className="body-testimonials__avatar">
                    <picture>
                      <source
                        media="(max-width: 150px)"
                        srcSet="
                              ./assets/img/testimonials/adel-sione-150.webp
                            "
                        type="image/webp"
                      />
                      <img
                        alt="Adel Sione"
                        src="./assets/img/testimonials/adel-sione.webp"
                      />
                    </picture>
                  </figure>
                  <div className="body-testimonials__body">
                    <div className="body-testimonials__name">Adel Sione</div>
                    <div className="body-testimonials__type">Customer</div>
                  </div>
                </div>
                <div
                  data-fls-rating=""
                  data-fls-rating-value="5"
                  className="body-testimonials__rate rating rating--xxl"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
