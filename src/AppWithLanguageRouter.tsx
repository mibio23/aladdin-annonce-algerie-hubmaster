import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { I18nProviderWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { AuthProvider } from '@/contexts/AuthContext';
import { AdvertisingProvider } from '@/providers/AdvertisingProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppErrorBoundary from '@/components/error/AppErrorBoundary';
import SystemInitializer from '@/components/system/SystemInitializer';
import LanguageRouter from '@/components/LanguageRouter';
import CategoryPerformanceMonitor from '@/components/performance/CategoryPerformanceMonitorSafe';
import { generateAllLanguageRoutes, legacyRedirectRoutes, notFoundRoute } from '@/config/routesWithLanguage';

// Create QueryClient outside of component to avoid recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Composant principal avec routage par langue
 * Remplace progressivement l'ancien App.tsx
 */
const AppWithLanguageRouter: React.FC = () => {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <I18nProviderWithRouter>
              <AuthProvider>
                <AdvertisingProvider>
                  <TooltipProvider>
                    <SystemInitializer>
                      <LanguageRouter>
                        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
                          <Routes>
                            {/* Routes multilingues */}
                            {generateAllLanguageRoutes()}
                            
                            {/* Routes de redirection legacy */}
                            {legacyRedirectRoutes}
                            
                            {/* Route 404 */}
                            {notFoundRoute}
                          </Routes>
                        </div>
                        
                        <Toaster />
                        <Sonner />
                      </LanguageRouter>
                    </SystemInitializer>
                    
                    {/* Moniteur de performance des catégories */}
                    <CategoryPerformanceMonitor />
                  </TooltipProvider>
                </AdvertisingProvider>
              </AuthProvider>
            </I18nProviderWithRouter>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
};

export default AppWithLanguageRouter;