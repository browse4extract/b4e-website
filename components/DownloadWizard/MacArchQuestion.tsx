'use client';

import React from 'react';
import { useWizardContext } from './WizardContext';
import { MacArch, MacArchOption } from './types';

const macArchOptions: MacArchOption[] = [
  {
    id: 'arm64',
    name: 'Apple Silicon',
    description: 'M1, M2, M3, M4 chips',
  },
  {
    id: 'intel',
    name: 'Intel',
    description: 'Intel-based Mac',
  },
];

export default function MacArchQuestion() {
  const { selectMacArch } = useWizardContext();

  const handleSelect = (arch: MacArch) => {
    selectMacArch(arch);
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-3xl font-bold text-white mb-2">
        What type of Mac do you have?
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        Choose your processor architecture
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {macArchOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="group relative p-10 rounded-2xl text-center transition-all duration-500 border-2 border-brand-violet/40 hover:border-brand-violet hover:bg-brand-violet/5 hover:scale-110 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
              boxShadow: '0 4px 20px rgba(191, 143, 215, 0.1)'
            }}
          >
            <h4 className="text-2xl font-bold text-brand-violet mb-3">
              {option.name}
            </h4>
            <p className="text-base text-gray-400">{option.description}</p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl bg-brand-violet/20"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
