'use client';

import { useState, useEffect } from 'react';

export default function EventTypes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brown-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
          <div className="relative flex flex-col items-center p-8 bg-white border-b-4 border-brown-200">
            <h3 className="text-2xl font-bold text-brown-900 mb-4">Выставки</h3>
            <div className="w-24 h-1 bg-brown-300 mb-4"></div>
            <p className="text-black text-center">Профессиональное обслуживание на ваших мероприятиях</p>
          </div>

          <div className="relative flex flex-col items-center p-8 bg-white border-b-4 border-brown-200">
            <h3 className="text-2xl font-bold text-brown-900 mb-4">Конференции</h3>
            <div className="w-24 h-1 bg-brown-300 mb-4"></div>
            <p className="text-black text-center">Свежий кофе и закуски для участников</p>
          </div>

          <div className="relative flex flex-col items-center p-8 bg-white border-b-4 border-brown-200">
            <h3 className="text-2xl font-bold text-brown-900 mb-4">Кофе-брейки</h3>
            <div className="w-24 h-1 bg-brown-300 mb-4"></div>
            <p className="text-black text-center">Организация перерывов на мероприятиях</p>
          </div>
        </div>
      </div>
    </section>
  );
} 