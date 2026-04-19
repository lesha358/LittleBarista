"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function YMHits() {
  const pathname = usePathname();
  
  useEffect(() => {
    const url =
      pathname + (typeof window !== "undefined" ? window.location.search : "");

    (window as any).ym?.(104587269, 'hit', url);
  }, [pathname]);
  
  return null;
}
