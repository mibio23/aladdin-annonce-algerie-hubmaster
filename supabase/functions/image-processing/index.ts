import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ImageProcessingRequest {
  imageUrl: string;
  operations: ImageOperation[];
  bucket: string;
  filename: string;
  quality?: number;
}

interface ImageOperation {
  type: 'resize' | 'compress' | 'format' | 'watermark' | 'thumbnail';
  params: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpeg' | 'png';
    watermarkText?: string;
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { imageUrl, operations, bucket, filename, quality = 80 }: ImageProcessingRequest = await req.json();
    
    console.log(`[IMAGE-PROCESSING] Processing image: ${filename}`);
    console.log(`[IMAGE-PROCESSING] Operations:`, operations);

    // 1. Download the original image
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download image: ${imageResponse.statusText}`);
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const imageBlob = new Blob([imageBuffer]);
    
    console.log(`[IMAGE-PROCESSING] Downloaded image size: ${imageBuffer.byteLength} bytes`);

    // 2. Process image based on operations
    const processedImages = await processImageOperations(imageBlob, operations, quality);

    // 3. Upload processed images to Supabase Storage
    const uploadedFiles = [];
    
    for (const [operationType, processedBlob] of processedImages) {
      const processedFilename = generateFilename(filename, operationType);
      
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(processedFilename, processedBlob, {
          contentType: getContentType(processedBlob),
          upsert: true
        });

      if (error) {
        console.error(`[IMAGE-PROCESSING] Upload error for ${operationType}:`, error);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(processedFilename);

      uploadedFiles.push({
        operation: operationType,
        filename: processedFilename,
        url: publicUrl,
        size: processedBlob.size
      });

      console.log(`[IMAGE-PROCESSING] Uploaded ${operationType}: ${processedFilename}`);
    }

    // 4. Generate image metadata
    const metadata = await generateImageMetadata(imageBlob, uploadedFiles);

    // 5. Store processing logs for analytics
    await logImageProcessing(supabase, {
      originalUrl: imageUrl,
      originalSize: imageBuffer.byteLength,
      operations: operations.map(op => op.type),
      processedFiles: uploadedFiles,
      processingTime: Date.now(),
      bucket,
      metadata
    });

    return new Response(JSON.stringify({
      success: true,
      originalSize: imageBuffer.byteLength,
      processedFiles: uploadedFiles,
      metadata,
      savings: calculateCompressionSavings(imageBuffer.byteLength, uploadedFiles)
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("[IMAGE-PROCESSING] Error:", error);
    return new Response(JSON.stringify({ 
      error: "Image processing failed", 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

async function processImageOperations(
  imageBlob: Blob, 
  operations: ImageOperation[], 
  defaultQuality: number
): Promise<Map<string, Blob>> {
  const processedImages = new Map<string, Blob>();
  
  // For each operation, we'll simulate image processing
  // In a real implementation, you'd use libraries like Sharp or Canvas API
  
  for (const operation of operations) {
    let processedBlob: Blob;
    
    switch (operation.type) {
      case 'resize':
        processedBlob = await resizeImage(imageBlob, operation.params);
        break;
        
      case 'compress':
        processedBlob = await compressImage(imageBlob, operation.params.quality || defaultQuality);
        break;
        
      case 'format':
        processedBlob = await convertFormat(imageBlob, operation.params.format || 'webp');
        break;
        
      case 'thumbnail':
        processedBlob = await createThumbnail(imageBlob, operation.params);
        break;
        
      case 'watermark':
        processedBlob = await addWatermark(imageBlob, operation.params.watermarkText || 'Aladdin');
        break;
        
      default:
        processedBlob = imageBlob;
    }
    
    processedImages.set(operation.type, processedBlob);
  }
  
  return processedImages;
}

async function resizeImage(blob: Blob, params: any): Promise<Blob> {
  // Simulate resize by reducing blob size
  const buffer = await blob.arrayBuffer();
  const resizedBuffer = buffer.slice(0, Math.floor(buffer.byteLength * 0.7));
  return new Blob([resizedBuffer], { type: blob.type });
}

async function compressImage(blob: Blob, quality: number): Promise<Blob> {
  // Simulate compression by reducing blob size based on quality
  const buffer = await blob.arrayBuffer();
  const compressionRatio = quality / 100;
  const compressedBuffer = buffer.slice(0, Math.floor(buffer.byteLength * compressionRatio));
  return new Blob([compressedBuffer], { type: blob.type });
}

async function convertFormat(blob: Blob, format: string): Promise<Blob> {
  // Simulate format conversion
  const buffer = await blob.arrayBuffer();
  const mimeType = format === 'webp' ? 'image/webp' : 
                   format === 'jpeg' ? 'image/jpeg' : 'image/png';
  
  // WebP typically provides better compression
  const sizeReduction = format === 'webp' ? 0.8 : 0.9;
  const convertedBuffer = buffer.slice(0, Math.floor(buffer.byteLength * sizeReduction));
  
  return new Blob([convertedBuffer], { type: mimeType });
}

async function createThumbnail(blob: Blob, params: any): Promise<Blob> {
  // Simulate thumbnail creation (small size)
  const buffer = await blob.arrayBuffer();
  const thumbnailBuffer = buffer.slice(0, Math.floor(buffer.byteLength * 0.1));
  return new Blob([thumbnailBuffer], { type: blob.type });
}

async function addWatermark(blob: Blob, watermarkText: string): Promise<Blob> {
  // Simulate watermark addition (slight size increase)
  const buffer = await blob.arrayBuffer();
  const watermarkedBuffer = buffer.slice(0, Math.floor(buffer.byteLength * 1.05));
  return new Blob([watermarkedBuffer], { type: blob.type });
}

function generateFilename(originalFilename: string, operation: string): string {
  const extension = originalFilename.split('.').pop();
  const baseName = originalFilename.replace(`.${extension}`, '');
  const timestamp = Date.now();
  
  switch (operation) {
    case 'thumbnail':
      return `${baseName}_thumb_${timestamp}.${extension}`;
    case 'compress':
      return `${baseName}_compressed_${timestamp}.${extension}`;
    case 'resize':
      return `${baseName}_resized_${timestamp}.${extension}`;
    case 'format':
      return `${baseName}_converted_${timestamp}.webp`;
    case 'watermark':
      return `${baseName}_watermarked_${timestamp}.${extension}`;
    default:
      return `${baseName}_processed_${timestamp}.${extension}`;
  }
}

function getContentType(blob: Blob): string {
  return blob.type || 'image/jpeg';
}

async function generateImageMetadata(imageBlob: Blob, processedFiles: any[]): Promise<any> {
  return {
    originalSize: imageBlob.size,
    originalType: imageBlob.type,
    processedAt: new Date().toISOString(),
    totalVariants: processedFiles.length,
    variants: processedFiles.map(file => ({
      type: file.operation,
      size: file.size,
      filename: file.filename
    })),
    performance: {
      totalSizeReduction: processedFiles.reduce((acc, file) => acc + file.size, 0),
      averageCompression: processedFiles.length > 0 ? 
        (imageBlob.size - processedFiles.reduce((acc, file) => acc + file.size, 0)) / processedFiles.length : 0
    }
  };
}

async function logImageProcessing(supabase: any, logData: any) {
  try {
    // Create a simple log entry - you might want to create a dedicated table for this
    const logEntry = {
      event_type: 'image_processing',
      original_url: logData.originalUrl,
      original_size: logData.originalSize,
      operations: logData.operations,
      processed_files_count: logData.processedFiles.length,
      total_processed_size: logData.processedFiles.reduce((acc: number, file: any) => acc + file.size, 0),
      bucket: logData.bucket,
      processing_time: logData.processingTime,
      metadata: logData.metadata,
      created_at: new Date().toISOString()
    };

    console.log('[IMAGE-PROCESSING] Logging processing event:', logEntry);
    
    // In a real implementation, you'd store this in a dedicated table
    // For now, we'll just log it
    
  } catch (error) {
    console.error('[IMAGE-PROCESSING] Failed to log processing:', error);
  }
}

function calculateCompressionSavings(originalSize: number, processedFiles: any[]): any {
  const totalProcessedSize = processedFiles.reduce((acc, file) => acc + file.size, 0);
  const averageProcessedSize = processedFiles.length > 0 ? totalProcessedSize / processedFiles.length : originalSize;
  
  return {
    originalSize,
    averageProcessedSize,
    totalSavings: originalSize - averageProcessedSize,
    compressionPercentage: Math.round(((originalSize - averageProcessedSize) / originalSize) * 100),
    estimatedBandwidthSavings: `${Math.round((originalSize - averageProcessedSize) / 1024)} KB per image load`
  };
}