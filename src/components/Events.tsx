'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Кофейные мастер-классы',
    description: 'Научитесь готовить профессиональный кофе под руководством опытных бариста',
    image: '/images/events/coffee-masterclass.jpg',
    price: 'от 2000₽'
  },
  {
    id: 2,
    title: 'Дегустация кофе',
    description: 'Познакомьтесь с различными сортами кофе и научитесь различать их вкусы',
    image: '/images/events/coffee-tasting.jpg',
    price: 'от 1500₽'
  },
  {
    id: 3,
    title: 'Кофейные вечеринки',
    description: 'Уникальный формат мероприятий с дегустацией кофе и угощениями',
    image: '/images/events/coffee-party.jpg',
    price: 'от 3000₽'
  }
];

export default function Events() {
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container relative z-10">
        <div className="section-title">
          <h2>Наши мероприятия</h2>
          <p>Уникальные события для ценителей кофе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="card card-hover bg-white/90 backdrop-blur-sm"
              onClick={() => setActiveEvent(event)}
            >
              <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{event.price}</span>
                <button className="button-primary">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 