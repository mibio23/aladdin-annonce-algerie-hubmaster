import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

const CategoriesDropdownContent = () => {
  const { isRTL } = useSafeI18nWithRouter();
  return (
    <div className="bg-background rounded-lg shadow-xl border border-border p-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="min-w-[600px] text-sm text-muted-foreground">
        Aucune catégorie disponible
      </div>
    </div>
  );
};

export default CategoriesDropdownContent;
