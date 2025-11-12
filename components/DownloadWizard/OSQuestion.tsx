'use client';

import React from 'react';
import { useWizardContext } from './WizardContext';
import { OS, OSOption } from './types';

const osOptions: OSOption[] = [
  {
    id: 'windows',
    name: 'Windows',
    icon: '🪟',
    description: 'Windows 10 or later',
    color: 'green',
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: '🍎',
    description: 'macOS 10.15 (Catalina) or later',
    color: 'violet',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: '🐧',
    description: 'Ubuntu 18.04+ or equivalent',
    color: 'green',
  },
];

export default function OSQuestion() {
  const { selectOS } = useWizardContext();

  const handleSelect = (os: OS) => {
    selectOS(os);
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-3xl font-bold text-white mb-2">
        What operating system are you using?
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        Select your platform to get started
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {osOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`group relative p-8 rounded-2xl text-center transition-all duration-500 border-2 hover:scale-110 hover:-translate-y-2 ${
              option.color === 'green'
                ? 'border-brand-green/40 hover:border-brand-green hover:bg-brand-green/5'
                : 'border-brand-violet/40 hover:border-brand-violet hover:bg-brand-violet/5'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              boxShadow: option.color === 'green'
                ? '0 4px 20px rgba(111, 187, 105, 0.1)'
                : '0 4px 20px rgba(191, 143, 215, 0.1)'
            }}
          >
            <div className="text-7xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{option.icon}</div>
            <h4 className={`text-2xl font-bold mb-3 ${
              option.color === 'green' ? 'text-brand-green' : 'text-brand-violet'
            }`}>
              {option.name}
            </h4>
            <p className="text-sm text-gray-400">{option.description}</p>

            {/* Hover glow effect */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
              option.color === 'green' ? 'bg-brand-green/20' : 'bg-brand-violet/20'
            }`}></div>
          </button>
        ))}
      </div>
    </div>
  );
}
