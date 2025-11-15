import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, BarChart3,  Zap, Shield, Award, Phone } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const EspacePro = () => {
  const { t, isRTL } = useSafeI18nWithRouter();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className={`container mx-auto px-4 text-center ${isRTL ? 'text-right' : 'text-center'}`}>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-6">
              {t('pro.subtitle')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('pro.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {t('pro.description')}
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              {t('pro.cta.button')}
            </Button>
          </div>
        </section>

        {/* Advertising Banners */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/api/placeholder/600/300" 
                  alt={t('pro.banner1.alt')}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className={`text-white text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                    <h3 className="text-2xl font-bold mb-2">{t('pro.service1.title')}</h3>
                    <p>{t('pro.service1.description')}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/api/placeholder/600/300" 
                  alt={t('pro.banner2.alt')}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className={`text-white text-center ${isRTL ? 'text-right' : 'text-center'}`}>
                    <h3 className="text-2xl font-bold mb-2">{t('pro.service2.title')}</h3>
                    <p>{t('pro.service2.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('pro.services.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('pro.services.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{t('pro.service1.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.service1.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="mx-auto h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>{t('pro.service2.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.service2.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>{t('pro.service3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.service3.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('pro.features.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('pro.features.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="mx-auto h-10 w-10 text-yellow-600 mb-3" />
                  <CardTitle className="text-lg">{t('pro.feature1.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.feature1.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="mx-auto h-10 w-10 text-green-600 mb-3" />
                  <CardTitle className="text-lg">{t('pro.feature2.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.feature2.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="mx-auto h-10 w-10 text-blue-600 mb-3" />
                  <CardTitle className="text-lg">{t('pro.feature3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.feature3.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="mx-auto h-10 w-10 text-purple-600 mb-3" />
                  <CardTitle className="text-lg">{t('pro.feature4.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t('pro.feature4.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className={`text-center text-white ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold mb-4">
                {t('pro.cta.title')}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {t('pro.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  {t('pro.cta.button')}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="mr-2 h-4 w-4" />
                  {t('help.contact.phone.title')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EspacePro;
