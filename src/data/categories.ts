export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: 'maison-mobilier-gros-electromenager', name: 'Maison, Mobilier & Gros Électroménager', slug: 'maison-mobilier-gros-electromenager' },
  { id: 'bricolage-materiaux', name: 'Bricolage & Matériaux', slug: 'bricolage-materiaux' },
  { id: 'informatique', name: 'Informatique', slug: 'informatique' },
  { id: 'telephonie', name: 'Téléphonie', slug: 'telephonie' },
  { id: 'image-son', name: 'Image & Son', slug: 'image-son' },
  { id: 'jeux-video-consoles', name: 'Jeux Vidéo & Consoles', slug: 'jeux-video-consoles' },
  { id: 'livres-papeterie', name: 'Livres & Papeterie', slug: 'livres-papeterie' },
  { id: 'vehicules', name: 'Véhicules', slug: 'vehicules' },
  { id: 'immobilier', name: 'Immobilier', slug: 'immobilier' },
  { id: 'emploi-carriere', name: 'Emploi & Carrière', slug: 'emploi-carriere' },
  { id: 'mode-habillement', name: 'Mode & Habillement', slug: 'mode-habillement' },
  { id: 'accessoires-mode-bijoux', name: 'Accessoires Mode & Bijoux', slug: 'accessoires-mode-bijoux' },
  { id: 'beaute-sante-bien-etre', name: 'Beauté, Santé & Bien-être', slug: 'beaute-sante-bien-etre' },
  { id: 'loisirs-collections', name: 'Loisirs & Collections', slug: 'loisirs-collections' },
  { id: 'metier-reparateur', name: 'Métier & Réparateur', slug: 'metier-reparateur' },
  { id: 'artisanat-produits-traditionnels', name: 'Artisanat & Produits Traditionnels', slug: 'artisanat-produits-traditionnels' },
  { id: 'jeux-jouets', name: 'Jeux & Jouets', slug: 'jeux-jouets' },
  { id: 'puericulture-equipement-bebe', name: 'Puériculture & Équipement Bébé', slug: 'puericulture-equipement-bebe' },
  { id: 'services-particuliers', name: 'Services Particuliers', slug: 'services-particuliers' },
  { id: 'services-professionnels', name: 'Services Professionnels', slug: 'services-professionnels' },
  { id: 'animaux', name: 'Animaux', slug: 'animaux' },
  { id: 'vacances-voyages', name: 'Vacances & Voyages', slug: 'vacances-voyages' },
  { id: 'materiel-professionnel-specifique', name: 'Matériel Professionnel Spécifique', slug: 'materiel-professionnel-specifique' },
  { id: 'cours-formations-lecons', name: 'Cours, Formations & Leçons', slug: 'cours-formations-lecons' },
  { id: 'perdu-trouve', name: 'Perdu & Trouvé', slug: 'perdu-trouve' },
  { id: 'a-donner', name: 'À donner', slug: 'a-donner' },
  { id: 'echanges-communautaires', name: 'Échanges Communautaires', slug: 'echanges-communautaires' },
  { id: 'gastronomie-produits-terroir', name: 'Gastronomie & Produits du Terroir', slug: 'gastronomie-produits-terroir' },
  { id: 'photographie-video', name: 'Photographie & Vidéo', slug: 'photographie-video' },
  { id: 'jardinage-plantes', name: 'Jardinage & Plantes', slug: 'jardinage-plantes' },
  { id: 'sante-medical', name: 'Santé & Médical', slug: 'sante-medical' },
  { id: 'education-formation', name: 'Éducation & Formation', slug: 'education-formation' },
  { id: 'transaction-monnaie-fiduciaire-freelance', name: 'Transaction, Monnaie Fiduciaire & Freelance', slug: 'transaction-monnaie-fiduciaire-freelance' },
  { id: 'sport-plein-air', name: 'Sport & Plein Air', slug: 'sport-plein-air' },
  { id: 'tech-multimedia', name: 'Tech & Multimédia', slug: 'tech-multimedia' },
  { id: 'services-bien-etre', name: 'Services & Bien-être', slug: 'services-bien-etre' }
];

// Fonction utilitaire pour obtenir une catégorie par son ID
export const getCategoryById = (id: string): Category | undefined => {
  return CATEGORIES.find(category => category.id === id);
};

// Fonction utilitaire pour obtenir une catégorie par son slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return CATEGORIES.find(category => category.slug === slug);
};

// Fonction utilitaire pour obtenir les noms de toutes les catégories
export const getCategoryNames = (): string[] => {
  return CATEGORIES.map(category => category.name);
};