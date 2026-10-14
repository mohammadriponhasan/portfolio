import React, { type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  sectionNumber: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'between';
  accentColor?: string;
  rightElement?: ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  category,
  title,
  subtitle,
  align = 'left',
  accentColor = 'bg-[#38BDF8]',
  rightElement,
  className = ''
}) => {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'between' && 'flex flex-col md:flex-row md:items-end justify-between gap-6',
        align === 'center' && 'text-center flex flex-col items-center',
        align === 'left' && 'flex flex-col gap-4',
        className
      )}
    >
      <div className={cn('flex flex-col gap-4', align === 'center' ? 'items-center' : 'items-start')}>
        <div className="flex items-center gap-3">
          <span className={cn('w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]', accentColor)} />
          <span className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-widest">
            {sectionNumber} // {category}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {rightElement && (
        <div className="shrink-0 flex items-center gap-3">
          {rightElement}
        </div>
      )}
    </div>
  );
};
