import React from 'react'

const LatestNews = () => {
  return (
    <section className="page__news latest-news">
      <div className="latest-news__container">
        <h2 data-fls-title="" className="title title--center">
          Latest News
        </h2>
        <div className="latest-news__items">
          <article className="latest-news__item item-latest-news">
            <a className="item-latest-news__img-wrap">
              <picture>
                <img alt="Image" src="./assets/img/news.webp" />
              </picture>
              <time dateTime="2025-18-01" className="item-latest-news__date">
                18
                <span>nov</span>
              </time>
            </a>
            <div className="item-latest-news__body">
              <ul className="item-latest-news__list list-news">
                <li className="list-news__item list-news__item--icon-label">
                  <a href="#">Food</a>
                </li>
                <li className="list-news__item list-news__item--icon-user">
                  <a href="#">By admin</a>
                </li>
                <li className="list-news__item list-news__item--icon-comment">
                  <a href="#">65 comments</a>
                </li>
              </ul>
              <h3 className="item-latest-news__title">
                <a href="#">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </a>
              </h3>
              <a
                data-fls-viewall=""
                href="#"
                className="more-link more-link--icon-next"
              >
                Read more
              </a>
            </div>
          </article>
          <article className="latest-news__item item-latest-news">
            <a className="item-latest-news__img-wrap">
              <picture>
                <img alt="Image" src="./assets/img/news.webp" />
              </picture>
              <time dateTime="2025-21-02" className="item-latest-news__date">
                21
                <span>feb</span>
              </time>
            </a>
            <div className="item-latest-news__body">
              <ul className="item-latest-news__list list-news">
                <li className="list-news__item list-news__item--icon-label">
                  <a href="#">Food</a>
                </li>
                <li className="list-news__item list-news__item--icon-user">
                  <a href="#">By admin</a>
                </li>
                <li className="list-news__item list-news__item--icon-comment">
                  <a href="#">65 comments</a>
                </li>
              </ul>
              <h3 className="item-latest-news__title">
                <a href="#">
                  Eget lobortis lorem lacinia. Vivamus pharetra semper.
                </a>
              </h3>
              <a
                data-fls-viewall=""
                href="#"
                className="more-link more-link--icon-next"
              >
                Read more
              </a>
            </div>
          </article>
          <article className="latest-news__item item-latest-news">
            <a className="item-latest-news__img-wrap" href="#">
              <picture>
                <img alt="Image" src="./assets/img/news.webp" />
              </picture>
              <time dateTime="2025-29-01" className="item-latest-news__date">
                29
                <span>jan</span>
              </time>
            </a>
            <div className="item-latest-news__body">
              <ul className="item-latest-news__list list-news">
                <li className="list-news__item list-news__item--icon-label">
                  <a href="#">Food</a>
                </li>
                <li className="list-news__item list-news__item--icon-user">
                  <a href="#">By admin</a>
                </li>
                <li className="list-news__item list-news__item--icon-comment">
                  <a href="#">65 comments</a>
                </li>
              </ul>
              <h3 className="item-latest-news__title">
                <a href="#">
                  Maecenas blandit risus elementum mauris malesuada. Maecenas
                  blandit risus elementum mauri Maecenas blandit risus elementum
                  mauris malesuada.
                </a>
              </h3>
              <a
                data-fls-viewall=""
                href="#"
                className="more-link more-link--icon-next"
              >
                Read more
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
