'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  className?: string;
  glow?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  href,
  className = '',
  glow = false,
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg';

  const variantClasses = {
    primary: disabled
      ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-400 cursor-not-allowed border border-gray-700/50'
      : 'bg-gradient-brand hover:opacity-90 text-white hover:scale-105',
    secondary: disabled
      ? 'glass-strong border border-gray-700 text-gray-400 cursor-not-allowed'
      : 'glass-strong border border-gray-800 hover:border-gray-700 text-white hover:scale-105',
    outline: disabled
      ? 'border-2 border-gray-700 text-gray-400 cursor-not-allowed bg-gray-900/30'
      : 'border-2 border-gray-800 hover:border-brand-green hover:bg-brand-green/10 text-white hover:scale-105',
  };

  const glowClass = glow && !disabled ? 'glow-brand hover-glow-green' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${glowClass} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  if (href && !disabled) {
    // Check if it's an internal link (starts with /)
    const isInternalLink = href.startsWith('/') && !href.startsWith('//');

    if (isInternalLink) {
      return (
        <Link href={href} className={classes}>
          {Icon && <Icon size={20} />}
          {children}
        </Link>
      );
    }

    // External link
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {Icon && <Icon size={20} />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={classes} disabled={disabled && !onClick}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};
