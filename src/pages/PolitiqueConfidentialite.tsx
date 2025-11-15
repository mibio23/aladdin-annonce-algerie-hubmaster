
import React from "react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, Mail, Calendar, Globe } from "lucide-react";
import Footer from "@/components/layout/Footer";

const PolitiqueConfidentialite = () => {
  const { t } = useSafeI18nWithRouter();

  const sections = [
    {
      icon: FileText,
      title: t('politiqueConfidentialite.introduction.title'),
      content: [
        t('politiqueConfidentialite.introduction.content1'),
        t('politiqueConfidentialite.introduction.content2'),
        t('politiqueConfidentialite.introduction.content3')
      ]
    },
    {
      icon: Users,
      title: t('politiqueConfidentialite.dataCollection.title'),
      content: [
        t('politiqueConfidentialite.dataCollection.content1'),
        t('politiqueConfidentialite.dataCollection.content2')
      ],
      list: [
        t('politiqueConfidentialite.dataCollection.item1'),
        t('politiqueConfidentialite.dataCollection.item2'),
        t('politiqueConfidentialite.dataCollection.item3'),
        t('politiqueConfidentialite.dataCollection.item4'),
        t('politiqueConfidentialite.dataCollection.item5')
      ]
    },
    {
      icon: Eye,
      title: t('politiqueConfidentialite.dataUsage.title'),
      content: [
        t('politiqueConfidentialite.dataUsage.content1')
      ],
      list: [
        t('politiqueConfidentialite.dataUsage.item1'),
        t('politiqueConfidentialite.dataUsage.item2'),
        t('politiqueConfidentialite.dataUsage.item3'),
        t('politiqueConfidentialite.dataUsage.item4'),
        t('politiqueConfidentialite.dataUsage.item5')
      ]
    },
    {
      icon: Shield,
      title: t('politiqueConfidentialite.dataSharing.title'),
      content: [
        t('politiqueConfidentialite.dataSharing.content1'),
        t('politiqueConfidentialite.dataSharing.content2')
      ],
      list: [
        t('politiqueConfidentialite.dataSharing.item1'),
        t('politiqueConfidentialite.dataSharing.item2'),
        t('politiqueConfidentialite.dataSharing.item3'),
        t('politiqueConfidentialite.dataSharing.item4')
      ]
    },
    {
      icon: Lock,
      title: t('politiqueConfidentialite.dataSecurity.title'),
      content: [
        t('politiqueConfidentialite.dataSecurity.content1'),
        t('politiqueConfidentialite.dataSecurity.content2')
      ],
      list: [
        t('politiqueConfidentialite.dataSecurity.item1'),
        t('politiqueConfidentialite.dataSecurity.item2'),
        t('politiqueConfidentialite.dataSecurity.item3'),
        t('politiqueConfidentialite.dataSecurity.item4')
      ]
    },
    {
      icon: Globe,
      title: t('politiqueConfidentialite.cookies.title'),
      content: [
        t('politiqueConfidentialite.cookies.content1'),
        t('politiqueConfidentialite.cookies.content2')
      ],
      list: [
        t('politiqueConfidentialite.cookies.item1'),
        t('politiqueConfidentialite.cookies.item2'),
        t('politiqueConfidentialite.cookies.item3'),
        t('politiqueConfidentialite.cookies.item4')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('politiqueConfidentialite.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {t('politiqueConfidentialite.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{t('politiqueConfidentialite.lastUpdate')}</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              <span>{t('politiqueConfidentialite.version')}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600 mr-4" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.list && (
                      <ul className="space-y-2 mt-4">
                        {section.list.map((item, lIndex) => (
                          <li key={lIndex} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* User Rights */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('politiqueConfidentialite.userRights.title')}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('politiqueConfidentialite.userRights.content')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'access', 'rectification', 'deletion', 'portability',
                  'limitation', 'opposition', 'withdraw', 'complaint'
                ].map((right) => (
                  <div key={right} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t(`politiqueConfidentialite.userRights.${right}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t(`politiqueConfidentialite.userRights.${right}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('politiqueConfidentialite.contact.title')}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t('politiqueConfidentialite.contact.content')}
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-900 dark:text-white">
                    <strong>{t('contact.info.email.title')}:</strong> privacy@aladdin.dz
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    <strong>{t('contact.info.address.title')}:</strong> {t('contact.info.address.street')}, {t('contact.info.address.city')}
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    <strong>{t('contact.info.phone.title')}:</strong> {t('contact.info.phone.main')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('politiqueConfidentialite.updates.title')}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('politiqueConfidentialite.updates.content1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                {t('politiqueConfidentialite.updates.content2')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
