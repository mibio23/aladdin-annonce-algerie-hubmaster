# Guide d'Application des Migrations Supabase

Ce guide vous explique comment appliquer les migrations créées lors de la correction du projet AL@DDIN.

## 📋 Prérequis

- Node.js installé sur votre machine
- Accès au dashboard Supabase avec les permissions nécessaires
- Les identifiants Supabase déjà configurés dans votre projet

## 🚀 Méthode 1: Script Automatisé (Recommandé)

### Étape 1: Exécuter le script

```bash
node apply-migrations.js
```

Ce script va:
- Tenter d'appliquer automatiquement les 3 migrations
- Vérifier si les tables ont été créées correctement
- Vous donner des instructions si une étape échoue

### Étape 2: Vérifier les résultats

Le script vous indiquera si chaque migration a réussi ou échoué. En cas d'échec, passez à la méthode manuelle.

## 🔧 Méthode 2: Application Manuelle (si le script échoue)

### Étape 1: Accéder au dashboard Supabase

1. Allez sur [https://app.supabase.com](https://app.supabase.com)
2. Connectez-vous avec votre compte
3. Sélectionnez votre projet `smsvybphkdxzvgawzoru`

### Étape 2: Ouvrir l'éditeur SQL

1. Dans le menu de gauche, cliquez sur **SQL Editor**
2. Cliquez sur **New query** pour créer une nouvelle requête

### Étape 3: Appliquer les migrations une par une

#### Migration 1: Table des brouillons utilisateur

Copiez-collez le contenu du fichier `supabase/migrations/20250111000000_create_user_drafts_table.sql` dans l'éditeur SQL et cliquez sur **Run**.

#### Migration 2: Tables des catégories

Copiez-collez le contenu du fichier `supabase/migrations/20250111000001_create_categories_tables.sql` dans l'éditeur SQL et cliquez sur **Run**.

#### Migration 3: Tables des annonces et rôles

Copiez-collez le contenu du fichier `supabase/migrations/20250111000002_create_announcements_and_roles.sql` dans l'éditeur SQL et cliquez sur **Run**.

### Étape 4: Vérifier les tables créées

Dans le menu de gauche, cliquez sur **Table Editor** et vérifiez que les tables suivantes existent:
- `user_drafts`
- `categories`
- `announcements`
- `user_roles`
- `announcement_favorites`
- `announcement_views`

## 👤 Créer votre premier utilisateur Admin

### Étape 1: Créer un compte utilisateur

1. Lancez votre application locale: `npm run dev`
2. Créez un compte utilisateur avec l'interface d'inscription
3. Notez l'adresse email que vous avez utilisée

### Étape 2: Récupérer l'ID utilisateur

#### Option A: Via le dashboard Supabase

1. Allez dans **Table Editor** → **Authentication** → **users**
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

3. **Traductions cohérentes**:
   - Changez de langue et vérifiez que le footer s'affiche correctement dans toutes les langues

## 🚨 Dépannage

### Erreur: "La table n'existe pas"
- Vérifiez que vous avez bien appliqué toutes les migrations
- Rafraîchissez la page du dashboard Supabase

### Erreur: "Permission refusée"
- Assurez-vous que votre utilisateur a bien le rôle 'admin' dans la table `user_roles`
- Déconnectez-vous et reconnectez-vous pour rafraîchir les permissions

### Erreur: "La sauvegarde automatique ne fonctionne pas"
- Vérifiez les erreurs dans la console du navigateur
- Assurez-vous que la table `user_drafts` existe et que les politiques RLS sont correctes

## 📞 Support

Si vous rencontrez des problèmes:

1. Vérifiez les logs dans la console du navigateur
2. Consultez les logs de votre application
3. Vérifiez l'état des tables dans le dashboard Supabase

---

**Note**: Les migrations créent des tables avec des politiques RLS (Row Level Security) pour garantir la sécurité des données. Assurez-vous de bien comprendre ces politiques avant de les modifier.