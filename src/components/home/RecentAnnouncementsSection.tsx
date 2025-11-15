import React from "react";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import { Link } from "react-router-dom";
import { Announcement } from "@/data/types/homePageTypes";

interface RecentAnnouncementsSectionProps {
  announcements: Announcement[];
}

const RecentAnnouncementsSection: React.FC<RecentAnnouncementsSectionProps> = ({ announcements }) => {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Annonces récentes</h2>
        <Link to="/annonces" className="text-accessible-orange hover:underline">
          Voir tout
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {announcements.map((announcement) => (
          <LegacyAnnouncementCard key={announcement.id} {...announcement} />
        ))}
      </div>
    </div>
  );
};

export default RecentAnnouncementsSection;
