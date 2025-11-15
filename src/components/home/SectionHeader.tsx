
import React from 'react';
import { Link } from 'react-router-dom';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Search, TrendingUp, Zap } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  showViewAll?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  viewAllLink, 
  showViewAll = true 
}) => {
  const { t, isRTL } = useSafeI18nWithRouter();

  return (
    <div className={`flex items-center mb-6 ${isRTL ? 'justify-between' : 'justify-between'}`}>
      <div className={`flex items-center ${isRTL ? 'order-2' : 'order-1'}`}>
        <div className="relative">
          <Zap className={`h-8 w-8 ${isRTL ? 'ml-3' : 'mr-3'} text-green-600 dark:text-green-400 transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse`} />
          <TrendingUp className="absolute -top-1 -right-1 h-4 w-4 text-orange-500" />
        </div>
        <h2 className={`text-[2.84rem] font-bold text-black dark:text-slate-200 aladdin-glow uppercase hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>
          {title}
        </h2>
      </div>
      {showViewAll && viewAllLink && (
        <Link 
          to={viewAllLink}
          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-yellow-500 bg-black rounded-full hover:bg-gray-800 transition-colors ${isRTL ? 'order-1' : 'order-2'}`}
        >
          <Search className="w-4 h-4" />
          {t('viewMore')}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
