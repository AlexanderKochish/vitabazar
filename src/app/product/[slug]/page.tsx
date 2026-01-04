import { getProductBySlug } from '@/features/product/actions/actions'
import ProductDetailsTabs from '@/features/product/components/product-details-tabs/product-details-tabs'
import ProductDetails from '@/features/product/product-details/product-details'
import Breadcrumb from '@/shared/components/breadcrumb/breadcrumb'
import React from 'react'

interface Props {
  params: Promise<{ slug: string }>
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return <p>Product with slug: ${slug} not found</p>
  }
  return (
    <main className="page page--oneproduct">
      <div className="page__oneproduct oneproduct">
        <Breadcrumb
          items={[
            { label: product.categories[0].name, href: '/category' },
            { label: product.name },
          ]}
        />
        <ProductDetails product={product} />
        <ProductDetailsTabs />
      </div>
    </main>
  )
}

export default ProductPage
