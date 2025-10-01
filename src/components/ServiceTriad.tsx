'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ServiceTriad() {
  return (
    <section className="relative py-16 md:py-20 bg-transparent">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900">Наши ключевые направления</h2>
          <p className="mt-3 text-brown-800/90">Выберите формат, который подходит именно вам</p>
        </div>
      </div>

      {/* Полосы на всю ширину вьюпорта с диагоналями */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 md:h-[460px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:h-full gap-3 md:gap-0 px-4">
          {/* Левая полоса */}
          <Link
            href="/services/mobile-coffee"
            aria-label="Выездная кофейня"
            className="group relative h-[200px] sm:h-[240px] md:h-full overflow-hidden shadow-sm hover:shadow-md transition-all rounded-xl md:rounded-none md:[clip-path:polygon(0%_0%,_96%_0%,_100%_100%,_0%_100%)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-brown-50" />
            <div className="absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity">
              <Image
                src="/images/Stand.jpg"
                alt="Выездная кофейня"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container px-4 sm:px-6 lg:px-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-brown-900">Выездная кофейня</h3>
                  <div className="mt-3 w-16 h-1 bg-brown-300" />
                  <p className="mt-4 text-brown-800/90">Профессиональная кофейная станция с бариста на вашем мероприятии</p>
                  <span className="mt-6 inline-flex items-center text-brown-900 font-semibold group-hover:translate-x-1 transition-transform">Подробнее →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Центральная полоса */}
          <Link
            href="/services/mobile-bar"
            aria-label="Выездной бар"
            className="group relative h-[200px] sm:h-[240px] md:h-full overflow-hidden shadow-md hover:shadow-lg transition-all rounded-xl md:rounded-none md:[clip-path:polygon(0%_0%,_96%_0%,_100%_100%,_4%_100%)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0d0b] to-[#1a1713]" />
            <div className="absolute inset-0 opacity-25 group-hover:opacity-30 transition-opacity">
              <Image
                src="/images/triad-bar.webp"
                alt="Выездной бар"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container px-4 sm:px-6 lg:px-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-white">Выездной бар</h3>
                  <div className="mt-3 w-16 h-1 bg-amber-400" />
                  <p className="mt-4 text-white/85">Барные решения под формат события: классика, non-alcohol, авторские</p>
                  <span className="mt-6 inline-flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform">Подробнее →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Правая полоса */}
          <Link
            href="/services/coffee-machines"
            aria-label="Аренда кофемашин"
            className="group relative h-[200px] sm:h-[240px] md:h-full overflow-hidden shadow-sm hover:shadow-md transition-all rounded-xl md:rounded-none md:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_4%_100%)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brown-50 to-white" />
            <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity">
              <Image
                src="/images/machines-triad.jpg"
                alt="Аренда кофемашин"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container px-4 sm:px-6 lg:px-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-brown-900">Аренда кофемашин</h3>
                  <div className="mt-3 w-16 h-1 bg-brown-300" />
                  <p className="mt-4 text-brown-800/90">Краткосрочная аренда по Москве и области. Доставка, подключение, обучение</p>
                  <span className="mt-6 inline-flex items-center text-brown-900 font-semibold group-hover:translate-x-1 transition-transform">Подробнее →</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}



