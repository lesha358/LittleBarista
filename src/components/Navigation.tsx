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

            {/* Навигация */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#cooperation" className="text-brown-900 hover:text-brown-600 transition-colors">
                Сотрудничество
              </a>
              <a href="#process" className="text-brown-900 hover:text-brown-600 transition-colors">
                Как мы работаем
              </a>
              <a href="#pricing" className="text-brown-900 hover:text-brown-600 transition-colors">
                Примеры расчета
              </a>
              <a href="#why-us" className="text-brown-900 hover:text-brown-600 transition-colors">
                Почему мы
              </a>
              <a href="#contact-form" className="text-brown-900 hover:text-brown-600 transition-colors">
                Оставить заявку
              </a>
              <a href="#contacts" className="text-brown-900 hover:text-brown-600 transition-colors">
                Контакты
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 rounded-full bg-brown-600 text-white transition-all duration-300 hover:bg-brown-700 hover:shadow-md shadow-sm"
              >
                Заказать
              </button>
            </nav>

            {/* Кнопка мобильного меню */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brown-900 hover:text-brown-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4">
                  <a href="#cooperation" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Сотрудничество
                  </a>
                  <a href="#process" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Как мы работаем
                  </a>
                  <a href="#pricing" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Примеры расчета
                  </a>
                  <a href="#why-us" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Почему мы
                  </a>
                  <a href="#contact-form" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Оставить заявку
                  </a>
                  <a href="#contacts" className="block text-brown-900 hover:text-brown-600 transition-colors">
                    Контакты
                  </a>
                  <button 
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-2 px-4 rounded-full bg-brown-600 text-white transition-all duration-300 hover:bg-brown-700 hover:shadow-md shadow-sm"
                  >
                    Заказать
                  </button>
                </div>
              )}
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