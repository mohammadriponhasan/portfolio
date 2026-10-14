import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;

  const typeConfig = {
    success: {
      bg: 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]',
      icon: <CheckCircle className="shrink-0" size={18} />
    },
    error: {
      bg: 'bg-red-500/10 border-red-500/30 text-red-400',
      icon: <AlertCircle className="shrink-0" size={18} />
    },
    info: {
      bg: 'bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]',
      icon: <Info className="shrink-0" size={18} />
    }
  };

  const config = typeConfig[type];

  return (
    <div
      role="status"
      className={cn(
        'fixed bottom-8 right-8 z-50 flex items-center gap-3 p-4 rounded-xl border backdrop-blur-xl shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5',
        config.bg
      )}
    >
      {config.icon}
      <span className="text-sm font-semibold">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:opacity-80 transition-opacity"
          aria-label="Close notification"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};
