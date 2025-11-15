import { Smartphone } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const telephonie: MenuCategory = {
  id: "telephonie",
  name: "Téléphonie",
  slug: "telephonie",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "Smartphones",
      slug: "smartphones",
      subcategories: [
        {
          id: "iphone",
          name: "iPhone",
          slug: "iphone"
        },
        {
          id: "samsung",
          name: "Samsung",
          slug: "samsung"
        },
        {
          id: "huawei",
          name: "Huawei",
          slug: "huawei"
        },
        {
          id: "xiaomi",
          name: "Xiaomi",
          slug: "xiaomi"
        }
      ]
    },
    {
      id: "accessoires-telephone",
      name: "Accessoires",
      slug: "accessoires-telephone",
      subcategories: [
        {
          id: "coques",
          name: "Coques",
          slug: "coques"
        },
        {
          id: "coques-etanches",
          name: "Coques Étanches",
          slug: "coques-etanches"
        },
        {
          id: "chargeurs",
          name: "Chargeurs",
          slug: "chargeurs"
        },
        {
          id: "supports-auto",
          name: "Supports Auto",
          slug: "supports-auto"
        },
        {
          id: "ecouteurs",
          name: "Écouteurs",
          slug: "ecouteurs"
        },
        {
          id: "perches-selfie",
          name: "Perches Selfie",
          slug: "perches-selfie"
        }
      ]
    }
  ],
};
