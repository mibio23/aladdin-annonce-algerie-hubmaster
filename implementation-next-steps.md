# Étapes restantes pour compléter l'implémentation du système de boutique

## État actuel

Nous avons implémenté avec succès les composants principaux du système de création et de consultation de boutique :

### Composants créés
1. **CreateShopPage.tsx** - Formulaire de création de boutique avec tous les champs nécessaires
2. **ShopViewPage.tsx** - Page de consultation de boutique avec design moderne
3. **ShopImageGallery.tsx** - Galerie d'images avec navigation
4. **ContactModal.tsx** - Modal pour contacter la boutique

### Traductions
1. **Français** - Fichier complet avec toutes les traductions nécessaires

### Documentation
1. **Plan d'implémentation détaillé** - Documents de conception pour tous les composants
2. **Configuration des routes** - Instructions pour ajouter les nouvelles routes

## Étapes restantes

### 1. Configuration des routes

**Fichier à modifier :** `src/config/routesOptimizedV2.tsx`

```typescript
// Importer les nouveaux composants
import CreateShopPage from '@/pages/CreateShopPage';
import ShopViewPage from '@/pages/ShopViewPage';

// Ajouter les routes dans la configuration
<Route key="creer-boutique" path="creer-boutique" element={withLayout(CreateShopPage)} />
<Route key="boutique" path="boutique/:id" element={withLayout(ShopViewPage)} />

// Ajouter dans le composant LanguageRouteWrapper
<Route path="creer-boutique" element={<CreateShopPage />} />
<Route path="boutique/:id" element={<ShopViewPage />} />
```

### 2. Mise à jour des liens

**Fichiers à modifier :**
- `src/data/actionButtonsData.tsx`
- `src/components/layout/HeaderUserActions.tsx`
- `src/components/layout/HeaderMobileNav.tsx`

**Modification :** Changer les liens de `/connexion` vers `/creer-boutique` pour les boutons "Créer votre boutique"

### 3. Traductions pour les autres langues

**Langues restantes :**
- Anglais (`src/lib/i18n/languages/english/shop.ts`)
- Arabe (`src/lib/i18n/languages/arabic/shop.ts`)
- Allemand (`src/lib/i18n/languages/german/shop.ts`)
- Espagnol (`src/lib/i18n/languages/spanish/shop.ts`)

**Mise à jour des fichiers d'index :**
- Mettre à jour les fichiers `index.ts` pour chaque langue afin d'inclure les traductions de la boutique

### 4. Corrections d'erreurs TypeScript

**Erreurs à corriger :**
1. Dans `CreateShopPage.tsx` : Supprimer les variables `t` et `isRTL` non utilisées
2. Dans `ContactModal.tsx` : Corriger la référence à `user.name` qui n'existe pas
3. Dans `ShopViewPage.tsx` : Corriger l'erreur de type pour le composant ShopImageGallery

### 5. Tests

**Tests à effectuer :**
1. Test du formulaire de création de boutique
2. Test de la page de consultation de boutique
3. Test de la navigation avec les préfixes de langue
4. Test de l'ajout/retrait des favoris
5. Test du partage de boutique
6. Test de l'intégration avec le système d'authentification

## Instructions détaillées

### Configuration des routes

1. Ouvrir le fichier `src/config/routesOptimizedV2.tsx`
2. Ajouter les imports pour CreateShopPage et ShopViewPage
3. Ajouter les routes dans le tableau `publicRoutes`
4. Ouvrir le composant `LanguageRouteWrapper` dans le même fichier
5. Ajouter les routes sans préfixe dans le composant

### Mise à jour des liens

1. Dans `actionButtonsData.tsx` :
   - Trouver la ligne avec `to: "/connexion"`
   - Remplacer par `to: "/creer-boutique"`

2. Dans `HeaderUserActions.tsx` :
   - Trouver la ligne avec `to="/connexion"`
   - Remplacer par `to="/creer-boutique"`

3. Dans `HeaderMobileNav.tsx` :
   - Trouver la ligne avec `to="/connexion"`
   - Remplacer par `to="/creer-boutique"`

### Traductions

1. Créer les fichiers de traduction pour chaque langue en se basant sur le fichier français
2. Mettre à jour les fichiers d'index pour chaque langue

### Corrections TypeScript

1. Dans `CreateShopPage.tsx` :
   - Remplacer `const { t, isRTL } = useSafeI18nWithRouter();` par `useSafeI18nWithRouter();`

2. Dans `ContactModal.tsx` :
   - Remplacer `setName(user.name || user.email || '');` par `setName(user.email || '');`

3. Dans `ShopViewPage.tsx` :
   - Assurer que toutes les propriétés requises sont passées au composant ShopImageGallery

## Ordre suggéré des tâches

1. Corriger les erreurs TypeScript
2. Configurer les routes
3. Mettre à jour les liens
4. Créer les traductions pour l'anglais (priorité)
5. Tester le flux complet
6. Créer les traductions pour les autres langues
7. Tests finaux dans toutes les langues

## Résultat attendu

Une fois ces étapes terminées, le système de création et de consultation de boutique sera entièrement fonctionnel avec :
- Un formulaire complet pour créer des boutiques
- Une page moderne pour consulter les boutiques
- Un support multilingue complet
- Une navigation appropriée avec les préfixes de langue
- Une intégration complète avec le système existant