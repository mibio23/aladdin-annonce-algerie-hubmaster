import fs from 'fs';
import path from 'path';

console.log('🏗️ ANALYSE APPROFONDIE - "Matériel Professionnel BTP"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'materiel-professionnel-btp',
  'matériel-professionnel-btp',
  'materiel-btp',
  'matériel-btp',
  'btp',
  'bâtiment-travaux-publics',
  'construction',
  'equipement-btp',
  'équipement-btp'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS AU MATÉRIEL BTP:');
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
  { nom: 'Immobilier & Maison', id: 'immobilier-maison' },
  { nom: 'Bricolage & Jardin', id: 'bricolage-jardin' },
  { nom: 'Services Professionnels', id: 'services-professionnels' },
  { nom: 'Réparation & Entretien', id: 'reparation-entretien' },
  { nom: 'Véhicules & Équipements', id: 'vehicules-equipements' }
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
      
      // Recherche spécifique de matériel BTP dans cette catégorie
      const materielBtpDansCategorie = sectionCategorie.match(/btp|construction|bâtiment|matériel|équipement/gi) || [];
      if (materielBtpDansCategorie.length > 0) {
        console.log(`   🔍 Références BTP trouvées: ${materielBtpDansCategorie.length}`);
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

// Analyse si "Matériel Professionnel BTP" devrait être une nouvelle catégorie
const existeCategoriesSimilaires = categoriesSimilaires.some(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  return fileContent.match(regexId);
});

if (existeCategoriesSimilaires) {
  console.log('📊 ANALYSE: La catégorie "Matériel Professionnel BTP" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Immobilier & Maison" (contient Bricolage & Jardin)');
  console.log('   - "Bricolage & Jardin" (peut contenir du matériel BTP)');
  console.log('   - "Services Professionnels" (peut contenir des services BTP)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Matériel Professionnel BTP" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Matériel de construction');
  console.log('   • Équipements de chantier');
  console.log('   • Outillage professionnel');
  console.log('   • Matériel de sécurité');
  console.log('   • Équipements spécifiques BTP');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Services Professionnels" dans la section générale');
  
  console.log('\n🏗️ STRUCTURE PROPOSÉE:');
  console.log('   Matériel Professionnel BTP');
  console.log('   ├── Matériel de Construction');
  console.log('   │   ├── Échafaudages & Étais');
  console.log('   │   ├── Coffrages & Outils de Béton');
  console.log('   │   ├── Matériaux de Construction');
  console.log('   │   └── Équipements de Levage');
  console.log('   ├── Outillage Professionnel');
  console.log('   │   ├── Outils à Main');
  console.log('   │   ├── Outils Électriques');
  console.log('   │   ├── Outils de Mesure');
  console.log('   │   └── Outillages Spécifiques');
  console.log('   ├── Équipements de Chantier');
  console.log('   │   ├── Bungalows & Abris');
  console.log('   │   ├── Signalisation & Sécurité');
  console.log('   │   ├── Éclairage de Chantier');
  console.log('   │   └── Équipements de Manutention');
  console.log('   ├── Matériel de Sécurité');
  console.log('   │   ├── EPI (Équipements de Protection Individuelle)');
  console.log('   │   ├── Casques & Protections');
  console.log('   │   ├── Vêtements de Travail');
  console.log('   │   └── Équipements de Secours');
  console.log('   └── Équipements Spécifiques BTP');
  console.log('       ├── Matériel de Terrassement');
  console.log('       ├── Équipements de Démolition');
  console.log('       ├── Matériel de Finition');
  console.log('       └── Équipements de Nettoyage');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');