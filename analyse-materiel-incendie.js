import fs from 'fs';
import path from 'path';

console.log('🔥 ANALYSE APPROFONDIE - "Matériel Professionnel d\'Incendie"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'materiel-professionnel-incendie',
  'matériel-professionnel-d\'incendie',
  'materiel-incendie',
  'matériel-d\'incendie',
  'incendie',
  'securite-incendie',
  'sécurité-incendie',
  'equipement-incendie',
  'équipement-d\'incendie',
  'extincteur',
  'alarme-incendie',
  'detection-incendie',
  'protection-incendie'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS AU MATÉRIEL D\'INCENDIE:');
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
  { nom: 'Sécurité & Protection', id: 'securite-protection' },
  { nom: 'Services Professionnels', id: 'services-professionnels' },
  { nom: 'Matériel Professionnel BTP', id: 'materiel-professionnel-btp' },
  { nom: 'Matériel Professionnel Médicale', id: 'materiel-professionnel-medical' },
  { nom: 'Équipements de Sécurité', id: 'equipements-securite' }
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
      
      // Recherche spécifique de matériel d'incendie dans cette catégorie
      const materielIncendieDansCategorie = sectionCategorie.match(/incendie|sécurité|protection|extincteur|alarme/gi) || [];
      if (materielIncendieDansCategorie.length > 0) {
        console.log(`   🔍 Références incendie trouvées: ${materielIncendieDansCategorie.length}`);
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

// Analyse si "Matériel Professionnel d'Incendie" devrait être une nouvelle catégorie
const existeCategoriesSimilaires = categoriesSimilaires.some(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  return fileContent.match(regexId);
});

if (existeCategoriesSimilaires) {
  console.log('📊 ANALYSE: La catégorie "Matériel Professionnel d\'Incendie" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Sécurité & Protection" (peut contenir du matériel d\'incendie)');
  console.log('   - "Services Professionnels" (peut contenir des services d\'incendie)');
  console.log('   - "Matériel Professionnel BTP" (peut contenir du matériel d\'incendie)');
  console.log('   - "Matériel Professionnel Médicale" (peut contenir du matériel d\'incendie)');
  console.log('   - "Équipements de Sécurité" (peut contenir du matériel d\'incendie)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Matériel Professionnel d\'Incendie" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Équipements de détection d\'incendie');
  console.log('   • Systèmes d\'alarme incendie');
  console.log('   • Extincteurs et matériel d\'extinction');
  console.log('   • Équipements de protection individuelle');
  console.log('   • Matériel de sauvetage et d\'évacuation');
  console.log('   • Équipements de prévention et de formation');
  console.log('   • Véhicules d\'intervention incendie');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Matériel Professionnel Médicale" dans la section générale');
  
  console.log('\n🔥 STRUCTURE PROPOSÉE:');
  console.log('   Matériel Professionnel d\'Incendie');
  console.log('   ├── Équipements de Détection');
  console.log('   │   ├── Détecteurs de Fumée');
  console.log('   │   ├── Détecteurs de Chaleur');
  console.log('   │   ├── Détecteurs de Flamme');
  console.log('   │   └── Systèmes de Détection Centralisés');
  console.log('   ├── Systèmes d\'Alarme');
  console.log('   │   ├── Alarmes Sonores');
  console.log('   │   ├── Alarmes Visuelles');
  console.log('   │   ├── Systèmes d\'Alarme Centralisés');
  console.log('   │   └── Équipements d\'Alerte');
  console.log('   ├── Extincteurs et Matériel d\'Extinction');
  console.log('   │   ├── Extincteurs à Eau');
  console.log('   │   ├── Extincteurs à Poudre');
  console.log('   │   ├── Extincteurs à CO2');
  console.log('   │   ├── Extincteurs à Mousse');
  console.log('   │   └── Matériel d\'Extinction Spécialisé');
  console.log('   ├── Équipements de Protection Individuelle');
  console.log('   │   ├── Vêtements de Protection');
  console.log('   │   ├── Équipements de Protection Respiratoire');
  console.log('   │   ├── Casques et Protections de la Tête');
  console.log('   │   └── Gants et Protections des Mains');
  console.log('   ├── Matériel de Sauvetage et d\'Évacuation');
  console.log('   │   ├── Échelles et Escabeaux');
  console.log('   │   ├── Corde et Matériel d\'Assurage');
  console.log('   │   ├── Équipements de Sauvetage');
  console.log('   │   └── Matériel d\'Évacuation d\'Urgence');
  console.log('   ├── Équipements de Prévention et de Formation');
  console.log('   │   ├── Matériel de Formation');
  console.log('   │   ├── Équipements de Prévention');
  console.log('   │   ├── Documentation et Signalisation');
  console.log('   │   └── Outils de Prévention');
  console.log('   └── Véhicules d\'Intervention Incendie');
  console.log('       ├── Camions de Pompiers');
  console.log('       ├── Véhicules d\'Intervention Rapide');
  console.log('       ├── Équipements Mobiles');
  console.log('       └── Accessoires pour Véhicules');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');