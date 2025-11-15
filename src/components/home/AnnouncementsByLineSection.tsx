import CategoryAnnouncementsRow from "./CategoryAnnouncementsRow";
import { categorizedAnnouncements as allCategorizedAnnouncements } from "@/data/categoryData";
import type { Announcement } from "@/data/types/homePageTypes"; 
import { useFilteredCategories } from "./CategoryFilter";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const AnnouncementsByLineSection = () => {
  const { t } = useSafeI18nWithRouter();
  // Limiter à 6 catégories max pour réduire la taille du DOM (SEO optimization)
  const displayedCategories = useFilteredCategories(6);
  const categorizedAnnouncementsData = allCategorizedAnnouncements;

  return (
    <div className="space-y-8">
      {displayedCategories.map((category) => {
        const announcementsForCategory: Announcement[] = (categorizedAnnouncementsData[category.slug] || []) as Announcement[];
        
        return (
          <CategoryAnnouncementsRow 
            key={category.id} 
            category={category} 
            announcements={announcementsForCategory} 
          />
        );
      })}
      {displayedCategories.length === 0 && (
         <p className="text-center text-gray-500 py-8 dark:text-slate-400">
           {t('announcements.viewAll')}
         </p>
      )}
    </div>
  );
};

export default AnnouncementsByLineSection;
