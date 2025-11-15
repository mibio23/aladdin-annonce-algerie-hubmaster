import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, Eye, Lock, Phone, Users, CheckCircle, XCircle } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const ConseilsSecurite = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('safety.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('safety.subtitle')}
              </p>
            </div>

            {/* Alert de sécurité générale */}
            <Alert className="mb-8 border-orange-200 bg-orange-50 dark:bg-orange-900/10">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800 dark:text-orange-400">
                {t('safety.generalAlert')}
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Conseils pour les vendeurs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    {t('safety.sellers.title')}
                  </CardTitle>
                  <CardDescription>{t('safety.sellers.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.sellers.tip1.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.sellers.tip1.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.sellers.tip2.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.sellers.tip2.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.sellers.tip3.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.sellers.tip3.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.sellers.tip4.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.sellers.tip4.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conseils pour les acheteurs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-blue-600" />
                    {t('safety.buyers.title')}
                  </CardTitle>
                  <CardDescription>{t('safety.buyers.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.buyers.tip1.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.buyers.tip1.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.buyers.tip2.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.buyers.tip2.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.buyers.tip3.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.buyers.tip3.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                          {t('safety.buyers.tip4.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t('safety.buyers.tip4.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Signes d'alerte */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <XCircle className="h-5 w-5 mr-2 text-red-600" />
                  {t('safety.warnings.title')}
                </CardTitle>
                <CardDescription>{t('safety.warnings.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">{t('safety.warnings.category1')}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• {t('safety.warnings.warning1')}</li>
                      <li>• {t('safety.warnings.warning2')}</li>
                      <li>• {t('safety.warnings.warning3')}</li>
                      <li>• {t('safety.warnings.warning4')}</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">{t('safety.warnings.category2')}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• {t('safety.warnings.warning5')}</li>
                      <li>• {t('safety.warnings.warning6')}</li>
                      <li>• {t('safety.warnings.warning7')}</li>
                      <li>• {t('safety.warnings.warning8')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rencontres sécurisées */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  {t('safety.meetings.title')}
                </CardTitle>
                <CardDescription>{t('safety.meetings.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('safety.meetings.tip1.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('safety.meetings.tip1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('safety.meetings.tip2.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('safety.meetings.tip2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lock className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('safety.meetings.tip3.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('safety.meetings.tip3.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact urgence */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-red-600" />
                  {t('safety.emergency.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('safety.emergency.police')}
                    </h4>
                    <p className="text-2xl font-bold text-red-600">17</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('safety.emergency.policeDesc')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t('safety.emergency.support')}
                    </h4>
                    <p className="text-lg font-semibold text-orange-600">support@aladdin.dz</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('safety.emergency.supportDesc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConseilsSecurite;
