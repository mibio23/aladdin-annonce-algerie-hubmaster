import { exec } from 'child_process';

const filesToRemove = [
  'test-italian-complete.js',
  'test-final-italian.js',
  'test-i18n-debug.js',
  'test-italian-translations.js'
];

console.log('🧹 Nettoyage des fichiers de test...\n');

filesToRemove.forEach(file => {
  exec(`del "${file}" 2>nul || rm -f "${file}"`, (error) => {
    if (error) {
      console.log(`  ⚠️  Impossible de supprimer ${file} (fichier non trouvé ou permission)`);
    } else {
      console.log(`  ✅ Supprimé: ${file}`);
    }
  });
});

setTimeout(() => {
  console.log('\n✨ Nettoyage terminé!');  
}, 500);