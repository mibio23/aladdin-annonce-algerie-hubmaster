
import React from "react";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Actualites = () => {
  const { t } = useSafeI18nWithRouter();

  // Données d'exemple pour les actualités
  const newsArticles = [
    {
      id: 1,
      title: "Nouvelle fonctionnalité : Recherche par IA",
      excerpt: "Découvrez notre nouveau système de recherche intelligent qui vous aide à trouver exactement ce que vous cherchez.",
      content: "Nous sommes ravis de vous présenter notre nouvelle fonctionnalité de recherche par intelligence artificielle...",
      publishedDate: "2024-01-15",
      author: "Équipe Aladdin",
      category: "Technologie",
      tags: ["IA", "Recherche", "Innovation"],
      featured: true,
      imageUrl: "/placeholder-news-1.jpg"
    },
    {
      id: 2,
      title: "Expansion d'Aladdin dans 5 nouvelles wilayas",
      excerpt: "Nous étendons nos services à Oran, Constantine, Batna, Sétif et Tlemcen pour mieux vous servir.",
      content: "Dans notre mission de connecter tous les Algériens, nous sommes fiers d'annoncer...",
      publishedDate: "2024-01-10",
      author: "Direction Aladdin",
      category: "Expansion",
      tags: ["Croissance", "Nouvelles villes", "Services"],
      featured: false,
      imageUrl: "/placeholder-news-2.jpg"
    },
    {
      id: 3,
      title: "Conseils de sécurité pour les transactions en ligne",
      excerpt: "Apprenez les meilleures pratiques pour effectuer des transactions sécurisées sur notre plateforme.",
      content: "La sécurité de nos utilisateurs est notre priorité absolue. Voici nos recommandations...",
      publishedDate: "2024-01-05",
      author: "Équipe Sécurité",
      category: "Sécurité",
      tags: ["Sécurité", "Conseils", "Transactions"],
      featured: false,
      imageUrl: "/placeholder-news-3.jpg"
    }
  ];

  const categories = ["Toutes", "Technologie", "Expansion", "Sécurité", "Mise à jour"];

  return (
    <>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('actualites.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('actualites.subtitle')}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t('actualites.searchNews')}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-orange-100 hover:text-orange-800"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map((article) => (
            <Card key={article.id} className="mb-8 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500">Image de l'article</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                      {t('actualites.featured')}
                    </Badge>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">{article.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t('actualites.publishedOn')} {new Date(article.publishedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {t('actualites.by')} {article.author}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <div className="flex gap-1">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    {t('actualites.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Regular Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.publishedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-3 w-3 text-gray-400" />
                    <div className="flex gap-1 flex-wrap">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    {t('actualites.readMore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              {t('actualites.loadMore')}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Actualites;
