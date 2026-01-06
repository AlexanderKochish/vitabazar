import { billingSchemaType } from '../lib/zod/billing.schema'

export interface CheckoutPayload {
  billing: billingSchemaType
  items: {
    product_id: number
    quantity: number
  }[]
  total: number
}
