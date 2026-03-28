import Image from 'next/image';

const PORTFOLIO_DIR = '/images/portfolio';

const portfolioFiles = [
  'convertio.in_photo_1_2026-03-28_11-07-55.webp',
  'convertio.in_photo_2_2026-03-28_11-07-55.webp',
  'convertio.in_photo_3_2026-03-28_11-07-55.webp',
  'convertio.in_photo_4_2026-03-28_11-07-55.webp',
  'convertio.in_photo_5_2026-03-28_11-07-55.webp',
  'convertio.in_photo_6_2026-03-28_11-07-55.webp',
  'convertio.in_photo_7_2026-03-28_11-07-55.webp',
] as const;

const photoItems: { src: string; alt: string; aspect: 'portrait' | 'landscape' }[] =
  portfolioFiles.map((file, i) => ({
    src: `${PORTFOLIO_DIR}/${file}`,
    alt: `Портфолио Little Barista — фото ${i + 1}`,
    aspect: i % 2 === 0 ? 'portrait' : 'landscape',
  }));

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="services-premium scroll-mt-28">
      <div className="services-container">
        <div className="services-head">
          <p className="services-kicker">Работы</p>
          <h2>Портфолио</h2>
          <p className="services-subtitle">Фото с наших мероприятий</p>
        </div>

        <div className="mt-10 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {photoItems.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`relative mb-3 break-inside-avoid overflow-hidden rounded-[22px] border border-[#6b4e2e]/35 shadow-[0_12px_40px_rgba(0,0,0,.4)] md:mb-4 md:rounded-[26px] ${
                item.aspect === 'portrait'
                  ? 'aspect-[3/4]'
                  : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
