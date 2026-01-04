export default function Hero() {
  return (
    <section className="page__hero hero">
      <div className="hero__container">
        <div className="hero__body">
          <div className="hero__contant">
            <h1 className="hero__title">Fresh & Healthy Organic Food</h1>
            <div className="hero__info">
              <div className="hero__subtitle">
                Sale up to
                <span>30% off</span>
              </div>
              <div className="hero__text">Free shipping on all your order.</div>
            </div>
            <a href="#" className="button button--light button--icon-next">
              Shop now
            </a>
          </div>
          <video
            className="hero__video"
            autoPlay
            muted
            playsInline
            width="872"
            height="600"
            poster="./assets/img/hero/hero-bg.jpg"
          >
            <source src="./assets/img/hero/bg-video.webm" type="video/webm" />
          </video>
        </div>
        <div className="hero__items">
          <article className="hero__item item-hero">
            <div className="item-hero__label">Winter Sale</div>
            <div className="item-hero__value">75% OFF</div>
            <h2 className="item-hero__title">
              Chocolate, coffee
              <br />& tea only
            </h2>
            <a
              data-fls-viewall=""
              href="#"
              className="more-link more-link--icon-next"
            >
              Shop now
            </a>
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="./assets/img/hero/75-off-600.webp"
                type="image/webp"
              />
              <img alt="Image" src="./assets/img/hero/75-off.webp" />
            </picture>
          </article>
          <article className="hero__item item-hero item-hero--overlay">
            <div className="item-hero__label">Best Deal</div>
            <h2 className="item-hero__title">
              Special Products
              <br />
              Deal of the Month
            </h2>
            <a
              data-fls-viewall=""
              href="#"
              className="more-link more-link--icon-next"
            >
              Shop now
            </a>
            <picture>
              <source
                media="(max-width: 600px)"
                srcSet="./assets/img/hero/cheese-600.webp"
                type="image/webp"
              />
              <img alt="Image" src="./assets/img/hero/cheese.webp" />
            </picture>
          </article>
        </div>
      </div>
    </section>
  )
}
