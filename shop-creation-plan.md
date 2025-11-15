# Plan d'implémentation du système de création de boutique

## Analyse des besoins

D'après l'analyse du code existant, j'ai identifié les éléments suivants :

1. **Structure des données de boutique** (interface Shop) :
   - id: string
   - name: string
   - logoUrl: string
   - productImageUrls: string[]
   - phoneNumbers: string[]
   - wilaya: string
   - description: string
   - isOnline: boolean
   - hasVideoStory: boolean
   - isVerified?: boolean

2. **Pages existantes** :
   - `ShopDetails.tsx` : Page de consultation des détails d'une boutique
   - `MesBoutiques.tsx` : Page de gestion des boutiques de l'utilisateur
   - `HomePage.tsx` : Page d'accueil avec des boutons d'action

3. **Références au bouton "Créer votre boutique"** :
   - Dans `actionButtonsData.tsx` : pointe vers `/connexion`
   - Dans `HeaderUserActions.tsx` : pointe vers `/connexion`
   - Dans `HeaderMobileNav.tsx` : pointe vers `/connexion`
   - Dans `MesBoutiques.tsx` : pointe vers `/creer-boutique` (route non définie)

## Implémentation prévue

### 1. Création du formulaire de création de boutique (CreateShopPage.tsx)

**Structure du formulaire** :
- Informations de base :
  - Nom de la boutique *
  - Description *
  - Wilaya *
  - Numéros de téléphone (multiple)
- Visuel :
  - Logo de la boutique *
  - Images des produits (multiple, max 8)
- Options :
  - Boutique en ligne (checkbox)
  - Story vidéo (checkbox)
  - Vérification (checkbox)

**Fonctionnalités** :
- Validation des champs obligatoires
- Upload d'images avec aperçu
- Gestion des numéros de téléphone multiples
- Sauvegarde des données dans le localStorage (mock)
- Redirection vers la page de la boutique après création

### 2. Création d'une page de consultation de boutique améliorée (ShopViewPage.tsx)

**Structure de la page** :
- En-tête avec logo et informations de base
- Galerie d'images avec navigation
- Description complète
- Informations de contact
- Section d'avis et évaluations
- Boutons d'action (contacter, partager, etc.)

**Fonctionnalités** :
- Design moderne et attrayant
- Navigation entre les images
- Intégration avec les cartes (si applicable)
- Boutons de partage sur les réseaux sociaux
- Section d'avis interactifs

### 3. Ajout des routes

**Configuration des routes** :
- `/creer-boutique` : Formulaire de création de boutique
- `/boutique/:id` : Page de consultation de boutique (remplace `/shop/:id`)
- `/mes-boutiques` : Page de gestion des boutiques (existe déjà)

### 4. Mise à jour des boutons et liens

**Modifications à apporter** :
- `actionButtonsData.tsx` : Modifier le lien de `/connexion` vers `/creer-boutique`
- `HeaderUserActions.tsx` : Modifier le lien de `/connexion` vers `/creer-boutique`
- `HeaderMobileNav.tsx` : Modifier le lien de `/connexion` vers `/creer-boutique`

### 5. Ajout des traductions

**Fichiers de traduction à modifier** :
- `src/lib/i18n/languages/french/shop.ts` (nouveau fichier)
- `src/lib/i18n/languages/english/shop.ts` (nouveau fichier)
- `src/lib/i18n/languages/arabic/shop.ts` (nouveau fichier)
- `src/lib/i18n/languages/german/shop.ts` (nouveau fichier)
- `src/lib/i18n/languages/spanish/shop.ts` (nouveau fichier)

**Traductions nécessaires** :
- Titres de la page
- Labels des champs du formulaire
- Messages d'erreur et de succès
- Textes des boutons
- Contenu de la page de consultation

### 6. Intégration avec le système d'authentification

**Points à considérer** :
- L'utilisateur doit être connecté pour créer une boutique
- Redirection vers la page de connexion si non authentifié
- Association de la boutique avec l'utilisateur connecté

## Étapes de développement

1. Créer le composant `CreateShopPage.tsx` avec le formulaire de création
2. Créer le composant `ShopViewPage.tsx` avec une design moderne
3. Ajouter les routes dans `routesOptimizedV2.tsx`
4. Mettre à jour les liens dans les composants existants
5. Créer les fichiers de traduction
6. Tester le flux complet de création et consultation
7. Intégrer avec le système d'authentification

## Composants à créer

1. `CreateShopPage.tsx` : Formulaire de création de boutique
2. `ShopViewPage.tsx` : Page de consultation de boutique
3. `ShopForm.tsx` : Composant de formulaire réutilisable
4. `ShopGallery.tsx` : Galerie d'images pour la boutique
5. `ShopContact.tsx` : Section de contact pour la boutique

## Dépendances

- Composants UI existants (Card, Button, Input, etc.)
- Hook de navigation avec langue (`useLanguageNavigation`)
- Système de traduction (`useSafeI18nWithRouter`)
- Système d'authentification (`useAuth`)
- Système de notifications (`useToast`)