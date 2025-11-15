import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing unused imports and variables across the codebase...');

// Function to remove unused imports from a file
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let modified = false;

    // Remove standalone React import if not used (React 17+ JSX transform)
    if (content.match(/^import React from ['"]react['"];?\s*$/m) && 
        !content.includes('React.') && 
        !content.includes('React.memo') && 
        !content.includes('React.FC') &&
        !content.includes(': React.')) {
      content = content.replace(/^import React from ['"]react['"];?\s*\n/gm, '');
      modified = true;
    }

    // Remove React from combined imports if not used
    if (content.match(/^import React, \{([^}]+)\} from ['"]react['"];/m) &&
        !content.includes('React.') && 
        !content.includes('React.memo') &&
        !content.includes('React.FC') &&
        !content.includes(': React.')) {
      content = content.replace(/^import React, (\{[^}]+\}) from ['"]react['"];/gm, 'import $1 from \'react\';');
      modified = true;
    }

    // Prefix unused variables with underscore
    const unusedVariablePatterns = [
      { pattern: /const (\w+) = useSafeI18nWithRouter\(\);?\s*\n\s*const \{ t \}/g, replace: 'const { t }' },
      { pattern: /const \{ t \} = useSafeI18nWithRouter\(\);/g, check: content.includes('t('), remove: true },
    ];

    if (modified && content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with unused React imports
const filesToFix = [
  'src/components/layout/HeaderUserActions.tsx',
  'src/components/layout/ThemeToggle.tsx',
  'src/components/layout/footer/FooterAppDownload.tsx',
  'src/components/layout/footer/FooterBrands.tsx',
  'src/components/layout/footer/FooterCopyright.tsx',
  'src/components/layout/footer/FooterLanguageSelector.tsx',
  'src/components/layout/footer/FooterSocialLinks.tsx',
  'src/components/layout/nav/BadgePopulaire.tsx',
  'src/components/layout/nav/BoutiquesDropdownContent.tsx',
  'src/components/layout/nav/MegaMenuCategories.tsx',
  'src/components/layout/nav/MetierReparateurDropdownContent.tsx',
  'src/components/layout/nav/ReparationDropdownContent.tsx',
  'src/components/optimized/CategoryRenderer.tsx',
  'src/components/search/MapSearch.tsx',
  'src/components/search/SearchSuggestions.tsx',
  'src/components/search/SmartSearchSuggestions.tsx',
  'src/components/search/VoiceSearch.tsx',
  'src/components/shared/BackToTopButton.tsx',
];

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log('💡 Run: npm run build to verify fixes');
