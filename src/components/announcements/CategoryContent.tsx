
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import { Link } from "react-router-dom";

interface Announcement {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  date: string;
  category: string;
}

interface CategoryContentProps {
  categoryId: string;
  categoryName: string;
  announcements: Announcement[];
}

const CategoryContent: React.FC<CategoryContentProps> = ({ 
  categoryId, 
  categoryName, 
  announcements 
}) => {
  return (
    <TabsContent value={categoryId} className="mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {announcements.map((announcement) => (
          <LegacyAnnouncementCard key={announcement.id} {...announcement} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link 
          to={`/category/${categoryId}`} 
          className="text-accessible-orange hover:underline inline-flex items-center"
        >
          Voir toutes les annonces {categoryName.toLowerCase()}
        </Link>
      </div>
    </TabsContent>
  );
};

export default CategoryContent;
