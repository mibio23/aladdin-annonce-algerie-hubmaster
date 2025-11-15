
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
// Script simple pour tester après la migration manuelle
import { createClient } from '@supabase/supabase-js';

safeLog('🧪 Test après migration manuelle - Site Aladdin\n');

// Configuration avec vos identifiants
const SUPABASE_URL = "https://smsvybphkdxzvgawzoru.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testApresMigration() {
  try {
    safeLog('📊 Test des tables après migration...\n');
    
    // Test 1: Vérifier la table categories
    console.log('1️⃣ Table categories:');
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .limit(5);
    
    if (catError) {
      console.log(`   ❌ Erreur: ${catError.message}`);
    } else {
      console.log(`   ✅ ${categories.length} catégories trouvées`);
      categories.forEach((cat, i) => {
        safeLog(`      ${i+1}. ${cat.slug}`);
      });
    }
    
    // Test 2: Vérifier la table category_translations
    console.log('\n2️⃣ Table category_translations:');
    const { data: translations, error: transError } = await supabase
      .from('category_translations')
      .select('*')
      .limit(5);
    
    if (transError) {
      safeLog(`   ❌ Erreur: ${transError.message}`);
      console.log(`   💡 La table n'existe peut-être pas encore. Appliquez la migration SQL.`);
    } else {
      console.log(`   ✅ ${translations.length} traductions trouvées`);
      translations.forEach((trans, i) => {
        safeLog(`      ${i+1}. ${trans.name} (${trans.language_code})`);
      });
    }
    
    // Test 3: Vérifier la table category_images
    console.log('\n3️⃣ Table category_images:');
    const { data: images, error: imgError } = await supabase
      .from('category_images')
      .select('*')
      .limit(3);
    
    if (imgError) {
      safeLog(`   ❌ Erreur: ${imgError.message}`);
      console.log(`   💡 La table n'existe peut-être pas encore. Appliquez la migration SQL.`);
    } else {
      console.log(`   ✅ ${images.length} images trouvées`);
      images.forEach((img, i) => {
        safeLog(`      ${i+1}. ${img.image_url}`);
      });
    }
    
    // Test 4: Vérifier la table category_tags
    console.log('\n4️⃣ Table category_tags:');
    const { data: tags, error: tagError } = await supabase
      .from('category_tags')
      .select('*')
      .limit(3);
    
    if (tagError) {
      safeLog(`   ❌ Erreur: ${tagError.message}`);
      console.log(`   💡 La table n'existe peut-être pas encore. Appliquez la migration SQL.`);
    } else {
      console.log(`   ✅ ${tags.length} tags trouvés`);
      tags.forEach((tag, i) => {
        safeLog(`      ${i+1}. ${tag.tag}`);
      });
    }
    
    // Test 5: Vérifier la vue categories_with_translations
    console.log('\n5️⃣ Vue categories_with_translations:');
    try {
      const { data: viewData, error: viewError } = await supabase
        .from('categories_with_translations')
        .select('*')
        .limit(3);
      
      if (viewError) {
        safeLog(`   ❌ Erreur: ${viewError.message}`);
        console.log(`   💡 La vue n'existe peut-être pas encore. Appliquez la migration SQL.`);
      } else {
        console.log(`   ✅ ${viewData.length} résultats dans la vue`);
        viewData.forEach((item, i) => {
          safeLog(`      ${i+1}. ${item.name || item.slug}`);
        });
      }
    } catch (err) {
      console.log(`   ❌ Erreur: ${err.message}`);
      console.log(`   💡 La vue n'existe peut-être pas encore. Appliquez la migration SQL.`);
    }
    
    // Résumé
    console.log('\n' + '='.repeat(50));
    console.log('📋 RÉSUMÉ DU TEST');
    
    const tables = [
      { name: 'categories', data: categories, error: catError },
      { name: 'category_translations', data: translations, error: transError },
      { name: 'category_images', data: images, error: imgError },
      { name: 'category_tags', data: tags, error: tagError }
    ];
    
    let okTables = 0;
    tables.forEach(table => {
      if (!table.error && table.data) {
        okTables++;
        safeLog(`   ✅ ${table.name}: OK (${table.data.length} enregistrements)`);
      } else {
        console.log(`   ❌ ${table.name}: À créer (appliquez la migration SQL)`);
      }
    });
    
    console.log(`\n📊 Tables fonctionnelles: ${okTables}/4`);
    
    if (okTables === 4) {
      console.log('\n🎉 PARFAIT ! Toutes les tables sont créées.');
      console.log('✅ Vous pouvez maintenant démarrer l\'application:');
      console.log('   npm run dev');
    } else {
      console.log('\n⚠️  TABLES MANQUANTES !');
      console.log('📋 Suivez le guide: GUIDE_SIMPLE_SUPABASE.md');
      console.log('📝 Copiez le code SQL dans l\'éditeur Supabase');
      console.log('▶️  Cliquez sur "Run" pour exécuter');
      console.log('✅ Revenez tester avec: node test-apres-migration.js');
    }
    
    console.log('\n🔗 Dashboard Supabase:');
    console.log(`   https://supabase.com/dashboard/project/smsvybphkdxzvgawzoru`);
    
    console.log('='.repeat(50));
    
    return okTables === 4;
    
  } catch (error) {
    console.error('💥 Erreur critique:', error.message);
    return false;
  }
}

// Exécuter le test
testApresMigration()
  .then(success => {
    if (success) {
      safeLog('\n✅ Test réussi ! Migration complète.');
    } else {
      console.log('\n❌ Test échoué ! Migration incomplète.');
    }
  })
  .catch(err => {
    console.error('\n💥 Erreur inattendue:', err);
  });