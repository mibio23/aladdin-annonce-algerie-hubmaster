#!/bin/bash

echo "🔧 Correction automatique des erreurs TypeScript restantes..."

# Corriger MesFavoris.tsx - ligne 154
sed -i 's/onChange={(_e) => setSearchQuery(e.target.value)}/onChange={(event) => setSearchQuery(event.target.value)}/g' src/pages/MesFavoris.tsx

# Supprimer les imports React inutilisés dans tous les fichiers
find src/pages -name "*.tsx" -type f -exec sed -i '/^import React from ['\''"]react['\''"]/d' {} \;

# Corriger les imports avec underscore restants
find src/pages -name "*.tsx" -type f -exec sed -i 's/_Filter/Filter/g; s/_Heart/Heart/g; s/_Edit/Edit/g; s/_Trash2/Trash2/g' {} \;

# Corriger les propriétés _id en id
find src/pages -name "*.tsx" -type f -exec sed -i 's/\._id/.id/g; s/_created_at/created_at/g; s/_updated_at/updated_at/g' {} \;

# Corriger les paramètres e en event
find src/pages -name "*.tsx" -type f -exec sed -i 's/onChange={(_e) =>/onChange={(event) =>/g' {} \;
find src/pages -name "*.tsx" -type f -exec sed -i 's/\.target\.value}$/event.target.value}/g' {} \;

# Supprimer useEffect inutilisé
sed -i 's/import { useState, useEffect }/import { useState }/g' src/pages/DeposerOffreMetier.tsx

# Supprimer les imports de ligne entière inutilisés (React)
find src/pages -name "*.tsx" -type f -exec sed -i '/^import React from "react";$/d' {} \;

echo "✅ Corrections automatiques terminées"
echo ""
echo "🚀 Lancez maintenant: npm run build"
