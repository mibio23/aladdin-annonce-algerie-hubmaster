// Script de test sécurisé pour éviter les erreurs "cyclic object value"
import { createClient } from '@supabase/supabase-js';

console.log('🧪 Test sécurisé Supabase - Site Aladdin\n');

// Configuration
const SUPABASE_URL = "https://smsvybphkdxzvgawzoru.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g";

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

// Test principal
async function runSafeTest() {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    console.log('📊 Test de connexion sécurisée...');
    
    // Test 1: Catégories
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .limit(5);
    
    if (catError) {
      console.log(`❌ Erreur catégories: ${catError.message}`);
    } else {
      console.log(`✅ ${categories.length} catégories trouvées`);
      categories.forEach((cat, i) => {
        console.log(`  ${i+1}. ${cat.slug}`);
      });
    }
    
    // Test 2: Traductions
    const { data: translations, error: transError } = await supabase
      .from('category_translations')
      .select('*')
      .eq('language_code', 'fr')
      .limit(3);
    
    if (transError) {
      console.log(`❌ Erreur traductions: ${transError.message}`);
    } else {
      console.log(`✅ ${translations.length} traductions trouvées`);
      translations.forEach((trans, i) => {
        console.log(`  ${i+1}. ${trans.name}`);
      });
    }
    
    console.log('\n✅ Test terminé sans erreur cyclique!');
    
  } catch (error) {
    console.error('💥 Erreur:', error.message);
  }
}

// Exécuter le test
runSafeTest();
