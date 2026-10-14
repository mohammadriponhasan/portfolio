import React, { useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';

interface AnimatedCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  suffix = '',
  prefix = '',
  duration = 2,
  delay = 0,
  className = ''
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!spanRef.current) return;

    const counterObj = { val: 0 };

    gsap.to(counterObj, {
      val: endValue,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: spanRef.current,
        start: 'top 90%',
        once: true
      },
      onUpdate: () => {
        if (spanRef.current) {
          spanRef.current.textContent = `${prefix}${Math.floor(counterObj.val)}${suffix}`;
        }
      }
    });
  }, { scope: spanRef, dependencies: [endValue, duration, delay] });

  return (
    <span ref={spanRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};
