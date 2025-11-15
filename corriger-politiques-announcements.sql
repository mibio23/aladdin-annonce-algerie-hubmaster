-- ========================================
-- Correction des politiques RLS pour announcements
-- ========================================

-- Supprimer toutes les politiques existantes pour éviter les conflits
DROP POLICY IF EXISTS "Public can view active announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can delete own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can insert own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can update own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users see own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Utilisateurs peuvent créer leurs annonces" ON public.announcements;
DROP POLICY IF EXISTS "Utilisateurs peuvent modifier leurs annonces" ON public.announcements;
DROP POLICY IF EXISTS "Utilisateurs peuvent supprimer leurs annonces" ON public.announcements;

-- Recréer les politiques correctes

-- 1. Lecture publique pour les annonces actives
CREATE POLICY "Public can view active announcements" 
ON public.announcements 
FOR SELECT 
TO public
USING (status = 'active' AND expires_at > now());

-- 2. Lecture des propres annonces pour les utilisateurs authentifiés
CREATE POLICY "Users can view their own announcements" 
ON public.announcements 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- 3. Insertion pour les utilisateurs authentifiés (uniquement leurs propres annonces)
CREATE POLICY "Users can insert their own announcements" 
ON public.announcements 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 4. Mise à jour des propres annonces
CREATE POLICY "Users can update their own announcements" 
ON public.announcements 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. Suppression des propres annonces
CREATE POLICY "Users can delete their own announcements" 
ON public.announcements 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Vérification des politiques créées
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename = 'announcements'
ORDER BY policyname;