
import React from 'react';
import { Upload, Palette, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImageUpload from '@/components/ui/ImageUpload';
import AvatarGenerator from '@/components/avatar/AvatarGenerator';
import AvatarDisplay from '@/components/avatar/AvatarDisplay';
import { Profile } from '@/types/profile';

interface ProfileAvatarUploadProps {
  profile: Profile | null;
  onImageUpload: (images: string[]) => Promise<void>;
  onRemoveAvatar: () => Promise<void>;
  onAvatarGenerated: (avatarData: string) => Promise<void>;
  showAvatarGenerator: boolean;
  setShowAvatarGenerator: (show: boolean) => void;
}

export const ProfileAvatarUpload: React.FC<ProfileAvatarUploadProps> = ({
  profile,
  onImageUpload,
  onRemoveAvatar,
  onAvatarGenerated,
  showAvatarGenerator,
  setShowAvatarGenerator,
}) => {
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

  if (showAvatarGenerator) {
    return (
      <AvatarGenerator
        onAvatarGenerated={onAvatarGenerated}
        onCancel={() => setShowAvatarGenerator(false)}
        currentGender={profile?.gender || 'femme'}
      />
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <AvatarDisplay 
          src={profile?.avatar_url}
          alt={displayName}
          fallback={getInitials(displayName)}
          size="lg"
          className="border-2 border-border"
        />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Card className="flex-1">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <div className="flex-1">
                  <h3 className="font-medium">Télécharger</h3>
                  <p className="text-xs text-muted-foreground">
                    Uploader votre photo personnelle
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <ImageUpload
                  onImagesChange={onImageUpload}
                  maxImages={1}
                  bucket="avatars"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <Palette className="h-6 w-6 text-muted-foreground" />
                <div className="flex-1">
                  <h3 className="font-medium">Créer Avatar 3D</h3>
                  <p className="text-xs text-muted-foreground">
                    Générer un avatar personnalisé
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Button 
                  onClick={() => setShowAvatarGenerator(true)}
                  className="w-full"
                  size="sm"
                >
                  <Palette className="h-4 w-4 mr-2" />
                  Créer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {profile?.avatar_url && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={onRemoveAvatar}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Supprimer la photo
          </Button>
        </div>
      )}

      <div className="text-sm text-muted-foreground text-center">
        Formats acceptés: JPG, PNG • Taille max: 2MB
      </div>
    </>
  );
};
