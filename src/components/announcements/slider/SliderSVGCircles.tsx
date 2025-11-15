import React from 'react';

interface SliderSVGCirclesProps {
  isAnimating: boolean;
  sliderWidth: number;
  position: 'left' | 'right';
}

const SliderSVGCircles: React.FC<SliderSVGCirclesProps> = ({
  isAnimating,
  sliderWidth,
  position
}) => {
  const circleCount = 9;
  const baseOffset = position === 'left' ? 10 : 1;
  const cx = position === 'left' ? "34" : "calc(100% - 34px)";

  return (
    <svg className="slider-svg" xmlns="http://www.w3.org/2000/svg">
      {[...Array(circleCount)].map((_, i) => (
        <circle
          key={`${position}-${i}`}
          className={`slider-circle circle${i + baseOffset} ${isAnimating ? 'active' : ''}`}
          cx={cx}
          cy="50%"
          r={20 + i * Math.max(50, sliderWidth / 15)}
        />
      ))}
    </svg>
  );
};

export default SliderSVGCircles;