import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glow-green' | 'glow-violet' | 'glow-brand';
  shine?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  variant = 'default',
  shine = false,
}) => {
  const hoverClasses = hover ? 'hover:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

  const variantClasses = {
    'default': '',
    'glow-green': 'glow-green',
    'glow-violet': 'glow-violet',
    'glow-brand': 'glow-brand',
  };

  const shineClass = shine ? 'shine' : '';

  return (
    <div
      className={`glass border border-gray-800/30 rounded-xl p-6 ${hoverClasses} ${variantClasses[variant]} ${shineClass} ${className}`}
    >
      {children}
    </div>
  );
};
