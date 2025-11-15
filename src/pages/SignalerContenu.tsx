import React, { useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, Mail, Phone, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Footer from '@/components/layout/Footer';

interface ReportForm {
  reporterName: string;
  reporterEmail: string;
  reporterPhone?: string;
  contentType: string;
  contentUrl: string;
  reason: string;
  description: string;
}

const SignalerContenu = () => {
  const { t } = useSafeI18nWithRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReportForm>();

  const onSubmit = (data: ReportForm) => {
    console.log('Report submitted:', data);
    setIsSubmitted(true);
    reset();
    // Ici on pourrait envoyer les données à un service
  };

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Alert className="border-green-200 bg-green-50 dark:bg-green-900/10">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-400">
                  {t('report.success')}
                </AlertDescription>
              </Alert>
              <div className="mt-6 text-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  {t('report.submitAnother')}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('report.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('report.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations importantes */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                    {t('report.importantInfo')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                      {t('report.whatToReport')}
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• {t('report.reasons.illegal')}</li>
                      <li>• {t('report.reasons.inappropriate')}</li>
                      <li>• {t('report.reasons.spam')}</li>
                      <li>• {t('report.reasons.fraud')}</li>
                      <li>• {t('report.reasons.copyright')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                      {t('report.responseTime')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('report.responseTimeDesc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                      {t('report.confidentiality')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('report.confidentialityDesc')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('report.formTitle')}</CardTitle>
                  <CardDescription>{t('report.formDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Informations du rapporteur */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t('report.reporterInfo')}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reporterName" className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {t('report.name')} *
                          </Label>
                          <Input
                            id="reporterName"
                            {...register('reporterName', { required: t('report.nameRequired') })}
                            placeholder={t('report.namePlaceholder')}
                          />
                          {errors.reporterName && (
                            <p className="text-red-500 text-sm mt-1">{errors.reporterName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="reporterEmail" className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {t('report.email')} *
                          </Label>
                          <Input
                            id="reporterEmail"
                            type="email"
                            {...register('reporterEmail', { 
                              required: t('report.emailRequired'),
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t('report.emailInvalid')
                              }
                            })}
                            placeholder={t('report.emailPlaceholder')}
                          />
                          {errors.reporterEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.reporterEmail.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="reporterPhone" className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {t('report.phone')} ({t('report.optional')})
                        </Label>
                        <Input
                          id="reporterPhone"
                          {...register('reporterPhone')}
                          placeholder={t('report.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Informations sur le contenu */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t('report.contentInfo')}
                      </h3>

                      <div>
                        <Label htmlFor="contentType">{t('report.contentType')} *</Label>
                        <select
                          id="contentType"
                          {...register('contentType', { required: t('report.contentTypeRequired') })}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600"
                        >
                          <option value="">{t('report.selectContentType')}</option>
                          <option value="announcement">{t('report.contentTypes.announcement')}</option>
                          <option value="shop">{t('report.contentTypes.shop')}</option>
                          <option value="comment">{t('report.contentTypes.comment')}</option>
                          <option value="user">{t('report.contentTypes.user')}</option>
                          <option value="other">{t('report.contentTypes.other')}</option>
                        </select>
                        {errors.contentType && (
                          <p className="text-red-500 text-sm mt-1">{errors.contentType.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="contentUrl">{t('report.contentUrl')} *</Label>
                        <Input
                          id="contentUrl"
                          {...register('contentUrl', { required: t('report.contentUrlRequired') })}
                          placeholder={t('report.contentUrlPlaceholder')}
                        />
                        {errors.contentUrl && (
                          <p className="text-red-500 text-sm mt-1">{errors.contentUrl.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="reason">{t('report.reason')} *</Label>
                        <select
                          id="reason"
                          {...register('reason', { required: t('report.reasonRequired') })}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600"
                        >
                          <option value="">{t('report.selectReason')}</option>
                          <option value="illegal">{t('report.reasons.illegal')}</option>
                          <option value="inappropriate">{t('report.reasons.inappropriate')}</option>
                          <option value="spam">{t('report.reasons.spam')}</option>
                          <option value="fraud">{t('report.reasons.fraud')}</option>
                          <option value="copyright">{t('report.reasons.copyright')}</option>
                          <option value="other">{t('report.reasons.other')}</option>
                        </select>
                        {errors.reason && (
                          <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="description">{t('report.description')} *</Label>
                        <Textarea
                          id="description"
                          {...register('description', { required: t('report.descriptionRequired') })}
                          placeholder={t('report.descriptionPlaceholder')}
                          rows={5}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Button type="button" variant="outline" onClick={() => reset()}>
                        {t('report.reset')}
                      </Button>
                      <Button type="submit" className="bg-red-600 hover:bg-red-700">
                        {t('report.submit')}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignalerContenu;
