
import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  company?: string;
}

const Contact = () => {
  const { t } = useSafeI18nWithRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-200 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mb-6">
                  {t('contact.info.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 dark:bg-slate-800 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200">
                        {t('contact.info.address.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        {t('contact.info.address.street')}<br />
                        {t('contact.info.address.city')}<br />
                        {t('contact.info.address.country')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 dark:bg-slate-800 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200">
                        {t('contact.info.phone.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        {t('contact.info.phone.main')}<br />
                        {t('contact.info.phone.support')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 dark:bg-slate-800 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200">
                        {t('contact.info.email.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        {t('contact.info.email.general')}<br />
                        {t('contact.info.email.support')}<br />
                        {t('contact.info.email.business')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 dark:bg-slate-800 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-slate-200">
                        {t('contact.info.hours.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        {t('contact.info.hours.weekdays')}<br />
                        {t('contact.info.hours.weekend')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-4">
                  {t('contact.quickContact.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600 dark:text-slate-400">
                      {t('contact.quickContact.chat')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600 dark:text-slate-400">
                      {t('contact.quickContact.callback')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600 dark:text-slate-400">
                      {t('contact.quickContact.email24h')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mb-6">
                  {t('contact.form.title')}
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          {...register('name', { required: t('contact.form.nameRequired') })}
                          className="pl-10"
                          placeholder={t('contact.form.namePlaceholder')}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          type="email"
                          {...register('email', { 
                            required: t('contact.form.emailRequired'),
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: t('contact.form.emailInvalid')
                            }
                          })}
                          className="pl-10"
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          {...register('phone')}
                          className="pl-10"
                          placeholder={t('contact.form.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          {...register('company')}
                          className="pl-10"
                          placeholder={t('contact.form.companyPlaceholder')}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <Input
                      {...register('subject', { required: t('contact.form.subjectRequired') })}
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      {...register('message', { required: t('contact.form.messageRequired') })}
                      rows={6}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>{t('contact.form.sending')}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>{t('contact.form.send')}</span>
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500 dark:text-slate-400">
                  {t('contact.form.privacy')}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mb-8 text-center">
              {t('contact.faq.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('contact.faq.question1')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('contact.faq.answer1')}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('contact.faq.question2')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('contact.faq.answer2')}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('contact.faq.question3')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('contact.faq.answer3')}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">
                  {t('contact.faq.question4')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  {t('contact.faq.answer4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Contact;
