
import React from "react";

interface AdvertisingBannerProps {
  imageUrl: string;
  imageAlt: string;
  linkUrl?: string;
  className?: string;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  imageUrl,
  imageAlt,
  linkUrl,
  className = ""
}) => {
  const bannerContent = (
    <div className={`w-full h-32 rounded-lg shadow-sm border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md ${className}`}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="fallback hidden w-full h-full bg-white/95 border-2 border-dashed border-gray-300 items-center justify-center">
        <p className="text-accessible-gray text-sm">Espace publicitaire</p>
      </div>
    </div>
  );

  if (linkUrl) {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
        {bannerContent}
      </a>
    );
  }

  return bannerContent;
};

export default AdvertisingBanner;
