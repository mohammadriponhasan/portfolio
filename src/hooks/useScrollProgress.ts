import { useState, useEffect } from 'react';
import { useSmoothScroll } from './useSmoothScroll';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const { onScroll } = useSmoothScroll();

  useEffect(() => {
    const unsubscribe = onScroll(({ progress: p }) => {
      setProgress(Math.min(100, Math.max(0, p * 100)));
    });

    return unsubscribe;
  }, [onScroll]);

  return progress;
};
