import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const { t, isRTL } = useSafeI18nWithRouter();

  const faqCategories = [
    {
      category: t('faq.categories.general'),
      questions: [
        {
          question: t('faq.general.q1'),
          answer: t('faq.general.a1')
        },
        {
          question: t('faq.general.q2'),
          answer: t('faq.general.a2')
        },
        {
          question: t('faq.general.q3'),
          answer: t('faq.general.a3')
        }
      ]
    },
    {
      category: t('faq.categories.account'),
      questions: [
        {
          question: t('faq.account.q1'),
          answer: t('faq.account.a1')
        },
        {
          question: t('faq.account.q2'),
          answer: t('faq.account.a2')
        },
        {
          question: t('faq.account.q3'),
          answer: t('faq.account.a3')
        }
      ]
    },
    {
      category: t('faq.categories.buying'),
      questions: [
        {
          question: t('faq.buying.q1'),
          answer: t('faq.buying.a1')
        },
        {
          question: t('faq.buying.q2'),
          answer: t('faq.buying.a2')
        },
        {
          question: t('faq.buying.q3'),
          answer: t('faq.buying.a3')
        }
      ]
    },
    {
      category: t('faq.categories.selling'),
      questions: [
        {
          question: t('faq.selling.q1'),
          answer: t('faq.selling.a1')
        },
        {
          question: t('faq.selling.q2'),
          answer: t('faq.selling.a2')
        },
        {
          question: t('faq.selling.q3'),
          answer: t('faq.selling.a3')
        }
      ]
    },
    {
      category: t('faq.categories.payments'),
      questions: [
        {
          question: t('faq.payment.q1'),
          answer: t('faq.payment.a1')
        },
        {
          question: t('faq.payment.q2'),
          answer: t('faq.payment.a2')
        },
        {
          question: t('faq.payment.q3'),
          answer: t('faq.payment.a3')
        }
      ]
    },
    {
      category: t('faq.categories.safety'),
      questions: [
        {
          question: t('faq.security.q1'),
          answer: t('faq.security.a1')
        },
        {
          question: t('faq.security.q2'),
          answer: t('faq.security.a2')
        },
        {
          question: t('faq.security.q3'),
          answer: t('faq.security.a3')
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className={`container mx-auto px-4 text-center ${isRTL ? 'text-right' : 'text-center'}`}>
            <HelpCircle className="mx-auto mb-6 h-16 w-16" />
            <h1 className="text-4xl font-bold mb-4">
              {t('faq.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('faq.stillHaveQuestions')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('faq.contactSupport')}
              </p>
            </div>
            
            <div className={`grid md:grid-cols-3 gap-6 mb-12 ${isRTL ? 'md:grid-flow-row-dense' : ''}`}>
              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <MessageCircle className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{t('help.contact.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('help.contact.description')}
                  </CardDescription>
                  <Button className="w-full">
                    {t('faq.contactButton')}
                  </Button>
                </CardContent>
              </Card>

              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <Phone className="mx-auto h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>{t('help.contact.phone')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('help.contact.description')}
                  </CardDescription>
                  <p className="font-semibold text-green-600 mb-2">
                    {t('help.contact.phone')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('help.contact.hours')}
                  </p>
                </CardContent>
              </Card>

              <Card className={`text-center hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : 'text-center'}`}>
                <CardHeader>
                  <Mail className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>{t('help.contact.email')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('help.contact.description')}
                  </CardDescription>
                  <p className="font-semibold text-purple-600 mb-2">
                    {t('help.contact.email')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('help.contact.hours')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('faq.title')}
                </h2>
                <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'text-right' : 'text-center'}`}>
                  {t('faq.subtitle')}
                </p>
              </div>

              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="overflow-hidden">
                    <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                      <CardTitle className="text-xl text-blue-800 dark:text-blue-200">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      {category.questions.map((faq, faqIndex) => (
                        <Collapsible key={faqIndex} className="border-b last:border-b-0">
                          <CollapsibleTrigger className={`flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                            <span className={`font-medium text-gray-900 dark:text-white ${isRTL ? 'pl-4' : 'pr-4'}`}>
                              {faq.question}
                            </span>
                            <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform ui-open:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-6 pb-6">
                            <div className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                              {faq.answer}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className={`container mx-auto px-4 text-center ${isRTL ? 'text-right' : 'text-center'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('faq.stillHaveQuestions')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('faq.contactSupport')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('faq.contactButton')}
              </Button>
              <Button size="lg" variant="outline">
                {t('help.contact.email')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
