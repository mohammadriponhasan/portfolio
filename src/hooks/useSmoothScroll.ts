import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

export interface ScrollEventData {
  progress: number;
  scroll: number;
}

export interface SmoothScrollContextType {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
  onScroll: (callback: (data: ScrollEventData) => void) => () => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  getLenis: () => null,
  scrollTo: () => { },
  onScroll: () => () => { }
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
