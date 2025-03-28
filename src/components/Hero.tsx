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
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Фоновое изображение с размытием */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brown-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Контент */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className={`space-y-6 lg:space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
            {/* Логотип */}
            <div className="mb-6 lg:mb-8 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Little Barista"
                width={192}
                height={56}
                className="transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 leading-tight text-center">
              Выездная кофейня на ваши мероприятия
            </h1>

            {/* Описание */}
            <p className="text-lg sm:text-xl text-brown-800/90 max-w-xl mx-auto text-center">
              Форумы, конференции, выставки, корпоративы и любые другие мероприятия
            </p>

            {/* Кнопки */}
            <div className="flex justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="button-primary text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
              >
                <span className="relative z-10 text-white">Рассчитать стоимость</span>
                <div className="absolute inset-0 bg-brown-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>

          {/* Правая колонка с преимуществами */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-16 lg:mt-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-300`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-brown-900 border border-brown-200/50 hover:border-brown-300 transition-all group hover:bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Выставки</h3>
              <p className="text-brown-700/80 text-base">Профессиональное обслуживание на ваших мероприятиях</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-brown-900 border border-brown-200/50 hover:border-brown-300 transition-all group hover:bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Конференции</h3>
              <p className="text-brown-700/80 text-base">Свежий кофе и закуски для участников</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-brown-900 border border-brown-200/50 hover:border-brown-300 transition-all group hover:bg-white shadow-sm sm:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Кофе-брейки</h3>
              <p className="text-brown-700/80 text-base">Организация перерывов на мероприятиях</p>
            </div>
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