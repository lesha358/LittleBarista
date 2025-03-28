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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brown-900 hover:text-brown-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Галерея
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Как мы работаем
            </button>
            <button 
              onClick={() => scrollToSection('cooperation')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Сотрудничество
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Стоимость
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Почему мы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left text-brown-900 hover:text-brown-600 transition-colors py-2"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      {/* Модальное окно */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 