
import React from "react";
import { Facebook, MessageCircle, Send, Bookmark } from "lucide-react";

interface ShopFooterActionsProps {
  isFavorite: boolean;
  onFavoriteToggle: (e: React.MouseEvent) => void;
  onShareClick: (e: React.MouseEvent, platform: string) => void;
}

const ShopFooterActions: React.FC<ShopFooterActionsProps> = ({
  isFavorite,
  onFavoriteToggle,
  onShareClick,
}) => (
  <div className="flex items-center justify-between mb-3 px-2">
    <div className="flex gap-2">
      <button
        onClick={(e) => onShareClick(e, "Facebook")}
        className="p-1.5 text-blue-600 hover:text-yellow-400 rounded-full transition-colors"
        title="Partager sur Facebook"
      >
        <Facebook size={16} />
      </button>
      <button
        onClick={(e) => onShareClick(e, "WhatsApp")}
        className="p-1.5 text-green-600 hover:text-yellow-400 rounded-full transition-colors"
        title="Partager sur WhatsApp"
      >
        <MessageCircle size={16} />
      </button>
      <button
        onClick={(e) => onShareClick(e, "Telegram")}
        className="p-1.5 text-blue-500 hover:text-yellow-400 rounded-full transition-colors"
        title="Partager sur Telegram"
      >
        <Send size={16} />
      </button>
    </div>
    <button
      onClick={onFavoriteToggle}
      className={`p-1.5 rounded-full transition-colors ${
        isFavorite
          ? "text-red-500 bg-red-50 dark:bg-red-900/20"
          : "text-gray-400 hover:text-yellow-400"
      }`}
      title="Ajouter aux favoris"
    >
      <Bookmark size={16} fill={isFavorite ? "currentColor" : "none"} />
    </button>
  </div>
);

export default ShopFooterActions;
