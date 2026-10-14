import React, { type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'blue' | 'neutral' | 'outline' | 'pulse';
  className?: string;
  size?: 'sm' | 'md';
  dot?: boolean;
  dotColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  size = 'md',
  dot = false,
  dotColor
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 tracking-wider',
    md: 'text-[11px] px-3.5 py-1 tracking-widest'
  };

  const variantStyles = {
    primary: 'bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20',
    success: 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    neutral: 'bg-slate-800/80 text-slate-300 border border-white/5',
    outline: 'bg-transparent text-slate-400 border border-slate-700/60',
    pulse: 'bg-slate-800/90 text-white border border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.12)]'
  };

  const defaultDotColor = {
    primary: 'bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]',
    success: 'bg-[#10B981] shadow-[0_0_8px_#10B981]',
    blue: 'bg-blue-400 shadow-[0_0_8px_#60A5FA]',
    neutral: 'bg-slate-400 shadow-none',
    outline: 'bg-slate-400 shadow-none',
    pulse: 'bg-[#10B981] shadow-[0_0_8px_#10B981]'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full font-bold uppercase transition-all duration-200 select-none',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            dotColor || defaultDotColor[variant]
          )}
        />
      )}
      {children}
    </div>
  );
};
