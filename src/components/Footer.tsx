import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brown-50 border-t border-brown-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold text-brown-900 mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79624429794" className="flex items-center text-brown-700 hover:text-brown-900">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (962) 442-97-94
              </a>
              <a href="mailto:Misha310@mail.ru" className="flex items-center text-brown-700 hover:text-brown-900">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Misha310@mail.ru
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold text-brown-900 mb-4">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-brown-700 hover:text-brown-900">О нас</a>
              <a href="#cooperation" className="text-brown-700 hover:text-brown-900">Сотрудничество</a>
              <a href="#how-it-works" className="text-brown-700 hover:text-brown-900">Как мы работаем</a>
              <a href="#pricing" className="text-brown-700 hover:text-brown-900">Примеры расчета</a>
              <a href="#why-us" className="text-brown-700 hover:text-brown-900">Почему мы</a>
              <a href="#contacts" className="text-brown-700 hover:text-brown-900">Контакты</a>
            </div>
          </div>
        </div>

        {/* Юридическая информация */}
        <div className="mt-8 pt-6 border-t border-brown-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-brown-700">
                <span className="font-medium">ИП Аракелян Мушег Самвелович</span>
              </p>
              <p className="text-sm text-brown-700">
                <span className="font-medium">ИНН:</span> 263411052935
              </p>
              <p className="text-sm text-brown-700">
                <span className="font-medium">ОГРНИП:</span> 321774600377697
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-brown-700">
                <span className="font-medium">Адрес:</span> г. Москва, ул. Гаврикова, д. 2/38
              </p>
              <p className="text-sm text-brown-700">
                <span className="font-medium">Email:</span> Misha310@mail.ru
              </p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-6 pt-6 border-t border-brown-100 text-center text-brown-600 text-sm">
          © 2025 Little Barista. Все права защищены.
        </div>
      </div>
    </footer>
  );
} 