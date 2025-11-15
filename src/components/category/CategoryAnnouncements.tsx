import React, { useState, useMemo } from "react";
import { Grid, List, Filter } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { SubCategory } from "@/data/categoryTypes";
import { Announcement } from "@/data/types/homePageTypes";
import { categorizedAnnouncements } from "@/data/categoryData";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";

interface CategoryAnnouncementsProps {
  subcategories: SubCategory[];
  categorySlug: string;
}

const CategoryAnnouncements: React.FC<CategoryAnnouncementsProps> = ({
  subcategories,
}) => {
  const { t } = useSafeI18nWithRouter();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Collecter toutes les annonces de toutes les sous-catégories
  const allAnnouncements = useMemo(() => {
    const announcements: Announcement[] = [];
    subcategories.forEach((subcategory) => {
      const subAnnouncements = categorizedAnnouncements[subcategory.slug] || [];
      announcements.push(...subAnnouncements);
    });
    return announcements;
  }, [subcategories]);

  // Filtrer les annonces selon la sous-catégorie sélectionnée
  const filteredAnnouncements = useMemo(() => {
    if (!selectedSubcategory) {
      return allAnnouncements;
    }
    return categorizedAnnouncements[selectedSubcategory] || [];
  }, [allAnnouncements, selectedSubcategory]);

  const getSubcategoryName = (slug: string) => {
    const subcategory = subcategories.find(sub => sub.slug === slug);
    if (!subcategory) return slug;
    
    const translatedName = t(`categories.${slug}`) !== `categories.${slug}` 
      ? t(`categories.${slug}`) 
      : subcategory.name;
    return translatedName;
  };

  return (
    <div className="space-y-6">
      {/* En-tête avec filtres et contrôles */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {selectedSubcategory ? getSubcategoryName(selectedSubcategory) : t('announcements.allAnnouncements')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredAnnouncements.length} {t('announcements.available')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Filtre par sous-catégorie */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedSubcategory || ''}
                onChange={(e) => setSelectedSubcategory(e.target.value || null)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-800 dark:text-white"
              >
                <option value="">{t('categories.allSubcategories')}</option>
                {subcategories.map((subcategory) => {
                  const announcements = categorizedAnnouncements[subcategory.slug] || [];
                  if (announcements.length === 0) return null;
                  
                  return (
                    <option key={subcategory.id} value={subcategory.slug}>
                      {getSubcategoryName(subcategory.slug)} ({announcements.length})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Mode d'affichage */}
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${
                  viewMode === 'grid' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${
                  viewMode === 'list' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filtres actifs */}
        {selectedSubcategory && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">{t('search.advanced.activeFilters')}</span>
            <div className="flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">
              {getSubcategoryName(selectedSubcategory)}
              <button
                onClick={() => setSelectedSubcategory(null)}
                className="ml-2 text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-200"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Grille des annonces */}
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
            {selectedSubcategory 
              ? t('announcements.noResultsInSubcategory') 
              : t('announcements.noResultsDesc')
            }
          </p>
          {selectedSubcategory && (
            <button 
              onClick={() => setSelectedSubcategory(null)}
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t('announcements.seeAllAnnouncements')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryAnnouncements;