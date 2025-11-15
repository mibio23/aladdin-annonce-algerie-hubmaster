import fs from 'fs';
import path from 'path';

console.log('🔍 ANALYSE APPROFONDIE - "Gastronomie & Produits du Terroir"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'gastronomie',
  'terroir',
  'produits du terroir',
  'gastronomie-terroir',
  'gastronomie-produits-terroir',
  'produits-terroir'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS À LA GASTRONOMIE ET TERROIR:');
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
  { nom: 'Gastronomie & Alimentation', id: 'gastronomie-alimentation' },
  { nom: 'Produits Locaux Algériens', id: 'produits-locaux-algeriens' },
  { nom: 'Plats Traditionnels Algériens', id: 'plats-traditionnels-algeriens' },
  { nom: 'Pâtisseries Traditionnelles Algériennes', id: 'patisseries-traditionnelles-algeriennes' }
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

// Analyse si "Gastronomie & Produits du Terroir" devrait être une nouvelle catégorie
const existeGastronomieAlimentation = fileContent.includes("id: 'gastronomie-alimentation'");
const existeProduitsLocaux = fileContent.includes("id: 'produits-locaux-algeriens'");

if (existeGastronomieAlimentation && existeProduitsLocaux) {
  console.log('📊 ANALYSE: La catégorie "Gastronomie & Produits du Terroir" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Gastronomie & Alimentation" (catégorie générale)');
  console.log('   - "Produits Locaux Algériens" (spécifique à l\'Algérie)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Gastronomie & Produits du Terroir" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Produits du terroir algérien (spécialités régionales)');
  console.log('   • Produits artisanaux gastronomiques');
  console.log('   • Saveurs locales et traditionnelles');
  console.log('   • Équipements professionnels pour la gastronomie');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Produits Locaux Algériens" dans la section algérienne');
  
  console.log('\n🏗️ STRUCTURE PROPOSÉE:');
  console.log('   Gastronomie & Produits du Terroir');
  console.log('   ├── Produits du Terroir Algérien');
  console.log('   │   ├── Huiles Traditionnelles');
  console.log('   │   ├── Épices Locales');
  console.log('   │   ├── Condiments Artisanaux');
  console.log('   │   └── Saveurs Régionales');
  console.log('   ├── Équipements Gastronomiques');
  console.log('   │   ├── Ustensiles Traditionnels');
  console.log('   │   ├── Équipements Professionnels');
  console.log('   │   └── Matériel de Conservation');
  console.log('   └── Services Gastronomiques');
  console.log('       ├── Dégustations');
  console.log('       ├── Formations Culinaires');
  console.log('       └── Conseils Gastronomiques');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');