"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brown-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Логотип */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Little Barista"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold text-brown-900">Little Barista</span>
          </a>

          {/* Навигация */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-brown-700 hover:text-brown-900">
              О нас
            </a>
            <a href="#cooperation" className="text-brown-700 hover:text-brown-900">
              Сотрудничество
            </a>
            <a href="#how-it-works" className="text-brown-700 hover:text-brown-900">
              Как мы работаем
            </a>
            <a href="#pricing" className="text-brown-700 hover:text-brown-900">
              Примеры расчета
            </a>
            <a href="#why-us" className="text-brown-700 hover:text-brown-900">
              Почему мы
            </a>
            <a href="#contacts" className="text-brown-700 hover:text-brown-900">
              Контакты
            </a>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-brown-50"
          >
            <svg
              className="w-6 h-6 text-brown-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-brown-700 hover:text-brown-900">
              О нас
            </a>
            <a href="#cooperation" className="block text-brown-700 hover:text-brown-900">
              Сотрудничество
            </a>
            <a href="#how-it-works" className="block text-brown-700 hover:text-brown-900">
              Как мы работаем
            </a>
            <a href="#pricing" className="block text-brown-700 hover:text-brown-900">
              Примеры расчета
            </a>
            <a href="#why-us" className="block text-brown-700 hover:text-brown-900">
              Почему мы
            </a>
            <a href="#contacts" className="block text-brown-700 hover:text-brown-900">
              Контакты
            </a>
          </div>
        )}
      </div>
    </nav>
  );
} 