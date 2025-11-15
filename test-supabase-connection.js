
// Fonctions utilitaires pour éviter les erreurs cycliques
function safeStringify(obj, indent = 2) {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular Reference]';
      }
      cache.add(value);
    }
    return value;
  }, indent);
}

function safeLog(description, obj) {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      const safeObj = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(`  ❌ Erreur de log: ${error.message}`);
  }
}
// Script de test de connexion Supabase pour valider le fonctionnement
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Charger les variables d'environnement
config();

safeLog('🧪 Test de connexion Supabase - Site Aladdin\n');

// Configuration avec variables d'environnement pour la sécurité
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://smsvybphkdxzvgawzoru.supabase.co";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g";

// Vérification des variables d'environnement
if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement Supabase manquantes');
  console.error('📋 Veuillez configurer:');
  console.error('   VITE_SUPABASE_URL=votre_url_supabase');
  console.error('   VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase');
  process.exit(1);
}

// Initialisation du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Test de connexion et récupération des données
async function testConnection() {
  try {
    safeLog('📊 Test de connexion à la base de données...');
    
    // Test 1: Vérifier les tables
    console.log('\n🔍 Vérification des tables:');
    const tables = ['categories', 'category_translations', 'category_images', 'category_tags'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        if (error && error.code === 'PGRST116') {
          safeLog(`  ❌ Table '${table}' n'existe pas`);
        } else {
          console.log(`  ✅ Table '${table}' accessible`);
        }
      } catch (err) {
        console.log(`  ❌ Table '${table}' inaccessible`);
      }
    }
    
    // Test 2: Récupérer les catégories
    console.log('\n📝 Récupération des catégories:');
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');
    
    if (catError) {
      console.log(`  ❌ Erreur: ${catError.message}`);
    } else {
      console.log(`  ✅ ${categories.length} catégories trouvées`);
      categories.forEach((cat, index) => {
        safeLog(`    ${index + 1}. ${cat.slug} (${cat.icon_name})`);
      });
    }
    
    // Test 3: Récupérer les traductions
    console.log('\n🌍 Récupération des traductions:');
    const { data: translations, error: transError } = await supabase
      .from('category_translations')
      .select('*')
      .eq('language_code', 'fr');
    
    if (transError) {
      console.log(`  ❌ Erreur: ${transError.message}`);
    } else {
      console.log(`  ✅ ${translations.length} traductions françaises trouvées`);
      translations.slice(0, 3).forEach((trans, index) => {
        safeLog(`    ${index + 1}. ${trans.name} (${trans.language_code})`);
      });
      if (translations.length > 3) {
        console.log(`    ... et ${translations.length - 3} autres`);
      }
    }
    
    // Test 4: Test de la vue optimisée
    console.log('\n🔍 Test de la vue optimisée:');
    try {
      const { data: viewData, error: viewError } = await supabase
        .from('categories_with_translations')
        .select('*')
        .eq('language_code', 'fr')
        .eq('is_active', true)
        .order('sort_order');
      
      if (viewError) {
        console.log(`  ❌ Erreur vue: ${viewError.message}`);
      } else {
        console.log(`  ✅ Vue fonctionnelle: ${viewData.length} catégories`);
        viewData.slice(0, 3).forEach((cat, index) => {
          safeLog(`    ${index + 1}. ${cat.name} (${cat.language_code})`);
        });
      }
    } catch (err) {
      console.log(`  ❌ Vue non accessible: ${err.message}`);
    }
    
    // Test 5: Performance test
    console.log('\n⚡ Test de performance:');
    const startTime = Date.now();
    
    const { data: perfData, error: perfError } = await supabase
      .from('categories_with_translations')
      .select('*')
      .eq('language_code', 'fr')
      .eq('is_active', true);
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    if (perfError) {
      safeLog(`  ❌ Erreur performance: ${perfError.message}`);
    } else {
      console.log(`  ✅ Requête en ${duration}ms (${perfData.length} résultats)`);
      if (duration < 100) {
        console.log(`  🚀 Performance excellente!`);
      } else if (duration < 500) {
        console.log(`  ✅ Performance bonne`);
      } else {
        console.log(`  ⚠️  Performance à améliorer`);
      }
    }
    
    console.log('\n🎉 Test de connexion terminé!');
    console.log('\n📊 Résumé:');
    console.log(`  • URL: ${SUPABASE_URL}`);
    console.log(`  • Catégories: ${categories?.length || 0}`);
    console.log(`  • Traductions: ${translations?.length || 0}`);
    console.log(`  • Performance: ${duration}ms`);
    
    return true;
  } catch (error) {
    console.error('💥 Erreur critique:', error.message);
    return false;
  }
}

// Exécuter le test
testConnection()
  .then(success => {
    if (success) {
      safeLog('\n✅ Test réussi! La connexion Supabase est fonctionnelle.');
    } else {
      console.log('\n❌ Test échoué! Vérifiez la configuration.');
    }
  })
  .catch(err => {
    console.error('\n💥 Erreur inattendue:', err);
  });