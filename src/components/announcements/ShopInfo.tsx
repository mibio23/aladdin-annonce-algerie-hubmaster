
import React from "react";
import { Link } from "react-router-dom";
import { Building } from "lucide-react";

interface ShopInfoProps {
  shopName?: string;
  shopId?: string;
  shopLogoUrl?: string;
}

const ShopInfo: React.FC<ShopInfoProps> = ({ shopName, shopId, shopLogoUrl }) => {
  if (!shopName || !shopId) return null;
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <Building size={13} className="mr-1.5 flex-shrink-0" />
        <Link to={`/shop/${shopId}`} className="truncate hover:underline hover:text-orange-500">
          {shopName}
        </Link>
      </div>
      {shopLogoUrl && (
        <div className="flex justify-center">
          <img
            src={shopLogoUrl}
            alt={`Logo ${shopName}`}
            className="h-8 w-8 rounded-full object-cover border border-gray-200 dark:border-gray-600"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}
    </div>
  );
};
export default ShopInfo;
