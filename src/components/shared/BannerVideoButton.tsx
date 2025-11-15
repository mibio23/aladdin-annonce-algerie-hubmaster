
import React from "react";
import { Button } from "@/components/ui/button";

type VideoButton = {
  onClick: () => void;
  ariaLabel: string;
  Icon: React.ElementType;
};

interface BannerVideoButtonProps {
  videoButton?: VideoButton;
}

const BannerVideoButton: React.FC<BannerVideoButtonProps> = ({ videoButton }) => {
  if (!videoButton) return null;

  return (
    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
      <Button
        size="icon"
        className="rounded-full h-14 w-14 bg-black/30 backdrop-blur-sm border-2 border-white text-white hover:bg-black hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
        onClick={videoButton.onClick}
        aria-label={videoButton.ariaLabel}
      >
        <videoButton.Icon className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default BannerVideoButton;
