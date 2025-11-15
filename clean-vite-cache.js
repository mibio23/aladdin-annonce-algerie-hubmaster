import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

console.log('🧹 Nettoyage du cache Vite...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viteCachePath = path.join(__dirname, 'node_modules', '.vite');

try {
  if (fs.existsSync(viteCachePath)) {
    fs.rmSync(viteCachePath, { recursive: true, force: true });
    console.log('✅ Cache Vite supprimé avec succès');
  } else {
    console.log('ℹ️ Le cache Vite n\'existe pas déjà');
  }
} catch (error) {
  console.error('❌ Erreur lors de la suppression du cache Vite:', error.message);
}

console.log('\n📋 Instructions pour redémarrer :');
console.log('1. Arrêtez le serveur de développement (Ctrl+C)');
console.log('2. Relancez avec : npm run dev');
console.log('\n🔧 Si le problème persiste, essayez :');
console.log('npm install --force');
console.log('npm run dev');