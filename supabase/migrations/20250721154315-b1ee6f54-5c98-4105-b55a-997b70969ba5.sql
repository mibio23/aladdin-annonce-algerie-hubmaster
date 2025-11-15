
-- Create table for advertising banners/carousel slides
CREATE TABLE public.advertising_banners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  button_text TEXT NOT NULL DEFAULT 'En savoir plus',
  image_url TEXT,
  link_url TEXT,
  background_gradient TEXT NOT NULL DEFAULT 'from-blue-400 via-cyan-400 to-teal-500',
  icon_emoji TEXT DEFAULT '🎯',
  position_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create table for banner translations
CREATE TABLE public.advertising_banner_translations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  banner_id UUID NOT NULL REFERENCES public.advertising_banners(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL CHECK (language_code IN ('fr', 'ar')),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  button_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(banner_id, language_code)
);

-- Enable RLS
ALTER TABLE public.advertising_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advertising_banner_translations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for advertising_banners
CREATE POLICY "Everyone can view active banners" 
  ON public.advertising_banners 
  FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all banners" 
  ON public.advertising_banners 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create banners" 
  ON public.advertising_banners 
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Authenticated users can update banners" 
  ON public.advertising_banners 
  FOR UPDATE 
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete banners" 
  ON public.advertising_banners 
  FOR DELETE 
  TO authenticated
  USING (true);

-- RLS Policies for advertising_banner_translations
CREATE POLICY "Everyone can view banner translations" 
  ON public.advertising_banner_translations 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage banner translations" 
  ON public.advertising_banner_translations 
  FOR ALL 
  TO authenticated
  USING (true);

-- Create storage bucket for banner images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('banner-images', 'banner-images', true);

-- Storage policies for banner images
CREATE POLICY "Anyone can view banner images" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'banner-images');

CREATE POLICY "Authenticated users can upload banner images" 
  ON storage.objects 
  FOR INSERT 
  TO authenticated
  WITH CHECK (bucket_id = 'banner-images');

CREATE POLICY "Authenticated users can update banner images" 
  ON storage.objects 
  FOR UPDATE 
  TO authenticated
  USING (bucket_id = 'banner-images');

CREATE POLICY "Authenticated users can delete banner images" 
  ON storage.objects 
  FOR DELETE 
  TO authenticated
  USING (bucket_id = 'banner-images');

-- Insert some sample data
INSERT INTO public.advertising_banners (title, subtitle, description, button_text, background_gradient, icon_emoji, position_order, link_url) VALUES
('Restaurant El Bahia', 'Cuisine Traditionnelle Algérienne', 'Savourez l''authenticité de la cuisine algérienne dans un cadre chaleureux. Livraison disponible sur Alger.', 'Découvrir', 'from-orange-400 via-red-400 to-pink-500', '🍽️', 1, '#'),
('Boutique Mode Yasmine', 'Vêtements Femmes & Accessoires', 'Découvrez notre collection de vêtements féminins tendance. Nouvelle collection automne-hiver disponible.', 'Découvrir', 'from-pink-400 via-purple-400 to-indigo-500', '👗', 2, '#'),
('Garage Auto Mechanic', 'Réparation & Entretien Automobile', 'Service complet pour votre véhicule : mécanique, carrosserie, pneus. 15 ans d''expérience.', 'Découvrir', 'from-blue-400 via-cyan-400 to-teal-500', '🔧', 3, '#'),
('Centre de Formation Digital', 'Formations Informatique & Digital', 'Maîtrisez les nouvelles technologies : développement web, design, marketing digital. Certifications reconnues.', 'Découvrir', 'from-emerald-400 via-green-400 to-teal-500', '💻', 4, '#');
