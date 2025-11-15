import React from 'react';

interface SliderContainerProps {
  images: string[];
  currentImageIndex: number;
}

const SliderContainer: React.FC<SliderContainerProps> = ({
  images,
  currentImageIndex
}) => {
  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
    </div>
  );
};

export default SliderContainer;