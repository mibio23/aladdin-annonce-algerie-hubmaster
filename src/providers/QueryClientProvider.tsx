import React from 'react';
import { QueryClientProvider as ReactQueryProvider } from '@tanstack/react-query';
import { categoriesQueryClient } from '@/services/supabaseCategoriesService';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
  return (
    <ReactQueryProvider client={categoriesQueryClient}>
      {children}
    </ReactQueryProvider>
  );
};

export default QueryClientProvider;