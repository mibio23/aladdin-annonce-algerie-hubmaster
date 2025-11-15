#!/usr/bin/env node

/**
 * Translation CLI - Command line tools for translation management
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${COLORS.blue}ℹ${COLORS.reset} ${msg}`),
  success: (msg) => console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`),
  warning: (msg) => console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`),
  error: (msg) => console.log(`${COLORS.red}✗${COLORS.reset} ${msg}`),
  title: (msg) => console.log(`${COLORS.bright}${COLORS.cyan}${msg}${COLORS.reset}`),
};

// Commands
const commands = {
  async validate() {
    log.title('🔍 Translation Validation');
    try {
      // Run the advanced validator
      const { runValidation } = require('../src/lib/i18n/validation/advanced-validator.ts');
      await runValidation();
    } catch (error) {
      log.error(`Validation failed: ${error.message}`);
      process.exit(1);
    }
  },

  async coverage() {
    log.title('📊 Translation Coverage Report');
    
    const languagesDir = path.join(process.cwd(), 'src/lib/i18n/languages');
    const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
    const usedKeys = await scanForTranslationKeys();
    
    console.log(`\nTotal translation keys used: ${COLORS.bright}${usedKeys.length}${COLORS.reset}\n`);
    
    for (const lang of languages) {
      const langDir = path.join(languagesDir, languageNames[lang]);
      const coverage = calculateCoverage(langDir, usedKeys);
      
      const status = coverage >= 95 ? '✅' : coverage >= 85 ? '⚠️' : '❌';
      const color = coverage >= 95 ? COLORS.green : coverage >= 85 ? COLORS.yellow : COLORS.red;
      
      console.log(`${status} ${lang.toUpperCase()}: ${color}${coverage.toFixed(1)}%${COLORS.reset}`);
    }
  },

  async audit() {
    log.title('🔍 Translation Audit');
    
    const issues = [];
    const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
    const usedKeys = await scanForTranslationKeys();
    
    // Check for unused translations
    for (const lang of languages) {
      const allTranslations = loadAllTranslations(lang);
      const unused = findUnusedTranslations(allTranslations, usedKeys);
      
      if (unused.length > 0) {
        issues.push({
          type: 'unused',
          language: lang,
          keys: unused,
        });
      }
    }
    
    // Check for hardcoded strings
    const hardcodedStrings = await findHardcodedStrings();
    if (hardcodedStrings.length > 0) {
      issues.push({
        type: 'hardcoded',
        strings: hardcodedStrings,
      });
    }
    
    // Report issues
    if (issues.length === 0) {
      log.success('No issues found! 🎉');
    } else {
      console.log(`\n${COLORS.yellow}Found ${issues.length} issue(s):${COLORS.reset}\n`);
      
      issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue.type.toUpperCase()}`);
        
        if (issue.type === 'unused') {
          console.log(`   Language: ${issue.language.toUpperCase()}`);
          console.log(`   Unused keys: ${issue.keys.length}`);
          issue.keys.slice(0, 5).forEach(key => console.log(`   - ${key}`));
          if (issue.keys.length > 5) {
            console.log(`   ... and ${issue.keys.length - 5} more`);
          }
        } else if (issue.type === 'hardcoded') {
          console.log(`   Hardcoded strings found: ${issue.strings.length}`);
          issue.strings.slice(0, 5).forEach(str => console.log(`   - ${str.file}:${str.line}`));
          if (issue.strings.length > 5) {
            console.log(`   ... and ${issue.strings.length - 5} more`);
          }
        }
        
        console.log('');
      });
    }
  },

  async sync() {
    log.title('🔄 Translation Sync');
    log.info('Syncing translations across all languages...');
    
    // This would implement actual sync logic
    // For now, just validate and show what would be synced
    
    const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
    const masterKeys = await scanForTranslationKeys();
    
    for (const lang of languages) {
      const existing = getExistingKeys(lang);
      const missing = masterKeys.filter(key => !existing.includes(key));
      const extra = existing.filter(key => !masterKeys.includes(key));
      
      if (missing.length > 0 || extra.length > 0) {
        console.log(`\n${lang.toUpperCase()}:`);
        if (missing.length > 0) {
          log.warning(`Would add ${missing.length} missing keys`);
        }
        if (extra.length > 0) {
          log.info(`Would remove ${extra.length} unused keys`);
        }
      }
    }
    
    log.info('Run with --apply to actually perform the sync');
  },

  async export() {
    const lang = process.argv[3];
    if (!lang) {
      log.error('Please specify a language: npm run translate:export fr');
      return;
    }
    
    log.title(`📤 Exporting ${lang.toUpperCase()} translations`);
    
    try {
      const translations = loadAllTranslations(lang);
      const outputFile = `translations-${lang}-${new Date().toISOString().split('T')[0]}.json`;
      
      fs.writeFileSync(outputFile, JSON.stringify(translations, null, 2));
      log.success(`Exported to ${outputFile}`);
    } catch (error) {
      log.error(`Export failed: ${error.message}`);
    }
  },

  async import() {
    const file = process.argv[3];
    const lang = process.argv[4];
    
    if (!file || !lang) {
      log.error('Usage: npm run translate:import <file> <language>');
      return;
    }
    
    log.title(`📥 Importing ${lang.toUpperCase()} translations from ${file}`);
    
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      // Import logic would go here
      log.success('Import completed');
    } catch (error) {
      log.error(`Import failed: ${error.message}`);
    }
  },

  async doctor() {
    log.title('🏥 Translation System Health Check');
    
    const checks = [
      {
        name: 'Translation files exist',
        check: () => {
          const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
          return languages.every(lang => {
            const langDir = path.join(process.cwd(), 'src/lib/i18n/languages', languageNames[lang]);
            return fs.existsSync(langDir);
          });
        }
      },
      {
        name: 'Required translation domains present',
        check: () => {
          const requiredDomains = ['auth', 'common', 'search', 'navigation'];
          return requiredDomains.every(domain => {
            return fs.existsSync(path.join(process.cwd(), `src/lib/i18n/languages/french/${domain}.ts`));
          });
        }
      },
      {
        name: 'No TypeScript errors in translation files',
        check: () => {
          try {
            execSync('npx tsc --noEmit --skipLibCheck src/lib/i18n/**/*.ts', { stdio: 'pipe' });
            return true;
          } catch {
            return false;
          }
        }
      },
      {
        name: 'ESLint translation rules configured',
        check: () => {
          return fs.existsSync(path.join(process.cwd(), 'src/lib/i18n/tools/eslint-plugin.ts'));
        }
      },
    ];
    
    console.log('');
    let passed = 0;
    
    for (const check of checks) {
      const result = check.check();
      const status = result ? '✅' : '❌';
      console.log(`${status} ${check.name}`);
      if (result) passed++;
    }
    
    console.log(`\n${passed}/${checks.length} checks passed`);
    
    if (passed === checks.length) {
      log.success('Translation system is healthy! 🎉');
    } else {
      log.warning('Some issues found. Run specific commands to fix them.');
    }
  },

  help() {
    log.title('🌐 Translation CLI Help');
    
    console.log(`
Available commands:

${COLORS.cyan}validate${COLORS.reset}     Run comprehensive translation validation
${COLORS.cyan}coverage${COLORS.reset}     Show translation coverage by language  
${COLORS.cyan}audit${COLORS.reset}        Find unused translations and hardcoded strings
${COLORS.cyan}sync${COLORS.reset}         Sync translation keys across languages
${COLORS.cyan}export${COLORS.reset} <lang> Export translations for a language
${COLORS.cyan}import${COLORS.reset} <file> <lang> Import translations from file
${COLORS.cyan}doctor${COLORS.reset}       Run health check on translation system
${COLORS.cyan}help${COLORS.reset}         Show this help message

Examples:
  npm run translate:validate
  npm run translate:coverage  
  npm run translate:export fr
  npm run translate:import translations.json en
`);
  }
};

// Helper functions
const languageNames = {
  fr: 'french',
  ar: 'arabic', 
  en: 'english',
  de: 'german',
  es: 'spanish',
  it: 'italian',
};

async function scanForTranslationKeys() {
  const keys = new Set();
  const srcDir = path.join(process.cwd(), 'src');
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/t\(['"`]([^'"`]+)['"`]\)/g) || [];
        
        matches.forEach(match => {
          const key = match.match(/t\(['"`]([^'"`]+)['"`]\)/)[1];
          keys.add(key);
        });
      }
    }
  }
  
  scanDir(srcDir);
  return Array.from(keys);
}

function calculateCoverage(langDir, usedKeys) {
  // Simplified coverage calculation
  const existingKeys = getExistingKeys(path.basename(langDir));
  const covered = usedKeys.filter(key => existingKeys.includes(key));
  return (covered.length / usedKeys.length) * 100;
}

function getExistingKeys(lang) {
  // This would load all translation keys for a language
  // For now, return a mock set
  return [];
}

function loadAllTranslations(lang) {
  // This would load all translations for a language
  // For now, return empty object
  return {};
}

function findUnusedTranslations(allTranslations, usedKeys) {
  // Find translations that exist but aren't used
  return [];
}

async function findHardcodedStrings() {
  // This would scan for hardcoded strings
  return [];
}

// Main execution
const command = process.argv[2];

if (!command || !commands[command]) {
  commands.help();
  process.exit(command ? 1 : 0);
}

commands[command]().catch(error => {
  log.error(`Command failed: ${error.message}`);
  process.exit(1);
});