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
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  href,
  className = '',
  glow = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105';

  const variantClasses = {
    primary: 'bg-gradient-brand hover:opacity-90 text-white',
    secondary: 'glass-strong border border-gray-800 hover:border-gray-700 text-white',
    outline: 'border-2 border-gray-800 hover:border-brand-green hover:bg-brand-green/10 text-white',
  };

  const glowClass = glow ? 'glow-brand hover-glow-green' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${glowClass} ${className}`;

  if (href) {
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
    <button onClick={onClick} className={classes}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};
