# Plan pour les routes et les traductions du système de boutique

## Configuration des routes

### 1. Mise à jour du fichier routesOptimizedV2.tsx

```tsx
// Ajouter les routes suivantes dans la configuration des routes :

// Route pour créer une boutique
<Route key="creer-boutique" path="creer-boutique" element={withLayout(CreateShopPage)} />

// Route pour consulter une boutique (remplace la route existante /shop/:id)
<Route key="boutique" path="boutique/:id" element={withLayout(ShopViewPage)} />
```

### 2. Mise à jour du composant LanguageRouteWrapper

```tsx
// Ajouter les routes avec préfixes de langue dans le composant LanguageRouteWrapper :

<Route path="creer-boutique" element={<CreateShopPage />} />
<Route path="boutique/:id" element={<ShopViewPage />} />
```

## Mise à jour des liens et boutons

### 1. Modification de actionButtonsData.tsx

```tsx
// Changer la ligne suivante :
{ to: "/connexion", text: t('banner.createShop'), Icon: Store },

// Par :
{ to: "/creer-boutique", text: t('banner.createShop'), Icon: Store },
```

### 2. Modification de HeaderUserActions.tsx

```tsx
// Changer la ligne suivante :
to="/connexion",

// Par :
to="/creer-boutique",
```

### 3. Modification de HeaderMobileNav.tsx

```tsx
// Changer la ligne suivante :
<Link to="/connexion" className="text-gray-700 hover:text-accessible-orange py-2 font-['Changa',Arial,sans-serif]">

// Par :
<Link to="/creer-boutique" className="text-gray-700 hover:text-accessible-orange py-2 font-['Changa',Arial,sans-serif]">
```

## Fichiers de traduction

### 1. Création du fichier de traductions pour le français (shop.ts)

```typescript
// src/lib/i18n/languages/french/shop.ts

export const shop = {
  // Page de création de boutique
  createShop: {
    title: "Créer votre boutique",
    subtitle: "Présentez vos produits et services à des milliers de clients potentiels",
    tips: {
      title: "Conseils pour une boutique réussie :",
      tip1: "Choisissez un nom clair et mémorable",
      tip2: "Ajoutez un logo de bonne qualité",
      tip3: "Présentez vos produits avec des photos attractives",
      tip4: "Rédigez une description détaillée de vos activités",
      tip5: "Indiquez des coordonnées fiables pour être contacté"
    },
    form: {
      informations: "Informations de la boutique",
      name: "Nom de la boutique",
      namePlaceholder: "Ex: Boutique Mode Alger",
      description: "Description",
      descriptionPlaceholder: "Décrivez votre boutique, vos produits et services...",
      wilaya: "Wilaya",
      wilayaPlaceholder: "Choisir une wilaya",
      phone: "Numéros de téléphone",
      phonePlaceholder: "0555 XX XX XX",
      addPhone: "Ajouter un numéro",
      logo: "Logo de la boutique",
      logoUploadText: "Cliquez pour ajouter un logo",
      productImages: "Photos des produits (max 8)",
      productImagesUploadText: "Cliquez pour ajouter des photos",
      onlineShop: "Boutique en ligne (vente sur internet)",
      videoStory: "Story vidéo disponible",
      cancelButton: "Annuler",
      submitButton: "Créer la boutique",
      creatingButton: "Création..."
    },
    benefits: {
      title: "Pourquoi créer une boutique ?",
      visibility: {
        title: "Visibilité accrue",
        description: "Votre boutique sera visible par des milliers de clients potentiels à travers toute l'Algérie."
      },
      management: {
        title: "Gestion simplifiée",
        description: "Ajoutez, modifiez et supprimez vos produits facilement depuis votre espace personnel."
      },
      contact: {
        title: "Contact direct",
        description: "Les clients peuvent vous contacter directement via votre boutique pour plus d'informations."
      }
    }
  },
  
  // Page de consultation de boutique
  viewShop: {
    backButton: "Retour à l'accueil",
    online: "En ligne",
    videoStory: "Story vidéo",
    verified: "Vérifiée",
    memberSince: "Membre depuis 2023",
    addToFavorites: "Ajouter aux favoris",
    removeFromFavorites: "Retirer des favoris",
    share: "Partager",
    productGallery: "Galerie de produits",
    about: "À propos",
    contact: "Contact",
    reviews: "Avis",
    description: "Description de la boutique",
    generalInfo: "Informations générales",
    type: "Type",
    onlineShop: "Boutique en ligne",
    physicalShop: "Boutique physique",
    location: "Localisation",
    status: "Statut",
    services: "Services",
      onlineSales: "Vente en ligne disponible",
      videoStoryAvailable: "Story vidéo disponible",
      phoneSupport: "Support téléphonique",
    contactInfo: "Informations de contact",
    call: "Appeler",
    contactShop: "Contacter la boutique",
    shopProfile: "Profil de la boutique",
    similarShops: "Boutiques similaires",
    shopNotFound: "Boutique introuvable",
    shopNotFoundText: "La boutique que vous recherchez n'existe pas ou a été supprimée.",
    linkCopied: "Lien copié",
    linkCopiedText: "Le lien de la boutique a été copié dans votre presse-papiers",
    addedToFavorites: "La boutique a été ajoutée à vos favoris",
    removedFromFavorites: "La boutique a été retirée de vos favoris"
  },
  
  // Messages d'erreur et de succès
  messages: {
    shopCreated: "Votre boutique a été créée avec succès",
    errorCreatingShop: "Une erreur est survenue lors de la création de votre boutique",
    errorLoadingShop: "Impossible de charger les informations de la boutique",
    fillRequiredFields: "Veuillez remplir tous les champs obligatoires",
    mustBeLoggedIn: "Vous devez être connecté pour créer une boutique"
  }
};
```

### 2. Création du fichier de traductions pour l'anglais (shop.ts)

```typescript
// src/lib/i18n/languages/english/shop.ts

export const shop = {
  // Page de création de boutique
  createShop: {
    title: "Create your shop",
    subtitle: "Showcase your products and services to thousands of potential customers",
    tips: {
      title: "Tips for a successful shop:",
      tip1: "Choose a clear and memorable name",
      tip2: "Add a high-quality logo",
      tip3: "Showcase your products with attractive photos",
      tip4: "Write a detailed description of your activities",
      tip5: "Provide reliable contact information"
    },
    form: {
      informations: "Shop Information",
      name: "Shop Name",
      namePlaceholder: "Ex: Fashion Shop Algiers",
      description: "Description",
      descriptionPlaceholder: "Describe your shop, products and services...",
      wilaya: "Wilaya",
      wilayaPlaceholder: "Choose a wilaya",
      phone: "Phone Numbers",
      phonePlaceholder: "0555 XX XX XX",
      addPhone: "Add a number",
      logo: "Shop Logo",
      logoUploadText: "Click to add a logo",
      productImages: "Product Photos (max 8)",
      productImagesUploadText: "Click to add photos",
      onlineShop: "Online Shop (internet sales)",
      videoStory: "Video Story Available",
      cancelButton: "Cancel",
      submitButton: "Create Shop",
      creatingButton: "Creating..."
    },
    benefits: {
      title: "Why create a shop?",
      visibility: {
        title: "Increased Visibility",
        description: "Your shop will be visible to thousands of potential customers across Algeria."
      },
      management: {
        title: "Easy Management",
        description: "Add, modify and delete your products easily from your personal space."
      },
      contact: {
        title: "Direct Contact",
        description: "Customers can contact you directly through your shop for more information."
      }
    }
  },
  
  // Page de consultation de boutique
  viewShop: {
    backButton: "Back to Home",
    online: "Online",
    videoStory: "Video Story",
    verified: "Verified",
    memberSince: "Member since 2023",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    share: "Share",
    productGallery: "Product Gallery",
    about: "About",
    contact: "Contact",
    reviews: "Reviews",
    description: "Shop Description",
    generalInfo: "General Information",
    type: "Type",
    onlineShop: "Online Shop",
    physicalShop: "Physical Shop",
    location: "Location",
    status: "Status",
    services: "Services",
    onlineSales: "Online sales available",
    videoStoryAvailable: "Video story available",
    phoneSupport: "Phone support",
    contactInfo: "Contact Information",
    call: "Call",
    contactShop: "Contact Shop",
    shopProfile: "Shop Profile",
    similarShops: "Similar Shops",
    shopNotFound: "Shop Not Found",
    shopNotFoundText: "The shop you are looking for does not exist or has been removed.",
    linkCopied: "Link Copied",
    linkCopiedText: "The shop link has been copied to your clipboard",
    addedToFavorites: "The shop has been added to your favorites",
    removedFromFavorites: "The shop has been removed from your favorites"
  },
  
  // Messages d'erreur et de succès
  messages: {
    shopCreated: "Your shop has been successfully created",
    errorCreatingShop: "An error occurred while creating your shop",
    errorLoadingShop: "Unable to load shop information",
    fillRequiredFields: "Please fill in all required fields",
    mustBeLoggedIn: "You must be logged in to create a shop"
  }
};
```

### 3. Création du fichier de traductions pour l'arabe (shop.ts)

```typescript
// src/lib/i18n/languages/arabic/shop.ts

export const shop = {
  // Page de création de boutique
  createShop: {
    title: "إنشاء متجرك",
    subtitle: "عرض منتجاتك وخدماتك على آلاف العملاء المحتملين",
    tips: {
      title: "نصائح لمتجر ناجح:",
      tip1: "اختر اسمًا واضحًا وسهل التذكر",
      tip2: "أضف شعارًا عالي الجودة",
      tip3: "اعرض منتجاتك بصور جذابة",
      tip4: "اكتب وصفًا مفصلاً لأنشطتك",
      tip5: "قدم معلومات اتصال موثوقة"
    },
    form: {
      informations: "معلومات المتجر",
      name: "اسم المتجر",
      namePlaceholder: "مثال: متجر أزياء الجزائر",
      description: "الوصف",
      descriptionPlaceholder: "صف متجرك ومنتجاتك وخدماتك...",
      wilaya: "الولاية",
      wilayaPlaceholder: "اختر ولاية",
      phone: "أرقام الهاتف",
      phonePlaceholder: "0555 XX XX XX",
      addPhone: "إضافة رقم",
      logo: "شعار المتجر",
      logoUploadText: "انقر لإضافة شعار",
      productImages: "صور المنتجات (حد أقصى 8)",
      productImagesUploadText: "انقر لإضافة صور",
      onlineShop: "متجر عبر الإنترنت (مبيعات الإنترنت)",
      videoStory: "قصة فيديو متاحة",
      cancelButton: "إلغاء",
      submitButton: "إنشاء المتجر",
      creatingButton: "جاري الإنشاء..."
    },
    benefits: {
      title: "لماذا تنشئ متجرًا؟",
      visibility: {
        title: "زيادة الرؤية",
        description: "سيكون متجرك مرئيًا لآلاف العملاء المحتملين في جميع أنحاء الجزائر."
      },
      management: {
        title: "إدارة سهلة",
        description: "أضف وعدل واحذف منتجاتك بسهولة من مساحتك الشخصية."
      },
      contact: {
        title: "اتصال مباشر",
        description: "يمكن للعملاء الاتصال بك مباشرة عبر متجرك للحصول على مزيد من المعلومات."
      }
    }
  },
  
  // Page de consultation de boutique
  viewShop: {
    backButton: "العودة إلى الرئيسية",
    online: "عبر الإنترنت",
    videoStory: "قصة فيديو",
    verified: "موثق",
    memberSince: "عضو منذ 2023",
    addToFavorites: "إضافة إلى المفضلة",
    removeFromFavorites: "إزالة من المفضلة",
    share: "مشاركة",
    productGallery: "معرض المنتجات",
    about: "حول",
    contact: "اتصال",
    reviews: "آراء",
    description: "وصف المتجر",
    generalInfo: "معلومات عامة",
    type: "النوع",
    onlineShop: "متجر عبر الإنترنت",
    physicalShop: "متجر فعلي",
    location: "الموقع",
    status: "الحالة",
    services: "الخدمات",
    onlineSales: "المبيعات عبر الإنترنت متاحة",
    videoStoryAvailable: "قصة الفيديو متاحة",
    phoneSupport: "الدعم عبر الهاتف",
    contactInfo: "معلومات الاتصال",
    call: "اتصال",
    contactShop: "اتصل بالمحل",
    shopProfile: "ملف المتجر",
    similarShops: "متاجر مماثلة",
    shopNotFound: "المتجر غير موجود",
    shopNotFoundText: "المتجر الذي تبحث عنه غير موجود أو تمت إزالته.",
    linkCopied: "تم نسخ الرابط",
    linkCopiedText: "تم نسخ رابط المتجر إلى الحافظة الخاصة بك",
    addedToFavorites: "تمت إضافة المتجر إلى المفضلة الخاصة بك",
    removedFromFavorites: "تمت إزالة المتجر من المفضلة الخاصة بك"
  },
  
  // Messages d'erreur et de succès
  messages: {
    shopCreated: "تم إنشاء متجرك بنجاح",
    errorCreatingShop: "حدث خطأ أثناء إنشاء متجرك",
    errorLoadingShop: "غير قادر على تحميل معلومات المتجر",
    fillRequiredFields: "يرجى ملء جميع الحقول المطلوبة",
    mustBeLoggedIn: "يجب أن تكون مسجلاً للدخول لإنشاء متجر"
  }
};
```

### 4. Création des fichiers de traductions pour l'allemand et l'espagnol

(Similaire aux fichiers ci-dessus, mais avec les traductions appropriées en allemand et en espagnol)

### 5. Mise à jour des fichiers d'index des traductions

```typescript
// Pour chaque langue, mettre à jour le fichier index.ts pour inclure les traductions de la boutique

// Exemple pour src/lib/i18n/languages/french/index.ts
import { common } from './common';
import { navigation } from './navigation';
import { footer } from './footer';
import { settings } from './settings';
import { shop } from './shop'; // Ajouter cette ligne

export const french = {
  common,
  navigation,
  footer,
  settings,
  shop, // Ajouter cette ligne
};
```

## Intégration avec le système de routage existant

### 1. Utilisation du hook useLanguageNavigation

```tsx
// Dans les composants, utiliser le hook pour la navigation avec gestion de la langue
const { getLocalizedPath } = useLanguageNavigation();

// Exemple d'utilisation :
<Link to={getLocalizedPath('/creer-boutique')}>
  Créer une boutique
</Link>

<Link to={getLocalizedPath(`/boutique/${shop.id}`)}>
  Voir la boutique
</Link>
```

### 2. Gestion des redirections après création

```tsx
// Dans CreateShopPage, après la création réussie de la boutique :
navigate(getLocalizedPath(`/boutique/${newShop.id}`));
```

## Composants supplémentaires nécessaires

### 1. Composant ShopImageGallery

```tsx
// src/components/shop/ShopImageGallery.tsx
// Composant pour afficher une galerie d'images avec navigation
```

### 2. Composant ContactModal

```tsx
// src/components/shop/ContactModal.tsx
// Composant modal pour contacter la boutique
```

### 3. Mise à jour du composant ShopCard

```tsx
// Mettre à jour le lien dans ShopCard pour pointer vers la nouvelle route
<Link to={`/boutique/${shop.id}`}>
```

## Tests à effectuer

1. Test de la navigation avec les préfixes de langue
2. Test du formulaire de création de boutique
3. Test des traductions dans toutes les langues
4. Test de la page de consultation de boutique
5. Test de l'ajout/retrait des favoris
6. Test du partage de boutique
7. Test de l'intégration avec le système d'authentification