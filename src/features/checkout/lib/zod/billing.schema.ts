import { z } from 'zod'

export const billingSchema = z.object({
  user_name: z.string(),
  user_last_name: z.string(),
  user_company: z.string(),
  user_address: z.string(),
  user_country: z.string(),
  user_states: z.string(),
  user_zipcode: z.string(),
  user_email: z.string(),
  user_tel: z.string(),
  user_dif_address: z.boolean(),
  user_notes: z.string().max(500).optional(),

  payment_method: z.enum(['cash', 'paypal', 'amazon']),
})

export type billingSchemaType = z.infer<typeof billingSchema>
