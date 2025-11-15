
# Système de Gestion des Bannières Publicitaires AL@DDIN

## Vue d'ensemble

Ce système permet la gestion complète des bannières publicitaires du carrousel principal depuis l'interface d'administration. Les modifications sont automatiquement reflétées sur le site en temps réel.

## Fonctionnalités

### 🎯 Gestion des Bannières
- ✅ Création, modification et suppression de bannières
- ✅ Upload d'images personnalisées
- ✅ Choix de dégradés de couleurs prédéfinis
- ✅ Gestion de l'ordre d'affichage
- ✅ Activation/désactivation des bannières
- ✅ Support multilingue (Français/Arabe)

### 🌐 Traductions
- ✅ Interface de traduction intégrée
- ✅ Support des langues : Français et Arabe
- ✅ Traductions pour : titre, sous-titre, description, bouton
- ✅ Fallback automatique vers la langue par défaut

### 💾 Stockage
- ✅ Base de données Supabase pour les métadonnées
- ✅ Stockage Supabase pour les images
- ✅ Sécurité Row Level Security (RLS)
- ✅ Politiques d'accès granulaires

### 🎨 Interface Admin
- ✅ Interface intuitive de gestion
- ✅ Aperçu en temps réel du carrousel
- ✅ Statistiques (bannières actives, totales)
- ✅ Formulaires de création/modification complets

## Structure de la Base de Données

### Table `advertising_banners`
```sql
- id (UUID, PK)
- title (TEXT) - Titre par défaut
- subtitle (TEXT) - Sous-titre optionnel
- description (TEXT) - Description optionnelle
- button_text (TEXT) - Texte du bouton
- image_url (TEXT) - URL de l'image uploadée
- link_url (TEXT) - URL de destination
- background_gradient (TEXT) - Classes Tailwind pour le dégradé
- icon_emoji (TEXT) - Emoji à afficher si pas d'image
- position_order (INTEGER) - Ordre d'affichage
- is_active (BOOLEAN) - Statut actif/inactif
- created_at, updated_at (TIMESTAMP)
- created_by (UUID) - Référence utilisateur
```

### Table `advertising_banner_translations`
```sql
- id (UUID, PK)
- banner_id (UUID, FK)
- language_code (TEXT) - 'fr' ou 'ar'
- title, subtitle, description, button_text (TEXT)
- created_at, updated_at (TIMESTAMP)
```

### Bucket Storage `banner-images`
- Stockage public des images de bannières
- Politiques d'accès : lecture publique, écriture authentifiée

## Composants Créés

### Frontend
1. **`useAdvertisingBanners`** - Hook pour récupérer les bannières avec traductions
2. **`DatabaseAdvertisingCarousel`** - Carrousel alimenté par la base de données
3. **`BannerForm`** - Formulaire de création/modification avec upload d'images
4. **`EnhancedBannerManagement`** - Interface d'administration complète

### Pages Modifiées
- **`Index.tsx`** - Utilise maintenant `DatabaseAdvertisingCarousel`
- **`AdminDashboard.tsx`** - Utilise `EnhancedBannerManagement`

## Comment Utiliser

### 1. Accès à l'Administration
```
/admin/banners
```

### 2. Créer une Nouvelle Bannière
1. Cliquer sur "Nouvelle Bannière"
2. Remplir les informations de base
3. Ajouter les traductions (optionnel)
4. Uploader une image (optionnel)
5. Choisir un dégradé de fond
6. Définir l'ordre d'affichage
7. Activer la bannière

### 3. Modifier une Bannière Existante
1. Cliquer sur l'icône "Modifier" de la bannière
2. Modifier les champs souhaités
3. Sauvegarder

### 4. Aperçu en Temps Réel
- L'aperçu dans l'admin se met à jour automatiquement
- Les changements apparaissent immédiatement sur le site
- Pas besoin de redémarrage ou de cache clearing

## Sécurité

### Row Level Security (RLS)
- **Lecture publique** : Seules les bannières actives sont visibles
- **Écriture authentifiée** : Seuls les utilisateurs connectés peuvent modifier
- **Isolation par utilisateur** : Chaque utilisateur ne peut modifier que ses créations

### Upload d'Images
- Validation du type de fichier (images uniquement)
- Stockage sécurisé dans Supabase Storage
- URLs publiques pour l'affichage

## Migration et Déploiement

### Données Existantes
Le système inclut des données d'exemple compatibles avec l'ancien carrousel statique.

### Compatibilité
- Les traductions existantes dans les fichiers `ecoCarousel.ts` restent fonctionnelles
- Transition transparente vers le système dynamique
- Pas de rupture de service

## Extensions Futures Possibles

### Analytics (À Implémenter)
- Tracking des clics sur les bannières
- Statistiques d'impressions
- Rapports de performance

### Planification (À Implémenter)
- Dates de début/fin pour les campagnes
- Activation automatique programmée

### A/B Testing (À Implémenter)
- Tests de variantes de bannières
- Optimisation automatique

### Ciblage (À Implémenter)
- Affichage conditionnel par région
- Ciblage par type d'utilisateur

## Support Technique

Pour toute question ou problème :
1. Vérifier les logs dans la console du navigateur
2. Contrôler les politiques RLS dans Supabase
3. S'assurer que l'authentification est configurée
4. Vérifier les permissions du bucket storage

---

**Note** : Ce système nécessite une authentification active pour fonctionner entièrement. Les utilisateurs non connectés peuvent voir les bannières mais ne peuvent pas les modifier.
