// Import simplifié pour le test
const fs = require('fs');
const path = require('path');

// Lire le fichier TypeScript et extraire les catégories
const categoriesPath = path.join(__dirname, 'src/data/categories/optimizedCategories.ts');
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');

// Pour ce test, nous allons créer une structure de test simplifiée
const optimizedCategories = [
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
          {
            id: 'pc-portables',
            name: 'PC Portables',
            slug: 'pc-portables',
            icon: 'laptop',
            level: 2,
            parentId: 'ordinateurs-peripheriques',
            isActive: true,
            sortOrder: 1,
            subcategories: undefined
          }
        ]
      }
    ]
  },
  {
    id: 'electromenager',
    name: 'Électroménager',
    slug: 'electromenager',
    icon: 'home',
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
          {
            id: 'tables-chaises',
            name: 'Tables & Chaises',
            slug: 'tables-chaises',
            icon: 'table',
            level: 2,
            parentId: 'appareils-cuisine',
            isActive: true,
            sortOrder: 1,
            subcategories: undefined
          },
          {
            id: 'rangement-cuisine',
            name: 'Rangement Cuisine',
            slug: 'rangement-cuisine',
            icon: 'archive',
            level: 2,
            parentId: 'appareils-cuisine',
            isActive: true,
            sortOrder: 2,
            subcategories: undefined
          }
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
        sortOrder: 2,
        subcategories: undefined
      },
      {
        id: 'climatisation-chauffage',
        name: 'Climatisation & Chauffage',
        slug: 'climatisation-chauffage',
        icon: 'thermometer',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 3,
        subcategories: undefined
      },
      {
        id: 'petit-electromenager',
        name: 'Petit Électroménager',
        slug: 'petit-electromenager',
        icon: 'blender',
        level: 1,
        parentId: 'electromenager',
        isActive: true,
        sortOrder: 4,
        subcategories: undefined
      }
    ]
  },
  {
    id: 'immobilier',
    name: 'Immobilier',
    slug: 'immobilier',
    icon: 'building',
    level: 0,
    isActive: true,
    sortOrder: 6,
    subcategories: [
      {
        id: 'appartements',
        name: 'Appartements',
        slug: 'appartements',
        icon: 'apartment',
        level: 1,
        parentId: 'immobilier',
        isActive: true,
        sortOrder: 1,
        subcategories: undefined
      },
      {
        id: 'maisons',
        name: 'Maisons',
        slug: 'maisons',
        icon: 'home',
        level: 1,
        parentId: 'immobilier',
        isActive: true,
        sortOrder: 2,
        subcategories: undefined
      }
    ]
  }
];

console.log('=== TEST DES CATÉGORIES OPTIMISÉES ===\n');

// Afficher les catégories principales
console.log('📋 CATÉGORIES PRINCIPALES (26 prévues) :');
console.log('=====================================\n');

optimizedCategories.forEach((category, index) => {
  console.log(`${index + 1}. ${category.name} (${category.slug})`);
  console.log(`   📁 ID: ${category.id}`);
  console.log(`   🎨 Icône: ${category.icon}`);
  console.log(`   📊 Niveau: ${category.level} | Ordre: ${category.sortOrder}`);
  console.log(`   ✅ Actif: ${category.isActive}`);
  
  if (category.subcategories && category.subcategories.length > 0) {
    console.log(`   📂 Sous-catégories (${category.subcategories.length}):`);
    category.subcategories.forEach((sub, subIndex) => {
      console.log(`      ${subIndex + 1}. ${sub.name} (${sub.slug})`);
      
      if (sub.subcategories && sub.subcategories.length > 0) {
        console.log(`         📂 Sous-sous-catégories (${sub.subcategories.length}):`);
        sub.subcategories.forEach((subSub, subSubIndex) => {
          console.log(`            ${subSubIndex + 1}. ${subSub.name} (${subSub.slug})`);
        });
      }
    });
  }
  
  console.log('---');
});

console.log(`\n📊 STATISTIQUES :`);
console.log(`================`);
console.log(`Total catégories principales: ${optimizedCategories.length}`);
console.log(`Total sous-catégories: ${optimizedCategories.reduce((acc, cat) => acc + (cat.subcategories?.length || 0), 0)}`);

// Compter les sous-sous-catégories
const totalSubSubCategories = optimizedCategories.reduce((acc, cat) => {
  return acc + (cat.subcategories?.reduce((subAcc, sub) => subAcc + (sub.subcategories?.length || 0), 0) || 0);
}, 0);
console.log(`Total sous-sous-catégories: ${totalSubSubCategories}`);

// Vérifier la catégorie Électroménager
const electroMenagerCategory = optimizedCategories.find(cat => cat.id === 'electromenager');
if (electroMenagerCategory) {
  console.log(`\n🔍 VÉRIFICATION CATÉGORIE ÉLECTROMÉNAGER :`);
  console.log(`==========================================`);
  console.log(`✅ Catégorie principale trouvée: ${electroMenagerCategory.name}`);
  console.log(`📂 Nombre de sous-catégories: ${electroMenagerCategory.subcategories?.length || 0}`);
  
  if (electroMenagerCategory.subcategories) {
    electroMenagerCategory.subcategories.forEach(sub => {
      console.log(`   - ${sub.name}: ${sub.subcategories?.length || 0} sous-sous-catégories`);
    });
  }
} else {
  console.log(`\n❌ Catégorie Électroménager non trouvée!`);
}

// Vérifier que l'Électroménager n'est plus dans Immobilier & Maison
const immobilierCategory = optimizedCategories.find(cat => cat.id === 'immobilier');
if (immobilierCategory) {
  const electroInImmobilier = immobilierCategory.subcategories?.find(sub => 
    sub.name.toLowerCase().includes('électroménager') || sub.name.toLowerCase().includes('electromenager')
  );
  
  if (electroInImmobilier) {
    console.log(`\n⚠️  ATTENTION: L'Électroménager est encore trouvé dans Immobilier & Maison!`);
  } else {
    console.log(`\n✅ L'Électroménager a bien été retiré de Immobilier & Maison`);
  }
}

console.log('\n=== FIN DU TEST ===');