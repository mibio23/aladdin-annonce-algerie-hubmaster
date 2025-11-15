
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ActionButton = {
  to: string;
  text: string;
  Icon: React.ElementType;
};

interface BannerActionButtonsProps {
  actionButtons?: ActionButton[];
}

const BannerActionButtons: React.FC<BannerActionButtonsProps> = ({ actionButtons }) => {
  if (!actionButtons) return null;

  const transparentButtonStyles = "bg-transparent hover:bg-black hover:border-brand-gold hover:text-brand-gold hover:scale-105 hover:-translate-y-1 border-2 border-white text-white rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out font-medium px-6 py-3 transform";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {actionButtons.map((button, index) => (
        <Button
          key={index}
          asChild
          size="lg"
          className={transparentButtonStyles}
        >
          <Link to={button.to} className="flex items-center justify-center">
            <button.Icon className="mr-2 h-5 w-5" />
            {button.text}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default BannerActionButtons;
