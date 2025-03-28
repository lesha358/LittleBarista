'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from './ContactModal';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    console.log('Mobile menu state:', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Высота навигации (h-20 = 5rem = 80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo-long.png"
                alt="Little Barista"
                width={180}
                height={40}
                className="transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </button>

            {/* Основное меню */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('gallery')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Как мы работаем
              </button>
              <button 
                onClick={() => scrollToSection('cooperation')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Сотрудничество
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Стоимость
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Почему мы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`transition-colors ${
                  isScrolled ? 'text-brown-900 hover:text-brown-600' : 'text-brown-900 hover:text-brown-600'
                }`}
              >
                Контакты
              </button>
              <button 
                className={`px-6 py-2 rounded-full bg-brown-600 text-white transition-all duration-300 hover:bg-brown-700 hover:shadow-md ${
                  isScrolled ? 'shadow-sm' : ''
                }`}
                onClick={() => setIsModalOpen(true)}
              >
                Заказать
              </button>
            </div>

            {/* Кнопка мобильного меню */}
            <button 
              onClick={() => {
                console.log('Menu button clicked, current state:', isMobileMenuOpen);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-[101]"
              aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              <svg className="w-6 h-6 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <div 
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-white to-cream-50 z-[100] transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Верхняя часть с логотипом и кнопкой закрытия */}
          <div className="flex items-center justify-between p-6">
            <button 
              onClick={() => {
                scrollToSection('hero');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center group"
            >
              <Image
                src="/images/logo.png"
                alt="Little Barista"
                width={40}
                height={40}
                className="transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-brown-50/50 transition-colors"
            >
              <svg className="w-6 h-6 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Основное меню */}
          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1 px-6">
              <button 
                onClick={() => {
                  scrollToSection('gallery');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Галерея
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
              <button 
                onClick={() => {
                  scrollToSection('process');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Как мы работаем
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
              <button 
                onClick={() => {
                  scrollToSection('cooperation');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Сотрудничество
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Стоимость
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
              <button 
                onClick={() => {
                  scrollToSection('why-us');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Почему мы
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contacts');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-4 text-xl font-medium text-brown-900 hover:text-brown-600 transition-colors relative group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brown-400 group-hover:text-brown-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Контакты
                </span>
                <span className="absolute inset-0 bg-brown-50/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg"></span>
              </button>
            </div>
          </nav>

          {/* Нижняя часть с кнопкой заказа */}
          <div className="p-6">
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 px-6 rounded-full bg-brown-600 text-white font-medium hover:bg-brown-700 transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Заказать
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 