import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useCategories } from "@/services/supabaseCategoriesService";
import { categorizedAnnouncements } from "@/data/categoryData";
import { MenuCategory } from "@/data/categoryTypes";
import { Announcement } from "@/data/types/homePageTypes";

import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import CategoryBreadcrumbs from "@/components/category/CategoryBreadcrumbs";
import SubcategoryGrid from "@/components/category/SubcategoryGrid";
import FiltersPanel from "@/components/category/FiltersPanel";
import SimilarCategories from "@/components/category/SimilarCategories";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useSafeI18nWithRouter();
  const { data: categories = [], isLoading } = useCategories(language);
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [category, setCategory] = useState<MenuCategory | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);
  const [_showFilters, _setShowFilters] = useState(false);

  useEffect(() => {
    if (slug && categories.length > 0) {
      const foundCategory = categories.find(cat => cat.slug === slug);
      setCategory(foundCategory || null);
      
      const categoryAnnouncements = categorizedAnnouncements[slug] || [];
      setAnnouncements(categoryAnnouncements);
      setFilteredAnnouncements(categoryAnnouncements);
    }
  }, [slug, categories]);

  const _handleFilterChange = (filters: any) => {
    // Apply filters to announcements
    let filtered = [...announcements];
    
    if (filters.priceRange && filters.priceRange.length === 2) {
      filtered = filtered.filter(announcement => 
        announcement.price >= filters.priceRange[0] && 
        announcement.price <= filters.priceRange[1]
      );
    }
    
    if (filters.location) {
      filtered = filtered.filter(announcement => 
        announcement.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.dateRange) {
      // Apply date filtering logic
    }
    
    setFilteredAnnouncements(filtered);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('category.notFound')}</h1>
          <p className="text-gray-600">{t('category.notFoundDescription')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <CategoryBreadcrumbs />
          
          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t(`categories.${category.slug}`) !== `categories.${category.slug}` 
                ? t(`categories.${category.slug}`) 
                : category.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {announcements.length} {announcements.length === 1 ? t('category.announcement') : t('category.announcements')}
            </p>
          </div>

          {/* Subcategories Grid */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{t('category.subcategories')}</h2>
              <SubcategoryGrid 
                categorySlug={category.slug}
                subcategories={category.subcategories}
              />
            </div>
          )}

          {/* Filters and Content */}
          <div className="flex gap-6">
            <FiltersPanel
              showFilters={_showFilters}
            />
            
            <div className="flex-1">
              {/* Announcements Grid */}
              <div className={`grid gap-6 ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
              }`}>
                {filteredAnnouncements.map((announcement, index) => (
                  <LegacyAnnouncementCard
                    key={announcement.id}
                    announcement={announcement}
                    viewMode={viewMode}
                    index={index}
                  />
                ))}
              </div>
              
              {filteredAnnouncements.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('category.noAnnouncements')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <SimilarCategories category={category} currentSubcategory={undefined} />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default CategoryPage;