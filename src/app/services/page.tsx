import { generateMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Услуги',
  description: 'Профессиональные кофейные услуги для ваших мероприятий: кофейные шоу, мастер-классы, дегустации. Создаем незабываемые кофейные события.',
  path: '/services',
})

const services = [
  {
    title: 'Кофейные шоу',
    description: 'Зрелищные выступления профессиональных бариста с элементами латте-арта и кофейных трюков',
    link: '/services/coffee-shows.html',
    image: '/images/services/coffee-show.jpg',
  },
  {
    title: 'Мастер-классы',
    description: 'Обучающие занятия по приготовлению кофе различных видов и методик заваривания',
    link: '/services/master-classes.html',
    image: '/images/services/master-class.jpg',
  },
  {
    title: 'Дегустации',
    description: 'Профессиональные дегустации различных сортов кофе с подробным разбором вкусовых характеристик',
    link: '/services/tastings.html',
    image: '/images/services/tasting.jpg',
  },
]

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Наши услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            href={service.link} 
            key={service.title}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Здесь будет изображение */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
} 