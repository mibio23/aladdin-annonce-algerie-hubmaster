import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Charger les variables d'environnement
config();

console.log('🔧 Ajout des colonnes manquantes - Site Aladdin\n');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement Supabase manquantes');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function addMissingColumns() {
  try {
    console.log('📊 Ajout des colonnes manquantes à la table categories...');
    
    // SQL pour ajouter les colonnes manquantes
    const alterTableSQL = `
      ALTER TABLE categories 
      ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0,
      ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false,
      ADD COLUMN IF NOT EXISTS description TEXT;
    `;
    
    // Note: Nous ne pouvons pas exécuter ALTER TABLE directement via le client JS
    // Donc nous allons utiliser une approche différente
    
    console.log('⚠️  Note: L\'ajout de colonnes nécessite l\'exécution SQL manuelle');
    console.log('📋 SQL à exécuter dans le dashboard Supabase:');
    console.log('\n```sql');
    console.log(alterTableSQL);
    console.log('```\n');
    
    // Testons si les colonnes existent déjà
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, slug, sort_order, is_featured, description')
        .limit(1);
      
      if (error && error.message.includes('column') && error.message.includes('does not exist')) {
        console.log('❌ Colonnes manquantes détectées');
        console.log('📋 Veuillez exécuter le SQL ci-dessus dans le dashboard Supabase');
        return false;
      } else if (error) {
        console.log(`❌ Autre erreur: ${error.message}`);
        return false;
      } else {
        console.log('✅ Colonnes déjà présentes ou ajoutées avec succès');
        if (data && data.length > 0) {
          console.log('📝 Exemple de catégorie:');
          console.log(`   ID: ${data[0].id}`);
          console.log(`   Slug: ${data[0].slug}`);
          console.log(`   Sort Order: ${data[0].sort_order || 'NULL'}`);
          console.log(`   Is Featured: ${data[0].is_featured || 'NULL'}`);
          console.log(`   Description: ${data[0].description || 'NULL'}`);
        }
        return true;
      }
    } catch (err) {
      console.log(`❌ Erreur lors du test: ${err.message}`);
      return false;
    }
    
  } catch (error) {
    console.error('💥 Erreur critique:', error.message);
    return false;
  }
}

// Instructions pour le dashboard Supabase
function showDashboardInstructions() {
  console.log('\n📋 Instructions pour le dashboard Supabase:');
  console.log('1. Allez sur: https://supabase.com/dashboard/project/smsvybphkdxzvgawzoru');
  console.log('2. Cliquez sur "SQL Editor" dans le menu de gauche');
  console.log('3. Copiez et collez le SQL ci-dessus:');
  console.log('4. Cliquez sur "Run" pour exécuter');
  console.log('5. Revenez et exécutez: node add-missing-columns.js');
}

// Exécuter la fonction
addMissingColumns()
  .then(success => {
    if (success) {
      console.log('\n✅ Vérification des colonnes terminée avec succès!');
    } else {
      console.log('\n❌ Colonnes manquantes - Action requise');
      showDashboardInstructions();
    }
  })
  .catch(error => {
    console.error('\n💥 Erreur inattendue:', error);
    showDashboardInstructions();
  });