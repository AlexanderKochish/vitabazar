import Image from 'next/image'
import Link from 'next/link'
import { fetchCategories } from '../../actions/actions'

export default async function PopularCategories() {
  const categories = await fetchCategories()

  return (
    <section className="page__popular-cat cat-popular">
      <div className="cat-popular__container">
        <div className="caption-box" data-fls-caption="">
          <h2 className="title" data-fls-title="">
            Popular Categories
          </h2>
          <a
            data-fls-viewall=""
            href="#"
            className="more-link more-link--icon-next"
          >
            View all
          </a>
        </div>
        <ul className="cat-popular__items">
          {categories && categories.length > 0
            ? categories.map((cat) => (
                <li key={cat.id} className="cat-popular__item item-popular">
                  <Link href="#">
                    <div className="item-popular__image-wrap">
                      {cat.image && (
                        <Image
                          src={cat.image.src}
                          alt={cat.image.alt}
                          className="item-popular__image"
                          width={300}
                          height={300}
                          unoptimized
                        />
                      )}
                    </div>
                    <h3 className="item-popular__title">{cat.name}</h3>
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </section>
  )
}
