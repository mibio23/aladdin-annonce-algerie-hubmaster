import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send, // Telegram removed, Send is used instead
  Copy,
  MessageCircle,
  Mail, // Added Mail icon
} from "lucide-react";
import { toast } from "sonner";

const ShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = typeof document !== 'undefined' ? document.title : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
  };

  const shareOnInstagram = () => {
    navigator.clipboard.writeText(`Découvrez ceci : ${shareUrl}`);
    toast.info("Lien copié pour Instagram !", {
      description: "Ouvrez Instagram et collez le lien ou le message.",
    });
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`);
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " - " + shareUrl)}`);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`);
  };

  const shareOnTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`);
  };

  const shareByEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Découvrez cette page: ${shareUrl}`)}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Lien copié !", {
      description: "Le lien a été copié dans votre presse-papiers."
    });
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: <Facebook />,
      action: shareOnFacebook,
      color: "#1877F2", 
      hoverColor: "#166FE5",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      action: shareOnInstagram,
      color: "#E4405F", 
      hoverColor: "#C13584",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter />,
      action: shareOnTwitter,
      color: "#1DA1F2", 
      hoverColor: "#0C85D0",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle />, 
      action: shareOnWhatsApp,
      color: "#25D366", 
      hoverColor: "#1EBE57",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      action: shareOnLinkedIn,
      color: "#0A66C2", 
      hoverColor: "#004182",
    },
    {
      name: "Telegram",
      icon: <Send />, // Changed from <Telegram /> to <Send />
      action: shareOnTelegram,
      color: "#0088CC", 
      hoverColor: "#006699",
    },
    {
      name: "Envoyer par E-mail",
      icon: <Mail />,
      action: shareByEmail,
      color: "#7856ff", 
      hoverColor: "#5c3dd0",
    },
    {
      name: "Copier le lien",
      icon: <Copy />,
      action: copyLink,
      color: "#6B7280", 
      hoverColor: "#4B5563",
    },
  ];

  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
      {shareButtons.map((button) => (
        <button
          key={button.name}
          onClick={button.action}
          className="group w-8 h-8 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer hover:scale-110 transition-transform rounded-full"
          aria-label={`Partager par ${button.name}`}
          title={`Partager sur ${button.name}`}
          style={{
            '--icon-color': button.color,
          } as React.CSSProperties}
        >
          {React.cloneElement(button.icon, {
            size: 20,
            className: "text-[var(--icon-color)] group-hover:text-yellow-400 transition-colors duration-200 drop-shadow-lg",
          })}
        </button>
      ))}
    </div>
  );
};

export default ShareButtons;
