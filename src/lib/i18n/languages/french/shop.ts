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
    removedFromFavorites: "La boutique a été retirée de vos favoris",
    noReviews: "Aucun avis pour le moment",
    noReviewsText: "Soyez le premier à laisser un avis sur cette boutique."
  },
  
  // Modal de contact
  contactModal: {
    title: "Contacter {shopName}",
    description: "Envoyez un message directement à la boutique pour plus d'informations.",
    contactInfo: "Informations de contact",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    messagePlaceholder: "Décrivez ce que vous recherchez ou posez vos questions...",
    sendingButton: "Envoi en cours...",
    sendButton: "Envoyer le message",
    messageSent: "Message envoyé !",
    messageSentText: "Votre message a été envoyé à {shopName}. Vous recevrez une réponse rapidement.",
    messageError: "Une erreur est survenue lors de l'envoi de votre message"
  },
  
  // Messages d'erreur et de succès
  messages: {
    shopCreated: "Votre boutique a été créée avec succès",
    errorCreatingShop: "Une erreur est survenue lors de la création de votre boutique",
    errorLoadingShop: "Impossible de charger les informations de la boutique",
    fillRequiredFields: "Veuillez remplir tous les champs obligatoires",
    mustBeLoggedIn: "Vous devez être connecté pour créer une boutique",
    messageRequired: "Veuillez saisir un message"
  }
};