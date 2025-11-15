import fs from 'fs';
import path from 'path';

console.log('🔍 DIAGNOSTIC DE L\'EMPLACEMENT D\'INSERTION');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Recherche de la section "Produits Locaux Algériens"
const produitsLocauxPattern = /id:\s*'produits-locaux-algeriens'/g;
const produitsLocauxMatch = fileContent.match(produitsLocauxPattern);

if (produitsLocauxMatch) {
  console.log(`✅ Section "Produits Locaux Algériens" trouvée (${produitsLocauxMatch.length} occurrence(s))`);
  
  // Extraction de la section complète
  const debutSection = fileContent.indexOf("id: 'produits-locaux-algeriens'");
  if (debutSection !== -1) {
    let braceCount = 0;
    let position = debutSection;
    let finSection = debutSection;
    
    while (position < fileContent.length) {
      if (fileContent[position] === '{') {
        braceCount++;
      } else if (fileContent[position] === '}') {
        braceCount--;
        if (braceCount === 0) {
          finSection = position + 1;
          break;
        }
      }
      position++;
    }
    
    const sectionComplete = fileContent.substring(debutSection, finSection);
    console.log('\n📋 SECTION COMPLÈTE TROUVÉE:');
    console.log('================================================================================');
    console.log(sectionComplete);
    
    // Recherche de la fin de la section pour l'insertion
    const apresSection = fileContent.substring(finSection);
    const prochainIndex = apresSection.indexOf('  },');
    
    if (prochainIndex !== -1) {
      console.log('\n📍 EMPLACEMENT D\'INSERTION IDENTIFIÉ:');
      console.log('================================================================================');
      console.log(`Position de fin de section: ${finSection}`);
      console.log(`Prochaine virgule trouvée à: ${finSection + prochainIndex + 4}`);
      console.log('Insertion recommandée après la virgule de cette section');
      
      // Affichage du contexte autour de l'insertion
      const contexteAvant = fileContent.substring(Math.max(0, finSection - 100), finSection);
      const contexteApres = fileContent.substring(finSection, Math.min(fileContent.length, finSection + 100));
      
      console.log('\n📄 CONTEXTE AUTOUR DE L\'INSERTION:');
      console.log('================================================================================');
      console.log('AVANT:');
      console.log(contexteAvant);
      console.log('--- POINT D\'INSERTION ---');
      console.log('APRÈS:');
      console.log(contexteApres);
      
    } else {
      console.log('\n⚠️ Impossible de trouver la virgule de fin de section');
    }
  }
} else {
  console.log('❌ Section "Produits Locaux Algériens" non trouvée');
  
  // Recherche d'autres sections algériennes
  console.log('\n🔍 RECHERCHE DES SECTIONS ALGÉRIENNES EXISTANTES:');
  console.log('================================================================================');
  
  const sectionsAlgeriennes = [
    'artisanat-traditionnel-algerien',
    'produits-locaux-algeriens',
    'vetements-traditionnels-algeriens',
    'plats-traditionnels-algeriens',
    'patisseries-traditionnelles-algeriennes',
    'services-coutumes-traditionnels'
  ];
  
  sectionsAlgeriennes.forEach(section => {
    const pattern = new RegExp(`id:\\s*'${section}'`, 'g');
    const match = fileContent.match(pattern);
    if (match) {
      console.log(`✅ ${section}: TROUVÉE`);
    } else {
      console.log(`❌ ${section}: NON TROUVÉE`);
    }
  });
}

console.log('\n================================================================================');
console.log('🏁 FIN DU DIAGNOSTIC');