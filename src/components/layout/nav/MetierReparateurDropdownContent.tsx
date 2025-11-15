import { Link } from "react-router-dom";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

const MetierReparateurDropdownContent = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-[250px]">
      <ul className="space-y-1">
        {/* Lien vers la page principale */}
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/metiers-reparateurs"
              className="block px-3 py-2 text-sm text-red-600 font-bold hover:text-red-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors border-b border-gray-200 dark:border-gray-600 mb-1"
            >
              {t('menu.professions.viewAll')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/reparation/plombier"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.professions.plumber')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/reparation/electricien"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.professions.electrician')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/reparation/appareils"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.professions.applianceRepair')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/reparation/ordinateurs"
              className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
              {t('menu.professions.computerRepair')}
            </Link>
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink asChild>
            <Link 
              to="/reparation/auto"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.autoMechanic')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/moto"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.motoMechanic')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/menuiserie"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.carpenter')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/peinture"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.painter')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/maconnerie"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.masonry')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/climatisation"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.airConditioning')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/serrurerie"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.locksmith')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/jardinage"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.gardener')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/telephones"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.phoneRepair')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/cuisinier"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.cook')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/couturier"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.tailor')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/soudeur"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.welder')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/metallurgie"
                 className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
            >
               {t('menu.professions.metallurgist')}
            </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/coach-sportif"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
             >
               {t('menu.professions.sportsCoach')}
             </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/chauffeur"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
             >
               {t('menu.professions.driver')}
             </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/plongeur-maritime"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
             >
               {t('menu.professions.maritimeDiver')}
             </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/organisateur-evenements"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
             >
               {t('menu.professions.eventOrganizer')}
             </Link>
           </NavigationMenuLink>
         </li>
         <li>
           <NavigationMenuLink asChild>
             <Link 
               to="/reparation/autre"
               className="block px-3 py-2 text-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors font-medium aladdin-glow-hover"
             >
               {t('menu.professions.other')}
             </Link>
           </NavigationMenuLink>
         </li>
      </ul>
    </div>
  );
};

export default MetierReparateurDropdownContent;
