-- Create user_roles table for admin security
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'user')),
  granted_by UUID REFERENCES auth.users(id),
  granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  UNIQUE(user_id, role)
);

-- Enable RLS for user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles" 
  ON public.user_roles 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" 
  ON public.user_roles 
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

CREATE POLICY "Admins can manage roles" 
  ON public.user_roles 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(12, 2),
  currency TEXT DEFAULT 'DZD',
  condition TEXT CHECK (condition IN ('neuf', 'tres_bon_etat', 'bon_etat', 'acceptable', 'usage')),
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wilaya TEXT NOT NULL,
  commune TEXT,
  address TEXT,
  phone_number TEXT,
  email TEXT,
  images TEXT[], -- Array of image URLs
  is_urgent BOOLEAN DEFAULT false,
  is_negotiable BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  contact_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'deleted', 'expired')),
  expires_at TIMESTAMPTZ DEFAULT (now() + INTERVAL '30 days'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create announcement_favorites table
CREATE TABLE public.announcement_favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, announcement_id)
);

-- Create announcement_views table for analytics
CREATE TABLE public.announcement_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcement_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcement_views ENABLE ROW LEVEL SECURITY;

-- RLS Policies for announcements
CREATE POLICY "Everyone can view active announcements" 
  ON public.announcements 
  FOR SELECT 
  USING (status = 'active' AND expires_at > now());

CREATE POLICY "Users can view their own announcements" 
  ON public.announcements 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create announcements" 
  ON public.announcements 
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own announcements" 
  ON public.announcements 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own announcements" 
  ON public.announcements 
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all announcements" 
  ON public.announcements 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- RLS Policies for favorites
CREATE POLICY "Users can manage their own favorites" 
  ON public.announcement_favorites 
  FOR ALL 
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for views
CREATE POLICY "Everyone can insert views" 
  ON public.announcement_views 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Admins can view all views" 
  ON public.announcement_views 
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- Indexes
CREATE INDEX idx_announcements_user_id ON public.announcements(user_id);
CREATE INDEX idx_announcements_category_id ON public.announcements(category_id);
CREATE INDEX idx_announcements_status ON public.announcements(status);
CREATE INDEX idx_announcements_wilaya ON public.announcements(wilaya);
CREATE INDEX idx_announcements_price ON public.announcements(price);
CREATE INDEX idx_announcements_created_at ON public.announcements(created_at DESC);
CREATE INDEX idx_announcements_expires_at ON public.announcements(expires_at);
CREATE INDEX idx_announcements_urgent ON public.announcements(is_urgent) WHERE is_urgent = true;

CREATE INDEX idx_favorites_user_id ON public.announcement_favorites(user_id);
CREATE INDEX idx_favorites_announcement_id ON public.announcement_favorites(announcement_id);

CREATE INDEX idx_views_announcement_id ON public.announcement_views(announcement_id);
CREATE INDEX idx_views_viewed_at ON public.announcement_views(viewed_at DESC);

-- Functions to update timestamps
CREATE OR REPLACE FUNCTION public.update_announcements_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW
  EXECUTE FUNCTION public.update_announcements_updated_at();

-- Function to increment view count
CREATE OR REPLACE FUNCTION public.increment_view_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET view_count = view_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;

-- Insert first admin user (you'll need to update this with actual user ID)
-- This should be done manually after the first user registers
-- INSERT INTO public.user_roles (user_id, role, granted_by) 
-- VALUES ('USER_UUID_HERE', 'admin', 'USER_UUID_HERE');