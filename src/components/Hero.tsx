'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';
import { Prata } from 'next/font/google';

const prata = Prata({ subsets: ['latin', 'cyrillic'], weight: '400', display: 'swap' });

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-24 pb-16">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg1.png"
          alt=""
          fill
          className="object-cover object-[center_top]"
          sizes="100vw"
          priority
          unoptimized
        />
        {/* Тёмный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Контент — прижат к верху, пустое место снизу */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 flex flex-col items-center text-center w-full max-w-full">
        {/* Логотип */}
        <div className="mb-4 lg:mb-5 flex justify-center">
          <Image
            src="/images/hero-logo.png"
            alt="Little Barista"
            width={280}
            height={100}
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_20px_rgba(255,200,100,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* Заголовок — серif, светлый текст */}
        <h1
          className={`${prata.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-amber-50 leading-tight mb-4 max-w-5xl mx-auto tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]`}
        >
          Сделаем ваше мероприятие точкой притяжения с помощью вкусного кофе и коктейлей
        </h1>

        {/* Подзаголовок */}
        <p className="text-base sm:text-lg md:text-xl text-amber-100/90 mb-6 max-w-3xl mx-auto font-medium">
          Форумы, конференции, выставки, корпоративы и любые другие мероприятия
        </p>

        {/* Кнопка CTA */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-premium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Рассчитать стоимость
        </button>
      </div>

      {/* Золотая линия снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-10" />

      {/* Модальное окно */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme="dark"
      />
    </section>
  );
}
