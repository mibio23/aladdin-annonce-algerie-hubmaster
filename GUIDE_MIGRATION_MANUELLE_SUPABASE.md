# Guide de Migration Manuelle des Tables vers Supabase

## 📋 Prérequis

- Accès au dashboard Supabase avec les permissions nécessaires
- Le projet Supabase : `smsvybphkdxzvgawzoru`

## 🚀 Étapes de Migration

### Étape 1: Accéder au dashboard Supabase

1. Allez sur [https://app.supabase.com](https://app.supabase.com)
2. Connectez-vous avec votre compte
3. Sélectionnez votre projet `smsvybphkdxzvgawzoru`

### Étape 2: Ouvrir l'éditeur SQL

1. Dans le menu de gauche, cliquez sur **SQL Editor**
2. Cliquez sur **New query** pour créer une nouvelle requête

### Étape 3: Appliquer la migration

1. Copiez l'intégralité du contenu du fichier [`migration-manuelle-supabase.sql`](migration-manuelle-supabase.sql)
2. Collez-le dans l'éditeur SQL
3. Cliquez sur **Run** pour exécuter la migration

### Étape 4: Vérifier les tables créées

Dans le menu de gauche, cliquez sur **Table Editor** et vérifiez que les tables suivantes existent:

- ✅ `user_drafts` - Brouillons utilisateur pour sauvegarde automatique
- ✅ `categories` - Catégories et sous-catégories
- ✅ `user_roles` - Rôles utilisateur (admin, moderator, user)
- ✅ `announcements` - Annonces principales
- ✅ `announcement_favorites` - Favoris des annonces
- ✅ `announcement_views` - Statistiques de vues des annonces

## 👤 Créer votre premier utilisateur Admin

### Étape 1: Créer un compte utilisateur

1. Lancez votre application locale: `npm run dev`
2. Créez un compte utilisateur avec l'interface d'inscription
3. Notez l'adresse email que vous avez utilisée

### Étape 2: Récupérer l'ID utilisateur

#### Option A: Via le dashboard Supabase

1. Allez dans **Authentication** → **Users**
2. Trouvez votre utilisateur dans la liste
3. Copiez la valeur de la colonne `id` (format UUID)

#### Option B: Via la console du navigateur

1. Connectez-vous à votre application
2. Ouvrez la console du navigateur (F12)
3. Exécutez: `localStorage.getItem('supabase.auth.token')`
4. Décodez le JWT pour trouver l'ID utilisateur

### Étape 3: Attribuer le rôle admin

1. Retournez dans l'éditeur SQL du dashboard Supabase
2. Exécutez la requête suivante en remplaçant `VOTRE_UUID_UTILISATEUR`:

```sql
INSERT INTO public.user_roles (user_id, role, granted_by) 
VALUES ('VOTRE_UUID_UTILISATEUR', 'admin', 'VOTRE_UUID_UTILISATEUR');
```

### Étape 4: Vérifier les permissions

1. Déconnectez-vous et reconnectez-vous à votre application
2. Essayez d'accéder à la page d'administration: `/admin`
3. Vous devriez maintenant avoir accès au tableau de bord admin

## 🔍 Vérification finale

### Fonctionnalités à tester:

1. **Sauvegarde automatique**: 
   - Créez une annonce et vérifiez que les données sont sauvegardées automatiquement
   - Vérifiez dans la table `user_drafts` que les brouillons sont bien enregistrés

2. **Administration sécurisée**:
   - Accédez à `/admin` avec votre compte admin
   - Essayez d'accéder avec un compte non-admin pour vérifier que l'accès est bloqué

3. **Gestion des annonces**:
   - Créez une nouvelle annonce
   - Vérifiez qu'elle apparaît dans la liste
   - Testez les fonctionnalités de favoris
   - Vérifiez que le compteur de vues fonctionne

4. **Catégories**:
   - Vérifiez que les catégories et sous-catégories s'affichent correctement
   - Testez le filtrage par catégorie

## 🚨 Dépannage

### Erreur: "La table n'existe pas"
- Vérifiez que vous avez bien appliqué toute la migration
- Rafraîchissez la page du dashboard Supabase
- Vérifiez les logs d'erreurs dans l'éditeur SQL

### Erreur: "Permission refusée"
- Assurez-vous que votre utilisateur a bien le rôle 'admin' dans la table `user_roles`
- Déconnectez-vous et reconnectez-vous pour rafraîchir les permissions
- Vérifiez que les politiques RLS sont correctement configurées

### Erreur: "La sauvegarde automatique ne fonctionne pas"
- Vérifiez les erreurs dans la console du navigateur
- Assurez-vous que la table `user_drafts` existe et que les politiques RLS sont correctes
- Vérifiez que les triggers sont bien créés

### Erreur: "Les annonces ne s'affichent pas"
- Vérifiez que les politiques RLS permettent l'accès public aux annonces actives
- Vérifiez que la vue `announcements_safe` est correctement créée
- Assurez-vous que les permissions sont bien accordées

## 📊 Structure des tables créées

### user_drafts
- Stocke les brouillons automatiques des formulaires
- Clés: user_id, draft_key
- Contient les données au format JSONB

### categories
- Catégories et sous-catégories hiérarchiques
- Auto-référence via parent_id
- Contient les données de base + icônes

### user_roles
- Gestion des rôles utilisateur
- Supporte: admin, moderator, user
- Historique des attributions de rôles

### announcements
- Table principale des annonces
- Champs complets pour tous les types d'annonces
- Gestion de l'expiration automatique

### announcement_favorites
- Gestion des favoris des utilisateurs
- Relation many-to-many entre users et announcements

### announcement_views
- Statistiques de vues des annonces
- Tracking anonyme et authentifié
- Support pour les analytics

## 🎉 Migration terminée!

Une fois ces étapes terminées, votre application devrait avoir toutes les fonctionnalités de base opérationnelles:

- ✅ Sauvegarde automatique des formulaires
- ✅ Gestion des catégories hiérarchiques
- ✅ Système d'annonces complet
- ✅ Gestion des favoris
- ✅ Statistiques de vues
- ✅ Administration sécurisée
- ✅ Permissions granulaires

Pour toute question ou problème, consultez les logs du dashboard Supabase ou la console du navigateur.