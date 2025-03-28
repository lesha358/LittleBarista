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
                className="text-brown-900 hover:text-brown-600 transition-colors p-2 rounded-lg hover:bg-brown-50 relative z-[60]"
                aria-label="Открыть меню"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <>
          {/* Затемнение фона */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Мобильное меню */}
          <div className="fixed inset-x-0 top-20 z-50 bg-white shadow-xl rounded-b-2xl transform transition-all duration-300 ease-in-out">
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#cooperation" 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Сотрудничество
                </a>
                <a 
                  href="#process" 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Как мы работаем
                </a>
                <a 
                  href="#pricing" 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Примеры расчета
                </a>
                <a 
                  href="#why-us" 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Почему мы
                </a>
                <a 
                  href="#contacts" 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </div>
              
              <div className="pt-4 border-t border-brown-100">
                <button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-6 rounded-full bg-brown-600 text-white transition-all duration-300 hover:bg-brown-700 hover:shadow-md shadow-sm text-lg font-medium"
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Модальное окно */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 