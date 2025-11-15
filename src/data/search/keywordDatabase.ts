// Base de données sophistiquée de mots-clés pour la recherche
export const keywordDatabase: Record<string, string[]> = {
  // Meubles
  "meubles": [
    "meuble", "mobilier", "ameublement", "furniture", "décoration",
    "intérieur", "design", "moderne", "classique", "vintage",
    "bois", "métal", "verre", "cuir", "tissu", "rotin"
  ],

  // Électroménager
  "electromenager": [
    "électroménager", "appareil", "machine", "équipement", "électrique",
    "cuisine", "gros électroménager", "blanc", "noir", "inox", "encastrable",
    "énergie", "économique", "A++", "A+++", "eco", "silencieux",
    "programmable", "digital", "technologie", "smart", "connecté"
  ],

  // Petit Électroménager
  "petit-electromenager": [
    "petit électroménager", "portable", "compact", "cuisine", "préparation",
    "robot", "mixeur", "blender", "hachoir", "râpe", "presse-agrumes",
    "grille-pain", "toaster", "cafetière", "expresso", "thé", "bouilloire",
    "fer", "repassage", "vapeur", "aspirateur", "nettoyage"
  ],

  // Décoration
  "decoration": [
    "décoration", "déco", "ornement", "embellissement", "style",
    "ambiance", "atmosphère", "cosy", "élégant", "moderne", "bohème",
    "scandinave", "industriel", "rustique", "contemporain", "minimaliste",
    "couleur", "texture", "motif", "lumineux", "chaleureux"
  ],

  // Cuisine & Ustensiles
  "cuisine-ustensiles": [
    "cuisine", "ustensile", "culinaire", "gastronomie", "chef",
    "casserole", "poêle", "marmite", "wok", "tajine", "cocotte",
    "couteau", "planche", "spatule", "fouet", "louche", "écumoire",
    "vaisselle", "assiette", "bol", "tasse", "verre", "couverts",
    "inox", "antiadhésif", "céramique", "fonte", "aluminium"
  ],

  // Linge de Maison
  "linge-maison": [
    "linge", "textile", "tissu", "coton", "lin", "soie", "satin",
    "percale", "flanelle", "jersey", "microfibre", "bambou",
    "lit", "literie", "drap", "housse", "taie", "oreiller", "coussin",
    "couverture", "plaid", "édredon", "couette", "duvet",
    "salle de bain", "serviette", "peignoir", "tapis de bain",
    "blanc", "coloré", "uni", "imprimé", "brodé", "dentelle"
  ],

  // Nettoyage & Entretien
  "nettoyage-entretien": [
    "nettoyage", "entretien", "ménage", "propre", "hygiène",
    "dégraissant", "détartrant", "désinfectant", "antibactérien",
    "bio", "écologique", "naturel", "sans chimie", "parfumé",
    "aspirateur", "balai", "serpillière", "chiffon", "éponge",
    "brosse", "récurant", "liquide", "poudre", "spray", "lingette",
    "sol", "vitre", "cuisine", "salle de bain", "WC", "multi-usage"
  ]
};

// Mots-clés spécifiques par sous-sous-catégorie
export const detailedKeywords: Record<string, string[]> = {
  // Salon
  "salon": [
    "salon", "séjour", "living", "canapé", "sofa", "fauteuil", "pouf",
    "table basse", "meuble TV", "bibliothèque", "étagère", "console",
    "cuir", "tissu", "velours", "angle", "convertible", "relax",
    "moderne", "classique", "design", "confortable", "spacieux"
  ],

  // Chambre
  "chambre": [
    "chambre", "lit", "matelas", "sommier", "tête de lit", "cadre",
    "armoire", "placard", "dressing", "commode", "table de chevet",
    "140x190", "160x200", "180x200", "200x200", "king size", "queen size",
    "bois", "métal", "capitonné", "rangement", "miroir", "penderie"
  ],

  // Cuisine (meuble)
  "cuisine": [
    "cuisine", "meuble cuisine", "placard", "tiroir", "plan de travail",
    "îlot", "bar", "tabouret", "chaise", "table", "buffet",
    "moderne", "rustique", "design", "fonctionnel", "rangement",
    "laqué", "bois", "stratifié", "granit", "quartz", "inox"
  ],

  // Réfrigérateur
  "refrigerateur": [
    "réfrigérateur", "frigo", "frigidaire", "réfrigération", "froid",
    "congélateur", "freezer", "combiné", "américain", "compact",
    "encastrable", "pose libre", "deux portes", "multi-portes",
    "No Frost", "froid ventilé", "distributeur", "glaçons", "eau",
    "A++", "A+++", "économique", "silencieux", "inox", "blanc", "noir"
  ],

  // Lave-linge
  "lave-linge": [
    "lave-linge", "machine à laver", "lavage", "lessive", "essorage",
    "hublot", "top", "ouverture dessus", "ouverture frontale",
    "6kg", "7kg", "8kg", "9kg", "10kg", "12kg", "capacité",
    "1400 tours", "1600 tours", "variable", "programmable",
    "eco", "rapide", "délicat", "coton", "synthétique", "laine"
  ],

  // Four
  "four": [
    "four", "cuisson", "rôtissage", "gril", "chaleur tournante",
    "multifonction", "pyrolyse", "catalyse", "vapeur", "micro-ondes",
    "encastrable", "pose libre", "électrique", "gaz", "mixte",
    "programmable", "timer", "sonde", "température", "précision",
    "plateau", "grille", "lèchefrite", "porte froide", "sécurité"
  ],

  // Luminaires
  "luminaires": [
    "luminaire", "éclairage", "lampe", "lustre", "plafonnier",
    "suspension", "applique", "lampadaire", "abat-jour", "ampoule",
    "LED", "halogène", "incandescent", "dimmable", "variateur",
    "moderne", "design", "vintage", "industriel", "scandinave",
    "cristal", "métal", "bois", "verre", "tissu", "rotin"
  ],

  // Aspirateurs
  "aspirateurs": [
    "aspirateur", "aspiration", "nettoyage", "poussière", "saleté",
    "traîneau", "balai", "robot", "main", "sans fil", "filaire",
    "sac", "sans sac", "cyclonique", "HEPA", "filtre", "brosse",
    "parquet", "moquette", "carrelage", "animaux", "allergies",
    "silencieux", "puissant", "léger", "maniable", "autonomie"
  ]
};