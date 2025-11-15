// Script pour tester la connexion à la base de données et vérifier les catégories
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testCategories() {
  console.log('Test de connexion à Supabase...');
  
  try {
    // Test 1: Vérifier la connexion
    const { data: connectionTest, error: connectionError } = await supabase
      .from('categories')
      .select('count')
      .limit(1);
    
    if (connectionError) {
      console.error('Erreur de connexion:', connectionError);
      return;
    }
    
    console.log('✅ Connexion réussie');
    
    // Test 2: Vérifier les catégories brutes
    const { data: rawCategories, error: rawError } = await supabase
      .from('categories')
      .select('*')
      .limit(50);
    
    if (rawError) {
      console.error('Erreur lors de la récupération des catégories brutes:', rawError);
      return;
    }
    
    console.log(`📊 Nombre total de catégories: ${rawCategories.length}`);
    console.log('Catégories brutes:', rawCategories);
    
    // Test 3: Vérifier les traductions
    const { data: translations, error: translationsError } = await supabase
      .from('category_translations')
      .select('*');
    
    if (translationsError) {
      console.error('Erreur lors de la récupération des traductions:', translationsError);
    } else {
      console.log(`📊 Nombre de traductions: ${translations.length}`);
    }
    
    // Test 4: Vérifier la vue categories_with_translations
    const { data: viewData, error: viewError } = await supabase
      .from('categories_with_translations')
      .select('*')
      .eq('language_code', 'fr')
      .order('sort_order');
    
    if (viewError) {
      console.error('Erreur lors de la récupération de la vue:', viewError);
    } else {
      console.log(`📊 Nombre d'éléments dans la vue (fr): ${viewData.length}`);
      console.log('Vue categories_with_translations:', viewData);
    }
    
    // Test 5: Analyser la hiérarchie
    if (rawCategories && rawCategories.length > 0) {
      const rootCategories = rawCategories.filter(c => !c.parent_id);
      const subCategories = rawCategories.filter(c => c.parent_id);
      const subSubCategories = rawCategories.filter(c => {
        const parent = rawCategories.find(p => p.id === c.parent_id);
        return parent && parent.parent_id;
      });
      
      console.log(`📊 Catégories racine: ${rootCategories.length}`);
      console.log(`📊 Sous-catégories: ${subCategories.length}`);
      console.log(`📊 Sous-sous-catégories: ${subSubCategories.length}`);
      
      // Afficher la structure hiérarchique
      rootCategories.forEach(root => {
        console.log(`\n📁 ${root.name || root.slug}`);
        const children = subCategories.filter(sub => sub.parent_id === root.id);
        children.forEach(child => {
          console.log(`  📂 ${child.name || child.slug}`);
          const grandChildren = subSubCategories.filter(sub => sub.parent_id === child.id);
          grandChildren.forEach(gc => {
            console.log(`    📄 ${gc.name || gc.slug}`);
          });
        });
      });
    }
    
  } catch (error) {
    console.error('Erreur inattendue:', error);
  }
}

testCategories();