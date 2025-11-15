import React, { useState, useEffect } from "react";
import ViewModeToggle from './slider/ViewModeToggle';
import ImageGrid from './slider/ImageGrid';
import SliderStyles from './slider/SliderStyles';
import SliderSVGCircles from './slider/SliderSVGCircles';
import SliderContainer from './slider/SliderContainer';
import SliderNavigation from './slider/SliderNavigation';
import { calculateSliderDimensions, SliderDimensions } from './slider/SliderDimensions';

interface AnnouncementImage3DProps {
  allImages: string[];
  title: string;
}

const AnnouncementImage3D: React.FC<AnnouncementImage3DProps> = ({
  allImages,
  title: propTitle,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sliderDimensions, setSliderDimensions] = useState<SliderDimensions>({ width: 800, height: 500 });
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const title = propTitle;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prev: number) => (prev === 0 ? allImages.length - 1 : prev - 1));
    
    setTimeout(() => setIsAnimating(false), 1400);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prev: number) => (prev === allImages.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => setIsAnimating(false), 1400);
  };

  useEffect(() => {
    const loadDimensions = async () => {
      if (allImages.length > 0) {
        const { sliderDimensions: newSliderDimensions } = await calculateSliderDimensions(allImages);
        setSliderDimensions(newSliderDimensions);
      }
    };

    loadDimensions();
  }, [allImages]);

  if (allImages.length <= 1) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg" 
           style={{ 
             maxWidth: `${sliderDimensions.width}px`, 
             maxHeight: `${sliderDimensions.height}px`,
             aspectRatio: `${sliderDimensions.width} / ${sliderDimensions.height}`
           }}>
        <img
          src={allImages[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            onError={(e) => {
              e.preventDefault(); // Prevent console error logging
              (e.target as HTMLImageElement).src = "/src/assets/placeholder-image.svg";
            }}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <ViewModeToggle 
        viewMode={viewMode} 
        onViewModeChange={setViewMode} 
      />

      {viewMode === 'slider' ? (
        <div className="relative w-full h-full">
          <SliderStyles 
            sliderDimensions={sliderDimensions} 
            currentImageIndex={currentImageIndex} 
          />

          <div className="slider-parent">
            <SliderSVGCircles 
              isAnimating={isAnimating} 
              sliderWidth={sliderDimensions.width} 
              position="left" 
            />
            <SliderSVGCircles 
              isAnimating={isAnimating} 
              sliderWidth={sliderDimensions.width} 
              position="right" 
            />
            
            <SliderContainer 
              images={allImages} 
              currentImageIndex={currentImageIndex} 
            />
            
            <SliderNavigation 
              onPrevImage={handlePrevImage} 
              onNextImage={handleNextImage} 
              isAnimating={isAnimating} 
            />
          </div>
        </div>
      ) : (
        <ImageGrid 
          images={allImages}
          currentImageIndex={currentImageIndex}
          title={title}
          onImageSelect={setCurrentImageIndex}
          onSwitchToSlider={() => setViewMode('slider')}
        />
      )}
    </div>
  );
};

export default AnnouncementImage3D;