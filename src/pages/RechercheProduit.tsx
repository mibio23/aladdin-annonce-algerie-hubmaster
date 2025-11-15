import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Calendar, Tag, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { wilayas } from '@/data/wilayaData';

interface SearchRequest {
  title: string;
  description: string;
  category: string;
  budget_min: number;
  budget_max: number;
  wilaya: string;
  urgency: 'low' | 'medium' | 'high';
  expires_in_days: number;
}

const RechercheProduit: React.FC = () => {
  const { user } = useAuth();
  const { t } = useSafeI18nWithRouter();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SearchRequest>({
    title: '',
    description: '',
    category: '',
    budget_min: 0,
    budget_max: 0,
    wilaya: '',
    urgency: 'medium',
    expires_in_days: 30
  });


  const categories = [
    'Électronique', 'Mode & Vêtements', 'Maison & Jardin', 'Automobile', 'Immobilier',
    'Emploi & Services', 'Loisirs & Divertissement', 'Animaux', 'Équipement professionnel',
    'Santé & Beauté', 'Sport & Fitness', 'Livres & Éducation', 'Alimentation', 'Autres'
  ];

  const handleInputChange = (field: keyof SearchRequest, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error(t('auth.loginRequired'));
      navigate('/connexion');
      return;
    }

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error(t('searchRequest.fillRequired'));
      return;
    }

    setLoading(true);
    try {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + formData.expires_in_days);

      const { error } = await supabase
        .from('advertising_banners')
        .insert([{
          created_by: user.id,
          title: `RECHERCHE: ${formData.title}`,
          description: formData.description,
          button_text: 'Contacter',
          is_active: true,
          end_at: expiresAt.toISOString()
        }]);

      if (error) throw error;

      toast.success(t('searchRequest.created'));
      navigate('/mes-annonces');
    } catch (error) {
      console.error('Error creating search request:', error);
      toast.error(t('searchRequest.error'));
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'high': return t('searchRequest.urgentHigh');
      case 'medium': return t('searchRequest.urgentMedium');
      case 'low': return t('searchRequest.urgentLow');
      default: return t('searchRequest.urgentMedium');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">
              {t('searchRequest.title')}
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('searchRequest.subtitle')}
          </p>
        </div>

        {/* Info Alert */}
        <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-medium mb-1">
                  {t('searchRequest.howItWorks')}
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• {t('searchRequest.step1')}</li>
                  <li>• {t('searchRequest.step2')}</li>
                  <li>• {t('searchRequest.step3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Tag className="h-5 w-5" />
                <span>{t('searchRequest.productInfo')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('searchRequest.productTitle')} *
                </label>
                <Input
                  placeholder={t('searchRequest.titlePlaceholder')}
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('searchRequest.category')}
                </label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => handleInputChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('searchRequest.selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('searchRequest.description')} *
                </label>
                <Textarea
                  placeholder={t('searchRequest.descriptionPlaceholder')}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>{t('searchRequest.budget')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t('searchRequest.budgetMin')}
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.budget_min || ''}
                    onChange={(e) => handleInputChange('budget_min', parseInt(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t('searchRequest.budgetMax')}
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.budget_max || ''}
                    onChange={(e) => handleInputChange('budget_max', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  {t('searchRequest.wilaya')}
                </label>
                <Select 
                  value={formData.wilaya} 
                  onValueChange={(value) => handleInputChange('wilaya', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('searchRequest.selectWilaya')} />
                  </SelectTrigger>
                  <SelectContent>
                    {wilayas.map((wilaya) => (
                      <SelectItem key={wilaya.code} value={wilaya.name}>
                        {wilaya.code.toString().padStart(2, '0')} - {wilaya.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{t('searchRequest.urgencyAndDuration')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('searchRequest.urgency')}
                </label>
                <div className="flex space-x-2">
                  {(['low', 'medium', 'high'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleInputChange('urgency', level)}
                      className="flex-1"
                    >
                      <Badge 
                        variant={formData.urgency === level ? getUrgencyColor(level) : 'outline'}
                        className="w-full py-2 cursor-pointer hover:bg-opacity-80"
                      >
                        {getUrgencyLabel(level)}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('searchRequest.validityPeriod')}
                </label>
                <Select 
                  value={formData.expires_in_days.toString()} 
                  onValueChange={(value) => handleInputChange('expires_in_days', parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">{t('searchRequest.days7')}</SelectItem>
                    <SelectItem value="15">{t('searchRequest.days15')}</SelectItem>
                    <SelectItem value="30">{t('searchRequest.days30')}</SelectItem>
                    <SelectItem value="60">{t('searchRequest.days60')}</SelectItem>
                    <SelectItem value="90">{t('searchRequest.days90')}</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('searchRequest.validityHelp')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={loading}
              className="px-8"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  {t('common.loading')}
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  {t('searchRequest.publish')}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RechercheProduit;