'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновое изображение с параллакс эффектом */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200" />
        <div 
          className="absolute inset-0 bg-[url('/images/coffee-pattern.png')] opacity-5"
          style={{
            transform: `translateY(${isScrolled ? '20%' : '0'})`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brown-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        {/* Добавляем декоративные элементы кофейных зерен */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[url('/images/coffee-bean.png')] opacity-10 rotate-12" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[url('/images/coffee-bean.png')] opacity-10 -rotate-12" />
      </div>

      {/* Контент */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
            {/* Логотип */}
            <div className="mb-8">
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
            <h1 className="text-5xl lg:text-6xl font-bold text-brown-900 leading-tight">
              Выездная кофейня на ваши мероприятия
            </h1>

            {/* Описание */}
            <p className="text-xl text-brown-800/90 max-w-xl">
              Форумы, конференции, выставки, корпоративы, свадьбы и любые другие мероприятия
            </p>

            {/* Кнопки */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="button-primary text-lg px-8 py-4 group"
              >
                <span className="relative z-10 text-white">Рассчитать стоимость</span>
                <div className="absolute inset-0 bg-brown-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="button-secondary text-lg px-8 py-4 group"
              >
                <span className="relative z-10 text-brown-900">Связаться с нами</span>
                <div className="absolute inset-0 bg-brown-100 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>

          {/* Правая колонка с преимуществами */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-300`}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-brown-900 border border-brown-200 hover:border-brown-300 transition-all group hover:bg-white shadow-lg">
              <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выставки</h3>
              <p className="text-brown-700/90">Профессиональное обслуживание на ваших мероприятиях</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-brown-900 border border-brown-200 hover:border-brown-300 transition-all group hover:bg-white shadow-lg">
              <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Конференции</h3>
              <p className="text-brown-700/90">Свежий кофе и закуски для участников</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-brown-900 border border-brown-200 hover:border-brown-300 transition-all group hover:bg-white shadow-lg">
              <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Кофе-брейки</h3>
              <p className="text-brown-700/90">Организация перерывов на мероприятиях</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-brown-900 border border-brown-200 hover:border-brown-300 transition-all group hover:bg-white shadow-lg">
              <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Презентации</h3>
              <div className="space-y-2">
                <a 
                  href="/presentations/little barista .pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-brown-700/90 hover:text-brown-900 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Для мероприятий
                </a>
                <a 
                  href="/presentations/Презентация переделанная.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-brown-700/90 hover:text-brown-900 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Для стендов
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-brown-300/30 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-brown-600 rounded-full mx-auto animate-bounce" />
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