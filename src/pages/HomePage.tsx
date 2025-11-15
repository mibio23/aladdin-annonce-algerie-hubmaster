import React, { Suspense, useMemo } from 'react';
import { Loader2, Briefcase } from 'lucide-react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import LazySection from '@/components/common/LazySection';
import {
  LazySearchBar,
  LazyInteractiveCarousel,
  LazyAdvertisingCarousel,
  LazyDatabaseCarousel,
  LazyHeroCarousel
} from '@/components/optimized/LazyComponents';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { generateLocalizedUrl } from '@/lib/i18n/utils/languageDetector';

// Composants de base qui se chargent rapidement
import PopularCategoriesGrid from '@/components/home/PopularCategoriesGrid';
import AnnouncementPreviewCards from '@/components/home/AnnouncementPreviewCards';

// Les imports de carrousels problématiques ont été supprimés pour le nettoyage

const OptimizedLoadingSpinner = React.memo(() => (
  <div className="flex items-center justify-center p-8">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <span className="ml-2 text-muted-foreground">Chargement...</span>
  </div>
));

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

const HomePage = React.memo(() => {
  const { t } = useSafeI18nWithRouter();

  // Mémoriser les composants pour éviter les re-renders inutiles
  const memoizedComponents = useMemo(() => ({
    searchBar: <LazySearchBar />,
    heroCarousel: <LazyHeroCarousel />,
    interactiveCarousel: <LazyInteractiveCarousel />,
    advertisingCarousel: <LazyAdvertisingCarousel />,
    databaseCarousel: <LazyDatabaseCarousel />,
  }), []);

  return (
    <div className="min-h-screen bg-background">
      {/* Section Hero avec carousel publicitaire - Priorité haute */}
      <section className="relative">
        <Suspense fallback={<OptimizedLoadingSpinner />}>
          {memoizedComponents.heroCarousel}
        </Suspense>
      </section>

      {/* Barre de recherche avancée - Priorité haute */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Suspense fallback={<OptimizedLoadingSpinner />}>
            {memoizedComponents.searchBar}
          </Suspense>
        </div>
      </section>

      {/* Section Actions rapides - Chargement immédiat */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Vous êtes un professionnel ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Déposez votre offre de métiers et trouvez des clients dans votre région
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/deposer-offre-metier" className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Déposer votre offre de métiers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Catégories populaires - Chargement immédiat */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {t('home.popularCategories')}
          </h2>
          <PopularCategoriesGrid />
        </div>
      </section>

      {/* Carousel interactif - Priorité moyenne */}
      <LazySection rootMargin="300px">
        <section className="py-8">
          <Suspense fallback={<OptimizedLoadingSpinner />}>
            {memoizedComponents.interactiveCarousel}
          </Suspense>
        </section>
      </LazySection>

      {/* Aperçu des annonces - Chargement immédiat */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {t('home.latestAnnouncements')}
          </h2>
          <AnnouncementPreviewCards />
        </div>
      </section>

      {/* Carousel publicitaire - Priorité basse */}
      <LazySection rootMargin="400px">
        <section className="py-8">
          <Suspense fallback={<OptimizedLoadingSpinner />}>
            {memoizedComponents.advertisingCarousel}
          </Suspense>
        </section>
      </LazySection>

      {/* Carousel base de données - Priorité basse */}
      <LazySection rootMargin="500px">
        <section className="py-8">
          <Suspense fallback={<OptimizedLoadingSpinner />}>
            {memoizedComponents.databaseCarousel}
          </Suspense>
        </section>
      </LazySection>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;