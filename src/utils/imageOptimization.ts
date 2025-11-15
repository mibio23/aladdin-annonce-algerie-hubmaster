/**
 * Image optimization utilities for better performance and SEO
 */

interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'auto';
  fit?: 'crop' | 'fill' | 'scale';
}

/**
 * Optimizes image URLs for better performance
 */
export function optimizeImageUrl(
  originalUrl: string, 
  options: ImageOptimizationOptions = {}
): string {
  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    fit = 'crop'
  } = options;

  // Handle Unsplash images
  if (originalUrl.includes('unsplash.com')) {
    return optimizeUnsplashUrl(originalUrl, options);
  }

  // Handle other CDN images or return original if no optimization available
  return originalUrl;
}

/**
 * Optimizes Unsplash image URLs with proper parameters
 */
function optimizeUnsplashUrl(
  url: string, 
  options: ImageOptimizationOptions
): string {
  const { width, height, quality = 80, format = 'auto', fit = 'crop' } = options;
  
  // Remove existing parameters
  const baseUrl = url.split('?')[0];
  const params = new URLSearchParams();
  
  // Add optimization parameters
  params.set('auto', format === 'auto' ? 'format,compress' : format);
  params.set('fit', fit);
  params.set('q', quality.toString());
  
  if (width) {
    params.set('w', width.toString());
  }
  
  if (height) {
    params.set('h', height.toString());
  }
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Gets optimized image URLs for different screen sizes (responsive images)
 */
export function getResponsiveImageUrls(
  originalUrl: string,
  displayWidth: number
): { src: string; srcSet: string; sizes: string } {
  // Define responsive breakpoints based on common usage
  const breakpoints = [
    { width: Math.ceil(displayWidth * 0.5), descriptor: '0.5x' },
    { width: displayWidth, descriptor: '1x' },
    { width: Math.ceil(displayWidth * 1.5), descriptor: '1.5x' },
    { width: Math.ceil(displayWidth * 2), descriptor: '2x' }
  ];

  const srcSet = breakpoints
    .map(bp => `${optimizeImageUrl(originalUrl, { width: bp.width })} ${bp.descriptor}`)
    .join(', ');

  const sizes = `(max-width: ${displayWidth}px) 100vw, ${displayWidth}px`;

  return {
    src: optimizeImageUrl(originalUrl, { width: displayWidth }),
    srcSet,
    sizes
  };
}

/**
 * Determines optimal image dimensions based on container context
 */
export function getOptimalImageDimensions(containerClass: string): { width: number; height?: number } {
  // Common patterns and their optimal dimensions
  const patterns = [
    // Category icons
    { pattern: /w-16|h-16/, width: 64, height: 64 },
    { pattern: /w-20|h-20/, width: 80, height: 80 },
    { pattern: /w-24|h-24/, width: 96, height: 96 },
    
    // Card images
    { pattern: /h-48/, width: 344, height: 192 },
    { pattern: /h-64/, width: 400, height: 256 },
    { pattern: /h-80/, width: 500, height: 320 },
    
    // Aspect ratios
    { pattern: /aspect-square/, width: 400, height: 400 },
    { pattern: /aspect-video/, width: 640, height: 360 },
    { pattern: /aspect-\[3\/4\]/, width: 400, height: 533 },
    
    // Mobile responsive
    { pattern: /sm:/, width: 640 },
    { pattern: /md:/, width: 768 },
    { pattern: /lg:/, width: 1024 },
    { pattern: /xl:/, width: 1280 },
  ];

  // Find matching pattern
  for (const { pattern, width, height } of patterns) {
    if (pattern.test(containerClass)) {
      return { width, height };
    }
  }

  // Default fallback
  return { width: 400, height: 300 };
}

/**
 * Preloads critical images for better performance
 */
export function preloadImage(url: string, options: ImageOptimizationOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const optimizedUrl = optimizeImageUrl(url, options);
    
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${optimizedUrl}`));
    img.src = optimizedUrl;
  });
}

/**
 * Creates a WebP-first picture element configuration
 */
export function createPictureConfig(originalUrl: string, width: number, height?: number) {
  const webpUrl = optimizeImageUrl(originalUrl, { width, height, format: 'webp' });
  const fallbackUrl = optimizeImageUrl(originalUrl, { width, height, format: 'jpg' });
  
  return {
    sources: [
      { srcSet: webpUrl, type: 'image/webp' },
      { srcSet: fallbackUrl, type: 'image/jpeg' }
    ],
    img: {
      src: fallbackUrl,
      width,
      height
    }
  };
}