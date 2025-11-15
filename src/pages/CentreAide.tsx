import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MessageCircle, Phone, Mail, HelpCircle, User, ShoppingCart, Shield, Wrench, CheckCircle } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const CentreAide = () => {
  const { t, isRTL } = useSafeI18nWithRouter();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className={`container mx-auto px-4 text-center ${isRTL ? 'text-right' : 'text-center'}`}>
            <HelpCircle className="mx-auto mb-6 h-16 w-16" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('helpCenter.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {t('helpCenter.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className={`absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
              <input
                type="text"
                placeholder={t('helpCenter.searchPlaceholder')}
                className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-blue-300`}
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <MessageCircle className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{t('helpCenter.quickActions.chat.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('helpCenter.quickActions.chat.description')}
                  </CardDescription>
                  <Button className="w-full">
                    {t('helpCenter.quickActions.chat.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <Phone className="mx-auto h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>{t('helpCenter.quickActions.phone.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('helpCenter.quickActions.phone.description')}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    {t('helpCenter.quickActions.phone.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <Mail className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>{t('helpCenter.quickActions.email.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('helpCenter.quickActions.email.description')}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    {t('helpCenter.quickActions.email.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('helpCenter.popularTopics.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    {t('helpCenter.popularTopics.createAccount')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.createAccountDesc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-green-600" />
                    {t('helpCenter.popularTopics.postAd')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.postAdDesc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-purple-600" />
                    {t('helpCenter.popularTopics.payment')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.paymentDesc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    {t('helpCenter.popularTopics.safety')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.safetyDesc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-red-600" />
                    {t('helpCenter.popularTopics.delivery')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.deliveryDesc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-indigo-600" />
                    {t('helpCenter.popularTopics.account')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('helpCenter.popularTopics.accountDesc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Catégories d'aide
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Getting Started */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">{t('helpCenter.categories.gettingStarted.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.gettingStarted.registration')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.gettingStarted.firstAd')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.gettingStarted.profile')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.gettingStarted.verification')}
                  </div>
                </CardContent>
              </Card>

              {/* Account Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">{t('helpCenter.categories.account.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.account.settings')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.account.password')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.account.notifications')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.account.privacy')}
                  </div>
                </CardContent>
              </Card>

              {/* Selling */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">{t('helpCenter.categories.selling.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.selling.createAd')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.selling.photos')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.selling.pricing')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.selling.promotion')}
                  </div>
                </CardContent>
              </Card>

              {/* Buying */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">{t('helpCenter.categories.buying.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.buying.search')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.buying.contact')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.buying.payment')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.buying.delivery')}
                  </div>
                </CardContent>
              </Card>

              {/* Safety */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">{t('helpCenter.categories.safety.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.safety.tips')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.safety.scams')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.safety.meetups')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.safety.report')}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-indigo-600">{t('helpCenter.categories.technical.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.technical.app')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.technical.website')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.technical.upload')}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 cursor-pointer">
                    <CheckCircle className="h-4 w-4" />
                    {t('helpCenter.categories.technical.browser')}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('helpCenter.contact.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className={`text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                <Phone className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('helpCenter.contact.phone.title')}</h3>
                <p className="font-semibold text-blue-600 mb-1">{t('helpCenter.contact.phone.number')}</p>
                <p className="text-gray-600 dark:text-gray-300">{t('helpCenter.contact.phone.hours')}</p>
              </div>

              <div className={`text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                <Mail className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('helpCenter.contact.email.title')}</h3>
                <p className="font-semibold text-green-600 mb-1">{t('helpCenter.contact.email.address')}</p>
                <p className="text-gray-600 dark:text-gray-300">{t('helpCenter.contact.email.response')}</p>
              </div>

              <div className={`text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                <MessageCircle className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('helpCenter.contact.chat.title')}</h3>
                <p className="font-semibold text-purple-600 mb-1">{t('helpCenter.contact.chat.availability')}</p>
                <p className="text-gray-600 dark:text-gray-300">{t('helpCenter.contact.chat.hours')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className={`text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardTitle className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  {t('helpCenter.status.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className={`text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {t('helpCenter.status.allSystems')}
                  </Badge>
                </div>
                <p className="text-green-600 font-medium mb-1">{t('helpCenter.status.operational')}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('helpCenter.status.lastUpdate')}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CentreAide;
