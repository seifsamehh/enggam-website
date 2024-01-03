"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function Parallax({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // easing: (t) => t * t * t * (t * (t * 6 - 15) + 10),
      // easing: (t) => {
      //   return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      // },
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
