-- ========================================
-- Nettoyage complet des politiques RLS pour announcements
-- ========================================

-- D'abord, listons toutes les politiques existantes
SELECT policyname, 'EXISTING' as status 
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'announcements';

-- Supprimons manuellement chaque politique connue
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'announcements'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.announcements', policy_record.policyname);
        RAISE NOTICE 'Policy % dropped', policy_record.policyname;
    END LOOP;
END $$;

-- Vérifions que toutes les politiques ont été supprimées
SELECT policyname, 'AFTER DROP' as status 
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'announcements';

-- Recréons uniquement les politiques nécessaires
-- 1. Lecture publique pour les annonces actives
CREATE POLICY "Public can view active announcements" 
ON public.announcements 
FOR SELECT 
TO public
USING (status = 'active' AND expires_at > now());

-- 2. Insertion pour les utilisateurs authentifiés
CREATE POLICY "Users can insert announcements" 
ON public.announcements 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 3. Mise à jour des propres annonces
CREATE POLICY "Users can update announcements" 
ON public.announcements 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 4. Suppression des propres annonces
CREATE POLICY "Users can delete announcements" 
ON public.announcements 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- 5. Lecture des propres annonces pour les utilisateurs authentifiés
CREATE POLICY "Users can view own announcements" 
ON public.announcements 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Vérification finale des nouvelles politiques
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename = 'announcements'
ORDER BY policyname;