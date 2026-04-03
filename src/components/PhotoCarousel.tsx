'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type CarouselImage = {
  src: string;
  alt: string;
};

type PhotoCarouselProps = {
  images: CarouselImage[];
};

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => Math.min(prevIndex, images.length - 1));
  }, [images.length]);

  useEffect(() => {
    const el = thumbsRef.current;
    if (!el) return;
    const active = el.querySelector<HTMLElement>(`[data-thumb-index="${currentIndex}"]`);
    active?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  }, [currentIndex]);

  if (images.length === 0) {
    return (
      <section id="gallery" className="scroll-mt-32 overflow-x-hidden">
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
              Фотографии скоро появятся здесь.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <section id="gallery" className="scroll-mt-32 overflow-x-hidden">
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
        <div className="relative rounded-[30px] border border-[#7b5230]/35 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)),linear-gradient(180deg,rgba(29,19,14,.94),rgba(15,10,8,.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,.28)] sm:p-4">
          <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-black/20 sm:h-[400px] md:h-[500px] lg:h-[620px]">
            <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[#f0dcc0] backdrop-blur sm:left-5 sm:top-5">
              {currentIndex + 1} / {images.length}
            </div>

            <div className="absolute inset-0">
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain p-3 sm:p-5"
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,.06),rgba(7,5,4,.18)_45%,rgba(7,5,4,.48))]" />
            </div>

            {/* Навигационные кнопки (внутри блока основного фото) */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#7b5230]/35 bg-black/45 text-[#f5e8d3] backdrop-blur transition duration-300 hover:border-[#d2a063]/45 hover:bg-black/60 sm:left-5 sm:h-12 sm:w-12"
              aria-label="Предыдущее фото"
            >
              <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#7b5230]/35 bg-black/45 text-[#f5e8d3] backdrop-blur transition duration-300 hover:border-[#d2a063]/45 hover:bg-black/60 sm:right-5 sm:h-12 sm:w-12"
              aria-label="Следующее фото"
            >
              <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            ref={thumbsRef}
            className="mt-4 w-full min-w-0 touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-2 [scrollbar-color:rgba(210,160,99,0.45)_rgba(0,0,0,0.25)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d2a063]/45 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/25"
          >
            <div className="flex w-max gap-3 pr-1">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  data-thumb-index={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl border transition duration-300 sm:h-20 sm:w-28 ${
                    index === currentIndex
                      ? 'border-[#d2a063] ring-2 ring-[#d2a063]/35'
                      : 'border-[#7b5230]/35 hover:border-[#c89a60]/45'
                  }`}
                  aria-label={`Открыть фото ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="112px"
                  />
                  <div className={`absolute inset-0 transition ${
                    index === currentIndex ? 'bg-transparent' : 'bg-black/30'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 