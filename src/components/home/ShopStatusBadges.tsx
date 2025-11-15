
import React from "react";
import { Store, Video, BadgeCheck } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface ShopStatusBadgesProps {
  hasVideoStory?: boolean;
  isOnline?: boolean;
  isVerified?: boolean;
  onStoryClick?: (e: React.MouseEvent) => void;
}

const ShopStatusBadges: React.FC<ShopStatusBadgesProps> = ({
  hasVideoStory,
  isOnline,
  isVerified,
  onStoryClick,
}) => {
  const { t } = useSafeI18nWithRouter();
  
  return (
    <>
      <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
        {hasVideoStory && (
          <button
            onClick={onStoryClick}
            className="bg-purple-600/40 text-white/90 hover:text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center animate-pulse hover:animate-none w-fit transition-colors"
            title="Voir la story vidéo"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <Video size={12} className="mr-1 opacity-80" /> {t('story')}
          </button>
        )}
        <div
          className="bg-blue-600/40 text-white/90 text-xs font-semibold px-2 py-1 rounded-full flex items-center w-fit shadow-sm backdrop-blur-md"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <Store size={12} className="mr-1 opacity-80" />
          {t('shop')}
        </div>
      </div>
      
      <div className="absolute top-2 right-2 flex flex-col space-y-1 z-10">
        {isOnline && (
          <div
            className="bg-green-600/40 text-white/90 text-xs font-semibold px-2 py-1 rounded-full shadow-sm backdrop-blur-md"
            style={{ backdropFilter: "blur(2px)" }}
          >
            {t('online')}
          </div>
        )}
      </div>

      {isVerified && (
        <div
          className="absolute bottom-2 right-2 bg-blue-600/40 text-white/90 p-1 rounded-full shadow-sm backdrop-blur-md z-10"
          style={{ backdropFilter: "blur(2px)" }}
          title={t('verified')}
        >
          <BadgeCheck size={14} className="opacity-90" />
        </div>
      )}
    </>
  );
};

export default ShopStatusBadges;
