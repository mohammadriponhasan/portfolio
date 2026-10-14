import React, { useEffect, useRef, useMemo, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../utils/gsap';
import { SmoothScrollContext, type ScrollEventData } from '../hooks/useSmoothScroll';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const listenersRef = useRef<Set<(data: ScrollEventData) => void>>(new Set());

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2
    });

    lenisRef.current = lenis;

    // Real-time frame-by-frame scroll callback
    const handleLenisScroll = (instance: Lenis) => {
      ScrollTrigger.update();
      const data: ScrollEventData = {
        progress: instance.progress,
        scroll: instance.scroll
      };
      listenersRef.current.forEach((cb) => {
        try {
          cb(data);
        } catch (err) {
          console.error(err);
        }
      });
    };

    lenis.on('scroll', handleLenisScroll);

    // Update Lenis in GSAP's ticker for synchronized rendering
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for internal hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Native fallback scroll listener
    const handleNativeScroll = () => {
      if (!lenisRef.current) {
        const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = total > 0 ? window.scrollY / total : 0;
        const data: ScrollEventData = {
          progress,
          scroll: window.scrollY
        };
        listenersRef.current.forEach((cb) => cb(data));
      }
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleNativeScroll);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const contextValue = useMemo(() => ({
    getLenis: () => lenisRef.current,
    onScroll: (callback: (data: ScrollEventData) => void) => {
      listenersRef.current.add(callback);
      // Trigger immediately with current position if available
      const currentLenis = lenisRef.current;
      if (currentLenis) {
        callback({ progress: currentLenis.progress, scroll: currentLenis.scroll });
      } else {
        const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = total > 0 ? window.scrollY / total : 0;
        callback({ progress, scroll: window.scrollY });
      }
      return () => {
        listenersRef.current.delete(callback);
      };
    },
    scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
      const instance = lenisRef.current;
      if (instance) {
        instance.scrollTo(target, {
          offset: options?.offset ?? -80,
          duration: options?.duration ?? 1.2
        });
      } else {
        if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: 'smooth' });
        } else if (typeof target === 'string') {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }), []);

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
