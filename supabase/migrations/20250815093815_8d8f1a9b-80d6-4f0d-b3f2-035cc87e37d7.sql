-- Fix the function search path security warning
CREATE OR REPLACE FUNCTION public.mask_announcement_contacts(
  announcement_row public.announcements,
  user_is_authenticated boolean DEFAULT false
) RETURNS public.announcements 
LANGUAGE plpgsql 
SECURITY DEFINER 
STABLE
SET search_path = 'public'
AS $$
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
$$;