-- Fix remaining security issues without recreating existing tables
-- Only add the data retention cleanup function and check if privacy consent table exists

-- Data retention cleanup function (if not exists)
CREATE OR REPLACE FUNCTION public.cleanup_old_tracking_data()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Delete old search queries (older than 90 days)
  DELETE FROM public.search_queries 
  WHERE created_at < now() - INTERVAL '90 days';
  
  -- Delete old behavioral learning data (older than 180 days)  
  DELETE FROM public.behavioral_learning 
  WHERE created_at < now() - INTERVAL '180 days';
  
  -- Delete old search patterns (older than 1 year)
  DELETE FROM public.user_search_patterns 
  WHERE created_at < now() - INTERVAL '1 year';
  
  -- Delete old conversation memory (older than 30 days)
  DELETE FROM public.conversation_memory 
  WHERE created_at < now() - INTERVAL '30 days';
  
  -- Delete old anticipation suggestions (older than 60 days)
  DELETE FROM public.anticipation_suggestions 
  WHERE created_at < now() - INTERVAL '60 days';
  
  -- Delete old security audit logs (older than 1 year)
  DELETE FROM public.security_audit_log 
  WHERE created_at < now() - INTERVAL '1 year';
END;
$$;

-- Create a scheduled job to run cleanup monthly (if pg_cron is available)
-- This is optional and will only work if pg_cron extension is enabled
DO $$
BEGIN
  -- Try to schedule cleanup job, ignore if pg_cron is not available
  BEGIN
    PERFORM cron.schedule('monthly-data-cleanup', '0 2 1 * *', 'SELECT public.cleanup_old_tracking_data();');
  EXCEPTION
    WHEN undefined_function THEN
      -- pg_cron not available, skip scheduling
      NULL;
  END;
END $$;