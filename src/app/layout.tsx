import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/widgets/header/header'
import Footer from '@/widgets/footer/footer'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import QueryProvider from '@/providers/query-provider/query-provider'

export const metadata: Metadata = {
  title: 'Home Page',

  icons: {
    icon: '/img/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body>
        <Script
          src="/js/app.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          type="module"
        />
        <Script
          src="/js/oneproduct.min2.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          type="module"
        />
        <Script
          src="/js/index.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          type="module"
        />
        <QueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <div className="wrapper">
              <main className="page page--home">{children}</main>
            </div>
            <Footer />
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  )
}
