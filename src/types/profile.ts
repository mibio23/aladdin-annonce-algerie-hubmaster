
export interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  location: string | null;
  profession: string | null;
  created_at: string;
  updated_at: string;
  gender: string | null;
  date_of_birth: string | null;
  nickname: string | null;
  address: string | null;
  commune: string | null;
  wilaya: string | null;
  country: string | null;
  phone_secondary: string | null;
  phone_tertiary: string | null;
  profile_locked: boolean;
}
