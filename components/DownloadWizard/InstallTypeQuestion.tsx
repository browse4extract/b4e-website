'use client';

import React from 'react';
import { Package, Archive } from 'lucide-react';
import { useWizardContext } from './WizardContext';
import { InstallType, InstallTypeOption } from './types';

export default function InstallTypeQuestion() {
  const { state, selectInstallType } = useWizardContext();

  const handleSelect = (type: InstallType) => {
    selectInstallType(type);
  };

  // Adapt labels based on OS
  const getInstallTypeOptions = (): InstallTypeOption[] => {
    if (state.selectedOS === 'linux') {
      return [
        {
          id: 'installer',
          name: 'AppImage',
          description: 'Portable application bundle',
          icon: 'package',
        },
        {
          id: 'portable',
          name: 'Tarball',
          description: 'Extract and run manually',
          icon: 'archive',
        },
      ];
    }

    return [
      {
        id: 'installer',
        name: 'Installer',
        description: 'Automatic installation with shortcuts',
        icon: 'package',
      },
      {
        id: 'portable',
        name: state.selectedOS === 'windows' ? 'Portable ZIP' : 'Portable DMG',
        description: 'No installation required, run directly',
        icon: 'archive',
      },
    ];
  };

  const installTypeOptions = getInstallTypeOptions();

  return (
    <div className="animate-fade-in">
      <h3 className="text-3xl font-bold text-white mb-2">
        How would you like to install?
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        Choose your installation method
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {installTypeOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="group relative p-10 rounded-2xl text-center transition-all duration-500 border-2 border-brand-green/40 hover:border-brand-green hover:bg-brand-green/5 hover:scale-110 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
              boxShadow: '0 4px 20px rgba(111, 187, 105, 0.1)'
            }}
          >
            <div className="flex justify-center mb-6 transform group-hover:scale-125 transition-transform duration-500">
              {option.icon === 'package' ? (
                <Package size={56} className="text-brand-green" />
              ) : (
                <Archive size={56} className="text-brand-green" />
              )}
            </div>
            <h4 className="text-2xl font-bold text-brand-green mb-3">
              {option.name}
            </h4>
            <p className="text-base text-gray-400">{option.description}</p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl bg-brand-green/20"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
