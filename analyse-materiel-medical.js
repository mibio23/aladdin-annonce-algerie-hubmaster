import fs from 'fs';
import path from 'path';

console.log('🏥️ ANALYSE APPROFONDIE - "Matériel Professionnel Médicale"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'materiel-professionnel-medical',
  'matériel-professionnel-médical',
  'materiel-medical',
  'matériel-médical',
  'medical',
  'médical',
  'sante-medical',
  'santé-médical',
  'equipement-medical',
  'équipement-médical',
  'materiel-hospitalier',
  'matériel-hospitalier'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS AU MATÉRIEL MÉDICAL:');
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
  { nom: 'Santé & Beauté', id: 'sante-beaute' },
  { nom: 'Services Professionnels', id: 'services-professionnels' },
  { nom: 'Équipements Médicaux', id: 'equipements-medicaux' },
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
      
      // Recherche spécifique de matériel médical dans cette catégorie
      const materielMedicalDansCategorie = sectionCategorie.match(/medical|médical|hospitalier|santé|beauté/gi) || [];
      if (materielMedicalDansCategorie.length > 0) {
        console.log(`   🔍 Références médicales trouvées: ${materielMedicalDansCategorie.length}`);
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

// Analyse si "Matériel Professionnel Médicale" devrait être une nouvelle catégorie
const existeCategoriesSimilaires = categoriesSimilaires.some(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  return fileContent.match(regexId);
});

if (existeCategoriesSimilaires) {
  console.log('📊 ANALYSE: La catégorie "Matériel Professionnel Médicale" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Santé & Beauté" (contient Équipements Médicaux)');
  console.log('   - "Services Professionnels" (peut contenir des services médicaux)');
  console.log('   - "Équipements Médicaux" (peut contenir du matériel médical)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Matériel Professionnel Médicale" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Matériel de diagnostic');
  console.log('   • Équipements de chirurgie');
  console.log('   • Matériel d\'urgence');
  console.log('   • Instruments médicaux');
  console.log('   • Matériel de laboratoire');
  console.log('   • Matériel hospitalier');
  console.log('   • Équipements de stérilisation');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Santé & Beauté" dans la section générale');
  
  console.log('\n🏥️ STRUCTURE PROPOSÉE:');
  console.log('   Matériel Professionnel Médicale');
  console.log('   ├── Matériel de Diagnostic');
  console.log('   │   ├── Équipements d\'Imagerie Médicale');
  console.log('   │   ├── Appareils de Mesure Médicale');
  console.log('   │   ├── Équipements de Dépistage');
  console.log('   │   └── Moniteurs Médicaux');
  console.log('   ├── Instruments Médicaux');
  console.log('   │   ├── Instruments de Chirurgie');
  console.log('   │   ├── Instruments de Dentisterie');
  console.log('   │   ├── Instruments d\'Ophtalmologie');
  console.log('   │   ├── Instruments d\'ORL');
  console.log('   │   └── Instruments Spécialisés');
  console.log('   ├── Matériel d\'Urgence');
  console.log('   │   ├── Équipements de Réanimation');
  console.log('   │   ├── Matériel de Secourisme');
  console.log('   │   ├── Défibrillateurs');
  console.log('   │   └── Équipements d\'Urgence');
  console.log('   ├── Matériel Hospitalier');
  console.log('   │   ├── Lits Médicaux');
  console.log('   │   ├── Équipements de Salle d\'Opération');
  console.log('   │   ├── Matériel de Soins Intensifs');
  console.log('   │   └── Équipements de Chambre');
  console.log('   ├── Matériel de Laboratoire');
  console.log('   │   ├── Microscopes');
  console.log('   │   ├── Centrifugeuses');
  console.log('   │   ├── Autoclaves');
  console.log('   │   └── Équipements d\'Analyse');
  console.log('   ├── Équipements de Stérilisation');
  console.log('   │   ├── Autoclaves');
  console.log('   │   ├── Stérilisateurs');
  console.log('   │   ├── Désinfecteurs');
  console.log('   │   └── Équipements de Stérilisation');
  console.log('   └── Consommables Médicaux');
  console.log('       ├── Gants Médicaux');
  console.log('       ├── Masques de Protection');
  console.log('       ├── Blouses Médicales');
  console.log('       ├── Produits de Soin');
  console.log('       └── Équipements de Protection');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');