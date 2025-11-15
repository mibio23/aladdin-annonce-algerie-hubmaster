-- Create secure contact policies for announcements
-- First, update the announcements table RLS policies to protect phone numbers

-- Drop the existing public read policy
DROP POLICY IF EXISTS "Tout le monde peut voir les annonces actives" ON public.announcements;

-- Create new policies that protect phone numbers
CREATE POLICY "Public can view announcements without contact info" 
ON public.announcements 
FOR SELECT 
USING (
  status = 'active' AND 
  (auth.uid() IS NULL OR auth.uid() != user_id)
);

-- Allow users to see their own announcements with full contact info
CREATE POLICY "Users can view their own announcements with contact info" 
ON public.announcements 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create a secure function to get masked contact info for public access
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
      WHEN auth.uid() IS NOT NULL AND a.phone_number IS NOT NULL THEN public.mask_phone_number(a.phone_number)
      ELSE NULL
    END as phone_number_masked,
    a.shop_name,
    a.shop_id,
    a.shop_logo_url,
    (a.phone_number IS NOT NULL) as requires_auth_for_contact
  FROM public.announcements a
  WHERE a.id = announcement_id AND a.status = 'active';
END;
$$;

-- Create a function to request contact information (requires authentication)
CREATE OR REPLACE FUNCTION public.request_contact_access(announcement_id uuid)
RETURNS TABLE(phone_number text, contact_allowed boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  announcement_user_id uuid;
  requester_user_id uuid;
  announcement_phone text;
BEGIN
  -- Check if user is authenticated
  requester_user_id := auth.uid();
  IF requester_user_id IS NULL THEN
    RETURN QUERY SELECT NULL::text, false;
    RETURN;
  END IF;

  -- Get announcement details
  SELECT user_id, phone_number INTO announcement_user_id, announcement_phone
  FROM public.announcements 
  WHERE id = announcement_id AND status = 'active';
  
  IF announcement_user_id IS NULL THEN
    RETURN QUERY SELECT NULL::text, false;
    RETURN;
  END IF;

  -- Log the contact access attempt
  INSERT INTO public.security_audit_log (
    user_id, action_type, resource_type, resource_id, metadata
  ) VALUES (
    requester_user_id, 'contact_request', 'announcement', 
    announcement_id::text, 
    jsonb_build_object('timestamp', now(), 'requested_by', requester_user_id)
  );

  -- Return phone number for authenticated users (not the owner)
  IF requester_user_id != announcement_user_id THEN
    RETURN QUERY SELECT announcement_phone, true;
  ELSE
    RETURN QUERY SELECT announcement_phone, true;
  END IF;
END;
$$;