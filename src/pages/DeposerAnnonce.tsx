import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { Plus, Loader2, FileText, MapPin, DollarSign, Camera, Check, Star, Phone, Mail, Clock } from 'lucide-react';
import GeolocationPicker from '@/components/geolocation/GeolocationPicker';
import ImageUpload from '@/components/ui/ImageUpload';
import { GeolocationCoords } from '@/hooks/useGeolocation';
import { Category } from '@/data/categories';
import { getSubcategoriesByCategoryId, SimpleSubCategory } from '@/data/subcategories';
import { wilayas } from '@/data/wilayaData';

const DeposerAnnonce = () => {
  const { t, language, isRTL } = useSafeI18nWithRouter();
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SimpleSubCategory[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<GeolocationCoords | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category_id: '',
    subcategory_id: '',
    price: '',
    currency: 'DZD',
    condition: 'neuf',
    phone: '',
    email: '',
    wilaya: '',
    location: '',
    expires_at: '',
    is_urgent: false,
    is_featured: false
  });

  // Définir les conditions avec des clés de traduction appropriées
  const getConditions = () => [
    { value: 'neuf', label: t('search.advanced.new') },
    { value: 'tres_bon_etat', label: t('announcements.condition.tresBon') },
    { value: 'bon_etat', label: t('announcements.condition.bon') },
    { value: 'etat_correct', label: t('announcements.condition.correct') },
    { value: 'pour_pieces', label: t('search.advanced.forParts') },
  ];

  const [conditions, setConditions] = useState(getConditions());

  // Mettre à jour les conditions lorsque la langue change
  useEffect(() => {
    setConditions(getConditions());
  }, [language, t]);

  useEffect(() => {
    fetchCategories();
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email || '' }));
    }
  }, [user]);

  const fetchCategories = async () => {
    try {
      const formattedCategories: Category[] = [];
      setCategories(formattedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: t('search.advanced.error'),
        description: t('announcements.noResultsDesc'),
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({ ...prev, category_id: categoryId, subcategory_id: '' }));
    const categorySubcategories: SimpleSubCategory[] = [];
    setSubcategories(categorySubcategories);
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    setFormData(prev => ({ ...prev, subcategory_id: subcategoryId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: t('auth.errors.loginFailed') || "Connexion requise",
        description: t('auth.errors.loginRequired') || "Vous devez être connecté pour publier une annonce",
        variant: 'destructive',
      });
      return;
    }

    // Validation
    if (!formData.title.trim() || !formData.category_id || !formData.price || !formData.wilaya) {
      toast({
        title: t('createAd.errors.createFailed') || "Champs obligatoires",
        description: t('createAd.errors.createFailedDesc') || "Veuillez remplir tous les champs obligatoires",
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const announcementData = {
        user_id: user.id,
        title: formData.title.trim(),
        description: formData.description.trim() || null,
        category_id: formData.category_id,
        price: parseFloat(formData.price) || 0,
        currency: formData.currency,
        condition: formData.condition || null,
        phone: formData.phone.trim() || null,
        email: formData.email.trim() || null,
        wilaya: formData.wilaya,
        location: selectedLocation?.address || formData.location || null,
        images: images,
        expires_at: formData.expires_at ? new Date(formData.expires_at).toISOString() : null,
        is_urgent: formData.is_urgent,
        is_featured: formData.is_featured,
        is_active: true, // Auto-activate announcements
        views_count: 0
      };

      const { data, error } = await supabase
        .from('advertising_banners')
        .insert({
          title: formData.title,
          description: formData.description,
          button_text: 'Contacter',
          link_url: formData.location || '',
          created_by: user.id,
          is_active: true
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      toast({
        title: t('createAd.success.title'),
        description: t('createAd.success.description'),
      });

      // Redirect to the new announcement
      navigate(`/annonce/${data.id}`);
      
    } catch (error) {
      console.error('Error creating announcement:', error);
      toast({
        title: t('createAd.errors.createFailed') || "Erreur",
        description: t('createAd.errors.createFailedDesc') || "Impossible de publier l'annonce. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{t('common.loading')}</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  // Gestionnaire d'erreurs pour capturer les erreurs de rendu
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error in DeposerAnnonce:', event.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Plus className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{t('createAd.title')}</h1>
                  <p className="text-green-100 mt-1">{t('createAd.subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Colonne gauche */}
                  <div className="space-y-6">
                    {/* Titre */}
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-lg font-bold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.titlePlaceholder')} *</span>
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(event) => handleInputChange('title', event.target.value)}
                        placeholder={t('createAd.titlePlaceholder')}
                        required
                        className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    {/* Catégorie */}
                    <div className="space-y-2">
                      <Label htmlFor="category_id" className="text-lg font-bold flex items-center gap-2">
                        <Plus className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('search.advanced.category')} *</span>
                      </Label>
                      <Select value={formData.category_id} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                          <SelectValue placeholder={t('search.advanced.selectCategory')} />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sous-catégorie */}
                    <div className="space-y-2">
                      <Label htmlFor="subcategory_id" className="text-lg font-bold">
                        <span className="text-red-600">{t('search.advanced.subCategory')}</span>
                      </Label>
                      <Select
                        value={formData.subcategory_id}
                        onValueChange={handleSubcategoryChange}
                        disabled={!formData.category_id || subcategories.length === 0}
                      >
                        <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                          <SelectValue placeholder={
                            !formData.category_id
                              ? t('search.advanced.selectCategory')
                              : subcategories.length === 0
                                ? t('announcements.noResultsInSubcategory')
                                : t('search.advanced.selectSubCategory')
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          {subcategories.map((subcategory) => (
                            <SelectItem key={subcategory.id} value={subcategory.id}>
                              {subcategory.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-lg font-bold">
                        <span className="text-red-600">{t('createAd.description')} *</span>
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder={t('createAd.descriptionPlaceholder')}
                        rows={6}
                        required
                        className="text-base rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>

                    {/* Localisation */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-lg font-bold flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span className="text-red-600">{t('createAd.location')}</span>
                        </Label>
                        <GeolocationPicker
                          onLocationSelect={(coords) => {
                            setSelectedLocation(coords);
                            handleInputChange('location', coords.address || `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`);
                          }}
                          selectedLocation={selectedLocation?.address}
                        />
                        {selectedLocation && (
                          <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <p className="text-sm text-green-800">
                              📍 {selectedLocation.address}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="wilaya" className="text-lg font-bold">
                          <span className="text-red-600">{t('createAd.wilaya')} *</span>
                        </Label>
                        <Select value={formData.wilaya} onValueChange={(value) => handleInputChange('wilaya', value)}>
                          <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                            <SelectValue placeholder={t('createAd.selectWilaya')} />
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
                    </div>
                  </div>

                  {/* Colonne droite */}
                  <div className="space-y-6">
                    {/* Prix et devise */}
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.price')}</span>
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 space-y-2">
                          <Input
                            id="price"
                            type="number"
                            value={formData.price}
                            onChange={(e) => handleInputChange('price', e.target.value)}
                            placeholder="0"
                            required
                            min="0"
                            step="0.01"
                            className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                            <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="DZD">DZD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                              <SelectItem value="USD">USD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* État */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600" />
                        <span className="text-red-600">{t('createAd.condition')}</span>
                      </h3>
                      <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                        <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((condition) => (
                            <SelectItem key={condition.value} value={condition.value}>
                              {condition.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Images */}
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Camera className="h-5 w-5 text-purple-600" />
                        <span className="text-red-600">{t('createAd.images')}</span>
                      </h3>
                      <ImageUpload
                        onImagesChange={setImages}
                        maxImages={6}
                        bucket="announcement-images"
                        initialImages={images}
                      />
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.phone')}</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder={t('createAd.phonePlaceholder')}
                              className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
                            <Mail className="h-5 w-5 text-green-600" />
                            <span className="text-red-600">{t('createAd.email')}</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder=""
                              className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="bg-amber-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-amber-600" />
                        <span className="text-red-600">{t('createAd.urgent')}</span>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="is_urgent"
                              checked={formData.is_urgent}
                              onCheckedChange={(checked) => handleInputChange('is_urgent', checked as boolean)}
                              className="h-5 w-5"
                            />
                            <div>
                              <Label htmlFor="is_urgent" className="text-lg font-bold cursor-pointer">
                                <span className="text-black">{t('createAd.urgent')}</span>
                              </Label>
                              <p className="text-sm text-gray-500">
                                <Badge variant="destructive" className="text-xs mt-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {t('createAd.urgentBadge')}
                                </Badge>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="expires_at" className="text-lg font-bold flex items-center gap-2">
                            <Clock className="h-5 w-5 text-amber-600" />
                            <span className="text-red-600">{t('createAd.expiresAt')} (optionnel)</span>
                          </Label>
                          <Input
                            id="expires_at"
                            type="date"
                            value={formData.expires_at}
                            onChange={(e) => handleInputChange('expires_at', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="text-base h-12 rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <Alert className="bg-green-50 border-green-200 text-green-800">
                    <Check className="h-4 w-4" />
                    <AlertDescription>
                      {t('createAd.termsNotice')}
                    </AlertDescription>
                  </Alert>

                  <Button type="submit" className="w-full h-14 text-lg font-medium rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all mt-6" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {t('createAd.publish')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeposerAnnonce;