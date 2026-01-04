import { fetchProducts } from '../../actions/actions'
import ProductItem from '../product-item/product-item'
import styles from './products-section.module.css'

interface ProductsSectionProps {
  title?: string
  viewAllLink?: string
  products?: unknown[]
  isHotDeals?: boolean
}

export default async function ProductsSection({
  title,
  viewAllLink,
  isHotDeals = false,
}: ProductsSectionProps) {
  const products = await fetchProducts()
  console.log('Fetched products:', products)
  return (
    <section className="page__popular-prod prod-popular">
      <div className="prod-popular__container">
        <div className="caption-box" data-fls-caption="">
          <h2 className="title" data-fls-title="">
            Popular Products
          </h2>
          <a
            data-fls-viewall=""
            href="#"
            className="more-link more-link--icon-next"
          >
            View all
          </a>
        </div>
        {products && products.length > 0 ? (
          <div className="prod-popular__items">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
