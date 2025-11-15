
import React from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const NotreHistoire = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-slate-200 mb-8">
            {t('notreHistoire.title')}
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.visionTitle')}
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {t('notreHistoire.visionContent')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.missionTitle')}
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('notreHistoire.missionContent')}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-2 ml-4">
                <li>{t('notreHistoire.missionPoint1')}</li>
                <li>{t('notreHistoire.missionPoint2')}</li>
                <li>{t('notreHistoire.missionPoint3')}</li>
                <li>{t('notreHistoire.missionPoint4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.valuesTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.innovationTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300">
                    {t('notreHistoire.innovationContent')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.trustTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300">
                    {t('notreHistoire.trustContent')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.proximityTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300">
                    {t('notreHistoire.proximityContent')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.excellenceTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300">
                    {t('notreHistoire.excellenceContent')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.impactTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.sellersTitle')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-1">
                    <li>{t('notreHistoire.sellersPoint1')}</li>
                    <li>{t('notreHistoire.sellersPoint2')}</li>
                    <li>{t('notreHistoire.sellersPoint3')}</li>
                    <li>{t('notreHistoire.sellersPoint4')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                    {t('notreHistoire.buyersTitle')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-1">
                    <li>{t('notreHistoire.buyersPoint1')}</li>
                    <li>{t('notreHistoire.buyersPoint2')}</li>
                    <li>{t('notreHistoire.buyersPoint3')}</li>
                    <li>{t('notreHistoire.buyersPoint4')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.innovationContinueTitle')}
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('notreHistoire.innovationContinueContent')}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-2 ml-4">
                <li>{t('notreHistoire.innovationPoint1')}</li>
                <li>{t('notreHistoire.innovationPoint2')}</li>
                <li>{t('notreHistoire.innovationPoint3')}</li>
                <li>{t('notreHistoire.innovationPoint4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.engagementTitle')}
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('notreHistoire.engagementContent')}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-2 ml-4">
                <li>{t('notreHistoire.engagementPoint1')}</li>
                <li>{t('notreHistoire.engagementPoint2')}</li>
                <li>{t('notreHistoire.engagementPoint3')}</li>
                <li>{t('notreHistoire.engagementPoint4')}</li>
              </ul>
            </section>

            <section className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                {t('notreHistoire.joinTitle')}
              </h2>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {t('notreHistoire.joinContent')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default NotreHistoire;
