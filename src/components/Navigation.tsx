'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from './ContactModal';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  const goToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navElement = document.querySelector('nav');
      const navHeight = navElement ? (navElement as HTMLElement).offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const goHome = () => {
    if (pathname !== '/') {
      router.push('/');
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrder = () => {
    if (pathname !== '/') {
      router.push('/#contact-form');
      setIsMobileMenuOpen(false);
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        theme === 'dark'
          ? (isScrolled ? 'bg-black/40 backdrop-blur-md shadow-md border-b border-white/10' : 'bg-black/10 backdrop-blur-sm border-b border-transparent')
          : (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-brown-200' : 'bg-white/80 backdrop-blur-sm border-b border-transparent')
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-32">
            {/* Логотип */}
            <button 
              onClick={goHome}
              className="transition-opacity hover:opacity-80 h-full flex items-center"
            >
              <Image
                src="/images/logo-long.png"
                alt="Little Barista"
                width={180}
                height={40}
                className="w-32 md:w-[180px] transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </button>

            {/* Контакты и навигация */}
            <div className="flex flex-col items-center h-full justify-center">
              {/* Верхняя строка с контактами */}
              <div className="hidden md:flex items-center space-x-6 mb-2">
                <a href="tel:+79624429794" className={`text-base font-semibold transition-colors flex items-center px-4 py-2 rounded-full ${theme === 'dark' ? 'text-white/90 hover:text-white bg-white/10' : 'text-brown-900 hover:text-brown-600 bg-brown-50/50'}`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (962) 442-97-94
                </a>
                <a href="mailto:Misha310@mail.ru" className={`text-base font-semibold transition-colors flex items-center px-4 py-2 rounded-full ${theme === 'dark' ? 'text-white/90 hover:text-white bg-white/10' : 'text-brown-900 hover:text-brown-600 bg-brown-50/50'}`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Misha310@mail.ru
                </a>
                <div className="flex items-center space-x-4">
                  <a href="https://t.me/+79624429794" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'bg-amber-200/10 hover:bg-amber-200/20 text-amber-200' : 'bg-brown-100 hover:bg-brown-200 text-brown-700'} transition-colors p-2 rounded-full`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.59 3.7-.53.36-1.01.53-1.44.52-.47-.01-1.38-.27-2.05-.49-.84-.28-1.51-.43-1.45-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.27-1.88.11 0 .36.03.52.18.14.13.18.3.2.45-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/79624429794" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'bg-amber-200/10 hover:bg-amber-200/20 text-amber-200' : 'bg-brown-100 hover:bg-brown-200 text-brown-700'} transition-colors p-2 rounded-full`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://vk.com/littlebarista_coffee" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'bg-amber-200/10 hover:bg-amber-200/20' : 'bg-brown-100 hover:bg-brown-200'} transition-colors p-2 rounded-full`}>
                    <Image
                      src="/images/icon-vk.png"
                      alt="VK"
                      width={20}
                      height={20}
                      className={`${theme === 'dark' ? 'w-5 h-5 grayscale opacity-90' : 'w-5 h-5 grayscale opacity-80'} object-cover`}
                    />
                  </a>
                </div>
              </div>

              {/* Навигация */}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => goToSection('cooperation')} className={`${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-brown-900 hover:text-brown-600'} transition-colors`}>
                  Варианты сотрудничества
                </button>
                <button onClick={() => goToSection('gallery')} className={`${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-brown-900 hover:text-brown-600'} transition-colors`}>
                  Галерея
                </button>
                <button onClick={() => goToSection('pricing')} className={`${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-brown-900 hover:text-brown-600'} transition-colors`}>
                  Рассчитать заказ
                </button>
                <button onClick={() => goToSection('why-us')} className={`${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-brown-900 hover:text-brown-600'} transition-colors`}>
                  Наши преимущества
                </button>
                <button onClick={() => goToSection('contacts')} className={`${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-brown-900 hover:text-brown-600'} transition-colors`}>
                  Контакты
                </button>
                <button 
                  onClick={handleOrder}
                  className={`px-6 py-2 rounded-full transition-all duration-300 hover:shadow-md shadow-sm ${theme === 'dark' ? 'bg-amber-500 text-[#0d0a08] hover:bg-amber-400' : 'bg-brown-600 text-white hover:bg-brown-700'}`}
                >
                  Заказать
                </button>
              </nav>
            </div>

            {/* Кнопка мобильного меню */}
            <div className="md:hidden flex items-center space-x-4">
              <a 
                href="tel:+79624429794" 
                className={`transition-colors flex items-center px-2 py-1.5 rounded-full text-sm ${theme === 'dark' ? 'text-white/90 hover:text-white bg-white/10' : 'text-brown-900 hover:text-brown-600 bg-brown-50/50'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-1">+79624429794</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors p-2 rounded-lg relative z-[60] ${theme === 'dark' ? 'text-white hover:text-white/90 hover:bg-white/10' : 'text-brown-900 hover:text-brown-600 hover:bg-brown-50'}`}
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Мобильное меню */}
          <div className={`fixed inset-x-0 top-16 md:top-32 z-50 shadow-xl rounded-b-2xl transform transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-[#12100d] border-t border-white/10' : 'bg-white'}`}>
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-4">
                
                <button 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => goToSection('cooperation')}
                >
                  Варианты сотрудничества
                </button>
                <button 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => goToSection('gallery')}
                >
                  Галерея
                </button>
                <button 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => goToSection('pricing')}
                >
                  Рассчитать заказ
                </button>
                <button 
                  className="text-lg font-medium text-brown-900 hover:text-brown-600 transition-colors py-2"
                  onClick={() => goToSection('why-us')}
                >
                  Наши преимущества
                </button>
                <button 
                  className="text-lg font-medium text-brown-900 hover:text-бrown-600 transition-colors py-2"
                  onClick={() => goToSection('contacts')}
                >
                  Контакты
                </button>
              </div>
              
              <div className="pt-4 border-t border-brown-100">
                <div className="flex justify-center space-x-4 mb-4">
                  <button 
                    onClick={() => handleOrder()}
                    className="w-full py-3 px-6 rounded-full bg-brown-600 text-white transition-all duration-300 hover:bg-brown-700 hover:shadow-md shadow-sm text-lg font-medium"
                  >
                    Заказать
                  </button>
                </div>
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