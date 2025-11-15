import React, { Suspense, useState } from 'react';
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useCategories, usePreloadCategories } from "@/services/supabaseCategoriesService";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryGroupList from "./CategoryGroupList";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Composant de chargement optimisé
const MenuLoader = () => (
  <div className="flex items-center justify-center h-[500px] w-[800px]">
    <div className="flex flex-col items-center space-y-3">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Chargement des catégories...</p>
      <p className="text-xs text-muted-foreground">Depuis la base de données</p>
    </div>
  </div>
);

// Composant d'erreur avec retry
const MenuError = ({ error, onRetry }: { error: Error; onRetry: () => void }) => (
  <div className="flex items-center justify-center h-[500px] w-[800px] p-6">
    <div className="max-w-md text-center space-y-4">
      <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
      <div>
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
          Erreur de chargement
        </h3>
        <p className="text-sm text-red-600 dark:text-red-400 mt-1">
          {error.message || 'Impossible de charger les catégories depuis la base de données'}
        </p>
      </div>
      <Button 
        onClick={onRetry}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Réessayer
      </Button>
      <p className="text-xs text-muted-foreground">
        Si le problème persiste, vérifiez votre connexion internet
      </p>
    </div>
  </div>
);

// Composant de contenu principal
const SupabaseMenuContent: React.FC<{ language: string }> = ({ language }) => {
  const { 
    data: categories = [], 
    isLoading, 
    error, 
    refetch
  } = useCategories(language);
  
  const preloadCategories = usePreloadCategories();

  // Précharger les langues courantes après le premier chargement réussi
  React.useEffect(() => {
    if (categories.length > 0) {
      // Précharger les autres langues en arrière-plan
      const commonLanguages = ['fr', 'ar', 'en'];
      const timeoutId = setTimeout(() => {
        commonLanguages.forEach(lang => {
          if (lang !== language) {
            preloadCategories(lang);
          }
        });
      }, 2000); // Attendre 2 secondes après le chargement

      return () => clearTimeout(timeoutId);
    }
  }, [categories.length, language, preloadCategories]);

  // État de chargement
  if (isLoading) {
    return <MenuLoader />;
  }

  // État d'erreur
  if (error) {
    return <MenuError error={error} onRetry={() => refetch()} />;
  }

  // Aucune catégorie trouvée
  if (!categories.length) {
    return (
      <div className="flex items-center justify-center h-[500px] w-[800px]">
        <div className="text-center space-y-2">
          <AlertCircle className="h-8 w-8 text-yellow-500 mx-auto" />
          <p className="text-muted-foreground">Aucune catégorie disponible</p>
          <p className="text-xs text-muted-foreground">
            Les catégories pourraient être en cours de configuration
          </p>
        </div>
      </div>
    );
  }

  // Diviser les catégories en 3 colonnes pour l'affichage
  const itemsPerColumn = Math.ceil(categories.length / 3);
  const column1 = categories.slice(0, itemsPerColumn);
  const column2 = categories.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = categories.slice(itemsPerColumn * 2);

  return (
    <ScrollArea className="h-[500px] w-[800px]">
      <div className="grid grid-cols-3 gap-8 p-6">
        <div>
          <CategoryGroupList categories={column1} />
        </div>
        <div>
          <CategoryGroupList categories={column2} />
        </div>
        <div>
          <CategoryGroupList categories={column3} />
        </div>
      </div>
      
      {/* Indicateur de source de données */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-2">
          <span>📊 Données en temps réel</span>
          <span>🗄️ Base de données Supabase</span>
        </div>
      </div>
    </ScrollArea>
  );
};

// Composant principal avec Suspense et gestion d'erreurs
const SupabaseMegaMenuCategories: React.FC = () => {
  const { language } = useSafeI18nWithRouter();
  const [hasError, setHasError] = useState(false);

  // Gestionnaire d'erreurs pour React Error Boundary
  const handleError = React.useCallback((error: Error) => {
    console.error('Erreur dans SupabaseMegaMenuCategories:', error);
    setHasError(true);
  }, []);

  // Si une erreur critique est survenue, afficher un fallback
  if (hasError) {
    return (
      <div className="flex items-center justify-center h-[500px] w-[800px]">
        <Alert className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Une erreur est survenue lors du chargement du menu. 
            Veuillez réessayer plus tard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <ErrorBoundary onError={handleError}>
      <Suspense fallback={<MenuLoader />}>
        <SupabaseMenuContent language={language} />
      </Suspense>
    </ErrorBoundary>
  );
};

// Error Boundary simple pour gérer les erreurs React
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: (error: Error) => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: (error: Error) => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-[500px] w-[800px]">
          <Alert className="max-w-md">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Une erreur inattendue est survenue. Veuillez rafraîchir la page.
            </AlertDescription>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SupabaseMegaMenuCategories;