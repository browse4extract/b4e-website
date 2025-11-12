'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { WizardState, OS, MacArch, InstallType, WizardStepType } from './types';

interface WizardContextType {
  state: WizardState;
  selectOS: (os: OS) => void;
  selectMacArch: (arch: MacArch) => void;
  selectInstallType: (type: InstallType) => void;
  openWizard: () => void;
  closeWizard: () => void;
  reset: () => void;
  goBack: () => void;
}

type WizardAction =
  | { type: 'SELECT_OS'; payload: OS }
  | { type: 'SELECT_MAC_ARCH'; payload: MacArch }
  | { type: 'SELECT_INSTALL_TYPE'; payload: InstallType }
  | { type: 'SET_STEP'; payload: WizardStepType }
  | { type: 'OPEN_WIZARD' }
  | { type: 'CLOSE_WIZARD' }
  | { type: 'RESET' }
  | { type: 'GO_BACK' };

const initialState: WizardState = {
  step: 'os',
  selectedOS: null,
  selectedMacArch: null,
  selectedInstallType: null,
  isOpen: false,
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'SELECT_OS':
      return {
        ...state,
        selectedOS: action.payload,
        step: action.payload === 'macos' ? 'mac-arch' : 'install-type',
      };

    case 'SELECT_MAC_ARCH':
      return {
        ...state,
        selectedMacArch: action.payload,
        step: 'install-type',
      };

    case 'SELECT_INSTALL_TYPE':
      return {
        ...state,
        selectedInstallType: action.payload,
        step: 'result',
      };

    case 'SET_STEP':
      return {
        ...state,
        step: action.payload,
      };

    case 'OPEN_WIZARD':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_WIZARD':
      return {
        ...state,
        isOpen: false,
      };

    case 'RESET':
      return {
        ...initialState,
        isOpen: true,
      };

    case 'GO_BACK':
      let previousStep: WizardStepType = 'os';

      if (state.step === 'result') {
        previousStep = 'install-type';
      } else if (state.step === 'install-type') {
        previousStep = state.selectedOS === 'macos' ? 'mac-arch' : 'os';
      } else if (state.step === 'mac-arch') {
        previousStep = 'os';
      }

      return {
        ...state,
        step: previousStep,
      };

    default:
      return state;
  }
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const selectOS = (os: OS) => {
    dispatch({ type: 'SELECT_OS', payload: os });
  };

  const selectMacArch = (arch: MacArch) => {
    dispatch({ type: 'SELECT_MAC_ARCH', payload: arch });
  };

  const selectInstallType = (type: InstallType) => {
    dispatch({ type: 'SELECT_INSTALL_TYPE', payload: type });
  };

  const openWizard = () => {
    dispatch({ type: 'OPEN_WIZARD' });
  };

  const closeWizard = () => {
    dispatch({ type: 'CLOSE_WIZARD' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const goBack = () => {
    dispatch({ type: 'GO_BACK' });
  };

  return (
    <WizardContext.Provider
      value={{
        state,
        selectOS,
        selectMacArch,
        selectInstallType,
        openWizard,
        closeWizard,
        reset,
        goBack,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizardContext() {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizardContext must be used within a WizardProvider');
  }
  return context;
}
