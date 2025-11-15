import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresIt: MenuCategory = {
  id: "mode-accessoires",
  name: "Abbigliamento Uomo & Donna & Intimo",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "Abbigliamento Uomo",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "T‑shirt",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "Basic", slug: "basiques" },
            { id: "imprimes", name: "Stampate", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "techniques", name: "Tecniche", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "Polo",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "Manica corta", slug: "manches-courtes" },
            { id: "manches-longues", name: "Manica lunga", slug: "manches-longues" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "Camicie",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "Classiche", slug: "classiques" },
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "decontractees", name: "Casual", slug: "decontractees" },
            { id: "carreaux", name: "A quadri", slug: "carreaux" },
            { id: "denim", name: "Denim", slug: "denim" },
            { id: "habillees", name: "Eleganti", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "Maglioni & cardigan",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "Maglia fine", slug: "maille-fine" },
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "col-rond", name: "Girocollo", slug: "col-rond" },
            { id: "col-v", name: "Scollo a V", slug: "col-v" },
            { id: "col-roule", name: "Dolcevita", slug: "col-roule" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "Felpe & hoodies",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "Con cappuccio", slug: "a-capuche" },
            { id: "zippes", name: "Con zip", slug: "zippes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "sportifs", name: "Sport", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "Canottiere", slug: "debardeurs" },
        {
          id: "jeans",
          name: "Jeans",
          slug: "jeans",
          subcategories: [
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "straight", name: "Dritti", slug: "straight" },
            { id: "tapered", name: "Tapered", slug: "tapered" },
            { id: "skinny", name: "Skinny", slug: "skinny" },
            { id: "bootcut", name: "Bootcut", slug: "bootcut" }
          ]
        },
        {
          id: "pantalons",
          name: "Pantaloni",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "Chino", slug: "chino" },
            { id: "costume", name: "Abito", slug: "costume" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "jogging", name: "Joggers", slug: "jogging" },
            { id: "urbain", name: "Urbano", slug: "urbain" }
          ]
        },
        {
          id: "shorts",
          name: "Shorts",
          slug: "shorts",
          subcategories: [
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "sport", name: "Sport", slug: "sport" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "bermudas", name: "Bermuda", slug: "bermudas" }
          ]
        },
        { id: "survetements", name: "Tute sportive", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "Giacche leggere",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "Denim", slug: "jean" },
            { id: "cuir", name: "Pelle", slug: "cuir" },
            { id: "bomber", name: "Bomber", slug: "bomber" },
            { id: "harrington", name: "Harrington", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "Giacche",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "Varsity", slug: "teddy" },
            { id: "pilote", name: "Pilota", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "Cappotti",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "pardessus", name: "Soprabito", slug: "pardessus" },
            { id: "doudounes", name: "Piumini", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "Parkas & antivento", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "Giacche da lavoro", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "Abiti & smoking", slug: "costumes-smokings" },
        { id: "tenues-business", name: "Abbigliamento business", slug: "tenues-business" },
        { id: "mode-urbaine", name: "Streetwear", slug: "mode-urbaine" },
        { id: "sportwear", name: "Sportswear", slug: "sportwear" },
        { id: "tenues-outdoor", name: "Outdoor", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "Abbigliamento tradizionale",
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
      name: "Marche abbigliamento uomo",
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
      name: "Accessori Uomo",
      slug: "accessoires-homme",
      subcategories: [
        { id: "ceintures", name: "Cinture", slug: "ceintures" },
        { id: "cravates-noeuds-papillon", name: "Cravatte & papillon", slug: "cravates-noeuds-papillon" },
        { id: "chapeaux-casquettes", name: "Cappelli & berretti", slug: "chapeaux-casquettes" },
        { id: "gants-echarpes", name: "Guanti & sciarpe", slug: "gants-echarpes" },
        { id: "lunettes-soleil", name: "Occhiali da sole", slug: "lunettes-soleil" },
        { id: "montres", name: "Orologi", slug: "montres" },
        { id: "bijoux-homme", name: "Gioielli uomo", slug: "bijoux-homme" },
        { id: "portefeuilles", name: "Portafogli", slug: "portefeuilles" },
        { id: "porte-cartes", name: "Porta carte", slug: "porte-cartes" },
        { id: "sacoches-besaces", name: "Borse a tracolla", slug: "sacoches-besaces" }
      ]
    },
    {
      id: "vetements-femme",
      name: "Abbigliamento Donna",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "Top & T‑shirt",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "Basic", slug: "basique" },
            { id: "crop-top", name: "Crop top", slug: "crop-top" },
            { id: "dentelle", name: "Pizzo", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "Camicie & bluse",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "Eleganti", slug: "habilles" },
            { id: "satin", name: "Satin", slug: "satin" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "fleuris", name: "Floreali", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "Maglioni & cardigan",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "Maglia grossa", slug: "gros-tricot" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" },
            { id: "col-roule", name: "Dolcevita", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "Felpe & hoodies",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "Tinta unita", slug: "unis" },
            { id: "imprimes", name: "Stampate", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "Canotte & bustier", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "Abiti",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "Corti", slug: "courtes" },
            { id: "midi", name: "Midi", slug: "midi" },
            { id: "longues", name: "Lunghi", slug: "longues" },
            { id: "soiree", name: "Sera", slug: "soiree" },
            { id: "cocktail", name: "Cocktail", slug: "cocktail" },
            { id: "moulantes", name: "Aderenti", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "Abiti per eventi",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "Matrimonio", slug: "mariage" },
            { id: "fetes", name: "Feste", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "Gonne",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "Corte", slug: "courtes" },
            { id: "plissees", name: "Plissé", slug: "plissees" },
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "crayon", name: "A tubino", slug: "crayon" },
            { id: "longues", name: "Lunghe", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "Jeans donna",
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
          name: "Pantaloni",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "Tailleur", slug: "tailleur" },
            { id: "palazzo", name: "Palazzo", slug: "palazzo" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "legging", name: "Leggings", slug: "legging" },
            { id: "jogging", name: "Joggers", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "Collant & leggings termici", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "Giacche",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "Blazer", slug: "blazer" },
            { id: "cuir", name: "Pelle", slug: "cuir" },
            { id: "denim", name: "Denim", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "Giacche",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "Biker", slug: "biker" },
            { id: "bomber", name: "Bomber", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "Cappotti",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "Piumini", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "Cappes & poncho", slug: "capes-ponchos" },
        { id: "mode-chic", name: "Moda chic", slug: "mode-chic" },
        { id: "mode-streetwear", name: "Streetwear", slug: "mode-streetwear" },
        {
          id: "sportwear-femme",
          name: "Sportswear",
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
          name: "Moda tradizionale",
          slug: "mode-traditionnelle-femme",
          subcategories: [
            { id: "abaya", name: "Abaya", slug: "abaya" },
            { id: "caftan", name: "Kaftano", slug: "caftan" },
            { id: "karakou", name: "Karakou", slug: "karakou" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-femme",
      name: "Marche abbigliamento donna",
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
      name: "Accessori Donna",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "Borse a mano", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "Borse a tracolla", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "Pochette", slug: "pochettes" },
        { id: "porte-monnaie", name: "Portamonete", slug: "porte-monnaie" },
        { id: "bijoux", name: "Gioielli", slug: "bijoux" },
        { id: "ceintures", name: "Cinture", slug: "ceintures" },
        { id: "foulards-echarpes", name: "Foulard & sciarpe", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "Accessori capelli", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "Occhiali da sole", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "Orologi", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "Intimo Uomo",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "Boxer",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "Cotone", slug: "coton" },
            { id: "microfibre", name: "Microfibra", slug: "microfibre" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "Slip",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "Classici", slug: "classiques" },
            { id: "taille-haute", name: "Vita alta", slug: "taille-haute" },
            { id: "echancres", name: "Gamba alta", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "Calzoncini", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "Canotte & sotto‑maglie termiche", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "Lingerie Donna",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "Reggiseni",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "Push‑up", slug: "push-up" },
            { id: "maintien", name: "Sostegno", slug: "maintien" },
            { id: "balconnet", name: "Balconette", slug: "balconnet" },
            { id: "sans-armatures", name: "Senza ferretto", slug: "sans-armatures" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "Slip donna",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "Classici", slug: "classiques" },
            { id: "tailles-hautes", name: "Vita alta", slug: "tailles-hautes" },
            { id: "tanga", name: "Tanga", slug: "tanga" },
            { id: "string", name: "Perizoma", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "Completi lingerie", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "Body & tute", slug: "body-combinaisons" },
        { id: "guepieres", name: "Bustier", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "Shapewear", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "Sexy & pizzo", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "Notte & Casa",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "Pigiami uomo & donna", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "Camicie da notte", slug: "nuisettes" },
        { id: "deshabilles", name: "Vestaglie", slug: "deshabilles" },
        { id: "peignoirs", name: "Accappatoi", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "Vestaglie", slug: "robes-de-chambre" },
        { id: "homewear", name: "Homewear", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "Intimo tecnico",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "Termico", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "Baselayer sport", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "Calze tecniche & compressione", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "Scarpe (Uomo & Donna)",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "Eleganti", slug: "chaussures-habillees" },
        { id: "mocassins", name: "Mocassini", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "Scarpe cittadine", slug: "chaussures-de-ville" },
        {
          id: "baskets",
          name: "Sneakers",
          slug: "baskets",
          subcategories: [
            { id: "mode", name: "Lifestyle", slug: "mode" },
            { id: "running", name: "Running", slug: "running" },
            { id: "training", name: "Training", slug: "training" }
          ]
        },
        { id: "sandales-tongs", name: "Sandali & infradito", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "Stivali & tronchetti", slug: "bottes-bottines" },
        { id: "escarpins", name: "Décolleté", slug: "escarpins" },
        { id: "ballerines", name: "Ballerine", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "Scarpe sportive", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "Lavoro & sicurezza", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "Scarpe ortopediche donna", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "Moda stagionale",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "Abbigliamento estivo",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "Shorts", slug: "shorts" },
            { id: "debardeurs", name: "Canottiere", slug: "debardeurs" },
            { id: "robes-legeres", name: "Abiti leggeri", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "Costumi", slug: "maillots-de-bain" },
            { id: "pareos", name: "Pareo", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "Abbigliamento invernale",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "Piumini", slug: "doudounes" },
            { id: "parkas", name: "Parkas", slug: "parkas" },
            { id: "manteaux-laine", name: "Cappotti in lana", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "Maglioni pesanti", slug: "pulls-epais" },
            { id: "gants", name: "Guanti", slug: "gants" },
            { id: "bonnets", name: "Cappelli", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "Pioggia & outdoor",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "Impermeabili", slug: "impermeables" },
            { id: "coupe-vent", name: "Antivento", slug: "coupe-vent" },
            { id: "ponchos", name: "Poncho", slug: "ponchos" },
            { id: "bottes-pluie", name: "Stivali da pioggia", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};