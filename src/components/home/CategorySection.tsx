import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import type { ExplorerCategory } from "@/data/categoryTypes";
import type { Announcement } from "@/data/types/homePageTypes";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import SmartAnnouncementsGrid from "./SmartAnnouncementsGrid";

interface CategorySectionProps {
  category: ExplorerCategory;
  announcements: Announcement[];
  showViewAll?: boolean;
  viewAllText?: string;
}

const CategorySection = ({ 
  category, 
  announcements, 
  showViewAll = false,
  viewAllText = "Voir tout"
}: CategorySectionProps) => {
  const { t, isRTL } = useSafeI18nWithRouter();
  
  // Get translated category name using standardized translation key
  const getCategoryName = () => {
    const translationKey = `categories.${category.slug}`;
    const translation = t(translationKey);
    
    // If translation exists and is different from the key, use it
    if (translation && translation !== translationKey) {
      return translation;
    }
    
    // Fallback to category name
    return category.name;
  };

  // Get announcements count with proper translation
  const getAnnouncementsCount = () => {
    const count = announcements.length;
    if (count === 1) {
      return `${count} ${t('categories.announcement')}`;
    }
    return `${count} ${t('categories.announcements')}`;
  };

  return (
    <section className="bg-white border rounded-lg p-4 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center mb-4" style={{ justifyContent: 'space-between' }}>
        <div className="flex items-center">
          <div className={`${isRTL ? 'ml-2' : 'mr-2'}`}>
            <img 
              src={category.imageUrl} 
              alt={getCategoryName()}
              className="w-8 h-8 object-contain" 
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">{getCategoryName()}</h2>
            <p className="text-sm text-gray-500 dark:text-slate-400">({getAnnouncementsCount()})</p>
          </div>
        </div>
        {showViewAll && (
          <Link 
            to={`/category/${category.slug}`} 
            className="text-sm font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 flex items-center transition-colors duration-200"
          >
            {viewAllText} <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
          </Link>
        )}
      </div>
      
      {announcements.length > 0 ? (
        <SmartAnnouncementsGrid itemsPerRow={8}>
          {announcements.slice(0, 16).map((announcement) => (
            <LegacyAnnouncementCard key={announcement.id} {...announcement} />
          ))}
        </SmartAnnouncementsGrid>
      ) : (
        <p className={`text-gray-500 text-center py-4 dark:text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('categories.notFound')} "{getCategoryName()}"
        </p>
      )}
    </section>
  );
};

export default CategorySection;
