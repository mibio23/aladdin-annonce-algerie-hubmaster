import React from 'react';

interface SliderNavigationProps {
  onPrevImage: (e: React.MouseEvent) => void;
  onNextImage: (e: React.MouseEvent) => void;
  isAnimating: boolean;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  onPrevImage,
  onNextImage,
  isAnimating
}) => {
  return (
    <>
      <button
        className="slider-btn slider-btn-left"
        onClick={onPrevImage}
        aria-label="Image précédente"
        disabled={isAnimating}
      >
        <svg className="slider-arrow slider-arrow-left" viewBox="0 0 477.175 477.175">
          <path 
            style={{ fill: '#9d9d9d' }} 
            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
          />
        </svg>
      </button>

      <button
        className="slider-btn slider-btn-right"
        onClick={onNextImage}
        aria-label="Image suivante"
        disabled={isAnimating}
      >
        <svg className="slider-arrow slider-arrow-right" viewBox="0 0 477.175 477.175">
          <path 
            style={{ fill: '#9d9d9d' }} 
            d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
          />
        </svg>
      </button>
    </>
  );
};

export default SliderNavigation;