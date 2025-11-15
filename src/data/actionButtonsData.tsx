
import { 
  PlusCircle, 
  Search, 
  Store
} from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

export const useActionButtonsData = () => {
  const { t } = useSafeI18nWithRouter();
  
  return [
    { to: "/deposer-annonce", text: t('banner.postAd'), Icon: PlusCircle },
    { to: "/creer-boutique", text: t('banner.createShop'), Icon: Store },
    { to: "/deposer-offre-metier", text: t('banner.postSearch'), Icon: Search }
  ];
};
