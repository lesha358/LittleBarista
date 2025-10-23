"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function YMHits() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    (window as any).ym?.(104587269, 'hit', url);
  }, [pathname, searchParams]);
  
  return null;
}
