import React from 'react';
import AdaptiveImageCarousel from '../common/AdaptiveImageCarousel';

interface ShopImageSlideshowProps {
  images: string[];
  shopName: string;
}

const ShopImageSlideshow: React.FC<ShopImageSlideshowProps> = ({ images, shopName }) => {
  // Show placeholder if no images
  if (!images || images.length === 0) {
    return (
      <div className="h-64 md:h-80 bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-lg">Aucune image disponible</span>
      </div>
    );
  }

  return (
    <div className="h-64 md:h-80 relative overflow-hidden">
      <AdaptiveImageCarousel
        images={images}
        alt={shopName}
        className="h-full"
        showControls={true}
        showIndicators={true}
        autoPlay={true}
        interval={4000}
        aspectRatio="auto"
      />
    </div>
  );
};

export default ShopImageSlideshow;