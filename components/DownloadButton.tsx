'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { useWizardContext } from '@/components/DownloadWizard/WizardContext';

interface DownloadButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  glow?: boolean;
  platform?: string;
  downloadUrl?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  glow = false,
  platform,
  downloadUrl,
}) => {
  const { openWizard } = useWizardContext();

  // If a specific download URL is provided, use it
  if (downloadUrl) {
    return (
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg ${
          variant === 'primary'
            ? 'bg-gradient-brand hover:opacity-90 text-white hover:scale-105'
            : variant === 'secondary'
            ? 'glass-strong border border-gray-800 hover:border-gray-700 text-white hover:scale-105'
            : 'border-2 border-gray-800 hover:border-brand-green hover:bg-brand-green/10 text-white hover:scale-105'
        } ${glow ? 'glow-brand hover-glow-green' : ''}`}
      >
        <Download size={20} />
        {children}
      </a>
    );
  }

  // Otherwise, open the wizard
  return (
    <button
      onClick={openWizard}
      className={`${className} px-6 py-3 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg ${
        variant === 'primary'
          ? 'bg-gradient-brand hover:opacity-90 text-white hover:scale-105'
          : variant === 'secondary'
          ? 'glass-strong border border-gray-800 hover:border-gray-700 text-white hover:scale-105'
          : 'border-2 border-gray-800 hover:border-brand-green hover:bg-brand-green/10 text-white hover:scale-105'
      } ${glow ? 'glow-brand hover-glow-green' : ''}`}
    >
      <Download size={20} />
      {children}
    </button>
  );
};
