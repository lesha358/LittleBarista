import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://littlebarista.ru'),
  title: "Little Barista - Кофейные мероприятия",
  description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональное кофейное оборудование и бариста для ваших событий.",
  keywords: "кофейные мероприятия, мастер-классы, дегустации, кофейное оборудование, бариста, кофе, мероприятия, организация мероприятий",
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: "Little Barista - Кофейные мероприятия",
    description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональное кофейное оборудование и бариста для ваших событий.",
    url: 'https://littlebarista.ru',
    siteName: 'Little Barista',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Little Barista Logo',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Little Barista - Кофейные мероприятия",
    description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональное кофейное оборудование и бариста для ваших событий.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-код-верификации-google',
    yandex: 'ваш-код-верификации-yandex',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 