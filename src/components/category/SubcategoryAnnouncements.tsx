
import React from "react";
import { Link } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { SubCategory } from "@/data/categoryTypes";
import { categorizedAnnouncements } from "@/data/categoryData";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";

interface SubcategoryAnnouncementsProps {
  subcategories: SubCategory[];
  categorySlug: string;
}

const SubcategoryAnnouncements: React.FC<SubcategoryAnnouncementsProps> = ({
  subcategories,
  categorySlug,
}) => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="space-y-12">
      {subcategories.slice(0, 3).map((subcategory) => {
        const translatedName = t(`categories.${subcategory.slug}`) !== `categories.${subcategory.slug}` 
          ? t(`categories.${subcategory.slug}`) 
          : subcategory.name;

        const announcements = categorizedAnnouncements[subcategory.slug] || [];
        const limitedAnnouncements = announcements.slice(0, 4);

        if (limitedAnnouncements.length === 0) return null;

        return (
          <div key={subcategory.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                {subcategory.icon && (
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    {subcategory.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {translatedName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {announcements.length} {t('announcements.available')}
                  </p>
                </div>
              </div>
              
              {announcements.length > 4 && (
                <Link 
                  to={`/category/${categorySlug}/${subcategory.slug}`}
                  className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                >
                  {t('announcements.viewAll')}
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {limitedAnnouncements.map((announcement) => (
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
          </div>
        );
      })}
    </div>
  );
};

export default SubcategoryAnnouncements;
