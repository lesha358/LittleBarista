import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/Navigation';
import ContactModalTrigger from '@/components/ContactModalTrigger';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = generateMetadata({
  title: 'Персонал на мероприятия — Little Barista',
  description: 'Подбор временного персонала на мероприятия в Москве и МО: хостес, промо-модели, официанты, бармены, бариста, хелперы, операторы регистрации, гардеробщики.',
  path: '/services/personnel',
});

const roles = [
  {
    title: 'Хостес',
    subtitle: 'Первое впечатление',
    text: 'Встреча гостей, навигация по площадке, помощь с рассадкой и создание безупречной атмосферы с первых минут мероприятия.',
    tag: 'Reception',
  },
  {
    title: 'Промо-модели',
    subtitle: 'Привлечение внимания',
    text: 'Презентация бренда, коммуникация с посетителями, работа у стенда и аккуратная поддержка активности на площадке.',
    tag: 'Brand Support',
  },
  {
    title: 'Стендистки',
    subtitle: 'Работа на стенде',
    text: 'Консультации по продукту, удержание интереса аудитории, помощь в коммуникации с потенциальными клиентами.',
    tag: 'Expo Staff',
  },
  {
    title: 'Хелперы',
    subtitle: 'Операционная поддержка',
    text: 'Сопровождение технических и организационных задач, быстрая помощь команде и поддержание порядка на площадке.',
    tag: 'Event Ops',
  },
  {
    title: 'Операторы регистрации',
    subtitle: 'Точность и скорость',
    text: 'Регистрация гостей, работа со списками, бейджами и потоками посетителей без очередей и лишнего стресса.',
    tag: 'Check-in',
  },
  {
    title: 'Гардеробщики',
    subtitle: 'Комфорт гостей',
    text: 'Тактичный сервис, аккуратная работа с верхней одеждой и поддержание премиального уровня обслуживания.',
    tag: 'Guest Service',
  },
  {
    title: 'Официанты',
    subtitle: 'Сервис в зале',
    text: 'Поддержание темпа банкета или фуршета, аккуратная подача блюд и напитков, внимание к гостям без навязчивости.',
    tag: 'F&B Service',
  },
  {
    title: 'Бармены',
    subtitle: 'Бар и коктейли',
    text: 'Классические и авторские напитки, стабильная скорость обслуживания и аккуратная работа на барной зоне.',
    tag: 'Bar',
  },
  {
    title: 'Бариста',
    subtitle: 'Кофе на площадке',
    text: 'Стабильное качество напитков, работа с потоком гостей и аккуратная коммуникация у кофейной станции.',
    tag: 'Coffee',
  },
];

const featureBlocks = [
  ['Подбор под задачу', 'B2B / private events'],
  ['Москва и область', 'Оперативный запуск'],
  ['Проверенный staff', 'Единый стандарт сервиса'],
];

const advantages = [
  'Прозрачность и отсутствие агентских комиссий',
  'Гибкая система ценообразования и партнёрские условия',
  'Собственная система оценки компетентности сотрудников',
  'Оперативная обратная связь и принятие ключевых решений',
  'Мы продаём не людей, а их навыки и возможности',
];

export default function PersonnelPage() {
  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://littlebarista.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://littlebarista.ru/services' },
      { '@type': 'ListItem', position: 3, name: 'Персонал на мероприятия', item: 'https://littlebarista.ru/services/personnel' },
    ],
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Персонал на мероприятия',
    areaServed: ['Москва', 'Московская область'],
    serviceType: 'Временный персонал',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Little Barista',
      email: 'Misha310@mail.ru',
      telephone: '+7 962 442-97-94',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        streetAddress: 'ул. Гаврикова, д. 2/38',
        addressCountry: 'RU',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0d0705] text-[#f3e4c8]">
      <Script id="breadcrumbs-personnel" type="application/ld+json">{JSON.stringify(jsonLdBreadcrumbs)}</Script>
      <Script id="service-personnel" type="application/ld+json">{JSON.stringify(jsonLdService)}</Script>

      <Navigation theme="dark" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#6f4a26]/40 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(190,118,45,.14),transparent_22%),linear-gradient(180deg,#140c09_0%,#090605_100%)]">
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.06),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 pt-24 md:px-10 md:pt-44 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14 lg:py-24">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d2a063]/25 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#b99667] backdrop-blur">
              Event staff
              <span className="h-1 w-1 rounded-full bg-[#d2a063]" />
              Premium service
            </div>
            <h1 className="max-w-3xl text-5xl leading-[0.95] text-[#f5e8d3] md:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              Персонал на мероприятия
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#caa97a] md:text-xl">
              Подбираем персонал, который работает не просто корректно, а усиливает впечатление от события: аккуратно, профессионально и в стиле вашего бренда.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ContactModalTrigger
                label="Получить коммерческое предложение"
                className="rounded-full border border-[#e6c18c]/45 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(36,23,16,.92),rgba(15,10,8,.98))] px-7 py-4 text-base font-medium text-[#f3dfbf] shadow-[0_0_18px_rgba(214,160,91,.15),inset_0_1px_0_rgba(255,255,255,.04)] transition hover:-translate-y-0.5 hover:border-[#f0d3a8]/70 hover:shadow-[0_0_28px_rgba(214,160,91,.22)]"
                sourceTag="Персонал"
                theme="dark"
              />
              <Link
                href="/#services-triad"
                className="rounded-full border border-white/10 px-7 py-4 text-base text-[#c6a16d] backdrop-blur transition hover:border-[#d2a063]/35 hover:text-[#f0d3a8]"
              >
                Посмотреть форматы
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-3 md:items-stretch">
              {featureBlocks.map(([title, sub]) => (
                <div key={title} className="flex flex-col h-full rounded-2xl border border-[#7a5330]/30 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="text-sm text-[#f1dfc3]">{title}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9f7b52]">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[32px] border border-[#8f6238]/35 bg-[#120c09] p-3 shadow-[0_30px_70px_rgba(0,0,0,.45),0_0_40px_rgba(214,160,91,.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,204,130,.08),transparent_25%)]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/event.jpg"
                  alt="Персонал на мероприятии"
                  fill
                  className="object-cover brightness-[0.7] saturate-[0.8]"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.05),rgba(7,5,4,.18)_40%,rgba(7,5,4,.62))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#dfbf90] backdrop-blur">
                  Curated team
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                  {[
                    ['Хостес', 'Регистрация, welcome, навигация'],
                    ['Сервис', 'Вежливость, темп, аккуратность'],
                  ].map(([title, sub]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <div className="text-sm text-[#f5e8d3]">{title}</div>
                      <div className="mt-1 text-xs text-[#c5a173]">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Виды персонала */}
      <section id="types" className="relative overflow-hidden w-full py-16 lg:py-24 scroll-mt-28 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.18),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(190,118,45,.1),transparent_22%),linear-gradient(180deg,#120c09_0%,#0d0806_50%,#090605_100%)]">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Категории</div>
          <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>Виды персонала</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {roles.map((role, index) => (
            <article
              key={role.title}
              className="group relative flex flex-col h-full overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d3a468]/55 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_28px_rgba(211,164,104,.08)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.08),transparent_26%)]" />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-[#9f7b52]">{role.tag}</div>
                  <h3 className="mt-4 text-3xl leading-none text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>{role.title}</h3>
                  <div className="mt-3 text-sm text-[#d0ab78]">{role.subtitle}</div>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7b5230]/50 bg-black/20 text-[#d8ae78]">
                  0{index + 1}
                </div>
              </div>

              <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-[#d2a063]/70 via-[#d2a063]/15 to-transparent" />

              <p className="relative z-10 mt-6 flex-1 min-h-0 text-lg leading-8 text-[#c7a679]">
                {role.text}
              </p>

              <div className="relative z-10 mt-8 flex shrink-0 justify-end">
                <div className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#a47f56]">
                  Premium staff
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="relative overflow-hidden w-full py-16 lg:py-24 scroll-mt-28 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.18),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(190,118,45,.1),transparent_22%),linear-gradient(180deg,#120c09_0%,#0d0806_50%,#090605_100%)]">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">О нас</div>
          <h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>Почему мы</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-4xl">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] transition duration-300 hover:border-[#d3a468]/55"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#7b5230]/50 bg-black/20 text-[#d8ae78] text-sm font-medium">
                  {i + 1}
                </span>
                <p className="text-[#c7a679] leading-7 pt-0.5">{adv}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24 scroll-mt-28">
        <div className="relative overflow-hidden rounded-[32px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-8 md:p-12 text-center max-w-2xl mx-auto shadow-[0_24px_60px_rgba(0,0,0,.35),0_0_40px_rgba(214,160,91,.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.06),transparent_30%)]" />
          <h2 className="relative z-10 text-3xl md:text-4xl text-[#f5e8d3] mb-4" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
            Готовы обсудить ваше мероприятие?
          </h2>
          <p className="relative z-10 text-[#c7a679] mb-8 text-base md:text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для расчёта стоимости и подбора персонала.
          </p>
          <ContactModalTrigger
            label="Получить индивидуальное коммерческое предложение"
            className="relative z-10 rounded-full border border-[#e6c18c]/45 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(36,23,16,.92),rgba(15,10,8,.98))] px-8 py-4 text-base font-medium text-[#f3dfbf] shadow-[0_0_18px_rgba(214,160,91,.15),inset_0_1px_0_rgba(255,255,255,.04)] transition hover:-translate-y-0.5 hover:border-[#f0d3a8]/70 hover:shadow-[0_0_28px_rgba(214,160,91,.22)]"
            sourceTag="Персонал — контакты"
            theme="dark"
          />
        </div>
      </section>

      <FloatingCTA />
      <Footer theme="dark" />
    </div>
  );
}
