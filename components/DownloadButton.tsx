'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/Button';
import { useToast } from '@/components/Toast';

interface DownloadButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  glow?: boolean;
  platform?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  glow = false,
  platform,
}) => {
  const { showToast } = useToast();

  const handleDownloadClick = () => {
    const currentDomain = typeof window !== 'undefined' ? window.location.hostname : 'browse4extract.github.io';

    const platformText = platform ? ` for ${platform}` : '';

    const message = `🚧 The software${platformText} is still in development but will be available soon!

📌 Bookmark this domain to stay updated:
   → ${currentDomain}

⚠️  This is the ONLY official domain for the application.

✅ To verify authenticity, you can visit:
   → github.com/browse4extract`;

    showToast(message, 'info', 10000);
  };

  return (
    <Button
      variant={variant}
      icon={Download}
      className={className}
      glow={glow}
      disabled
      onClick={handleDownloadClick}
    >
      {children}
    </Button>
  );
};
