'use client';

import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    href: '/services/mobile-coffee',
    img: '/images/Stand.jpg',
    alt: 'Выездная кофейня',
    title: 'Выездная кофейня',
    desc: 'Профессиональная кофейная станция с бариста на вашем мероприятии',
  },
  {
    href: '/services/mobile-bar',
    img: '/images/triad-bar.webp',
    alt: 'Выездной бар',
    title: 'Выездной бар',
    desc: 'Барные решения под формат события: классика, non-alcohol, авторские',
    featured: true,
  },
  {
    href: '/services/coffee-machines',
    img: '/images/machines-triad.jpg',
    alt: 'Аренда кофемашин',
    title: 'Аренда кофемашин',
    desc: 'Краткосрочная аренда по Москве и области. Доставка, подключение, обучение',
  },
  {
    href: '/services/personnel',
    img: '/images/host.webp',
    alt: 'Персонал на мероприятия',
    title: 'Персонал на мероприятия',
    desc: 'Хостес, промо-модели, хелперы, операторы регистрации. Подбор под задачу',
  },
];

export default function ServiceTriad() {
  return (
    <section id="services-triad" className="services-premium">
      <div className="services-container">
        <div className="services-head">
          <p className="services-kicker">Форматы сервиса</p>
          <h2>Наши ключевые направления</h2>
          <p className="services-subtitle">Выберите формат, который подходит именно вам</p>
        </div>

        <div className="services-grid">
          {cards.map((card) => (
            <div key={card.href} className="service-card__wrapper">
              <Link
                href={card.href}
                className={`service-card ${card.featured ? 'featured' : ''}`}
                aria-label={card.title}
              >
                <div className="service-card__media">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="service-card__content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="service-link">Подробнее</span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
