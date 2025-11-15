
import CategorySection from "./CategorySection";
import SectionHeader from "./SectionHeader";
import { usePopularCategories } from "@/hooks/usePopularCategories";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import TrendingAnnouncementsBanner from "./TrendingAnnouncementsBanner";
import { categorizedAnnouncements } from "@/data/categoryData";
import type { Announcement } from "@/data/types/homePageTypes";

const PopularSearchedAnnouncementsSection = () => {
  const { t } = useSafeI18nWithRouter();
  const sortedCategories = usePopularCategories();

  if (sortedCategories.length === 0) {
    return (
      <div className="space-y-8 mt-8">
        <SectionHeader title={t('sections.mostSearched')} viewAllLink="/annonces" showViewAll={true} />
        <p className="text-gray-500 text-center py-4 dark:text-slate-400">Aucune catégorie à afficher pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-8">
      <TrendingAnnouncementsBanner />
      {sortedCategories.map((category) => {
        const announcementsForCategory: Announcement[] = (categorizedAnnouncements[category.slug] || []) as Announcement[];
        return (
          <CategorySection
            key={`popular-${category.id}`}
            category={category}
            announcements={announcementsForCategory}
            showViewAll={true}
            viewAllText={t('announcements.viewAll')}
          />
        );
      })}
    </div>
  );
};

export default PopularSearchedAnnouncementsSection;
