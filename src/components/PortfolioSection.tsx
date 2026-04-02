import fs from 'fs';
import path from 'path';

import PortfolioMasonry from '@/components/PortfolioMasonry';

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
const HOST_HINT = /host/i;

/**
 * Равномерно раскладывает специальные кадры по всей последовательности.
 * Так `host`-фото не будут стоять подряд даже при добавлении/удалении файлов.
 */
function distributeAcrossList<T>(special: T[], regular: T[]): T[] {
  if (special.length === 0) return regular;
  if (regular.length === 0) return special;

  const total = special.length + regular.length;
  const slots = new Array<T | undefined>(total);

  for (let i = 0; i < special.length; i++) {
    let pos = Math.floor(((i + 0.5) * total) / special.length);
    pos = Math.max(0, Math.min(total - 1, pos));

    while (slots[pos] !== undefined && pos < total - 1) pos++;
    while (slots[pos] !== undefined && pos > 0) pos--;
    slots[pos] = special[i];
  }

  let regularIndex = 0;
  for (let i = 0; i < total; i++) {
    if (slots[i] === undefined) {
      slots[i] = regular[regularIndex++];
    }
  }

  return slots.filter((item): item is T => item !== undefined);
}

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

  const base = interleaveHalves(mixed);
  const hostPhotos = base.filter((file) => HOST_HINT.test(file));
  const otherPhotos = base.filter((file) => !HOST_HINT.test(file));

  return distributeAcrossList(hostPhotos, otherPhotos);
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

        <PortfolioMasonry items={photoItems} />
      </div>
    </section>
  );
}
