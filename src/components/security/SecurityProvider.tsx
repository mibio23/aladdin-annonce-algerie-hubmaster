import React, { createContext, useContext, useEffect, useState } from 'react';
import { CSRFProvider } from './CSRFProtection';
import { useSecurityAudit } from '@/hooks/useSecurityAudit';
import { apiRateLimiter, searchRateLimiter } from '@/utils/securityValidators';

interface SecurityContextType {
  isSecurityEnabled: boolean;
  reportSecurityEvent: (eventType: string, details: any) => void;
  checkRateLimit: (type: 'api' | 'search', identifier: string) => boolean;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isSecurityEnabled] = useState(true);
  const { logSecurityEvent } = useSecurityAudit();

  const reportSecurityEvent = (eventType: string, details: any) => {
    logSecurityEvent({
      actionType: eventType,
      resourceType: 'security_event',
      metadata: {
        ...details,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      }
    });
  };

  const checkRateLimit = (type: 'api' | 'search', identifier: string): boolean => {
    const rateLimiter = type === 'api' ? apiRateLimiter : searchRateLimiter;
    const isAllowed = rateLimiter.isAllowed(identifier);
    
    if (!isAllowed) {
      reportSecurityEvent('rate_limit_exceeded', {
        type,
        identifier: identifier.substring(0, 10) + '...', // Masquer l'identifiant complet
        rateLimitType: type
      });
    }
    
    return isAllowed;
  };

  // Détecter les tentatives de manipulation du DOM
  useEffect(() => {
    if (!isSecurityEnabled) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Détecter les scripts injectés
              if (element.tagName === 'SCRIPT' && !element.hasAttribute('data-approved')) {
                reportSecurityEvent('suspicious_script_injection', {
                  tagName: element.tagName,
                  src: element.getAttribute('src'),
                  innerHTML: element.innerHTML.substring(0, 100)
                });
                element.remove();
              }
              
              // Détecter les iframes non autorisées
              if (element.tagName === 'IFRAME' && !element.hasAttribute('data-approved')) {
                reportSecurityEvent('suspicious_iframe_injection', {
                  src: element.getAttribute('src'),
                  sandbox: element.getAttribute('sandbox')
                });
                element.remove();
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [isSecurityEnabled, reportSecurityEvent]);

  // Détecter les tentatives de détournement de console
  useEffect(() => {
    if (!isSecurityEnabled) return;

    const originalConsole = { ...console };
    
    // Surveiller les tentatives de redéfinition de console
    Object.defineProperty(window, 'console', {
      get: () => originalConsole,
      set: (value) => {
        reportSecurityEvent('console_hijack_attempt', {
          originalKeys: Object.keys(originalConsole),
          newKeys: Object.keys(value || {})
        });
      }
    });

    return () => {
      // Restaurer la console originale
      Object.defineProperty(window, 'console', {
        value: originalConsole,
        writable: true,
        configurable: true
      });
    };
  }, [isSecurityEnabled, reportSecurityEvent]);

  return (
    <SecurityContext.Provider value={{
      isSecurityEnabled,
      reportSecurityEvent,
      checkRateLimit
    }}>
      <CSRFProvider>
        {children}
      </CSRFProvider>
    </SecurityContext.Provider>
  );
};