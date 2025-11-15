import React, { useState, useEffect } from 'react';
import { Grid, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdvancedProductsSliderProps {
  images: string[];
  shopName: string;
}

const AdvancedProductsSlider: React.FC<AdvancedProductsSliderProps> = ({ images, shopName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [sliderDimensions, setSliderDimensions] = useState({ width: 681, height: 384 });

  const productLabels = ['PREMIUM', 'NOUVEAUTÉ', 'TENDANCE', 'BEST SELLER', 'EXCLUSIF', 'POPULAIRE', 'SPÉCIAL', 'LIMITÉ'];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 1400);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 1400);
  };

  useEffect(() => {
    // Analyser les dimensions des images
    const loadImageDimensions = async () => {
      const dimensionsPromises = images.map((src) => {
        return new Promise<{width: number, height: number, aspectRatio: number}>((resolve) => {
          const img = new Image();
          img.onload = () => {
            const aspectRatio = img.width / img.height;
            resolve({
              width: img.width,
              height: img.height,
              aspectRatio
            });
          };
          img.onerror = () => {
            // Valeurs par défaut en cas d'erreur
            resolve({ width: 681, height: 384, aspectRatio: 1.77 });
          };
          img.src = src;
        });
      });

      const dimensions = await Promise.all(dimensionsPromises);

      // Calculer les dimensions optimales du slider
      if (dimensions.length > 0) {
        const avgAspectRatio = dimensions.reduce((sum, dim) => sum + dim.aspectRatio, 0) / dimensions.length;
        const maxWidth = Math.max(...dimensions.map(d => d.width));
        const maxHeight = Math.max(...dimensions.map(d => d.height));
        
        // Déterminer si les images sont principalement horizontales ou verticales
        const isHorizontalFormat = avgAspectRatio > 1;
        
        let newWidth, newHeight;
        
        if (isHorizontalFormat) {
          // Format horizontal - limiter la largeur et calculer la hauteur
          newWidth = Math.min(maxWidth, 800); // Largeur max
          newHeight = newWidth / avgAspectRatio;
        } else {
          // Format vertical - limiter la hauteur et calculer la largeur
          newHeight = Math.min(maxHeight, 600); // Hauteur max
          newWidth = newHeight * avgAspectRatio;
        }

        // S'assurer que les dimensions ne sont pas trop petites
        newWidth = Math.max(newWidth, 400);
        newHeight = Math.max(newHeight, 300);

        setSliderDimensions({
          width: Math.round(newWidth),
          height: Math.round(newHeight)
        });
      }
    };

    if (images.length > 0) {
      loadImageDimensions();
    }
  }, [images]);

  useEffect(() => {
    if (isAnimating || images.length <= 1) return;
    
    const timeout = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isAnimating, images.length, currentSlide, nextSlide]);

  const styles = `
    .slider-container {
      width: ${sliderDimensions.width}px;
      height: ${sliderDimensions.height}px;
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
      margin: auto;
    }
    
    .slider-wrapper {
      position: absolute;
      width: 400%;
      height: 100%;
      background: #000;
      display: inline-flex;
      overflow: hidden;
    }
    
    .slide {
      position: absolute;
      background-position: center;
      background-size: cover;
      color: #fff;
      font-size: ${Math.max(32, sliderDimensions.width / 20)}px;
      padding-top: ${sliderDimensions.height / 3}px;
      font-weight: 800;
      font-family: 'Heebo', sans-serif;
      text-align: center;
      width: 100%;
      height: 100%;
      transition: opacity 1.4s ease-in-out, transform 1.4s ease-in-out;
      opacity: 0;
    }
    
    .slide.active {
      opacity: 1;
      z-index: 20;
    }
    
    .slide.scaling {
      transform: scale(1.3);
    }
    
    .circle-svg {
      position: absolute;
      z-index: 40;
      width: ${sliderDimensions.width}px;
      height: ${sliderDimensions.height}px;
    }
    
    .nav-button {
      position: absolute;
      z-index: 50;
      width: 40px;
      height: 40px;
      border: 1px solid #849494;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
      box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
      transition: 0.5s;
    }
    
    .nav-button:hover {
      background-color: #fff;
    }
    
    .nav-button:focus {
      outline-width: 0;
    }
    
    .nav-button.left {
      left: 0.5%;
      top: ${(sliderDimensions.height - 40) / 2}px;
    }
    
    .nav-button.right {
      right: 13px;
      top: ${(sliderDimensions.height - 40) / 2}px;
    }
    
    .nav-icon {
      position: absolute;
      width: 16px;
      height: 16px;
    }
    
    .nav-icon.left-icon {
      transform: translate(-9px, -8px);
    }
    
    .nav-icon.right-icon {
      transform: translate(-7px, -8px);
    }
    
    .circle {
      stroke: #fff;
      fill: none;
      transition: 0.3s linear;
      stroke-width: 0;
    }
    
    .circle.active {
      stroke-width: 82px;
    }
    
    ${[...Array(9)].map((_, i) => `
      .circle-${i + 1} {
        transition-delay: ${(i + 1) / 20}s;
      }
      .circle-${i + 10} {
        transition-delay: ${(i + 1) / 20}s;
      }
    `).join('')}
    
    @media (max-width: 700px) {
      .slider-container {
        width: 98%;
        max-width: ${sliderDimensions.width}px;
        height: auto;
        aspect-ratio: ${sliderDimensions.width} / ${sliderDimensions.height};
      }
      .slide {
        font-size: ${Math.max(24, sliderDimensions.width / 30)}px;
        padding-top: ${sliderDimensions.height / 4}px;
      }
    }
  `;

  return (
    <div className="w-full py-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-muted/50 rounded-lg p-1">
          <Button
            variant={viewMode === 'slider' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('slider')}
            className="flex items-center gap-2"
          >
            <Layers size={16} />
            Slider
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="flex items-center gap-2"
          >
            <Grid size={16} />
            Grille
          </Button>
        </div>
      </div>

      {viewMode === 'slider' ? (
        <div className="flex justify-center">
          {/* Safe CSS Styles using CSS-in-JS */}
          <style>{styles}</style>

          <div className="slider-container">
        {/* Background Slides */}
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''} ${isAnimating ? 'scaling' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                left: `${index * 25}%`,
                zIndex: index === currentSlide ? 20 : 10,
                opacity: index === currentSlide ? 1 : 0,
                backgroundColor: '#1a1a1a' // Couleur de fallback en cas de problème de chargement
              }}
              onError={(e) => {
                console.log('Erreur de chargement image:', image);
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.backgroundImage = 'none';
              }}
            >
              {productLabels[index] || `PRODUIT ${index + 1}`}
            </div>
          ))}
        </div>

        {/* Left SVG Circles */}
        <svg className="circle-svg">
          {[...Array(9)].map((_, i) => (
            <circle
              key={`left-${i}`}
              className={`circle circle-${i + 1} ${isAnimating ? 'active' : ''}`}
              cx="34px"
              cy="49%"
              r={20 + i * Math.max(60, sliderDimensions.width / 12)}
            />
          ))}
        </svg>

        {/* Right SVG Circles */}
        <svg className="circle-svg">
          {[...Array(9)].map((_, i) => (
            <circle
              key={`right-${i}`}
              className={`circle circle-${i + 10} ${isAnimating ? 'active' : ''}`}
              cx={`${sliderDimensions.width - 33}px`}
              cy="49%"
              r={20 + i * Math.max(60, sliderDimensions.width / 12)}
            />
          ))}
        </svg>

        {/* Navigation Buttons */}
        <button
          className="nav-button left"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <svg
            className="nav-icon left-icon"
            viewBox="0 0 477.175 477.175"
            fill="#9d9d9d"
          >
            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
          </svg>
        </button>

        <button
          className="nav-button right"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <svg
            className="nav-icon right-icon"
            viewBox="0 0 477.175 477.175"
            fill="#9d9d9d"
          >
            <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/>
          </svg>
        </button>
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`${shopName} - Produit ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded">
                  {productLabels[index] || `PRODUIT ${index + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvancedProductsSlider;