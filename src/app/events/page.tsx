import { generateMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'События',
  description: 'Предстоящие и прошедшие кофейные события от Little Barista. Мастер-классы, дегустации, кофейные шоу и другие мероприятия.',
  path: '/events',
})

const events = [
  {
    title: 'Предстоящие события',
    description: 'Запланированные кофейные мероприятия и мастер-классы',
    link: '/events/upcoming',
    image: '/images/events/upcoming.jpg',
  },
  {
    title: 'Прошедшие события',
    description: 'Архив проведенных мероприятий и отзывы участников',
    link: '/events/past',
    image: '/images/events/past.jpg',
  },
]

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">События</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <Link 
            href={event.link} 
            key={event.title}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Здесь будет изображение */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h2>
              <p className="text-gray-600">
                {event.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
} 