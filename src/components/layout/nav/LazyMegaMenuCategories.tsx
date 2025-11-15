import React, { Suspense } from 'react';
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { Loader2 } from "lucide-react";
 

// Composant de chargement
const MenuLoader = () => (
  <div className="flex items-center justify-center h-[500px] w-[800px]">
    <div className="flex flex-col items-center space-y-2">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Chargement des catégories...</p>
    </div>
  </div>
);

// Composant interne pour le contenu du menu
const MegaMenuContent: React.FC<{ language: string }> = () => {
  return (
    <div className="flex items-center justify-center h-[500px] w-[800px]">
      <p className="text-muted-foreground">Aucune catégorie disponible</p>
    </div>
  );
};

// Composant principal avec lazy loading
const LazyMegaMenuCategories: React.FC = () => {
  const { language } = useSafeI18nWithRouter();

  return (
    <Suspense fallback={<MenuLoader />}>
      <MegaMenuContent language={language} />
    </Suspense>
  );
};

export default LazyMegaMenuCategories;