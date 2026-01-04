import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8081',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  reactCompiler: true,
}

export default nextConfig
