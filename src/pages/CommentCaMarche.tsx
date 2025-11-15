
import React from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Search, PlusCircle, MessageCircle, ShoppingBag, CheckCircle } from "lucide-react";

const CommentCaMarche = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-slate-200 mb-8">
            {t('commentCaMarche.title')}
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-slate-400">
              {t('commentCaMarche.subtitle')}
            </p>
          </div>

          {/* Pour les Vendeurs */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
              {t('commentCaMarche.forSellers')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.step1.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.step1.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.step2.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.step2.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.step3.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.step3.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Pour les Acheteurs */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
              {t('commentCaMarche.forBuyers')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.buyerStep1.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.buyerStep1.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.buyerStep2.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.buyerStep2.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('commentCaMarche.buyerStep3.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.buyerStep3.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
              {t('commentCaMarche.advantages.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
                  {t('commentCaMarche.advantages.security.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.advantages.security.description')}
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
                  {t('commentCaMarche.advantages.ease.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.advantages.ease.description')}
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
                  {t('commentCaMarche.advantages.reach.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.advantages.reach.description')}
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
                  {t('commentCaMarche.advantages.support.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('commentCaMarche.advantages.support.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {t('commentCaMarche.cta.title')}
            </h2>
            <p className="text-lg mb-6">
              {t('commentCaMarche.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('commentCaMarche.cta.postAd')}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                {t('commentCaMarche.cta.createShop')}
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default CommentCaMarche;
