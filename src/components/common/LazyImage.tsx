import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { optimizeImageUrl, getOptimalImageDimensions, getResponsiveImageUrls } from '@/utils/imageOptimization';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  lazy?: boolean;
  responsive?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  fallback = '/src/assets/placeholder-image.svg',
  className,
  lazy = true,
  responsive,
  ...props 
}) => {
  // Optimize image URL based on dimensions
  const imageConfig = useMemo(() => {
    let width = props.width as number;
    let height = props.height as number;
    
    if (!width && className) {
      const optimal = getOptimalImageDimensions(className);
      width = optimal.width;
      height = height || optimal.height || 400;
    }
    
    width = width || 400;
    
    const optimizedSrc = optimizeImageUrl(src, { width, height });
    const responsiveUrls = responsive && width
      ? getResponsiveImageUrls(src, width)
      : null;
    
    return {
      src: optimizedSrc,
      responsive: responsiveUrls,
      width,
      height
    };
  }, [src, className, props.width, props.height, responsive]);

  const [imageSrc, setImageSrc] = useState<string>(lazy ? fallback : imageConfig.src);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && lazy && imageSrc === fallback) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(imageConfig.src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src, imageSrc, fallback, lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Prevent console error logging for failed image loads
    e.preventDefault();
    setHasError(true);
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      srcSet={imageConfig.responsive?.srcSet}
      sizes={imageConfig.responsive?.sizes}
      alt={alt}
      width={imageConfig.width}
      height={imageConfig.height}
      onLoad={handleLoad}
      onError={handleError}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        hasError && 'grayscale',
        className
      )}
      {...props}
    />
  );
};

export default LazyImage;
