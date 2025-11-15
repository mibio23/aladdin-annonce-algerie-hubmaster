#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Languages supported
const LANGUAGES = ['fr', 'en', 'ar', 'de', 'es', 'it'];
const TRANSLATIONS_DIR = path.join(__dirname, '../src/lib/i18n/languages');

/**
 * Load all translations for a given language
 */
function loadTranslations(lang) {
  try {
    const translationPath = path.join(TRANSLATIONS_DIR, lang, 'index.ts');
    
    if (!fs.existsSync(translationPath)) {
      console.warn(`⚠️  Translation file not found for language: ${lang}`);
      return {};
    }

    // For now, we'll do a basic validation by checking if key files exist
    const langDir = path.join(TRANSLATIONS_DIR, lang);
    const files = fs.readdirSync(langDir);
    
    return {
      hasIndex: files.includes('index.ts'),
      hasAuth: files.includes('auth.ts'),
      hasSearch: files.includes('search.ts'),
      hasCommon: files.includes('common.ts'),
      hasNavigation: files.includes('navigation.ts'),
      files: files
    };
  } catch (error) {
    console.error(`❌ Error loading translations for ${lang}:`, error.message);
    return {};
  }
}

/**
 * Scan React components for translation keys
 */
function scanComponentsForKeys() {
  const componentsDir = path.join(__dirname, '../src/components');
  const keys = new Set();
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        
        // Find t('key') or t("key") patterns
        const matches = content.match(/t\(['"`]([^'"`]+)['"`]\)/g);
        if (matches) {
          matches.forEach(match => {
            const key = match.match(/t\(['"`]([^'"`]+)['"`]\)/)[1];
            keys.add(key);
          });
        }
      }
    }
  }
  
  scanDirectory(componentsDir);
  return Array.from(keys).sort();
}

/**
 * Validate translation consistency
 */
function validateTranslations() {
  console.log('🔍 Validation des traductions...\n');
  
  const translationData = {};
  const issues = [];
  
  // Load all translations
  for (const lang of LANGUAGES) {
    translationData[lang] = loadTranslations(lang);
  }
  
  // Check if all languages have required files
  const requiredFiles = ['index.ts', 'auth.ts', 'search.ts', 'common.ts'];
  
  for (const lang of LANGUAGES) {
    const data = translationData[lang];
    
    for (const file of requiredFiles) {
      const hasFile = file === 'index.ts' ? data.hasIndex :
                     file === 'auth.ts' ? data.hasAuth :
                     file === 'search.ts' ? data.hasSearch :
                     file === 'common.ts' ? data.hasCommon : false;
      
      if (!hasFile) {
        issues.push(`❌ ${lang.toUpperCase()}: Fichier manquant - ${file}`);
      }
    }
  }
  
  // Scan for used translation keys
  const usedKeys = scanComponentsForKeys();
  console.log(`📊 Clés de traduction trouvées dans les composants: ${usedKeys.length}`);
  
  if (usedKeys.length > 0) {
    console.log('\n🔑 Clés de traduction utilisées:');
    usedKeys.slice(0, 10).forEach(key => console.log(`   - ${key}`));
    if (usedKeys.length > 10) {
      console.log(`   ... et ${usedKeys.length - 10} autres`);
    }
  }
  
  // Report issues
  console.log('\n📋 Rapport de validation:');
  
  if (issues.length === 0) {
    console.log('✅ Tous les fichiers de traduction requis sont présents!');
  } else {
    console.log('⚠️  Problèmes détectés:');
    issues.forEach(issue => console.log(`   ${issue}`));
  }
  
  // Show language file structure
  console.log('\n📁 Structure des fichiers de traduction:');
  for (const lang of LANGUAGES) {
    const data = translationData[lang];
    console.log(`   ${lang.toUpperCase()}: ${data.files ? data.files.join(', ') : 'Aucun fichier trouvé'}`);
  }
  
  return {
    issues: issues.length,
    usedKeys: usedKeys.length,
    languages: LANGUAGES.length
  };
}

// Main execution
if (require.main === module) {
  const result = validateTranslations();
  
  console.log('\n🎯 Résumé:');
  console.log(`   - Langues supportées: ${result.languages}`);
  console.log(`   - Clés utilisées: ${result.usedKeys}`);
  console.log(`   - Problèmes détectés: ${result.issues}`);
  
  if (result.issues > 0) {
    console.log('\n💡 Actions recommandées:');
    console.log('   1. Corriger les fichiers manquants');
    console.log('   2. Vérifier la cohérence des clés entre les langues');
    console.log('   3. Exécuter à nouveau la validation');
  }
  
  process.exit(result.issues > 0 ? 1 : 0);
}

module.exports = { validateTranslations, scanComponentsForKeys };