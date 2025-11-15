
import React from "react";
import { MapPin, Phone } from "lucide-react";
import ShopInfo from "./ShopInfo";

interface AnnouncementDetailsProps {
  location: string;
  category?: string;
  phoneNumber?: string;
  shopName?: string;
  shopId?: string;
  shopLogoUrl?: string;
  isUrgent?: boolean;
  urgentMessage?: string;
}

const AnnouncementDetails: React.FC<AnnouncementDetailsProps> = ({
  location,
  category,
  phoneNumber,
  shopName,
  shopId,
  shopLogoUrl,
  isUrgent,
  urgentMessage,
}) => {
  return (
    <div className="text-xs text-gray-500 dark:text-slate-400 space-y-1.5 mb-3">
      <div className="flex items-center">
        <MapPin size={13} className="mr-1.5 flex-shrink-0" />
        <span className="truncate">{location}</span>
      </div>
      <div className="flex items-center">
        <span className="truncate">{category || "Non spécifié"}</span>
      </div>
      {phoneNumber && (
        <div className="flex items-center">
          <Phone size={13} className="mr-1.5 flex-shrink-0 text-brand-link" />
          <a href={`tel:${phoneNumber}`} className="truncate text-brand-link">
            {phoneNumber}
          </a>
        </div>
      )}
      <ShopInfo shopName={shopName} shopId={shopId} shopLogoUrl={shopLogoUrl} />
      {isUrgent && urgentMessage && (
        <div className="bg-brand-urgent p-2 rounded border-l-2 border-brand-urgent-l">
          <p className="text-xs text-brand-urgent font-medium">
            {urgentMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnnouncementDetails;
