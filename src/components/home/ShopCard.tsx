
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Shop } from "@/types/shop";
import ShopCardImage from "./ShopCardImage";
import ShopStatusBadges from "./ShopStatusBadges";
import ShopCardInfo from "./ShopCardInfo";
import ShopFooterActions from "./ShopFooterActions";

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { t } = useSafeI18nWithRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const allImages = shop.productImageUrls && shop.productImageUrls.length > 0 
    ? shop.productImageUrls 
    : [shop.logoUrl];

  const handleStoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toast({
      title: "Story vidéo",
      description: `Ouverture de la story pour ${shop.name}`,
    });
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Retiré des favoris" : "Ajouté aux favoris",
      description: `${shop.name} a été ${isFavorite ? "retiré de vos" : "ajouté à vos"} favoris.`,
    });
  };

  const handleShareClick = (e: React.MouseEvent, platform: string) => {
    e.stopPropagation();
    e.preventDefault();
    const shopUrl = `${window.location.origin}/boutique/${shop.id}`;
    
    let shareUrl = "";
    switch (platform) {
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shopUrl)}`;
        break;
      case "WhatsApp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`Découvrez ${shop.name} sur Aladdin: ${shopUrl}`)}`;
        break;
      case "Telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(shopUrl)}&text=${encodeURIComponent(`Découvrez ${shop.name}`)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
    
    toast({
      title: `Partagé sur ${platform}`,
      description: `${shop.name} a été partagé sur ${platform}.`,
    });
  };

  return (
    <Link to={`/boutique/${shop.id}`}>
      <div className="group flex flex-col transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 space-y-2">
        {/* Cadre supérieur - Photo */}
        <div className="bg-white border rounded-lg overflow-hidden dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="relative aspect-video overflow-hidden">
            <ShopCardImage
              images={allImages}
              alt={shop.name}
            />
            
            <ShopStatusBadges
              hasVideoStory={shop.hasVideoStory}
              isOnline={shop.isOnline}
              isVerified={shop.isVerified}
              onStoryClick={handleStoryClick}
            />
          </div>
        </div>
        
        {/* Cadre inférieur - Informations */}
        <div className="bg-white border rounded-lg p-4 space-y-3 dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <ShopCardInfo
            name={shop.name}
            description={shop.description}
            wilaya={shop.wilaya}
          />
          
          <ShopFooterActions
            isFavorite={isFavorite}
            onFavoriteToggle={handleFavoriteToggle}
            onShareClick={handleShareClick}
          />
        </div>
        
        {/* Troisième cadre - Informations complémentaires */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow mt-2">
          <h4 className="text-lg font-bold text-red-800 dark:text-red-700 mb-3">
            {t('shop.additionalInfo')}
          </h4>
          <div className="text-sm text-gray-700 font-semibold space-y-2">
            <p><span className="font-bold text-red-800 dark:text-red-700">{t("shop.seller")} :</span> {shop.isVerified ? t("shop.verified") : t("shop.notVerified")}</p>
            <p><span className="font-bold text-red-800 dark:text-red-700">{t("shop.deliveryAvailable")} :</span> {t("shop.deliveryMethods")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
