'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Фоновое изображение с размытием */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brown-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Контент */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Логотип */}
          <div className="mb-6 lg:mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Little Barista"
              width={192}
              height={56}
              className="transform hover:scale-105 transition-transform duration-300"
              priority
              unoptimized
            />
          </div>

          {/* Заголовок */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 leading-tight mb-6 max-w-4xl mx-auto">
            Выездная кофейня на ваши мероприятия
          </h1>

          {/* Описание */}
          <p className="text-lg sm:text-xl text-brown-800/90 mb-8 max-w-3xl mx-auto">
            Форумы, конференции, выставки, корпоративы и любые другие мероприятия
          </p>

          {/* Кнопки */}
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="button-primary text-lg px-8 sm:px-10 py-4 sm:py-5 group w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">Рассчитать стоимость</span>
              <div className="absolute inset-0 bg-brown-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
} 