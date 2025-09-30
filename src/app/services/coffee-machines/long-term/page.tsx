import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ContactModalTrigger from '@/components/ContactModalTrigger'

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


