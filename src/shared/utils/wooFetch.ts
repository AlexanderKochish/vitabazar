import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const API_URL = process.env.WP_API_URL || 'http://localhost:8081'
const CONSUMER_KEY =
  process.env.WC_CONSUMER_KEY || 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
const CONSUMER_SECRET =
  process.env.WC_CONSUMER_SECRET ||
  'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

export const api = new WooCommerceRestApi({
  url: API_URL,
  consumerKey: CONSUMER_KEY,
  consumerSecret: CONSUMER_SECRET,
  version: 'wc/v3',
})

export async function wooFetch<T>(endpoint: string, params = {}): Promise<T> {
  try {
    const response = await api.get(endpoint, params)
    return response.data
  } catch (error) {
    console.error('WooFetch Error:', error)
    throw error
  }
}
