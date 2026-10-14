import React, { type ReactNode, type MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  target,
  rel,
  disabled = false,
  ariaLabel
}) => {
  const commonProps = {
    className: `relative overflow-hidden group cursor-pointer inline-flex items-center justify-center transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none ${
      disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
    } ${className}`,
    'aria-label': ariaLabel
  };

  const content = (
    <>
      <span className="w-full h-full flex items-center justify-center gap-2 relative z-10">
        {children}
      </span>
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 z-0 rounded-[inherit] pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      {content}
    </button>
  );
};
