import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CSRFContextType {
  token: string | null;
  refreshToken: () => Promise<void>;
}

const CSRFContext = createContext<CSRFContextType | null>(null);

export const useCSRF = () => {
  const context = useContext(CSRFContext);
  if (!context) {
    throw new Error('useCSRF must be used within CSRFProvider');
  }
  return context;
};

interface CSRFProviderProps {
  children: React.ReactNode;
}

export const CSRFProvider: React.FC<CSRFProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const generateToken = () => {
    // Génération d'un token CSRF sécurisé
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const refreshToken = async () => {
    try {
      const newToken = generateToken();
      
      // Stocker le token dans le session storage (plus sécurisé que localStorage)
      sessionStorage.setItem('csrf_token', newToken);
      sessionStorage.setItem('csrf_timestamp', Date.now().toString());
      
      setToken(newToken);
    } catch (error) {
      console.error('Erreur lors de la génération du token CSRF:', error);
    }
  };

  const validateToken = (_storedToken: string, timestamp: string) => {
    const tokenAge = Date.now() - parseInt(timestamp);
    const maxAge = 30 * 60 * 1000; // 30 minutes
    
    return tokenAge < maxAge;
  };

  useEffect(() => {
    // Initialiser ou valider le token existant
    const storedToken = sessionStorage.getItem('csrf_token');
    const timestamp = sessionStorage.getItem('csrf_timestamp');
    
    if (storedToken && timestamp && validateToken(storedToken, timestamp)) {
      setToken(storedToken);
    } else {
      refreshToken();
    }

    // Rafraîchir le token périodiquement avec setTimeout récursif
    let timeoutId: NodeJS.Timeout;
    
    const scheduleRefresh = () => {
      timeoutId = setTimeout(() => {
        refreshToken();
        scheduleRefresh();
      }, 25 * 60 * 1000); // 25 minutes
    };
    
    scheduleRefresh();
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Nettoyer le token lors de la déconnexion
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        sessionStorage.removeItem('csrf_token');
        sessionStorage.removeItem('csrf_timestamp');
        setToken(null);
      } else if (event === 'SIGNED_IN') {
        refreshToken();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <CSRFContext.Provider value={{ token, refreshToken }}>
      {children}
    </CSRFContext.Provider>
  );
};

// Hook pour ajouter automatiquement le token CSRF aux requêtes
export const useSecureRequest = () => {
  const { token } = useCSRF();

  const makeSecureRequest = async (
    url: string, 
    options: RequestInit = {}
  ): Promise<Response> => {
    if (!token) {
      throw new Error('Token CSRF non disponible');
    }

    const headers = new Headers(options.headers);
    headers.set('X-CSRF-Token', token);
    headers.set('X-Requested-With', 'XMLHttpRequest');

    return fetch(url, {
      ...options,
      headers,
      credentials: 'same-origin'
    });
  };

  return { makeSecureRequest, token };
};