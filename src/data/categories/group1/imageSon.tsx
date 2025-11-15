import { Camera } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const imageSon: MenuCategory = {
  id: "image-son",
  name: "Image & Son",
  slug: "image-son",
  icon: <Camera className="w-4 h-4" />,
  subcategories: [
    {
      id: "photo",
      name: "Photo",
      slug: "photo",
      subcategories: [
        {
          id: "appareils-photo",
          name: "Appareils Photo",
          slug: "appareils-photo"
        },
        {
          id: "objectifs",
          name: "Objectifs",
          slug: "objectifs"
        },
        {
          id: "accessoires-photo",
          name: "Accessoires Photo",
          slug: "accessoires-photo"
        }
      ]
    },
    {
      id: "television",
      name: "Télévision",
      slug: "television",
      subcategories: [
        {
          id: "tv-led",
          name: "TV LED",
          slug: "tv-led"
        },
        {
          id: "tv-smart",
          name: "Smart TV",
          slug: "tv-smart"
        }
      ]
    },
    {
      id: "audio",
      name: "Audio",
      slug: "audio",
      subcategories: [
        {
          id: "enceintes",
          name: "Enceintes",
          slug: "enceintes"
        },
        {
          id: "casques",
          name: "Casques",
          slug: "casques"
        },
        {
          id: "microphones",
          name: "Microphones",
          slug: "microphones"
        },
        {
          id: "equipements-studio",
          name: "Équipements Studio",
          slug: "equipements-studio"
        }
      ]
    },
    {
      id: "streaming-podcast",
      name: "Streaming & Podcast",
      slug: "streaming-podcast",
      subcategories: [
        {
          id: "cameras-streaming",
          name: "Caméras Streaming",
          slug: "cameras-streaming"
        },
        {
          id: "cartes-capture",
          name: "Cartes de Capture",
          slug: "cartes-capture"
        },
        {
          id: "eclairage-streaming",
          name: "Éclairage Streaming",
          slug: "eclairage-streaming"
        },
        {
          id: "accessoires-podcast",
          name: "Accessoires Podcast",
          slug: "accessoires-podcast"
        }
      ]
    }
  ],
};
