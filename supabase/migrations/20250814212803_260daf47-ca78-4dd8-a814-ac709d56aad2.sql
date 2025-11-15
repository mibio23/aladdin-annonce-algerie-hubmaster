-- Create bookings table for reservation system
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  announcement_id UUID NOT NULL,
  booking_date TIMESTAMPTZ NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  guest_count INTEGER DEFAULT 1,
  special_requests TEXT,
  contact_phone TEXT,
  contact_email TEXT,
  booking_reference TEXT UNIQUE NOT NULL DEFAULT substring(md5(random()::text) from 1 for 8),
  total_amount DECIMAL(10,2),
  currency TEXT DEFAULT 'DZD',
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings
CREATE POLICY "Users can view their own bookings" 
ON public.bookings 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings" 
ON public.bookings 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can cancel their own bookings" 
ON public.bookings 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX idx_bookings_announcement_id ON public.bookings(announcement_id);
CREATE INDEX idx_bookings_date ON public.bookings(booking_date);
CREATE INDEX idx_bookings_status ON public.bookings(status);
CREATE INDEX idx_bookings_reference ON public.bookings(booking_reference);

-- Create trigger for updated_at
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for booking-related files
INSERT INTO storage.buckets (id, name, public) VALUES ('booking-documents', 'booking-documents', false);

-- Create storage policies for booking documents
CREATE POLICY "Users can upload their own booking documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own booking documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own booking documents" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own booking documents" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'booking-documents' AND auth.uid()::text = (storage.foldername(name))[1]);