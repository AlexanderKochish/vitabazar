'use server'

import { CheckoutPayload } from '../types/types'

export const checkoutFetch = async (payload: CheckoutPayload) => {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (!res.ok) {
      console.error(result)
      return
    }

    console.log('ORDER CREATED:', result)
  } catch (error) {
    console.log(error instanceof Error ? error.message : 'Unknow error')
    throw error
  }
}
