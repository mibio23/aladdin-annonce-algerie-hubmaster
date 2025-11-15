
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useCategories } from "@/services/supabaseCategoriesService";
import { categorizedAnnouncements } from "@/data/categoryData";
import { MenuCategory, SubCategory } from "@/data/categoryTypes";
import { Announcement } from "@/data/types/homePageTypes";

import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import CategoryBreadcrumbs from "@/components/category/CategoryBreadcrumbs";
import SubcategoryHeader from "@/components/category/SubcategoryHeader";
import FiltersPanel from "@/components/category/FiltersPanel";
import SimilarCategories from "@/components/category/SimilarCategories";

const SubcategoryPage = () => {
  const { slug, subslug } = useParams<{ slug: string; subslug: string }>();
  const { t, language } = useSafeI18nWithRouter();
  const { data: categories = [], isLoading } = useCategories(language);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [category, setCategory] = useState<MenuCategory | null>(null);
  const [subcategory, setSubcategory] = useState<SubCategory | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (slug && categories.length > 0) {
      const foundCategory = categories.find(cat => cat.slug === slug);
      if (foundCategory) {
        setCategory(foundCategory);
        const foundSubcategory = foundCategory.subcategories.find(sub => sub.slug === subslug);
        setSubcategory(foundSubcategory || null);
      }
    }
  }, [slug, subslug, categories]);

  useEffect(() => {
    const categoryAnnouncements = categorizedAnnouncements[subslug || ''] || [];
    setAnnouncements(categoryAnnouncements);
    setFilteredAnnouncements(categoryAnnouncements);
  }, [subslug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">{t('common.loading')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {t('categories.notFound')}
            </h1>
            <Link to="/" className="text-orange-500 hover:text-orange-600">
              {t('categories.backToHome')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const translatedCategoryName = t(`categories.${category.slug}`) !== `categories.${category.slug}` 
    ? t(`categories.${category.slug}`) 
    : category.name;

  const translatedSubcategoryName = t(`categories.${subcategory.slug}`) !== `categories.${subcategory.slug}` 
    ? t(`categories.${subcategory.slug}`) 
    : subcategory.name;

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <CategoryBreadcrumbs
          categorySlug={category.slug}
          categoryName={translatedCategoryName}
          subcategoryName={translatedSubcategoryName}
        />

        <SubcategoryHeader
          subcategory={subcategory}
          translatedSubcategoryName={translatedSubcategoryName}
          announcementsCount={announcements.length}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <FiltersPanel showFilters={showFilters} />

        {filteredAnnouncements.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredAnnouncements.map((announcement) => (
              <LegacyAnnouncementCard 
                key={announcement.id}
                id={announcement.id}
                title={announcement.title}
                price={announcement.price}
                location={announcement.location}
                imageUrl={announcement.imageUrl}
                date={announcement.date}
                category={announcement.category}
                phoneNumber={announcement.phoneNumber}
                isOnline={announcement.isOnline}
                hasVideoStory={announcement.hasVideoStory}
                isProfessional={announcement.isProfessional}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-lg p-12 text-center shadow-sm">
            <div className="text-gray-400 mb-4">
              <Grid className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {t('announcements.noResults')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('announcements.noResultsDesc')}
            </p>
            <Link 
              to={`/category/${category.slug}`}
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t('announcements.browseCategory')}
            </Link>
          </div>
        )}

        <SimilarCategories category={category} currentSubcategory={subcategory} />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SubcategoryPage;
