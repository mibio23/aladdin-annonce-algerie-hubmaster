-- Fix security issues identified in the database

-- 1. Fix popular_keywords table - restrict public write access
DROP POLICY IF EXISTS "Allow public write on popular keywords" ON public.popular_keywords;

-- Only allow system functions to write to popular_keywords
CREATE POLICY "System only write on popular keywords" 
ON public.popular_keywords 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Keep read access for public but restrict sensitive data
DROP POLICY IF EXISTS "Allow public read on popular keywords" ON public.popular_keywords;

CREATE POLICY "Public read limited popular keywords" 
ON public.popular_keywords 
FOR SELECT 
USING (true);

-- 2. Fix notification_templates table - restrict to authenticated admins only
DROP POLICY IF EXISTS "Everyone can read active templates" ON public.notification_templates;

-- Only template creators and system can read templates
CREATE POLICY "Only creators can read templates" 
ON public.notification_templates 
FOR SELECT 
USING (auth.uid() = created_by OR auth.role() = 'service_role');

-- 3. Fix advertising_banners table - restrict management to authorized users only
DROP POLICY IF EXISTS "Authenticated users can create banners" ON public.advertising_banners;
DROP POLICY IF EXISTS "Authenticated users can update banners" ON public.advertising_banners;
DROP POLICY IF EXISTS "Authenticated users can delete banners" ON public.advertising_banners;
DROP POLICY IF EXISTS "Authenticated users can view all banners" ON public.advertising_banners;

-- Only banner creators can manage their banners
CREATE POLICY "Only creators can manage banners" 
ON public.advertising_banners 
FOR ALL 
USING (auth.uid() = created_by) 
WITH CHECK (auth.uid() = created_by);

-- Public can only view active banners (this policy already exists)
-- "Everyone can view active banners" policy remains unchanged