
import React from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Settings, BarChart3, Globe, Clock } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const GestionCookies = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('gestionCookies.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {t('gestionCookies.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{t('gestionCookies.lastUpdate')}</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('gestionCookies.introduction.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.introduction.content1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.introduction.content2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.introduction.content3')}
              </p>
            </CardContent>
          </Card>

          {/* What are Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t('gestionCookies.whatAreCookies.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.whatAreCookies.content1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.whatAreCookies.content2')}
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('gestionCookies.cookieTypes.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Essential Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold">{t('gestionCookies.cookieTypes.essential.title')}</h4>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <Switch checked disabled />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {t('gestionCookies.cookieTypes.essential.description')}
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold">{t('gestionCookies.cookieTypes.analytics.title')}</h4>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <Switch />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {t('gestionCookies.cookieTypes.analytics.description')}
                </p>
              </div>

              {/* Preferences Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold">{t('gestionCookies.cookieTypes.preferences.title')}</h4>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <Switch />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {t('gestionCookies.cookieTypes.preferences.description')}
                </p>
              </div>

              {/* Advertising Cookies */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold">{t('gestionCookies.cookieTypes.advertising.title')}</h4>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <Switch />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {t('gestionCookies.cookieTypes.advertising.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('gestionCookies.yourRights.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.yourRights.content')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    {t('gestionCookies.yourRights.consent.title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {t('gestionCookies.yourRights.consent.description')}
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    {t('gestionCookies.yourRights.information.title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {t('gestionCookies.yourRights.information.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('gestionCookies.browserManagement.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.browserManagement.content')}
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-medium">{t('gestionCookies.browserManagement.chrome')}</p>
                <p className="text-sm font-medium mt-2">{t('gestionCookies.browserManagement.firefox')}</p>
                <p className="text-sm font-medium mt-2">{t('gestionCookies.browserManagement.safari')}</p>
                <p className="text-sm font-medium mt-2">{t('gestionCookies.browserManagement.edge')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('gestionCookies.thirdPartyCookies.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                {t('gestionCookies.thirdPartyCookies.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>{t('gestionCookies.thirdPartyCookies.googleAnalytics')}</li>
                <li>{t('gestionCookies.thirdPartyCookies.googleAdsense')}</li>
                <li>{t('gestionCookies.thirdPartyCookies.facebookPixel')}</li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Actions */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="w-full sm:w-auto">
                  {t('gestionCookies.actions.acceptAll')}
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  {t('gestionCookies.actions.rejectAll')}
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('gestionCookies.actions.savePreferences')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>{t('gestionCookies.contact.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('gestionCookies.contact.content')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GestionCookies;
