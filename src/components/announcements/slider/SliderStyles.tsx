import React from 'react';
import { SliderDimensions } from './SliderDimensions';

interface SliderStylesProps {
  sliderDimensions: SliderDimensions;
  currentImageIndex: number;
}

const SliderStyles: React.FC<SliderStylesProps> = ({ sliderDimensions, currentImageIndex }) => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css?family=Heebo:800');
      
      .slider-parent {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 16px;
        box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
        margin: auto;
        max-width: ${sliderDimensions.width}px;
        max-height: ${sliderDimensions.height}px;
        aspect-ratio: ${sliderDimensions.width} / ${sliderDimensions.height};
      }
      
      .slider-container {
        position: absolute;
        width: 400%;
        height: 100%;
        background: #000;
        display: inline-flex;
        overflow: hidden;
        transform: translateX(-${currentImageIndex * 25}%);
        transition: transform 1.4s ease;
      }
      
      .slider-slide {
        position: relative;
        background-position: center;
        background-size: cover;
        width: 25%;
        height: 100%;
        z-index: 10;
        transition: transform 1.4s ease;
        flex-shrink: 0;
      }
      
      .slider-slide.active {
        transform: scale(1.3);
        z-index: 20;
      }
      
      .slider-svg {
        position: absolute;
        z-index: 40;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
      
      .slider-circle {
        stroke: #fff;
        fill: none;
        transition: 0.3s linear;
        stroke-width: 0;
      }
      
      .slider-circle.active {
        stroke-width: ${Math.max(50, sliderDimensions.width / 15)}px;
      }
      
      .slider-btn {
        position: absolute;
        z-index: 50;
        width: ${Math.max(35, sliderDimensions.width / 25)}px;
        height: ${Math.max(35, sliderDimensions.width / 25)}px;
        border: 1px solid #849494;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
        overflow: hidden;
      }
      
      .slider-btn:hover {
        background-color: #fff;
      }
      
      .slider-btn:focus {
        outline: none;
      }
      
      .slider-btn-left {
        left: 0.5%;
        top: 50%;
        transform: translateY(-50%);
      }
      
      .slider-btn-right {
        right: 8%;
        top: 50%;
        transform: translateY(-50%);
      }
      
      .slider-arrow {
        position: absolute;
        width: ${Math.max(14, sliderDimensions.width / 50)}px;
        height: ${Math.max(14, sliderDimensions.width / 50)}px;
      }
      
      .slider-arrow-left {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
      }
      
      .slider-arrow-right {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
      }
      
      .circle1 { transition-delay: 0.05s; }
      .circle2 { transition-delay: 0.1s; }
      .circle3 { transition-delay: 0.15s; }
      .circle4 { transition-delay: 0.2s; }
      .circle5 { transition-delay: 0.25s; }
      .circle6 { transition-delay: 0.3s; }
      .circle7 { transition-delay: 0.35s; }
      .circle8 { transition-delay: 0.4s; }
      .circle9 { transition-delay: 0.45s; }
      .circle10 { transition-delay: 0.05s; }
      .circle11 { transition-delay: 0.1s; }
      .circle12 { transition-delay: 0.15s; }
      .circle13 { transition-delay: 0.2s; }
      .circle14 { transition-delay: 0.25s; }
      .circle15 { transition-delay: 0.3s; }
      .circle16 { transition-delay: 0.35s; }
      .circle17 { transition-delay: 0.4s; }
      .circle18 { transition-delay: 0.45s; }
      
      @media (max-width: 768px) {
        .slider-parent {
          max-width: 95%;
          max-height: 400px;
        }
        .slider-btn {
          width: 30px;
          height: 30px;
        }
        .slider-arrow {
          width: 12px;
          height: 12px;
        }
        .slider-circle.active {
          stroke-width: 35px;
        }
      }
      
      @media (max-width: 480px) {
        .slider-parent {
          max-width: 100%;
          max-height: 300px;
        }
        .slider-btn {
          width: 25px;
          height: 25px;
        }
        .slider-arrow {
          width: 10px;
          height: 10px;
        }
        .slider-circle.active {
          stroke-width: 25px;
        }
      }
    `}</style>
  );
};

export default SliderStyles;