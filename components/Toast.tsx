'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, Info, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

type ToastType = 'info' | 'success' | 'warning' | 'error';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = 5000) => {
    const id = Math.random().toString(36).substring(7);
    const newToast: Toast = { id, message, type, duration };

    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-brand-green" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-yellow-400" />;
      case 'error':
        return <AlertCircle size={20} className="text-red-400" />;
      default:
        return <Info size={20} className="text-brand-violet" />;
    }
  };

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'border-brand-green/40 bg-gradient-to-br from-dark-gray/95 to-dark-almost/95 shadow-2xl';
      case 'warning':
        return 'border-yellow-500/40 bg-gradient-to-br from-dark-gray/95 to-dark-almost/95 shadow-2xl';
      case 'error':
        return 'border-red-500/40 bg-gradient-to-br from-dark-gray/95 to-dark-almost/95 shadow-2xl';
      default:
        return 'border-brand-violet/40 bg-gradient-to-br from-dark-gray/95 to-dark-almost/95 shadow-2xl';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-start gap-3 p-4 rounded-xl border backdrop-blur-xl
              shadow-2xl animate-slide-in-right
              ${getStyles(toast.type)}
            `}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(toast.type)}
            </div>
            <div className="flex-1 text-white text-sm leading-relaxed whitespace-pre-line">
              {toast.message.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.split(/(\s+)/).map((part, partIndex) => {
                    // Highlight domains (e.g., browse4extract.github.io)
                    const domainMatch = part.match(/^([a-z0-9.-]+\.(io|org|com|net))$/i);
                    if (domainMatch) {
                      return (
                        <strong key={partIndex} className="text-brand-green">
                          {part}
                        </strong>
                      );
                    }

                    // Highlight GitHub links (e.g., github.com/browse4extract)
                    const githubMatch = part.match(/^(github\.com\/[a-zA-Z0-9-]+)$/);
                    if (githubMatch) {
                      return (
                        <strong key={partIndex} className="text-brand-violet">
                          {part}
                        </strong>
                      );
                    }

                    return <span key={partIndex}>{part}</span>;
                  })}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
