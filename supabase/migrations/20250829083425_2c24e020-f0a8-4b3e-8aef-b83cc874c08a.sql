-- Simple data retention cleanup function without scheduling
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
  
  -- Log the cleanup event
  INSERT INTO public.security_audit_log (
    action_type, resource_type, metadata
  ) VALUES (
    'data_cleanup', 'system', 
    jsonb_build_object('cleanup_date', now(), 'automated', true)
  );
END;
$$;