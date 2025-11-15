# 📧 Système de Notifications "Aladdin" - Guide d'Installation et Configuration

## 🎯 Vue d'ensemble du système

Le système de notifications **Aladdin** est une solution complète multi-canaux intégrée avec :
- ✅ **Resend** pour les emails (gratuit jusqu'à 3000 emails/mois)
- 🔄 **Interface SMS** prête pour intégration future
- 📱 **Notifications in-app** déjà fonctionnelles

---

## 🛠 Installation et Configuration

### 1. Configuration de Resend (Gratuit)

#### Étape 1 : Créer un compte Resend
1. Allez sur [resend.com](https://resend.com) et créez un compte gratuit
2. Confirmez votre email

#### Étape 2 : Valider votre domaine
⚠️ **IMPORTANT** - Validez votre domaine pour éviter les erreurs :
1. Accédez à [resend.com/domains](https://resend.com/domains)
2. Ajoutez votre domaine et suivez les instructions DNS

#### Étape 3 : Générer la clé API
1. Allez sur [resend.com/api-keys](https://resend.com/api-keys)
2. Créez une nouvelle clé API
3. Copiez la clé (elle commence par `re_`)

#### Étape 4 : Ajouter la clé dans Lovable
✅ **Déjà fait** - La clé `RESEND_API_KEY` a été configurée dans les secrets Supabase

---

## 📁 Structure du système implémenté

### 🗄️ Base de données
```sql
-- Tables créées :
✅ notifications              - Stockage des notifications
✅ notification_preferences   - Préférences utilisateur  
✅ notification_templates     - Templates réutilisables
✅ notification_campaigns     - Campagnes groupées
✅ notification_delivery_log  - Logs de livraison
```

### ⚡ Edge Functions
```typescript
✅ send-notification-email    - Envoi emails via Resend
✅ process-notifications      - Traitement batch des notifications
```

### 🎨 Interface Admin
```typescript
✅ NotificationSystemPanel    - Panel principal (/admin/notifications)
✅ NotificationDashboard      - Statistiques et tests
✅ NotificationChannelSettings - Configuration canaux
```

### 🔧 Services
```typescript
✅ NotificationService        - Service principal pour créer/gérer notifications
```

---

## 🚀 Utilisation du système

### 1. Accès à l'interface admin
```
URL: /admin/notifications
```

**Fonctionnalités disponibles :**
- 📊 Dashboard avec statistiques
- ✉️ Test d'envoi d'emails
- 🔧 Configuration des canaux
- 📝 Création de notifications

### 2. Utilisation programmatique

#### Créer une notification simple
```typescript
import { NotificationService } from "@/services/notificationService";

// Notification de bienvenue
await NotificationService.sendWelcomeNotification(
  userId, 
  "John Doe"
);

// Notification personnalisée
await NotificationService.createNotification({
  userId: "user-123",
  title: "Nouveau message",
  message: "Vous avez reçu un nouveau message",
  type: "info",
  category: "message",
  channels: ["in_app", "email"],
  priority: "normal"
});
```

#### Méthodes utilitaires disponibles
```typescript
✅ sendWelcomeNotification()           - Notification de bienvenue
✅ sendNewMessageNotification()        - Nouveau message
✅ sendSecurityNotification()          - Alerte sécurité
✅ sendAnnouncementExpiringNotification() - Expiration annonce
✅ getUserNotifications()              - Récupérer notifications
✅ markAsRead()                        - Marquer comme lu
✅ updateUserPreferences()             - Mettre à jour préférences
```

---

## 📊 Canaux de notification configurés

### ✅ Email (Resend)
- **Statut** : Actif et fonctionnel
- **Limite** : 3000 emails/mois (gratuit)
- **Configuration** : Automatique via `RESEND_API_KEY`

### 🔄 SMS (Future implémentation)
- **Statut** : Interface prête, en attente de configuration
- **Fournisseurs suggérés** : Twilio, TextMagic, SMS.to
- **Configuration** : Interface admin disponible

### 📱 In-App (Déjà implémenté)
- **Statut** : Fonctionnel via `useNotifications` hook
- **Intégration** : Automatique avec le système existant

---

## 🧪 Tests et validation

### Test d'email
1. Allez sur `/admin/notifications`
2. Onglet "Dashboard"
3. Section "Test d'envoi email"
4. Saisissez votre email et cliquez "Envoyer test email"

### Test de notification
1. Utilisez la section "Créer une notification"
2. Remplissez le formulaire
3. Cliquez "Créer notification"

---

## 🔐 Sécurité et permissions

### RLS Policies activées
```sql
✅ Users can view their own notifications
✅ Users can update their notification read status  
✅ System can create notifications
✅ Users can manage their own preferences
```

### Permissions Edge Functions
```toml
✅ send-notification-email: verify_jwt = false (système)
✅ process-notifications: verify_jwt = false (système)
```

---

## 📈 Monitoring et logs

### Logs disponibles
- **Email delivery** : Supabase Edge Function logs
- **Processing** : Logs de traitement batch
- **Database** : Logs de livraison dans `notification_delivery_log`

### Accès aux logs
- [Logs Email Function](https://supabase.com/dashboard/project/smsvybphkdxzvgawzoru/functions/send-notification-email/logs)
- [Logs Processing Function](https://supabase.com/dashboard/project/smsvybphkdxzvgawzoru/functions/process-notifications/logs)

---

## 🔮 Prochaines étapes

### SMS Integration (À venir)
1. Choisir un fournisseur SMS (Twilio recommandé)
2. Ajouter la clé API via secrets Supabase
3. Mettre à jour l'edge function pour le SMS
4. Activer dans l'interface admin

### Améliorations possibles
- 📧 Templates d'emails HTML avancés
- 📊 Analytics détaillées des campagnes  
- 🎯 Segmentation utilisateur avancée
- 🔄 Notifications push web

---

## ✅ Récapitulatif installation

**Ce qui est fait :**
1. ✅ Base de données complète avec RLS
2. ✅ Edge functions fonctionnelles  
3. ✅ Interface admin complète
4. ✅ Service de notifications
5. ✅ Intégration Resend configurée
6. ✅ Tests et monitoring

**Prêt à utiliser :**
- Emails via Resend (gratuit)
- Notifications in-app
- Interface admin complète
- Tests fonctionnels

**Configuration requise :**
- Compte Resend gratuit ✅ (fait)
- Validation domaine email ⚠️ (à faire par l'utilisateur)
- Tests de validation ✅ (disponibles)

Le système **Aladdin** est maintenant opérationnel ! 🎉