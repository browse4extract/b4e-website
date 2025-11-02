import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: 'green' | 'violet' | 'brand';
  compact?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient = 'brand',
  compact = false,
}) => {
  const gradientClasses = {
    green: 'from-brand-green-light to-brand-green-dark',
    violet: 'from-brand-violet-light to-brand-violet-dark',
    brand: 'from-brand-green to-brand-violet',
  };

  const glowClasses = {
    green: 'hover-glow-green',
    violet: 'hover-glow-violet',
    brand: 'glow-brand',
  };

  if (compact) {
    return (
      <div className={`glass border border-gray-800/30 rounded-xl p-5 hover:border-gray-700/50 transition-all duration-300 group ${glowClasses[gradient]} hover:-translate-y-1`}>
        <div className="flex items-center gap-4 mb-3">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClasses[gradient]} flex-shrink-0`}>
            <Icon size={22} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className={`glass border border-gray-800/30 rounded-xl p-6 hover:border-gray-700/50 transition-all duration-300 group shine ${glowClasses[gradient]} hover:-translate-y-1`}>
      {/* Icon with gradient background */}
      <div className="mb-5">
        <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${gradientClasses[gradient]} mb-4`}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all">{title}</h3>
        <div className={`w-12 h-1 bg-gradient-to-r ${gradientClasses[gradient]} rounded-full mb-3`} />
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};
