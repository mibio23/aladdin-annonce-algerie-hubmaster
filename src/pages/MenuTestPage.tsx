import React from 'react';
import ModernMenuTest from '@/components/layout/nav/ModernMenuTest';

const MenuTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Page de Test du Menu Moderne
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Testez le nouveau menu de catégories avec support multilingue complet
          </p>
        </div>
        
        <ModernMenuTest />
      </div>
    </div>
  );
};

export default MenuTestPage;