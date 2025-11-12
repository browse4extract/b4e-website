export type OS = 'windows' | 'macos' | 'linux';
export type MacArch = 'intel' | 'arm64';
export type InstallType = 'installer' | 'portable';
export type WizardStepType = 'os' | 'mac-arch' | 'install-type' | 'result';

export interface WizardState {
  step: WizardStepType;
  selectedOS: OS | null;
  selectedMacArch: MacArch | null;
  selectedInstallType: InstallType | null;
  isOpen: boolean;
}

export interface DownloadOption {
  label: string;
  description: string;
  url: string;
  icon: 'package' | 'archive';
}

export interface OSOption {
  id: OS;
  name: string;
  icon: string;
  description: string;
  color: 'green' | 'violet';
}

export interface MacArchOption {
  id: MacArch;
  name: string;
  description: string;
}

export interface InstallTypeOption {
  id: InstallType;
  name: string;
  description: string;
  icon: 'package' | 'archive';
}
