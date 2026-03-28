import { Inter, Cormorant_Garamond } from 'next/font/google';

/** Базовый гротеск — навигация, абзацы, формы */
export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

/** Единый премиальный serif — hero, услуги, футер, кнопки-акценты */
export const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-cormorant',
});
