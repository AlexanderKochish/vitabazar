export default class CategoryRepository {
  apiUrl: string = process.env.WP_API_URL || ''

  async getCategories() {
    const response = await fetch(this.apiUrl)
    const data = await response.json()
    return data
  }
}
