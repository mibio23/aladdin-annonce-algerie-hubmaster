
import React from "react";
import { MapPin, Star } from "lucide-react";

interface ShopCardInfoProps {
  name: string;
  description: string;
  wilaya: string;
  rating?: number;
}

const ShopCardInfo: React.FC<ShopCardInfoProps> = ({
  name,
  description,
  wilaya,
  rating = 4.2,
}) => {
  return (
    <div className="space-y-2 mb-3">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center">
        <MapPin size={14} className="mr-1.5 text-muted-foreground flex-shrink-0" />
        <span className="text-sm text-muted-foreground truncate">{wilaya}</span>
      </div>
      <div className="flex items-center">
        <Star size={14} className="mr-1.5 text-yellow-500 flex-shrink-0" fill="currentColor" />
        <span className="text-sm text-muted-foreground">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ShopCardInfo;
