import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  if (theme === 'dark') {
    return (
      <footer className="footer-premium relative overflow-hidden">
        {/* Золотая линия сверху */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-10" />

        <div className="footer-premium__inner">
          <div className="footer-premium__grid">
            {/* Логотип и контакты */}
            <div className="footer-premium__brand">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/hero-logo.png"
                  alt="Little Barista"
                  width={160}
                  height={56}
                  className="h-10 w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                  unoptimized
                />
              </Link>
              <p className="text-amber-100/70 text-sm mb-5 max-w-xs">
                Кофейные мероприятия в Москве и МО. Выездная кофейня, бар, аренда кофемашин, персонал.
              </p>
              <div className="space-y-2">
                <a href="tel:+79624429794" className="flex items-center gap-2 text-amber-100/90 hover:text-amber-50 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+7 (962) 442-97-94</span>
                </a>
                <a href="mailto:Misha310@mail.ru" className="flex items-center gap-2 text-amber-100/90 hover:text-amber-50 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Misha310@mail.ru</span>
                </a>
                <p className="flex items-start gap-2 text-amber-100/70 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Гаврикова, д. 2/38</span>
                </p>
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://t.me/+79624429794" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-200/90 hover:bg-amber-400/20 hover:border-amber-400/60 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.59 3.7-.53.36-1.01.53-1.44.52-.47-.01-1.38-.27-2.05-.49-.84-.28-1.51-.43-1.45-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.27-1.88.11 0 .36.03.52.18.14.13.18.3.2.45-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="https://wa.me/79624429794" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-200/90 hover:bg-amber-400/20 hover:border-amber-400/60 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://vk.com/littlebarista_coffee" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-amber-400/40 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/60 transition-colors">
                  <Image src="/images/icon-vk.png" alt="VK" width={18} height={18} className="opacity-90" unoptimized />
                </a>
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="footer-premium__heading">Навигация</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/services/mobile-coffee" className="text-amber-100/80 hover:text-amber-50 transition-colors">Выездная кофейня</Link>
                <Link href="/services/mobile-bar" className="text-amber-100/80 hover:text-amber-50 transition-colors">Выездной бар</Link>
                <Link href="/services/coffee-machines" className="text-amber-100/80 hover:text-amber-50 transition-colors">Аренда кофемашин</Link>
                <Link href="/services/coffee-machines/long-term" className="text-amber-100/80 hover:text-amber-50 transition-colors">Долгосрочная аренда</Link>
                <Link href="/services/personnel" className="text-amber-100/80 hover:text-amber-50 transition-colors">Персонал</Link>
              </nav>
            </div>
          </div>

          {/* Разделитель */}
          <div className="footer-premium__divider" />

          {/* Юридическое и копирайт */}
          <div className="footer-premium__legal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-amber-100/60">
              <p>ИП Аракелян Мушег Самвелович · ИНН 263411052935 · ОГРНИП 321774600377697</p>
              <p className="sm:text-right">© 2025 Little Barista. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Light theme (for other pages)
  return (
    <footer className="bg-brown-50 border-t border-brown-100 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brown-900">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79624429794" className="flex items-center text-brown-700 hover:text-brown-900">
                <Phone className="w-5 h-5 mr-2" />
                +7 (962) 442-97-94
              </a>
              <a href="mailto:Misha310@mail.ru" className="flex items-center text-brown-700 hover:text-brown-900">
                <Mail className="w-5 h-5 mr-2" />
                Misha310@mail.ru
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brown-900">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/services/mobile-coffee" className="text-brown-700 hover:text-brown-900">Выездная кофейня</Link>
              <Link href="/services/mobile-bar" className="text-brown-700 hover:text-brown-900">Выездной бар</Link>
              <Link href="/services/coffee-machines" className="text-brown-700 hover:text-brown-900">Краткосрочная аренда</Link>
              <Link href="/services/coffee-machines/long-term" className="text-brown-700 hover:text-brown-900">Долгосрочная аренда</Link>
              <Link href="/services/personnel" className="text-brown-700 hover:text-brown-900">Персонал</Link>
              <Link href="/#contacts" className="text-brown-700 hover:text-brown-900">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brown-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-brown-700"><span className="font-medium">ИП Аракелян Мушег Самвелович</span></p>
              <p className="text-sm text-brown-700"><span className="font-medium">ИНН:</span> 263411052935</p>
              <p className="text-sm text-brown-700"><span className="font-medium">ОГРНИП:</span> 321774600377697</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-brown-700"><span className="font-medium">Адрес:</span> г. Москва, ул. Гаврикова, д. 2/38</p>
              <p className="text-sm text-brown-700"><span className="font-medium">Email:</span> Misha310@mail.ru</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-brown-100 text-center text-sm text-brown-600">
          © 2025 Little Barista. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
