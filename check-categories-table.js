// Script pour vérifier la structure de la table categories dans Supabase
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

async function checkCategoriesTable() {
  console.log('🔍 Vérification de la table categories...\n');
  
  try {
    // Vérifier si la table existe en essayant de récupérer une ligne
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('❌ Erreur lors de l\'accès à la table categories:', error);
      return;
    }
    
    console.log('✅ Table categories accessible');
    
    if (data && data.length > 0) {
      console.log('📋 Structure d\'une catégorie existante:');
      console.log(JSON.stringify(data[0], null, 2));
    } else {
      console.log('ℹ️  La table categories est vide');
    }
    
    // Essayer de récupérer les informations sur les colonnes
    const { data: columnsData, error: columnsError } = await supabase
      .rpc('get_table_columns', { table_name: 'categories' });
    
    if (columnsError) {
      console.warn('⚠️  Impossible de récupérer les informations sur les colonnes:', columnsError.message);
    } else {
      console.log('\n📋 Colonnes de la table categories:');
      console.log(columnsData);
    }
    
  } catch (error) {
    console.error('❌ Erreur critique:', error);
  }
}

// Exécuter la vérification
checkCategoriesTable();