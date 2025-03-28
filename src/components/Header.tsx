import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Главная' },
    { href: '/menu', label: 'Меню' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Little Barista"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold text-brown-600">Little Barista</span>
          </Link>

          {/* Кнопка открытия меню */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brown-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+79001234567"
              className="btn-primary"
            >
              Заказать
            </a>
          </nav>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`fixed inset-0 bg-white z-50 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
        <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50">
          {/* Верхняя часть с логотипом и кнопкой закрытия */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white shadow-sm">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Little Barista"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-3 text-2xl font-bold text-brown-600">Little Barista</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Основное меню */}
          <nav className="flex-1 overflow-y-auto py-8">
            <ul className="space-y-2 px-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-4 text-xl font-medium text-gray-800 hover:text-brown-600 transition-colors relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-brown-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Нижняя часть с контактами */}
          <div className="p-6 border-t border-gray-100 bg-white shadow-lg">
            <div className="space-y-4">
              <a
                href="tel:+79001234567"
                className="flex items-center text-lg text-gray-700 hover:text-brown-600 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-12 h-12 rounded-full bg-brown-50 flex items-center justify-center mr-3 group-hover:bg-brown-100 transition-colors">
                  <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg">+7 (900) 123-45-67</span>
              </a>
              <a
                href="mailto:info@littlebarista.ru"
                className="flex items-center text-lg text-gray-700 hover:text-brown-600 transition-colors group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-12 h-12 rounded-full bg-brown-50 flex items-center justify-center mr-3 group-hover:bg-brown-100 transition-colors">
                  <svg className="w-6 h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">info@littlebarista.ru</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 