const fs = require('fs');
const path = require('path');

// Fix files with unused React imports
const fixUnusedReactImports = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Remove standalone "import React from 'react';" line
    content = content.replace(/^import React from ['"]react['"];?\s*\n/gm, '');
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
};

// Fix files with unused specific imports  
const fixUnusedImports = (filePath, unusedImports) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    unusedImports.forEach(imp => {
      // Remove from destructured imports
      const regex1 = new RegExp(`,\\s*${imp}\\s*(?=[,}])`, 'g');
      const regex2 = new RegExp(`${imp}\\s*,\\s*`, 'g');
      const regex3 = new RegExp(`\\{\\s*${imp}\\s*\\}\\s*from`, 'g');
      
      if (content.match(regex1) || content.match(regex2) || content.match(regex3)) {
        content = content.replace(regex1, '');
        content = content.replace(regex2, '');
        content = content.replace(regex3, 'from');
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      return true;
    }
  }
  return false;
};

// Fix unused parameters by prefixing with underscore
const fixUnusedParams = (filePath, fixes) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    fixes.forEach(({ line, param }) => {
      const regex = new RegExp(`\\b${param}\\b(?=\\s*[,:)])`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, `_${param}`);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      return true;
    }
  }
  return false;
};

const fixes = [
  { file: 'src/hooks/useFavorites.ts', unused: ['React'] },
  { file: 'src/hooks/useGeolocation.ts', unused: ['React'] },
  { file: 'src/hooks/useInactivityTimer.ts', unused: ['React'] },
  { file: 'src/hooks/useLoadingSettings.ts', unused: ['React'] },
  { file: 'src/hooks/useLocalStorage.ts', unused: ['useEffect'] },
  { file: 'src/hooks/useMetiersAnnouncements.ts', unused: ['React'] },
  { file: 'src/hooks/useNotifications.ts', unused: ['React'] },
  { file: 'src/hooks/useSecureContact.ts', unused: ['BusinessContact'] },
  { file: 'src/lib/i18n/admin/TranslationAdmin.tsx', unused: ['Upload', 'AlertTriangle', 'CheckCircle'] },
  { file: 'src/lib/i18n/hooks/useTranslationAdmin.ts', unused: ['TranslationAdmin', 'TranslationMonitor'] },
];

console.log('🔧 Fixing TypeScript errors...\n');

fixes.forEach(({ file, unused }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (unused.includes('React')) {
    if (fixUnusedReactImports(filePath)) {
      console.log(`✓ Fixed React import in ${file}`);
    }
  }
  
  if (fixUnusedImports(filePath, unused.filter(u => u !== 'React'))) {
    console.log(`✓ Fixed unused imports in ${file}`);
  }
});

// Fix specific parameter issues
const paramFixes = [
  { file: 'src/hooks/useFavorites.ts', params: [
    { line: 15, param: 'announcementId' },
    { line: 26, param: 'announcementId' },
    { line: 30, param: 'announcementId' },
    { line: 34, param: 'announcementId' }
  ]},
  { file: 'src/hooks/useIntelligentAssistant.ts', params: [{ line: 178, param: 'context' }] },
  { file: 'src/hooks/usePopularCategories.tsx', params: [
    { line: 3, param: 'categorizedAnnouncements' },
    { line: 43, param: 'cat' }
  ]}
];

paramFixes.forEach(({ file, params }) => {
  const filePath = path.join(process.cwd(), file);
  if (fixUnusedParams(filePath, params)) {
    console.log(`✓ Fixed unused parameters in ${file}`);
  }
});

console.log('\n✅ TypeScript error fixes completed!');
