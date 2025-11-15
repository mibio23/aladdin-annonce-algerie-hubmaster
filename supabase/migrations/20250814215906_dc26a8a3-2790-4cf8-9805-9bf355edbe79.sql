-- Create storage policies for file uploads
CREATE POLICY "Users can upload their own announcement images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'announcement-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view announcement images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'announcement-images');

CREATE POLICY "Users can update their own announcement images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'announcement-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own announcement images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'announcement-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Avatar storage policies
CREATE POLICY "Users can upload their own avatar" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Avatar images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'avatars');

CREATE POLICY "Users can update their own avatar" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Booking documents policies
CREATE POLICY "Users can upload their own booking documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own booking documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Banner images policies (public access)
CREATE POLICY "Banner images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'banner-images');

CREATE POLICY "Admins can manage banner images" 
ON storage.objects 
FOR ALL 
USING (bucket_id = 'banner-images' AND (
  SELECT role FROM public.profiles WHERE id = auth.uid()
) = 'admin');

-- Create table for webhook logs
CREATE TABLE public.webhook_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  webhook_type TEXT NOT NULL,
  event_type TEXT NOT NULL,
  stripe_event_id TEXT,
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT false,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS for webhook logs
ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;

-- Admin policy for webhook logs
CREATE POLICY "Admins can view webhook logs" 
ON public.webhook_logs 
FOR SELECT 
USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');