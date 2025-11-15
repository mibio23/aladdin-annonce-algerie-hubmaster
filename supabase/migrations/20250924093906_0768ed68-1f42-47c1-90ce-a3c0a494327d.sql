-- Fix Supabase security issues detected by linter

-- Set search_path for existing functions that don't have it
ALTER FUNCTION public.update_search_updated_at_column() SET search_path = 'public';
ALTER FUNCTION public.rate_limit_contact_access(text, text) SET search_path = 'public';
ALTER FUNCTION public.normalize_search_query(text) SET search_path = 'public';
ALTER FUNCTION public.clean_search_query_trigger() SET search_path = 'public';
ALTER FUNCTION public.request_contact_access(uuid) SET search_path = 'public';
ALTER FUNCTION public.get_announcement_with_protected_contact(uuid) SET search_path = 'public';
ALTER FUNCTION public.rate_limit_search_queries(text) SET search_path = 'public';
ALTER FUNCTION public.validate_search_session(text) SET search_path = 'public';
ALTER FUNCTION public.sanitize_search_query(text) SET search_path = 'public';
ALTER FUNCTION public.validate_user_input(text, integer) SET search_path = 'public';
ALTER FUNCTION public.validate_password_strength(text) SET search_path = 'public';
ALTER FUNCTION public.get_search_statistics(integer) SET search_path = 'public';
ALTER FUNCTION public.update_announcement_search_vector() SET search_path = 'public';
ALTER FUNCTION public.update_updated_at_column() SET search_path = 'public';
ALTER FUNCTION public.generate_shop_slug(text) SET search_path = 'public';
ALTER FUNCTION public.auto_generate_shop_slug() SET search_path = 'public';
ALTER FUNCTION public.cleanup_old_tracking_data() SET search_path = 'public';
ALTER FUNCTION public.log_security_event(uuid, text, text, text, text, jsonb) SET search_path = 'public';
ALTER FUNCTION public.enforce_data_retention() SET search_path = 'public';
ALTER FUNCTION public.set_current_session(text) SET search_path = 'public';
ALTER FUNCTION public.get_current_user_id() SET search_path = 'public';
ALTER FUNCTION public.mask_phone_number(text) SET search_path = 'public';
ALTER FUNCTION public.get_public_profile_data(uuid) SET search_path = 'public';
ALTER FUNCTION public.get_masked_profile_contact(uuid) SET search_path = 'public';
ALTER FUNCTION public.get_current_session() SET search_path = 'public';
ALTER FUNCTION public.calculate_trending_score(uuid) SET search_path = 'public';
ALTER FUNCTION public.get_safe_profile_data(uuid) SET search_path = 'public';
ALTER FUNCTION public.prevent_profile_lock_bypass() SET search_path = 'public';
ALTER FUNCTION public.log_profile_modifications() SET search_path = 'public';
ALTER FUNCTION public.secure_profile_monitoring() SET search_path = 'public';

-- Move extensions from public schema to extensions schema (if possible)
-- This is usually done by Supabase administrators, so we just document it
COMMENT ON EXTENSION pg_trgm IS 'Extension should be moved to extensions schema by Supabase support';
COMMENT ON EXTENSION unaccent IS 'Extension should be moved to extensions schema by Supabase support';

-- Add security audit trigger for all profile operations
DROP TRIGGER IF EXISTS secure_profile_monitoring_trigger ON public.profiles;
CREATE TRIGGER secure_profile_monitoring_trigger
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.secure_profile_monitoring();

-- Ensure RLS is enabled on critical tables
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.search_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.security_audit_log ENABLE ROW LEVEL SECURITY;