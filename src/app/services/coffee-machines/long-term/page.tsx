import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ContactModalTrigger from '@/components/ContactModalTrigger'

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

export const metadata = generateMetadata({
    title: 'Долгосрочная аренда кофемашин для офиса и бизнеса — Москва',
    description: 'Долгосрочная аренда кофемашин для офисов, салонов красоты, шоурумов, автосалонов. Обслуживание, расходники и поддержка. Москва и МО.',
    path: '/services/coffee-machines/long-term',
})

export default function CoffeeMachinesLongTermPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden">
            <Navigation />

            <section id="intro" className="container px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-brown-200 bg-white px-3 py-1 text-xs sm:text-sm text-brown-700 shadow-sm">
                            <span className="inline-block h-2 w-2 rounded-full bg-brown-700" />
                            Долгосрочная аренда по Москве и области
                        </div>
                        <h1 className="mt-3 sm:mt-4 text-[28px] sm:text-4xl md:text-5xl font-extrabold text-brown-900 tracking-tight">
                            Кофемашина в офис, салон красоты и шоурум
                        </h1>
                        <p className="mt-3 sm:mt-4 text-brown-800/95 leading-relaxed text-base sm:text-lg max-w-2xl">
                            Создадим стабильную кофейную зону для сотрудников и гостей. Установка,
                            сервисное обслуживание, регулярная поставка кофе, молока и расходников.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-brown-900">
                            <li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Установка под ключ и обучение</span></li>
                            <li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Ежемесячное обслуживание и чистка</span></li>
                            <li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Регулярная доставка кофе и расходников</span></li>
                            <li className="flex items-center gap-2 rounded-lg bg-brown-50 px-3 py-2 border border-brown-100"><span>✓</span><span>Сервис по договору, быстрый выезд</span></li>
                        </ul>
                        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4">
                            <ContactModalTrigger 
                                label="Получить предложение"
                                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-brown-700 text-white hover:bg-brown-800 transition-colors shadow w-full sm:w-auto text-center"
                                sourceTag="Долгосрочная аренда"
                            />
                            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brown-200 bg-white/90 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm text-brown-900 shadow-sm">
                                <span className="font-semibold">От 10 сотрудников</span>
                                <span className="text-brown-700/90">экономия на напитках</span>
                            </span>
                        </div>
                    </div>

                    <div className="relative md:h-[420px] h-48 sm:h-64 rounded-2xl overflow-hidden border border-brown-200 bg-white shadow-sm">
                        <div className="relative h-full w-full">
                            <Image src="/images/machines-triad.jpg" alt="Кофемашина для офиса" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="machines" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
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
                                    sourceTag="Долгосрочная аренда"
                                />
							</div>
						</div>
					))}
				</div>
			</section>

			<section id="espresso" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
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
                                    sourceTag="Долгосрочная аренда"
                                />
							</div>
						</div>
					))}
				</div>
			</section>

            <section id="why-us" className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <div className="p-4 sm:p-6 rounded-2xl border border-brown-200 shadow-sm bg-white/90 backdrop-blur-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-brown-900">Почему мы</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-brown-800/90">
                        <div className="space-y-2">
                            <p>— Подберём оборудование под трафик: от 20 до 300+ чашек в день</p>
                            <p>— Прозрачный договор, фиксированная ежемесячная ставка</p>
                            <p>— Быстрый сервис: выезд мастера в течение 24 часов</p>
                            <p>— Обучим сотрудников правильной эксплуатации</p>
                        </div>
                        <div className="space-y-2">
                            <p>— Регулярная поставка кофе, молока, сиропов и посуды</p>
                            <p>— Запасная машина на период ремонта по необходимости</p>
                            <p>— Аккуратная установка и подключение под интерьер</p>
                            <p>— Помощь в выборе напитков и экономике чашки</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ContactModalTrigger 
                            label="Запросить коммерческое предложение"
                            className="px-4 py-2.5 rounded-full bg-brown-700 text-white hover:bg-brown-800 transition-colors"
                            sourceTag="Долгосрочная аренда"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}


