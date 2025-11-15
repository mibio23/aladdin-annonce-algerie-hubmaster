// Script d'extraction automatique de toutes les catégories du projet Aladdin
// Exécuter avec: node extract-categories-database.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Extraction de la base de données des catégories - Aladdin Annonce Algérie Hub\n');

// Base de données des catégories en mémoire
const categoriesDatabase = {
  metadata: {
    extractionDate: new Date().toISOString(),
    version: '1.0.0',
    totalCategories: 0,
    totalSubcategories: 0,
    totalSubSubcategories: 0,
    languages: ['fr', 'ar', 'en', 'de', 'es']
  },
  groups: {},
  categories: {},
  statistics: {},
  structure: {}
};

// Fonction pour analyser un fichier de catégories
function analyzeCategoryFile(filePath, groupName = '') {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  Fichier non trouvé: ${filePath}`);
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extraire les catégories du contenu
    const categoryMatches = content.match(/export const \w+.*?=\s*{[\s\S]*?}/g) || [];
    const categoryMatches2 = content.match(/const \w+Category.*?=\s*{[\s\S]*?}/g) || [];
    const categoryMatches3 = content.match(/\{[\s]*id:[\s]*"[^"]+",[\s\S]*?subcategories:[\s]*\[[\s\S]*?\][\s]*\}/g) || [];
    
    const allMatches = [...categoryMatches, ...categoryMatches2, ...categoryMatches3];
    const categories = [];
    
    allMatches.forEach(match => {
      try {
        // Extraire l'ID
        const idMatch = match.match(/id:[\s]*"([^"]+)"/);
        const id = idMatch ? idMatch[1] : '';
        
        // Extraire le nom
        const nameMatch = match.match(/name:[\s]*"([^"]+)"/);
        const name = nameMatch ? nameMatch[1] : '';
        
        // Extraire le slug
        const slugMatch = match.match(/slug:[\s]*"([^"]+)"/);
        const slug = slugMatch ? slugMatch[1] : '';
        
        // Extraire les sous-catégories
        const subcategoriesMatch = match.match(/subcategories:[\s]*\[([\s\S]*)\]/);
        let subcategories = [];
        
        if (subcategoriesMatch) {
          const subcategoriesContent = subcategoriesMatch[1];
          const subMatches = subcategoriesContent.match(/\{[\s]*id:[\s]*"[^"]+",[\s\S]*?\}/g) || [];
          
          subMatches.forEach(subMatch => {
            const subIdMatch = subMatch.match(/id:[\s]*"([^"]+)"/);
            const subNameMatch = subMatch.match(/name:[\s]*"([^"]+)"/);
            const subSlugMatch = subMatch.match(/slug:[\s]*"([^"]+)"/);
            
            if (subIdMatch && subNameMatch) {
              const subcategory = {
                id: subIdMatch[1],
                name: subNameMatch[1],
                slug: subSlugMatch ? subSlugMatch[1] : subIdMatch[1],
                subcategories: []
              };
              
              // Extraire les sous-sous-catégories
              const subSubcategoriesMatch = subMatch.match(/subcategories:[\s]*\[([\s\S]*)\]/);
              if (subSubcategoriesMatch) {
                const subSubcategoriesContent = subSubcategoriesMatch[1];
                const subSubMatches = subSubcategoriesContent.match(/\{[\s]*id:[\s]*"[^"]+",[\s\S]*?\}/g) || [];
                
                subSubMatches.forEach(subSubMatch => {
                  const subSubIdMatch = subSubMatch.match(/id:[\s]*"([^"]+)"/);
                  const subSubNameMatch = subSubMatch.match(/name:[\s]*"([^"]+)"/);
                  const subSubSlugMatch = subSubMatch.match(/slug:[\s]*"([^"]+)"/);
                  
                  if (subSubIdMatch && subSubNameMatch) {
                    subcategory.subcategories.push({
                      id: subSubIdMatch[1],
                      name: subSubNameMatch[1],
                      slug: subSubSlugMatch ? subSubSlugMatch[1] : subSubIdMatch[1]
                    });
                  }
                });
              }
              
              subcategories.push(subcategory);
            }
          });
        }
        
        if (id && name) {
          categories.push({
            id,
            name,
            slug,
            subcategories,
            group: groupName,
            filePath
          });
        }
      } catch (error) {
        console.log(`   ⚠️  Erreur d'analyse d'une catégorie: ${error.message}`);
      }
    });
    
    return categories;
  } catch (error) {
    console.log(`   ❌ Erreur lors de l'analyse du fichier ${filePath}: ${error.message}`);
    return null;
  }
}

// Analyser tous les groupes de catégories
console.log('📂 Analyse des fichiers de catégories...\n');

const groupsToAnalyze = [
  { name: 'Groupe 1 - Technologie & Maison', path: 'src/data/categories/newCategoryGroup1.tsx' },
  { name: 'Groupe 2 - Vie Courante & Services', path: 'src/data/categories/newCategoryGroup2.tsx' },
  { name: 'Groupe 3 - Loisirs & Collections', path: 'src/data/categories/newCategoryGroup3.tsx' },
  { name: 'Groupe 4 - Métiers & Réparateurs', path: 'src/data/categories/newCategoryGroup4.tsx' },
  { name: 'Groupe 5 - Services Divers', path: 'src/data/categories/newCategoryGroup5.tsx' },
  { name: 'Groupe 6 - Spécialisés', path: 'src/data/categories/newCategoryGroup6.tsx' },
  { name: 'Groupe 7 - Finances & Éducation', path: 'src/data/categories/newCategoryGroup7.tsx' },
  { name: 'Groupe 8 - Sport & Plein Air', path: 'src/data/categories/newCategoryGroup8.tsx' },
  { name: 'Catégories Spéciales', path: 'src/data/menuStructureData.tsx' }
];

let totalCategories = 0;
let totalSubcategories = 0;
let totalSubSubcategories = 0;

groupsToAnalyze.forEach(group => {
  console.log(`🔍 Analyse: ${group.name}`);
  const categories = analyzeCategoryFile(group.path, group.name);
  
  if (categories && categories.length > 0) {
    categoriesDatabase.groups[group.name] = categories;
    
    categories.forEach(category => {
      categoriesDatabase.categories[category.id] = category;
      totalCategories++;
      totalSubcategories += category.subcategories.length;
      
      category.subcategories.forEach(subcategory => {
        totalSubSubcategories += subcategory.subcategories.length;
      });
    });
    
    console.log(`   ✅ ${categories.length} catégories trouvées`);
  } else {
    console.log(`   ⚠️  Aucune catégorie trouvée`);
  }
});

// Analyser les sous-dossiers
const subdirectoriesToAnalyze = [
  'src/data/categories/group1',
  'src/data/categories/newCategoryGroup2',
  'src/data/categories/newCategoryGroup3',
  'src/data/categories/newCategoryGroup4',
  'src/data/categories/newCategoryGroup5',
  'src/data/categories/newCategoryGroup6',
  'src/data/categories/newCategoryGroup7',
  'src/data/categories/newCategoryGroup8',
  'src/data/categories/megaMenuStructures/arabic',
  'src/data/categories/megaMenuStructures/english',
  'src/data/categories/megaMenuStructures/german',
  'src/data/categories/megaMenuStructures/spanish'
];

console.log('\n🔍 Analyse des sous-dossiers...');

subdirectoriesToAnalyze.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.tsx'));
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const categories = analyzeCategoryFile(filePath, dir);
      
      if (categories && categories.length > 0) {
        categories.forEach(category => {
          if (!categoriesDatabase.categories[category.id]) {
            categoriesDatabase.categories[category.id] = category;
            totalCategories++;
            totalSubcategories += category.subcategories.length;
            
            category.subcategories.forEach(subcategory => {
              totalSubSubcategories += subcategory.subcategories.length;
            });
          }
        });
      }
    });
  }
});

// Mettre à jour les métadonnées
categoriesDatabase.metadata.totalCategories = totalCategories;
categoriesDatabase.metadata.totalSubcategories = totalSubcategories;
categoriesDatabase.metadata.totalSubSubcategories = totalSubSubcategories;

// Générer les statistiques
categoriesDatabase.statistics = {
  categoriesByGroup: {},
  subcategoriesByCategory: {},
  depthDistribution: {
    level1: totalCategories,
    level2: totalSubcategories,
    level3: totalSubSubcategories
  },
  mostComplexCategories: []
};

Object.keys(categoriesDatabase.groups).forEach(groupName => {
  const categories = categoriesDatabase.groups[groupName];
  categoriesDatabase.statistics.categoriesByGroup[groupName] = categories.length;
  
  categories.forEach(category => {
    categoriesDatabase.statistics.subcategoriesByCategory[category.id] = category.subcategories.length;
    
    if (category.subcategories.length > 5) {
      categoriesDatabase.statistics.mostComplexCategories.push({
        id: category.id,
        name: category.name,
        subcategoriesCount: category.subcategories.length,
        group: groupName
      });
    }
  });
});

// Trier les catégories les plus complexes
categoriesDatabase.statistics.mostComplexCategories.sort((a, b) => b.subcategoriesCount - a.subcategoriesCount);

// Générer la structure hiérarchique
categoriesDatabase.structure = {
  hierarchy: {},
  flatList: []
};

Object.keys(categoriesDatabase.categories).forEach(categoryId => {
  const category = categoriesDatabase.categories[categoryId];
  categoriesDatabase.structure.hierarchy[categoryId] = {
    name: category.name,
    slug: category.slug,
    subcategories: category.subcategories.map(sub => ({
      id: sub.id,
      name: sub.name,
      slug: sub.slug,
      subcategories: sub.subcategories.map(subSub => ({
        id: subSub.id,
        name: subSub.name,
        slug: subSub.slug
      }))
    }))
  };
  
  categoriesDatabase.structure.flatList.push({
    id: category.id,
    name: category.name,
    slug: category.slug,
    type: 'category',
    group: category.group,
    subcategoriesCount: category.subcategories.length
  });
  
  category.subcategories.forEach(sub => {
    categoriesDatabase.structure.flatList.push({
      id: sub.id,
      name: sub.name,
      slug: sub.slug,
      type: 'subcategory',
      parent: category.id,
      subcategoriesCount: sub.subcategories.length
    });
    
    sub.subcategories.forEach(subSub => {
      categoriesDatabase.structure.flatList.push({
        id: subSub.id,
        name: subSub.name,
        slug: subSub.slug,
        type: 'subsubcategory',
        parent: sub.id
      });
    });
  });
});

// Sauvegarder la base de données
const databasePath = 'categories-database.json';
fs.writeFileSync(databasePath, JSON.stringify(categoriesDatabase, null, 2));

console.log('\n📊 Statistiques d\'extraction:');
console.log(`   📁 Catégories principales: ${totalCategories}`);
console.log(`   📂 Sous-catégories: ${totalSubcategories}`);
console.log(`   📋 Sous-sous-catégories: ${totalSubSubcategories}`);
console.log(`   📈 Total éléments: ${totalCategories + totalSubcategories + totalSubSubcategories}`);
console.log(`   🌐 Langues supportées: ${categoriesDatabase.metadata.languages.length}`);
console.log(`   📂 Groupes analysés: ${Object.keys(categoriesDatabase.groups).length}`);

console.log('\n📋 Catégories les plus complexes:');
categoriesDatabase.statistics.mostComplexCategories.slice(0, 5).forEach((cat, index) => {
  console.log(`   ${index + 1}. ${cat.name} (${cat.subcategoriesCount} sous-catégories)`);
});

console.log('\n💾 Base de données sauvegardée:');
console.log(`   📄 Fichier: ${databasePath}`);
console.log(`   📏 Taille: ${(fs.statSync(databasePath).size / 1024).toFixed(2)} KB`);

console.log('\n🔧 Utilisation de la base de données:');
console.log('   // Importer la base de données');
console.log('   import categoriesDatabase from \'./categories-database.json\';');
console.log('');
console.log('   // Accéder à toutes les catégories');
console.log('   const allCategories = Object.values(categoriesDatabase.categories);');
console.log('');
console.log('   // Accéder à une catégorie spécifique');
console.log('   const category = categoriesDatabase.categories[\'immobilier\'];');
console.log('');
console.log('   // Accéder à la structure plate');
console.log('   const flatList = categoriesDatabase.structure.flatList;');
console.log('');
console.log('   // Accéder aux statistiques');
console.log('   const stats = categoriesDatabase.statistics;');

console.log('\n✨ Extraction terminée avec succès !');
console.log('🎯 La base de données est prête pour les futures mises à jour !');