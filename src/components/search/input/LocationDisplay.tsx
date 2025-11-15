import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationDisplayProps {
  selectedLocation?: string;
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ selectedLocation }) => {
  if (!selectedLocation) {
    return null;
  }

  return (
    <div className="flex items-center px-3 py-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-md">
      <MapPin className="h-4 w-4 mr-1 text-accessible-orange" />
      <span className="text-sm text-brand-price dark:text-brand-price max-w-[100px] truncate">
        {selectedLocation}
      </span>
    </div>
  );
};

export default LocationDisplay;