import fs from 'fs';
import path from 'path';

console.log('📹 ANALYSE APPROFONDIE - "Matériel Professionnel de Surveillance"');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Termes à rechercher
const termesRecherche = [
  'materiel-professionnel-surveillance',
  'matériel-professionnel-de-surveillance',
  'materiel-surveillance',
  'matériel-de-surveillance',
  'surveillance',
  'securite-surveillance',
  'sécurité-surveillance',
  'equipement-surveillance',
  'équipement-de-surveillance',
  'camera-surveillance',
  'caméra-surveillance',
  'systeme-surveillance',
  'système-de-surveillance',
  'controle-acces',
  'contrôle-accès',
  'detection-intrusion',
  'détection-intrusion',
  'alarme-intrusion',
  'vidéosurveillance',
  'vidéo-surveillance'
];

console.log('\n📋 RECHERCHE DES TERMES LIÉS AU MATÉRIEL DE SURVEILLANCE:');
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
  { nom: 'Matériel Professionnel d\'Incendie', id: 'materiel-professionnel-incendie' },
  { nom: 'Équipements de Sécurité', id: 'equipements-securite' },
  { nom: 'Électronique & Informatique', id: 'electronique-informatique' }
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
      
      // Recherche spécifique de matériel de surveillance dans cette catégorie
      const materielSurveillanceDansCategorie = sectionCategorie.match(/surveillance|caméra|camera|contrôle|contrôle|accès|détection|intrusion|alarme|vidéo/gi) || [];
      if (materielSurveillanceDansCategorie.length > 0) {
        console.log(`   🔍 Références surveillance trouvées: ${materielSurveillanceDansCategorie.length}`);
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

// Analyse si "Matériel Professionnel de Surveillance" devrait être une nouvelle catégorie
const existeCategoriesSimilaires = categoriesSimilaires.some(categorie => {
  const regexId = new RegExp(`id:\\s*'${categorie.id}'`, 'g');
  return fileContent.match(regexId);
});

if (existeCategoriesSimilaires) {
  console.log('📊 ANALYSE: La catégorie "Matériel Professionnel de Surveillance" n\'existe pas explicitement.');
  console.log('📊 ANALYSE: Cependant, des catégories similaires existent déjà:');
  console.log('   - "Sécurité & Protection" (peut contenir du matériel de surveillance)');
  console.log('   - "Services Professionnels" (peut contenir des services de surveillance)');
  console.log('   - "Matériel Professionnel BTP" (peut contenir du matériel de surveillance)');
  console.log('   - "Matériel Professionnel Médicale" (peut contenir du matériel de surveillance)');
  console.log('   - "Matériel Professionnel d\'Incendie" (peut contenir du matériel de surveillance)');
  console.log('   - "Électronique & Informatique" (peut contenir du matériel de surveillance)');
  
  console.log('\n💡 RECOMMANDATION: Créer "Matériel Professionnel de Surveillance" comme catégorie spécialisée');
  console.log('   qui engloberait:');
  console.log('   • Caméras de surveillance');
  console.log('   • Systèmes de vidéosurveillance');
  console.log('   • Équipements de détection d\'intrusion');
  console.log('   • Systèmes de contrôle d\'accès');
  console.log('   • Équipements de surveillance sans fil');
  console.log('   • Logiciels de surveillance');
  console.log('   • Équipements d\'enregistrement');
  console.log('   • Matériel de surveillance spécialisé');
  
  console.log('\n📍 EMPLACEMENT SUGGÉRÉ: Après "Matériel Professionnel d\'Incendie" dans la section générale');
  
  console.log('\n📹 STRUCTURE PROPOSÉE:');
  console.log('   Matériel Professionnel de Surveillance');
  console.log('   ├── Caméras de Surveillance');
  console.log('   │   ├── Caméras de Dôme');
  console.log('   │   ├── Caméras Bullet');
  console.log('   │   ├── Caméras PTZ');
  console.log('   │   ├── Caméras Box');
  console.log('   │   ├── Caméras Cachées');
  console.log('   │   └── Caméras Spécialisées');
  console.log('   ├── Systèmes de Vidéosurveillance');
  console.log('   │   ├── Systèmes d\'Enregistrement');
  console.log('   │   ├── Moniteurs de Surveillance');
  console.log('   │   ├── Serveurs de Vidéo');
  console.log('   │   ├── Logiciels de Gestion');
  console.log('   │   └── Équipements de Transmission');
  console.log('   ├── Équipements de Détection d\'Intrusion');
  console.log('   │   ├── Détecteurs de Mouvement');
  console.log('   │   ├── Détecteurs d\'Ouverture');
  console.log('   │   ├── Capteurs de Vitrage');
  console.log('   │   ├── Barrières Infrarouges');
  console.log('   │   └── Systèmes d\'Alarme');
  console.log('   ├── Systèmes de Contrôle d\'Accès');
  console.log('   │   ├── Lecteurs de Cartes');
  console.log('   │   ├── Claviers Numériques');
  console.log('   │   ├── Serrures Électroniques');
  console.log('   │   ├── Contrôle Biométrique');
  console.log('   │   └── Systèmes de Contrôle à Distance');
  console.log('   ├── Équipements de Surveillance Sans Fil');
  console.log('   │   ├── Caméras IP');
  console.log('   │   ├── Systèmes Wi-Fi');
  console.log('   │   ├── Équipements 4G/5G');
  console.log('   │   └── Réseaux de Surveillance');
  console.log('   ├── Logiciels de Surveillance');
  console.log('   │   ├── Logiciels d\'Analyse Vidéo');
  console.log('   │   ├── Logiciels de Gestion');
  console.log('   │   ├── Logiciels de Détection');
  console.log('   │   └── Logiciels d\'Alerte');
  console.log('   ├── Équipements d\'Enregistrement');
  console.log('   │   ├── Enregistreurs Numériques');
  console.log('   │   ├── Enregistreurs Réseau');
  console.log('   │   ├── Stockage de Données');
  console.log('   │   └── Équipements de Sauvegarde');
  console.log('   └── Matériel de Surveillance Spécialisé');
  console.log('       ├── Équipements de Surveillance Industrielle');
  console.log('       ├── Matériel de Surveillance Routière');
  console.log('       ├── Équipements de Surveillance Maritime');
  console.log('       └── Matériel de Surveillance Aérienne');
  
} else {
  console.log('⚠️ ANALYSE: Certaines catégories de base manquent, analyse incomplète');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE L\'ANALYSE APPROFONDIE');