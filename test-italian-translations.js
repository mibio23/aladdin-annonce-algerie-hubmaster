import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Test script pour vérifier les traductions italiennes
console.log('🔍 Test des traductions italiennes...\n');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test des fichiers de traduction individuels
console.log('📁 Test des fichiers de traduction:');

const filesToTest = [
  './src/lib/i18n/languages/italian/ourStory.ts',
  './src/lib/i18n/languages/italian/footer.ts',
  './src/lib/i18n/languages/italian/sitemap.ts',
  './src/lib/i18n/languages/italian.ts'
];

filesToTest.forEach(file => {
  try {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      console.log(`  ✅ ${file} existe`);
      
      // Lire le contenu pour vérifier la présence des clés
      const content = fs.readFileSync(fullPath, 'utf8');
      
      if (file.includes('ourStory.ts')) {
        if (content.includes('La nostra storia')) {
          console.log(`    ✅ Clé 'La nostra storia' trouvée`);
        } else {
          console.log(`    ❌ Clé 'La nostra storia' manquante`);
        }
      }
      
      if (file.includes('footer.ts')) {
        if (content.includes('La nostra storia')) {
          console.log(`    ✅ Clé footer 'La nostra storia' trouvée`);
        } else {
          console.log(`    ❌ Clé footer 'La nostra storia' manquante`);
        }
      }
      
      if (file.includes('sitemap.ts')) {
        if (content.includes('La nostra storia')) {
          console.log(`    ✅ Clé sitemap 'La nostra storia' trouvée`);
        } else {
          console.log(`    ❌ Clé sitemap 'La nostra storia' manquante`);
        }
      }
      
      if (file.includes('italian.ts')) {
        if (content.includes('italianOurStory')) {
          console.log(`    ✅ Import 'italianOurStory' trouvé`);
        } else {
          console.log(`    ❌ Import 'italianOurStory' manquant`);
        }
      }
      
    } else {
      console.log(`  ❌ ${file} manquant`);
    }
  } catch (error) {
    console.log(`  ❌ ${file} erreur: ${error.message}`);
  }
});

console.log('\n🎯 Test terminé!');