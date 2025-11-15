-- Add new profile fields for enhanced user information
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS nickname TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS commune TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS wilaya TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS country TEXT DEFAULT 'Algeria';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone_secondary TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone_tertiary TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS profile_locked BOOLEAN DEFAULT FALSE;

-- Update profiles to include nickname as display_name if not set
UPDATE public.profiles 
SET nickname = display_name 
WHERE nickname IS NULL AND display_name IS NOT NULL AND display_name != '';

-- Create index for better performance on location searches
CREATE INDEX IF NOT EXISTS idx_profiles_wilaya ON public.profiles(wilaya);
CREATE INDEX IF NOT EXISTS idx_profiles_commune ON public.profiles(commune);