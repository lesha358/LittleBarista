'use client';

import { useState } from 'react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    image: '/images/events/event1.jpg',
    title: 'Корпоративное мероприятие',
    description: 'Кофейня на корпоративе компании'
  },
  {
    id: 2,
    image: '/images/events/event2.jpg',
    title: 'Выставка',
    description: 'Наш стенд на выставке'
  },
  {
    id: 3,
    image: '/images/events/event3.jpg',
    title: 'Конференция',
    description: 'Кофе-брейк на конференции'
  },
  {
    id: 4,
    image: '/images/events/event4.jpg',
    title: 'Кофемашина',
    description: 'Кофейня на свадебном торжестве'
  }
];

export default function EventGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="section-container section-padding gradient-section">
      <div className="container relative z-10">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши мероприятия
          </h2>
          <p className="text-xl text-gray-600">
            Посмотрите, как мы работаем на различных мероприятиях
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Карусель */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[550px] flex items-center justify-center">
              {/* Кнопки навигации */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Контейнер изображения */}
              <div className="relative h-full w-[400px] rounded-[2rem] overflow-hidden">
                <Image
                  src={events[currentSlide].image}
                  alt={events[currentSlide].title}
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />
                
                {/* Информация о слайде */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {events[currentSlide].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {events[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Миниатюры */}
            <div className="flex justify-center gap-4 mt-6">
              {events.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-16 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-2 ring-brown-600 scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Видео */}
          <div className="w-full lg:w-1/3">
            <div className="relative h-[550px] rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <video
                  src="/images/events/video.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 