import React from 'react'

const Subscribe = () => {
  return (
    <aside className="subcribe" data-fls-subcribe="">
      <div className="subcribe__container">
        <div className="subcribe__body">
          <div className="subcribe__content">
            <div className="subcribe__label">Subcribe our Newsletter</div>
            <div className="subcribe__text">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className="subcribe__form-wrap">
            <form
              action="#"
              method="post"
              name="subscribe_form"
              acceptCharset="UTF-8"
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
  )
}

export default Subscribe
