// Script pour ajouter la catégorie "Sacs & Bagages" à Supabase
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
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
  console.log('Veuillez définir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

// Initialisation du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Définition de la catégorie "Sacs & Bagages"
const sacsBagagesCategory = {
  id: uuidv4(),
  slug: 'sacs-bagages',
  name: 'Sacs & Bagages',
  icon: 'ShoppingBag',
  level: 0,
  sort_order: 27, // Position après "Mode & Accessoires" (qui est à la position 26)
  is_active: true,
  is_featured: false,
  description: 'Sacs, bagages et maroquinerie pour tous les styles et besoins'
};

// Sous-catégories
const subcategories = [
  // Sacs Femme
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-femme',
    name: 'Sacs Femme',
    level: 1,
    sort_order: 0,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-main-femme',
    name: 'Sacs à Main',
    level: 2,
    sort_order: 0,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-bandouliere-femme',
    name: 'Sacs Bandoulière',
    level: 2,
    sort_order: 1,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-dos-femme',
    name: 'Sacs à Dos',
    level: 2,
    sort_order: 2,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'pochettes-femme',
    name: 'Pochettes',
    level: 2,
    sort_order: 3,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-soiree-femme',
    name: 'Sacs de Soirée',
    level: 2,
    sort_order: 4,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-shopping-femme',
    name: 'Sacs Shopping',
    level: 2,
    sort_order: 5,
    is_active: true,
    is_featured: false
  },
  
  // Sacs Homme
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-homme',
    name: 'Sacs Homme',
    level: 1,
    sort_order: 1,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-main-homme',
    name: 'Sacs à Main',
    level: 2,
    sort_order: 6,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-bandouliere-homme',
    name: 'Sacs Bandoulière',
    level: 2,
    sort_order: 7,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-dos-homme',
    name: 'Sacs à Dos',
    level: 2,
    sort_order: 8,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-sport-homme',
    name: 'Sacs de Sport',
    level: 2,
    sort_order: 9,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-voyage-homme',
    name: 'Sacs de Voyage',
    level: 2,
    sort_order: 10,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'portefeuilles-homme',
    name: 'Portefeuilles',
    level: 2,
    sort_order: 11,
    is_active: true,
    is_featured: false
  },
  
  // Bagages de Voyage
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'bagages-voyage',
    name: 'Bagages de Voyage',
    level: 1,
    sort_order: 2,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'valises',
    name: 'Valises',
    level: 2,
    sort_order: 12,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'valises-cabine',
    name: 'Valises Cabine',
    level: 2,
    sort_order: 13,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-voyage',
    name: 'Sacs de Voyage',
    level: 2,
    sort_order: 14,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-sport',
    name: 'Sacs de Sport',
    level: 2,
    sort_order: 15,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'housses-voyage',
    name: 'Housses de Voyage',
    level: 2,
    sort_order: 16,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'accessoires-voyage',
    name: 'Accessoires de Voyage',
    level: 2,
    sort_order: 17,
    is_active: true,
    is_featured: false
  },
  
  // Sacs Enfants
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-enfants',
    name: 'Sacs Enfants',
    level: 1,
    sort_order: 3,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-dos-ecole',
    name: 'Sacs à Dos École',
    level: 2,
    sort_order: 18,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-bandouliere-enfants',
    name: 'Sacs Bandoulière',
    level: 2,
    sort_order: 19,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-gouter',
    name: 'Sacs Goûter',
    level: 2,
    sort_order: 20,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'sacs-sport-enfants',
    name: 'Sacs de Sport',
    level: 2,
    sort_order: 21,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'cartables',
    name: 'Cartables',
    level: 2,
    sort_order: 22,
    is_active: true,
    is_featured: false
  },
  
  // Maroquinerie
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'maroquinerie',
    name: 'Maroquinerie',
    level: 1,
    sort_order: 4,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'portefeuilles',
    name: 'Portefeuilles',
    level: 2,
    sort_order: 23,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'portefeuilles-homme-maroquinerie',
    name: 'Portefeuilles Homme',
    level: 2,
    sort_order: 24,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'portefeuilles-femme',
    name: 'Portefeuilles Femme',
    level: 2,
    sort_order: 25,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'ceintures',
    name: 'Ceintures',
    level: 2,
    sort_order: 26,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'gants',
    name: 'Gants',
    level: 2,
    sort_order: 27,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'etuis-carte',
    name: 'Étuis à Carte',
    level: 2,
    sort_order: 28,
    is_active: true,
    is_featured: false
  },
  {
    id: uuidv4(),
    parent_id: sacsBagagesCategory.id,
    slug: 'trousse-maquillage',
    name: 'Trousse à Maquillage',
    level: 2,
    sort_order: 29,
    is_active: true,
    is_featured: false
  }
];

// Fonction pour créer les traductions
async function createTranslations(categoryId, name, description = '') {
  const languages = ['fr', 'ar', 'en', 'de', 'es'];
  
  for (const lang of languages) {
    try {
      await supabase
        .from('category_translations')
        .insert({
          category_id: categoryId,
          language_code: lang,
          name: name,
          description: description
        });
      
      console.log(`✅ Traduction ${lang} créée pour ${name}`);
    } catch (error) {
      console.error(`❌ Erreur lors de la création de la traduction ${lang}:`, error);
    }
  }
}

// Fonction principale
async function addSacsBagagesToSupabase() {
  console.log('🚀 Ajout de la catégorie "Sacs & Bagages" à Supabase...\n');
  
  try {
    // Vérifier si la catégorie existe déjà
    const { data: existingCategory } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', 'sacs-bagages')
      .single();
    
    if (existingCategory) {
      console.log('⚠️  La catégorie "Sacs & Bagages" existe déjà dans Supabase');
      console.log('Suppression de l\'ancienne catégorie et de ses sous-catégories...');
      
      // Supprimer les traductions
      await supabase
        .from('category_translations')
        .delete()
        .eq('category_id', existingCategory.id);
      
      // Supprimer les sous-catégories
      await supabase
        .from('categories')
        .delete()
        .eq('parent_id', existingCategory.id);
      
      // Supprimer la catégorie principale
      await supabase
        .from('categories')
        .delete()
        .eq('id', existingCategory.id);
      
      console.log('✅ Ancienne catégorie supprimée');
    }
    
    // Créer la catégorie principale
    const { data: mainCategory, error: mainError } = await supabase
      .from('categories')
      .insert({
        slug: sacsBagagesCategory.slug,
        name: sacsBagagesCategory.name,
        icon: sacsBagagesCategory.icon,
        position_order: sacsBagagesCategory.sort_order,
        is_active: sacsBagagesCategory.is_active,
        description: sacsBagagesCategory.description
      })
      .select()
      .single();
    
    if (mainError) {
      console.error('❌ Erreur lors de la création de la catégorie principale:', mainError);
      return;
    }
    
    console.log(`✅ Catégorie principale créée: ${mainCategory.name} (${mainCategory.id})`);
    
    // Créer les traductions pour la catégorie principale
    await createTranslations(mainCategory.id, sacsBagagesCategory.name, sacsBagagesCategory.description);
    
    // Créer les sous-catégories
    for (const subcategory of subcategories) {
      const { data: createdSubcategory, error: subError } = await supabase
        .from('categories')
        .insert({
          slug: subcategory.slug,
          name: subcategory.name,
          parent_id: mainCategory.id, // Utiliser l'ID de la catégorie principale créée
          position_order: subcategory.sort_order,
          is_active: subcategory.is_active
        })
        .select()
        .single();
      
      if (subError) {
        console.error(`❌ Erreur lors de la création de la sous-catégorie ${subcategory.name}:`, subError);
      } else {
        console.log(`✅ Sous-catégorie créée: ${subcategory.name} (${createdSubcategory.id})`);
        
        // Créer les traductions pour la sous-catégorie
        await createTranslations(createdSubcategory.id, subcategory.name);
      }
      
      // Petite pause pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('\n🎉 Catégorie "Sacs & Bagages" ajoutée avec succès!');
    console.log('🔄 Veuillez rafraîchir le cache de votre application pour voir les changements.');
    
  } catch (error) {
    console.error('❌ Erreur critique lors de l\'ajout de la catégorie:', error);
  }
}

// Exécuter le script
addSacsBagagesToSupabase();