import React from 'react';

interface ImageGridProps {
  images: string[];
  currentImageIndex: number;
  title: string;
  onImageSelect: (index: number) => void;
  onSwitchToSlider: () => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  currentImageIndex,
  title,
  onImageSelect,
  onSwitchToSlider
}) => {
  const handleImageClick = (index: number) => {
    onImageSelect(index);
    onSwitchToSlider();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative group aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => handleImageClick(index)}
        >
          <img
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.preventDefault(); // Prevent console error logging
              (e.target as HTMLImageElement).src = "/src/assets/placeholder-image.svg";
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded">
              Image {index + 1}
            </span>
          </div>
          {index === currentImageIndex && (
            <div className="absolute top-2 right-2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Actuelle
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;