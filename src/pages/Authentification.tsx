import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Shield, Lock, Users } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const Authentification = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('authentification.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('authentification.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {t('authentification.lastUpdate')}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {t('authentification.certification')}
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                {t('authentification.introduction.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('authentification.introduction.content1')}</p>
              <p>{t('authentification.introduction.content2')}</p>
              <p>{t('authentification.introduction.content3')}</p>
            </CardContent>
          </Card>

          {/* Méthodes d'authentification */}
          <Card>
            <CardHeader>
              <CardTitle>{t('authentification.methods.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('authentification.methods.email.title')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t('authentification.methods.email.description')}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• {t('authentification.methods.email.feature1')}</li>
                    <li>• {t('authentification.methods.email.feature2')}</li>
                    <li>• {t('authentification.methods.email.feature3')}</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('authentification.methods.phone.title')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t('authentification.methods.phone.description')}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• {t('authentification.methods.phone.feature1')}</li>
                    <li>• {t('authentification.methods.phone.feature2')}</li>
                    <li>• {t('authentification.methods.phone.feature3')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sécurité des comptes */}
          <Card>
            <CardHeader>
              <CardTitle>{t('authentification.security.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t('authentification.security.encryption.title')}
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  {t('authentification.security.encryption.description')}
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  {t('authentification.security.verification.title')}
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  {t('authentification.security.verification.description')}
                </p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  {t('authentification.security.monitoring.title')}
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  {t('authentification.security.monitoring.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Conformité réglementaire */}
          <Card>
            <CardHeader>
              <CardTitle>{t('authentification.compliance.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('authentification.compliance.content1')}</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h5 className="font-semibold">{t('authentification.compliance.gdpr.title')}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {t('authentification.compliance.gdpr.description')}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h5 className="font-semibold">{t('authentification.compliance.iso.title')}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {t('authentification.compliance.iso.description')}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h5 className="font-semibold">{t('authentification.compliance.algeria.title')}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {t('authentification.compliance.algeria.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gestion des sessions */}
          <Card>
            <CardHeader>
              <CardTitle>{t('authentification.sessions.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('authentification.sessions.content1')}</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">{t('authentification.sessions.features.title')}</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• {t('authentification.sessions.features.feature1')}</li>
                  <li>• {t('authentification.sessions.features.feature2')}</li>
                  <li>• {t('authentification.sessions.features.feature3')}</li>
                  <li>• {t('authentification.sessions.features.feature4')}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Support utilisateur */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                {t('authentification.support.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('authentification.support.content1')}</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">{t('authentification.support.services.title')}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium">{t('authentification.support.services.recovery.title')}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('authentification.support.services.recovery.description')}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium">{t('authentification.support.services.assistance.title')}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('authentification.support.services.assistance.description')}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>{t('authentification.contact.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('authentification.contact.content')}</p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm">
                  <strong>Email:</strong> security@aladdin.dz<br />
                  <strong>Téléphone:</strong> +213 21 XX XX XX<br />
                  <strong>Horaires:</strong> {t('authentification.contact.hours')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Authentification;
