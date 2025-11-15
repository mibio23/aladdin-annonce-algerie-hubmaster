# Guide pour Trouver et Corriger les Boutons dans la Page "Mes Annonces"

## Objectif

Trouver et mettre à jour les boutons "+ Nouvelle annonce" et "Créer ma première annonce" dans la page "Mes annonces" pour qu'ils pointent vers le formulaire de création de boutique.

## Étapes de Recherche

### 1. Chercher les Fichiers Liés aux Annonces

Utilisez la recherche de fichiers pour trouver les composants liés aux annonces :

```bash
# Chercher dans le répertoire des pages
find src/pages -name "*announcement*" -o -name "*Annonce*" -o -name "*user*"

# Chercher dans le répertoire des composants
find src/components -name "*announcement*" -o -name "*Annonce*" -o -name "*user*"

# Chercher dans le répertoire app
find src/pages/app -name "*announcement*" -o -name "*Annonce*"
```

### 2. Chercher les Textes des Boutons

Utilisez la recherche de contenu pour trouver les textes des boutons :

```bash
# Chercher "+ Nouvelle annonce"
grep -r "+ Nouvelle annonce" src/
grep -r "Nouvelle annonce" src/

# Chercher "Créer ma première annonce"
grep -r "Créer ma première annonce" src/
grep -r "Créer ma première" src/

# Chercher "mes annonces"
grep -r "mes annonces" src/
grep -r "Mes annonces" src/
```

### 3. Chercher les Routes Liées aux Annonces

Vérifiez le fichier de configuration des routes pour trouver les routes liées aux annonces :

```bash
# Chercher les routes d'annonces
grep -r "annonces" src/config/
grep -r "announcement" src/config/
```

## Fichiers Probables à Vérifier

### 1. Pages Utilisateur
- `src/pages/user/MyAnnouncementsPage.tsx`
- `src/pages/user/AnnouncementsPage.tsx`
- `src/pages/user/DashboardPage.tsx`

### 2. Pages App
- `src/pages/app/announcements.tsx`
- `src/pages/app/announcements/index.tsx`
- `src/pages/app/dashboard.tsx`

### 3. Composants
- `src/components/user/MyAnnouncements.tsx`
- `src/components/user/AnnouncementList.tsx`
- `src/components/user/AnnouncementCard.tsx`

## Modifications à Effectuer

### 1. Bouton "+ Nouvelle annonce"

Cherchez un code similaire à :
```typescript
<Button asChild>
  <Link to="/deposer-annonce">
    <PlusCircle className="h-4 w-4 mr-2" />
    + Nouvelle annonce
  </Link>
</Button>
```

Remplacez par :
```typescript
<Button asChild>
  <Link to="/creer-boutique">
    <Shop className="h-4 w-4 mr-2" />
    + Nouvelle annonce
  </Link>
</Button>
```

### 2. Bouton "Créer ma première annonce"

Cherchez un code similaire à :
```typescript
<Button asChild variant="outline">
  <Link to="/deposer-annonce">
    <PlusCircle className="h-4 w-4 mr-2" />
    Créer ma première annonce
  </Link>
</Button>
```

Remplacez par :
```typescript
<Button asChild variant="outline">
  <Link to="/creer-boutique">
    <Shop className="h-4 w-4 mr-2" />
    Créer ma première annonce
  </Link>
</Button>
```

## Importations Nécessaires

Assurez-vous d'importer les icônes nécessaires :
```typescript
import { Shop, PlusCircle } from 'lucide-react';
```

## Tests à Effectuer

### 1. Test de Navigation
- Connectez-vous à votre compte utilisateur
- Accédez à la page "Mes annonces"
- Cliquez sur "+ Nouvelle annonce"
- Vérifiez que vous êtes redirigé vers `/creer-boutique`

### 2. Test du Bouton "Créer ma première annonce"
- Si vous n'avez pas d'annonces, le bouton "Créer ma première annonce" devrait s'afficher
- Cliquez sur ce bouton
- Vérifiez que vous êtes redirigé vers `/creer-boutique`

### 3. Test avec Préfixes de Langue
- Testez avec différents préfixes de langue (`/fr/mes-annonces`, `/en/my-announcements`, etc.)
- Vérifiez que les redirections fonctionnent correctement

## Dépannage

### Problème 1 : Boutons Introuvables
**Solution :** Utilisez la recherche de fichiers avec les mots-clés suivants :
- "announcement"
- "annonce"
- "user"
- "mes"

### Problème 2 : Lien ne Fonctionne Pas
**Solution :** Vérifiez que le composant `Link` est correctement importé et utilisé :
```typescript
import { Link } from 'react-router-dom';
```

### Problème 3 : Icône ne s'Affiche Pas
**Solution :** Assurez-vous que l'icône `Shop` est correctement importée :
```typescript
import { Shop } from 'lucide-react';
```

## Conclusion

Une fois que vous avez trouvé et mis à jour les boutons dans la page "Mes annonces", tous les points d'accès au formulaire de création de boutique seront cohérents et fonctionneront correctement.

Les utilisateurs pourront désormais accéder au formulaire de création de boutique depuis :
- La bannière principale
- La navigation desktop et mobile
- La page "Mes annonces"
- Tous les autres points d'accès existants