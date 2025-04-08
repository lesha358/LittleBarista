'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/carousel/1.jpg',
    alt: 'Кофейная церемония',
    orientation: 'vertical'
  },
  {
    src: '/images/carousel/2.jpg',
    alt: 'Кофейные напитки',
    orientation: 'horizontal'
  },
  {
    src: '/images/carousel/3.jpg',
    alt: 'Кофейное оборудование',
    orientation: 'vertical'
  },
  {
    src: '/images/carousel/4.jpg',
    alt: 'Кофейный бар',
    orientation: 'horizontal'
  },
  {
    src: '/images/carousel/5.jpg',
    alt: 'Кофейная зона',
    orientation: 'vertical'
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getSlideStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return 'scale-100 opacity-100 z-10';
    if (distance === 1) return 'scale-90 opacity-80 z-0';
    return 'scale-90 opacity-30 z-0';
  };

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-900">Фотографии с наших мероприятий</h2>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Основной слайд */}
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ${getSlideStyle(index)}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 80}%)`,
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className={`relative ${
                    image.orientation === 'vertical' 
                      ? 'h-full w-auto' 
                      : 'h-full w-full max-w-[800px]'
                  }`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.orientation === 'vertical' ? 200 : 400}
                      height={300}
                      className={`object-contain rounded-lg ${
                        image.orientation === 'vertical' 
                          ? '!w-auto !h-full' 
                          : '!w-full !h-full'
                      }`}
                      priority={index === currentIndex}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Навигационные кнопки */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 