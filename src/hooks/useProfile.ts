
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Profile } from '@/types/profile';
import { profileService } from '@/services/profileService';
import { createDefaultProfile, normalizeProfile } from '@/utils/profileUtils';

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();

  const fetchProfile = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await profileService.fetchProfile(user.id);

      if (data) {
        setProfile(normalizeProfile(data));
      } else {
        setProfile(createDefaultProfile(user));
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors du chargement du profil",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updatedProfile: Partial<Profile>) => {
    if (!user || !profile) return false;

    try {
      setSaving(true);
      const data = await profileService.updateProfile(user.id, updatedProfile);
      
      setProfile(prev => prev ? { ...prev, ...normalizeProfile(data) } : normalizeProfile(data));
      toast({
        title: "Succès",
        description: "Profil mis à jour avec succès",
      });
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la mise à jour du profil",
        variant: "destructive",
      });
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateAvatar = async (avatarUrl: string) => {
    if (!user) return false;

    try {
      await profileService.updateAvatar(user.id, avatarUrl);
      setProfile(prev => prev ? { ...prev, avatar_url: avatarUrl } : null);
      toast({
        title: "Succès",
        description: "Photo de profil mise à jour",
      });
      return true;
    } catch (error) {
      console.error('Error updating avatar:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la mise à jour de la photo",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return {
    profile,
    loading,
    saving,
    updateProfile,
    updateAvatar,
    refetch: fetchProfile,
  };
};
