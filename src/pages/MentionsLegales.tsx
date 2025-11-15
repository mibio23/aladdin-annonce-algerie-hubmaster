import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building, Scale, Globe } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const MentionsLegales = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('mentionsLegales.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('mentionsLegales.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {t('mentionsLegales.lastUpdate')}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {t('mentionsLegales.jurisdiction')}
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Éditeur du site */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-600" />
                {t('mentionsLegales.publisher.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('mentionsLegales.publisher.companyName')}
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>{t('mentionsLegales.publisher.legalForm')}:</strong> {t('mentionsLegales.publisher.legalFormValue')}</p>
                  <p><strong>{t('mentionsLegales.publisher.registrationNumber')}:</strong> 12345678901234</p>
                  <p><strong>{t('mentionsLegales.publisher.address')}:</strong></p>
                  <p>123 {t('mentionsLegales.publisher.street')}</p>
                  <p>16000 {t('mentionsLegales.publisher.city')}</p>
                  <p>{t('mentionsLegales.publisher.country')}</p>
                  <p><strong>{t('mentionsLegales.publisher.phone')}:</strong> +213 21 XX XX XX</p>
                  <p><strong>Email:</strong> contact@aladdin.dz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Directeur de publication */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.director.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('mentionsLegales.director.name')}: M. Ahmed BENALI</p>
              <p>{t('mentionsLegales.director.function')}: {t('mentionsLegales.director.functionValue')}</p>
            </CardContent>
          </Card>

          {/* Hébergement */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.hosting.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">{t('mentionsLegales.hosting.provider')}: Lovable</h4>
                <p className="text-gray-600 dark:text-gray-300">{t('mentionsLegales.hosting.description')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Propriété intellectuelle */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.intellectualProperty.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('mentionsLegales.intellectualProperty.content1')}</p>
              <p>{t('mentionsLegales.intellectualProperty.content2')}</p>
              <p>{t('mentionsLegales.intellectualProperty.content3')}</p>
            </CardContent>
          </Card>

          {/* Données personnelles */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.personalData.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('mentionsLegales.personalData.content1')}</p>
              <p>{t('mentionsLegales.personalData.content2')}</p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.cookies.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('mentionsLegales.cookies.content1')}</p>
              <p>{t('mentionsLegales.cookies.content2')}</p>
            </CardContent>
          </Card>

          {/* Publicité */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.advertising.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('mentionsLegales.advertising.content1')}</p>
              <p>{t('mentionsLegales.advertising.content2')}</p>
              <p>{t('mentionsLegales.advertising.content3')}</p>
            </CardContent>
          </Card>

          {/* Responsabilité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600" />
                {t('mentionsLegales.liability.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('mentionsLegales.liability.content1')}</p>
              <p>{t('mentionsLegales.liability.content2')}</p>
              <p>{t('mentionsLegales.liability.content3')}</p>
            </CardContent>
          </Card>

          {/* Droit applicable */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.applicableLaw.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('mentionsLegales.applicableLaw.content')}</p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mentionsLegales.contact.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('mentionsLegales.contact.content')}</p>
              <p>Email: legal@aladdin.dz</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;
