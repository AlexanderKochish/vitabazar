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

export async function wooFetch<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  try {
    const cleanEndpoint = endpoint.startsWith('/')
      ? endpoint.slice(1)
      : endpoint

    const response = await api.get(cleanEndpoint, params)
    console.log(response)
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      console.error('WooFetch Error:', {
        endpoint,
        params,
        message: error.message,
        status: error.cause,
      })
      throw new Error(`Failed to fetch from WooCommerce: ${error.message}`)
    } else {
      throw new Error('Unknow error')
    }
  }
}

export async function wooFetchWithPagination<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<{
  data: T
  headers: Record<string, string>
}> {
  try {
    const cleanEndpoint = endpoint.startsWith('/')
      ? endpoint.slice(1)
      : endpoint

    const response = await api.get(cleanEndpoint, {
      ...params,

      per_page: params.per_page || 12,
      page: params.page || 1,
    })

    return {
      data: response.data,
      headers: response.headers,
    }
  } catch (error) {
    console.error(
      'WooFetch with pagination error:',
      error instanceof Error ? error.message : 'Unknow error'
    )
    throw error
  }
}
