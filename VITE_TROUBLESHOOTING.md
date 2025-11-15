# Guide de dépannage Vite - Erreur @react-three/drei

## Problème courant : Erreur 504 "Outdated Optimize Dep"

Lors du développement avec Vite et React Three Fiber, vous pouvez rencontrer l'erreur suivante :

```
GET http://localhost:8080/node_modules/.vite/deps/@react-three_drei.js?v=246a4725
NS_ERROR_CORRUPTED_CONTENT
État 504 Outdated Optimize Dep
```

## Causes possibles

1. **Cache Vite corrompu** : Les fichiers pré-optimisés dans `node_modules/.vite/deps/` sont devenus invalides
2. **Conflit de versions** : Incompatibilité entre les versions de `@react-three/drei`, `@react-three/fiber` et `three`
3. **Service Worker** : Le service worker intercepte les requêtes et sert une version corrompue du module

## Solutions rapides

### 1. Nettoyer le cache Vite (recommandé en premier)

```bash
# Utiliser le script que nous avons créé
npm run clean

# Ou manuellement
rmdir /s /q node_modules\.vite
```

### 2. Redémarrer le serveur de développement

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
npm run dev
```

### 3. Réinstaller les dépendances (si le problème persiste)

```bash
npm run clean:full
```

## Modifications apportées à votre projet

### 1. Configuration Vite améliorée

Dans `vite.config.ts`, nous avons ajouté explicitement les dépendances Three.js à la section `optimizeDeps` :

```typescript
optimizeDeps: {
  include: [
    'react',
    'react-dom',
    'react-router-dom',
    '@supabase/supabase-js',
    'lucide-react',
    '@react-three/fiber',    // Ajouté
    '@react-three/drei',     // Ajouté
    'three'                  // Ajouté
  ],
  force: true,
},
```

### 2. Service Worker configuré

Dans `public/sw.js`, nous avons ajouté une exclusion pour les dépendances Vite :

```javascript
// Skip Vite dev server dependencies to prevent caching issues
if (url.pathname.includes('/node_modules/.vite/')) {
  return;
}
```

### 3. Scripts de nettoyage

Dans `package.json`, nous avons ajouté deux nouveaux scripts :

```json
"clean": "node clean-vite-cache.js",
"clean:full": "rmdir /s /q node_modules\\.vite && npm install"
```

## Prévention

Pour éviter que ce problème se reproduise :

1. **Après chaque mise à jour de dépendances**, nettoyez toujours le cache Vite avec `npm run clean`
2. **Utilisez des versions compatibles** des packages Three.js
3. **Évitez de modifier manuellement** le contenu de `node_modules/.vite/`

## Commandes utiles

```bash
# Nettoyer le cache Vite
npm run clean

# Nettoyer et réinstaller tout
npm run clean:full

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Si le problème persiste

Si après toutes ces étapes le problème persiste :

1. Supprimez complètement le dossier `node_modules`
2. Supprimez `package-lock.json`
3. Réinstallez avec `npm install --force`
4. Redémarrez avec `npm run dev`

## Versions compatibles testées

- `@react-three/fiber`: ^8.18.0
- `@react-three/drei`: ^9.88.17
- `three`: ^0.158.0

Ces versions sont connues pour fonctionner correctement ensemble avec Vite.