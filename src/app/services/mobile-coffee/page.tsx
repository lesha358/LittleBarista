import Navigation from '@/components/Navigation';
import PhotoCarousel from '@/components/PhotoCarousel';
import ContactFormStatic from '@/components/ContactFormStatic';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import ContactModalTrigger from '@/components/ContactModalTrigger';
import { Suspense } from 'react';
import { generateMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = generateMetadata({
  title: 'Выездная кофейня — Little Barista',
  description: 'Выездная кофейная станция с бариста для вашего мероприятия. Меню, оборудование, полный сервис.',
  path: '/services/mobile-coffee',
});

const sectionBg =
  'relative overflow-hidden w-full py-16 lg:py-24 scroll-mt-28 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.18),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(190,118,45,.1),transparent_22%),linear-gradient(180deg,#120c09_0%,#0d0806_50%,#090605_100%)]';

const cardClass =
  'group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a468]/55 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_28px_rgba(211,164,104,.08)]';

const ctaBtnClass =
  'rounded-full border-2 border-[#c9a06c] bg-gradient-to-b from-[#faf3e8] via-[#f0e2cf] to-[#e5d0b0] px-6 py-3 text-sm font-semibold text-[#1a1008] shadow-[0_10px_36px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.65),0_0_28px_rgba(200,150,80,.22)] transition hover:-translate-y-0.5 hover:from-[#fffaf3] hover:via-[#f7ebdc] hover:to-[#edd9be] hover:border-[#ddb66a] hover:shadow-[0_14px_44px_rgba(0,0,0,.48),0_0_36px_rgba(220,170,100,.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c48a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0705] active:translate-y-0';

const formats = [
  {
    title: 'Выставки и форумы',
    text: 'Кофейная точка притяжения на стенде или в welcome-зоне. Работаем быстро, аккуратно и в ритме площадки.',
  },
  {
    title: 'Конференции и бизнес-события',
    text: 'Чёткая сервисная подача для деловой аудитории: понятное меню, стабильная скорость, чистая зона работы.',
  },
  {
    title: 'Кофе-брейки и private events',
    text: 'Подойдёт для камерных встреч, запусков, презентаций и корпоративных мероприятий в премиальном тоне.',
  },
];

const featureBlocks = [
  ['Бариста и станция', 'Под ключ на площадке'],
  ['Меню под формат', 'Классика и сезонные позиции'],
  ['Москва и область', 'Оперативный выезд'],
  ['Быстрый расчёт', 'Перезвоним за 15 минут'],
];

const cooperation = [
  {
    title: 'Заказное обслуживание',
    text: 'Гости получают напитки бесплатно, а все расходы на сервис, кофе, молоко и персонал фиксируются заранее в смете.',
  },
  {
    title: 'Прямые продажи',
    text: 'Выездная кофейня с продажей напитков на площадке. Подходит для фестивалей, ярмарок, общественных пространств и больших потоков.',
  },
  {
    title: 'Долгосрочное партнёрство',
    text: 'Работаем с организаторами мероприятий, площадками и агентствами на постоянной основе с гибкими условиями.',
  },
  {
    title: 'Дополнительные опции',
    text: 'Аренда кофемашин, отдельный персонал, брендирование расходников и стойки, расширение меню под вашу концепцию.',
  },
];

const processSteps = [
  'Получаем вводные: формат события, поток гостей, тайминг и площадка.',
  'Подбираем кофейную станцию, меню и команду под ваш сценарий.',
  'Согласовываем смету, логистику, монтаж и детали сервиса.',
  'Приезжаем, запускаем зону и работаем на площадке без лишнего шума.',
];

const advantages = [
  'Узкая специализация на кофейном сервисе для мероприятий.',
  'Премиальная подача без перегруза и визуального шума.',
  'Проверенные бариста и стабильное качество напитков.',
  'Быстрый расчёт и понятная коммуникация на всех этапах.',
];

const projects = [
  'Проект «Декларация» М. Гребенюка',
  'Ярмарка «Волшебница» на 2500 человек',
  'Парад ретро-трамваев Правительства Москвы',
  'Конференция одного из крупнейших банков страны',
];

export default function MobileCoffeePage() {
  return (
    <div className="min-h-screen bg-[#0d0705] text-[#f3e4c8]">
      <Script id="breadcrumbs-mobile-coffee" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://littlebarista.ru/' },
            { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://littlebarista.ru/services' },
            { '@type': 'ListItem', position: 3, name: 'Выездная кофейня', item: 'https://littlebarista.ru/services/mobile-coffee' },
          ],
        })}
      </Script>
      <Script id="service-mobile-coffee" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Выездная кофейня',
          areaServed: ['Москва', 'Московская область'],
          serviceType: 'Кофейный кейтеринг',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Little Barista',
            email: 'Misha310@mail.ru',
            telephone: '+7 962 442-97-94',
          },
        })}
      </Script>

      <Navigation theme="dark" />

      <section
        id="intro"
        className="relative overflow-hidden border-b border-[#6f4a26]/40 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(190,118,45,.14),transparent_22%),linear-gradient(180deg,#140c09_0%,#090605_100%)]"
      >
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.06),transparent)]" />
        <div className="mx-auto grid max-w-[85rem] grid-cols-1 gap-10 px-6 pb-16 pt-[104px] md:px-10 md:pt-[108px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.18fr)] lg:gap-x-8 lg:gap-y-10 lg:pb-24 lg:pl-10 lg:pr-5 lg:pt-[112px] xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.24fr)] xl:gap-x-10 xl:pr-4">
          <div className="relative z-10 min-h-0 lg:self-start">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d4a574]/35 bg-[linear-gradient(180deg,rgba(255,245,230,.08),rgba(18,12,9,.5))] px-4 py-2.5 text-[11px] uppercase tracking-[0.26em] text-[#e0c49a] shadow-[0_4px_24px_rgba(0,0,0,.25)] backdrop-blur-md">
                Coffee catering
                <span className="h-1 w-1 rounded-full bg-[#d4a574]" />
                Москва и МО
              </div>
              <Link
                href="/#services-triad"
                className="inline-flex rounded-full border border-[#c9a06c]/25 bg-white/[0.04] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-[#d4b896] backdrop-blur-md transition hover:border-[#d4a574]/45 hover:text-[#f0dcc0]"
              >
                Другие форматы сервиса
              </Link>
            </div>

            <h1
              className="max-w-3xl text-5xl leading-[0.95] text-[#f5e8d3] md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
            >
              Выездная кофейня
              <br />
              для мероприятий
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#caa97a] md:text-xl">
              Кофейная станция с бариста для выставок, форумов, конференций и private events. Спокойный премиальный сервис без визуальной перегрузки.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ContactModalTrigger
                label="Получить расчёт"
                className={`${ctaBtnClass} px-7 py-4 text-base`}
                sourceTag="Выездная кофейня"
                theme="dark"
              />
              <Link
                href="#contact-form"
                className="rounded-full border border-white/10 px-7 py-4 text-base text-[#c6a16d] backdrop-blur transition hover:border-[#d2a063]/35 hover:text-[#f0d3a8]"
              >
                Оставить заявку
              </Link>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
              {featureBlocks.map(([title, sub]) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-xl border border-[#c9a06c]/22 bg-[linear-gradient(155deg,rgba(255,236,210,.1),rgba(22,16,12,.75))] px-3 py-2 shadow-[0_8px_28px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.07)] backdrop-blur-md transition duration-300 hover:border-[#ddb66a]/45 hover:shadow-[0_12px_36px_rgba(0,0,0,.34),0_0_24px_rgba(200,150,90,.1)]"
                >
                  <div
                    className="pointer-events-none absolute -right-3 -top-3 h-12 w-12 rounded-full bg-[#d4a574]/10 blur-lg transition group-hover:bg-[#d4a574]/15"
                    aria-hidden
                  />
                  <div className="relative text-[13px] font-medium leading-tight text-[#f5e8d3]">{title}</div>
                  <div className="relative mt-0.5 text-[11px] leading-snug text-[#b89a72]">{sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7b5230]/40 bg-black/25 px-4 py-2 text-[#d4b896]">
                <span className="font-semibold text-[#f1dfc3]">15 мин</span>
                перезвоним
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7b5230]/40 bg-black/25 px-4 py-2 text-[#d4b896]">
                <span className="font-semibold text-[#f1dfc3]">50+</span>
                мероприятий в год
              </span>
            </div>
          </div>

          <div className="relative z-10 w-full min-h-0 lg:self-center lg:pl-3 xl:pl-6">
            <div className="relative w-full overflow-hidden rounded-[28px] border border-[#8f6238]/35 bg-[#120c09] p-2 shadow-[0_30px_70px_rgba(0,0,0,.45),0_0_40px_rgba(214,160,91,.08)] sm:rounded-[32px] sm:p-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,204,130,.08),transparent_25%)]" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] lg:aspect-auto lg:min-h-[min(58vh,600px)] lg:h-[min(58vh,600px)] xl:min-h-[min(60vh,640px)] xl:h-[min(60vh,640px)]">
                <Image
                  src="/images/Stand.jpg"
                  alt="Выездная кофейня Little Barista"
                  fill
                  className="object-cover brightness-[0.72] saturate-[0.82]"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.05),rgba(7,5,4,.18)_40%,rgba(7,5,4,.62))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#dfbf90] backdrop-blur">
                  Кофейная станция и бариста
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formats" className={sectionBg}>
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Форматы</div>
            <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Где это работает лучше всего
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#c7a679] md:mx-0">
              Сценарии, в которых кофейная зона усиливает впечатление от события и работает на удержание внимания гостей.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {formats.map((item) => (
              <article key={item.title} className={cardClass}>
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.08),transparent_26%)]" />
                <h3 className="relative z-10 text-2xl text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
                  {item.title}
                </h3>
                <p className="relative z-10 mt-4 flex-1 text-[#c7a679] leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className={sectionBg}>
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
        <div className="relative z-10">
          <PhotoCarousel />
        </div>
      </section>

      <section id="cooperation" className={sectionBg}>
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Сотрудничество</div>
            <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Варианты работы
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cooperation.map((item) => (
              <article key={item.title} className={cardClass}>
                <h3 className="text-2xl text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
                  {item.title}
                </h3>
                <p className="mt-4 text-[#c7a679] leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={sectionBg}>
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Процесс</div>
            <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Как мы работаем
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className={cardClass}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7b5230]/50 bg-black/20 text-sm font-medium text-[#d8ae78]">
                  0{index + 1}
                </div>
                <p className="mt-5 text-[#c7a679] leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className={sectionBg}>
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Преимущества</div>
            <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Почему Little Barista
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item, index) => (
              <div key={item} className={cardClass}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7b5230]/50 bg-black/20 text-sm font-medium text-[#d8ae78]">
                  {index + 1}
                </div>
                <p className="mt-5 text-[#c7a679] leading-7">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={cardClass}>
              <h3 className="text-2xl text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
                Наши проекты
              </h3>
              <ul className="mt-5 space-y-3">
                {projects.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#c7a679]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d2a063]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cardClass}>
              <h3 className="text-2xl text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
                Что входит в сервис
              </h3>
              <ul className="mt-5 space-y-3 text-[#c7a679]">
                <li>Бариста, кофейная станция и расходники.</li>
                <li>Настройка меню под формат события и аудиторию.</li>
                <li>Монтаж, демонтаж, логистика и работа на площадке.</li>
                <li>Возможность брендирования стойки и стаканов.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24 scroll-mt-28">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Контакты</div>
          <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
            Обсудим ваше мероприятие
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#c7a679]">
            Оставьте заявку, и мы предложим формат кофейной зоны под ваш поток гостей, тайминг и площадку.
          </p>
        </div>
        <Suspense fallback={<div className="mx-auto max-w-2xl rounded-[28px] border border-[#7b5230]/35 bg-[rgba(29,19,14,.92)] p-8 text-center text-[#c7a679]">Загрузка формы...</div>}>
          <ContactFormStatic />
        </Suspense>
      </section>

      <section id="contacts" className="relative mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:pb-24 scroll-mt-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className={cardClass}>
            <h2 className="text-3xl text-[#f5e8d3] md:text-4xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Контакты
            </h2>
            <p className="mt-4 text-[#c7a679]">Свяжитесь с нами напрямую или отправьте короткую заявку через форму выше.</p>
            <div className="mt-6 space-y-4 text-[#e8cfa3]">
              <a href="tel:+79624429794" className="block transition hover:text-[#f5e8d3]">+7 (962) 442-97-94</a>
              <a href="mailto:Misha310@mail.ru" className="block transition hover:text-[#f5e8d3]">Misha310@mail.ru</a>
              <p className="text-[#c7a679]">г. Москва, ул. Гаврикова, д. 2/38</p>
            </div>
            <div className="mt-8">
              <ContactModalTrigger
                label="Получить предложение"
                className={ctaBtnClass}
                sourceTag="Выездная кофейня — контакты"
                theme="dark"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[#120c09] p-2 shadow-[0_18px_40px_rgba(0,0,0,.28)]">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px]">
              <Image
                src="/images/contacts.jpg"
                alt="Команда Little Barista"
                fill
                className="object-cover brightness-[0.72] saturate-[0.82]"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.12),rgba(7,5,4,.62))]" />
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer theme="dark" />
    </div>
  );
}
