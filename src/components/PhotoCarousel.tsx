'use client';

import { useState, useEffect } from 'react';
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
    alt: 'Кофейное мероприятие',
    orientation: 'horizontal'
  },
  {
    src: '/images/carousel/6.jpg',
    alt: 'Кофейное оборудование и напитки',
    orientation: 'horizontal'
  },
  {
    src: '/images/carousel/7.jpg',
    alt: 'Кофейная дегустация',
    orientation: 'horizontal'
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return 'scale-100 opacity-100 z-10';
    if (distance === 1) return 'scale-90 opacity-80 z-0';
    return 'scale-90 opacity-30 z-0';
  };

  return (
    <section id="gallery" className="scroll-mt-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 text-center md:text-left">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9f7b52]">Портфолио</div>
          <h2
            className="mt-3 text-4xl text-[#f5e8d3] md:text-5xl"
            style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
          >
            Фотографии с наших мероприятий
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#c7a679] md:mx-0">
            Редакционная подача, чистый свет и аккуратная визуальная атмосфера без лишнего шума.
          </p>
        </div>
        <div className="relative h-[300px] rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,.28)] sm:h-[400px] md:h-[500px] lg:h-[620px]">
          {/* Основной слайд */}
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ${getSlideStyle(index)}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
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
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(180deg,rgba(7,5,4,.06),rgba(7,5,4,.2)_45%,rgba(7,5,4,.52))]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Навигационные кнопки */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#7b5230]/35 bg-black/45 text-[#f5e8d3] backdrop-blur transition duration-300 hover:border-[#d2a063]/45 hover:bg-black/60 sm:left-4 sm:h-12 sm:w-12"
          >
            <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#7b5230]/35 bg-black/45 text-[#f5e8d3] backdrop-blur transition duration-300 hover:border-[#d2a063]/45 hover:bg-black/60 sm:right-4 sm:h-12 sm:w-12"
          >
            <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 