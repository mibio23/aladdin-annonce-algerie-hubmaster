#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Correction complète de toutes les erreurs TypeScript...\n');

// Liste complète des corrections underscore
const underscoreMap = {
  // React hooks
  '_useState': 'useState',
  '_useEffect': 'useEffect',
  '_useCallback': 'useCallback',
  '_useMemo': 'useMemo',
  '_useRef': 'useRef',
  
  // Card components
  '_CardHeader': 'CardHeader',
  '_CardDescription': 'CardDescription',
  '_CardFooter': 'CardFooter',
  '_CardContent': 'CardContent',
  '_CardTitle': 'CardTitle',
  
  // Lucide icons
  '_MessageCircle': 'MessageCircle',
  '_Phone': 'Phone',
  '_Mail': 'Mail',
  '_Clock': 'Clock',
  '_Plus': 'Plus',
  '_FileText': 'FileText',
  '_MapPin': 'MapPin',
  '_DollarSign': 'DollarSign',
  '_Check': 'Check',
  '_Users': 'Users',
  '_Eye': 'Eye',
  '_Calendar': 'Calendar',
  '_Upload': 'Upload',
  '_AlertCircle': 'AlertCircle',
  '_CheckCircle': 'CheckCircle',
  '_Reply': 'Reply',
  '_Archive': 'Archive',
  '_Edit': 'Edit',
  '_Trash2': 'Trash2',
  '_EyeOff': 'EyeOff',
  '_Briefcase': 'Briefcase',
  '_User': 'User',
  '_Loader2': 'Loader2',
  '_Star': 'Star',
  '_Zap': 'Zap',
  '_Search': 'Search',
  '_MoreHorizontal': 'MoreHorizontal',
  '_Settings': 'Settings',
  '_Package': 'Package',
  '_ChevronDown': 'ChevronDown',
  '_X': 'X',
  '_Filter': 'Filter',
  
  // Tabs
  '_Tabs': 'Tabs',
  '_TabsContent': 'TabsContent',
  '_TabsList': 'TabsList',
  '_TabsTrigger': 'TabsTrigger',
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changes = 0;

    // 1. Corriger les imports avec underscore
    Object.entries(underscoreMap).forEach(([wrong, correct]) => {
      const regex = new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, correct);
        changes += matches.length;
      }
    });

    // 2. Supprimer React import standalone si non utilisé
    if (content.includes('import React from') && 
        !content.includes('React.') && 
        !content.includes(': React.') &&
        !content.includes('<React.')) {
      content = content.replace(/^import React from ['"]react['"];?\s*\n/gm, '');
      changes++;
    }

    // 3. Supprimer React des imports combinés si non utilisé
    if (content.match(/^import React, \{([^}]+)\} from ['"]react['"];/m) &&
        !content.includes('React.') && 
        !content.includes(': React.')) {
      content = content.replace(/^import React, (\{[^}]+\}) from ['"]react['"];/gm, 'import $1 from \'react\';');
      changes++;
    }

    if (changes > 0 && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { fixed: true, changes };
    }
    return { fixed: false, changes: 0 };
  } catch (error) {
    console.error(`❌ Erreur: ${filePath}`, error.message);
    return { fixed: false, changes: 0 };
  }
}

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      scanDirectory(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const srcDir = path.join(__dirname, 'src');
const allFiles = scanDirectory(srcDir);

console.log(`📁 ${allFiles.length} fichiers trouvés\n`);

let totalFixed = 0;
let totalChanges = 0;

allFiles.forEach(file => {
  const relativePath = path.relative(__dirname, file);
  const result = fixFile(file);
  
  if (result.fixed) {
    console.log(`✅ ${relativePath} (${result.changes} corrections)`);
    totalFixed++;
    totalChanges += result.changes;
  }
});

console.log(`\n✨ Total: ${totalChanges} corrections dans ${totalFixed} fichiers`);
