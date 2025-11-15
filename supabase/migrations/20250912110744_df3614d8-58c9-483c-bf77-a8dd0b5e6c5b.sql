-- Fix the security definer view issue
DROP VIEW IF EXISTS public.announcements_public;

-- Create a simple view without security definer
CREATE VIEW public.announcements_public AS
SELECT 
  id,
  title,
  description,
  price,
  location,
  image_url,
  image_urls,
  category_id,
  created_at,
  updated_at,
  expires_at,
  keywords,
  type,
  condition,
  status,
  is_urgent,
  urgent_message,
  view_count,
  shop_name,
  shop_id,
  shop_logo_url,
  (phone_number IS NOT NULL) as has_contact_info
FROM public.announcements 
WHERE status = 'active';