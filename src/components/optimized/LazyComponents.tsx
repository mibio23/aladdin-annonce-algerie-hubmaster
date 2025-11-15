import React, { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Composant de loading optimisé
const OptimizedLoadingSpinner = React.memo(() => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <span className="ml-2 text-muted-foreground">Chargement...</span>
  </div>
));

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

// Composants lourds chargés de manière lazy
export const LazyInteractiveOptionsCarousel = lazy(() => import('@/components/home/InteractiveOptionsCarousel'));
export const LazyAdvancedSearchBar = lazy(() => import('@/components/home/AdvancedSearchBar'));
export const LazyDatabaseAdvertisingCarousel = lazy(() => import('@/components/home/DatabaseAdvertisingCarousel'));
export const LazyAdvertisingHeroCarousel = lazy(() => import('@/components/home/AdvertisingHeroCarousel'));
export const LazyPopularCategoriesGrid = lazy(() => import('@/components/home/PopularCategoriesGrid'));
// LazyDualDirectionCarousel supprimé lors du nettoyage des fragments

// Composants admin lourds
export const LazySearchManagement = lazy(() => import('@/components/admin/SearchManagement'));
export const LazyAnnouncementManagement = lazy(() => import('@/components/admin/announcements/AnnouncementManagement'));
export const LazyBannerManagement = lazy(() => import('@/components/admin/banners/EnhancedBannerManagement'));
export const LazyUserManagement = lazy(() => import('@/components/admin/users/UserManagement'));

// Composants de recherche avancée
export const LazyConversationalSearch = lazy(() => import('@/components/search/ConversationalSearch'));
export const LazyAdvancedSidebarSearch = lazy(() => import('@/components/search/AdvancedSidebarSearch'));
export const LazySemanticSearchEngine = lazy(() => import('@/components/search/SemanticSearchEngine'));

// HOC pour wrapper les composants lazy avec un loading optimisé
export const withLazyLoading = <P extends object>(
  LazyComponent: React.LazyExoticComponent<React.ComponentType<P>>,
  loadingComponent?: React.ComponentType
) => {
  const LoadingComponent = loadingComponent || OptimizedLoadingSpinner;
  
  return React.memo(React.forwardRef<any, P>((props, ref) => (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  )));
};

// Composants wrappés prêts à l'emploi
export const LazyInteractiveCarousel = withLazyLoading(LazyInteractiveOptionsCarousel);
export const LazyAdvertisingCarousel = withLazyLoading(LazyAdvertisingHeroCarousel);
export const LazySearchBar = withLazyLoading(LazyAdvancedSearchBar);
export const LazyDatabaseCarousel = withLazyLoading(LazyDatabaseAdvertisingCarousel);
export const LazyHeroCarousel = withLazyLoading(LazyAdvertisingHeroCarousel);
export const LazyPopularCategories = withLazyLoading(LazyPopularCategoriesGrid);
// LazyDualCarousel supprimé lors du nettoyage des fragments

// Composants admin wrappés
export const LazyAdminSearch = withLazyLoading(LazySearchManagement);
export const LazyAdminAnnouncements = withLazyLoading(LazyAnnouncementManagement);
export const LazyAdminBanners = withLazyLoading(LazyBannerManagement);
export const LazyAdminUsers = withLazyLoading(LazyUserManagement);

// Composants de recherche wrappés
export const LazyConversational = withLazyLoading(LazyConversationalSearch);
export const LazyAdvancedSidebar = withLazyLoading(LazyAdvancedSidebarSearch);
export const LazySemanticSearch = withLazyLoading(LazySemanticSearchEngine);

// Utilitaire pour précharger les composants (version simplifiée)
export const preloadComponent = (lazyComponent: React.LazyExoticComponent<any>) => {
  // Méthode plus sûre pour précharger les composants lazy
  try {
    const componentImport = (lazyComponent as any)._payload?._result || (lazyComponent as any)._payload;
    if (typeof componentImport === 'function') {
      return componentImport();
    }
  } catch (error) {
    // En cas d'erreur, essayer d'importer directement
    console.warn('Could not preload component, falling back to direct import');
  }
  return Promise.resolve();
};

// Fonction pour précharger plusieurs composants
export const preloadComponents = async (components: React.LazyExoticComponent<any>[]) => {
  const promises = components.map(preloadComponent);
  return Promise.all(promises);
};

// Hook pour précharger les composants au hover
export const usePreloadOnHover = (lazyComponent: React.LazyExoticComponent<any>) => {
  const [isPreloaded, setIsPreloaded] = React.useState(false);
  
  const handleMouseEnter = React.useCallback(() => {
    if (!isPreloaded) {
      preloadComponent(lazyComponent);
      setIsPreloaded(true);
    }
  }, [lazyComponent, isPreloaded]);
  
  return { handleMouseEnter, isPreloaded };
};
