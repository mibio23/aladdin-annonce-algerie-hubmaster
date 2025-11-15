// Script d'analyse approfondi du projet pour trouver la source exacte du problème

import fs from 'fs';
import path from 'path';

console.log('=== ANALYSE APPROFONDIE DU PROJET ===');
console.log('Recherche de toutes les occurrences de "rechercher-reparateur" et analyse du système de routage...\n');

// Fonction pour rechercher récursivement dans tous les fichiers
function searchInDirectory(dir, searchTerm, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorer les répertoires node_modules, .git, etc.
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist' && file !== 'build') {
        searchInDirectory(filePath, searchTerm, results);
      }
    } else {
      // Analyser uniquement les fichiers pertinents
      const ext = path.extname(file);
      if (['.js', '.jsx', '.ts', '.tsx', '.json', '.sql', '.md'].includes(ext)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes(searchTerm)) {
            // Trouver les lignes contenant le terme de recherche
            const lines = content.split('\n');
            const matchingLines = [];
            
            lines.forEach((line, index) => {
              if (line.includes(searchTerm)) {
                matchingLines.push({
                  lineNumber: index + 1,
                  content: line.trim()
                });
              }
            });
            
            results.push({
              file: filePath,
              matchingLines
            });
          }
        } catch (error) {
          // Ignorer les erreurs de lecture de fichiers
        }
      }
    }
  }
  
  return results;
}

// Fonction pour analyser les fichiers de configuration des routes
function analyzeRouteFiles() {
  console.log('\n=== ANALYSE DES FICHIERS DE ROUTE ===');
  
  const routeFiles = [
    'src/config/routesWithLanguage.tsx',
    'src/config/routesOptimizedV2.tsx',
    'src/config/routesOptimized.tsx',
    'src/App.tsx',
    'src/main.tsx'
  ];
  
  for (const file of routeFiles) {
    if (fs.existsSync(file)) {
      console.log(`\n--- Analyse de ${file} ---`);
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Rechercher les routes liées à "rechercher-reparateur" ou "deposer-offre-metier"
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if ((line.includes('rechercher-reparateur') || line.includes('deposer-offre-metier')) && !line.trim().startsWith('//')) {
            console.log(`Ligne ${index + 1}: ${line.trim()}`);
          }
        });
      } catch (error) {
        console.log(`Erreur lors de la lecture du fichier ${file}: ${error.message}`);
      }
    } else {
      console.log(`Le fichier ${file} n'existe pas.`);
    }
  }
}

// Fonction pour analyser les composants React qui pourraient contenir le bouton
function analyzeButtonComponents() {
  console.log('\n=== ANALYSE DES COMPOSANTS DE BOUTON ===');
  
  const componentFiles = [
    'src/components/home/AdvertisingHeroCarousel.tsx',
    'src/components/home/InteractiveOptionsCarousel.tsx',
    'src/components/home/DatabaseAdvertisingCarousel.tsx',
    'src/components/layout/HeaderUserActions.tsx',
    'src/components/layout/Header.tsx'
  ];
  
  for (const file of componentFiles) {
    if (fs.existsSync(file)) {
      console.log(`\n--- Analyse de ${file} ---`);
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Rechercher les boutons liés à "Déposer votre offre de métiers"
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if ((line.includes('Déposer votre offre de métiers') || line.includes('d.*poser.*offre.*m.*tier') || line.includes('deposer-offre-metier')) && !line.trim().startsWith('//')) {
            console.log(`Ligne ${index + 1}: ${line.trim()}`);
          }
        });
        
        // Rechercher les gestionnaires d'événements onClick
        lines.forEach((line, index) => {
          if (line.includes('onClick') && (line.includes('rechercher') || line.includes('deposer'))) {
            console.log(`Ligne ${index + 1} (onClick): ${line.trim()}`);
          }
        });
      } catch (error) {
        console.log(`Erreur lors de la lecture du fichier ${file}: ${error.message}`);
      }
    } else {
      console.log(`Le fichier ${file} n'existe pas.`);
    }
  }
}

// Fonction pour analyser les fichiers de traduction
function analyzeTranslationFiles() {
  console.log('\n=== ANALYSE DES FICHIERS DE TRADUCTION ===');
  
  const translationDir = 'src/lib/i18n/languages';
  
  if (fs.existsSync(translationDir)) {
    const languages = fs.readdirSync(translationDir);
    
    for (const lang of languages) {
      const langDir = path.join(translationDir, lang);
      if (fs.statSync(langDir).isDirectory()) {
        console.log(`\n--- Analyse des traductions pour ${lang} ---`);
        
        const files = fs.readdirSync(langDir);
        for (const file of files) {
          const filePath = path.join(langDir, file);
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Rechercher les traductions liées à "Déposer votre offre de métiers"
            const lines = content.split('\n');
            lines.forEach((line, index) => {
              if ((line.includes('Déposer votre offre de métiers') || line.includes('d.*poser.*offre.*m.*tier') || line.includes('deposer-offre-metier')) && !line.trim().startsWith('//')) {
                console.log(`${file} - Ligne ${index + 1}: ${line.trim()}`);
              }
            });
          } catch (error) {
            console.log(`Erreur lors de la lecture du fichier ${filePath}: ${error.message}`);
          }
        }
      }
    }
  } else {
    console.log('Le répertoire de traductions n\'existe pas.');
  }
}

// Fonction pour analyser les fichiers de configuration Supabase
function analyzeSupabaseFiles() {
  console.log('\n=== ANALYSE DES FICHIERS SUPABASE ===');
  
  const supabaseFiles = [
    'supabase/migrations',
    'src/integrations/supabase',
    'src/hooks/useSupabase',
    'src/providers'
  ];
  
  for (const dir of supabaseFiles) {
    if (fs.existsSync(dir)) {
      console.log(`\n--- Analyse du répertoire ${dir} ---`);
      searchInDirectory(dir, 'rechercher-reparateur').forEach(result => {
        console.log(`\nFichier: ${result.file}`);
        result.matchingLines.forEach(match => {
          console.log(`  Ligne ${match.lineNumber}: ${match.content}`);
        });
      });
    }
  }
}

// Fonction principale d'analyse
function performDeepAnalysis() {
  console.log('Recherche de toutes les occurrences de "rechercher-reparateur"...\n');
  
  const results = searchInDirectory('.', 'rechercher-reparateur');
  
  if (results.length === 0) {
    console.log('Aucune occurrence de "rechercher-reparateur" trouvée dans les fichiers du projet.');
  } else {
    console.log(`\n=== ${results.length} fichier(s) contiennent "rechercher-reparateur" ===`);
    
    results.forEach(result => {
      console.log(`\nFichier: ${result.file}`);
      result.matchingLines.forEach(match => {
        console.log(`  Ligne ${match.lineNumber}: ${match.content}`);
      });
    });
  }
  
  // Analyser les fichiers spécifiques
  analyzeRouteFiles();
  analyzeButtonComponents();
  analyzeTranslationFiles();
  analyzeSupabaseFiles();
  
  // Analyser les fichiers d'environnement
  console.log('\n=== ANALYSE DES FICHIERS D\'ENVIRONNEMENT ===');
  ['.env', '.env.local', '.env.development'].forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`\n--- Analyse de ${file} ---`);
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes('rechercher') || line.includes('deposer')) {
            console.log(`Ligne ${index + 1}: ${line.trim()}`);
          }
        });
      } catch (error) {
        console.log(`Erreur lors de la lecture du fichier ${file}: ${error.message}`);
      }
    }
  });
  
  console.log('\n=== ANALYSE TERMINÉE ===');
  console.log('Vérifiez les résultats ci-dessus pour identifier la source exacte du problème.');
}

// Exécuter l'analyse
performDeepAnalysis();