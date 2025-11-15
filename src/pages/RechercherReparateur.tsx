import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Info, Search, MapPin, Calendar, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { newCategoriesGroup4 } from "@/data/categories/newCategoryGroup4";
import { useNavigate } from "react-router-dom";
import AnnouncementCard from "@/components/announcements/AnnouncementCard";
import { useAnnouncements } from "@/hooks/useAnnouncements";

interface SearchRequest {
  title: string;
  description: string;
  category_id: string;
  category_name: string;
  budget_min?: number;
  budget_max?: number;
  wilaya: string;
  urgency: 'normal' | 'urgent' | 'very_urgent';
  expires_in_days: number;
}

const RechercherReparateur = () => {
  const { user } = useAuth();
  const { t } = useSafeI18nWithRouter();
  const navigate = useNavigate();
  const { announcements, fetchAnnouncements } = useAnnouncements();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SearchRequest>({
    title: '',
    description: '',
    category_id: '',
    category_name: '',
    budget_min: undefined,
    budget_max: undefined,
    wilaya: '',
    urgency: 'normal',
    expires_in_days: 7
  });

  const metierCategories = newCategoriesGroup4[0]?.subcategories || [];

  // Mapping des IDs de catégories vers leurs clés de traduction
  const getCategoryTranslationKey = (categoryId: string): string => {
    const keyMap: Record<string, string> = {
      'plombier': 'menu.professions.plumber',
      'electricien': 'menu.professions.electrician',
      'reparateur-electromenager': 'menu.professions.applianceRepair',
      'reparateur-informatique': 'menu.professions.computerRepair',
      'mecanicien-auto': 'menu.professions.autoMechanic',
      'mecanicien-moto': 'menu.professions.motoMechanic',
      'menuisier': 'menu.professions.carpenter',
      'peintre': 'menu.professions.painter',
      'maconnerie': 'menu.professions.masonry',
      'climatisation': 'menu.professions.airConditioning',
      'serrurier': 'menu.professions.locksmith',
      'jardinier': 'menu.professions.gardener',
      'reparateur-telephone': 'menu.professions.phoneRepair',
      'cuisinier': 'menu.professions.cook',
      'couturier': 'menu.professions.tailor',
      'soudeur': 'menu.professions.welder',
      'metallurgiste': 'menu.professions.metallurgist',
      'coach-sportif': 'menu.professions.sportsCoach',
      'chauffeur': 'menu.professions.driver',
      'plongeur-maritime': 'menu.professions.maritimeDiver',
      'organisateur-evenements': 'menu.professions.eventOrganizer',
      'autre': 'menu.professions.other'
    };
    return keyMap[categoryId] || categoryId;
  };

  useEffect(() => {
    // Charger les annonces des catégories "Métier & Réparateur" et "Services Professionnels"
    fetchAnnouncements({
      limit: 6
    });
  }, [fetchAnnouncements]);

  const handleInputChange = (field: keyof SearchRequest, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    const category = metierCategories.find(cat => cat.id === categoryId);
    setFormData(prev => ({
      ...prev,
      category_id: categoryId,
      category_name: category?.name || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error(t('auth.loginRequired'));
      navigate('/connexion');
      return;
    }

    if (!formData.title.trim() || !formData.category_id || !formData.wilaya) {
      toast.error(t('form.fillRequiredFields'));
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('advertising_banners')
        .insert({
          title: formData.title,
          description: formData.description,
          button_text: 'Contacter',
          created_by: user.id,
          is_active: true,
          end_at: new Date(Date.now() + formData.expires_in_days * 24 * 60 * 60 * 1000).toISOString()
        });

      if (error) throw error;

      toast.success(t('repairerSearch.requestPublished'));
      
      // Réinitialiser le formulaire
      setFormData({
        title: '',
        description: '',
        category_id: '',
        category_name: '',
        budget_min: undefined,
        budget_max: undefined,
        wilaya: '',
        urgency: 'normal',
        expires_in_days: 7
      });

    } catch (error) {
      console.error('Error creating search request:', error);
      toast.error(t('repairerSearch.errorCreating'));
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'very_urgent': return 'destructive';
      case 'urgent': return 'outline';
      default: return 'secondary';
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'very_urgent': return t('repairerSearch.veryUrgent');
      case 'urgent': return t('repairerSearch.urgent');
      default: return t('repairerSearch.normal');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">
            {t('repairerSearch.title')}
          </h1>
          <p className="text-lg text-muted-foreground text-center">
            {t('repairerSearch.subtitle')}
          </p>
        </div>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>{t('repairerSearch.howItWorksTitle')}</AlertTitle>
          <AlertDescription>{t('repairerSearch.howItWorksDesc')}</AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              {t('repairerSearch.formTitle')}
            </CardTitle>
            <CardDescription>{t('repairerSearch.formDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations sur le service recherché */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('repairerSearch.serviceInfo')}</h3>
                
                <div>
                  <Label htmlFor="title">{t('repairerSearch.serviceTitle')} *</Label>
                  <Input
                    id="title"
                    placeholder={t('repairerSearch.serviceTitlePlaceholder')}
                    value={formData.title}
                    onChange={(event) => handleInputChange('title', event.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">{t('repairerSearch.profession')} *</Label>
                  <Select value={formData.category_id} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('repairerSearch.selectProfession')} />
                    </SelectTrigger>
                    <SelectContent>
                      {metierCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {t(getCategoryTranslationKey(category.id))}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">{t('repairerSearch.description')}</Label>
                  <Textarea
                    id="description"
                    placeholder={t('repairerSearch.descriptionPlaceholder')}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('repairerSearch.budget')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget_min">{t('repairerSearch.budgetMin')}</Label>
                    <Input
                      id="budget_min"
                      type="number"
                      placeholder="0"
                      value={formData.budget_min || ''}
                      onChange={(e) => handleInputChange('budget_min', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget_max">{t('repairerSearch.budgetMax')}</Label>
                    <Input
                      id="budget_max"
                      type="number"
                      placeholder="10000"
                      value={formData.budget_max || ''}
                      onChange={(e) => handleInputChange('budget_max', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>
              </div>

              {/* Localisation */}
              <div>
                <Label htmlFor="wilaya">{t('repairerSearch.location')} *</Label>
                <Input
                  id="wilaya"
                  placeholder={t('repairerSearch.locationPlaceholder')}
                  value={formData.wilaya}
                  onChange={(e) => handleInputChange('wilaya', e.target.value)}
                  required
                />
              </div>

              {/* Urgence et durée */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('repairerSearch.urgencyAndDuration')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="urgency">{t('repairerSearch.urgency')}</Label>
                    <Select 
                      value={formData.urgency} 
                      onValueChange={(value: 'normal' | 'urgent' | 'very_urgent') => handleInputChange('urgency', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">{getUrgencyLabel('normal')}</SelectItem>
                        <SelectItem value="urgent">{getUrgencyLabel('urgent')}</SelectItem>
                        <SelectItem value="very_urgent">{getUrgencyLabel('very_urgent')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Badge variant={getUrgencyColor(formData.urgency)} className="mt-2">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {getUrgencyLabel(formData.urgency)}
                    </Badge>
                  </div>
                  
                  <div>
                    <Label htmlFor="expires_in_days">{t('repairerSearch.validity')}</Label>
                    <Select 
                      value={formData.expires_in_days.toString()} 
                      onValueChange={(value) => handleInputChange('expires_in_days', parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">{t('repairerSearch.validityDays').replace('{days}', '7')}</SelectItem>
                        <SelectItem value="14">{t('repairerSearch.validityDays').replace('{days}', '14')}</SelectItem>
                        <SelectItem value="30">{t('repairerSearch.validityDays').replace('{days}', '30')}</SelectItem>
                        <SelectItem value="60">{t('repairerSearch.validityDays').replace('{days}', '60')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {t('repairerSearch.publishing')}
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    {t('repairerSearch.publishRequest')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Section des annonces similaires */}
        <div className="mb-8">
          <div className="mb-6">
            <div className="flex items-center mb-3">
              {/* Logo Aladdin */}
              <div className="mr-3">
                <img 
                  src="/lovable-uploads/4cf4a1ea-082d-4d7d-8b1b-01eb5e04557a.png" 
                  alt="Aladdin Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              {/* Trait vertical */}
              <div className="w-1 h-12 bg-red-600 mr-3"></div>
              
              {/* Titre */}
              <h2 className="text-4xl font-bold text-red-600">
                {t('repairerSearch.similarAnnouncements')}
              </h2>
            </div>
            
            {/* Sous-titre */}
            <p className="text-black dark:text-white font-bold text-sm leading-relaxed ml-14">
              {t('repairerSearch.similarAnnouncementsDesc')}
            </p>
          </div>
          
          {announcements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.slice(0, 6).map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">{t('repairerSearch.noSimilarAnnouncements')}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default RechercherReparateur;