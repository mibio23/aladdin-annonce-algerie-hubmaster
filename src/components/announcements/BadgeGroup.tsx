
import React from "react";
import { Eye, CheckCircle, Zap, Video } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface BadgeGroupProps {
  isFeatured?: boolean;
  isActive?: boolean;
  isUrgent?: boolean;
  urgentMessage?: string;
  hasVideoStory?: boolean;
  title: string;
  onStoryClick: (e: React.MouseEvent) => void;
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({
  isFeatured,
  isActive,
  isUrgent,
  hasVideoStory,
  onStoryClick
}) => {
  const { t } = useSafeI18nWithRouter();
  
  return (
    <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
      {hasVideoStory && (
        <button
          onClick={onStoryClick}
          className="bg-purple-600/40 text-white/90 hover:text-brand-gold text-xs font-semibold px-2 py-1 rounded-full flex items-center animate-pulse hover:animate-none transition-colors"
          title={t('story')}
          style={{ backdropFilter: "blur(2px)" }}
        >
          <Video size={12} className="mr-1 opacity-80" /> {t('story')}
        </button>
      )}
      {isFeatured && (
        <span className="bg-blue-500/40 text-white/90 text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm backdrop-blur-md" style={{backdropFilter: "blur(2px)"}}>
          <Eye size={12} className="mr-1 opacity-80" /> {t('featured')}
        </span>
      )}
      {isActive && (
        <span className="bg-green-500/40 text-white/90 text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm backdrop-blur-md" style={{backdropFilter: "blur(2px)"}}>
          <CheckCircle size={12} className="mr-1 opacity-80" /> {t('active')}
        </span>
      )}
      {isUrgent && (
        <span className="bg-orange-500/40 text-white/90 text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm backdrop-blur-md" style={{backdropFilter: "blur(2px)"}}>
          <Zap size={12} className="mr-1 opacity-80" /> {t('urgent')}
        </span>
      )}
    </div>
  );
};

export default BadgeGroup;
