import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresEs: MenuCategory = {
  id: "mode-accessoires",
  name: "Ropa de Hombre y Mujer & Ropa Interior",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "Ropa de Hombre",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "Camisetas",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "Básicas", slug: "basiques" },
            { id: "imprimes", name: "Estampadas", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "techniques", name: "Técnicas", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "Polos",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "Manga corta", slug: "manches-courtes" },
            { id: "manches-longues", name: "Manga larga", slug: "manches-longues" },
            { id: "sport", name: "Deporte", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "Camisas",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "Clásicas", slug: "classiques" },
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "decontractees", name: "Casual", slug: "decontractees" },
            { id: "carreaux", name: "Cuadros", slug: "carreaux" },
            { id: "denim", name: "Denim", slug: "denim" },
            { id: "habillees", name: "Elegantes", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "Jerséis y cárdigans",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "Punto fino", slug: "maille-fine" },
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "col-rond", name: "Cuello redondo", slug: "col-rond" },
            { id: "col-v", name: "Cuello en V", slug: "col-v" },
            { id: "col-roule", name: "Cuello alto", slug: "col-roule" },
            { id: "cardigan", name: "Cárdigan", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "Sudaderas & hoodies",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "Con capucha", slug: "a-capuche" },
            { id: "zippes", name: "Con cremallera", slug: "zippes" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "sportifs", name: "Deportivos", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "Camisetas sin mangas", slug: "debardeurs" },
        {
          id: "jeans",
          name: "Vaqueros",
          slug: "jeans",
          subcategories: [
            { id: "slim", name: "Slim", slug: "slim" },
            { id: "straight", name: "Rectos", slug: "straight" },
            { id: "tapered", name: "Tapered", slug: "tapered" },
            { id: "skinny", name: "Skinny", slug: "skinny" },
            { id: "bootcut", name: "Bootcut", slug: "bootcut" }
          ]
        },
        {
          id: "pantalons",
          name: "Pantalones",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "Chino", slug: "chino" },
            { id: "costume", name: "Traje", slug: "costume" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "jogging", name: "Jogging", slug: "jogging" },
            { id: "urbain", name: "Urbano", slug: "urbain" }
          ]
        },
        {
          id: "shorts",
          name: "Shorts",
          slug: "shorts",
          subcategories: [
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "sport", name: "Deporte", slug: "sport" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "bermudas", name: "Bermudas", slug: "bermudas" }
          ]
        },
        { id: "survetements", name: "Chándales", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "Chaquetas ligeras",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "Denim", slug: "jean" },
            { id: "cuir", name: "Cuero", slug: "cuir" },
            { id: "bomber", name: "Bomber", slug: "bomber" },
            { id: "harrington", name: "Harrington", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "Cazadoras",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "Varsity", slug: "teddy" },
            { id: "pilote", name: "Piloto", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "Abrigos",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "pardessus", name: "Sobretodo", slug: "pardessus" },
            { id: "doudounes", name: "Plumíferos", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "Parkas & cortavientos", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "Chaquetas de trabajo", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "Trajes & esmóquines", slug: "costumes-smokings" },
        { id: "tenues-business", name: "Ropa de negocios", slug: "tenues-business" },
        { id: "mode-urbaine", name: "Moda urbana", slug: "mode-urbaine" },
        { id: "sportwear", name: "Sportswear", slug: "sportwear" },
        { id: "tenues-outdoor", name: "Ropa outdoor", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "Ropa tradicional",
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
      name: "Marcas ropa hombre",
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
      id: "vetements-femme",
      name: "Ropa de Mujer",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "Tops & T‑shirts",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "Básicas", slug: "basique" },
            { id: "crop-top", name: "Crop top", slug: "crop-top" },
            { id: "dentelle", name: "Encaje", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "Blusas & camisas",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "Elegantes", slug: "habilles" },
            { id: "satin", name: "Satén", slug: "satin" },
            { id: "oversize", name: "Oversize", slug: "oversize" },
            { id: "fleuris", name: "Florales", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "Jerséis & cárdigans",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "Punto grueso", slug: "gros-tricot" },
            { id: "cardigan", name: "Cárdigan", slug: "cardigan" },
            { id: "col-roule", name: "Cuello alto", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "Sudaderas & hoodies",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "Lisas", slug: "unis" },
            { id: "imprimes", name: "Estampadas", slug: "imprimes" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "Camisetas de tirantes & bustiers", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "Vestidos",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "Cortos", slug: "courtes" },
            { id: "midi", name: "Midi", slug: "midi" },
            { id: "longues", name: "Largos", slug: "longues" },
            { id: "soiree", name: "Fiesta", slug: "soiree" },
            { id: "cocktail", name: "Cóctel", slug: "cocktail" },
            { id: "moulantes", name: "Ajustados", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "Vestidos para eventos",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "Boda", slug: "mariage" },
            { id: "fetes", name: "Fiestas", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "Faldas",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "Cortas", slug: "courtes" },
            { id: "plissees", name: "Plisadas", slug: "plissees" },
            { id: "jeans", name: "Denim", slug: "jeans" },
            { id: "crayon", name: "Tubo", slug: "crayon" },
            { id: "longues", name: "Largas", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "Vaqueros mujer",
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
          name: "Pantalones",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "Sastre", slug: "tailleur" },
            { id: "palazzo", name: "Palazzo", slug: "palazzo" },
            { id: "cargo", name: "Cargo", slug: "cargo" },
            { id: "legging", name: "Leggings", slug: "legging" },
            { id: "jogging", name: "Joggers", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "Medias & leggings térmicos", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "Chaquetas",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "Blazer", slug: "blazer" },
            { id: "cuir", name: "Cuero", slug: "cuir" },
            { id: "denim", name: "Denim", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "Cazadoras",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "Biker", slug: "biker" },
            { id: "bomber", name: "Bomber", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "Abrigos",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "Lana", slug: "laine" },
            { id: "trench", name: "Trench", slug: "trench" },
            { id: "oversize", name: "Oversize", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "Plumíferos", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "Capas & ponchos", slug: "capes-ponchos" },
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
          name: "Moda tradicional",
          slug: "mode-traditionnelle-femme",
          subcategories: [
            { id: "abaya", name: "Abaya", slug: "abaya" },
            { id: "caftan", name: "Caftán", slug: "caftan" },
            { id: "karakou", name: "Karakou", slug: "karakou" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-femme",
      name: "Marcas ropa mujer",
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
      name: "Accesorios Mujer",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "Bolsos de mano", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "Bolsos bandolera", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "Clutches", slug: "pochettes" },
        { id: "porte-monnaie", name: "Monederos", slug: "porte-monnaie" },
        { id: "bijoux", name: "Joyas", slug: "bijoux" },
        { id: "ceintures", name: "Cinturones", slug: "ceintures" },
        { id: "foulards-echarpes", name: "Pañuelos & bufandas", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "Accesorios para el cabello", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "Gafas de sol", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "Relojes", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "Ropa interior Hombre",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "Bóxers",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "Algodón", slug: "coton" },
            { id: "microfibre", name: "Microfibra", slug: "microfibre" },
            { id: "sport", name: "Deporte", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "Slips",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "Clásicos", slug: "classiques" },
            { id: "taille-haute", name: "Talle alto", slug: "taille-haute" },
            { id: "echancres", name: "Corte alto", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "Calzoncillos", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "Camisetas térmicas", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "Lencería Mujer",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "Sujetadores",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "Push‑up", slug: "push-up" },
            { id: "maintien", name: "Soporte", slug: "maintien" },
            { id: "balconnet", name: "Balconette", slug: "balconnet" },
            { id: "sans-armatures", name: "Sin aros", slug: "sans-armatures" },
            { id: "sport", name: "Deportivo", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "Braguitas",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "Clásicas", slug: "classiques" },
            { id: "tailles-hautes", name: "Talle alto", slug: "tailles-hautes" },
            { id: "tanga", name: "Tanga", slug: "tanga" },
            { id: "string", name: "String", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "Conjuntos de lencería", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "Bodies & monos", slug: "body-combinaisons" },
        { id: "guepieres", name: "Corsés", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "Modeladora", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "Sexy & encaje", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "Noche & Interior",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "Pijamas hombre & mujer", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "Camisones", slug: "nuisettes" },
        { id: "deshabilles", name: "Batas", slug: "deshabilles" },
        { id: "peignoirs", name: "Albornoces", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "Batas de casa", slug: "robes-de-chambre" },
        { id: "homewear", name: "Homewear", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "Ropa interior técnica",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "Térmica", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "Capas base deportivas", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "Calcetines técnicos & compresión", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "Zapatos (Hombre & Mujer)",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "Zapatos elegantes", slug: "chaussures-habillees" },
        { id: "mocassins", name: "Mocasines", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "Zapatos de ciudad", slug: "chaussures-de-ville" },
        {
          id: "baskets",
          name: "Zapatillas",
          slug: "baskets",
          subcategories: [
            { id: "mode", name: "Lifestyle", slug: "mode" },
            { id: "running", name: "Running", slug: "running" },
            { id: "training", name: "Training", slug: "training" }
          ]
        },
        { id: "sandales-tongs", name: "Sandalias & chanclas", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "Botas & botines", slug: "bottes-bottines" },
        { id: "escarpins", name: "Tacones", slug: "escarpins" },
        { id: "ballerines", name: "Bailarinas", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "Calzado deportivo", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "Trabajo & seguridad", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "Calzado ortopédico mujer", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "Moda Estacional",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "Ropa de verano",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "Shorts", slug: "shorts" },
            { id: "debardeurs", name: "Camisetas sin mangas", slug: "debardeurs" },
            { id: "robes-legeres", name: "Vestidos ligeros", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "Bañadores", slug: "maillots-de-bain" },
            { id: "pareos", name: "Pareos", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "Ropa de invierno",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "Plumíferos", slug: "doudounes" },
            { id: "parkas", name: "Parkas", slug: "parkas" },
            { id: "manteaux-laine", name: "Abrigos de lana", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "Jerséis gruesos", slug: "pulls-epais" },
            { id: "gants", name: "Guantes", slug: "gants" },
            { id: "bonnets", name: "Gorros", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "Lluvia & exterior",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "Impermeables", slug: "impermeables" },
            { id: "coupe-vent", name: "Cortavientos", slug: "coupe-vent" },
            { id: "ponchos", name: "Ponchos", slug: "ponchos" },
            { id: "bottes-pluie", name: "Botas de lluvia", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};