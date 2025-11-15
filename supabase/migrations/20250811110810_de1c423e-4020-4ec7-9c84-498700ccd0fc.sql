-- Add end_at to advertising_banners for scheduled stop
ALTER TABLE public.advertising_banners
ADD COLUMN IF NOT EXISTS end_at TIMESTAMPTZ NULL;

-- Optional index to speed up active queries
CREATE INDEX IF NOT EXISTS idx_advertising_banners_end_at ON public.advertising_banners (end_at);

-- Note: RLS already allows public SELECT on active banners; filtering by end_at will be done in queries.
