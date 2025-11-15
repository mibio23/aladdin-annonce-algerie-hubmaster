
import React from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Award, 
  Mail, 
  MapPin, 
  Clock, 
  Briefcase,
  GraduationCap,
  Star
} from "lucide-react";

const Carrieres = () => {
  const { t } = useSafeI18nWithRouter();

  const jobOffers = [
    {
      title: t('carrieres.jobs.fullStackDev.title'),
      department: t('carrieres.jobs.fullStackDev.department'),
      location: t('carrieres.jobs.fullStackDev.location'),
      type: t('carrieres.jobs.fullStackDev.type'),
      experience: t('carrieres.jobs.fullStackDev.experience'),
      description: t('carrieres.jobs.fullStackDev.description'),
      requirements: [
        t('carrieres.jobs.fullStackDev.req1'),
        t('carrieres.jobs.fullStackDev.req2'),
        t('carrieres.jobs.fullStackDev.req3'),
        t('carrieres.jobs.fullStackDev.req4')
      ]
    },
    {
      title: t('carrieres.jobs.productManager.title'),
      department: t('carrieres.jobs.productManager.department'),
      location: t('carrieres.jobs.productManager.location'),
      type: t('carrieres.jobs.productManager.type'),
      experience: t('carrieres.jobs.productManager.experience'),
      description: t('carrieres.jobs.productManager.description'),
      requirements: [
        t('carrieres.jobs.productManager.req1'),
        t('carrieres.jobs.productManager.req2'),
        t('carrieres.jobs.productManager.req3'),
        t('carrieres.jobs.productManager.req4')
      ]
    },
    {
      title: t('carrieres.jobs.salesRep.title'),
      department: t('carrieres.jobs.salesRep.department'),
      location: t('carrieres.jobs.salesRep.location'),
      type: t('carrieres.jobs.salesRep.type'),
      experience: t('carrieres.jobs.salesRep.experience'),
      description: t('carrieres.jobs.salesRep.description'),
      requirements: [
        t('carrieres.jobs.salesRep.req1'),
        t('carrieres.jobs.salesRep.req2'),
        t('carrieres.jobs.salesRep.req3'),
        t('carrieres.jobs.salesRep.req4')
      ]
    },
    {
      title: t('carrieres.jobs.marketingSpecialist.title'),
      department: t('carrieres.jobs.marketingSpecialist.department'),
      location: t('carrieres.jobs.marketingSpecialist.location'),
      type: t('carrieres.jobs.marketingSpecialist.type'),
      experience: t('carrieres.jobs.marketingSpecialist.experience'),
      description: t('carrieres.jobs.marketingSpecialist.description'),
      requirements: [
        t('carrieres.jobs.marketingSpecialist.req1'),
        t('carrieres.jobs.marketingSpecialist.req2'),
        t('carrieres.jobs.marketingSpecialist.req3'),
        t('carrieres.jobs.marketingSpecialist.req4')
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: t('carrieres.benefits.salary.title'),
      description: t('carrieres.benefits.salary.description')
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('carrieres.benefits.health.title'),
      description: t('carrieres.benefits.health.description')
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: t('carrieres.benefits.training.title'),
      description: t('carrieres.benefits.training.description')
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('carrieres.benefits.growth.title'),
      description: t('carrieres.benefits.growth.description')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('carrieres.benefits.team.title'),
      description: t('carrieres.benefits.team.description')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('carrieres.benefits.flexibility.title'),
      description: t('carrieres.benefits.flexibility.description')
    }
  ];

  const values = [
    {
      title: t('carrieres.values.innovation.title'),
      description: t('carrieres.values.innovation.description'),
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
    },
    {
      title: t('carrieres.values.integrity.title'),
      description: t('carrieres.values.integrity.description'),
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
    },
    {
      title: t('carrieres.values.excellence.title'),
      description: t('carrieres.values.excellence.description'),
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    },
    {
      title: t('carrieres.values.collaboration.title'),
      description: t('carrieres.values.collaboration.description'),
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
    }
  ];

  return (
    <>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('carrieres.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('carrieres.subtitle')}
            </p>
          </div>

          {/* Why Join Us */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('carrieres.whyJoin.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('carrieres.whyJoin.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-orange-100 dark:bg-orange-900 rounded-full w-fit">
                      <div className="text-orange-600 dark:text-orange-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('carrieres.ourValues.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('carrieres.ourValues.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Badge className={`mx-auto mb-2 ${value.color}`}>
                      <Star className="h-4 w-4 mr-1" />
                      {value.title}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Job Offers */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('carrieres.openPositions.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('carrieres.openPositions.description')}
              </p>
            </div>
            
            <div className="space-y-6">
              {jobOffers.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        {t('carrieres.applyNow')}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t('carrieres.experience')}: {job.experience}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t('carrieres.requirements')}:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('carrieres.contact.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('carrieres.contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.location.href = 'mailto:careers@aladdin.dz'}
              >
                <Mail className="h-5 w-5 mr-2" />
                {t('carrieres.contact.email')}
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('carrieres.contact.emailAddress')}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Carrieres;
