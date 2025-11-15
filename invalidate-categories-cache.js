// Script pour invalider le cache des catégories
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Charger les variables d'environnement depuis le fichier .env
const envContent = fs.readFileSync('.env', 'utf8');
const envLines = envContent.split('\n');
envLines.forEach(line => {
  const match = line.match(/^VITE_(.+)="(.+)"$/);
  if (match) {
    process.env[match[1]] = match[2];
  }
});

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement Supabase manquantes');
  process.exit(1);
}

// Initialisation du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function invalidateCategoriesCache() {
  console.log('🔄 Invalidaton du cache des catégories...\n');
  
  try {
    // Invalider le cache en supprimant et recréant les entrées
    const { error: deleteError } = await supabase
      .from('categories')
      .update({ updated_at: new Date().toISOString() })
      .neq('id', 0); // Mettre à jour toutes les catégories
    
    if (deleteError) {
      console.error('❌ Erreur lors de l\'invalidation du cache:', deleteError);
    } else {
      console.log('✅ Cache des catégories invalidé avec succès');
      console.log('\n📋 Prochaines étapes:');
      console.log('1. Actualisez la page de votre application');
      console.log('2. La catégorie "Sacs & Bagages" devrait maintenant apparaître dans le menu');
      console.log('3. Si elle n\'apparaît toujours, videz le cache de votre navigateur');
    }
    
  } catch (error) {
    console.error('❌ Erreur critique lors de l\'invalidation du cache:', error);
  }
}

// Exécuter l'invalidation
invalidateCategoriesCache();