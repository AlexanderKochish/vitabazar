'use server'

const API_URL = process.env.WP_API_URL

export async function addToCart(productId: number, quantity = 1) {
  console.log({ args: { productId, quantity } })
  const response = await fetch(`${API_URL}/wp-json/cart/v1/add`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      product_id: String(productId),
      quantity: String(quantity),
    }),
  })

  if (!response.ok) {
    throw new Error('Add to cart failed')
  }

  return response.json()
}

export async function getCartCount(): Promise<number> {
  const res = await fetch(`${API_URL}/wp-json/cart/v1/count`, {
    credentials: 'include',
    cache: 'no-store',
  })

  const data = await res.json()
  console.log(data)
  return data.count ?? 0
}
