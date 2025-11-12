'use client';

import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { useWizardContext } from './WizardContext';
import OSQuestion from './OSQuestion';
import MacArchQuestion from './MacArchQuestion';
import InstallTypeQuestion from './InstallTypeQuestion';
import WizardResult from './WizardResult';

export default function WizardModal() {
  const { state, closeWizard, goBack } = useWizardContext();

  // Don't render if not open
  if (!state.isOpen) return null;

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWizard();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeWizard]);

  // Note: We don't lock body scroll to avoid scrollbar issues
  // The modal backdrop prevents interaction with the page content anyway

  const canGoBack = state.step !== 'os';

  const renderStep = () => {
    switch (state.step) {
      case 'os':
        return <OSQuestion />;
      case 'mac-arch':
        return <MacArchQuestion />;
      case 'install-type':
        return <InstallTypeQuestion />;
      case 'result':
        return <WizardResult />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop with animated gradient */}
      <div
        className="absolute inset-0 backdrop-blur-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(111, 187, 105, 0.15), rgba(191, 143, 215, 0.15), rgba(0, 0, 0, 0.98))'
        }}
        onClick={closeWizard}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-gradient-to-br from-dark-gray/95 via-dark-almost/95 to-dark-pure/95 border-2 border-brand-green/30 rounded-3xl p-10 animate-slide-up shadow-2xl" style={{
        boxShadow: '0 0 80px rgba(111, 187, 105, 0.3), 0 0 120px rgba(191, 143, 215, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {canGoBack && (
              <button
                onClick={goBack}
                className="p-2 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Download Wizard</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-green via-brand-violet to-brand-green bg-clip-text text-transparent" style={{
                backgroundSize: '200% auto',
                animation: 'gradientShift 3s ease infinite'
              }}>
                Get Your Perfect Version
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Answer a few questions to find the right download
              </p>
            </div>
          </div>
          <button
            onClick={closeWizard}
            className="p-2 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {state.step !== 'result' && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-brand-violet uppercase tracking-wider">Progress</span>
              <span className="text-xs text-brand-green font-bold">
                Step {state.step === 'os' ? 1 : state.step === 'mac-arch' ? 2 : state.step === 'install-type' ? (state.selectedOS === 'macos' ? 3 : 2) : 3}
                {' / '}{state.selectedOS === 'macos' ? 3 : 2}
              </span>
            </div>
            <div className="relative h-3 bg-dark-pure/80 rounded-full overflow-hidden border border-gray-800/50">
              <div
                className="h-full bg-gradient-to-r from-brand-green to-brand-violet transition-all duration-700 ease-out relative"
                style={{
                  width:
                    state.step === 'os'
                      ? '33%'
                      : state.step === 'mac-arch'
                      ? '66%'
                      : state.step === 'install-type'
                      ? state.selectedOS === 'macos'
                        ? '90%'
                        : '66%'
                      : '100%',
                  boxShadow: '0 0 20px rgba(111, 187, 105, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="min-h-[300px]">{renderStep()}</div>
      </div>
    </div>
  );
}
