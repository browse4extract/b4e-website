'use client';

import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, ExternalLink } from 'lucide-react';
import { useWizardContext } from './WizardContext';
import { fetchVersionData, VersionData } from '@/lib/versionFetcher';

export default function WizardResult() {
  const { state, reset } = useWizardContext();
  const [versionData, setVersionData] = useState<VersionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVersionData()
      .then((data) => {
        setVersionData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const getDownloadUrl = (): string => {
    if (!versionData) return '#';

    const { selectedOS, selectedMacArch, selectedInstallType } = state;

    if (selectedOS === 'windows') {
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.windows.installer
        : versionData.downloadLinks.windows.portable;
    }

    if (selectedOS === 'macos') {
      const arch = selectedMacArch || 'arm64';
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.macos[arch].dmg
        : versionData.downloadLinks.macos[arch].zip;
    }

    if (selectedOS === 'linux') {
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.linux.appimage
        : versionData.downloadLinks.linux.tarball;
    }

    return '#';
  };

  const getAlternativeUrl = (): string => {
    if (!versionData) return '#';

    const { selectedOS, selectedMacArch, selectedInstallType } = state;

    if (selectedOS === 'windows') {
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.windows.portable
        : versionData.downloadLinks.windows.installer;
    }

    if (selectedOS === 'macos') {
      const arch = selectedMacArch || 'arm64';
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.macos[arch].zip
        : versionData.downloadLinks.macos[arch].dmg;
    }

    if (selectedOS === 'linux') {
      return selectedInstallType === 'installer'
        ? versionData.downloadLinks.linux.tarball
        : versionData.downloadLinks.linux.appimage;
    }

    return '#';
  };

  const getSelectionSummary = () => {
    const os = state.selectedOS === 'windows' ? 'Windows' : state.selectedOS === 'macos' ? 'macOS' : 'Linux';
    const arch = state.selectedMacArch === 'arm64' ? 'Apple Silicon' : state.selectedMacArch === 'intel' ? 'Intel' : '';
    const type = state.selectedInstallType === 'installer'
      ? (state.selectedOS === 'linux' ? 'AppImage' : 'Installer')
      : (state.selectedOS === 'linux' ? 'Tarball' : state.selectedOS === 'windows' ? 'Portable ZIP' : 'Portable DMG');

    return { os, arch, type };
  };

  const summary = getSelectionSummary();
  const primaryUrl = getDownloadUrl();
  const alternativeUrl = getAlternativeUrl();

  const getAlternativeLabel = () => {
    if (state.selectedOS === 'linux') {
      return state.selectedInstallType === 'installer' ? 'Tarball' : 'AppImage';
    }
    return state.selectedInstallType === 'installer' ? 'Portable' : 'Installer';
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/20 rounded-full mb-4">
          <CheckCircle size={32} className="text-brand-green" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Perfect! Here's your download
        </h3>
        <p className="text-gray-400">
          We've found the best version for your setup
        </p>
      </div>

      {/* Selection Summary */}
      <div className="glass-strong border border-gray-800/50 rounded-xl p-6 mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Your Selection</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Operating System</span>
            <span className="text-white font-semibold">{summary.os}</span>
          </div>
          {summary.arch && (
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Architecture</span>
              <span className="text-white font-semibold">{summary.arch}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Installation Type</span>
            <span className="text-white font-semibold">{summary.type}</span>
          </div>
          {versionData && (
            <div className="flex items-center justify-between pt-2 border-t border-gray-800">
              <span className="text-gray-400">Version</span>
              <span className="text-white font-semibold">{versionData.version}</span>
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green"></div>
          <p className="text-gray-400 mt-2">Loading download link...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <a
            href={primaryUrl}
            className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-glow-green hover:shadow-glow-green-strong"
          >
            <Download size={20} />
            Download {summary.type}
          </a>

          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-gray-800"></div>
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-800"></div>
          </div>

          <a
            href={alternativeUrl}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-brand-green hover:bg-brand-green/5 transition-all"
          >
            <Download size={16} />
            Download {getAlternativeLabel()} instead
          </a>

          {versionData?.releaseUrl && (
            <a
              href={versionData.releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 text-gray-400 hover:text-brand-violet transition-colors"
            >
              <ExternalLink size={16} />
              View release notes
            </a>
          )}
        </div>
      )}

      {/* Start Over Button */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <button
          onClick={reset}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Start over with different options
        </button>
      </div>
    </div>
  );
}
