const fs = require('fs');
const path = require('path');

// Structure complète des 26 catégories principales optimisées
const completeCategories = [
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
          { id: 'pc-de-bureau', name: 'PC de Bureau', slug: 'pc-de-bureau', icon: 'desktop', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 2 },
          { id: 'macbooks-imac', name: 'MacBooks & iMac', slug: 'macbooks-imac', icon: 'apple', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 3 },
          { id: 'tablettes-ipad', name: 'Tablettes & iPad', slug: 'tablettes-ipad', icon: 'tablet', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 4 },
          { id: 'moniteurs-ecrans', name: 'Moniteurs & Écrans', slug: 'moniteurs-ecrans', icon: 'monitor', level: 2, parentId: 'ordinateurs-peripheriques', isActive: true, sortOrder: 5 }
        ]
      },
      {
        id: 'composants-informatique',
        name: 'Composants Informatique',
        slug: 'composants-informatique',
        icon: 'cpu',
        level: 1,
        parentId: 'informatique-electronique',
        isActive: true,
        sortOrder: 2,
        subcategories: [
          { id: 'cartes-mere', name: 'Cartes Mères', slug: 'cartes-mere', icon: 'microchip', level: 2, parentId: 'composants-informatique', isActive: true, sortOrder: 1 },
          { id: 'processeurs-cpu', name: 'Processeurs (CPU)', slug: 'processeurs-cpu', icon: 'cpu', level: 2, parentId: 'composants-informatique', isActive: true, sortOrder: 2 },
          { id: 'cartes-graphiques-gpu', name: 'Cartes Graphiques (GPU)', slug: 'cartes-graphiques-gpu', icon: 'gpu', level: 2, parentId: 'composants-informatique', isActive: true, sortOrder: 3 },
          { id: 'memoires-ram', name: 'Mémoires RAM', slug: 'memoires-ram', icon: 'memory', level: 2, parentId: 'composants-informatique', isActive: true, sortOrder: 4 }
        ]
      }
    ]
  },
  {
    id: 'image-son',
    name: 'Image & Son',
    slug: 'image-son',
    icon: 'camera',
    level: 0,
    isActive: true,
    sortOrder: 2,
    subcategories: [
      {
        id: 'appareils-photo',
        name: 'Appareils Photo',
        slug: 'appareils-photo',
        icon: 'camera',
        level: 1,
        parentId: 'image-son',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'appareils-photo-reflex', name: 'Appareils Photo Reflex', slug: 'appareils-photo-reflex', icon: 'camera', level: 2, parentId: 'appareils-photo', isActive: true, sortOrder: 1 },
          { id: 'appareils-photo-hybrides', name: 'Appareils Photo Hybrides', slug: 'appareils-photo-hybrides', icon: 'camera', level: 2, parentId: 'appareils-photo', isActive: true, sortOrder: 2 }
        ]
      },
      {
        id: 'audio-hifi',
        name: 'Audio & Hi-Fi',
        slug: 'audio-hifi',
        icon: 'speaker',
        level: 1,
        parentId: 'image-son',
        isActive: true,
        sortOrder: 2,
        subcategories: [
          { id: 'casques-audio', name: 'Casques Audio', slug: 'casques-audio', icon: 'headphones', level: 2, parentId: 'audio-hifi', isActive: true, sortOrder: 1 },
          { id: 'enceintes-bluetooth', name: 'Enceintes Bluetooth', slug: 'enceintes-bluetooth', icon: 'speaker', level: 2, parentId: 'audio-hifi', isActive: true, sortOrder: 2 }
        ]
      }
    ]
  },
  {
    id: 'jeux-video-consoles',
    name: 'Jeux Vidéo & Consoles',
    slug: 'jeux-video-consoles',
    icon: 'gamepad',
    level: 0,
    isActive: true,
    sortOrder: 3,
    subcategories: [
      {
        id: 'consoles-jeux',
        name: 'Consoles de Jeux',
        slug: 'consoles-jeux',
        icon: 'gamepad',
        level: 1,
        parentId: 'jeux-video-consoles',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'playstation', name: 'PlayStation', slug: 'playstation', icon: 'playstation', level: 2, parentId: 'consoles-jeux', isActive: true, sortOrder: 1 },
          { id: 'xbox', name: 'Xbox', slug: 'xbox', icon: 'xbox', level: 2, parentId: 'consoles-jeux', isActive: true, sortOrder: 2 },
          { id: 'nintendo', name: 'Nintendo', slug: 'nintendo', icon: 'nintendo', level: 2, parentId: 'consoles-jeux', isActive: true, sortOrder: 3 }
        ]
      }
    ]
  },
  {
    id: 'services-support',
    name: 'Services & Support',
    slug: 'services-support',
    icon: 'wrench',
    level: 0,
    isActive: true,
    sortOrder: 4,
    subcategories: [
      {
        id: 'installation-maintenance',
        name: 'Installation & Maintenance',
        slug: 'installation-maintenance',
        icon: 'tools',
        level: 1,
        parentId: 'services-support',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'vehicules-equipements',
    name: 'Véhicules & Équipements',
    slug: 'vehicules-equipements',
    icon: 'car',
    level: 0,
    isActive: true,
    sortOrder: 5,
    subcategories: [
      {
        id: 'vehicules',
        name: 'Véhicules',
        slug: 'vehicules',
        icon: 'car',
        level: 1,
        parentId: 'vehicules-equipements',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'voitures', name: 'Voitures', slug: 'voitures', icon: 'car', level: 2, parentId: 'vehicules', isActive: true, sortOrder: 1 },
          { id: 'motos', name: 'Motos', slug: 'motos', icon: 'motorcycle', level: 2, parentId: 'vehicules', isActive: true, sortOrder: 2 }
        ]
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
  },
  {
    id: 'mobilier-decoration',
    name: 'Mobilier & Décoration',
    slug: 'mobilier-decoration',
    icon: 'sofa',
    level: 0,
    isActive: true,
    sortOrder: 7,
    subcategories: [
      { id: 'meubles', name: 'Meubles', slug: 'meubles', icon: 'sofa', level: 1, parentId: 'mobilier-decoration', isActive: true, sortOrder: 1 },
      { id: 'decoration', name: 'Décoration', slug: 'decoration', icon: 'palette', level: 1, parentId: 'mobilier-decoration', isActive: true, sortOrder: 2 }
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
          { id: 'rangement-cuisine', name: 'Rangement Cuisine', slug: 'rangement-cuisine', icon: 'archive', level: 2, parentId: 'appareils-cuisine', isActive: true, sortOrder: 2 },
          { id: 'vaisselle', name: 'Vaisselle', slug: 'vaisselle', icon: 'coffee', level: 2, parentId: 'appareils-cuisine', isActive: true, sortOrder: 3 },
          { id: 'cuisson', name: 'Cuisson', slug: 'cuisson', icon: 'flame', level: 2, parentId: 'appareils-cuisine', isActive: true, sortOrder: 4 }
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
    id: 'mode-accessoires',
    name: 'Mode & Accessoires',
    slug: 'mode-accessoires',
    icon: 'shirt',
    level: 0,
    isActive: true,
    sortOrder: 9,
    subcategories: [
      {
        id: 'vetements',
        name: 'Vêtements',
        slug: 'vetements',
        icon: 'shirt',
        level: 1,
        parentId: 'mode-accessoires',
        isActive: true,
        sortOrder: 1,
        subcategories: [
          { id: 'vetements-homme', name: 'Vêtements Homme', slug: 'vetements-homme', icon: 'user', level: 2, parentId: 'vetements', isActive: true, sortOrder: 1 },
          { id: 'vetements-femme', name: 'Vêtements Femme', slug: 'vetements-femme', icon: 'user', level: 2, parentId: 'vetements', isActive: true, sortOrder: 2 }
        ]
      },
      {
        id: 'chaussures-accessoires-mode',
        name: 'Chaussures & Accessoires',
        slug: 'chaussures-accessoires-mode',
        icon: 'shoe-prints',
        level: 1,
        parentId: 'mode-accessoires',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'puericulture-equipement-bebe',
    name: 'Puériculture & Équipement Bébé',
    slug: 'puericulture-equipement-bebe',
    icon: 'baby',
    level: 0,
    isActive: true,
    sortOrder: 10,
    subcategories: [
      {
        id: 'equipements-puericulture',
        name: 'Équipements de Puériculture',
        slug: 'equipements-puericulture',
        icon: 'baby-carriage',
        level: 1,
        parentId: 'puericulture-equipement-bebe',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'vetements-bebe',
        name: 'Vêtements Bébé',
        slug: 'vetements-bebe',
        icon: 'baby',
        level: 1,
        parentId: 'puericulture-equipement-bebe',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'emploi-carriere',
    name: 'Emploi & Carrière',
    slug: 'emploi-carriere',
    icon: 'briefcase',
    level: 0,
    isActive: true,
    sortOrder: 11,
    subcategories: [
      { id: 'offres-emploi', name: 'Offres d\'Emploi', slug: 'offres-emploi', icon: 'briefcase', level: 1, parentId: 'emploi-carriere', isActive: true, sortOrder: 1 },
      { id: 'cv-lettres-motivation', name: 'CV & Lettres de Motivation', slug: 'cv-lettres-motivation', icon: 'file-text', level: 1, parentId: 'emploi-carriere', isActive: true, sortOrder: 2 }
    ]
  },
  {
    id: 'education-loisirs',
    name: 'Éducation & Loisirs',
    slug: 'education-loisirs',
    icon: 'book',
    level: 0,
    isActive: true,
    sortOrder: 12,
    subcategories: [
      {
        id: 'livres-papeterie',
        name: 'Livres & Papeterie',
        slug: 'livres-papeterie',
        icon: 'book',
        level: 1,
        parentId: 'education-loisirs',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'instruments-musique',
        name: 'Instruments de Musique',
        slug: 'instruments-musique',
        icon: 'music',
        level: 1,
        parentId: 'education-loisirs',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'gastronomie-alimentation',
    name: 'Gastronomie & Alimentation',
    slug: 'gastronomie-alimentation',
    icon: 'utensils',
    level: 0,
    isActive: true,
    sortOrder: 13,
    subcategories: [
      {
        id: 'produits-alimentaires',
        name: 'Produits Alimentaires',
        slug: 'produits-alimentaires',
        icon: 'apple',
        level: 1,
        parentId: 'gastronomie-alimentation',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'restauration-traiteurs',
        name: 'Restauration & Traiteurs',
        slug: 'restauration-traiteurs',
        icon: 'utensils',
        level: 1,
        parentId: 'gastronomie-alimentation',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'sante-beaute',
    name: 'Santé & Beauté',
    slug: 'sante-beaute',
    icon: 'heart',
    level: 0,
    isActive: true,
    sortOrder: 14,
    subcategories: [
      {
        id: 'produits-beaute',
        name: 'Produits de Beauté',
        slug: 'produits-beaute',
        icon: 'sparkles',
        level: 1,
        parentId: 'sante-beaute',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'produits-bien-etre',
        name: 'Produits de Bien-être',
        slug: 'produits-bien-etre',
        icon: 'heart',
        level: 1,
        parentId: 'sante-beaute',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'parapharmacie-produit-chimique',
    name: 'Parapharmacie & Produit Chimique',
    slug: 'parapharmacie-produit-chimique',
    icon: 'flask',
    level: 0,
    isActive: true,
    sortOrder: 15,
    subcategories: [
      {
        id: 'materiel-professionnel-medical',
        name: 'Matériel Professionnel Médical',
        slug: 'materiel-professionnel-medical',
        icon: 'stethoscope',
        level: 1,
        parentId: 'parapharmacie-produit-chimique',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'quincaillerie-generale',
    name: 'Quincaillerie Générale',
    slug: 'quincaillerie-generale',
    icon: 'wrench',
    level: 0,
    isActive: true,
    sortOrder: 16,
    subcategories: [
      {
        id: 'outillage-quincaillerie',
        name: 'Outillage & Quincaillerie',
        slug: 'outillage-quincaillerie',
        icon: 'tools',
        level: 1,
        parentId: 'quincaillerie-generale',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'animaux-accessoires',
    name: 'Animaux & Accessoires',
    slug: 'animaux-accessoires',
    icon: 'paw-print',
    level: 0,
    isActive: true,
    sortOrder: 17,
    subcategories: [
      {
        id: 'animaux-domestiques',
        name: 'Animaux Domestiques',
        slug: 'animaux-domestiques',
        icon: 'dog',
        level: 1,
        parentId: 'animaux-accessoires',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'accessoires-animaux',
        name: 'Accessoires pour Animaux',
        slug: 'accessoires-animaux',
        icon: 'bone',
        level: 1,
        parentId: 'animaux-accessoires',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'evenements-billetterie',
    name: 'Événements & Billetterie',
    slug: 'evenements-billetterie',
    icon: 'ticket',
    level: 0,
    isActive: true,
    sortOrder: 18,
    subcategories: [
      {
        id: 'spectacles-concerts',
        name: 'Spectacles & Concerts',
        slug: 'spectacles-concerts',
        icon: 'music',
        level: 1,
        parentId: 'evenements-billetterie',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'voyages-tourisme',
    name: 'Voyages & Tourisme',
    slug: 'voyages-tourisme',
    icon: 'plane',
    level: 0,
    isActive: true,
    sortOrder: 19,
    subcategories: [
      {
        id: 'hebergement',
        name: 'Hébergement',
        slug: 'hebergement',
        icon: 'bed',
        level: 1,
        parentId: 'voyages-tourisme',
        isActive: true,
        sortOrder: 1
      },
      {
        id: 'transport-voyages',
        name: 'Transport & Voyages',
        slug: 'transport-voyages',
        icon: 'car',
        level: 1,
        parentId: 'voyages-tourisme',
        isActive: true,
        sortOrder: 2
      }
    ]
  },
  {
    id: 'finance-monnaie-fiduciaire',
    name: 'Finance & Monnaie Fiduciaire',
    slug: 'finance-monnaie-fiduciaire',
    icon: 'dollar-sign',
    level: 0,
    isActive: true,
    sortOrder: 20,
    subcategories: [
      {
        id: 'services-bancaires',
        name: 'Services Bancaires',
        slug: 'services-bancaires',
        icon: 'bank',
        level: 1,
        parentId: 'finance-monnaie-fiduciaire',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'artisanat-traditionnel-algerien',
    name: 'Artisanat Traditionnel Algérien',
    slug: 'artisanat-traditionnel-algerien',
    icon: 'hand',
    level: 0,
    isActive: true,
    sortOrder: 21,
    subcategories: [
      {
        id: 'tapis-berberes',
        name: 'Tapis Berbères',
        slug: 'tapis-berberes',
        icon: 'carpet',
        level: 1,
        parentId: 'artisanat-traditionnel-algerien',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'produits-locaux-algeriens',
    name: 'Produits Locaux Algériens',
    slug: 'produits-locaux-algeriens',
    icon: 'map-pin',
    level: 0,
    isActive: true,
    sortOrder: 22,
    subcategories: [
      {
        id: 'huile-olive',
        name: 'Huile d\'Olive',
        slug: 'huile-olive',
        icon: 'droplet',
        level: 1,
        parentId: 'produits-locaux-algeriens',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'plats-traditionnels-algeriens',
    name: 'Plats Traditionnels Algériens',
    slug: 'plats-traditionnels-algeriens',
    icon: 'utensils',
    level: 0,
    isActive: true,
    sortOrder: 23,
    subcategories: [
      {
        id: 'couscous-algerien',
        name: 'Couscous Algérien',
        slug: 'couscous-algerien',
        icon: 'bowl',
        level: 1,
        parentId: 'plats-traditionnels-algeriens',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'patisseries-traditionnelles-algeriennes',
    name: 'Pâtisseries Traditionnelles Algériennes',
    slug: 'patisseries-traditionnelles-algeriennes',
    icon: 'cake',
    level: 0,
    isActive: true,
    sortOrder: 24,
    subcategories: [
      {
        id: 'baklawa-algerienne',
        name: 'Baklawa Algérienne',
        slug: 'baklawa-algerienne',
        icon: 'cake',
        level: 1,
        parentId: 'patisseries-traditionnelles-algeriennes',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'services-coutumes-traditionnels',
    name: 'Services et Coutumes Traditionnels',
    slug: 'services-coutumes-traditionnels',
    icon: 'users',
    level: 0,
    isActive: true,
    sortOrder: 25,
    subcategories: [
      {
        id: 'mariage-traditionnel',
        name: 'Mariage Traditionnel',
        slug: 'mariage-traditionnel',
        icon: 'heart',
        level: 1,
        parentId: 'services-coutumes-traditionnels',
        isActive: true,
        sortOrder: 1
      }
    ]
  },
  {
    id: 'echanges-partage',
    name: 'Échanges & Partage',
    slug: 'echanges-partage',
    icon: 'share',
    level: 0,
    isActive: true,
    sortOrder: 26,
    subcategories: [
      {
        id: 'don-troc',
        name: 'Don & Troc',
        slug: 'don-troc',
        icon: 'gift',
        level: 1,
        parentId: 'echanges-partage',
        isActive: true,
        sortOrder: 1
      }
    ]
  }
];

// Fonction pour afficher les catégories avec leur contenu
function displayCategories() {
  console.log('=== CATÉGORIES PRINCIPALES AVEC CONTENU (26) ===\n');
  
  completeCategories.forEach((category, index) => {
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
  
  // Statistiques
  const totalSubCategories = completeCategories.reduce((acc, cat) => acc + (cat.subcategories?.length || 0), 0);
  const totalSubSubCategories = completeCategories.reduce((acc, cat) => {
    return acc + (cat.subcategories?.reduce((subAcc, sub) => subAcc + (sub.subcategories?.length || 0), 0) || 0);
  }, 0);
  
  console.log(`\n📊 STATISTIQUES GLOBALES :`);
  console.log(`========================`);
  console.log(`✅ Total catégories principales: ${completeCategories.length}/26`);
  console.log(`📂 Total sous-catégories: ${totalSubCategories}`);
  console.log(`📄 Total sous-sous-catégories: ${totalSubSubCategories}`);
  
  // Vérification spécifique pour l'Électroménager
  const electroMenagerCategory = completeCategories.find(cat => cat.id === 'electromenager');
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
  const immobilierCategory = completeCategories.find(cat => cat.id === 'immobilier');
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
}

// Exporter les catégories pour utilisation
function exportToFile() {
  const exportData = {
    categories: completeCategories,
    metadata: {
      totalCategories: completeCategories.length,
      exportDate: new Date().toISOString(),
      version: '2.0.0'
    }
  };
  
  fs.writeFileSync('complete-categories-export.json', JSON.stringify(exportData, null, 2));
  console.log('\n📁 Fichier d\'export créé: complete-categories-export.json');
}

// Exécuter les fonctions
if (require.main === module) {
  displayCategories();
  exportToFile();
}

module.exports = { completeCategories, displayCategories, exportToFile };