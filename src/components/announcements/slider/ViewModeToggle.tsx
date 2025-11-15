import React from 'react';
import { Grid, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewModeToggleProps {
  viewMode: 'slider' | 'grid';
  onViewModeChange: (mode: 'slider' | 'grid') => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ 
  viewMode, 
  onViewModeChange 
}) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="flex bg-muted/50 rounded-lg p-1">
        <Button
          variant={viewMode === 'slider' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('slider')}
          className="flex items-center gap-2"
        >
          <Layers size={16} />
          Slider
        </Button>
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('grid')}
          className="flex items-center gap-2"
        >
          <Grid size={16} />
          Grille
        </Button>
      </div>
    </div>
  );
};

export default ViewModeToggle;