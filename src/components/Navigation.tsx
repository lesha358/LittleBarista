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
        <div className={`md:hidden fixed inset-0 bg-white z-50 transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50">
            {/* Верхняя часть с логотипом и кнопкой закрытия */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white shadow-sm">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center"
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
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Основное меню */}
            <nav className="flex-1 overflow-y-auto py-8">
              <div className="space-y-2 px-6">
                <button 
                  onClick={() => {
                    scrollToSection('gallery');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Галерея</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('process');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Как мы работаем</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('cooperation');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Сотрудничество</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('pricing');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Стоимость</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('why-us');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Почему мы</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contacts');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                >
                  <span className="relative z-10">Контакты</span>
                  <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </button>
              </div>
            </nav>

            {/* Нижняя часть с кнопкой заказа */}
            <div className="p-6 border-t border-gray-100 bg-white shadow-lg">
              <button 
                className="w-full px-6 py-4 rounded-full bg-brown-600 text-white text-lg font-medium transition-all duration-300 hover:bg-brown-700 hover:shadow-md"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Заказать
              </button>
            </div>
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