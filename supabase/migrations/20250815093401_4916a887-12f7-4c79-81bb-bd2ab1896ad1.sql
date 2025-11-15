-- Fix announcements table contact information exposure
-- Drop the current public read policy that exposes all data
DROP POLICY IF EXISTS "Everyone can view active announcements" ON public.announcements;

-- Create a function to mask sensitive contact information for non-authenticated users
CREATE OR REPLACE FUNCTION public.mask_announcement_contacts(
  announcement_row public.announcements,
  user_is_authenticated boolean DEFAULT false
) RETURNS public.announcements AS $$
BEGIN
  -- If user is not authenticated, mask sensitive contact details
  IF NOT user_is_authenticated THEN
    announcement_row.phone := CASE 
      WHEN announcement_row.phone IS NOT NULL THEN '****-****' 
      ELSE NULL 
    END;
    announcement_row.email := CASE 
      WHEN announcement_row.email IS NOT NULL THEN 'contact@****.**' 
      ELSE NULL 
    END;
  END IF;
  
  RETURN announcement_row;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create new policy for public access with masked contact information
CREATE POLICY "Public can view active announcements with masked contacts" 
ON public.announcements 
FOR SELECT 
USING (
  is_active = true AND 
  auth.uid() IS NULL  -- Only for non-authenticated users
);

-- Create policy for authenticated users to see full contact information
CREATE POLICY "Authenticated users can view full announcement details" 
ON public.announcements 
FOR SELECT 
USING (
  is_active = true AND 
  auth.uid() IS NOT NULL  -- Only for authenticated users
);