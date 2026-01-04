import React from 'react'

const PartnersSection = () => {
  return (
    <div className="page__partners partners">
      <div className="partners__container">
        <div
          className="partners__body"
          data-fls-marquee=""
          data-fls-marquee-space="0"
          data-fls-marquee-speed="300"
          data-fls-marquee-pause=""
        >
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/01.svg" alt="Image" />
          </a>
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/02.svg" alt="Image" />
          </a>
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/03.svg" alt="Image" />
          </a>
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/04.svg" alt="Image" />
          </a>
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/05.svg" alt="Image" />
          </a>
          <a href="#" className="partners__link">
            <img src="./assets/img/partners/06.svg" alt="Image" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
