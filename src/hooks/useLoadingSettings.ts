import { useState, useEffect } from 'react';

interface LoadingSettings {
  isEnabled: boolean;
  duration: number;
}

const LOADING_SETTINGS_KEY = 'aladdin_loading_settings';

const defaultSettings: LoadingSettings = {
  isEnabled: false,
  duration: 0
};

export const useLoadingSettings = () => {
  const [settings, setSettings] = useState<LoadingSettings>(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem(LOADING_SETTINGS_KEY);
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.error('Error parsing loading settings:', error);
      }
    }
  }, []);

  const updateSettings = (newSettings: Partial<LoadingSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem(LOADING_SETTINGS_KEY, JSON.stringify(updatedSettings));
  };

  return {
    settings,
    updateSettings,
    isLoadingEnabled: settings.isEnabled,
    loadingDuration: settings.duration
  };
};
