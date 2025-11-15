import { ChevronRight } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from "@/components/ui/button";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import type { ExplorerCategory } from "@/data/categoryTypes";
import type { Announcement } from "@/data/types/homePageTypes";
import SmartAnnouncementsGrid from "./SmartAnnouncementsGrid";

interface CategoryAnnouncementsRowProps {
  category: ExplorerCategory;
  announcements: Announcement[];
}

const CategoryAnnouncementsRow = ({ category, announcements }: CategoryAnnouncementsRowProps) => {
  const { t } = useSafeI18nWithRouter();
  
  // Utiliser la même méthode que ShopByCategorySection qui fonctionne bien
  const translatedCategoryName = t(`categories.${category.slug}`) !== `categories.${category.slug}` 
    ? t(`categories.${category.slug}`) 
    : category.name;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xs bg-orange-100 text-brand-price px-2 py-1 rounded font-medium">
            {announcements.length} {t('announcements')}
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {translatedCategoryName}
          </h2>
        </div>
        <Button variant="ghost" size="sm" className="text-accessible-orange hover:text-accessible-orange/80">
          {t('viewMore')}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <SmartAnnouncementsGrid itemsPerRow={8}>
        {announcements.slice(0, 8).map((announcement) => (
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
      </SmartAnnouncementsGrid>
    </div>
  );
};

export default CategoryAnnouncementsRow;
