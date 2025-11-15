import React, { useCallback, useRef } from 'react';
import { Upload, Camera, ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadZoneProps {
  previewImage: string | null;
  onImageSelect: (file: File) => void;
  onCameraToggle: () => void;
  onReset: () => void;
}

const ImageUploadZone: React.FC<ImageUploadZoneProps> = ({
  previewImage,
  onImageSelect,
  onCameraToggle,
  onReset
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    }
  }, [onImageSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={`
        border-2 border-dashed rounded-lg p-8 text-center transition-colors
        ${dragActive 
          ? 'border-primary bg-primary/5' 
          : 'border-muted-foreground hover:border-primary hover:bg-accent/50'
        }
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {previewImage ? (
        <div className="space-y-4">
          <img 
            src={previewImage} 
            alt="Preview" 
            className="mx-auto max-h-48 rounded-lg shadow-md object-contain"
          />
          <Button 
            onClick={onReset}
            variant="outline"
            size="sm"
          >
            <X className="w-4 h-4 mr-2" />
            Changer d'image
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground" />
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Analysez une image avec l'IA
            </h3>
            <p className="text-muted-foreground mb-4">
              Déposez une image ici ou utilisez les boutons ci-dessous
            </p>
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
              >
                <Upload className="w-4 h-4 mr-2" />
                Télécharger
              </Button>
              <Button 
                onClick={onCameraToggle}
                variant="outline"
              >
                <Camera className="w-4 h-4 mr-2" />
                Caméra
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploadZone;