import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://littlebarista.ru'),
  title: "Little Barista | Профессиональные кофейные мероприятия",
  description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональные бариста, современное оборудование и незабываемый опыт.",
  keywords: "кофейные мероприятия, мастер-классы, дегустации кофе, бариста, кофейные события, кофейные фестивали",
  authors: [{ name: "Little Barista" }],
  creator: "Little Barista",
  publisher: "Little Barista",
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://littlebarista.ru",
    siteName: "Little Barista",
    title: "Little Barista | Профессиональные кофейные мероприятия",
    description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональные бариста, современное оборудование и незабываемый опыт.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Little Barista - Кофейные мероприятия",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Barista | Профессиональные кофейные мероприятия",
    description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональные бариста, современное оборудование и незабываемый опыт.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ваш-код-верификации-google",
    yandex: "ваш-код-верификации-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Add any additional head elements here */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 