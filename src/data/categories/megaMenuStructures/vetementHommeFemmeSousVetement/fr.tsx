import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresFr: MenuCategory = {
  id: "mode-accessoires",
  name: "Vêtement Homme, Femme & sous-vêtement",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "Vêtements Homme",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "T-shirts",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "Basiques", slug: "basiques" },
            { id: "imprimes", name: "Imprimés", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "techniques", name: "Techniques", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "Polos",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "Manches courtes", slug: "manches-courtes" },
            { id: "manches-longues", name: "Manches longues", slug: "manches-longues" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "Chemises",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "Classiques", slug: "classiques" },
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "decontractees", name: "Décontractées", slug: "decontractees" },
            { id: "carreaux", name: "Carreaux", slug: "carreaux" },
            { id: "denim", name: "Denim", slug: "denim" },
            { id: "habillees", name: "Habillées", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "Pulls & gilets",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "Maille fine", slug: "maille-fine" },
            { id: "laine", name: "Laine", slug: "laine" },
            { id: "col-rond", name: "Col rond", slug: "col-rond" },
            { id: "col-v", name: "Col V", slug: "col-v" },
            { id: "col-roule", name: "Col roulé", slug: "col-roule" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "Sweats & hoodies",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "À capuche", slug: "a-capuche" },
            { id: "zippes", name: "Zippés", slug: "zippes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "sportifs", name: "Sportifs", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "Débardeurs", slug: "debardeurs" },
        {
          id: "jeans",
          name: "Jeans",
          slug: "jeans",
          subcategories: [
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "straight", name: "Straight", slug: "straight" },
            { id: "tapered", name: "Tapered", slug: "tapered" },
            { id: "skinny", name: "Skinny", slug: "skinny" },
            { id: "bootcut", name: "Bootcut", slug: "bootcut" }
          ]
        },
        {
          id: "pantalons",
          name: "Pantalons",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "Chino", slug: "chino" },
            { id: "costume", name: "Costume", slug: "costume" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "jogging", name: "Jogging", slug: "jogging" },
            { id: "urbain", name: "Urbain", slug: "urbain" }
          ]
        },
        {
          id: "shorts",
          name: "Shorts",
          slug: "shorts",
          subcategories: [
            { id: "jeans", name: "Jeans", slug: "jeans" },
            { id: "sport", name: "Sport", slug: "sport" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "bermudas", name: "Bermudas", slug: "bermudas" }
          ]
        },
        { id: "survetements", name: "Survêtements", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "Vestes légères",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "Jean", slug: "jean" },
            { id: "cuir", name: "Cuir", slug: "cuir" },
            { id: "bomber", name: "Bomber", slug: "bomber" },
            { id: "harrington", name: "Harrington", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "Blousons",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "Teddy", slug: "teddy" },
            { id: "pilote", name: "Pilote", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "Manteaux",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "Laine", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "pardessus", name: "Pardessus", slug: "pardessus" },
            { id: "doudounes", name: "Doudounes", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "Parkas & coupe-vent", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "Vestes de travail", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "Costumes & smokings", slug: "costumes-smokings" },
        { id: "tenues-business", name: "Tenues business", slug: "tenues-business" },
        { id: "mode-urbaine", name: "Mode urbaine", slug: "mode-urbaine" },
        { id: "sportwear", name: "Sportwear", slug: "sportwear" },
        { id: "tenues-outdoor", name: "Tenues outdoor", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "Vêtements traditionnels",
          slug: "vetements-traditionnels-homme",
          subcategories: [
            { id: "gandoura", name: "Gandoura", slug: "gandoura" },
            { id: "qamis", name: "Qamis", slug: "qamis" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-homme",
      name: "Marque Vetement Homme",
      slug: "marques-vetements-homme",
      subcategories: [
        { id: "nike", name: "Nike", slug: "nike" },
        { id: "adidas", name: "Adidas", slug: "adidas" },
        { id: "puma", name: "Puma", slug: "puma" },
        { id: "lacoste", name: "Lacoste", slug: "lacoste" },
        { id: "tommy-hilfiger", name: "Tommy Hilfiger", slug: "tommy-hilfiger" },
        { id: "calvin-klein", name: "Calvin Klein", slug: "calvin-klein" },
        { id: "levis", name: "Levi's", slug: "levis" },
        { id: "zara", name: "Zara", slug: "zara" },
        { id: "hm", name: "H&M", slug: "hm" },
        { id: "bershka", name: "Bershka", slug: "bershka" },
        { id: "pull-bear", name: "Pull&Bear", slug: "pull-bear" },
        { id: "uniqlo", name: "Uniqlo", slug: "uniqlo" },
        { id: "guess", name: "Guess", slug: "guess" },
        { id: "mango", name: "Mango", slug: "mango" }
      ]
    },
    {
      id: "accessoires-homme",
      name: "Accessoires Homme",
      slug: "accessoires-homme",
      subcategories: [
        { id: "ceintures", name: "Ceintures", slug: "ceintures" },
        { id: "cravates-noeuds-papillon", name: "Cravates & nœuds papillon", slug: "cravates-noeuds-papillon" },
        { id: "chapeaux-casquettes", name: "Chapeaux & casquettes", slug: "chapeaux-casquettes" },
        { id: "gants-echarpes", name: "Gants & écharpes", slug: "gants-echarpes" },
        { id: "lunettes-soleil", name: "Lunettes de soleil", slug: "lunettes-soleil" },
        { id: "montres", name: "Montres", slug: "montres" },
        { id: "bijoux-homme", name: "Bijoux homme", slug: "bijoux-homme" },
        { id: "portefeuilles", name: "Portefeuilles", slug: "portefeuilles" },
        { id: "porte-cartes", name: "Porte-cartes", slug: "porte-cartes" },
        { id: "sacoches-besaces", name: "Sacoches & besaces", slug: "sacoches-besaces" }
      ]
    },
    {
      id: "vetements-femme",
      name: "Vêtements Femme",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "Tops & t-shirts",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "Basique", slug: "basique" },
            { id: "crop-top", name: "Crop top", slug: "crop-top" },
            { id: "dentelle", name: "Dentelle", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "Chemisiers & blouses",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "Habillés", slug: "habilles" },
            { id: "satin", name: "Satin", slug: "satin" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "fleuris", name: "Fleuris", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "Pulls & gilets",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "Gros tricot", slug: "gros-tricot" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" },
            { id: "col-roule", name: "Col roulé", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "Sweats & hoodies",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "Unis", slug: "unis" },
            { id: "imprimes", name: "Imprimés", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "Débardeurs & bustiers", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "Robes",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "Courtes", slug: "courtes" },
            { id: "midi", name: "Midi", slug: "midi" },
            { id: "longues", name: "Longues", slug: "longues" },
            { id: "soiree", name: "Soirée", slug: "soiree" },
            { id: "cocktail", name: "Cocktail", slug: "cocktail" },
            { id: "moulantes", name: "Moulantes", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "Robes d’événements",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "Mariage", slug: "mariage" },
            { id: "fetes", name: "Fêtes", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "Jupes",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "Courtes", slug: "courtes" },
            { id: "plissees", name: "Plissées", slug: "plissees" },
            { id: "jeans", name: "Jeans", slug: "jeans" },
            { id: "crayon", name: "Crayon", slug: "crayon" },
            { id: "longues", name: "Longues", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "Jeans femme",
          slug: "jeans-femme",
          subcategories: [
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "mom", name: "Mom", slug: "mom" },
            { id: "flare", name: "Flare", slug: "flare" },
            { id: "boyfriend", name: "Boyfriend", slug: "boyfriend" },
            { id: "skinny", name: "Skinny", slug: "skinny" }
          ]
        },
        {
          id: "pantalons-femme",
          name: "Pantalons",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "Tailleur", slug: "tailleur" },
            { id: "palazzo", name: "Palazzo", slug: "palazzo" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "legging", name: "Legging", slug: "legging" },
            { id: "jogging", name: "Jogging", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "Collants & leggings thermiques", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "Vestes",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "Blazer", slug: "blazer" },
            { id: "cuir", name: "Cuir", slug: "cuir" },
            { id: "denim", name: "Denim", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "Blousons",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "Biker", slug: "biker" },
            { id: "bomber", name: "Bomber", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "Manteaux",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "Laine", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "Doudounes", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "Capes & ponchos", slug: "capes-ponchos" },
        { id: "mode-chic", name: "Mode chic", slug: "mode-chic" },
        { id: "mode-streetwear", name: "Mode streetwear", slug: "mode-streetwear" },
        {
          id: "sportwear-femme",
          name: "Sportwear",
          slug: "sportwear-femme",
          subcategories: [
            { id: "yoga", name: "Yoga", slug: "yoga" },
            { id: "running", name: "Running", slug: "running" },
            { id: "fitness", name: "Fitness", slug: "fitness" }
          ]
        },
        { id: "beachwear", name: "Beachwear", slug: "beachwear" },
        {
          id: "mode-traditionnelle-femme",
          name: "Mode traditionnelle",
          slug: "mode-traditionnelle-femme",
          subcategories: [
            { id: "abaya", name: "Abaya", slug: "abaya" },
            { id: "caftan", name: "Caftan", slug: "caftan" },
            { id: "karakou", name: "Karakou", slug: "karakou" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-femme",
      name: "Marque Vetement Femme",
      slug: "marques-vetements-femme",
      subcategories: [
        { id: "zara", name: "Zara", slug: "zara" },
        { id: "hm", name: "H&M", slug: "hm" },
        { id: "mango", name: "Mango", slug: "mango" },
        { id: "stradivarius", name: "Stradivarius", slug: "stradivarius" },
        { id: "bershka", name: "Bershka", slug: "bershka" },
        { id: "pull-bear", name: "Pull&Bear", slug: "pull-bear" },
        { id: "uniqlo", name: "Uniqlo", slug: "uniqlo" },
        { id: "guess", name: "Guess", slug: "guess" },
        { id: "calvin-klein", name: "Calvin Klein", slug: "calvin-klein" },
        { id: "tommy-hilfiger", name: "Tommy Hilfiger", slug: "tommy-hilfiger" },
        { id: "lacoste", name: "Lacoste", slug: "lacoste" },
        { id: "nike", name: "Nike", slug: "nike" },
        { id: "adidas", name: "Adidas", slug: "adidas" },
        { id: "puma", name: "Puma", slug: "puma" }
      ]
    },
    {
      id: "accessoires-femme",
      name: "Accessoires Femme",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "Sacs à main", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "Sacs bandoulière", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "Pochettes", slug: "pochettes" },
        { id: "porte-monnaie", name: "Porte-monnaie", slug: "porte-monnaie" },
        { id: "bijoux", name: "Bijoux", slug: "bijoux" },
        { id: "ceintures", name: "Ceintures", slug: "ceintures" },
        { id: "foulards-echarpes", name: "Foulards & écharpes", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "Accessoires cheveux", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "Lunettes de soleil", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "Montres", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "Sous-vêtements Homme",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "Boxers",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "Coton", slug: "coton" },
            { id: "microfibre", name: "Microfibre", slug: "microfibre" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "Slips",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "Classiques", slug: "classiques" },
            { id: "taille-haute", name: "Taille haute", slug: "taille-haute" },
            { id: "echancres", name: "Échancrés", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "Caleçons", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "Débardeurs & sous-maillots thermiques", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "Lingerie Femme",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "Soutiens-gorge",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "Push-up", slug: "push-up" },
            { id: "maintien", name: "Maintien", slug: "maintien" },
            { id: "balconnet", name: "Balconnet", slug: "balconnet" },
            { id: "sans-armatures", name: "Sans armatures", slug: "sans-armatures" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "Culottes",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "Classiques", slug: "classiques" },
            { id: "tailles-hautes", name: "Tailles hautes", slug: "tailles-hautes" },
            { id: "tanga", name: "Tanga", slug: "tanga" },
            { id: "string", name: "String", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "Ensembles lingerie", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "Body & combinaisons", slug: "body-combinaisons" },
        { id: "guepieres", name: "Guêpières", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "Lingerie sculptante", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "Lingerie sexy & dentelle", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "Nuit & Intérieur",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "Pyjamas homme & femme", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "Nuisettes", slug: "nuisettes" },
        { id: "deshabilles", name: "Déshabillés", slug: "deshabilles" },
        { id: "peignoirs", name: "Peignoirs", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "Robes de chambre", slug: "robes-de-chambre" },
        { id: "homewear", name: "Homewear", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "Sous-vêtements Techniques",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "Sous-vêtements thermiques", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "Sous-couches sport", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "Chaussettes techniques & compression", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "Chaussures Homme & Femme",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "Chaussures habillées", slug: "chaussures-habillees" },
        { id: "mocassins", name: "Mocassins", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "Chaussures de ville", slug: "chaussures-de-ville" },
        {
          id: "baskets",
          name: "Baskets",
          slug: "baskets",
          subcategories: [
            { id: "mode", name: "Mode", slug: "mode" },
            { id: "running", name: "Running", slug: "running" },
            { id: "training", name: "Training", slug: "training" }
          ]
        },
        { id: "sandales-tongs", name: "Sandales & tongs", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "Bottes & bottines", slug: "bottes-bottines" },
        { id: "escarpins", name: "Escarpins", slug: "escarpins" },
        { id: "ballerines", name: "Ballerines", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "Chaussures de sport", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "Chaussures de travail & sécurité", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "Chaussures orthopédiques femme", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "Mode Saisonnière",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "Vêtements été",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "Shorts", slug: "shorts" },
            { id: "debardeurs", name: "Débardeurs", slug: "debardeurs" },
            { id: "robes-legeres", name: "Robes légères", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "Maillots de bain", slug: "maillots-de-bain" },
            { id: "pareos", name: "Paréos", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "Vêtements hiver",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "Doudounes", slug: "doudounes" },
            { id: "parkas", name: "Parkas", slug: "parkas" },
            { id: "manteaux-laine", name: "Manteaux laine", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "Pulls épais", slug: "pulls-epais" },
            { id: "gants", name: "Gants", slug: "gants" },
            { id: "bonnets", name: "Bonnets", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "Pluie & extérieur",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "Imperméables", slug: "impermeables" },
            { id: "coupe-vent", name: "Coupe-vent", slug: "coupe-vent" },
            { id: "ponchos", name: "Ponchos", slug: "ponchos" },
            { id: "bottes-pluie", name: "Bottes pluie", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};
