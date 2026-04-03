import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import Image from 'next/image'
import ContactModalTrigger from '@/components/ContactModalTrigger'
import Script from 'next/script'
import Link from 'next/link'

const machines = [
	{
		name: 'Jetino JL30',
		type: 'Суперавтоматическая',
		description:
			'Компактная машина для офисов, шоурумов и переговорных. Готовит напитки на живом молоке и подходит для стабильного ежедневного потока.',
		performance: 'до 100 чашек/день',
		dimensions: '300×548×490 мм',
		weight: '15 кг',
		notes: 'Одновременное приготовление 2 напитков',
		image: '/images/machines/JL30.jpg',
	},
	{
		name: 'Dr.coffee F10',
		type: 'Суперавтоматическая профессиональная',
		description:
			'Универсальная офисная машина с сенсорным меню и широким выбором напитков. Подходит для команд, клиентских зон и салонов.',
		performance: 'до 100 чашек/день',
		dimensions: '34×45×50 см',
		weight: '16.5 кг',
		notes: 'Гибкая настройка крепости, молока и объёма',
		image: '/images/machines/drcoffee-f10.webp',
	},
	{
		name: 'Jofemar Bluetec G23',
		type: 'Профессиональный кофейный аппарат',
		description:
			'Решение для мест с высоким потреблением: бизнес-центры, автосалоны, крупные офисы и пространства с постоянным потоком гостей.',
		performance: 'до 500 чашек/день',
		dimensions: '410×740×450 мм (Ш×В×Г)',
		weight: '45 кг',
		notes: 'Высокая производительность и большая загрузка',
		image: '/images/machines/Jofemar.jpg',
	},
]

const espressoMachines = [
	{
		name: 'NUOVA SIMONELLI APPIA LIFE COMPACT 2GR S',
		type: 'Рожковая полуавтоматическая',
		description:
			'Для локаций, где важен вкус speciality-уровня и есть обученный бариста: гастропространства, премиальные клиентские зоны и кафе.',
		performance: 'Высокая (зависит от бариста)',
		dimensions: '554×498×545 мм (Ш×В×Г)',
		weight: '42.5 кг',
		notes: 'Мощность 2.9 кВт, 220 В',
		image: '/images/machines/Simonelli.jpg',
	},
	{
		name: 'FIAMMA Caravel 2 Compact TC Restyle',
		type: 'Рожковая полуавтоматическая',
		description:
			'Подходит для пространств, где кофе является частью имиджа. Требует бариста и даёт более ремесленную подачу напитков.',
		performance: 'Высокая (зависит от бариста)',
		dimensions: '563×530 (Ш×В), 2 группы',
		weight: '—',
		notes: 'Высокая группа, 1 бойлер',
		image: '/images/machines/Caravel.webp',
	},
]

const heroFeatures = [
	['От 1 месяца', 'Индивидуальные условия'],
	['Сервис по договору', 'Чистка и профилактика'],
	['Поставки расходников', 'Кофе, молоко, сиропы'],
	['Подбор под трафик', 'Офисы, шоурумы, салоны'],
]

const serviceBlocks = [
	{
		title: 'Офисы и бизнес-центры',
		text: 'Кофейная точка для сотрудников и переговорных. Стабильная подача, понятная экономика чашки и сервис без простоев.',
	},
	{
		title: 'Салоны и шоурумы',
		text: 'Тёплая welcome-зона для клиентов и гостей. Машина работает как часть сервиса и усиливает впечатление от пространства.',
	},
	{
		title: 'Автосалоны и клиентские зоны',
		text: 'Подходит для мест с постоянным потоком. Кофе помогает удерживать внимание и повышает комфорт ожидания.',
	},
]

const benefits = [
	'Подбор оборудования под ваш реальный поток: от камерных офисов до клиентских зон с высокой нагрузкой.',
	'Прозрачный договор, фиксированные условия и понятная ежемесячная модель затрат.',
	'Сервисный выезд, профилактика, чистка и поддержание машины в рабочем состоянии.',
	'Регулярные поставки кофе, молока, сиропов и сопутствующих расходников.',
	'Помощь в настройке меню и экономике чашки под ваш формат бизнеса.',
	'При необходимости предоставим подменную машину на период ремонта.',
]

const sectionBg =
	'relative overflow-hidden w-full py-16 lg:py-24 scroll-mt-28 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.18),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(190,118,45,.1),transparent_22%),linear-gradient(180deg,#120c09_0%,#0d0806_50%,#090605_100%)]'

const cardClass =
	'group relative flex flex-col h-full overflow-hidden rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-6 shadow-[0_18px_40px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a468]/55 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_28px_rgba(211,164,104,.08)]'

const ctaBtnClass =
	'rounded-full border-2 border-[#c9a06c] bg-gradient-to-b from-[#faf3e8] via-[#f0e2cf] to-[#e5d0b0] px-6 py-3 text-sm font-semibold text-[#1a1008] shadow-[0_10px_36px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.65),0_0_28px_rgba(200,150,80,.22)] transition hover:-translate-y-0.5 hover:from-[#fffaf3] hover:via-[#f7ebdc] hover:to-[#edd9be] hover:border-[#ddb66a] hover:shadow-[0_14px_44px_rgba(0,0,0,.48),0_0_36px_rgba(220,170,100,.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c48a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0705] active:translate-y-0'

export const metadata = generateMetadata({
	title: 'Долгосрочная аренда кофемашин для офиса и бизнеса — Москва',
	description: 'Долгосрочная аренда кофемашин для офисов, салонов красоты, шоурумов и автосалонов. Обслуживание, расходники и поддержка. Москва и МО.',
	path: '/services/coffee-machines/long-term',
})

export default function CoffeeMachinesLongTermPage() {
	return (
		<div className="min-h-screen bg-[#0d0705] text-[#f3e4c8]">
			<Navigation theme="dark" />

			<Script id="breadcrumbs-jsonld" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://littlebarista.ru/' },
						{ '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://littlebarista.ru/services' },
						{ '@type': 'ListItem', position: 3, name: 'Аренда кофемашин', item: 'https://littlebarista.ru/services/coffee-machines' },
						{ '@type': 'ListItem', position: 4, name: 'Долгосрочная аренда', item: 'https://littlebarista.ru/services/coffee-machines/long-term' },
					],
				})}
			</Script>
			<Script id="service-jsonld" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Service',
					name: 'Долгосрочная аренда кофемашин',
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
							name: 'На какой срок доступна долгосрочная аренда?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Обычно от 1 месяца и более. Условия и тариф согласовываются индивидуально под ваш трафик.',
							},
						},
						{
							'@type': 'Question',
							name: 'Входит ли обслуживание кофемашины в аренду?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да. Регулярная чистка, сервисные выезды и замена расходников включены по договору.',
							},
						},
						{
							'@type': 'Question',
							name: 'Кто поставляет кофе и молоко?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Мы организуем регулярные поставки кофе, молока и сиропов по согласованному графику.',
							},
						},
						{
							'@type': 'Question',
							name: 'Как быстро приедет мастер при поломке?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Обычно в течение 24 часов. При необходимости предоставим подменную машину.',
							},
						},
						{
							'@type': 'Question',
							name: 'Можно ли начать с пилотного месяца?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, возможно заключение договора на пилотный период с последующей пролонгацией.',
							},
						},
					],
				})}
			</Script>

			<section
				id="intro"
				className="relative overflow-hidden border-b border-[#6f4a26]/40 bg-[radial-gradient(circle_at_20%_0%,rgba(190,118,45,.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(190,118,45,.14),transparent_22%),linear-gradient(180deg,#140c09_0%,#090605_100%)]"
			>
				<div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.06),transparent)]" />
				<div className="mx-auto grid max-w-[85rem] grid-cols-1 gap-10 px-6 pb-16 pt-[104px] md:px-10 md:pt-[108px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.18fr)] lg:gap-x-8 lg:gap-y-10 lg:pb-24 lg:pl-10 lg:pr-5 lg:pt-[112px] xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.24fr)] xl:gap-x-10 xl:pr-4">
					<div className="relative z-10 min-h-0 lg:self-start">
						<div className="mb-6 flex flex-wrap items-center gap-3">
							<div className="inline-flex items-center gap-3 rounded-full border border-[#d4a574]/35 bg-[linear-gradient(180deg,rgba(255,245,230,.08),rgba(18,12,9,.5))] px-4 py-2.5 text-[11px] uppercase tracking-[0.26em] text-[#e0c49a] shadow-[0_4px_24px_rgba(0,0,0,.25)] backdrop-blur-md">
								Office coffee
								<span className="h-1 w-1 rounded-full bg-[#d4a574]" />
								Москва и МО
							</div>
							<Link
								href="/services/coffee-machines"
								className="inline-flex rounded-full border border-[#c9a06c]/25 bg-white/[0.04] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-[#d4b896] backdrop-blur-md transition hover:border-[#d4a574]/45 hover:text-[#f0dcc0]"
							>
								Посуточная аренда для событий
							</Link>
						</div>

						<h1
							className="max-w-3xl text-5xl leading-[0.95] text-[#f5e8d3] md:text-6xl lg:text-7xl"
							style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
						>
							Долгосрочная аренда
							<br />
							кофемашин для бизнеса
						</h1>
						<p className="mt-5 max-w-2xl text-lg leading-8 text-[#caa97a] md:text-xl">
							Стабильная кофейная зона для офиса, шоурума, салона красоты или клиентской зоны. Установка, сервис, расходники и поддержка в одной системе.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<ContactModalTrigger
								label="Получить предложение"
								className={`${ctaBtnClass} px-7 py-4 text-base`}
								sourceTag="Долгосрочная аренда"
								theme="dark"
							/>
							<Link
								href="/services/coffee-machines"
								className="rounded-full border border-white/10 px-7 py-4 text-base text-[#c6a16d] backdrop-blur transition hover:border-[#d2a063]/35 hover:text-[#f0d3a8]"
							>
								Краткосрочная аренда
							</Link>
						</div>

						<div className="mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
							{heroFeatures.map(([title, sub]) => (
								<div
									key={title}
									className="group relative overflow-hidden rounded-xl border border-[#c9a06c]/22 bg-[linear-gradient(155deg,rgba(255,236,210,.1),rgba(22,16,12,.75))] px-3 py-2 shadow-[0_8px_28px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.07)] backdrop-blur-md transition duration-300 hover:border-[#ddb66a]/45 hover:shadow-[0_12px_36px_rgba(0,0,0,.34),0_0_24px_rgba(200,150,90,.1)]"
								>
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
								<span className="font-semibold text-[#f1dfc3]">от 1 месяца</span>
								пилотный запуск
							</span>
						</div>
					</div>

					<div className="relative z-10 w-full min-h-0 lg:self-center lg:pl-3 xl:pl-6">
						<div className="relative w-full overflow-hidden rounded-[28px] border border-[#8f6238]/35 bg-[#120c09] p-2 shadow-[0_30px_70px_rgba(0,0,0,.45),0_0_40px_rgba(214,160,91,.08)] sm:rounded-[32px] sm:p-2">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,204,130,.08),transparent_25%)]" />
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] lg:aspect-auto lg:min-h-[min(58vh,600px)] lg:h-[min(58vh,600px)] xl:min-h-[min(60vh,640px)] xl:h-[min(60vh,640px)]">
								<Image
									src="/images/machines-triad.jpg"
									alt="Кофемашина для офиса"
									fill
									className="object-cover brightness-[0.72] saturate-[0.82]"
									priority
									unoptimized
								/>
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.05),rgba(7,5,4,.18)_40%,rgba(7,5,4,.62))]" />
								<div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#dfbf90] backdrop-blur">
									Офис, шоурум, клиентская зона
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="cooperation" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="mb-10 text-center md:text-left">
						<div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Где это работает</div>
						<h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
							Форматы долгосрочного сервиса
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{serviceBlocks.map((item) => (
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

			<section id="machines" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="mb-10 text-center md:text-left">
						<div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Каталог</div>
						<h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
							Варианты кофемашин
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-[#c7a679] md:mx-0">
							Суперавтоматические решения для ежедневной работы без лишней нагрузки на команду.
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
								<h3 className="text-2xl text-[#f2e3c7]" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
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
								<div className="mt-6">
									<ContactModalTrigger
										label="Получить предложение"
										className={`${ctaBtnClass} w-full text-center`}
										model={m.name}
										sourceTag="Долгосрочная аренда"
										theme="dark"
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="espresso" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className="mb-10 text-center md:text-left">
						<div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Премиум-подача</div>
						<h2 className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
							Рожковые кофемашины
						</h2>
						<p className="mx-auto mt-4 max-w-3xl text-[#c7a679] md:mx-0">
							Для пространств, где кофе подаётся как часть имиджа и сервиса. Требуются навыки бариста и кофемолка.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{espressoMachines.map((m) => (
							<article key={m.name} className={cardClass}>
								<div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden rounded-t-[28px] border-b border-[#7b5230]/25">
									<Image src={m.image} alt={m.name} fill className="object-cover brightness-[0.85]" unoptimized />
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0806]/80 to-transparent" />
								</div>
								<h3 className="text-xl leading-tight text-[#f2e3c7] md:text-2xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
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
								<div className="mt-6">
									<ContactModalTrigger
										label="Получить предложение"
										className={`${ctaBtnClass} w-full text-center`}
										model={m.name}
										sourceTag="Долгосрочная аренда"
										theme="dark"
									/>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="why-us" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className={cardClass}>
						<h2 className="text-3xl text-[#f5e8d3] md:text-4xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
							Почему мы
						</h2>
						<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
							{benefits.map((item, index) => (
								<div key={item} className="flex items-start gap-4 rounded-2xl border border-[#7b5230]/25 bg-black/15 p-4">
									<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7b5230]/45 bg-black/20 text-sm font-medium text-[#d8ae78]">
										{index + 1}
									</span>
									<p className="text-[#c7a679] leading-7">{item}</p>
								</div>
							))}
						</div>
						<div className="mt-8">
							<ContactModalTrigger
								label="Запросить коммерческое предложение"
								className={ctaBtnClass}
								sourceTag="Долгосрочная аренда"
								theme="dark"
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="faq" className={sectionBg}>
				<div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(255,194,120,.05),transparent)]" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
					<div className={cardClass}>
						<h2 className="text-3xl text-[#f5e8d3] md:text-4xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
							Частые вопросы
						</h2>
						<div className="mt-8 space-y-6">
							<div className="border-b border-[#7b5230]/25 pb-6">
								<h3 className="font-medium text-[#e8cfa3]">На какой срок доступна долгосрочная аренда?</h3>
								<p className="mt-2 text-[#c7a679]">От 1 месяца и дольше. Условия подбираем под ваш трафик и формат бизнеса.</p>
							</div>
							<div className="border-b border-[#7b5230]/25 pb-6">
								<h3 className="font-medium text-[#e8cfa3]">Входит ли обслуживание в стоимость?</h3>
								<p className="mt-2 text-[#c7a679]">Да. Профилактика, чистка, сервисные выезды и замена узлов входят в договор.</p>
							</div>
							<div className="border-b border-[#7b5230]/25 pb-6">
								<h3 className="font-medium text-[#e8cfa3]">Кто обеспечивает расходники?</h3>
								<p className="mt-2 text-[#c7a679]">Мы организуем регулярные поставки кофе, молока, сиропов и одноразовой посуды.</p>
							</div>
							<div className="border-b border-[#7b5230]/25 pb-6">
								<h3 className="font-medium text-[#e8cfa3]">Сколько ждать мастера при поломке?</h3>
								<p className="mt-2 text-[#c7a679]">Обычно до 24 часов. При необходимости предоставим подменную машину.</p>
							</div>
							<div>
								<h3 className="font-medium text-[#e8cfa3]">Можно ли начать с пилотного месяца?</h3>
								<p className="mt-2 text-[#c7a679]">Да. Часто начинаем с пилота, после чего масштабируем сотрудничество на удобный срок.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="contacts" className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24 scroll-mt-28">
				<div className="relative mx-auto max-w-2xl overflow-hidden rounded-[32px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,.35),0_0_40px_rgba(214,160,91,.06)] md:p-12">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,205,139,.06),transparent_30%)]" />
					<h2 className="relative z-10 mb-4 text-3xl text-[#f5e8d3] md:text-4xl" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
						Нужна смета под ваш офис или клиентскую зону?
					</h2>
					<p className="relative z-10 mb-8 text-lg text-[#c7a679]">
						Оставьте заявку, и мы подберём машину, сервисный график и поставки под ваш реальный трафик.
					</p>
					<ContactModalTrigger
						label="Получить предложение"
						className={`relative z-10 ${ctaBtnClass} px-8 py-4 text-base`}
						sourceTag="Долгосрочная аренда — контакты"
						theme="dark"
					/>
				</div>
			</section>

			<FloatingCTA />
			<Footer theme="dark" />
		</div>
	)
}


