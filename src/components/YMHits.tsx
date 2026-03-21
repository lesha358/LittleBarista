"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function YMHitsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    (window as any).ym?.(104587269, 'hit', url);
  }, [pathname, searchParams]);
  
  return null;
}

export default function YMHits() {
  return (
    <Suspense fallback={null}>
      <YMHitsInner />
    </Suspense>
  );
}
