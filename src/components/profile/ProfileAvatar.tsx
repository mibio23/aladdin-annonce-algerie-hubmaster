
import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useProfile } from '@/hooks/useProfile';
import AvatarDisplay from '@/components/avatar/AvatarDisplay';
import { ProfileAvatarUpload } from './ProfileAvatarUpload';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  editable?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'lg', 
  editable = true 
}) => {
  const { profile, updateAvatar } = useProfile();
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [showAvatarGenerator, setShowAvatarGenerator] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const displayName = profile?.display_name || 
                     `${profile?.first_name} ${profile?.last_name}`.trim() || 
                     'Utilisateur';

  const handleImageUpload = async (images: string[]) => {
    if (images.length > 0) {
      const success = await updateAvatar(images[0]);
      if (success) {
        setIsUploadOpen(false);
      }
    }
  };

  const handleRemoveAvatar = async () => {
    const success = await updateAvatar('');
    if (success) {
      setIsUploadOpen(false);
    }
  };

  const handleAvatarGenerated = async (avatarData: string) => {
    const success = await updateAvatar(avatarData);
    if (success) {
      setShowAvatarGenerator(false);
      setIsUploadOpen(false);
    }
  };

  return (
    <div className="relative inline-block">
      <AvatarDisplay 
        src={profile?.avatar_url}
        alt={displayName}
        fallback={getInitials(displayName)}
        size={size}
        className="border-2 border-border"
      />

      {editable && (
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-2 border-background shadow-md hover:scale-105 transition-transform"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Photo de profil
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <ProfileAvatarUpload
                profile={profile}
                onImageUpload={handleImageUpload}
                onRemoveAvatar={handleRemoveAvatar}
                onAvatarGenerated={handleAvatarGenerated}
                showAvatarGenerator={showAvatarGenerator}
                setShowAvatarGenerator={setShowAvatarGenerator}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
