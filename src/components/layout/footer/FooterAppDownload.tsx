import { useState } from 'react';
import { ArrowDown, Home as AppIcon } from 'lucide-react'; // Using Home as AppIcon
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

const FooterAppDownload = () => {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="mt-4 relative">
      <div 
        className="flex justify-center items-center space-x-2 bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition-all"
        onMouseEnter={() => setShowAppOptions(true)}
        onMouseLeave={() => setShowAppOptions(false)}
      >
        <ArrowDown className="h-5 w-5" /> {/* Replaced Download */}
        <span>{t('footer.appDownload.title')}</span>
      </div>
      
      {showAppOptions && (
        <div 
          className="absolute w-full mt-2 bg-gray-700 rounded-lg p-4 shadow-lg animate-fade-in z-10 bottom-full mb-2 md:bottom-auto md:top-full md:mb-0" // Adjusted position for responsiveness
          onMouseEnter={() => setShowAppOptions(true)}
          onMouseLeave={() => setShowAppOptions(false)}
        >
          <div className="space-y-3">
            <a href="#" className="flex items-center space-x-3 p-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
              <AppIcon className="h-6 w-6" /> {/* Replaced Apple */}
              <span>{t('footer.appDownload.ios')}</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
              <AppIcon className="h-6 w-6" /> {/* Replaced Smartphone */}
              <span>{t('footer.appDownload.android')}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterAppDownload;
