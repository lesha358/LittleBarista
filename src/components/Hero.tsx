'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';
import { cormorant } from '@/lib/fonts';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-24 pb-12 md:pb-14">
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
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-2 md:pt-4 flex flex-col items-center text-center w-full max-w-full">
        {/* Логотип — block убирает лишний зазор под img (inline + baseline) */}
        <div className="group mb-0 flex justify-center">
          <Image
            src="/images/hero-logo.png"
            alt="Little Barista"
            width={280}
            height={100}
            className="block w-52 sm:w-60 md:w-72 lg:w-80 h-auto max-w-full group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_20px_rgba(255,200,100,0.2)]"
            priority
            unoptimized
          />
        </div>

        {/* Заголовок — mt-0 + отрицательный margin подтягивают к логотипу */}
        <h1
          className={`${cormorant.className} mt-0 -mt-7 sm:-mt-8 md:-mt-10 lg:-mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-amber-50 leading-[1.08] max-w-6xl mx-auto tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]`}
        >
          Сделаем ваше мероприятие точкой притяжения
        </h1>

        {/* Подзаголовок — отступ от h1 сильно больше, чем между подзаголовком и CTA */}
        <p className="mt-10 sm:mt-12 md:mt-14 text-lg sm:text-xl md:text-2xl text-amber-100/90 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide mb-10 md:mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
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
