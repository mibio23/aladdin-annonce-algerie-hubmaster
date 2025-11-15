import React from "react";
import { Link } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { SubCategory } from "@/data/categoryTypes";
import { categorizedAnnouncements } from "@/data/categoryData";
import { Button } from "@/components/ui/button";

interface SubcategoryGridProps {
  subcategories: SubCategory[];
  categorySlug: string;
}

const SubcategoryGrid: React.FC<SubcategoryGridProps> = ({
  subcategories,
  categorySlug,
}) => {
  const { t } = useSafeI18nWithRouter();

  // Mapping des images par slug de sous-catégorie
  const getImageForSubcategory = (slug: string) => {
    const imageMap: Record<string, string> = {
      'meubles': '/lovable-uploads/0e847ff3-5ad7-4093-b131-55e453a9a5d5.png', // Salon/meubles (inversé avec décoration)
      'electromenager': '/lovable-uploads/ce8f091f-a341-46cc-8905-19df51a3cb62.png', // Électroménagers
      'petit-electromenager': '/lovable-uploads/ff8af612-c477-4cdc-ab81-6a2ea4ee2efa.png', // Petit électroménager  
      'decoration': '/lovable-uploads/524a1901-8bb5-4efa-90f7-2b2e9441def1.png', // Décoration/mobilier (inversé avec meubles)
      'cuisine-ustensiles': '/lovable-uploads/4cc7c5f5-f7bc-4a72-b613-1363232b19b2.png', // Ustensiles cuisine
      'linge-maison': '/lovable-uploads/696bb752-da2e-4833-8cb4-6e9fb0479175.png', // Linge de maison
      'nettoyage-entretien': '/lovable-uploads/9b69fc7b-b995-4062-ab33-d6860e437c70.png' // Nettoyage/entretien
    };
    return imageMap[slug] || '/lovable-uploads/19a22be5-5a81-4fb9-834a-6858069184fd.png';
  };


  // Animation pulse-scale pour tous les éléments avec vitesse très lente
  const getInteractionClasses = () => {
    const baseClasses = 'scale-105 hover:animate-bounce hover:scale-110 transition-all duration-300 hover:shadow-lg';
    return `animate-[pulse-scale_22s_ease-in-out_infinite] ${baseClasses}`;
  };

  // Styles des boutons transparents comme la bannière
  const transparentButtonStyles = "bg-white/90 hover:bg-black hover:border-brand-gold hover:text-brand-gold hover:scale-105 hover:-translate-y-1 border-2 border-white text-black font-bold rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out px-4 py-2 text-sm transform shadow-sm";

  return (
    <section className="h-auto mb-0">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 text-center">
        {t('categories.subcategories')}
      </h2>
      
      <div className="flex gap-6 justify-center px-4 h-fit mb-0">
        {subcategories.map((subcategory) => {
          const translatedName = t(`categories.${subcategory.slug}`) !== `categories.${subcategory.slug}` 
            ? t(`categories.${subcategory.slug}`) 
            : subcategory.name;

          // Calculer le nombre d'annonces pour cette sous-catégorie
          const count = categorizedAnnouncements[subcategory.slug]?.length || 0;

          return (
            <div key={subcategory.id} className="flex-shrink-0 group flex flex-col items-center">
              <Link 
                to={`/category/${categorySlug}/${subcategory.slug}`}
                className="block mb-3"
              >
                <div className={`relative w-44 h-44 rounded-full overflow-hidden shadow-lg ${getInteractionClasses()}`}>
                  {/* Image de fond */}
                  <img 
                    src={getImageForSubcategory(subcategory.slug)}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Compteur d'annonces en haut à droite comme dans le carrousel */}
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full z-10 text-xs font-semibold bg-black/40 opacity-40 text-white group-hover:opacity-100 group-hover:bg-black/80 group-hover:text-brand-gold transition-all duration-200 shadow">
                    {count} {count > 1 ? t('categories.announcements') : t('categories.announcement')}
                  </div>
                  
                  {/* Séparation transparente en bas */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-3">
                    <h3 className="text-white font-bold text-sm leading-tight uppercase text-center drop-shadow-lg">
                      {translatedName}
                    </h3>
                  </div>
                </div>
              </Link>
              
              {/* Bouton unique avec le titre de l'élément */}
              <div className="w-full max-w-[176px] mt-2">
                <Button
                  asChild
                  className={transparentButtonStyles}
                >
                  <Link to={`/category/${categorySlug}/${subcategory.slug}`} className="flex items-center justify-center">
                    {translatedName}
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubcategoryGrid;
