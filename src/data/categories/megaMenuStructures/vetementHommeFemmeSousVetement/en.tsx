import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresEn: MenuCategory = {
  id: "mode-accessoires",
  name: "Men & Women Clothing & Underwear",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "Men's Clothing",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "T‑shirts",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "Basic", slug: "basiques" },
            { id: "imprimes", name: "Printed", slug: "imprimes" },
            { id: "oversize", name: "Oversized", slug: "oversize" },
            { id: "techniques", name: "Technical", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "Polos",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "Short sleeve", slug: "manches-courtes" },
            { id: "manches-longues", name: "Long sleeve", slug: "manches-longues" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "Shirts",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "Classic", slug: "classiques" },
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "decontractees", name: "Casual", slug: "decontractees" },
            { id: "carreaux", name: "Checkered", slug: "carreaux" },
            { id: "denim", name: "Denim", slug: "denim" },
            { id: "habillees", name: "Dress", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "Sweaters & cardigans",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "Fine knit", slug: "maille-fine" },
            { id: "laine", name: "Wool", slug: "laine" },
            { id: "col-rond", name: "Crew neck", slug: "col-rond" },
            { id: "col-v", name: "V‑neck", slug: "col-v" },
            { id: "col-roule", name: "Turtleneck", slug: "col-roule" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "Sweatshirts & hoodies",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "Hooded", slug: "a-capuche" },
            { id: "zippes", name: "Zip‑up", slug: "zippes" },
            { id: "oversize", name: "Oversized", slug: "oversize" },
            { id: "sportifs", name: "Sport", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "Tank tops", slug: "debardeurs" },
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
          name: "Trousers",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "Chino", slug: "chino" },
            { id: "costume", name: "Suit", slug: "costume" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "jogging", name: "Joggers", slug: "jogging" },
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
        { id: "survetements", name: "Tracksuits", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "Light jackets",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "Denim", slug: "jean" },
            { id: "cuir", name: "Leather", slug: "cuir" },
            { id: "bomber", name: "Bomber", slug: "bomber" },
            { id: "harrington", name: "Harrington", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "Jackets",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "Varsity", slug: "teddy" },
            { id: "pilote", name: "Pilot", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "Coats",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "Wool", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "pardessus", name: "Overcoat", slug: "pardessus" },
            { id: "doudounes", name: "Puffer", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "Parkas & windbreakers", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "Work jackets", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "Suits & tuxedos", slug: "costumes-smokings" },
        { id: "tenues-business", name: "Business attire", slug: "tenues-business" },
        { id: "mode-urbaine", name: "Streetwear", slug: "mode-urbaine" },
        { id: "sportwear", name: "Sportswear", slug: "sportwear" },
        { id: "tenues-outdoor", name: "Outdoor apparel", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "Traditional clothing",
          slug: "vetements-traditionnels-homme",
          subcategories: [
            { id: "gandoura", name: "Gandoura", slug: "gandoura" },
            { id: "qamis", name: "Qamis", slug: "qamis" }
          ]
        },
        
      ]
    },
    {
      id: "marques-vetements-homme",
      name: "Men's clothing brands",
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
      name: "Men's Accessories",
      slug: "accessoires-homme",
      subcategories: [
        { id: "ceintures", name: "Belts", slug: "ceintures" },
        { id: "cravates-noeuds-papillon", name: "Ties & bow ties", slug: "cravates-noeuds-papillon" },
        { id: "chapeaux-casquettes", name: "Hats & caps", slug: "chapeaux-casquettes" },
        { id: "gants-echarpes", name: "Gloves & scarves", slug: "gants-echarpes" },
        { id: "lunettes-soleil", name: "Sunglasses", slug: "lunettes-soleil" },
        { id: "montres", name: "Watches", slug: "montres" },
        { id: "bijoux-homme", name: "Men's jewelry", slug: "bijoux-homme" },
        { id: "portefeuilles", name: "Wallets", slug: "portefeuilles" },
        { id: "porte-cartes", name: "Card holders", slug: "porte-cartes" },
        { id: "sacoches-besaces", name: "Messenger bags", slug: "sacoches-besaces" }
      ]
    },
    {
      id: "vetements-femme",
      name: "Women's Clothing",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "Tops & T‑shirts",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "Basic", slug: "basique" },
            { id: "crop-top", name: "Crop top", slug: "crop-top" },
            { id: "dentelle", name: "Lace", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "Blouses & shirts",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "Dressy", slug: "habilles" },
            { id: "satin", name: "Satin", slug: "satin" },
            { id: "oversize", name: "Oversized", slug: "oversize" },
            { id: "fleuris", name: "Floral", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "Sweaters & cardigans",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "Chunky knit", slug: "gros-tricot" },
            { id: "cardigan", name: "Cardigan", slug: "cardigan" },
            { id: "col-roule", name: "Turtleneck", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "Sweatshirts & hoodies",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "Plain", slug: "unis" },
            { id: "imprimes", name: "Printed", slug: "imprimes" },
            { id: "oversize", name: "Oversized", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "Tank tops & bustiers", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "Dresses",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "Short", slug: "courtes" },
            { id: "midi", name: "Midi", slug: "midi" },
            { id: "longues", name: "Long", slug: "longues" },
            { id: "soiree", name: "Evening", slug: "soiree" },
            { id: "cocktail", name: "Cocktail", slug: "cocktail" },
            { id: "moulantes", name: "Bodycon", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "Event dresses",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "Wedding", slug: "mariage" },
            { id: "fetes", name: "Parties", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "Skirts",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "Short", slug: "courtes" },
            { id: "plissees", name: "Pleated", slug: "plissees" },
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "crayon", name: "Pencil", slug: "crayon" },
            { id: "longues", name: "Long", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "Women's jeans",
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
          name: "Trousers",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "Tailored", slug: "tailleur" },
            { id: "palazzo", name: "Palazzo", slug: "palazzo" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "legging", name: "Leggings", slug: "legging" },
            { id: "jogging", name: "Joggers", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "Thermal tights & leggings", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "Jackets",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "Blazer", slug: "blazer" },
            { id: "cuir", name: "Leather", slug: "cuir" },
            { id: "denim", name: "Denim", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "Jackets",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "Biker", slug: "biker" },
            { id: "bomber", name: "Bomber", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "Coats",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "Wool", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "oversize", name: "Oversized", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "Puffer jackets", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "Capes & ponchos", slug: "capes-ponchos" },
        { id: "mode-chic", name: "Chic fashion", slug: "mode-chic" },
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
          name: "Traditional fashion",
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
      name: "Women's clothing brands",
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
      name: "Women's Accessories",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "Handbags", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "Crossbody bags", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "Clutches", slug: "pochettes" },
        { id: "porte-monnaie", name: "Wallets", slug: "porte-monnaie" },
        { id: "bijoux", name: "Jewelry", slug: "bijoux" },
        { id: "ceintures", name: "Belts", slug: "ceintures" },
        { id: "foulards-echarpes", name: "Scarves", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "Hair accessories", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "Sunglasses", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "Watches", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "Men's Underwear",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "Boxers",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "Cotton", slug: "coton" },
            { id: "microfibre", name: "Microfiber", slug: "microfibre" },
            { id: "sport", name: "Sport", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "Briefs",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "Classic", slug: "classiques" },
            { id: "taille-haute", name: "High waist", slug: "taille-haute" },
            { id: "echancres", name: "High‑cut", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "Boxer shorts", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "Thermal vests & undershirts", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "Women's Lingerie",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "Bras",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "Push‑up", slug: "push-up" },
            { id: "maintien", name: "Support", slug: "maintien" },
            { id: "balconnet", name: "Balconette", slug: "balconnet" },
            { id: "sans-armatures", name: "Wireless", slug: "sans-armatures" },
            { id: "sport", name: "Sports", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "Panties",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "Classic", slug: "classiques" },
            { id: "tailles-hautes", name: "High waist", slug: "tailles-hautes" },
            { id: "tanga", name: "Thong", slug: "tanga" },
            { id: "string", name: "G‑string", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "Lingerie sets", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "Bodies & jumpsuits", slug: "body-combinaisons" },
        { id: "guepieres", name: "Bustiers", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "Shapewear", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "Sexy & lace lingerie", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "Nightwear & Homewear",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "Men's & women's pajamas", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "Nightdresses", slug: "nuisettes" },
        { id: "deshabilles", name: "Robes", slug: "deshabilles" },
        { id: "peignoirs", name: "Bathrobes", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "Dressing gowns", slug: "robes-de-chambre" },
        { id: "homewear", name: "Homewear", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "Technical Underwear",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "Thermal underwear", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "Sports base layers", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "Technical & compression socks", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "Shoes (Men & Women)",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "Dress shoes", slug: "chaussures-habillees" },
        { id: "mocassins", name: "Loafers", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "City shoes", slug: "chaussures-de-ville" },
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
        { id: "sandales-tongs", name: "Sandals & flip‑flops", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "Boots & ankle boots", slug: "bottes-bottines" },
        { id: "escarpins", name: "Pumps", slug: "escarpins" },
        { id: "ballerines", name: "Ballet flats", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "Sports shoes", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "Work & safety shoes", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "Women's orthopedic shoes", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "Seasonal Fashion",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "Summer clothing",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "Shorts", slug: "shorts" },
            { id: "debardeurs", name: "Tank tops", slug: "debardeurs" },
            { id: "robes-legeres", name: "Light dresses", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "Swimwear", slug: "maillots-de-bain" },
            { id: "pareos", name: "Pareos", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "Winter clothing",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "Puffer jackets", slug: "doudounes" },
            { id: "parkas", name: "Parkas", slug: "parkas" },
            { id: "manteaux-laine", name: "Wool coats", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "Thick sweaters", slug: "pulls-epais" },
            { id: "gants", name: "Gloves", slug: "gants" },
            { id: "bonnets", name: "Beanies", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "Rain & outdoor",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "Raincoats", slug: "impermeables" },
            { id: "coupe-vent", name: "Windbreakers", slug: "coupe-vent" },
            { id: "ponchos", name: "Ponchos", slug: "ponchos" },
            { id: "bottes-pluie", name: "Rain boots", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};