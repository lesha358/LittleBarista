import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  if (theme === 'dark') {
    return (
      <footer className="footer-premium relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#c78149]/60 to-transparent" />

        <div className="footer-premium__inner">
          <div className="footer-premium__grid">
            {/* Логотип и контакты */}
            <div className="footer-premium__brand">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/white-logo.png"
                  alt="Little Barista"
                  width={280}
                  height={100}
                  className="h-10 w-auto max-w-[140px] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                  unoptimized
                />
              </Link>
              <p className="mb-5 max-w-xs text-sm text-[#d7c2a7]">
                Кофейные мероприятия в Москве и МО. Выездная кофейня, бар, аренда кофемашин, персонал.
              </p>
              <div className="space-y-2">
                <a href="tel:+79624429794" className="flex items-center gap-2 text-[#f5eee4] transition-colors hover:text-white">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+7 (962) 442-97-94</span>
                </a>
                <a href="mailto:Misha310@mail.ru" className="flex items-center gap-2 text-[#f5eee4] transition-colors hover:text-white">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Misha310@mail.ru</span>
                </a>
                <p className="flex items-start gap-2 text-sm text-[#d7c2a7]">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Правды, д. 7/9к1</span>
                </p>
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://t.me/+79624429794" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c78149]/38 text-[#e2d4c8] transition-colors hover:border-[#c9a06c]/65 hover:bg-white/10 hover:text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.59 3.7-.53.36-1.01.53-1.44.52-.47-.01-1.38-.27-2.05-.49-.84-.28-1.51-.43-1.45-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.27-1.88.11 0 .36.03.52.18.14.13.18.3.2.45-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="https://wa.me/79624429794" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c78149]/38 text-[#e2d4c8] transition-colors hover:border-[#c9a06c]/65 hover:bg-white/10 hover:text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://vk.com/littlebarista_coffee" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c78149]/38 transition-colors hover:border-[#c9a06c]/65 hover:bg-white/10">
                  <Image src="/images/icon-vk.png" alt="VK" width={18} height={18} className="opacity-80" unoptimized />
                </a>
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="footer-premium__heading">Навигация</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/services/mobile-coffee" className="text-[#d7c2a7] transition-colors hover:text-white">Выездная кофейня</Link>
                <Link href="/services/mobile-bar" className="text-[#d7c2a7] transition-colors hover:text-white">Выездной бар</Link>
                <Link href="/services/coffee-machines" className="text-[#d7c2a7] transition-colors hover:text-white">Аренда кофемашин</Link>
                <Link href="/services/coffee-machines/long-term" className="text-[#d7c2a7] transition-colors hover:text-white">Долгосрочная аренда</Link>
                <Link href="/services/personnel" className="text-[#d7c2a7] transition-colors hover:text-white">Персонал</Link>
              </nav>
            </div>
          </div>

          {/* Разделитель */}
          <div className="footer-premium__divider" />

          {/* Юридическое и копирайт */}
          <div className="footer-premium__legal">
            <div className="grid grid-cols-1 gap-4 text-sm text-[#b79f87] sm:grid-cols-2">
              <p>ИП Аракелян Мушег Самвелович · ИНН 263411052935 · ОГРНИП 321774600377697</p>
              <p className="sm:text-right">© 2026 Little Barista. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Light theme (for other pages)
  return (
    <footer className="relative overflow-hidden border-t border-[#d7c2a7]/35 bg-[linear-gradient(180deg,#f5eee5_0%,#e7d9cb_100%)]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#251813]">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79624429794" className="flex items-center text-[#5c3a24] hover:text-[#251813]">
                <Phone className="w-5 h-5 mr-2" />
                +7 (962) 442-97-94
              </a>
              <a href="mailto:Misha310@mail.ru" className="flex items-center text-[#5c3a24] hover:text-[#251813]">
                <Mail className="w-5 h-5 mr-2" />
                Misha310@mail.ru
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#251813]">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/services/mobile-coffee" className="text-[#5c3a24] hover:text-[#251813]">Выездная кофейня</Link>
              <Link href="/services/mobile-bar" className="text-[#5c3a24] hover:text-[#251813]">Выездной бар</Link>
              <Link href="/services/coffee-machines" className="text-[#5c3a24] hover:text-[#251813]">Краткосрочная аренда</Link>
              <Link href="/services/coffee-machines/long-term" className="text-[#5c3a24] hover:text-[#251813]">Долгосрочная аренда</Link>
              <Link href="/services/personnel" className="text-[#5c3a24] hover:text-[#251813]">Персонал</Link>
              <Link href="/#contacts" className="text-[#5c3a24] hover:text-[#251813]">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#d7c2a7]/45 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-[#5c3a24]"><span className="font-medium">ИП Аракелян Мушег Самвелович</span></p>
              <p className="text-sm text-[#5c3a24]"><span className="font-medium">ИНН:</span> 263411052935</p>
              <p className="text-sm text-[#5c3a24]"><span className="font-medium">ОГРНИП:</span> 321774600377697</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#5c3a24]"><span className="font-medium">Адрес:</span> г. Москва, ул. Правды, д. 7/9к1</p>
              <p className="text-sm text-[#5c3a24]"><span className="font-medium">Email:</span> Misha310@mail.ru</p>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-[#d7c2a7]/45 pt-6 text-center text-sm text-[#6d4b33]">
          © 2026 Little Barista. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
