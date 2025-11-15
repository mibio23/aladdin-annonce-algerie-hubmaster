import { useState, useCallback } from 'react';
import { Language } from '../types/comprehensive';

interface AdminHookState {
  isAdminOpen: boolean;
  isMonitorOpen: boolean;
  currentView: 'admin' | 'monitor' | null;
}

interface AdminControls {
  openAdmin: () => void;
  openMonitor: () => void;
  closeAll: () => void;
  toggleAdmin: () => void;
  toggleMonitor: () => void;
}

/**
 * Hook for managing translation admin interfaces
 */
export function useTranslationAdmin(): AdminHookState & AdminControls {
  const [state, setState] = useState<AdminHookState>({
    isAdminOpen: false,
    isMonitorOpen: false,
    currentView: null,
  });

  const openAdmin = useCallback(() => {
    setState({
      isAdminOpen: true,
      isMonitorOpen: false,
      currentView: 'admin',
    });
  }, []);

  const openMonitor = useCallback(() => {
    setState({
      isAdminOpen: false,
      isMonitorOpen: true,
      currentView: 'monitor',
    });
  }, []);

  const closeAll = useCallback(() => {
    setState({
      isAdminOpen: false,
      isMonitorOpen: false,
      currentView: null,
    });
  }, []);

  const toggleAdmin = useCallback(() => {
    setState(prev => ({
      isAdminOpen: !prev.isAdminOpen,
      isMonitorOpen: false,
      currentView: !prev.isAdminOpen ? 'admin' : null,
    }));
  }, []);

  const toggleMonitor = useCallback(() => {
    setState(prev => ({
      isAdminOpen: false,
      isMonitorOpen: !prev.isMonitorOpen,
      currentView: !prev.isMonitorOpen ? 'monitor' : null,
    }));
  }, []);

  return {
    ...state,
    openAdmin,
    openMonitor,
    closeAll,
    toggleAdmin,
    toggleMonitor,
  };
}

/**
 * Development helper to add admin access in dev mode
 */
export function useDevTranslationTools() {
  const admin = useTranslationAdmin();
  
  // Add keyboard shortcuts in development
  if (process.env.NODE_ENV === 'development') {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + Shift + T for admin
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        admin.toggleAdmin();
      }
      
      // Ctrl/Cmd + Shift + M for monitor
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        admin.toggleMonitor();
      }
    });
  }
  
  return admin;
}

/**
 * Hook for translation debugging in development
 */
export function useTranslationDebug() {
  const [debugMode, setDebugMode] = useState(
    process.env.NODE_ENV === 'development' && 
    localStorage.getItem('translation-debug') === 'true'
  );

  const toggleDebug = useCallback(() => {
    const newMode = !debugMode;
    setDebugMode(newMode);
    localStorage.setItem('translation-debug', newMode.toString());
  }, [debugMode]);

  const logTranslation = useCallback((key: string, value: string, language: Language, source: 'direct' | 'fallback') => {
    if (debugMode) {
      const style = source === 'fallback' ? 'color: orange' : 'color: green';
      console.log(`%c[i18n] ${language}: ${key} → ${value}`, style);
    }
  }, [debugMode]);

  const logMissingTranslation = useCallback((key: string, language: Language) => {
    if (debugMode) {
      console.warn(`[i18n] Missing translation: ${key} (${language})`);
    }
  }, [debugMode]);

  return {
    debugMode,
    toggleDebug,
    logTranslation,
    logMissingTranslation,
  };
}