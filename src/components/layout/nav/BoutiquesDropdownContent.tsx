import { Link } from "react-router-dom";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

const BoutiquesDropdownContent = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-[200px]">
      <ul className="space-y-1">
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/boutiques/magasins"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.stores')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link
              to="/boutiques/cabinets"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.offices')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link
              to="/boutiques/entreprises-privees"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.privateCompanies')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link
              to="/boutiques/entreprises-nationales"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.nationalCompanies')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link
              to="/boutiques/commerce-ambulant"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.streetVendors')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link
              to="/boutiques/associations"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.shops.associations')}
            </Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </div>
  );
};

export default BoutiquesDropdownContent;
