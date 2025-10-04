import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://littlebarista.ru'),
  title: "Little Barista - Кофейные мероприятия",
  description: "Организация кофейных мероприятий, мастер-классов и дегустаций. Профессиональное кофейное оборудование и бариста для ваших событий.",
  keywords: "кофейные мероприятия, мастер-классы, дегустации, кофейное оборудование, бариста, кофе, мероприятия, организация мероприятий",
  icons: {
    icon: '/favicon.ico'
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
    <html lang="ru" className={inter.variable}>
      <head>
        <meta name="yandex-verification" content="512bc29e8533e8e3" />
        <link rel="icon" href="https://littlebarista.ru/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://littlebarista.ru/favicon.ico" type="image/x-icon" />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101109907, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });

            ym(101983555, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });

            ym(101984487, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              ecommerce:"dataLayer"
            });

            ym(101111714, "init", {
              webvisor:true,
              clickmap:true,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/101109907" style={{position: 'absolute', left: '-9999px'}} alt="" />
            <img src="https://mc.yandex.ru/watch/101983555" style={{position: 'absolute', left: '-9999px'}} alt="" />
            <img src="https://mc.yandex.ru/watch/101984487" style={{position: 'absolute', left: '-9999px'}} alt="" />
            <img src="https://mc.yandex.ru/watch/101111714" style={{position: 'absolute', left: '-9999px'}} alt="" />
          </div>
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
} 