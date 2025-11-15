-- Activer les extensions nécessaires
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Créer le schéma public s'il n'existe pas
CREATE SCHEMA IF NOT EXISTS public;

-- Créer les types énumérés si nécessaire
DO $$ BEGIN
  CREATE TYPE announcement_condition AS ENUM ('neuf', 'tres_bon_etat', 'bon_etat', 'acceptable', 'usage');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE announcement_status AS ENUM ('active', 'sold', 'deleted', 'expired', 'pending');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
