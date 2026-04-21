"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { YM_COUNTERS } from "@/lib/analytics";

export default function YMHits() {
  const pathname = usePathname();
  
  useEffect(() => {
    const url =
      pathname + (typeof window !== "undefined" ? window.location.search : "");

    const ym = (window as any).ym;
    if (typeof ym !== "function") return;
    YM_COUNTERS.forEach((id) => {
      try {
        ym(id, "hit", url);
      } catch {
        /* noop */
      }
    });
  }, [pathname]);
  
  return null;
}
