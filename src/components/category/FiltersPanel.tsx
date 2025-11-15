
import React from "react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

interface FiltersPanelProps {
  showFilters: boolean;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ showFilters }) => {
  const { t } = useSafeI18nWithRouter();

  if (!showFilters) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t('filters.advanced')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.priceRange')}
          </label>
          <select className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>{t('filters.anyPrice')}</option>
            <option>0 - 10,000 DA</option>
            <option>10,000 - 50,000 DA</option>
            <option>50,000+ DA</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.location')}
          </label>
          <select className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>{t('filters.anyLocation')}</option>
            <option>Alger</option>
            <option>Oran</option>
            <option>Constantine</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.condition')}
          </label>
          <select className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>{t('filters.anyCondition')}</option>
            <option>{t('filters.new')}</option>
            <option>{t('filters.used')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('filters.datePosted')}
          </label>
          <select className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>{t('filters.anyDate')}</option>
            <option>{t('filters.today')}</option>
            <option>{t('filters.thisWeek')}</option>
            <option>{t('filters.thisMonth')}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
