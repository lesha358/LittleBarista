import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import ContactModalTrigger from '@/components/ContactModalTrigger'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = generateMetadata({
	title: 'Аренда кофемашин в Москве — посуточно для мероприятий и офиса',
	description: 'Аренда и прокат кофемашин в Москве и МО: суперавтоматические и рожковые модели. Доставка, подключение, расходники и поддержка. Посуточно 1–5 дней или на всё мероприятие.',
	path: '/services/coffee-machines',
})

const machines = [
	{
		name: 'Jetino JL30',
		type: 'Суперавтоматическая',
		description:
			'Экономичная кофемашина на живом молоке. Идеальна для выставок, стендов, конференций или офисов. Возможна выдача в две чашки одновременно.',
		performance: 'до 100 чашек/день',
		dimensions: '300×548×490 мм',
		weight: '15 кг',
		cupsPerDay: 'до 100',
		notes: 'Одновременное приготовление 2 напитков',
		image: '/images/machines/JL30.jpg',
	},
	{
		name: 'Dr.coffee F10',
		type: 'Суперавтоматическая профессиональная',
		description:
			'Сенсорный экран с русским меню. Автоприготовление 24 напитков: эспрессо, капучино, латте, американо, молоко, горячая вода и др.',
		performance: 'до 100 чашек/день',
		dimensions: '34×45×50 см',
		weight: '16.5 кг',
		cupsPerDay: 'до 100',
		notes: 'Настройка объёма молока, пенки, крепости и порции',
		image: '/images/machines/drcoffee-f10.webp',
	},
	{
		name: 'Jofemar Bluetec G23',
		type: 'Профессиональный кофейный аппарат',
		description:
			'Для мест с высоким потреблением. Большая загрузка, совместим с платёжными системами, корпус из нержавеющей стали.',
		performance: 'до 500 чашек/день',
		dimensions: '410×740×450 мм (Ш×В×Г)',
		weight: '45 кг',
		cupsPerDay: 'до 500',
		notes: 'Элегантный дизайн, высокая производительность',
		image: '/images/machines/Jofemar.jpg',
	},
]

const espressoMachines = [
	{
		name: 'NUOVA SIMONELLI APPIA LIFE COMPACT 2GR S',
		type: 'Рожковая полуавтоматическая',
		description:
			'Для профессионального применения на больших мероприятиях. Требуются навыки бариста и кофемолка.',
		performance: 'Высокая (зависит от бариста)',
		dimensions: '554×498×545 мм (Ш×В×Г)',
		weight: '42.5 кг',
		cupsPerDay: '—',
		notes: 'Мощность 2.9 кВт, 220 В',
		image: '/images/machines/Simonelli.jpg',
	},
	{
		name: 'FIAMMA Caravel 2 Compact TC Restyle',
		type: 'Рожковая полуавтоматическая',
		description:
			'Для кафе и событий с большим потоком гостей. Требуются навыки бариста и кофемолка.',
		performance: 'Высокая (зависит от бариста)',
		dimensions: '563×530 (Ш×В), 2 группы',
		weight: '—',
		cupsPerDay: '—',
		notes: 'Высокая группа, 1 бойлер',
		image: '/images/machines/Caravel.webp',
	},
]

const heroFeatures = [
	['Посуточно 1–5 дней', 'Или на всё мероприятие'],
	['Подбор под поток', 'Суперавто и рожковые'],
	['Доставка и подключение', 'Обучение персонала'],
	['Опция «под ключ»', 'Бариста и расходники'],
]

const sectionBg =
	'relative overflow-hidden w-full py-16 lg:py-24 scroll-mt-28 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.18),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(190,118,45,.1),transparent_22%),linear-gradient(180deg,#120c09_0%,#0d0806_50%,#090605_100%)]'

const cardClass =
	'group relative flex flex-col h-full overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a468]/55 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_28px_rgba(211,164,104,.08)]'

/** Светлая премиум-кнопка: контраст на тёмном фоне, золото по краю */
const ctaBtnClass =
	'rounded-full border-2 border-[#c9a06c] bg-gradient-to-b from-[#faf3e8] via-[#f0e2cf] to-[#e5d0b0] px-6 py-3 text-sm font-semibold text-[#1a1008] shadow-[0_10px_36px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.65),0_0_28px_rgba(200,150,80,.22)] transition hover:-translate-y-0.5 hover:from-[#fffaf3] hover:via-[#f7ebdc] hover:to-[#edd9be] hover:border-[#ddb66a] hover:shadow-[0_14px_44px_rgba(0,0,0,.48),0_0_36px_rgba(220,170,100,.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c48a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0705] active:translate-y-0'

export default function CoffeeMachinesRentPage() {
	return (
		<div className="min-h-screen bg-[#0d0705] text-[#f3e4c8]">
			<Script id="breadcrumbs-jsonld" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://littlebarista.ru/' },
						{ '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://littlebarista.ru/services' },
						{ '@type': 'ListItem', position: 3, name: 'Аренда кофемашин', item: 'https://littlebarista.ru/services/coffee-machines' },
					],
				})}
			</Script>
			<Script id="service-jsonld" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Service',
					name: 'Аренда кофемашин',
					areaServed: ['Москва', 'Московская область'],
					provider: {
						'@type': 'LocalBusiness',
						name: 'Little Barista',
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Москва',
							streetAddress: 'ул. Правды, д. 7/9к1',
							addressCountry: 'RU',
						},
						email: 'Misha310@mail.ru',
						telephone: '+7 962 442-97-94',
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
				})}
			</Script>
			<Script id="faq-jsonld" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: 'На какой срок можно взять кофемашину в аренду?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Обычно посуточно на 1–5 дней или на весь срок мероприятия. Долгосрочная аренда по запросу.',
							},
						},
						{
							'@type': 'Question',
							name: 'Вы доставляете и подключаете оборудование?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, привозим, подключаем и проверяем работу. Также обучаем персонал.',
							},
						},
						{
							'@type': 'Question',
							name: 'Можно ли заказать бариста и расходники?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, есть опция «под ключ»: бариста, кофе, молоко, сиропы, одноразовая посуда.',
							},
						},
						{
							'@type': 'Question',
							name: 'Какая модель подойдёт под мой поток гостей?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Мы подберём модель под ожидаемую нагрузку: до 100 чашек/день или до 500 и выше — рекомендованные варианты указаны на странице.',
							},
						},
					],
				})}
			</Script>

			<Navigation theme="dark" />

			{/* Hero */}
			<section
				id="intro"
				className="relative overflow-hidden border-b border-[#6f4a26]/40 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(190,118,45,.14),transparent_22%),linear-gradient(180deg,#140c09_0%,#090605_100%)]"
			>
				<div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.06),transparent)]" />
				<div className="mx-auto grid max-w-[85rem] grid-cols-1 gap-10 px-6 pb-16 pt-[104px] md:px-10 md:pt-[108px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.22fr)] lg:gap-x-8 lg:gap-y-10 lg:pb-24 lg:pl-10 lg:pr-5 lg:pt-[112px] xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.28fr)] xl:gap-x-10 xl:pr-4">
					<div className="relative z-10 min-h-0 lg:max-w-none lg:self-start">
						<div className="mb-6 flex flex-wrap items-center gap-3">
							<div className="inline-flex items-center gap-3 rounded-full border border-[#d4a574]/35 bg-[linear-gradient(180deg,rgba(255,245,230,.08),rgba(18,12,9,.5))] px-4 py-2.5 text-[11px] uppercase tracking-[0.26em] text-[#e0c49a] shadow-[0_4px_24px_rgba(0,0,0,.25)] backdrop-blur-md">
								Equipment rent
								<span className="h-1 w-1 rounded-full bg-[#d4a574]" />
								Москва и МО
							</div>
							<Link
								href="/services/coffee-machines/long-term"
								className="inline-flex rounded-full border border-[#c9a06c]/25 bg-white/[0.04] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-[#d4b896] backdrop-blur-md transition hover:border-[#d4a574]/45 hover:text-[#f0dcc0]"
							>
								Долгосрочная аренда для офисов
							</Link>
						</div>
						<h1
							className="max-w-3xl text-5xl leading-[0.95] text-[#f5e8d3] md:text-6xl lg:text-7xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Аренда кофемашин для событий и бизнеса
						</h1>
						<p className="mt-5 max-w-2xl text-lg leading-8 text-[#caa97a] md:text-xl">
							Для выставок, конференций, переговорных и pop‑up. Кофейная зона без покупки техники: доставка, подключение, расходники и поддержка.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<ContactModalTrigger
								label="Получить расчёт"
								className={`${ctaBtnClass} px-7 py-4 text-base`}
								sourceTag="Аренда кофемашин"
								theme="dark"
							/>
							<Link
								href="/#services-triad"
								className="rounded-full border border-white/10 px-7 py-4 text-base text-[#c6a16d] backdrop-blur transition hover:border-[#d2a063]/35 hover:text-[#f0d3a8]"
							>
								Все услуги
							</Link>
						</div>
						<div className="mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
							{heroFeatures.map(([title, sub]) => (
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
								<span className="font-semibold text-[#f1dfc3]">100+</span>
								событий обслужили
							</span>
						</div>
					</div>

					<div className="relative z-10 w-full min-h-0 lg:self-center lg:pl-3 xl:pl-6">
						<div className="relative w-full overflow-hidden rounded-[28px] border border-[#8f6238]/35 bg-[#120c09] p-2 shadow-[0_30px_70px_rgba(0,0,0,.45),0_0_40px_rgba(214,160,91,.08)] sm:rounded-[32px] sm:p-2">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,204,130,.08),transparent_25%)]" />
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] lg:aspect-auto lg:min-h-[min(58vh,600px)] lg:h-[min(58vh,600px)] xl:min-h-[min(60vh,640px)] xl:h-[min(60vh,640px)]">
								<Image
									src="/images/machines/main.jpg"
									alt="Арендная кофемашина"
									fill
									className="object-cover brightness-[0.72] saturate-[0.82]"
									priority
									unoptimized
								/>
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.05),rgba(7,5,4,.18)_40%,rgba(7,5,4,.62))]" />
								<div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#dfbf90] backdrop-blur">
									Суперавто и рожковые
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Условия */}
			<section id="cooperation" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
						<div className={cardClass}>
							<div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.08),transparent_26%)]" />
							<div className="relative z-10 flex items-center gap-3">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7b5230]/50 bg-black/25 text-xl text-[#d8ae78]">
									☕
								</div>
								<h2
									className="text-2xl text-[#f2e3c7] md:text-3xl"
									style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
								>
									Кофемашина на 1–5 дней посуточно
								</h2>
							</div>
							<ul className="relative z-10 mt-6 space-y-2.5 pl-5 text-[#c7a679] marker:text-[#d2a063] list-disc">
								<li>Помогаем подобрать оптимальную модель</li>
								<li>Доставка, подключение, вывоз после мероприятия</li>
								<li>Компоненты, сахар, посуда</li>
								<li>Обучаем персонал</li>
								<li>По запросу — бариста и официанты</li>
							</ul>
							<p className="relative z-10 mt-5 text-[#b89a72]">
								При выборе кофемашины на сутки для выставки важны нюансы — подскажем по опыту.
							</p>
							<div className="relative z-10 mt-8 flex flex-col gap-4 rounded-2xl border border-[#7b5230]/30 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-sm text-[#c7a679]">Быстрый подбор — оставьте контакты, перезвоним за 15 минут.</p>
								<ContactModalTrigger
									label="Оставить заявку"
									className={ctaBtnClass}
									sourceTag="Аренда кофемашин"
									theme="dark"
								/>
							</div>
						</div>

						<div className={cardClass}>
							<div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.08),transparent_26%)]" />
							<div className="relative z-10 flex items-center gap-3">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7b5230]/50 bg-black/25 text-xl text-[#d8ae78]">
									⭐
								</div>
								<h2
									className="text-2xl text-[#f2e3c7] md:text-3xl"
									style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
								>
									Почему мы
								</h2>
							</div>
							<ul className="relative z-10 mt-6 space-y-2.5 pl-5 text-[#c7a679] marker:text-[#d2a063] list-disc">
								<li>Гибкие сроки и прозрачные условия</li>
								<li>Проверенное оборудование, сервис и чистка перед выдачей</li>
								<li>Поддержка на площадке и консультации</li>
								<li>Опция «под ключ»: оборудование, расходники, бариста</li>
							</ul>
							<div className="relative z-10 mt-auto flex flex-col gap-4 rounded-2xl border border-[#7b5230]/30 bg-black/20 p-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-sm text-[#c7a679]">Подберём модель под ваш поток гостей.</p>
								<ContactModalTrigger
									label="Оставить заявку"
									className={ctaBtnClass}
									sourceTag="Аренда кофемашин"
									theme="dark"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Суперавтоматы */}
			<section id="machines" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="mb-10 text-center md:text-left">
						<div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Каталог</div>
						<h2
							className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Варианты кофемашин
						</h2>
						<p className="mt-4 max-w-2xl text-[#c7a679] md:mx-0 mx-auto">
							Суперавтоматические модели — удобны без бариста на площадке.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{machines.map((m) => (
							<article key={m.name} className={cardClass}>
								<div className="absolute right-5 top-5 z-10 rounded-full border border-[#7b5230]/50 bg-black/40 px-3 py-1.5 text-xs font-medium text-[#e8cfa3] backdrop-blur">
									{m.performance}
								</div>
								<div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden rounded-t-[28px] border-b border-[#7b5230]/25">
									<Image src={m.image} alt={m.name} fill className="object-cover brightness-[0.85]" unoptimized />
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0806]/80 to-transparent" />
								</div>
								<h3
									className="text-2xl text-[#f2e3c7]"
									style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
								>
									{m.name}
								</h3>
								<p className="mt-3 flex-1 text-[#c7a679] leading-relaxed">{m.description}</p>
								<div className="mt-5 grid grid-cols-2 gap-3 text-sm">
									<div>
										<p className="text-[#9f7b52]">Тип</p>
										<p className="font-medium text-[#e8cfa3]">{m.type}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Нагрузка</p>
										<p className="font-medium text-[#e8cfa3]">{m.performance}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Габариты</p>
										<p className="font-medium text-[#e8cfa3]">{m.dimensions}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Вес</p>
										<p className="font-medium text-[#e8cfa3]">{m.weight}</p>
									</div>
									<div className="col-span-2 border-t border-[#7b5230]/25 pt-3">
										<p className="text-[#9f7b52]">Дополнительно</p>
										<p className="font-medium text-[#e8cfa3]">{m.notes}</p>
									</div>
								</div>
								<div className="relative z-10 mt-6">
									<ContactModalTrigger
										label="Забронировать"
										className={`${ctaBtnClass} w-full text-center`}
										model={m.name}
										sourceTag="Аренда кофемашин"
										theme="dark"
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Рожковые */}
			<section id="espresso" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="mb-10 text-center md:text-left">
						<div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Профи</div>
						<h2
							className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Рожковые кофемашины
						</h2>
						<p className="mt-4 max-w-3xl text-[#c7a679] md:mx-0 mx-auto">
							Нужны навыки бариста и кофемолка.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{espressoMachines.map((m) => (
							<article key={m.name} className={cardClass}>
								<div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden rounded-t-[28px] border-b border-[#7b5230]/25">
									<Image src={m.image} alt={m.name} fill className="object-cover brightness-[0.85]" unoptimized />
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0806]/80 to-transparent" />
								</div>
								<h3
									className="text-xl leading-tight text-[#f2e3c7] md:text-2xl"
									style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
								>
									{m.name}
								</h3>
								<p className="mt-3 flex-1 text-[#c7a679] leading-relaxed">{m.description}</p>
								<div className="mt-5 grid grid-cols-2 gap-3 text-sm">
									<div>
										<p className="text-[#9f7b52]">Тип</p>
										<p className="font-medium text-[#e8cfa3]">{m.type}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Производительность</p>
										<p className="font-medium text-[#e8cfa3]">{m.performance}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Габариты</p>
										<p className="font-medium text-[#e8cfa3]">{m.dimensions}</p>
									</div>
									<div>
										<p className="text-[#9f7b52]">Вес</p>
										<p className="font-medium text-[#e8cfa3]">{m.weight}</p>
									</div>
									<div className="col-span-2 border-t border-[#7b5230]/25 pt-3">
										<p className="text-[#9f7b52]">Дополнительно</p>
										<p className="font-medium text-[#e8cfa3]">{m.notes}</p>
									</div>
								</div>
								<div className="relative z-10 mt-6">
									<ContactModalTrigger
										label="Забронировать"
										className={`${ctaBtnClass} w-full text-center`}
										model={m.name}
										sourceTag="Аренда кофемашин"
										theme="dark"
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Доп. услуги + FAQ */}
			<section id="extras" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className={cardClass}>
						<h2
							className="text-3xl text-[#f5e8d3] md:text-4xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Дополнительные услуги
						</h2>
						<ul className="mt-6 grid grid-cols-1 gap-2 text-[#c7a679] md:grid-cols-2 md:gap-3 list-disc pl-5 marker:text-[#d2a063]">
							<li>Выездные бариста и официанты</li>
							<li>Выездная кофейня</li>
							<li>Выездные бармены</li>
							<li>Продажа кофемашин новых и б/у</li>
							<li>Кейтеринг</li>
						</ul>
					</div>

					<div id="faq" className={`${cardClass} mt-8 scroll-mt-28`}>
						<h2
							className="text-3xl text-[#f5e8d3] md:text-4xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Частые вопросы
						</h2>
						<div className="mt-8 space-y-6">
							<div className="border-b border-[#7b5230]/25 pb-6 last:border-0 last:pb-0">
								<h3 className="font-medium text-[#e8cfa3]">На какой срок сдаёте кофемашины?</h3>
								<p className="mt-2 text-[#c7a679]">Чаще посуточно на 1–5 дней или на весь срок мероприятия.</p>
							</div>
							<div className="border-b border-[#7b5230]/25 pb-6 last:border-0 last:pb-0">
								<h3 className="font-medium text-[#e8cfa3]">Входит ли доставка и подключение?</h3>
								<p className="mt-2 text-[#c7a679]">Да. Привозим, подключаем, проверяем работу и при необходимости обучаем персонал.</p>
							</div>
							<div className="border-b border-[#7b5230]/25 pb-6 last:border-0 last:pb-0">
								<h3 className="font-medium text-[#e8cfa3]">Можно ли заказать бариста и расходники?</h3>
								<p className="mt-2 text-[#c7a679]">Да, есть пакет «под ключ»: бариста, кофе, молоко, сиропы, посуда.</p>
							</div>
							<div>
								<h3 className="font-medium text-[#e8cfa3]">Как выбрать модель под мой поток?</h3>
								<p className="mt-2 text-[#c7a679]">Подскажем по ожидаемому трафику: до 100 чашек/день или до 500+.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="contacts" className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24 scroll-mt-28">
				<div className="relative mx-auto max-w-2xl overflow-hidden rounded-[32px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,.35),0_0_40px_rgba(214,160,91,.06)] md:p-12">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.06),transparent_30%)]" />
					<h2
						className="relative z-10 mb-4 text-3xl text-[#f5e8d3] md:text-4xl"
						style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
					>
						Нужен расчёт под ваше мероприятие?
					</h2>
					<p className="relative z-10 mb-8 text-lg text-[#c7a679]">
						Оставьте заявку — перезвоним за 15 минут и подберём модель.
					</p>
					<ContactModalTrigger
						label="Получить расчёт"
						className={`relative z-10 ${ctaBtnClass} px-8 py-4 text-base`}
						sourceTag="Аренда кофемашин — контакты"
						theme="dark"
					/>
				</div>
			</section>

			<FloatingCTA />
			<Footer theme="dark" />
		</div>
	)
}
