import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Контакты',
  description: 'Свяжитесь с Little Barista для организации кофейных мероприятий, мастер-классов и дегустаций. Мы всегда на связи!',
  path: '/contacts',
})

export default function ContactsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Телефон</h3>
              <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">info@littlebarista.ru</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Режим работы</h3>
              <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Форма обратной связи</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </main>
  )
} 