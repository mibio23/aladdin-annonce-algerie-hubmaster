
import React from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  Users, 
  Scale, 
  AlertTriangle, 
  Mail,
  Calendar,
  Check
} from "lucide-react";

const ConditionsGenerales = () => {
  const { t } = useSafeI18nWithRouter();

  const sections = [
    {
      id: "introduction",
      title: t('conditionsGenerales.introduction.title'),
      icon: <FileText className="h-5 w-5" />,
      content: [
        t('conditionsGenerales.introduction.content1'),
        t('conditionsGenerales.introduction.content2'),
        t('conditionsGenerales.introduction.content3')
      ]
    },
    {
      id: "definitions",
      title: t('conditionsGenerales.definitions.title'),
      icon: <FileText className="h-5 w-5" />,
      definitions: [
        {
          term: t('conditionsGenerales.definitions.platform.title'),
          definition: t('conditionsGenerales.definitions.platform.content')
        },
        {
          term: t('conditionsGenerales.definitions.user.title'),
          definition: t('conditionsGenerales.definitions.user.content')
        },
        {
          term: t('conditionsGenerales.definitions.services.title'),
          definition: t('conditionsGenerales.definitions.services.content')
        }
      ]
    },
    {
      id: "acceptance",
      title: t('conditionsGenerales.acceptance.title'),
      icon: <Check className="h-5 w-5" />,
      content: [
        t('conditionsGenerales.acceptance.content1'),
        t('conditionsGenerales.acceptance.content2'),
        t('conditionsGenerales.acceptance.content3')
      ]
    },
    {
      id: "registration",
      title: t('conditionsGenerales.registration.title'),
      icon: <Users className="h-5 w-5" />,
      content: [t('conditionsGenerales.registration.content1')],
      requirements: [
        t('conditionsGenerales.registration.requirement1'),
        t('conditionsGenerales.registration.requirement2'),
        t('conditionsGenerales.registration.requirement3'),
        t('conditionsGenerales.registration.requirement4')
      ],
      additionalContent: [t('conditionsGenerales.registration.content2')]
    },
    {
      id: "platformUse",
      title: t('conditionsGenerales.platformUse.title'),
      icon: <Shield className="h-5 w-5" />,
      authorized: {
        title: t('conditionsGenerales.platformUse.authorized.title'),
        items: [
          t('conditionsGenerales.platformUse.authorized.item1'),
          t('conditionsGenerales.platformUse.authorized.item2'),
          t('conditionsGenerales.platformUse.authorized.item3'),
          t('conditionsGenerales.platformUse.authorized.item4')
        ]
      },
      prohibited: {
        title: t('conditionsGenerales.platformUse.prohibited.title'),
        items: [
          t('conditionsGenerales.platformUse.prohibited.item1'),
          t('conditionsGenerales.platformUse.prohibited.item2'),
          t('conditionsGenerales.platformUse.prohibited.item3'),
          t('conditionsGenerales.platformUse.prohibited.item4'),
          t('conditionsGenerales.platformUse.prohibited.item5')
        ]
      }
    },
    {
      id: "responsibilities",
      title: t('conditionsGenerales.responsibilities.title'),
      icon: <Scale className="h-5 w-5" />,
      aladdin: {
        title: t('conditionsGenerales.responsibilities.aladdin.title'),
        content: t('conditionsGenerales.responsibilities.aladdin.content'),
        items: [
          t('conditionsGenerales.responsibilities.aladdin.item1'),
          t('conditionsGenerales.responsibilities.aladdin.item2'),
          t('conditionsGenerales.responsibilities.aladdin.item3')
        ]
      },
      users: {
        title: t('conditionsGenerales.responsibilities.users.title'),
        content: t('conditionsGenerales.responsibilities.users.content'),
        items: [
          t('conditionsGenerales.responsibilities.users.item1'),
          t('conditionsGenerales.responsibilities.users.item2'),
          t('conditionsGenerales.responsibilities.users.item3'),
          t('conditionsGenerales.responsibilities.users.item4')
        ]
      }
    }
  ];

  return (
    <>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('conditionsGenerales.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {t('conditionsGenerales.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t('conditionsGenerales.lastUpdate')}
              </div>
              <Badge variant="outline">{t('conditionsGenerales.version')}</Badge>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Table des matières
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className="justify-start h-auto p-2"
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="text-orange-500 mr-2">{index + 1}.</span>
                    {section.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={section.id} id={section.id} className="scroll-mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-orange-500">{section.icon}</span>
                    <span>{index + 1}. {section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Regular content */}
                  {section.content && section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Definitions */}
                  {section.definitions && (
                    <div className="space-y-3">
                      {section.definitions.map((def, defIndex) => (
                        <div key={defIndex} className="border-l-4 border-orange-200 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {def.term}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {def.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Requirements */}
                  {section.requirements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Vous devez :
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                        {section.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Additional content after requirements */}
                  {section.additionalContent && section.additionalContent.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Authorized/Prohibited uses */}
                  {section.authorized && (
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          {section.authorized.title}
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 ml-4">
                          {section.authorized.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {section.prohibited && (
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            {section.prohibited.title}
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 ml-4">
                            {section.prohibited.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Responsibilities */}
                  {section.aladdin && (
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          {section.aladdin.title}
                        </h4>
                        <p className="text-blue-700 dark:text-blue-300 mb-2">
                          {section.aladdin.content}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 ml-4">
                          {section.aladdin.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {section.users && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                            {section.users.title}
                          </h4>
                          <p className="text-purple-700 dark:text-purple-300 mb-2">
                            {section.users.content}
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 ml-4">
                            {section.users.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
                {index < sections.length - 1 && <Separator className="mt-6" />}
              </Card>
            ))}
          </div>

          {/* Additional sections */}
          <div className="space-y-8 mt-8">
            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  {t('conditionsGenerales.intellectualProperty.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {t('conditionsGenerales.intellectualProperty.content1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('conditionsGenerales.intellectualProperty.content2')}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('conditionsGenerales.intellectualProperty.content3')}
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                  <Mail className="h-5 w-5" />
                  {t('conditionsGenerales.contact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  {t('conditionsGenerales.contact.content')}
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@aladdin.dz</p>
                  <p><strong>Adresse:</strong> Alger, Algérie</p>
                  <p><strong>Téléphone:</strong> +213 XXX XXX XXX</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ConditionsGenerales;
