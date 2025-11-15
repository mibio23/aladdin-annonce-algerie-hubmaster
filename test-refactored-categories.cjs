const fs = require('fs');
const path = require('path');

// Importer les catégories refactorisées
const { refactoredCategories } = require('./src/data/categories/refactoredCategories.ts');

// Fonction pour afficher les catégories avec leur contenu
function displayRefactoredCategories() {
  console.log('=== TEST DES CATÉGORIES REFACTORISÉES ===\n');
  
  // Statistiques
  const totalCategories = refactoredCategories.length;
  const totalSubCategories = refactoredCategories.reduce((acc, cat) => acc + (cat.subcategories?.length || 0), 0);
  const totalSubSubCategories = refactoredCategories.reduce((acc, cat) => {
    return acc + (cat.subcategories?.reduce((subAcc, sub) => subAcc + (sub.subcategories?.length || 0), 0) || 0);
  }, 0);
  
  console.log(`📊 STATISTIQUES GLOBALES :`);
  console.log(`========================`);
  console.log(`✅ Total catégories principales: ${totalCategories}`);
  console.log(`📂 Total sous-catégories: ${totalSubCategories}`);
  console.log(`📄 Total sous-sous-catégories: ${totalSubSubCategories}`);
  
  // Vérification spécifique pour l'Électroménager
  const electroMenagerCategory = refactoredCategories.find(cat => cat.id === 'electromenager');
  if (electroMenagerCategory) {
    console.log(`\n🔍 VÉRIFICATION CATÉGORIE ÉLECTROMÉNAGER :`);
    console.log(`==========================================`);
    console.log(`✅ Catégorie principale: ${electroMenagerCategory.name}`);
    console.log(`📂 Sous-catégories: ${electroMenagerCategory.subcategories?.length || 0}`);
    
    if (electroMenagerCategory.subcategories) {
      electroMenagerCategory.subcategories.forEach(sub => {
        console.log(`   - ${sub.name}: ${sub.subcategories?.length || 0} sous-sous-catégories`);
      });
    }
  }
  
  // Vérifier que l'Électroménager n'est plus dans Immobilier
  const immobilierCategory = refactoredCategories.find(cat => cat.id === 'immobilier');
  if (immobilierCategory) {
    const electroInImmobilier = immobilierCategory.subcategories?.find(sub => 
      sub.name.toLowerCase().includes('électroménager') || sub.name.toLowerCase().includes('electromenager')
    );
    
    if (electroInImmobilier) {
      console.log(`\n⚠️  ATTENTION: L'Électroménager est encore dans Immobilier!`);
    } else {
      console.log(`\n✅ L'Électroménager a bien été retiré de Immobilier & Maison`);
    }
  }
  
  // Afficher les catégories principales
  console.log(`\n📋 CATÉGORIES PRINCIPALES :`);
  console.log(`===============================\n`);
  
  refactoredCategories.forEach((category, index) => {
    console.log(`${index + 1}. 📁 ${category.name} (${category.slug})`);
    console.log(`   🔑 ID: ${category.id}`);
    console.log(`   🎨 Icône: ${category.icon}`);
    console.log(`   📊 Niveau: ${category.level} | Ordre: ${category.sortOrder}`);
    console.log(`   ✅ Actif: ${category.isActive}`);
    
    if (category.subcategories && category.subcategories.length > 0) {
      console.log(`   📂 Sous-catégories (${category.subcategories.length}):`);
      category.subcategories.forEach((sub, subIndex) => {
        console.log(`      ${subIndex + 1}. 📁 ${sub.name} (${sub.slug})`);
        
        if (sub.subcategories && sub.subcategories.length > 0) {
          console.log(`         📂 Sous-sous-catégories (${sub.subcategories.length}):`);
          sub.subcategories.forEach((subSub, subSubIndex) => {
            console.log(`            ${subSubIndex + 1}. 📄 ${subSub.name} (${subSub.slug})`);
          });
        }
      });
    }
    
    console.log('---');
  });
}

// Exporter les catégories pour utilisation
function exportToFile() {
  const exportData = {
    categories: refactoredCategories,
    metadata: {
      totalCategories: refactoredCategories.length,
      exportDate: new Date().toISOString(),
      version: '2.0.0-refactored'
    }
  };
  
  fs.writeFileSync('refactored-categories-export.json', JSON.stringify(exportData, null, 2));
  console.log('\n📁 Fichier d\'export créé: refactored-categories-export.json');
}

// Exécuter les fonctions
if (require.main === module) {
  displayRefactoredCategories();
  exportToFile();
}

module.exports = { refactoredCategories, displayRefactoredCategories, exportToFile };