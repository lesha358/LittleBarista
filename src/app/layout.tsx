import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import YMHits from "@/components/YMHits";
import { useEffect } from "react";
import { parseUtmFromLocation, saveUtmOnce } from "@/lib/utm";
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
  // Кладём UTM при первом визите
  if (typeof window !== 'undefined') {
    // обёртка в эффект не доступна здесь (Server Component), поэтому добавим скрипт ниже
  }
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <meta name="yandex-verification" content="512bc29e8533e8e3" />
        <link rel="icon" href="https://littlebarista.ru/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://littlebarista.ru/favicon.ico" type="image/x-icon" />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(104587269, 'init', {
              webvisor: true,
              clickmap: true,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/104587269" style={{position: 'absolute', left: '-9999px'}} alt="" />
          </div>
        </noscript>
        <Script id="utm-capture" strategy="afterInteractive">
          {`
            try {
              var params = new URLSearchParams(window.location.search);
              var utm = {};
              ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){
                var v = params.get(k); if (v) utm[k] = v;
              });
              utm.referrer = document.referrer || '';
              var key = 'lb_first_utm';
              if (Object.keys(utm).length && !localStorage.getItem(key)) {
                localStorage.setItem(key, JSON.stringify(Object.assign({ts: Date.now()}, utm)));
              }
            } catch(e) {}
          `}
        </Script>
        <Script id="ym-events" strategy="afterInteractive">
          {`
            (function () {
              // Отправка любой формы
              document.addEventListener('submit', function () {
                try { ym(104587269, 'reachGoal', 'form_submit'); } catch(e) {}
              }, true);

              // Клик по номеру телефона (tel:)
              document.addEventListener('click', function (e) {
                var a = e.target.closest('a[href^="tel:"]');
                if (a) { try { ym(104587269, 'reachGoal', 'phone_click'); } catch(e) {} }
              }, true);

              // Клик по мессенджерам (WhatsApp/Telegram)
              document.addEventListener('click', function (e) {
                var a = e.target.closest('a[href*="wa.me"],a[href*="whatsapp"],a[href*="t.me"],a[href*="telegram"]');
                if (a) { try { ym(104587269, 'reachGoal', 'messenger_click'); } catch(e) {} }
              }, true);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <YMHits />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
} 