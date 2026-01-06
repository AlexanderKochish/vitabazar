// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { wooFetchWithPagination } from '@/shared/utils/wooFetch'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const params: Record<string, any> = {}

    // Преобразуем параметры
    if (searchParams.get('category')) {
      params.category = searchParams.get('category')
    }

    if (searchParams.get('min_price')) {
      params.min_price = parseFloat(searchParams.get('min_price')!)
    }

    if (searchParams.get('max_price')) {
      params.max_price = parseFloat(searchParams.get('max_price')!)
    }

    if (searchParams.get('sort')) {
      const sort = searchParams.get('sort')!
      switch (sort) {
        case 'popular':
          params.orderby = 'popularity'
          params.order = 'desc'
          break
        case 'price-asc':
          params.orderby = 'price'
          params.order = 'asc'
          break
        case 'price-desc':
          params.orderby = 'price'
          params.order = 'desc'
          break
        default:
          params.orderby = 'date'
          params.order = 'desc'
      }
    }

    if (searchParams.get('page')) {
      params.page = parseInt(searchParams.get('page')!)
    }

    if (searchParams.get('per_page')) {
      params.per_page = parseInt(searchParams.get('per_page')!)
    }

    const { data: products, headers } = await wooFetchWithPagination(
      'products',
      params
    )

    return NextResponse.json({
      products,
      pagination: {
        total: parseInt(headers['x-wp-total'] || '0'),
        totalPages: parseInt(headers['x-wp-totalpages'] || '1'),
        currentPage: params.page || 1,
        perPage: params.per_page || 12,
      },
    })
  } catch (error: any) {
    console.error('API route error:', error)

    return NextResponse.json(
      {
        error: 'Failed to fetch products',
        message: error.message,
      },
      { status: 500 }
    )
  }
}
