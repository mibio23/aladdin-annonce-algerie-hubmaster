
import React from "react";
import { Heart, ShieldCheck } from "lucide-react";

interface AnnouncementActionsProps {
  isFavorite: boolean;
  isProfessional?: boolean;
  onFavoriteClick: (e: React.MouseEvent) => void;
}

const AnnouncementActions: React.FC<AnnouncementActionsProps> = ({
  isFavorite,
  isProfessional,
  onFavoriteClick,
}) => {
  return (
    <>
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        {isProfessional && (
          <span className="bg-blue-600/40 text-white/90 text-xs font-semibold p-1 rounded-full shadow-sm backdrop-blur-md" style={{backdropFilter: "blur(2px)"}} title="Professionnel">
            <ShieldCheck size={12} className="opacity-80" />
          </span>
        )}
      </div>
      <button
        onClick={onFavoriteClick}
        className="absolute top-10 right-2 bg-black/30 hover:bg-black/50 p-1.5 rounded-full text-white hover:text-brand-gold transition-colors z-10"
        aria-label="Ajouter aux favoris"
        title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        <Heart size={16} fill={isFavorite ? "white" : "none"} />
      </button>
    </>
  );
};

export default AnnouncementActions;
