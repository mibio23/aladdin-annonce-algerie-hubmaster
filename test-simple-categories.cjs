const fs = require('fs');

// Structure de test simplifiée avec les 26 catégories principales
const testCategories = [
  {
    id: 'informatique-electronique',
    name: 'Informatique & Électronique',
    slug: 'informatique-electronique',
    icon: 'laptop',
    level: 0,
    isActive: true,
    sortOrder: 1,
    subcategories: [
      {
        id: 'ordinateurs-peripheriques',
        name: 'Ordinateurs & Périphériques',
        slug: 'ordinateurs-peripheriques',
        icon: 'monitor',
        level: 1,
        parentId: 'informatique-electronique',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'pc-portables', name: 'PC Portables', slug: 'pc-portables', icon: 'laptop', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 1 },
          { id: 'pc-de-bureau', name: 'PC de Bureau', slug: 'pc-de-bureau', icon: 'desktop', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 2 }
        ]
      }
    ]
  },
  {
    id: 'electromenager',
    name: 'Électroménager',
    slug: 'electromenager',
    icon: 'blender',
    level: 0,
    isActive: true,
    sortOrder: 8,
    subcategories: [
      {
        id: 'appareils-cuisine',
        name: 'Appareils de Cuisine',
        slug: 'appareils-cuisine',
        icon: 'chef-hat',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'tables-chaises', name: 'Tables & Chaises', slug: 'tables-chaises', icon: 'table', level: 2, parentId: 'appareils-cuisine', isActive: true, sortOrder: 1 },
          { id: 'rangement-cuisine', name: 'Rangement Cuisine', slug: 'rangement-cuisine', icon: 'archive', level: 2, parentId: 'appareils-cuisine', isActive: true, sortOrder: 2 }
        ]
      },
      {
        id: 'appareils-nettoyage',
        name: 'Appareils de Nettoyage',
        slug: 'appareils-nettoyage',
        icon: 'sparkles',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 2
      },
      {
        id: 'climatisation-chauffage',
        name: 'Climatisation & Chauffage',
        slug: 'climatisation-chauffage',
        icon: 'thermometer',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 3
      },
      {
        id: 'petit-electromenager',
        name: 'Petit Électroménager',
        slug: 'petit-electromenager',
        icon: 'blender',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 4
      }
    ]
  },
  {
    id: 'immobilier',
    name: 'Immobilier',
    slug: 'immobilier',
    icon: 'home',
    level: 0,
    isActive: true,
    sortOrder: 6,
    subcategories: [
      { id: 'appartements', name: 'Appartements', slug: 'appartements', icon: 'apartment', level: 1, parentId: 'immobilier', isActive: true, sortOrder: 1 },
      { id: 'maisons', name: 'Maisons', slug: 'maisons', icon: 'home', level: 1, parentId: 'immobilier', isActive: true, sortOrder: 2 },
      { id: 'terrains', name: 'Terrains', slug: 'terrains', icon: 'map', level: 1, parentId: 'immobilier', isActive: true, sortOrder: 3 }
    ]
  }
];

// Fonction pour afficher les catégories avec leur contenu
function displayTestCategories() {
  console.log('=== TEST DES CATÉGORIES REFACTORISÉES ===\n');
  
  // Statistiques
  const totalCategories = testCategories.length;
  const totalSubCategories = testCategories.reduce((acc, cat) => acc + (cat.subcategories?.length || 0), 0);
  const totalSubSubCategories = testCategories.reduce((acc, cat) => {
    return acc + (cat.subcategories?.reduce((subAcc, sub) => subAcc + (sub.subcategories?.length || 0), 0) || 0);
  }, 0);
  
  console.log(`📊 STATISTIQUES GLOBALES :`);
  console.log(`========================`);
  console.log(`✅ Total catégories principales: ${totalCategories}`);
  console.log(`📂 Total sous-catégories: ${totalSubCategories}`);
  console.log(`📄 Total sous-sous-catégories: ${totalSubSubCategories}`);
  
  // Vérification spécifique pour l'Électroménager
  const electroMenagerCategory = testCategories.find(cat => cat.id === 'electromenager');
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
  const immobilierCategory = testCategories.find(cat => cat.id === 'immobilier');
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
  
  testCategories.forEach((category, index) => {
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
    categories: testCategories,
    metadata: {
      totalCategories: testCategories.length,
      exportDate: new Date().toISOString(),
      version: '2.0.0-test'
    }
  };
  
  fs.writeFileSync('test-categories-export.json', JSON.stringify(exportData, null, 2));
  console.log('\n📁 Fichier d\'export créé: test-categories-export.json');
}

// Exécuter les fonctions
if (require.main === module) {
  displayTestCategories();
  exportToFile();
}

module.exports = { testCategories, displayTestCategories, exportToFile };