import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import ContactModalTrigger from '@/components/ContactModalTrigger'
import BarContactForm from '@/components/BarContactForm'
import Footer from '@/components/Footer'
import BarCalculatorQuiz from '@/components/BarCalculatorQuiz'
import FloatingWhatsAppCalc from '@/components/FloatingWhatsAppCalc'
import Image from 'next/image'
import Script from 'next/script'
import { cormorant } from '@/lib/fonts'
import ServiceAccordion, { type ServiceItem } from '@/components/ui/ServiceAccordion'

export const metadata = generateMetadata({
  title: 'Выездной бар в Москве — коктейли, моктейли и бармен‑шоу',
  description: 'Организация выездного бара в Москве и МО: классические и авторские коктейли, non‑alcohol, бармен‑шоу, пирамида из шампанского. Под ключ: стойка, лёд, посуда, бармены.',
  path: '/services/mobile-bar',
})

export default function MobileBarPage() {
  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://littlebarista.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://littlebarista.ru/services' },
      { '@type': 'ListItem', position: 3, name: 'Выездной бар', item: 'https://littlebarista.ru/services/mobile-bar' },
    ],
  } as const

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Выездной бар',
    areaServed: ['Москва', 'Московская область'],
    serviceType: 'Бар на мероприятие',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Little Barista',
      email: 'Misha310@mail.ru',
      telephone: '+7 962 442-97-94',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        streetAddress: 'ул. Правды, д. 7/9к1',
        addressCountry: 'RU',
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'RUB',
        price: '0',
      },
    },
  } as const

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что входит в услугу выездного бара? ',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Барная стойка, лёд, стекло/эко‑посуда, шейкеры и инвентарь, ингредиенты и 1–2 бармена. Возможны авторское меню, декор и брендирование.',
        },
      },
      {
        '@type': 'Question',
        name: 'Можно сделать безалкогольное меню?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, предлагаем полный non‑alcohol и моктейли, а также zero‑proof версии классики.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько времени нужно на монтаж?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Обычно 40–60 минут в зависимости от площадки и выбранного формата стойки.',
        },
      },
      {
        '@type': 'Question',
        name: 'Работаете на выставках и в офисах?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, выезжаем на выставки, корпоративы, свадьбы, квартиры и частные площадки. Помогаем с пропусками.',
        },
      },
    ],
  } as const
  const Divider = () => (
    <div className="mt-4 flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-[#c78149]/35" />
      <span className="relative inline-flex h-5 w-5 items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-sm bg-[#c78149]/80" />
        <span className="absolute inset-1 rotate-45 rounded-sm bg-[#0d0a08]" />
      </span>
      <span className="h-px w-16 bg-[#c78149]/35" />
    </div>
  )
  const premiumCtaClass =
    'rounded-full border-2 border-[#c9a06c] bg-gradient-to-b from-[#faf3e8] via-[#f0e2cf] to-[#e5d0b0] px-6 py-3 text-sm font-semibold text-[#1a1008] shadow-[0_10px_36px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.65),0_0_28px_rgba(200,150,80,.22)] transition hover:-translate-y-0.5 hover:from-[#fffaf3] hover:via-[#f7ebdc] hover:to-[#edd9be] hover:border-[#ddb66a] hover:shadow-[0_14px_44px_rgba(0,0,0,.48),0_0_36px_rgba(220,170,100,.3)]'
  const subtleCtaClass =
    'mt-4 inline-block rounded-full border border-[#c78149]/40 bg-white/[0.04] px-4 py-2.5 text-center text-[#e2d4c8] transition hover:border-[#c9a06c]/60 hover:bg-white/[0.08] hover:text-[#f5eee4]'
  const alcoholic = [
    'Алкогольные',
  ]
  const alcoholicItems: ServiceItem[] = [
    { id:'mulled', title:'Глинтвейн-бар', description:'Зимний формат с ароматным глинтвейном. Идеален для уличных мероприятий и новогодних вечеринок.' },
    { id:'mobile', title:'Мобильный бар', description:'Полноценная барная станция с барменами, посудой и лёдом. Быстрый монтаж и аккуратный демонтаж.' },
    { id:'champagne', title:'Пирамида из шампанского', description:'Эффектная подача игристого — wow-элемент welcome-зоны и фотозоны.' },
    { id:'show', title:'Бармен-шоу', description:'Динамичное выступление с жонглированием и огненными элементами. Кульминация вечера.' },
    { id:'punch', title:'Пунш-бар', description:'Горячие и холодные пунши в объёмной подаче — быстро обслуживают большие потоки гостей.' },
  ]

  const softTitle = 'Безалкогольные'
  const softItems: ServiceItem[] = [
    { id:'bubble', title:'Бабл-ти бар', description:'Тапиока, сиропы и молочное/фруктовое основание. Трендовый формат для гостей любого возраста.' },
    { id:'zero', title:'Безалкогольный коктейль-бар', description:'Моктейли и zero‑proof версии классики, подача как в настоящем баре.' },
    { id:'oxygen', title:'Кислородный бар', description:'Оздоровительный формат для спорта и ретритов: кислородные коктейли и травяные чаи.' },
    { id:'coffee', title:'Кофейный бар', description:'Эспрессо‑меню от капучино до флэт уайт. Свежая обжарка, альтернативное молоко.' },
    { id:'lemon', title:'Лимонадный бар', description:'Домашние лимонады и ледяные чаи с сезонными фруктами и травами.' },
    { id:'smoothie', title:'Смузи-бар', description:'Ягодные и тропические смузи на основе свежих фруктов и йогурта.' },
    { id:'fresh', title:'Фреш-бар', description:'Свежевыжатые соки — быстрый и полезный формат для дневных событий.' },
    { id:'milkshake', title:'Милк-шейк бар', description:'Классические и авторские милкшейки с топпингами — фаворит детей и взрослых.' },
    { id:'choco', title:'Шоколадный фонтан', description:'Зрелищная десертная станция с фруктами и маршмеллоу. Любим фотокамерами.' },
    { id:'fondue', title:'Шоколадный фондю-бар', description:'Индивидуальная подача фондю порциями — аккуратно и премиально.' },
  ]

  const themes = [
    'Бар в офис',
    'Бар на 23 февраля',
    'Бар на 8 марта',
    'Бар на выставку',
    'Бар на корпоратив',
    'Бар на свадьбу',
    'Бар на Хэллоуин',
    'Гавайский бар',
    'Зимний бар',
    'Мексиканский бар',
    'Новогодний бар',
    'Бар на мальчишник',
    'Бар на девичник',
  ]

  const advantages = [
    'Мгновенный выезд. Работаем по Москве и Подмосковью',
    'Заряд энергии. Бармены‑профессионалы с опытом 5+ лет',
    'Безупречный вкус. Меню под ваши пожелания — от авторского до классики',
    'Стиль и функциональность. Эстетика для ваших фото',
    'Берём на себя всё: стойка, лёд, посуда, гарниши, сервис',
  ]

  const stats = [
    { k: '7+ лет', v: 'на рынке' },
    { k: '100+', v: 'событий в год' },
    { k: '4.9/5', v: 'оценка клиентов' },
    { k: '24/7', v: 'поддержка' },
  ] as const

  const classics = [
    'Мохито (Mojito)', 'Маргарита (Margarita)', 'Негрони (Negroni)', 'Олд Фэшн (Old Fashioned)', 'Московский мул (Moscow Mule)',
    'Апероль Шприц (Aperol Spritz)', 'Джин‑тоник (Gin Tonic)', 'Космополитен (Cosmopolitan)', 'Виски Сауэр (Whiskey Sour)', 'Май Тай (Mai Tai)'
  ]

  const freshBerry = [
    'Брамбл (Bramble)', 'Клубника с шампанским', 'Эпл Мартини (Appletini)', 'Лонг Айленд Айс Ти', 'Пина Колада',
    'Дайкири', 'Клюквенный Мартини', 'Французский Мартини', 'Текила Санрайз', 'Отвёртка (Screwdriver)'
  ]

  const trendy = [
    'Эспрессо Мартини', 'Пенициллин', 'Том Ям', 'Сайдкар', 'Пачаган',
    'Беллини', 'Куба Либре', 'Аквино', 'Фирменный «От бармена»', 'Глинтвейн (зима)'
  ]

  const zeroProof = [
    'Мохито безалкогольный', 'Shirley Temple', 'Имбирный лимонад', 'Лайм‑мята‑огурец',
    'Клубничный пунш', 'Малиновый физз', 'Сангрия безалкогольная', 'Но‑грони', 'Клюквенный спритц', 'Арбузный кулер'
  ]

  return (
    <main className={`min-h-screen relative overflow-x-hidden bg-[#0d0a08] text-cream-50`}>
      <Script id="breadcrumbs-mobile-bar" type="application/ld+json">{JSON.stringify(jsonLdBreadcrumbs)}</Script>
      <Script id="service-mobile-bar" type="application/ld+json">{JSON.stringify(jsonLdService)}</Script>
      <Script id="faq-mobile-bar" type="application/ld+json">{JSON.stringify(jsonLdFaq)}</Script>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 max-w-[100vw] rounded-full bg-gradient-to-br from-[#c78149]/18 via-[#5c3a24]/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 max-w-[100vw] rounded-full bg-gradient-to-tr from-[#c78149]/14 via-[#cc6d3c]/8 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-48 bg-gradient-to-t from-[#c78149]/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,129,73,0.05),transparent_60%)]" />
      </div>

      <Navigation theme="dark" />

      <section id="intro" className="container px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-[#e2d4c8]/85 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c78149]" />
              Бар под ключ: меню, посуда, лёд, бармены
            </div>
            <h1 className={`${cormorant.className} mt-3 sm:mt-4 text-[34px] sm:text-6xl md:text-7xl font-semibold text-[#f5eee4] tracking-tight`}>
              Выездной бар
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-base leading-relaxed text-[#d7c2a7] sm:text-lg">
              Классические и авторские коктейли, non‑alcohol и моктейли. Работаем на площадках любого формата — от офисов и квартир до выставок и больших событий.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="divide-y divide-[#c78149]/10 rounded-2xl border border-[#c78149]/20 bg-[rgba(0,0,0,0.35)] text-[#e2d4c8]/90 backdrop-blur shadow-lg">
                <li className="px-4 py-3">Меню под тематику и тайминг</li>
                <li className="px-4 py-3">Профессиональные бармены и станция</li>
              </ul>
              <ul className="divide-y divide-[#c78149]/10 rounded-2xl border border-[#c78149]/20 bg-[rgba(0,0,0,0.35)] text-[#e2d4c8]/90 backdrop-blur shadow-lg">
                <li className="px-4 py-3">Стекло/эко‑посуда и лёд включены</li>
                <li className="px-4 py-3">Быстрый расчёт за 15 минут</li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <ContactModalTrigger
                label="Заказать бар"
                className={`${premiumCtaClass} w-full text-center sm:w-auto`}
                sourceTag="Выездной бар"
                theme="dark"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-[#d7c2a7]">
                <span className="font-semibold text-[#f5eee4]">100+ событий</span>
                <span>в портфолио</span>
              </span>
            </div>
            <Divider />
          </div>
          <div className="relative md:h-[460px] h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#c78149]/16 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            <div className="relative h-full w-full">
              <Image
                src="/images/bar/main.webp"
                alt="Выездной бар"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <BarCalculatorQuiz />

      <section id="cooperation" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#c78149]/20 bg-[rgba(0,0,0,0.35)] px-4 py-5 text-[#f5eee4] shadow backdrop-blur"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#c78149]/75">0{i + 1}</div>
              <div className="mt-3">
                <div className="text-lg font-semibold tracking-tight sm:text-xl">{s.k}</div>
                <div className="mt-0.5 text-xs text-[#d7c2a7] sm:text-sm">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="sr-only">Услуги выездного бара</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ServiceAccordion 
            headline={alcoholic[0]} 
            items={alcoholicItems}
            cta={{ label: 'Оставить заявку', sourceTag: 'Выездной бар — Алкогольные', theme: 'dark' }}
          />
          <ServiceAccordion 
            headline={softTitle} 
            items={softItems}
            cta={{ label: 'Оставить заявку', sourceTag: 'Выездной бар — Безалкогольные', theme: 'dark' }}
          />
        </div>
        <div className="mt-6 p-5 rounded-2xl border border-amber-200/20 bg-[rgba(0,0,0,0.35)] backdrop-blur shadow">
          <h3 className="text-sm tracking-wider uppercase text-white/60">Тематические</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {themes.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full border border-amber-200/20 bg-white/5 text-amber-100/85 text-xs sm:text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Работаем для вашего комфорта</h2>
        <Divider />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((t, i) => (
            <div key={i} className="p-5 rounded-2xl border border-amber-200/20 bg-[rgba(0,0,0,0.35)] backdrop-blur shadow">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c78149]/45 bg-black/20 text-sm font-medium text-[#d7c2a7]">{i+1}</div>
                <p className="text-[#e2d4c8]/88 text-sm sm:text-base">{t}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[#d7c2a7]">Результат: ваши гости довольны, а праздник выглядит как продуманная premium-зона.</p>
      </section>
      {/* Галерея временно скрыта */}
      <section id="themes" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Тематические бары</h2>
        <Divider />
        <p className="mt-2 text-white/70 max-w-3xl text-sm sm:text-base">Оформим стойку, подачу и меню под конкретный сценарий мероприятия.</p>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c78149]/35 bg-black/20 text-sm font-medium text-[#d7c2a7]">01</div>
              <h3 className="text-lg font-semibold text-white">Офис и бизнес</h3>
            </div>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80 text-sm sm:text-base">
              <li>Бар в офис</li>
              <li>Бар на выставку</li>
              <li>Бар на корпоратив</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">презентации</span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">стенды</span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">timing‑service</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c78149]/35 bg-black/20 text-sm font-medium text-[#d7c2a7]">02</div>
              <h3 className="text-lg font-semibold text-white">Праздники и сезоны</h3>
            </div>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80 text-sm sm:text-base">
              <li>Бар на 23 февраля • Бар на 8 марта</li>
              <li>Новогодний бар • Зимний бар</li>
              <li>Бар на Хэллоуин</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">бренд‑декор</span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">сезонные гарниши</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c78149]/35 bg-black/20 text-sm font-medium text-[#d7c2a7]">03</div>
              <h3 className="text-lg font-semibold text-white">Свадьбы и вечеринки</h3>
            </div>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80 text-sm sm:text-base">
              <li>Бар на свадьбу</li>
              <li>Бар на мальчишник • Бар на девичник</li>
              <li>Гавайский бар • Мексиканский бар</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">пирамида из шампанского</span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">бармен‑шоу</span>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Чем интересен выездной коктейль-бар</h2>
        <Divider />
        <p className="mt-2 text-white/70 max-w-3xl text-sm sm:text-base">Это универсальное решение для событий разного формата.</p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'На вечеринке — освежающие напитки между танцами',
            'На банкетах/свадьбах — главный атрибут welcome‑зоны',
            'На выставках/презентациях — точка притяжения и атмосфера',
            'На детских праздниках — яркие безалкогольные напитки',
            'На корпоративах — удачное дополнение к фуршету',
            'На спортивных событиях и ретритах — кислородные коктейли/чаи',
          ].map((t,i)=>(
            <div key={i} className="p-5 rounded-2xl border border-white/10 bg-white/5 text-white/80 text-sm sm:text-base">{t}</div>
          ))}
        </div>
      </section>

      <section id="menu-list" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Примеры коктейлей</h2>
        <Divider />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative p-5 pr-24 sm:pr-28 md:pr-36 lg:pr-48 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <h3 className="text-lg font-semibold text-white">Классика</h3>
            <ul className="mt-3 space-y-1 list-disc pl-5 text-white/80 text-sm sm:text-base">
              {classics.map(i => <li key={i}>{i}</li>)}
            </ul>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-28 md:w-36 lg:w-48">
              <Image src="/images/bar/mohito.jpg" alt="Мохито" fill className="object-cover" loading="lazy" sizes="192px" />
            </div>
          </div>
          <div className="relative p-5 pr-24 sm:pr-28 md:pr-36 lg:pr-48 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <h3 className="text-lg font-semibold text-white">Свежие и ягодные</h3>
            <ul className="mt-3 space-y-1 list-disc pl-5 text-white/80 text-sm sm:text-base">
              {freshBerry.map(i => <li key={i}>{i}</li>)}
            </ul>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-28 md:w-36 lg:w-48">
              <Image src="/images/bar/Bramble.jpg" alt="Брамбл" fill className="object-cover" loading="lazy" sizes="192px" />
            </div>
          </div>
          <div className="relative p-5 pr-24 sm:pr-28 md:pr-36 lg:pr-48 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <h3 className="text-lg font-semibold text-white">Трендовые и авторские</h3>
            <ul className="mt-3 space-y-1 list-disc pl-5 text-white/80 text-sm sm:text-base">
              {trendy.map(i => <li key={i}>{i}</li>)}
            </ul>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-28 md:w-36 lg:w-48">
              <Image src="/images/bar/espresso-martini.jpg" alt="Эспрессо Мартини" fill className="object-cover" loading="lazy" sizes="192px" />
            </div>
          </div>
          <div className="relative p-5 pr-24 sm:pr-28 md:pr-36 lg:pr-48 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <h3 className="text-lg font-semibold text-white">Безалкогольные (Zero‑Proof)</h3>
            <ul className="mt-3 space-y-1 list-disc pl-5 text-white/80 text-sm sm:text-base">
              {zeroProof.map(i => <li key={i}>{i}</li>)}
            </ul>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-28 md:w-36 lg:w-48">
              <Image src="/images/bar/ShirleyTemple.jpg" alt="Shirley Temple" fill className="object-cover" loading="lazy" sizes="192px" />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Пакеты обслуживания</h2>
        <Divider />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <h3 className="text-xl font-semibold text-white">Light</h3>
            <p className="mt-2 text-white/70">Безалкогольные коктейли • бармен • посуда • лёд • сиропы.</p>
            <ContactModalTrigger
              label="Запросить расчёт"
              className={subtleCtaClass}
              sourceTag="Выездной бар — пакет Light"
              theme="dark"
            />
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <h3 className="text-xl font-semibold text-white">Classic</h3>
            <p className="mt-2 text-white/70">Классические коктейли • 2 бармена • барная станция • гарниши.</p>
            <ContactModalTrigger
              label="Запросить расчёт"
              className={subtleCtaClass}
              sourceTag="Выездной бар — пакет Classic"
              theme="dark"
            />
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <h3 className="text-xl font-semibold text-white">Pro</h3>
            <p className="mt-2 text-white/70">Авторское меню • бар‑менеджер • декор • брендирование стойки.</p>
            <ContactModalTrigger
              label="Запросить расчёт"
              className={subtleCtaClass}
              sourceTag="Выездной бар — пакет Pro"
              theme="dark"
            />
          </div>
        </div>
        <p className="mt-4 text-sm sm:text-base text-amber-100/80 text-center">
          Все пакеты включают монтаж, логистику и предварительную смету за&nbsp;15&nbsp;минут.
        </p>
      </section>

      <section className="container px-4 sm:px-6 lg:px-8 py-12" id="order-form">
        <div className="p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-amber-500/20 shadow-sm">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-[#f5eee4]`}>Как это работает</h2>
          <div className="mt-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-3">
            {[
              'Оставляете заявку — перезвоним за 15 минут',
              'Подбираем меню и формат, согласуем смету',
              'Привозим станцию, посуду, лёд и ингредиенты',
              'Работаем на площадке и аккуратно демонтируем',
            ].map((text, idx, arr) => (
              <div key={idx} className="flex items-center gap-3 md:gap-2">
                <div className="relative flex-1">
                  <div className="flex items-start gap-3 p-4 md:p-3 rounded-xl border border-amber-500/20 bg-black/30 text-amber-100 shadow-sm">
                    <div className="shrink-0 w-7 h-7 md:w-6 md:h-6 rounded-full bg-amber-500 text-[#0d0a08] flex items-center justify-center text-sm font-semibold">{idx + 1}</div>
                    <p className="text-sm sm:text-base text-amber-100/80">{text}</p>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center text-amber-300/50">
                    <svg width="28" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 md:hidden flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-amber-300/50"><path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </section>

      <section id="contacts" className="container px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 rounded-2xl border border-amber-500/20 bg-black/30 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-100">Готовы оформить заявку?</h2>
          <p className="mt-2 text-amber-100/80">Заполните короткую форму — перезвоним за 15 минут.</p>
          <div className="mt-4">
            <BarContactForm />
          </div>
        </div>
      </section>

      <Footer theme="dark" />
      <FloatingWhatsAppCalc />
    </main>
  )
}



