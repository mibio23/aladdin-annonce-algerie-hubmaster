-- Create site_settings table to manage payment configurations
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can view and modify settings
CREATE POLICY "Authenticated users can view settings" 
ON public.site_settings 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update settings" 
ON public.site_settings 
FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert settings" 
ON public.site_settings 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Insert default payment settings
INSERT INTO public.site_settings (setting_key, setting_value, is_active) VALUES
('stripe_payments', '{"enabled": false, "test_mode": true, "currency": "dzd", "featured_ad_price": 500, "urgent_ad_price": 300}', false),
('payment_methods', '{"cib_card": true, "cash_on_delivery": true, "bank_transfer": false}', true);

-- Create trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();