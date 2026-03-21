import { generateMetadata } from '@/lib/metadata'

export const metadata = generateMetadata({
  title: 'О нас',
  description: 'Little Barista - команда профессионалов в сфере кофейных мероприятий. Мы создаем незабываемые кофейные события с 2020 года.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">О нас</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Little Barista - это команда профессионалов, объединенных любовью к кофе и стремлением создавать незабываемые события.
        </p>
        <p className="text-lg mb-4">
          С 2020 года мы организуем кофейные мероприятия, мастер-классы и дегустации, помогая нашим клиентам погрузиться в удивительный мир кофе.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Наша миссия</h2>
        <p className="text-lg mb-4">
          Мы стремимся сделать кофе доступным и понятным для каждого, кто хочет узнать больше об этом удивительном напитке.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Наши ценности</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-lg mb-2">Профессионализм во всем, что мы делаем</li>
          <li className="text-lg mb-2">Качество кофе и оборудования</li>
          <li className="text-lg mb-2">Индивидуальный подход к каждому клиенту</li>
          <li className="text-lg mb-2">Постоянное развитие и обучение</li>
        </ul>
      </div>
    </main>
  )
} 