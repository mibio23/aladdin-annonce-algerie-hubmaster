
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const PlanDuSite = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t('sitemap.title')}
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('sitemap.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pages principales */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('sitemap.mainPages')}
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/notre-histoire" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.ourStory')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/comment-ca-marche" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.howItWorks')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.contact')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/actualites" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.news')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/carrieres" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.careers')}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('sitemap.services')}
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/aide" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.helpCenter')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/conseils-securite" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.safetyTips')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pro" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.professionalSpace')}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Informations légales */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('sitemap.legalInfo')}
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/conditions-generales" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.termsOfService')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.privacyPolicy')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/gestion-cookies" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.cookieManagement')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/signaler" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                      {t('sitemap.reportContent')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('sitemap.categories')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('sitemap.categoriesDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlanDuSite;
