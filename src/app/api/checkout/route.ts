import { CartProduct, WooProduct } from '@/features/product/types/types'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const orderPayload = {
      payment_method: body.billing.payment_method,
      payment_method_title:
        body.billing.payment_method === 'cash'
          ? 'Cash on Delivery'
          : body.billing.payment_method,
      set_paid: false,

      billing: {
        first_name: body.billing.user_name,
        last_name: body.billing.user_last_name,
        company: body.billing.user_company,
        address_1: body.billing.user_address,
        city: body.billing.user_states,
        postcode: body.billing.user_zipcode,
        country: body.billing.user_country,
        email: body.billing.user_email,
        phone: body.billing.user_tel,
      },

      line_items: body.items.map((item: any) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    }

    const res = await fetch(`${process.env.WP_API_URL}/wp-json/wc/v3/orders`, {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`
          ).toString('base64'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderPayload),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Checkout error' }, { status: 500 })
  }
}
