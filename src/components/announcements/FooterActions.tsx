
import React from "react";
import {
  Facebook,
  MessageCircle as Whatsapp,
  Send as TelegramIcon,
  Copy,
  MessageSquare,
  Phone,
} from "lucide-react";

interface FooterActionsProps {
  shareUrl: string;
  title: string;
  onCopy: (e: React.MouseEvent) => void;
  phoneNumber?: string;
}

const FooterActions: React.FC<FooterActionsProps> = ({
  shareUrl,
  title,
  onCopy,
  phoneNumber,
}) => (
  <div className="flex items-center justify-center space-x-3 sm:space-x-4 w-full">
    {phoneNumber && (
      <a
        href={`tel:${phoneNumber}`}
        title="Appeler"
        className="text-green-600 hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <Phone size={18} />
      </a>
    )}
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log("Message en temps réel pour:", title);
      }}
      title="Message en temps réel"
      className="text-green-500 hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
    >
      <MessageSquare size={18} />
    </button>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Partager sur Facebook"
      className="text-brand-facebook hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
      onClick={(e) => e.stopPropagation()}
    >
      <Facebook size={18} />
    </a>
    <a
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
        title + " - " + shareUrl
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Partager sur WhatsApp"
      className="text-brand-whatsapp hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
      onClick={(e) => e.stopPropagation()}
    >
      <Whatsapp size={18} />
    </a>
    <a
      href={`https://t.me/share/url?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(title)}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Partager sur Telegram"
      className="text-brand-telegram hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
      onClick={(e) => e.stopPropagation()}
    >
      <TelegramIcon size={18} />
    </a>
    <button
      onClick={onCopy}
      title="Copier le lien de l'annonce"
      className="text-gray-500 hover:text-[hsl(var(--brand-gold))] dark:text-gray-400 dark:hover:text-[hsl(var(--brand-gold))] transition-colors p-1 rounded"
    >
      <Copy size={18} />
    </button>
  </div>
);

export default FooterActions;
