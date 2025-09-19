import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Выездная кофейня',
  description: 'Профессиональная кофейная станция с бариста для вашего мероприятия.',
  path: '/services/mobile-coffee',
})

export default function MobileCoffeePage() {
  return (
    <main className="min-h-screen">
      <section className="container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-900">Выездная кофейня</h1>
        <p className="mt-4 text-brown-800/90 max-w-3xl">
          Мы организуем стильную кофейную стойку с профессиональным оборудованием и бариста. Подберём меню и формат
          обслуживания под ваши задачи: выставка, конференция, презентация, корпоратив или частное событие.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-brown-200">
            <h3 className="font-semibold text-brown-900">Премиум зерно</h3>
            <p className="mt-2 text-brown-800/90">Используем свежую обжарку и настраиваем помол под напитки.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-brown-200">
            <h3 className="font-semibold text-brown-900">Живое молоко</h3>
            <p className="mt-2 text-brown-800/90">Классика и авторские напитки на живом молоке или растительных альтернативах.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-brown-200">
            <h3 className="font-semibold text-brown-900">Быстрый сервис</h3>
            <p className="mt-2 text-brown-800/90">Оптимизируем процессы, чтобы очередь двигалась быстро и комфортно.</p>
          </div>
        </div>
      </section>
    </main>
  )
}



