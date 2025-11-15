const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Remove standalone "import React from "react";" on any line
    const reactOnlyPattern = /^import React from ["']react["'];?\s*\n/gm;
    if (reactOnlyPattern.test(content)) {
      content = content.replace(reactOnlyPattern, '');
      modified = true;
    }

    // Remove React from combined imports like "import React, { ... }"
    // This handles cases like: import React, { useState } from "react";
    // Becomes: import { useState } from "react";
    const reactCombinedPattern = /import React,\s*(\{[^}]+\})\s*from\s*["']react["'];?/g;
    if (reactCombinedPattern.test(content)) {
      content = content.replace(reactCombinedPattern, 'import $1 from "react";');
      modified = true;
    }

    // Clean up any double empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (modified && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return false;
  }
}

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src/data/categories');
console.log(`Searching for files in: ${srcDir}`);

const files = findFiles(srcDir);
console.log(`Found ${files.length} TypeScript files`);

let fixedCount = 0;
const fixedFiles = [];

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
    fixedFiles.push(file);
  }
});

console.log(`\nFixed ${fixedCount} files with unused React imports:`);
fixedFiles.forEach(file => console.log(`  - ${file}`));
