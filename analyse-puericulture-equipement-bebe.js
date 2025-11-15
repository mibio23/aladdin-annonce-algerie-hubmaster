import fs from 'fs';
import path from 'path';

console.log('👶 ANALYSE APPROFONDIE - "Puériculture & Équipement Bébé"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'puericulture-equipement-bebe',
  'puériculture-équipement-bébé',
  'puericulture-equipement-bebe',
  'puériculture-équipement-bébé',
  'puericulture',
  'puériculture',
  'equipement-bebe',
  'équipement-bébé',
  'equipement-bebe',
  'équipement-bébé',
  'bebe',
  'bébé',
  'poussette',
  'landau',
  'siege-auto',
  'siège-auto',
  'lit-bebe',
  'lit-bébé',
  'chambre-bebe',
  'chambre-bébé',
  'jouet-bebe',
  'jouet-bébé',
  'allaitement',
  'biberon',
  'couche',
  'vetement-bebe',
  'vêtement-bébé',
  'puericulture',
  'maternite',
  'maternité'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS À LA PUÉRICULTURE & ÉQUIPEMENT BÉBÉ:');
console.log('================================================================================');

termesRecherche.forEach(terme => {
  const regex = new RegExp(terme, 'gi');
  const correspondances = fileContent.match(regex);
  if (correspondances && correspondances.length > 0) {
    console.log(`✅ "${terme}": TROUVÉ (${correspondances.length} occurrence(s))`);
  } else {
    console.log(`❌ "${terme}": NON TROUVÉ`);
  }
});

console.log('\n📋 ANALYSE DES CATÉGORIES EXISTANTES SIMILAIRES:');
console.log('================================================================================');

// Recherche des catégories existantes similaires
const categoriesSimilaires = [
  { nom: 'Mode & Accessoires', id: 'mode-accessoires' },
  { nom: 'Enfants & Bébés', id: 'enfants-bebes' },
  { nom: 'Maison & Jardin', id: 'maison-jardin' },
  { nom: 'Équipements pour Enfants', id: 'equipements-enfants' },
  { nom: 'Vêtements & Chaussures', id: 'vetements-chaussures' },
  { nom: 'Jouets & Jeux', id: 'jouets-jeux' }
];

categoriesSimilaires.forEach(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  const regexNom = new RegExp(`name:\\s*'${categorie.nom}'`, 'g');
  
  const correspondancesId = fileContent.match(regexId);
  const correspondancesNom = fileContent.match(regexNom);
  
  if (correspondancesId && correspondancesId.length > 0) {
    console.log(`✅ ${categorie.nom} (${categorie.id}): TROUVÉE`);
    
    // Analyse du contenu de cette catégorie
    const debutCategorie = fileContent.indexOf(`id: '${categorie.id}'`);
    if (debutCategorie !== -1) {
      // Extraction de la section de la catégorie
      let braceCount = 0;
      let position = debutCategorie;
      let finCategorie = debutCategorie;
      
      while (position < fileContent.length) {
        if (fileContent[position] === '{') {
          braceCount++;
        } else if (fileContent[position] === '}') {
          braceCount--;
          if (braceCount === 0) {
            finCategorie = position + 1;
            break;
          }
        }
        position++;
      }
      
      const sectionCategorie = fileContent.substring(debutCategorie, finCategorie);
      const sousCategories = sectionCategorie.match(/id:\s*'[^']*'/g) || [];
      console.log(`   📊 Sous-catégories trouvées: ${sousCategories.length}`);
      
      // Recherche spécifique de puériculture et équipement bébé dans cette catégorie
      const puericultureDansCategorie = sectionCategorie.match(/puériculture|bébé|bebe|poussette|landau|allaitement|biberon|couche|maternité/gi) || [];
      if (puericultureDansCategorie.length > 0) {
        console.log(`   🔍 Références puériculture trouvées: ${puericultureDansCategorie.length}`);
      }
      
      // Affichage des 3 premières sous-catégories
      sousCategories.slice(0, 3).forEach((sousCat, index) => {
        const nomSousCat = sousCat.match(/'([^']*)'/)[1];
        console.log(`   ${index + 1}. ${nomSousCat}`);
      });
      
      if (sousCategories.length > 3) {
        console.log(`   ... et ${sousCategories.length - 3} autres`);
      }
    }
  } else {
    console.log(`❌ ${categorie.nom} (${categorie.id}): NON TROUVÉE`);
  }
});

console.log('\n🎯 RECOMMANDATION PROFESSIONNELLE:');
console.log('================================================================================');

// Analyse si "Puériculture & Équipement Bébé" devrait être une nouvelle catégorie
const existeCategoriesSimilaires = categoriesSimilaires.some(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  return fileContent.match(regexId);
});

if (existeCategoriesSimilaires) {
  console.log('📊 ANALYSE: La catégorie "Puériculture & Équipement Bébé" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Mode & Accessoires" (peut contenir des vêtements bébé)');
  console.log('   - "Enfants & Bébés" (peut contenir des équipements bébé)');
  console.log('   - "Maison & Jardin" (peut contenir des équipements bébé)');
  console.log('   - "Équipements pour Enfants" (peut contenir des équipements bébé)');
  console.log('   - "Vêtements & Chaussures" (peut contenir des vêtements bébé)');
  console.log('   - "Jouets & Jeux" (peut contenir des jouets bébé)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Puériculture & Équipement Bébé" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Équipements de Puériculture');
  console.log('   • Vêtements Bébé');
  console.log('   • Équipements d\'Allaitement');
  console.log('   • Lits et Chambres Bébé');
  console.log('   • Transports et Déplacements Bébé');
  console.log('   • Jouets et Activités Bébé');
  console.log('   • Hygiène et Soins Bébé');
  console.log('   • Sécurité et Surveillance Bébé');
  console.log('   • Accessoires et Produits Bébé');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Matériel Professionnel de Surveillance" dans la section générale');
  
  console.log('\n👶 STRUCTURE PROPOSÉE:');
  console.log('   Puériculture & Équipement Bébé');
  console.log('   ├── Équipements de Puériculture');
  console.log('   │   ├── Poussettes et Systèmes de Portage');
  console.log('   │   ├── Sièges Auto et Transports');
  console.log('   │   ├── Accessoires de Puériculture');
  console.log('   │   └── Équipements de Sortie');
  console.log('   ├── Vêtements Bébé');
  console.log('   │   ├── Vêtements de Nuit');
  console.log('   │   ├── Vêtements de Jour');
  console.log('   │   ├── Vêtements d\'Extérieur');
  console.log('   │   ├── Sous-vêtements');
  console.log('   │   └── Accessoires Vestimentaires');
  console.log('   ├── Équipements d\'Allaitement');
  console.log('   │   ├── Tire-lait et Coussinets d\'Allaitement');
  console.log('   │   ├── Biberons et Tétines');
  console.log('   │   ├── Stérilisateurs et Chauffe-biberons');
  console.log('   │   ├── Sac à Langer et Accessoires');
  console.log('   │   └── Produits d\'Allaitement');
  console.log('   ├── Lits et Chambres Bébé');
  console.log('   │   ├── Lits Bébé');
  console.log('   │   ├── Berceaux et Moïses');
  console.log('   │   ├── Matelas à Langer');
  console.log('   │   ├── Mobilier de Chambre Bébé');
  console.log('   │   └── Décoration de Chambre Bébé');
  console.log('   ├── Transports et Déplacements Bébé');
  console.log('   │   ├── Poussettes et Landaus');
  console.log('   │   ├── Sièges Auto');
  console.log('   │   ├── Transpôts et Sacs à Dos');
  console.log('   │   └── Accessoires de Transport');
  console.log('   ├── Jouets et Activités Bébé');
  console.log('   │   ├── Jouets d\'Éveil');
  console.log('   │   ├── Jouets d\'Éveil Musical');
  console.log('   │   ├── Livres et Contes');
  console.log('   │   ├── Tapis d\'Éveil et Jeux de Sol');
  console.log('   │   └── Activités de Motricité');
  console.log('   ├── Hygiène et Soins Bébé');
  console.log('   │   ├── Couches et Changes');
  console.log('   │   ├── Produits de Toilette et de Bain');
  console.log('   │   ├── Soins de la Peau');
  console.log('   │   ├── Thermomètres et Moniteurs');
  console.log('   │   └── Produits d\'Hygiène');
  console.log('   ├── Sécurité et Surveillance Bébé');
  console.log('   │   ├── Barrières de Sécurité');
  console.log('   │   ├── Moniteurs Bébé');
  console.log('   │   ├── Détecteurs de Mouvement');
  console.log('   │   ├── Protège-angles et Sécurité');
  console.log('   │   └── Accessoires de Sécurité');
  console.log('   └── Accessoires et Produits Bébé');
  console.log('       ├── Bourses et Sacs à Langer');
  console.log('       ├── Couvertures et Gigoteuses');
  console.log('       ├── Produits de Diversification');
  console.log('       ├── Cadeaux de Naissance');
  console.log('       └── Produits Spécialisés');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');