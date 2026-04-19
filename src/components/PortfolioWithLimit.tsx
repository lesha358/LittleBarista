'use client';

import { useState } from 'react';
import type { PortfolioItem } from './PortfolioMasonry';
import PortfolioMasonry from './PortfolioMasonry';

const INITIAL = 12;
const STEP = 12;

export default function PortfolioWithLimit({ items }: { items: PortfolioItem[] }) {
  const [count, setCount] = useState(() => Math.min(INITIAL, items.length));
  const visible = items.slice(0, count);
  const canShowMore = count < items.length;

  return (
    <>
      <PortfolioMasonry items={visible} />
      {canShowMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => Math.min(items.length, c + STEP))}
            className="rounded-full border border-[#7b5230]/45 bg-[rgba(29,19,14,.75)] px-6 py-3 text-sm font-medium text-[#d7c2a7] transition hover:border-[#d2a063]/55 hover:text-[#f0dcc0]"
          >
            Показать ещё
          </button>
        </div>
      )}
    </>
  );
}
