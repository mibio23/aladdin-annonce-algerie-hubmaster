import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Removed unused Card imports
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Plus, MapPin, AlertCircle, Loader2, Camera, Star, Phone, Mail, Check, Clock, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAutoSave } from '@/hooks/useAutoSave';
import { Category } from '@/data/categories';
import { SimpleSubCategory } from '@/data/subcategories';
import { wilayas } from '@/data/wilayaData';

const CreateAnnouncementPage: React.FC = () => {
  const { t, language, isRTL } = useSafeI18nWithRouter();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'DZD',
    condition: '',
    location: '',
    wilaya: '',
    phones: [''],
    email: '',
    category_id: '',
    subcategory_id: '',
    images: [] as File[],
    is_urgent: false,
    expires_at: '',
    
    // Nouveaux champs - Détails du produit
    brand: '',
    model: '',
    color: '',
    dimensions: '',
    weight: '',
    purchaseYear: '',
    
    // Nouveaux champs - Historique et état
    hasInvoice: false,
    warrantyDuration: '',
    includedAccessories: [] as string[],
    sellingReason: '',
    
    // Nouveaux champs - Prix et négociation
    isNegotiable: false,
    cashDiscount: '',
    exchangePossible: false,
    originalPrice: '',
    
    // Nouveaux champs - Logistique et livraison
    deliveryAvailable: false,
    deliveryAreas: [] as string[],
    deliveryFees: '',
    deliveryLocationName: '',
    packagingInfo: '',
    availabilityDate: '',
    
    // Nouveaux champs - Visuels et documentation
    productVideos: [] as string[],
    productVideoFiles: [] as File[],
    detailPhotos: [] as File[],
    documentation: [] as string[]
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SimpleSubCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [_createdAnnouncementId, _setCreatedAnnouncementId] = useState<string | null>(null);
  
  // Fonctionnalités techniques communes
  const { loadDraft, clearDraft } = useAutoSave(formData, 'announcement-draft');
  const [_formIsValid, _setFormIsValid] = useState(false);
  
  // Définir les conditions avec des clés de traduction appropriées
  const getConditions = () => [
    { value: 'new', label: t('search.advanced.new') },
    { value: 'like_new', label: t('announcements.condition.likeNew') || 'Comme neuf' },
    { value: 'good', label: t('announcements.condition.bon') },
    { value: 'fair', label: t('announcements.condition.correct') },
    { value: 'poor', label: t('announcements.condition.poor') || 'À rénover' },
  ];

  const [conditions, setConditions] = useState(getConditions());

  // Mettre à jour les conditions lorsque la langue change
  useEffect(() => {
    setConditions(getConditions());
  }, [language, t]);
  
  // Règles de validation
  const _validationRules = [
    {
      field: 'title',
      validate: (value: string) => value.trim().length >= 3,
      message: t('createAd.validation.titleMinLength') || 'Le titre doit contenir au moins 3 caractères'
    },
    {
      field: 'description',
      validate: (value: string) => value.trim().length >= 10,
      message: t('createAd.validation.descriptionMinLength') || 'La description doit contenir au moins 10 caractères'
    },
    {
      field: 'category_id',
      validate: (value: string) => value.trim().length > 0,
      message: t('createAd.validation.categoryRequired') || 'Veuillez sélectionner une catégorie'
    }
  ];

  useEffect(() => {
    if (!user) {
      navigate('/connexion');
      return;
    }
    fetchCategories();
    
    const load = async () => {
      const draft = await loadDraft();
      if (draft) {
        setFormData(prev => ({
          ...prev,
          ...draft,
          phones: Array.isArray((draft as any).phones) ? (draft as any).phones : (prev.phones ?? ['']),
          productVideos: Array.isArray((draft as any).productVideos) ? (draft as any).productVideos : (prev.productVideos ?? [])
        }));
      }
    };
    load();
  }, [user, navigate, loadDraft]);

  const fetchCategories = async () => {
    try {
      const formattedCategories: Category[] = [];
      setCategories(formattedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: t('search.advanced.error'),
        description: t('announcements.noResultsDesc'),
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Gérer les champs de type tableau
    if (name === 'includedAccessories' || name === 'deliveryAreas' || name === 'documentation') {
      setFormData(prev => ({
        ...prev,
        [name]: value.split(',').map(item => item.trim()).filter(item => item !== '')
      }));
    } else if (name.startsWith('phones[')) {
      const match = name.match(/phones\[(\d+)\]/);
      if (match) {
        const index = parseInt(match[1], 10);
        setFormData(prev => {
          const next = [...prev.phones];
          next[index] = value;
          return { ...prev, phones: next };
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const _handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({ ...prev, category_id: categoryId, subcategory_id: '' }));
    const categorySubcategories: SimpleSubCategory[] = [];
    setSubcategories(categorySubcategories);
  };

  const _handleSubcategoryChange = (subcategoryId: string) => {
    setFormData(prev => ({ ...prev, subcategory_id: subcategoryId }));
  };

  // Gestion des changements dans les champs imbriqués
  const _handleNestedChange = (category: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...(prev as any)[category],
        [field]: value
      }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setFormData(prev => ({ 
        ...prev, 
        images: [...prev.images, ...newImages].slice(0, 8) // Max 8 images
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newVideos = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        productVideoFiles: [...prev.productVideoFiles, ...newVideos].slice(0, 2)
      }));
    }
  };

  const removeVideoFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productVideoFiles: prev.productVideoFiles.filter((_, i) => i !== index)
    }));
  };

  const uploadImages = async (images: File[]): Promise<string[]> => {
    const imageUrls: string[] = [];

    for (const image of images) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user!.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('announcement-images')
        .upload(filePath, image);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('announcement-images')
        .getPublicUrl(filePath);

      imageUrls.push(publicUrl);
    }

    return imageUrls;
  };

  const uploadVideos = async (videos: File[]): Promise<string[]> => {
    const videoUrls: string[] = [];

    for (const video of videos) {
      const fileExt = video.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user!.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('announcement-images')
        .upload(filePath, video);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('announcement-images')
        .getPublicUrl(filePath);

      videoUrls.push(publicUrl);
    }

    return videoUrls;
  };

  const addPhoneField = () => {
    setFormData(prev => {
      const phones = Array.isArray(prev.phones) ? prev.phones : [''];
      if (phones.length >= 3) return { ...prev, phones };
      return { ...prev, phones: [...phones, ''] };
    });
  };

  const removePhoneField = (index: number) => {
    setFormData(prev => {
      const phones = Array.isArray(prev.phones) ? prev.phones : [''];
      const next = phones.filter((_, i) => i !== index);
      return { ...prev, phones: next.length > 0 ? next : [''] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: t('auth.errors.loginFailed') || "Erreur",
        description: t('auth.errors.loginRequired') || "Vous devez être connecté",
        variant: "destructive"
      });
      return;
    }

    // Validation du premier numéro de téléphone
    if (!formData.phones[0] || formData.phones[0].trim() === '') {
      toast({
        title: t('createAd.phoneRequired') || "Numéro de téléphone requis",
        description: t('createAd.phoneRequiredDesc') || "Veuillez saisir au moins un numéro de téléphone",
        variant: "destructive"
      });
      return;
    }

    if (!formData.title || !formData.description || !formData.category_id) {
      toast({
        title: t('createAd.errors.createFailed') || "Erreur",
        description: t('createAd.errors.createFailedDesc') || "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);

      // Upload images
      const imageUrls = formData.images.length > 0 ? await uploadImages(formData.images) : [];

      // Upload detail photos
      const detailPhotoUrls = formData.detailPhotos.length > 0
        ? await uploadImages(formData.detailPhotos)
        : [];

      // Upload videos
      const videoUrls = formData.productVideoFiles.length > 0
        ? await uploadVideos(formData.productVideoFiles)
        : [];

      // Create announcement
      const { data, error } = await supabase
        .from('announcements')
        .insert({
          title: formData.title,
          description: formData.description,
          price: formData.price ? parseFloat(formData.price) : null,
          currency: formData.currency,
          condition: formData.condition,
          category_id: formData.category_id,
          subcategory_id: formData.subcategory_id || null,
          user_id: user.id,
          wilaya: formData.wilaya,
          commune: formData.location,
          address: formData.location,
          phone_number: formData.phones.filter(p => p && p.trim()).join(', '),
          email: formData.email,
          images: imageUrls,
          is_urgent: formData.is_urgent,
          is_negotiable: formData.isNegotiable,
          expires_at: formData.expires_at ? new Date(formData.expires_at).toISOString() : null,
          
          // Nouveaux champs - Détails du produit
          brand: formData.brand,
          model: formData.model,
          color: formData.color,
          dimensions: formData.dimensions,
          weight: formData.weight,
          purchase_year: formData.purchaseYear ? parseInt(formData.purchaseYear) : null,
          
          // Nouveaux champs - Historique et état
          has_invoice: formData.hasInvoice,
          warranty_duration: formData.warrantyDuration,
          included_accessories: formData.includedAccessories,
          selling_reason: formData.sellingReason,
          
          // Nouveaux champs - Prix et négociation
          cash_discount: formData.cashDiscount ? parseFloat(formData.cashDiscount) : null,
          exchange_possible: formData.exchangePossible,
          original_price: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          
          // Nouveaux champs - Logistique et livraison
          delivery_available: formData.deliveryAvailable,
          delivery_areas: formData.deliveryAreas,
          delivery_fees: formData.deliveryFees ? parseFloat(formData.deliveryFees) : null,
          delivery_location_name: formData.deliveryLocationName,
          packaging_info: formData.packagingInfo,
          availability_date: formData.availabilityDate ? new Date(formData.availabilityDate).toISOString() : null,
          
          // Nouveaux champs - Visuels et documentation
          product_video: videoUrls.join(', '),
          detail_photos: detailPhotoUrls,
          documentation: formData.documentation
        })
        .select()
        .single();

      if (error) throw error;

      _setCreatedAnnouncementId(data.id);

      toast({
        title: t('createAd.success.title'),
        description: t('createAd.success.description'),
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        currency: 'DZD',
        condition: '',
        location: '',
        wilaya: '',
        phones: [''],
        email: '',
        category_id: '',
        subcategory_id: '',
        images: [],
        is_urgent: false,
        expires_at: '',
        
        // Nouveaux champs
        brand: '',
        model: '',
        color: '',
        dimensions: '',
        weight: '',
        purchaseYear: '',
        hasInvoice: false,
        warrantyDuration: '',
        includedAccessories: [],
        sellingReason: '',
        isNegotiable: false,
        cashDiscount: '',
        exchangePossible: false,
        originalPrice: '',
        deliveryAvailable: false,
        deliveryAreas: [],
        deliveryFees: '',
        deliveryLocationName: '',
        packagingInfo: '',
        availabilityDate: '',
        productVideos: [],
        productVideoFiles: [],
        detailPhotos: [],
        documentation: []
      });

    } catch (error) {
      console.error('Error creating announcement:', error);
      toast({
        title: t('createAd.errors.createFailed') || "Erreur",
        description: error instanceof Error ? error.message : t('createAd.errors.createFailedDesc'),
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null; // Will redirect to auth
  }

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
              <div className="bg-green-50 border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  {t('createAd.tips.title') || 'Conseils pour une annonce réussie :'}
                </h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• {t('createAd.tips.clearTitle') || 'Utilisez un titre clair et précis'}</li>
                  <li>• {t('createAd.tips.qualityPhotos') || 'Ajoutez plusieurs photos de qualité'}</li>
                  <li>• {t('createAd.tips.honestCondition') || 'Décrivez l\'état du produit honnêtement'}</li>
                  <li>• {t('createAd.tips.fairPrice') || 'Indiquez un prix juste et réaliste'}</li>
                  <li>• {t('createAd.tips.preciseLocation') || 'Précisez votre localisation'}</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Colonne gauche */}
                  <div className="space-y-6">
                    {/* Titre */}
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-lg font-bold flex items-center gap-2">
                        <Plus className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.title')}</span>
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder={t('createAd.titlePlaceholder')}
                        required
                        className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-lg font-bold">
                        <span className="text-red-600">{t('createAd.description')}</span>
                      </Label>
                      <div className="text-sm text-muted-foreground mb-1">
                        {formData.description.length}/2000 {t('createAd.characters')}
                      </div>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder={t('createAd.descriptionPlaceholder')}
                        rows={6}
                        required
                        className="text-base rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>

                    {/* Catégorie */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="category_id" className="text-lg font-bold">
                          <span className="text-red-600">{t('createAd.category')}</span>
                        </Label>
                        <Select onValueChange={(value) => {
                          handleSelectChange('category_id', value);
                          _handleCategoryChange(value);
                        }} value={formData.category_id}>
                          <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                            <SelectValue placeholder={t('createAd.selectCategory')} />
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
                      
                      {subcategories.length > 0 && (
                        <div className="space-y-2">
                          <Label htmlFor="subcategory_id" className="text-lg font-bold">
                            {t('createAd.subcategory')}
                          </Label>
                          <Select onValueChange={(value) => handleSelectChange('subcategory_id', value)} value={formData.subcategory_id}>
                            <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500">
                              <SelectValue placeholder={t('createAd.selectSubcategory')} />
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
                      )}
                    </div>

                    {/* Location */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="wilaya" className="text-lg font-bold flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span className="text-red-600">{t('createAd.wilaya')}</span>
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange('wilaya', value)} value={formData.wilaya}>
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
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-lg font-bold">
                          <span className="text-red-600">{t('createAd.locationPlaceholder') || 'Commune/Quartier'}</span>
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder={t('createAd.locationPlaceholder') || 'Centre-ville'}
                          className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite */}
                  <div className="space-y-6">
                    {/* Price */}
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.price')}</span>
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 space-y-2">
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="0"
                            className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Select onValueChange={(value) => handleSelectChange('currency', value)} defaultValue="DZD">
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

                    {/* Condition */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600" />
                        <span className="text-red-600">{t('createAd.condition')}</span>
                      </h3>
                      <Select onValueChange={(value) => handleSelectChange('condition', value)}>
                        <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder={t('createAd.selectCondition') || 'Sélectionner l\'état'} />
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
                        <span className="text-red-600">{t('createAd.images')} (max 8)</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-gray-400" />
                            <span className="mt-2 block text-sm text-gray-600">
                              {t('createAd.uploadImages')}
                            </span>
                          </div>
                        </label>
                      </div>
                      
                      {formData.images.length > 0 && (
                        <div className="mt-4 grid grid-cols-4 gap-4">
                          {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-red-600">{t('createAd.phone')}</span>
                        <span className="text-red-600 text-sm">*</span>
                      </h3>
                      
                      <div className="space-y-4">
                        {formData.phones.map((phone, index) => (
                          <div className="space-y-2" key={index}>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                id={`phones-${index}`}
                                name={`phones[${index}]`}
                                value={phone}
                                onChange={handleInputChange}
                                placeholder={t('createAd.phonePlaceholder')}
                                className={`pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500 ${index === 0 ? 'border-red-300' : ''}`}
                                required={index === 0}
                              />
                              {formData.phones.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removePhoneField(index)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                  aria-label="remove phone"
                                >
                                  ×
                                </button>
                              )}
                            </div>
                            {index === 0 && (
                              <p className="text-xs text-red-600">{t('createAd.phoneRequired') || 'Numéro de téléphone requis'}</p>
                            )}
                          </div>
                        ))}
                        {formData.phones.length < 3 && (
                          <Button type="button" variant="outline" onClick={addPhoneField} className="h-10">
                            + {t('createAd.phone')}
                          </Button>
                        )}
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
                            <Mail className="h-5 w-5 text-green-600" />
                            <span className="text-red-600">{t('createAd.email')}</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder=""
                              className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vidéos */}
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        <span className="text-red-600">{t('createAd.videos') || 'Vidéos'} (max 2)</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          multiple
                          accept="video/*"
                          onChange={handleVideoUpload}
                          className="hidden"
                          id="video-upload"
                        />
                        <label
                          htmlFor="video-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-gray-400" />
                            <span className="mt-2 block text-sm text-gray-600">
                              {t('createAd.addVideo') || 'Ajouter une vidéo'}
                            </span>
                          </div>
                        </label>
                      </div>
                      {formData.productVideoFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {formData.productVideoFiles.map((video, index) => (
                            <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                              <div className="text-sm text-gray-700 truncate max-w-[70%]">{video.name}</div>
                              <button
                                type="button"
                                onClick={() => removeVideoFile(index)}
                                className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
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
                              onCheckedChange={(checked) =>
                                setFormData(prev => ({ ...prev, is_urgent: !!checked }))
                              }
                              className="h-5 w-5"
                            />
                            <div>
                              <Label htmlFor="is_urgent" className="text-lg font-bold cursor-pointer">
                                <span className="text-black">{t('createAd.urgent')}</span>
                              </Label>
                              <p className="text-sm text-gray-500">
                                <Badge variant="destructive" className="text-xs mt-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Urgent
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
                            name="expires_at"
                            type="date"
                            value={formData.expires_at}
                            onChange={handleInputChange}
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

                  <div className="flex gap-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        clearDraft();
                        navigate('/');
                      }}
                      className="flex-1 h-12 rounded-lg"
                    >
                      {t('common.cancel') || 'Annuler'}
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="flex-1 h-14 text-lg font-medium rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all"
                    >
                      {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {t('createAd.publish')}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Section détails du produit */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Plus className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{t('createAd.productDetails') || 'Détails du produit'}</h2>
                  <p className="text-blue-100 mt-1">Informations supplémentaires sur votre produit</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="brand" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.brand') || 'Marque'}</span>
                    </Label>
                    <Input
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder={t('createAd.brandPlaceholder') || 'Ex: Apple, Samsung, Sony...'}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.model') || 'Modèle'}</span>
                    </Label>
                    <Input
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      placeholder={t('createAd.modelPlaceholder') || 'Ex: iPhone 15 Pro, Galaxy S24...'}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.color') || 'Couleur'}</span>
                    </Label>
                    <Input
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder={t('createAd.colorPlaceholder') || 'Ex: Noir, Argent, Bleu...'}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="dimensions" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.dimensions') || 'Dimensions'}</span>
                    </Label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder={t('createAd.dimensionsPlaceholder') || 'Ex: 15 x 10 x 5 cm'}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.weight') || 'Poids'}</span>
                    </Label>
                    <Input
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder={t('createAd.weightPlaceholder') || 'Ex: 500g'}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purchaseYear" className="text-lg font-bold">
                      <span className="text-red-600">{t('createAd.purchaseYear') || 'Année d\'achat/fabrication'}</span>
                    </Label>
                    <Input
                      id="purchaseYear"
                      name="purchaseYear"
                      type="number"
                      value={formData.purchaseYear}
                      onChange={handleInputChange}
                      placeholder={t('createAd.purchaseYearPlaceholder') || 'Ex: 2023'}
                      min="1900"
                      max={new Date().getFullYear()}
                      className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncementPage;