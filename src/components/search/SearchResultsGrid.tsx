import React from 'react';
import { Announcement } from '@/hooks/useAnnouncements';
import AnnouncementCard from '@/components/announcements/AnnouncementCard';
import { ViewMode } from './SearchSortingControls';
import { cn } from '@/lib/utils';

interface SearchResultsGridProps {
  announcements: Announcement[];
  viewMode: ViewMode;
  onViewAnnouncement: (announcement: Announcement) => void;
  onContactSeller: (announcement: Announcement) => void;
  onShareAnnouncement?: (announcement: Announcement) => void;
  onReportAnnouncement?: (announcement: Announcement) => void;
}

const SearchResultsGrid: React.FC<SearchResultsGridProps> = ({
  announcements,
  viewMode,
  onViewAnnouncement,
  onContactSeller,
  onShareAnnouncement,
  onReportAnnouncement
}) => {
  const getGridClassName = () => {
    switch (viewMode) {
      case 'list':
        return 'grid grid-cols-1 gap-4';
      case 'compact':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3';
      case 'grid':
      default:
        return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6';
    }
  };

  const getCardVariant = () => {
    switch (viewMode) {
      case 'compact':
        return 'compact';
      case 'list':
        return 'default';
      case 'grid':
      default:
        return 'default';
    }
  };

  if (announcements.length === 0) {
    // This will be handled by the parent component (SearchResultsPage) with SmartSuggestionsDisplay
    return null;
  }

  return (
    <div className={cn(getGridClassName())}>
      {announcements.map((announcement) => (
        <AnnouncementCard
          key={announcement.id}
          announcement={announcement}
          onView={onViewAnnouncement}
          onContact={onContactSeller}
          onShare={onShareAnnouncement}
          onReport={onReportAnnouncement}
          variant={getCardVariant()}
          showActions={true}
        />
      ))}
    </div>
  );
};

export default SearchResultsGrid;