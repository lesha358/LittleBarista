import fs from 'fs';
import path from 'path';

const PORTFOLIO_DIR = '/images/portfolio';

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

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

/** Чередует первую и вторую половину списка — в CSS columns похожие кадры реже идут подряд в одной колонке */
function interleaveHalves<T>(arr: T[]): T[] {
  if (arr.length < 3) return arr;
  const mid = Math.ceil(arr.length / 2);
  const a = arr.slice(0, mid);
  const b = arr.slice(mid);
  const out: T[] = [];
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

/** Попеременно склеивает два списка — удобно поднять «коктейльные» кадры выше и размешать с остальными */
function interleaveTwo<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

/** Если в имени файла есть подсказка — кадр идёт в приоритет и чаще выше в сетке. Переименуйте файлы, напр. `cocktail_01.jpg`. */
const FILENAME_TOP_HINT =
  /cocktail|mocktail|моктейл|напит|drinks?|барная|бар-/i;

function getPortfolioFiles(): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'portfolio');
  if (!fs.existsSync(dir)) return [];
  const raw = fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|jpe?g|png)$/i.test(f) && !f.startsWith('.'))
    .sort((x, y) => hashString(x) - hashString(y));

  const priority: string[] = [];
  const rest: string[] = [];
  for (const f of raw) {
    if (FILENAME_TOP_HINT.test(f)) priority.push(f);
    else rest.push(f);
  }

  const seed = raw.reduce((acc, name) => acc ^ hashString(name), 0);
  const s = seed || 1;

  let mixed: string[];
  if (priority.length && rest.length) {
    mixed = interleaveTwo(seededShuffle(priority, s ^ 0x9e3779b9), seededShuffle(rest, s ^ 0x85ebca6b));
  } else {
    mixed = interleaveHalves(seededShuffle(raw, s));
  }

  return interleaveHalves(mixed);
}

const portfolioFiles = getPortfolioFiles();

const photoItems: { src: string; alt: string }[] = portfolioFiles.map((file, i) => ({
  src: `${PORTFOLIO_DIR}/${file}`,
  alt: `Портфолио Little Barista — фото ${i + 1}`,
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
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[22px] border border-[#6b4e2e]/35 shadow-[0_12px_40px_rgba(0,0,0,.4)] md:mb-4 md:rounded-[26px]"
            >
              {/* Натуральные пропорции файла — masonry без object-cover и без letterbox */}
              {/* eslint-disable-next-line @next/next/no-img-element -- смешанные ориентации, нужен натуральный aspect ratio */}
              <img
                src={item.src}
                alt={item.alt}
                loading={i < 6 ? 'eager' : 'lazy'}
                decoding="async"
                className="block h-auto w-full brightness-[1.02] saturate-[1.06] contrast-[1.02] transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0),rgba(7,5,4,.08)_40%,rgba(7,5,4,.22))]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
