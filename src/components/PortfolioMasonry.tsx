export type PortfolioItem = { src: string; alt: string };

type Tile = {
  colStart: string;
  colSpan: string;
  rowStart: string;
  rowSpan: string;
};

const cardShell =
  'group relative h-full w-full overflow-hidden rounded-[22px] border border-[#6b4e2e]/35 shadow-[0_12px_40px_rgba(0,0,0,.4)] md:rounded-[26px]';

const imgClass =
  'h-full w-full object-cover brightness-[1.02] saturate-[1.06] contrast-[1.02] transition duration-500 group-hover:scale-[1.04]';

const mobileCardShell =
  'group relative h-[280px] w-[78vw] max-w-[320px] min-w-[240px] snap-start overflow-hidden rounded-[22px] border border-[#6b4e2e]/35 shadow-[0_12px_40px_rgba(0,0,0,.4)]';

const mobileTiles: Tile[] = [
  { colStart: 'col-start-1', colSpan: 'col-span-2', rowStart: 'row-start-1', rowSpan: 'row-span-2' },
  { colStart: 'col-start-3', colSpan: 'col-span-2', rowStart: 'row-start-1', rowSpan: 'row-span-2' },
  { colStart: 'col-start-1', colSpan: 'col-span-2', rowStart: 'row-start-3', rowSpan: 'row-span-2' },
  { colStart: 'col-start-3', colSpan: 'col-span-2', rowStart: 'row-start-3', rowSpan: 'row-span-2' },
  { colStart: 'col-start-1', colSpan: 'col-span-2', rowStart: 'row-start-5', rowSpan: 'row-span-2' },
  { colStart: 'col-start-3', colSpan: 'col-span-2', rowStart: 'row-start-5', rowSpan: 'row-span-2' },
];

const tabletTiles: Tile[] = [
  { colStart: 'md:col-start-1', colSpan: 'md:col-span-2', rowStart: 'md:row-start-1', rowSpan: 'md:row-span-2' },
  { colStart: 'md:col-start-3', colSpan: 'md:col-span-2', rowStart: 'md:row-start-1', rowSpan: 'md:row-span-2' },
  { colStart: 'md:col-start-5', colSpan: 'md:col-span-2', rowStart: 'md:row-start-1', rowSpan: 'md:row-span-2' },
  { colStart: 'md:col-start-1', colSpan: 'md:col-span-3', rowStart: 'md:row-start-3', rowSpan: 'md:row-span-2' },
  { colStart: 'md:col-start-4', colSpan: 'md:col-span-1', rowStart: 'md:row-start-3', rowSpan: 'md:row-span-2' },
  { colStart: 'md:col-start-5', colSpan: 'md:col-span-2', rowStart: 'md:row-start-3', rowSpan: 'md:row-span-2' },
];

const desktopTiles: Tile[] = [
  { colStart: 'lg:col-start-1', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-1', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-3', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-1', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-5', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-1', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-7', colSpan: 'lg:col-span-3', rowStart: 'lg:row-start-1', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-10', colSpan: 'lg:col-span-3', rowStart: 'lg:row-start-1', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-1', colSpan: 'lg:col-span-3', rowStart: 'lg:row-start-3', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-4', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-3', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-6', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-3', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-8', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-3', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-10', colSpan: 'lg:col-span-3', rowStart: 'lg:row-start-3', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-1', colSpan: 'lg:col-span-4', rowStart: 'lg:row-start-5', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-5', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-5', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-7', colSpan: 'lg:col-span-2', rowStart: 'lg:row-start-5', rowSpan: 'lg:row-span-2' },
  { colStart: 'lg:col-start-9', colSpan: 'lg:col-span-4', rowStart: 'lg:row-start-5', rowSpan: 'lg:row-span-2' },
];

function getVisibleItems(items: PortfolioItem[], count: number): PortfolioItem[] {
  if (items.length === 0) return [];
  if (items.length >= count) return items.slice(0, count);

  const filled: PortfolioItem[] = [];
  for (let i = 0; i < count; i++) {
    filled.push(items[i % items.length]);
  }
  return filled;
}

function GridView({
  items,
  tiles,
  className,
}: {
  items: PortfolioItem[];
  tiles: Tile[];
  className: string;
}) {
  const visibleItems = getVisibleItems(items, tiles.length);

  return (
    <div className={className}>
      {visibleItems.map((item, index) => {
        const tile = tiles[index];
        return (
          <div
            key={`${item.src}-${index}`}
            className={[
              tile.colStart,
              tile.colSpan,
              tile.rowStart,
              tile.rowSpan,
            ].join(' ')}
          >
            <div className={cardShell}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={imgClass}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0),rgba(7,5,4,.08)_40%,rgba(7,5,4,.22))]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PortfolioMasonry({ items }: { items: PortfolioItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {items.map((item, index) => (
          <div key={`${item.src}-mobile-${index}`} className={mobileCardShell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className={imgClass}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0),rgba(7,5,4,.08)_40%,rgba(7,5,4,.22))]" />
          </div>
        ))}
      </div>
      <GridView
        items={items}
        tiles={tabletTiles}
        className="hidden h-[640px] grid-cols-6 grid-rows-4 gap-4 md:grid lg:hidden"
      />
      <GridView
        items={items}
        tiles={desktopTiles}
        className="hidden h-[760px] grid-cols-12 grid-rows-6 gap-4 lg:grid"
      />
    </div>
  );
}
