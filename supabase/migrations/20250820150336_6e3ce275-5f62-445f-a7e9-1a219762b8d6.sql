-- Add gender field to profiles table
ALTER TABLE public.profiles 
ADD COLUMN gender text CHECK (gender IN ('homme', 'femme', 'autre')) DEFAULT 'autre';