import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'Кофейные шоу',
  description: 'Зрелищные кофейные шоу от профессиональных бариста. Латте-арт, кофейные трюки и интерактивные выступления для ваших мероприятий.',
  path: '/services/coffee-shows',
})

export default function CoffeeShowsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Кофейные шоу</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Наши кофейные шоу - это уникальное сочетание профессионализма, артистизма и любви к кофе. 
          Мы создаем незабываемые выступления, которые удивят и порадуют ваших гостей.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Что включено в шоу:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-lg mb-2">Профессиональные выступления бариста</li>
          <li className="text-lg mb-2">Элементы латте-арта и кофейные трюки</li>
          <li className="text-lg mb-2">Интерактив с гостями</li>
          <li className="text-lg mb-2">Дегустация приготовленных напитков</li>
          <li className="text-lg mb-2">Профессиональное кофейное оборудование</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Форматы выступлений:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Короткое шоу (30 минут)</h3>
            <p className="text-gray-600">
              Идеально подходит для корпоративных мероприятий и небольших встреч.
              Включает базовые элементы латте-арта и интерактив с гостями.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Полное шоу (60 минут)</h3>
            <p className="text-gray-600">
              Расширенная программа с продвинутыми трюками, мастер-классом
              и большим количеством интерактива.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Заказать кофейное шоу</h2>
          <p className="text-lg mb-4">
            Свяжитесь с нами для обсуждения деталей и получения индивидуального предложения.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </main>
  )
} 