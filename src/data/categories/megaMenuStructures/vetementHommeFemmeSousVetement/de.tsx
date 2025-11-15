import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresDe: MenuCategory = {
  id: "mode-accessoires",
  name: "Herren‑ & Damenbekleidung & Unterwäsche",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "Herrenbekleidung",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "T‑Shirts",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "Basic", slug: "basiques" },
            { id: "imprimes", name: "Bedruckt", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "techniques", name: "Technisch", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "Poloshirts",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "Kurzarm", slug: "manches-courtes" },
            { id: "manches-longues", name: "Langarm", slug: "manches-longues" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "Hemden",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "Klassisch", slug: "classiques" },
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "decontractees", name: "Leger", slug: "decontractees" },
            { id: "carreaux", name: "Kariert", slug: "carreaux" },
            { id: "denim", name: "Denim", slug: "denim" },
            { id: "habillees", name: "Elegant", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "Pullover & Cardigans",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "Feinstrick", slug: "maille-fine" },
            { id: "laine", name: "Wolle", slug: "laine" },
            { id: "col-rond", name: "Rundhals", slug: "col-rond" },
            { id: "col-v", name: "V‑Ausschnitt", slug: "col-v" },
            { id: "col-roule", name: "Rollkragen", slug: "col-roule" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "Sweatshirts & Hoodies",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "Mit Kapuze", slug: "a-capuche" },
            { id: "zippes", name: "Mit Reißverschluss", slug: "zippes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "sportifs", name: "Sport", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "Tanktops", slug: "debardeurs" },
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
          name: "Hosen",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "Chino", slug: "chino" },
            { id: "costume", name: "Anzughose", slug: "costume" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "jogging", name: "Jogginghose", slug: "jogging" },
            { id: "urbain", name: "Urban", slug: "urbain" }
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
            { id: "bermudas", name: "Bermudas", slug: "bermudas" }
          ]
        },
        { id: "survetements", name: "Trainingsanzüge", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "Leichte Jacken",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "Denim", slug: "jean" },
            { id: "cuir", name: "Leder", slug: "cuir" },
            { id: "bomber", name: "Bomber", slug: "bomber" },
            { id: "harrington", name: "Harrington", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "Jacken",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "Collegejacke", slug: "teddy" },
            { id: "pilote", name: "Pilotjacke", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "Mäntel",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "Wolle", slug: "laine" },
            { id: "trench", name: "Trenchcoat", slug: "trench" },
            { id: "pardessus", name: "Übermantel", slug: "pardessus" },
            { id: "doudounes", name: "Daunenjacken", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "Parkas & Windbreaker", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "Arbeitsjacken", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "Anzüge & Smokings", slug: "costumes-smokings" },
        { id: "tenues-business", name: "Business‑Kleidung", slug: "tenues-business" },
        { id: "mode-urbaine", name: "Streetwear", slug: "mode-urbaine" },
        { id: "sportwear", name: "Sportswear", slug: "sportwear" },
        { id: "tenues-outdoor", name: "Outdoor‑Bekleidung", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "Traditionelle Kleidung",
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
      name: "Marken Herrenbekleidung",
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
      name: "Herren‑Accessoires",
      slug: "accessoires-homme",
      subcategories: [
        { id: "ceintures", name: "Gürtel", slug: "ceintures" },
        { id: "cravates-noeuds-papillon", name: "Krawatten & Fliegen", slug: "cravates-noeuds-papillon" },
        { id: "chapeaux-casquettes", name: "Hüte & Caps", slug: "chapeaux-casquettes" },
        { id: "gants-echarpes", name: "Handschuhe & Schals", slug: "gants-echarpes" },
        { id: "lunettes-soleil", name: "Sonnenbrillen", slug: "lunettes-soleil" },
        { id: "montres", name: "Uhren", slug: "montres" },
        { id: "bijoux-homme", name: "Herrenschmuck", slug: "bijoux-homme" },
        { id: "portefeuilles", name: "Geldbörsen", slug: "portefeuilles" },
        { id: "porte-cartes", name: "Kartenetuis", slug: "porte-cartes" },
        { id: "sacoches-besaces", name: "Umhängetaschen", slug: "sacoches-besaces" }
      ]
    },
    {
      id: "vetements-femme",
      name: "Damenbekleidung",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "Tops & T‑Shirts",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "Basic", slug: "basique" },
            { id: "crop-top", name: "Crop‑Top", slug: "crop-top" },
            { id: "dentelle", name: "Spitze", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "Blusen & Hemden",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "Elegant", slug: "habilles" },
            { id: "satin", name: "Satin", slug: "satin" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "fleuris", name: "Geblümt", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "Pullover & Cardigans",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "Grobstrick", slug: "gros-tricot" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" },
            { id: "col-roule", name: "Rollkragen", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "Sweatshirts & Hoodies",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "Uni", slug: "unis" },
            { id: "imprimes", name: "Bedruckt", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "Tanktops & Bustiers", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "Kleider",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "Kurz", slug: "courtes" },
            { id: "midi", name: "Midi", slug: "midi" },
            { id: "longues", name: "Lang", slug: "longues" },
            { id: "soiree", name: "Abendkleider", slug: "soiree" },
            { id: "cocktail", name: "Cocktail", slug: "cocktail" },
            { id: "moulantes", name: "Eng anliegend", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "Event‑Kleider",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "Hochzeit", slug: "mariage" },
            { id: "fetes", name: "Feste", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "Röcke",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "Kurz", slug: "courtes" },
            { id: "plissees", name: "Plissiert", slug: "plissees" },
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "crayon", name: "Bleistiftrock", slug: "crayon" },
            { id: "longues", name: "Lang", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "Damenjeans",
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
          name: "Hosen",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "Anzughose", slug: "tailleur" },
            { id: "palazzo", name: "Palazzo", slug: "palazzo" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "legging", name: "Leggings", slug: "legging" },
            { id: "jogging", name: "Jogginghose", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "Thermo‑Strumpfhosen & Leggings", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "Jacken",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "Blazer", slug: "blazer" },
            { id: "cuir", name: "Leder", slug: "cuir" },
            { id: "denim", name: "Denim", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "Jacken",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "Biker", slug: "biker" },
            { id: "bomber", name: "Bomber", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "Mäntel",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "Wolle", slug: "laine" },
            { id: "trench", name: "Trenchcoat", slug: "trench" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "Daunenjacken", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "Capes & Ponchos", slug: "capes-ponchos" },
        { id: "mode-chic", name: "Elegante Mode", slug: "mode-chic" },
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
        { id: "beachwear", name: "Bademode", slug: "beachwear" },
        {
          id: "mode-traditionnelle-femme",
          name: "Traditionelle Mode",
          slug: "mode-traditionnelle-femme",
          subcategories: [
            { id: "abaya", name: "Abaya", slug: "abaya" },
            { id: "caftan", name: "Kaftan", slug: "caftan" },
            { id: "karakou", name: "Karakou", slug: "karakou" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-femme",
      name: "Marken Damenbekleidung",
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
      name: "Damen‑Accessoires",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "Handtaschen", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "Umhängetaschen", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "Clutches", slug: "pochettes" },
        { id: "porte-monnaie", name: "Portemonnaies", slug: "porte-monnaie" },
        { id: "bijoux", name: "Schmuck", slug: "bijoux" },
        { id: "ceintures", name: "Gürtel", slug: "ceintures" },
        { id: "foulards-echarpes", name: "Schals & Tücher", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "Haar‑Accessoires", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "Sonnenbrillen", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "Uhren", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "Herrenunterwäsche",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "Boxershorts",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "Baumwolle", slug: "coton" },
            { id: "microfibre", name: "Mikrofaser", slug: "microfibre" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "Slips",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "Klassisch", slug: "classiques" },
            { id: "taille-haute", name: "Hoher Bund", slug: "taille-haute" },
            { id: "echancres", name: "Hoher Beinausschnitt", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "Webboxers", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "Thermo‑Unterhemden", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "Damenunterwäsche",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "BHs",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "Push‑Up", slug: "push-up" },
            { id: "maintien", name: "Stützend", slug: "maintien" },
            { id: "balconnet", name: "Balconette", slug: "balconnet" },
            { id: "sans-armatures", name: "Ohne Bügel", slug: "sans-armatures" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "Pantys",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "Klassisch", slug: "classiques" },
            { id: "tailles-hautes", name: "Hoher Bund", slug: "tailles-hautes" },
            { id: "tanga", name: "Tanga", slug: "tanga" },
            { id: "string", name: "String", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "Wäsche‑Sets", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "Bodies & Overalls", slug: "body-combinaisons" },
        { id: "guepieres", name: "Bustiers", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "Shapewear", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "Sexy & Spitzenwäsche", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "Nachtwäsche & Homewear",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "Pyjamas für Damen & Herren", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "Negligés", slug: "nuisettes" },
        { id: "deshabilles", name: "Morgenmäntel", slug: "deshabilles" },
        { id: "peignoirs", name: "Bademäntel", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "Hausmäntel", slug: "robes-de-chambre" },
        { id: "homewear", name: "Homewear", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "Technische Unterwäsche",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "Thermounterwäsche", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "Sport‑Baselayer", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "Technische & Kompressionssocken", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "Schuhe (Damen & Herren)",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "Elegante Schuhe", slug: "chaussures-habillees" },
        { id: "mocassins", name: "Loafer", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "Stadtschuhe", slug: "chaussures-de-ville" },
        {
          id: "baskets",
          name: "Sneaker",
          slug: "baskets",
          subcategories: [
            { id: "mode", name: "Lifestyle", slug: "mode" },
            { id: "running", name: "Running", slug: "running" },
            { id: "training", name: "Training", slug: "training" }
          ]
        },
        { id: "sandales-tongs", name: "Sandalen & Flip‑Flops", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "Stiefel & Stiefeletten", slug: "bottes-bottines" },
        { id: "escarpins", name: "Pumps", slug: "escarpins" },
        { id: "ballerines", name: "Ballerinas", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "Sportschuhe", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "Arbeits‑ & Sicherheitsschuhe", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "Orthopädische Damenschuhe", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "Saisonale Mode",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "Sommerkleidung",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "Shorts", slug: "shorts" },
            { id: "debardeurs", name: "Tanktops", slug: "debardeurs" },
            { id: "robes-legeres", name: "Leichte Kleider", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "Bademode", slug: "maillots-de-bain" },
            { id: "pareos", name: "Pareos", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "Winterkleidung",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "Daunenjacken", slug: "doudounes" },
            { id: "parkas", name: "Parkas", slug: "parkas" },
            { id: "manteaux-laine", name: "Wollmäntel", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "Dicke Pullover", slug: "pulls-epais" },
            { id: "gants", name: "Handschuhe", slug: "gants" },
            { id: "bonnets", name: "Mützen", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "Regen & Outdoor",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "Regenmäntel", slug: "impermeables" },
            { id: "coupe-vent", name: "Windbreaker", slug: "coupe-vent" },
            { id: "ponchos", name: "Ponchos", slug: "ponchos" },
            { id: "bottes-pluie", name: "Gummistiefel", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};