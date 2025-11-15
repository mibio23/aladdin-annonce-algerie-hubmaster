
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

interface HeaderMobileToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMobileToggle = ({ isMenuOpen, toggleMenu }: HeaderMobileToggleProps) => {
  const { t } = useSafeI18nWithRouter();
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden p-2 text-gray-700 hover:text-accessible-orange"
    >
      {isMenuOpen ? t('header.close') : t('header.menu')}
    </button>
  );
};

export default HeaderMobileToggle;
