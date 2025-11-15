
import React, { Suspense } from "react";
import Hero from "@/components/home/Hero";
import ShareButtons from "@/components/shared/ShareButtons";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import LoadingSpinner from "@/components/common/LoadingSpinner";

// Lazy load heavy components to reduce initial bundle size
const ShopByCategorySection = React.lazy(() => import("@/components/home/ShopByCategorySection"));
const AnnouncementsByLineSection = React.lazy(() => import("@/components/home/AnnouncementsByLineSection"));
const PremiumAnnouncementsSection = React.lazy(() => import("@/components/home/PremiumAnnouncementsSection"));
const DiscoverShopsSection = React.lazy(() => import("@/components/home/DiscoverShopsSection"));
const PopularSearchedAnnouncementsSection = React.lazy(() => import("@/components/home/PopularSearchedAnnouncementsSection"));
const AdvancedSearchBar = React.lazy(() => import("@/components/home/AdvancedSearchBar"));
const DatabaseAdvertisingCarousel = React.lazy(() => import("@/components/home/DatabaseAdvertisingCarousel"));

const LazySection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<div className="animate-pulse bg-muted h-32 rounded-lg mx-4" />}>
    {children}
  </Suspense>
);

const Index = () => {
  return (
    <>
      {/* Grande bannière avec conteneur centré - loaded immediately */}
      <div className="container mx-auto px-4 py-6">
        <Hero />
      </div>

      {/* Contenu principal en plein écran */}
      <main className="flex-grow">
        <div className="space-y-6 py-4">
          <LazySection>
            <ShopByCategorySection />
          </LazySection>

          <div className="px-4">
            <LazySection>
              <AdvancedSearchBar />
            </LazySection>
          </div>

          {/* Sections d'annonces - lazy loaded */}
          <div className="space-y-6">
            <LazySection>
              <PremiumAnnouncementsSection />
            </LazySection>
            
            <LazySection>
              <DiscoverShopsSection />
            </LazySection>
            
            <LazySection>
              <PopularSearchedAnnouncementsSection />
            </LazySection>
            
            <LazySection>
              <AnnouncementsByLineSection />
            </LazySection>
          </div>
        </div>
      </main>

      {/* Carrousel publicitaire - lazy loaded */}
      <LazySection>
        <DatabaseAdvertisingCarousel />
      </LazySection>

      <ShareButtons />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Index;
