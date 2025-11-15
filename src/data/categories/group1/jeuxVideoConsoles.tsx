import { Gamepad2 } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const jeuxVideoConsoles: MenuCategory = {
  id: "jeux-video-consoles",
  name: "Jeux Vidéo & Consoles",
  slug: "jeux-video-consoles",
  icon: <Gamepad2 className="w-4 h-4" />,
  subcategories: [
    {
      id: "consoles",
      name: "Consoles",
      slug: "consoles",
      subcategories: [
        {
          id: "playstation",
          name: "PlayStation",
          slug: "playstation"
        },
        {
          id: "xbox",
          name: "Xbox",
          slug: "xbox"
        },
        {
          id: "nintendo",
          name: "Nintendo",
          slug: "nintendo"
        }
      ]
    },
    {
      id: "jeux",
      name: "Jeux",
      slug: "jeux",
      subcategories: [
        {
          id: "jeux-ps5",
          name: "Jeux PS5",
          slug: "jeux-ps5"
        },
        {
          id: "jeux-xbox",
          name: "Jeux Xbox",
          slug: "jeux-xbox"
        },
        {
          id: "jeux-pc",
          name: "Jeux PC",
          slug: "jeux-pc"
        }
      ]
    },
    {
      id: "accessoires-gaming",
      name: "Accessoires Gaming",
      slug: "accessoires-gaming",
      subcategories: [
        {
          id: "manettes",
          name: "Manettes",
          slug: "manettes"
        },
        {
          id: "casques-gaming",
          name: "Casques Gaming",
          slug: "casques-gaming"
        }
      ]
    }
  ],
};
