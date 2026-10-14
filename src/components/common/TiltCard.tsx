import React, { useRef, type ReactNode, type MouseEvent } from 'react';
import { gsap } from '../../utils/gsap';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxRotation = 8
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotationX: -y * maxRotation,
      rotationY: x * maxRotation,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
