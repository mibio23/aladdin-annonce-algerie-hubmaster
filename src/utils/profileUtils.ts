
import { User } from '@supabase/supabase-js';
import { Profile } from '@/types/profile';

export const createDefaultProfile = (user: User): Profile => {
  return {
    id: crypto.randomUUID(),
    user_id: user.id,
    display_name: user.user_metadata?.full_name || user.email || 'Utilisateur',
    avatar_url: user.user_metadata?.avatar_url || null,
    bio: null,
    first_name: user.user_metadata?.first_name || null,
    last_name: user.user_metadata?.last_name || null,
    phone: user.phone || null,
    location: null,
    profession: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    gender: null,
    date_of_birth: null,
    nickname: null,
    address: null,
    commune: null,
    wilaya: null,
    country: 'Algeria',
    phone_secondary: null,
    phone_tertiary: null,
    profile_locked: false
  };
};

export const normalizeProfile = (profile: any): Profile => {
  return {
    id: profile.id,
    user_id: profile.user_id,
    display_name: profile.display_name || 'Utilisateur',
    avatar_url: profile.avatar_url,
    bio: profile.bio,
    first_name: profile.first_name,
    last_name: profile.last_name,
    phone: profile.phone,
    location: profile.location,
    profession: profile.profession,
    created_at: profile.created_at,
    updated_at: profile.updated_at,
    gender: profile.gender,
    date_of_birth: profile.date_of_birth,
    nickname: profile.nickname,
    address: profile.address,
    commune: profile.commune,
    wilaya: profile.wilaya,
    country: profile.country || 'Algeria',
    phone_secondary: profile.phone_secondary,
    phone_tertiary: profile.phone_tertiary,
    profile_locked: profile.profile_locked || false
  };
};

// Security validation for profile data
export const validateProfileData = (profileData: Partial<Profile>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validate phone numbers
  if (profileData.phone && !/^[+]?[0-9-s()]{10,20}$/.test(profileData.phone)) {
    errors.push('Format de téléphone invalide');
  }

  // Validate display name
  if (profileData.display_name && profileData.display_name.length > 100) {
    errors.push('Le nom d\'affichage est trop long');
  }

  // Validate bio
  if (profileData.bio && profileData.bio.length > 500) {
    errors.push('La biographie est trop longue');
  }

  // Validate names
  if (profileData.first_name && profileData.first_name.length > 50) {
    errors.push('Le prénom est trop long');
  }

  if (profileData.last_name && profileData.last_name.length > 50) {
    errors.push('Le nom est trop long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
