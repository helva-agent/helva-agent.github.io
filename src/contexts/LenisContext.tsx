/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import Lenis from "lenis";

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
  stop: () => void;
  start: () => void;
  resize: () => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    lerp?: number;
    duration?: number;
    orientation?: "vertical" | "horizontal";
    gestureOrientation?: "vertical" | "horizontal" | "both";
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    autoResize?: boolean;
  };
}

export const LenisProvider: React.FC<LenisProviderProps> = ({
  children,
  options = {},
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const defaultOptions = {
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical" as const,
      gestureOrientation: "vertical" as const,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      ...options,
    };

    lenisRef.current = new Lenis(defaultOptions);

    // Add to window for external access
    (window as any).lenis = lenisRef.current;

    // RAF loop
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      if ((window as any).lenis) {
        delete (window as any).lenis;
      }
    };
  }, []);

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

  const value = {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
    resize,
  };

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
};

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error("useLenisContext must be used within a LenisProvider");
  }
  return context;
};
