import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCategoryMenu } from "@/data/megaMenu/categoryMenu";
import { Loader2, Image } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MegaMenuCategories = () => {
  const { language } = useSafeI18nWithRouter();
  const categoryMenu = getCategoryMenu(language);
  const isLoading = false;
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[520px] w-[1000px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const activeCategory = categoryMenu[activeIndex];

  const recommended: { id: string; name: string; href: string }[] = (() => {
    if (!activeCategory) return [];
    const items: { id: string; name: string; slug: string }[] = [];
    activeCategory.subcategories.forEach((sub) => {
      if (sub.subcategories && sub.subcategories.length) {
        sub.subcategories.slice(0, 3).forEach((leaf) => {
          items.push({ id: leaf.id, name: leaf.name, slug: `${sub.slug}/${leaf.slug}` });
        });
      } else {
        items.push({ id: sub.id, name: sub.name, slug: sub.slug });
      }
    });
    return items.slice(0, 8).map((it) => ({ id: it.id, name: it.name, href: `/category/${activeCategory.slug}/${it.slug}` }));
  })();

  return (
    <div className="w-[1000px] h-[520px]">
      <div className="grid grid-cols-5 gap-0 h-full">
        <div className="col-span-1 border-r border-gray-200 dark:border-slate-700 h-full overflow-hidden">
          <ScrollArea className="h-full">
            <ul className="py-2">
              {categoryMenu.map((cat, idx) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-800 ${idx === activeIndex ? 'bg-gray-100 dark:bg-slate-800 font-semibold' : ''}`}
                  >
                    <span className="shrink-0">{cat.icon}</span>
                    <span className="truncate">{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>

        <div className="col-span-4 h-full overflow-hidden">
          <ScrollArea className="h-full">
            {activeCategory && (
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {recommended.map((rec) => (
                    <Link key={rec.id} to={rec.href} className="group">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-gray-400 group-hover:text-primary" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary font-medium truncate">{rec.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-8">
                  {activeCategory.subcategories.map((sub) => (
                    <div key={sub.id}>
                      <Link
                        to={`/category/${activeCategory.slug}/${sub.slug}`}
                        className="text-gray-900 dark:text-white font-bold text-sm hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                      <ul className="mt-2 space-y-1">
                        {(sub.subcategories && sub.subcategories.length ? sub.subcategories : []).map((leaf) => (
                          <li key={leaf.id}>
                            <Link
                              to={`/category/${activeCategory.slug}/${sub.slug}/${leaf.slug}`}
                              className="text-gray-600 dark:text-gray-300 hover:text-primary text-sm"
                            >
                              {leaf.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCategories;
