/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    unoptimized: true, // Отключаем оптимизацию для статического экспорта
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'littlebarista.ru',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'littlebarista.ru',
        port: '',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  output: 'export',
  ...(isProd
    ? {
        poweredByHeader: false,
      }
    : {
        poweredByHeader: false,
      }),
}

module.exports = nextConfig 