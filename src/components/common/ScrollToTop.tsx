import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const CIRCLE_RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const { onScroll, scrollTo } = useSmoothScroll();
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const unsubscribe = onScroll(({ progress: p, scroll }) => {
      const clamped = Math.min(1, Math.max(0, p));
      setProgress(clamped);
      setShow(scroll > 350);

      if (circleRef.current) {
        const offset = CIRCUMFERENCE - clamped * CIRCUMFERENCE;
        circleRef.current.style.strokeDashoffset = `${offset}`;
      }
    });

    return unsubscribe;
  }, [onScroll]);

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.2, offset: 0 });
  };

  if (!show) return null;

  const currentOffset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full bg-[#111827]/90 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#7DD3FC]/40 transition-all duration-200 group hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={CIRCLE_RADIUS}
          className="stroke-slate-800"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          ref={circleRef}
          cx="22"
          cy="22"
          r={CIRCLE_RADIUS}
          className="stroke-[#7DD3FC]"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={currentOffset}
          strokeLinecap="round"
        />
      </svg>
      <ChevronUp size={20} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5 text-[#7DD3FC]" />
    </button>
  );
};
