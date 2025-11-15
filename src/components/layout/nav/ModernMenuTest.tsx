import React, { useState } from 'react';
import ModernMegaMenuCategories from './ModernMegaMenuCategories';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Monitor, Smartphone, Tablet } from 'lucide-react';

const ModernMenuTest: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [viewportSize, setViewportSize] = useState('desktop');

  const handleViewportChange = (size: string) => {
    setViewportSize(size);
    // Simuler différentes tailles d'écran pour le test
    if (size === 'mobile') {
      document.documentElement.style.width = '375px';
      document.documentElement.style.height = '667px';
    } else if (size === 'tablet') {
      document.documentElement.style.width = '768px';
      document.documentElement.style.height = '1024px';
    } else {
      document.documentElement.style.width = '1920px';
      document.documentElement.style.height = '1080px';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Test du Menu Moderne de Catégories</h1>
        
        {/* Contrôles de test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Contrôles de Test</h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant={showMenu ? "default" : "outline"}
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2"
            >
              {showMenu ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showMenu ? 'Masquer le menu' : 'Afficher le menu'}
            </Button>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-md font-medium">Simulation de taille d'écran:</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={viewportSize === 'desktop' ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewportChange('desktop')}
                className="flex items-center gap-2"
              >
                <Monitor className="h-4 w-4" />
                Desktop (1920x1080)
              </Button>
              <Button
                variant={viewportSize === 'tablet' ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewportChange('tablet')}
                className="flex items-center gap-2"
              >
                <Tablet className="h-4 w-4" />
                Tablette (768x1024)
              </Button>
              <Button
                variant={viewportSize === 'mobile' ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewportChange('mobile')}
                className="flex items-center gap-2"
              >
                <Smartphone className="h-4 w-4" />
                Mobile (375x667)
              </Button>
            </div>
          </div>
        </div>
        
        {/* Zone de test du menu */}
        {showMenu && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Zone de Test du Menu</h2>
            <div className="relative" style={{ height: '600px', overflow: 'hidden' }}>
              <ModernMegaMenuCategories />
            </div>
          </div>
        )}
        
        {/* Instructions de test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">Instructions de Test</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">1.</span>
              <p>Testez le défilement horizontal des catégories avec la molette de la souris</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">2.</span>
              <p>Survolez chaque catégorie pour vérifier l'affichage des sous-catégories</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">3.</span>
              <p>Survolez chaque sous-catégorie pour vérifier l'affichage des sous-sous-catégories</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">4.</span>
              <p>Testez la fonctionnalité de recherche avec différents termes</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">5.</span>
              <p>Vérifiez le support RTL en changeant la langue vers l'arabe</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">6.</span>
              <p>Testez la responsivité avec les différentes tailles d'écran</p>
            </div>
          </div>
        </div>
        
        {/* Rapport de test */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">Rapport de Test</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>État actuel:</span>
              <span className="font-medium">{showMenu ? 'Menu affiché' : 'Menu masqué'}</span>
            </div>
            <div className="flex justify-between">
              <span>Viewport simulé:</span>
              <span className="font-medium">{viewportSize}</span>
            </div>
            <div className="flex justify-between">
              <span>Dimensions:</span>
              <span className="font-medium">
                {viewportSize === 'mobile' ? '375x667' : 
                 viewportSize === 'tablet' ? '768x1024' : '1920x1080'}
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-medium mb-2">Checklist de validation:</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Défilement horizontal fonctionnel</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Animations de survol fluides</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Affichage correct des sous-catégories</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Affichage correct des sous-sous-catégories</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Recherche fonctionnelle</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Support multilingue (FR/AR/EN/DE/ES)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Design responsive</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Support RTL pour l'arabe</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernMenuTest;