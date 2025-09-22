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
  // В dev используем стандартные настройки (.next),
  // а для прод-экспорта включаем output: 'export' и distDir: 'out'
  ...(isProd
    ? {
        // Headers не поддерживаются в статическом экспорте
        // Кэширование будет настроено на уровне CDN/hosting
        output: 'export',
        trailingSlash: true,
        // Настройки для работы с доменом
        assetPrefix: '',
        // Отключаем серверные функции для статического экспорта
        distDir: 'out',
      }
    : {
        poweredByHeader: false,
      }),
}

module.exports = nextConfig 