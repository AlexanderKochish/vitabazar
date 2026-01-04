'use client'
import React, { useState } from 'react'

type Tabs = 'descriptions' | 'additional-information' | 'customer-feedback'

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('descriptions')
  return (
    <div data-fls-tabs="" className="oneproduct__tabs tabs">
      <nav data-fls-tabs-titles="" className="tabs__navigation">
        <button
          onClick={() => setActiveTab('descriptions')}
          type="button"
          className={`tabs__title ${activeTab === 'descriptions' ? '--tab-active' : ''}`}
        >
          Descriptions
        </button>
        <button
          onClick={() => setActiveTab('additional-information')}
          type="button"
          className={`tabs__title ${activeTab === 'additional-information' ? '--tab-active' : ''}`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab('customer-feedback')}
          type="button"
          className={`tabs__title ${activeTab === 'customer-feedback' ? '--tab-active' : ''}`}
        >
          Customer Feedback
        </button>
      </nav>
      <div className="tabs__container">
        <div data-fls-tabs-body="" className="tabs__content">
          <div className="tabs__body">
            {activeTab === 'descriptions' && (
              <div className="description-tab">
                <div className="description-tab__text">
                  <p>
                    Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                    imperdiet at posuere ac, viverra at mauris. Maecenas
                    tincidunt ligula a sem vestibulum pharetra. Maecenas auctor
                    tortor lacus, nec laoreet nisi porttitor vel. Etiam
                    tincidunt metus vel dui interdum sollicitudin. Mauris sem
                    ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
                    et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
                    scelerisque vitae justo a convallis. Morbi urna ipsum,
                    placerat quis commodo quis, egestas elementum leo. Donec
                    convallis mollis enim. Aliquam id mi quam. Phasellus nec
                    fringilla elit.
                  </p>
                  <p>
                    Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                    dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                    mi viverra velit, pellentesque tristique neque mi eget
                    nulla. Proin luctus elementum neque et pharetra.
                  </p>
                  <ul>
                    <li>100 g of fresh leaves provides.</li>
                    <li>Aliquam ac est at augue volutpat elementum.</li>
                    <li>Quisque nec enim eget sapien molestie.</li>
                    <li>Proin convallis odio volutpat finibus posuere.</li>
                  </ul>
                  <p>
                    Cras et diam maximus, accumsan sapien et, sollicitudin
                    velit. Nulla blandit eros non turpis lobortis iaculis at ut
                    massa.
                  </p>
                </div>
                <div className="description-tab__video video-tab">
                  <div className="video-tab__body">
                    <div className="video-tab__film">
                      <video
                        muted
                        //   playsinline=""
                        controls
                        poster="/public/assets/img/oneproduct/video.jpeg"
                        className="video-tab__video"
                      >
                        <source
                          src="/public/assets/img/oneproduct/tab-video.webm"
                          type="video/webm"
                        />
                      </video>
                      <button
                        className="video-tab__play-btn"
                        aria-label="Play video"
                      ></button>
                    </div>
                    <div className="video-tab__items">
                      <div className="video-tab__item">
                        <div className="video-tab__icon">
                          <img
                            src="/public/assets/img/oneproduct/tab-icon_01.svg"
                            alt="Image"
                          />
                        </div>
                        <div className="video-tab__text">
                          <span>64% Discount</span>
                          Save your 64% money with us
                        </div>
                      </div>
                      <div className="video-tab__item">
                        <div className="video-tab__icon">
                          <img
                            src="/public/assets/img/oneproduct/tab-icon_02.svg"
                            alt="Image"
                          />
                        </div>
                        <div className="video-tab__text">
                          <span>100% Organic</span>
                          100% Organic Vegetables
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="tabs__body">
            {activeTab === 'additional-information' && (
              <div className="additional-tab">
                <div className="product-info">
                  <div className="product-info__card">
                    <div className="product-info__label">Weight: yesy yetg</div>
                    <div className="product-info__value">0.3</div>
                  </div>
                  <div className="product-info__card">
                    <div className="product-info__label">Color:</div>
                    <div className="product-info__value">Green</div>
                  </div>
                  <div className="product-info__card">
                    <div className="product-info__label">Type:</div>
                    <div className="product-info__value">Organic</div>
                  </div>
                  <div className="product-info__card">
                    <div className="product-info__label">Category:</div>
                    <div className="product-info__value">Vegetables</div>
                  </div>
                  <div className="product-info__card">
                    <div className="product-info__label">Stock Status:</div>
                    <div className="product-info__value">
                      Available
                      <span>(5,413)</span>
                    </div>
                  </div>
                  <div className="product-info__card">
                    <div className="product-info__label">Tags:</div>
                    <ul className="product-info__list">
                      <li className="product-info__item">
                        <a href="#" className="product-info__link">
                          Vegetables,
                        </a>
                      </li>
                      <li className="product-info__item">
                        <a href="#" className="product-info__link">
                          Green,
                        </a>
                      </li>
                      <li className="product-info__item --active">
                        <a href="#" className="product-info__link">
                          Healthy,
                        </a>
                      </li>
                      <li className="product-info__item">
                        <a href="#" className="product-info__link">
                          Cabbage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="additional-tab__video video-tab">
                  <div className="video-tab__body">
                    <div className="video-tab__film">
                      <video
                        muted
                        // playsInline=""
                        controls
                        poster="/public/assets/img/oneproduct/video.jpeg"
                        className="video-tab__video"
                      >
                        <source
                          src="/public/assets/img/oneproduct/tab-video.webm"
                          type="video/webm"
                        />
                      </video>
                      <button
                        className="video-tab__play-btn"
                        aria-label="Play video"
                      ></button>
                    </div>
                    <div className="video-tab__items">
                      <div className="video-tab__item">
                        <div className="video-tab__icon">
                          <img
                            src="/public/assets/img/oneproduct/tab-icon_01.svg"
                            alt="Image"
                          />
                        </div>
                        <div className="video-tab__text">
                          <span>64% Discount</span>
                          Save your 64% money with us
                        </div>
                      </div>
                      <div className="video-tab__item">
                        <div className="video-tab__icon">
                          <img
                            src="/public/assets/img/oneproduct/tab-icon_02.svg"
                            alt="Image"
                          />
                        </div>
                        <div className="video-tab__text">
                          <span>100% Organic</span>
                          100% Organic Vegetables
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="tabs__body" data-fls-showmore="">
            {activeTab === 'customer-feedback' && (
              <div className="feefback-tab">
                <div
                  className="feefback-tab__items"
                  data-fls-showmore-content=""
                >
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/kristin-watson.jpeg"
                            alt="Kristin Watson"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Kristin Watson
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="5"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-09-29">2 min ago</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Duis at ullamcorper nulla, eu dictum eros.
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/jane-cooper.jpeg"
                            alt="Jane Cooper"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Jane Cooper
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-09-29">50 min ago</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Keep the soil evenly moist for the healthiest growth. If
                      the sun gets too hot, Chinese cabbage tends to
                      &quot;bolt&quot; or go to seed; in long periods of heat,
                      some kind of shade may be helpful. Watch out for snails,
                      as they will harm the plants.
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/blank_avatar.svg"
                            alt="Jacob Jones"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Jacob Jones
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="5"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-04-30">30 Apr, 2025</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Vivamus eget euismod magna. Nam sed lacinia nibh, et
                      lacinia lacus.
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/jane-cooper.jpeg"
                            alt="Jane Cooper"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Jane Cooper
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-09-29">50 min ago</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Keep the soil evenly moist for the healthiest growth. If
                      the sun gets too hot, Chinese cabbage tends to
                      &quot;bolt&quot; or go to seed; in long periods of heat,
                      some kind of shade may be helpful. Watch out for snails,
                      as they will harm the plants.
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/blank_avatar.svg"
                            alt="Jacob Jones"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Jacob Jones
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="5"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-04-30">30 Apr, 2025</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Vivamus eget euismod magna. Nam sed lacinia nibh, et
                      lacinia lacus.
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/kristin-watson.jpeg"
                            alt="Kristin Watson"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Kristin Watson
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="5"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-09-29">2 min ago</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds
                      Heirloom Non-GMO Productive Brassica rapa VAR. chinensis,
                      a.k.a. Canton&apos;s Choice, Bok Choi, from USA
                    </div>
                  </div>
                  <div className="feefback-tab__item item-tab-feefback">
                    <div className="item-tab-feefback__header">
                      <div className="item-tab-feefback__body">
                        <div className="item-tab-feefback__user-avatar">
                          <img
                            src="assets/img/oneproduct/feedback/jane-cooper.jpeg"
                            alt="Jane Cooper"
                          />
                        </div>
                        <div className="item-tab-feefback__inner">
                          <div className="item-tab-feefback__user-name">
                            Jane Cooper
                          </div>
                          <div
                            data-fls-rating=""
                            data-fls-rating-value="4"
                            className="item-tab-feefback__user-product-rate rating rating--xl"
                          ></div>
                        </div>
                      </div>
                      <time dateTime="2025-09-29">50 min ago</time>
                    </div>
                    <div className="item-tab-feefback__text">
                      Keep the soil evenly moist for the healthiest growth. If
                      the sun gets too hot, Chinese cabbage tends to
                      &quot;bolt&quot; or go to seed; in long periods of heat,
                      some kind of shade may be helpful. Watch out for snails,
                      as they will harm the plants.
                    </div>
                  </div>
                </div>
                <button
                  className="feefback-tab__more-btn"
                  type="button"
                  hidden
                  data-fls-showmore-button=""
                >
                  <span>Show more</span>
                  <span>Show less</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsTabs
