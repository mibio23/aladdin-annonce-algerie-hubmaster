-- ========================================
-- Corrections Finales pour Supabase
-- ========================================
-- Exécutez ce script directement dans l'éditeur SQL du dashboard Supabase

-- 1. Corriger la politique d'insertion pour announcements
DROP POLICY IF EXISTS "Users can insert announcements" ON public.announcements;
CREATE POLICY "Users can insert announcements" 
ON public.announcements 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 2. Créer le bucket announcement-images s'il n'existe pas
INSERT INTO storage.buckets (id, name, public) 
VALUES ('announcement-images', 'announcement-images', true) 
ON CONFLICT (id) DO NOTHING;

-- 3. Configurer les politiques pour le bucket
DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;

CREATE POLICY "Anyone can view images" ON storage.objects
FOR SELECT USING (bucket_id = 'announcement-images');

CREATE POLICY "Authenticated users can upload" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'announcement-images' 
  AND auth.role() = 'authenticated'
);

-- 4. Créer les triggers manquants pour updated_at
DROP TRIGGER IF EXISTS update_announcements_updated_at ON public.announcements;
CREATE TRIGGER update_announcements_updated_at
    BEFORE UPDATE ON public.announcements
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 5. Vérifier que la fonction update_updated_at_column existe
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 6. Vérification finale
SELECT 'Tables' as type, COUNT(*) as count FROM information_schema.tables WHERE table_schema = 'public'
UNION ALL
SELECT 'Policies for announcements', COUNT(*) FROM pg_policies WHERE tablename = 'announcements'
UNION ALL
SELECT 'Buckets', COUNT(*) FROM storage.buckets
UNION ALL
SELECT 'Functions', COUNT(*) FROM information_schema.routines WHERE routine_schema = 'public' AND routine_type = 'FUNCTION';

-- 7. Test rapide d'insertion (commenté pour éviter les erreurs)
-- INSERT INTO public.announcements (title, description, user_id, category_id, status) 
-- VALUES ('Test', 'Test description', '00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'active');