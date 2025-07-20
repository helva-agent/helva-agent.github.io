/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useLenis.ts
import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisOptions {
  lerp?: number;
  duration?: number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal" | "both";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  autoResize?: boolean;
}

export const useLenis = (options?: LenisOptions) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with default options
    const defaultOptions: LenisOptions = {
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      ...options,
    };

    lenisRef.current = new Lenis(defaultOptions);

    // Add to window for external access (useful for scroll-to functions)
    (window as any).lenis = lenisRef.current;

    // RAF loop
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      // Clean up window reference
      if ((window as any).lenis) {
        delete (window as any).lenis;
      }
    };
  }, []);

  // Utility functions
  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  const resize = () => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
    resize,
  };
};
