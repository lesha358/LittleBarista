import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import ContactModalTrigger from '@/components/ContactModalTrigger'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Script from 'next/script'

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
		dimensions: '—',
		weight: '—',
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

export default function CoffeeMachinesRentPage() {
    return (
		<main className="min-h-screen relative overflow-x-hidden">
			{/* SEO: Breadcrumbs, Service and FAQ structured data */}
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
							streetAddress: 'ул. Гаврикова, д. 2/38',
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
			{/* Мягкий фон */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-24 -left-24 h-72 w-72 max-w-[100vw] rounded-full bg-gradient-to-br from-brown-100 via-brown-50 to-transparent blur-2xl opacity-70" />
				<div className="absolute top-1/3 -right-24 h-80 w-80 max-w-[100vw] rounded-full bg-gradient-to-tr from-brown-100 via-brown-50 to-transparent blur-2xl opacity-60" />
				<div className="absolute bottom-0 left-1/4 right-1/4 h-48 bg-gradient-to-t from-brown-50/70 to-transparent" />
			</div>

			<Navigation />

			<section className="container px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
					{/* Левая колонка: текст и CTA */}
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-brown-200 bg-white px-3 py-1 text-xs sm:text-sm text-brown-700 shadow-sm">
							<span className="inline-block h-2 w-2 rounded-full bg-brown-500" />
							Краткосрочная аренда по Москве и области
						</div>
						<h1 className="mt-3 sm:mt-4 text-[28px] sm:text-4xl md:text-5xl font-extrabold text-brown-900 tracking-tight">
							Аренда кофемашин для событий и бизнеса
						</h1>
						<p className="mt-3 sm:mt-4 text-brown-800/95 leading-relaxed text-base sm:text-lg max-w-2xl">
							Для выставок, конференций, переговорных и pop‑up событий. Создадим кофейную зону с
							вкусными напитками без покупки техники: доставка, подключение, расходники и поддержка.
						</p>
						<ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-brown-900">
							<li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Посуточно 1–5 дней или на все мероприятия</span></li>
							<li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Подбор модели под поток гостей</span></li>
							<li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Доставка, подключение, обучение персонала</span></li>
							<li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Опция «под ключ»: бариста и расходники</span></li>
						</ul>
                        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
                            <ContactModalTrigger 
                                label="Получить расчёт"
                                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-brown-700 text-white hover:bg-brown-800 transition-colors shadow w-full sm:w-auto text-center"
                                sourceTag="Аренда кофемашин"
                            />
							<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brown-200 bg-white/90 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-brown-900 shadow-sm">
								<span className="font-semibold">15 мин</span>
								<span className="text-brown-700/90">перезвоним</span>
							</span>
							<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brown-200 bg-white/90 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-brown-900 shadow-sm">
								<span className="font-semibold">100+ событий</span>
								<span className="text-brown-700/90">обслужили</span>
							</span>
						</div>
					</div>

					{/* Правая колонка: иллюстрация */}
					<div className="relative md:h-[420px] h-48 sm:h-64 rounded-2xl overflow-hidden border border-brown-200 bg-white shadow-sm">
						<div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brown-100 blur-3xl opacity-70" />
						<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brown-50/80 to-transparent" />
						<div className="relative h-full w-full">
							<Image src="/images/machines/main.jpg" alt="Арендная кофемашина" fill className="object-cover" />
						</div>
					</div>
				</div>
			</section>

			<section className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
					<div className="p-4 sm:p-6 rounded-2xl border border-brown-200 shadow-sm hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm relative flex flex-col">
						<div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow:'inset 0 0 0 1px rgba(214,184,158,0.25)'}} />
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-xl bg-brown-100 text-brown-700 flex items-center justify-center">☕</div>
							<h2 className="text-xl font-semibold text-brown-900">Кофемашина на 1–5 дней посуточно</h2>
						</div>
						<ul className="mt-3 sm:mt-4 space-y-2 list-disc pl-5 text-brown-800/90 text-sm sm:text-base">
							<li>Помогаем подобрать оптимальную модель</li>
							<li>Обеспечиваем доставку, подключение, вывоз после мероприятия</li>
							<li>Поставляем компоненты, сахар, посуду</li>
							<li>Обучаем персонал пользованию</li>
							<li>По необходимости предоставляем бариста и официантов</li>
						</ul>
						<p className="mt-3 sm:mt-4 text-brown-800/90 text-sm sm:text-base">
							При выборе кофемашины на сутки для выставки нужно учитывать множество нюансов — мы подскажем.
						</p>
						<div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-3 rounded-xl bg-brown-50 border border-brown-100">
							<p className="text-sm text-brown-800/90">Нужен быстрый подбор? Оставьте контакты — перезвоним за 15 минут.</p>
                            <ContactModalTrigger 
                                label="Оставить заявку"
                                className="w-full sm:w-auto text-center px-4 py-2 rounded-full bg-brown-600 text-white hover:bg-brown-700 transition-colors"
                                sourceTag="Аренда кофемашин"
                            />
						</div>
					</div>
					<div className="p-4 sm:p-6 rounded-2xl border border-brown-200 shadow-sm hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm relative flex flex-col">
						<div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow:'inset 0 0 0 1px rgba(214,184,158,0.25)'}} />
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-xl bg-brown-100 text-brown-700 flex items-center justify-center">⭐</div>
							<h3 className="text-lg font-semibold text-brown-900">Почему мы</h3>
						</div>
						<ul className="mt-3 sm:mt-4 space-y-2 list-disc pl-5 text-brown-800/90 text-sm sm:text-base">
							<li>Гибкие сроки аренды и прозрачные условия</li>
							<li>Проверенное оборудование, сервис и чистка перед выдачей</li>
							<li>Поддержка на площадке и консультации</li>
							<li>Опция «под ключ»: оборудование, расходники, бариста</li>
						</ul>
						<div className="mt-auto flex items-center justify-between gap-3 sm:gap-4 p-3 rounded-xl bg-brown-50 border border-brown-100">
                            <p className="text-sm text-brown-800/90">Расскажем о подходящей модели под ваш поток гостей.</p>
                            <ContactModalTrigger 
                                label="Оставить заявку"
                                className="min-w-[140px] text-center px-4 py-2 rounded-full bg-brown-600 text-white hover:bg-brown-700 transition-colors"
                                sourceTag="Аренда кофемашин"
                            />
						</div>
					</div>
				</div>
			</section>

			<section className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
				<h2 className="text-2xl md:text-3xl font-bold text-brown-900">Варианты кофемашин</h2>
				<div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
					{machines.map((m) => (
						<div key={m.name} className="group p-4 sm:p-6 bg-white rounded-2xl border border-brown-200 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col h-full">
							<div className="absolute top-5 right-5 z-10 px-3 py-1.5 text-xs font-semibold rounded-full bg-brown-100 text-brown-800 border border-brown-200">
								{m.performance}
							</div>
							<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 sm:mb-4 ring-1 ring-brown-100">
								<Image src={m.image} alt={m.name} fill className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-brown-900">{m.name}</h3>
							<p className="mt-2 text-brown-800/90 leading-relaxed text-sm sm:text-base">{m.description}</p>
						<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm flex-1">
								<div className="space-y-1">
									<p className="text-brown-700/80">Тип</p>
									<p className="font-medium text-brown-900">{m.type}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Производительность</p>
									<p className="font-medium text-brown-900">{m.performance}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Габариты</p>
									<p className="font-medium text-brown-900">{m.dimensions}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Вес</p>
									<p className="font-medium text-brown-900">{m.weight}</p>
								</div>
								<div className="col-span-2 pt-2 border-t border-brown-100">
									<p className="text-brown-700/80">Дополнительно</p>
									<p className="font-medium text-brown-900">{m.notes}</p>
								</div>
							</div>
							<div className="mt-4 sm:mt-5 pt-2 border-t border-brown-100">
                                <ContactModalTrigger
                                    label="Забронировать"
                                    className="inline-block w-full text-center px-4 py-2.5 rounded-full bg-brown-600 text-white hover:bg-brown-700 transition-colors text-sm sm:text-base mt-auto"
                                    model={m.name}
                                    sourceTag="Аренда кофемашин"
                                />
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
				<h2 className="text-2xl md:text-3xl font-bold text-brown-900">Рожковые кофемашины</h2>
				<p className="mt-2 text-brown-800/90 max-w-3xl text-sm sm:text-base">Для работы на рожковом оборудовании нужны навыки бариста и кофемолка.</p>
				<div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{espressoMachines.map((m) => (
						<div key={m.name} className="group p-4 sm:p-6 bg-white rounded-2xl border border-brown-200 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col h-full">
							<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 sm:mb-4 ring-1 ring-brown-100">
								<Image src={m.image} alt={m.name} fill className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-brown-900">{m.name}</h3>
							<p className="mt-2 text-brown-800/90 leading-relaxed text-sm sm:text-base">{m.description}</p>
						<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm flex-1">
								<div className="space-y-1">
									<p className="text-brown-700/80">Тип</p>
									<p className="font-medium text-brown-900">{m.type}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Производительность</p>
									<p className="font-medium text-brown-900">{m.performance}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Габариты</p>
									<p className="font-medium text-brown-900">{m.dimensions}</p>
								</div>
								<div className="space-y-1">
									<p className="text-brown-700/80">Вес</p>
									<p className="font-medium text-brown-900">{m.weight}</p>
								</div>
								<div className="col-span-2 pt-2 border-t border-brown-100">
									<p className="text-brown-700/80">Дополнительно</p>
									<p className="font-medium text-brown-900">{m.notes}</p>
								</div>
							</div>
							<div className="mt-4 sm:mt-5 pt-2 border-t border-brown-100">
                                <ContactModalTrigger
                                    label="Забронировать"
                                    className="inline-block w-full text-center px-4 py-2.5 rounded-full bg-brown-600 text-white hover:bg-brown-700 transition-colors text-sm sm:text-base mt-auto"
                                    model={m.name}
                                    sourceTag="Аренда кофемашин"
                                />
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="container px-4 sm:px-6 lg:px-8 py-12">
				<div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-brown-200 shadow-sm">
					<h2 className="text-2xl md:text-3xl font-bold text-brown-900">Дополнительные услуги</h2>
					<ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-brown-800/90 list-disc pl-5">
						<li>Выездные бариста и официанты на мероприятия</li>
						<li>Выездная кофейня на мероприятия</li>
						<li>Выездные бармены на мероприятия</li>
						<li>Продажа кофемашин новых и б/у</li>
						<li>Кейтеринг</li>
					</ul>
				</div>
			</section>

            <Footer />
		</main>
	)
}
