
import { MenuCategory } from "../../categoryTypes";
import { Bike, Mountain, Sun, Tent, Umbrella, Route, Backpack, CookingPot, Zap, Waves, Ship } from "lucide-react";

export const sportEtPleinAir: MenuCategory = {
  id: "sport-et-plein-air",
  name: "Sport et Plein Air",
  slug: "sport-et-plein-air", // Changé pour correspondre aux traductions
  icon: <Sun className="w-4 h-4 text-yellow-400" />,
  subcategories: [
    {
      id: "sports-discipline",
      name: "Par discipline",
      slug: "sports-discipline",
      icon: <Sun className="w-3 h-3 text-orange-500" />,
      subcategories: [
        { id: "football", name: "Football", slug: "football", icon: <Sun className="w-3 h-3 text-green-500" /> },
        { id: "basketball", name: "Basketball", slug: "basketball", icon: <Sun className="w-3 h-3 text-orange-400" /> },
        { 
          id: "cyclisme", 
          name: "Cyclisme / Vélo", 
          slug: "cyclisme", 
          icon: <Bike className="w-3 h-3 text-blue-600" />,
          subcategories: [
            { id: "velos-route", name: "Vélos de route", slug: "velos-route", icon: <Route className="w-3 h-3 text-gray-700" /> },
            { id: "vtt", name: "VTT", slug: "vtt", icon: <Mountain className="w-3 h-3 text-green-700" /> },
            { id: "velos-electriques", name: "Vélos électriques", slug: "velos-electriques", icon: <Zap className="w-3 h-3 text-yellow-500" /> },
            { id: "accessoires-velo", name: "Accessoires vélo", slug: "accessoires-velo", icon: <Bike className="w-3 h-3 text-blue-400" /> },
          ]
        },
        { id: "trottinette-electrique", name: "Trottinette électrique", slug: "trottinette-electrique", icon: <Zap className="w-3 h-3 text-gray-600" /> },
        { id: "natation", name: "Natation", slug: "natation", icon: <Sun className="w-3 h-3 text-cyan-500" /> },
        { id: "randonnée", name: "Randonnée", slug: "randonnee", icon: <Mountain className="w-3 h-3 text-gray-500" /> },
        { 
          id: "camping", 
          name: "Camping", 
          slug: "camping", 
          icon: <Tent className="w-3 h-3 text-green-700" />,
          subcategories: [
            { id: "tentes", name: "Tentes", slug: "tentes", icon: <Tent className="w-3 h-3 text-green-800" /> },
            { id: "sacs-couchage", name: "Sacs de couchage", slug: "sacs-couchage", icon: <Backpack className="w-3 h-3 text-yellow-800" /> },
            { id: "materiel-cuisine-camping", name: "Matériel de cuisine", slug: "materiel-cuisine-camping", icon: <CookingPot className="w-3 h-3 text-gray-600" /> },
          ]
        },
        { 
          id: "sports-hiver", 
          name: "Sports d'hiver", 
          slug: "sports-hiver", 
          icon: <Mountain className="w-3 h-3 text-blue-300" />,
          subcategories: [
            { id: "skis", name: "Skis", slug: "skis", icon: <Mountain className="w-3 h-3 text-blue-400" /> },
            { id: "snowboards", name: "Snowboards", slug: "snowboards", icon: <Mountain className="w-3 h-3 text-blue-500" /> },
            { id: "chaussures-ski", name: "Chaussures de ski", slug: "chaussures-ski", icon: <Mountain className="w-3 h-3 text-gray-600" /> },
            { id: "vetements-ski", name: "Vêtements de ski", slug: "vetements-ski", icon: <Mountain className="w-3 h-3 text-blue-200" /> }
          ]
        },
        { 
          id: "sports-aquatiques", 
          name: "Sports aquatiques", 
          slug: "sports-aquatiques", 
          icon: <Waves className="w-3 h-3 text-cyan-400" />,
          subcategories: [
            { id: "planches-surf", name: "Planches de surf", slug: "planches-surf", icon: <Waves className="w-3 h-3 text-cyan-500" /> },
            { id: "combinaisons-plongee", name: "Combinaisons de plongée", slug: "combinaisons-plongee", icon: <Waves className="w-3 h-3 text-cyan-600" /> },
            { id: "equipements-plongee", name: "Équipements de plongée", slug: "equipements-plongee", icon: <Waves className="w-3 h-3 text-blue-600" /> }
          ]
        },
        { 
          id: "sports-combat", 
          name: "Sports de combat", 
          slug: "sports-combat", 
          icon: <Sun className="w-3 h-3 text-red-500" />,
          subcategories: [
            { id: "gants-boxe", name: "Gants de boxe", slug: "gants-boxe", icon: <Sun className="w-3 h-3 text-red-600" /> },
            { id: "tatamis", name: "Tatamis", slug: "tatamis", icon: <Sun className="w-3 h-3 text-gray-500" /> },
            { id: "equipements-arts-martiaux", name: "Équipements arts martiaux", slug: "equipements-arts-martiaux", icon: <Sun className="w-3 h-3 text-red-400" /> }
          ]
        },
        { 
          id: "fitness-maison", 
          name: "Fitness à domicile", 
          slug: "fitness-maison", 
          icon: <Sun className="w-3 h-3 text-purple-500" />,
          subcategories: [
            { id: "equipements-musculation", name: "Équipements musculation", slug: "equipements-musculation", icon: <Sun className="w-3 h-3 text-purple-600" /> },
            { id: "tapis-course", name: "Tapis de course", slug: "tapis-course", icon: <Sun className="w-3 h-3 text-purple-400" /> },
            { id: "velos-appartement", name: "Vélos d'appartement", slug: "velos-appartement", icon: <Bike className="w-3 h-3 text-purple-300" /> }
          ]
        },
        { id: "autres-sports", name: "Autres sports", slug: "autres-sports", icon: <Sun className="w-3 h-3 text-yellow-400" /> }
      ]
    },
    {
      id: "materiel-sport",
      name: "Matériel de sport",
      slug: "materiel-sport",
      icon: <Sun className="w-3 h-3 text-yellow-300" />,
      subcategories: [
        { id: "materiel-terre", name: "Matériel sport de terre", slug: "materiel-terre", icon: <Mountain className="w-3 h-3 text-gray-500" /> },
        { id: "materiel-air", name: "Matériel sport d'air", slug: "materiel-air", icon: <Sun className="w-3 h-3 text-yellow-400" /> },
        { 
          id: "materiel-mer", 
          name: "Matériel sport de mer", 
          slug: "materiel-mer", 
          icon: <Umbrella className="w-3 h-3 text-blue-400" />,
          subcategories: [
            { id: "jet-ski", name: "Jet-ski", slug: "jet-ski", icon: <Waves className="w-3 h-3 text-cyan-400" /> },
            { id: "bateaux-plaisance", name: "Bateaux et plaisance", slug: "bateaux-plaisance", icon: <Ship className="w-3 h-3 text-blue-700" /> },
            { id: "autres-materiel-mer", name: "Autres", slug: "autres-materiel-mer", icon: <Umbrella className="w-3 h-3 text-blue-400" /> },
          ]
        }
      ]
    }
  ]
};
