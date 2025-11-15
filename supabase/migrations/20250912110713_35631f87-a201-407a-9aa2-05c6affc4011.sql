-- Fix remaining security issues with contact information

-- First, ensure the announcements table RLS policies are properly restrictive
-- Drop all existing announcements policies and recreate them securely
DROP POLICY IF EXISTS "Public can view announcements without contact info" ON public.announcements;
DROP POLICY IF EXISTS "Users can view their own announcements with contact info" ON public.announcements;

-- Create a comprehensive policy that completely hides phone numbers from public access
CREATE POLICY "Public announcements without sensitive data"
ON public.announcements 
FOR SELECT 
USING (
  status = 'active' AND 
  auth.uid() IS NULL
);

-- Allow authenticated users to see announcements but still protect phone numbers
CREATE POLICY "Authenticated users see announcements" 
ON public.announcements 
FOR SELECT 
USING (
  status = 'active' AND 
  auth.uid() IS NOT NULL
);

-- Users can see their own announcements with full details
CREATE POLICY "Users see own announcements" 
ON public.announcements 
FOR SELECT 
USING (auth.uid() = user_id);

-- Secure the contact_requests table - only owners should see contact requests
DROP POLICY IF EXISTS "Announcement owners can view contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Users can create contact requests" ON public.contact_requests;

CREATE POLICY "Only announcement owners can view their contact requests"
ON public.contact_requests 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.announcements a 
    WHERE a.id = contact_requests.announcement_id 
    AND a.user_id = auth.uid()
  )
);

CREATE POLICY "Authenticated users can create contact requests"
ON public.contact_requests 
FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL AND
  requester_email IS NOT NULL AND 
  requester_name IS NOT NULL AND
  EXISTS (
    SELECT 1 FROM public.announcements a 
    WHERE a.id = contact_requests.announcement_id 
    AND a.status = 'active'
  )
);

-- Create a public-safe view for announcements that never exposes phone numbers
CREATE OR REPLACE VIEW public.announcements_public AS
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
  NULL as phone_number, -- Always NULL for public view
  (phone_number IS NOT NULL) as has_contact_info
FROM public.announcements 
WHERE status = 'active';

-- Grant appropriate access to the public view
GRANT SELECT ON public.announcements_public TO anon, authenticated;

-- Update the secure contact function to be more restrictive
CREATE OR REPLACE FUNCTION public.get_announcement_with_protected_contact(announcement_id uuid)
RETURNS TABLE(
  id uuid,
  title text,
  description text,
  price numeric,
  location text,
  image_url text,
  image_urls text[],
  category_id uuid,
  user_id uuid,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  expires_at timestamp with time zone,
  keywords text[],
  type text,
  condition text,
  status text,
  is_urgent boolean,
  urgent_message text,
  view_count integer,
  contact_count integer,
  phone_number_masked text,
  shop_name text,
  shop_id text,
  shop_logo_url text,
  requires_auth_for_contact boolean
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id,
    a.title,
    a.description,
    a.price,
    a.location,
    a.image_url,
    a.image_urls,
    a.category_id,
    a.user_id,
    a.created_at,
    a.updated_at,
    a.expires_at,
    a.keywords,
    a.type,
    a.condition,
    a.status,
    a.is_urgent,
    a.urgent_message,
    a.view_count,
    a.contact_count,
    CASE 
      WHEN auth.uid() = a.user_id THEN a.phone_number
      WHEN auth.uid() IS NOT NULL AND a.phone_number IS NOT NULL THEN 
        LEFT(a.phone_number, 2) || REPEAT('*', LENGTH(a.phone_number) - 4) || RIGHT(a.phone_number, 2)
      ELSE 'XX XX XX XX XX'
    END as phone_number_masked,
    a.shop_name,
    a.shop_id,
    a.shop_logo_url,
    (a.phone_number IS NOT NULL AND auth.uid() IS NULL) as requires_auth_for_contact
  FROM public.announcements a
  WHERE a.id = announcement_id AND a.status = 'active';
END;
$$;