import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface AvatarDisplayProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  src,
  alt = 'Avatar',
  fallback = 'U',
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  // Vérifier si c'est un avatar généré
  const isGeneratedAvatar = src && src.startsWith('{');
  let avatarData = null;
  
  if (isGeneratedAvatar) {
    try {
      avatarData = JSON.parse(src);
    } catch (e) {
      console.error('Error parsing avatar data:', e);
    }
  }

  if (avatarData && avatarData.type === 'generated') {
    return (
      <div 
        className={cn(
          sizeClasses[size],
          'rounded-full flex items-center justify-center border-2 border-dashed',
          className
        )}
        style={{ 
          borderColor: avatarData.color, 
          backgroundColor: `${avatarData.color}20` 
        }}
      >
        <span className={cn(textSizes[size])}>
          {avatarData.emoji}
        </span>
      </div>
    );
  }

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={src || ''} alt={alt} />
      <AvatarFallback className={textSizes[size]}>
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarDisplay;