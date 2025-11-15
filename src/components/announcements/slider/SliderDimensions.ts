export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface SliderDimensions {
  width: number;
  height: number;
}

export const calculateSliderDimensions = async (
  images: string[]
): Promise<{ dimensions: ImageDimensions[]; sliderDimensions: SliderDimensions }> => {
  const dimensionsPromises = images.map((src) => {
    return new Promise<ImageDimensions>((resolve) => {
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
        resolve({ width: 800, height: 500, aspectRatio: 1.6 });
      };
      img.src = src;
    });
  });

  const dimensions = await Promise.all(dimensionsPromises);

  if (dimensions.length === 0) {
    return { 
      dimensions, 
      sliderDimensions: { width: 800, height: 500 } 
    };
  }

  const avgAspectRatio = dimensions.reduce((sum, dim) => sum + dim.aspectRatio, 0) / dimensions.length;
  const maxWidth = Math.max(...dimensions.map(d => d.width));
  const maxHeight = Math.max(...dimensions.map(d => d.height));
  
  const isHorizontalFormat = avgAspectRatio > 1;
  
  let newWidth, newHeight;
  
  if (isHorizontalFormat) {
    newWidth = Math.min(maxWidth, 1000);
    newHeight = newWidth / avgAspectRatio;
  } else {
    newHeight = Math.min(maxHeight, 700);
    newWidth = newHeight * avgAspectRatio;
  }

  newWidth = Math.max(newWidth, 600);
  newHeight = Math.max(newHeight, 400);

  return {
    dimensions,
    sliderDimensions: {
      width: Math.round(newWidth),
      height: Math.round(newHeight)
    }
  };
};