-- ========================================
-- Ajout de la colonne images manquante
-- ========================================
-- Exécutez ce script directement dans l'éditeur SQL du dashboard Supabase

-- Vérifier si la colonne images existe déjà
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name='announcements' 
        AND column_name='images'
        AND table_schema='public'
    ) THEN
        -- Ajouter la colonne images si elle n'existe pas
        ALTER TABLE public.announcements 
        ADD COLUMN images TEXT[];
        
        RAISE NOTICE 'Colonne images ajoutée avec succès à la table announcements';
    ELSE
        RAISE NOTICE 'La colonne images existe déjà dans la table announcements';
    END IF;
END $$;

-- Vérifier si la colonne detail_photos existe déjà
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name='announcements' 
        AND column_name='detail_photos'
        AND table_schema='public'
    ) THEN
        -- Ajouter la colonne detail_photos si elle n'existe pas
        ALTER TABLE public.announcements 
        ADD COLUMN detail_photos TEXT[];
        
        RAISE NOTICE 'Colonne detail_photos ajoutée avec succès à la table announcements';
    ELSE
        RAISE NOTICE 'La colonne detail_photos existe déjà dans la table announcements';
    END IF;
END $$;

-- Mettre à jour le cache du schéma pour PostgREST
NOTIFY pgrst, 'reload schema';

-- Vérification finale
SELECT 
    column_name, 
    data_type, 
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'announcements' 
AND table_schema = 'public'
AND column_name IN ('images', 'detail_photos')
ORDER BY column_name;