// Provider centralisé pour les bannières publicitaires
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAdvertisingBanners, type AdvertisingBanner } from '@/hooks/useAdvertisingBanners';

interface AdvertisingContextType {
  banners: AdvertisingBanner[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const AdvertisingContext = createContext<AdvertisingContextType | null>(null);

interface AdvertisingProviderProps {
  children: React.ReactNode;
}

export const AdvertisingProvider: React.FC<AdvertisingProviderProps> = ({ children }) => {
  const advertisingData = useAdvertisingBanners();
  
  useEffect(() => {
    if (advertisingData.banners.length > 0) {
      console.log(`Loaded ${advertisingData.banners.length} advertising banners`);
    }
    // Ne pas logger les erreurs pour éviter de polluer la console
  }, [advertisingData.banners.length]);

  return (
    <AdvertisingContext.Provider value={advertisingData}>
      {children}
    </AdvertisingContext.Provider>
  );
};

export const useAdvertising = (): AdvertisingContextType => {
  const context = useContext(AdvertisingContext);
  if (!context) {
    throw new Error('useAdvertising must be used within an AdvertisingProvider');
  }
  return context;
};