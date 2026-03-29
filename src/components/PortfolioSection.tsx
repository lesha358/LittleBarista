import fs from 'fs';
import path from 'path';
import Image from 'next/image';

const PORTFOLIO_DIR = '/images/portfolio';

/** Стабильный «микс» от набора имён файлов — порядок не меняется при каждом обновлении страницы */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  let s = seed >>> 0;
  const rnd = () => {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getPortfolioFiles(): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'portfolio');
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|jpe?g|png)$/i.test(f) && !f.startsWith('.'))
    .sort();
  const seed = files.reduce((acc, name) => acc + [...name].reduce((a, c) => a + c.charCodeAt(0), 0), 0);
  return seededShuffle(files, seed);
}

const portfolioFiles = getPortfolioFiles();

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
