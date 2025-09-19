import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function Footer({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return (
    <footer className={`${theme === 'dark' ? 'bg-gradient-to-b from-[#0d0a08] via-[#13100d] to-[#0d0a08]' : 'bg-brown-50'} border-t ${theme === 'dark' ? 'border-amber-500/20' : 'border-brown-100'} relative overflow-hidden`}>
      {theme === 'dark' && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контакты */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-amber-100' : 'text-brown-900'}`}>Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79624429794" className={`flex items-center ${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>
                <Phone className="w-5 h-5 mr-2" />
                +7 (962) 442-97-94
              </a>
              <a href="mailto:Misha310@mail.ru" className={`flex items-center ${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>
                <Mail className="w-5 h-5 mr-2" />
                Misha310@mail.ru
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-amber-100' : 'text-brown-900'}`}>Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/#about" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>О нас</Link>
              <Link href="/#cooperation" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>Сотрудничество</Link>
              <Link href="/#process" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>Как мы работаем</Link>
              <Link href="/#pricing" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>Примеры расчета</Link>
              <Link href="/#why-us" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>Почему мы</Link>
              <Link href="/#contacts" className={`${theme === 'dark' ? 'text-white/85 hover:text-white' : 'text-brown-700 hover:text-brown-900'}`}>Контакты</Link>
            </div>
          </div>
        </div>

        {/* Юридическая информация */}
        <div className={`mt-8 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-brown-100'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-brown-700'}`}>
                <span className="font-medium">ИП Аракелян Мушег Самвелович</span>
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-brown-700'}`}>
                <span className="font-medium">ИНН:</span> 263411052935
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-brown-700'}`}>
                <span className="font-medium">ОГРНИП:</span> 321774600377697
              </p>
            </div>
            <div className="space-y-2">
              <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-brown-700'}`}>
                <span className="font-medium">Адрес:</span> г. Москва, ул. Гаврикова, д. 2/38
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-brown-700'}`}>
                <span className="font-medium">Email:</span> Misha310@mail.ru
              </p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className={`mt-6 pt-6 border-t text-center text-sm ${theme === 'dark' ? 'border-white/10 text-white/70' : 'border-brown-100 text-brown-600'}`}>
          © 2025 Little Barista. Все права защищены.
        </div>
      </div>
    </footer>
  );
} 