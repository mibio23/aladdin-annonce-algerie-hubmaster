
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { I18nProviderWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdvertisingProvider } from "@/providers/AdvertisingProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import AppErrorBoundary from "@/components/error/AppErrorBoundary";
import SystemInitializer from "@/components/system/SystemInitializer";
import { publicRoutes, authRoutes, userRoutes, adminRoutes, notFoundRoute } from "@/config/routesOptimizedV2.tsx";

// Create QueryClient outside of component to avoid recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppProvidersProps {
  children?: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
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
                      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
                        <Routes>
                          {publicRoutes}
                          {authRoutes}
                          {userRoutes}
                          {adminRoutes}
                          {notFoundRoute}
                        </Routes>
                        
                      </div>
                      <Toaster />
                      <Sonner />
                    </SystemInitializer>
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

export default AppProviders;
