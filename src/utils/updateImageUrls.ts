/**
 * Utility script to help developers update existing image URLs with optimization parameters
 * This is a development utility - not used in production
 */

import { optimizeImageUrl } from './imageOptimization';

/**
 * Updates raw Unsplash URLs in code files with optimized versions
 */
export function updateUnsplashUrls(text: string, defaultWidth = 400): string {
  // Regex to match Unsplash URLs without optimization parameters
  const unsplashRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-_]+(?:\?[^"'\s]*)?/g;
  
  return text.replace(unsplashRegex, (match) => {
    // Skip if already has optimization parameters
    if (match.includes('auto=format') || match.includes('w=') || match.includes('q=')) {
      return match;
    }
    
    return optimizeImageUrl(match, { width: defaultWidth });
  });
}

/**
 * Batch update multiple image URLs with different sizes based on context
 */
export function batchUpdateImageUrls(urls: string[], context: 'icon' | 'card' | 'hero' | 'thumbnail'): string[] {
  const sizeMap = {
    icon: { width: 80, height: 80 },
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 300 },
    hero: { width: 1200, height: 800 }
  };
  
  const dimensions = sizeMap[context];
  
  return urls.map(url => optimizeImageUrl(url, dimensions));
}

// Development helper to log optimization suggestions
export function analyzeImageUsage(imageUrls: string[]) {
  const analysis = {
    total: imageUrls.length,
    unoptimized: 0,
    optimized: 0,
    suggestions: [] as string[]
  };
  
  imageUrls.forEach(url => {
    if (url.includes('unsplash.com') && !url.includes('auto=format')) {
      analysis.unoptimized++;
      analysis.suggestions.push(`Optimize: ${url}`);
    } else {
      analysis.optimized++;
    }
  });
  
  console.log('Image Analysis:', analysis);
  return analysis;
}