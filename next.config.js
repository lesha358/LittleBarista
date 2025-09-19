/** @type {import('next').NextConfig} */
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
  // Headers не поддерживаются в статическом экспорте
  // Кэширование будет настроено на уровне CDN/hosting
  // Для статического экспорта (подходит для фронтенд деплоя)
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  // Настройки для работы с доменом
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Отключаем серверные функции для статического экспорта
  distDir: 'out',
}

module.exports = nextConfig 