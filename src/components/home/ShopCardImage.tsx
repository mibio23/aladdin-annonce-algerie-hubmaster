
import React from "react";
import AdaptiveImageCarousel from "../common/AdaptiveImageCarousel";

interface ShopCardImageProps {
  images: string[];
  alt: string;
}

const ShopCardImage: React.FC<ShopCardImageProps> = ({
  images,
  alt,
}) => {
  return (
    <AdaptiveImageCarousel
      images={images}
      alt={alt}
      className="h-48"
      showControls={true}
      showIndicators={true}
      aspectRatio="auto"
    />
  );
};

export default ShopCardImage;
