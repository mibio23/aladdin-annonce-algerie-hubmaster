-- Create announcements table to replace advertising_banners
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(12, 2),
  currency TEXT DEFAULT 'DZD',
  condition announcement_condition DEFAULT 'bon_etat',
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  subcategory_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wilaya TEXT NOT NULL,
  commune TEXT,
  address TEXT,
  phone_number TEXT,
  email TEXT,
  images TEXT[], -- Array of image URLs
  is_urgent BOOLEAN DEFAULT false,
  is_negotiable BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  contact_count INTEGER DEFAULT 0,
  status announcement_status DEFAULT 'active',
  expires_at TIMESTAMPTZ DEFAULT (now() + INTERVAL '30 days'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Product details
  brand TEXT,
  model TEXT,
  color TEXT,
  dimensions TEXT,
  weight TEXT,
  purchase_year INTEGER,
  
  -- History and condition
  has_invoice BOOLEAN DEFAULT false,
  warranty_duration TEXT,
  included_accessories TEXT[],
  selling_reason TEXT,
  
  -- Price and negotiation
  cash_discount NUMERIC(5, 2),
  exchange_possible BOOLEAN DEFAULT false,
  original_price NUMERIC(12, 2),
  
  -- Logistics and delivery
  delivery_available BOOLEAN DEFAULT false,
  delivery_areas TEXT[],
  delivery_fees NUMERIC(8, 2),
  delivery_location_name TEXT,
  packaging_info TEXT,
  availability_date DATE,
  
  -- Visuals and documentation
  product_video TEXT,
  detail_photos TEXT[],
  documentation TEXT[]
);

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

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

-- Indexes for performance
CREATE INDEX idx_announcements_user_id ON public.announcements(user_id);
CREATE INDEX idx_announcements_category_id ON public.announcements(category_id);
CREATE INDEX idx_announcements_subcategory_id ON public.announcements(subcategory_id);
CREATE INDEX idx_announcements_status ON public.announcements(status);
CREATE INDEX idx_announcements_wilaya ON public.announcements(wilaya);
CREATE INDEX idx_announcements_price ON public.announcements(price);
CREATE INDEX idx_announcements_created_at ON public.announcements(created_at DESC);
CREATE INDEX idx_announcements_expires_at ON public.announcements(expires_at);
CREATE INDEX idx_announcements_urgent ON public.announcements(is_urgent) WHERE is_urgent = true;
CREATE INDEX idx_announcements_featured ON public.announcements(is_featured) WHERE is_featured = true;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_announcements_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
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

-- Function to increment contact count
CREATE OR REPLACE FUNCTION public.increment_contact_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET contact_count = contact_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;
