import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Upload, Plus, MapPin, Phone, Store, AlertCircle, Loader2, Camera, Star, CreditCard, Globe, Clock, Video } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { wilayas } from '@/data/wilayaData';
import { SimpleSubCategory } from '@/data/subcategories';
import { safeStringify } from '@/utils/safeStringify';

const CreateShopPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { getLocalizedPath } = useLanguageNavigation();
  const { t, isRTL } = useSafeI18nWithRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    wilaya: '',
    shopStatus: '',
    phoneNumbers: [''],
    logoUrl: '',
    productImageUrls: [] as string[],
    isOnline: false,
    hasVideoStory: false,
    isVerified: false,
    
    // Nouveaux champs - Localisation avancée
    address: '',
    postalCode: '',
    gpsCoordinates: { lat: 0, lng: 0 },
    openingHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' }
    },
    landmark: '',
    
    // Nouveaux champs - Contact étendu
    website: '',
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: ''
    },
    secondaryEmail: '',
    whatsappNumber: '',
    
    // Nouveaux champs - Catégorisation
    mainCategory: '',
    subcategories: [] as string[],
    keywords: [] as string[],
    brandsDistributed: [] as string[],
    
    // Nouveaux champs - Services et options
    deliveryOptions: {
      available: false,
      areas: [] as string[],
      fees: '',
      estimatedTime: '',
      locationName: '',
      additionalInfo: ''
    },
    paymentMethods: {
      cash: false,
      card: false,
      transfer: false,
      check: false,
      cashOnDelivery: false
    },
    warrantyInfo: '',
    afterSalesService: '',
    
    // Nouveaux champs - Médias
    presentationVideo: '',
    interiorPhotos: [] as string[],
    catalogPdf: '',
    usefulLinks: ['', '']
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [productFiles, setProductFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [_createdShopId, _setCreatedShopId] = useState<string | null>(null);
  const [_subcategories, _setSubcategories] = useState<SimpleSubCategory[]>([]);
  
  // Fonctionnalités techniques communes
  // Désactivation temporaire de l'auto-save pour résoudre les problèmes d'interaction
  // const { loadDraft, clearDraft } = useAutoSave(formData, 'shop-draft');
  
  // Fonctions de gestion du brouillon manuelles
  const loadDraft = () => {
    try {
      const savedData = localStorage.getItem('shop-draft');
      if (savedData) {
        const parsed = JSON.parse(savedData);
        return parsed.data;
      }
    } catch (error) {
      console.error('Failed to load draft:', error);
    }
    return null;
  };
  
  const clearDraft = () => {
    localStorage.removeItem('shop-draft');
  };
  
  
  
  // Règles de validation
  const _validationRules = [
    {
      field: 'name',
      validate: (value: string) => value.trim().length >= 2,
      message: t('createShop.validation.nameMinLength')
    },
    {
      field: 'description',
      validate: (value: string) => value.trim().length >= 5,
      message: t('createShop.validation.descriptionMinLength')
    },
    {
      field: 'wilaya',
      validate: (value: string) => value.trim().length > 0,
      message: t('createShop.validation.wilayaRequired')
    }
  ];

  useEffect(() => {
    if (!user) {
      // Stocker l'URL de redirection actuelle pour après la connexion
      sessionStorage.setItem('authRedirectUrl', window.location.pathname);
      navigate(getLocalizedPath('/connexion'));
      return;
    }
    
    // Charger le brouillon s'il existe
    const draft = loadDraft();
    if (draft) {
      setFormData(prev => ({ ...prev, ...draft }));
    }
  }, [user, navigate, getLocalizedPath, loadDraft]);

  // Gestion des changements dans les champs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    console.log('Input change:', name, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const _handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({ ...prev, mainCategory: categoryId, subcategories: [] }));
    _setSubcategories([]);
  };

  const _handleSubcategoryChange = (subcategoryId: string) => {
    // Pour le formulaire de boutique, nous utilisons un tableau de sous-catégories
    const isSelected = formData.subcategories.includes(subcategoryId);
    console.log('Subcategory change:', subcategoryId, 'Is selected:', isSelected);
    
    if (isSelected) {
      // Retirer la sous-catégorie si elle est déjà sélectionnée
      const newSubcategories = formData.subcategories.filter(id => id !== subcategoryId);
      console.log('Removing subcategory. New list:', newSubcategories);
      setFormData(prev => ({
        ...prev,
        subcategories: newSubcategories
      }));
    } else {
      // Ajouter la sous-catégorie si elle n'est pas encore sélectionnée
      const newSubcategories = [...formData.subcategories, subcategoryId];
      console.log('Adding subcategory. New list:', newSubcategories);
      setFormData(prev => ({
        ...prev,
        subcategories: newSubcategories
      }));
    }
  };

  // Gestion des changements dans les sélecteurs
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion des changements dans les champs imbriqués
  const _handleNestedChange = (category: string, field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      (newData as any)[category] = {
        ...(newData as any)[category],
        [field]: value
      };
      return newData;
    });
  };

  // Gestion des changements dans les champs doublement imbriqués
  const _handleDoubleNestedChange = (category: string, subcategory: string, field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      (newData as any)[category] = {
        ...(newData as any)[category],
        [subcategory]: {
          ...(newData as any)[category]?.[subcategory] || { /* empty */ },
          [field]: value
        }
      };
      return newData;
    });
  };

  // Gestion des numéros de téléphone
  const handlePhoneChange = (index: number, value: string) => {
    const newPhoneNumbers = [...formData.phoneNumbers];
    newPhoneNumbers[index] = value;
    setFormData(prev => ({ ...prev, phoneNumbers: newPhoneNumbers }));
  };

  const addPhoneField = () => {
    setFormData(prev => ({ ...prev, phoneNumbers: [...prev.phoneNumbers, ''] }));
  };

  const removePhoneField = (index: number) => {
    const newPhoneNumbers = formData.phoneNumbers.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, phoneNumbers: newPhoneNumbers }));
  };

  // Gestion de l'upload du logo
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  // Gestion de l'upload de la bannière
  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0]);
    }
  };

  // Gestion de l'upload des images des produits
  const handleProductImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setProductFiles(prev => [...prev, ...newFiles].slice(0, 15));
    }
  };

  const handleProductVideosUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const MAX_SIZE = 15 * 1024 * 1024;
      const incoming = Array.from(e.target.files).filter(f => f.size <= MAX_SIZE);
      setVideoFiles(prev => [...prev, ...incoming].slice(0, 2));
    }
  };

  const handlePaymentMethodToggle = (method: 'cash' | 'card' | 'transfer' | 'check' | 'cashOnDelivery', checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [method]: checked,
      },
    }));
  };

  const removeProductImage = (index: number) => {
    setProductFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeProductVideo = (index: number) => {
    setVideoFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUsefulLinkChange = (index: number, value: string) => {
    setFormData(prev => {
      const links = [...prev.usefulLinks];
      links[index] = value;
      return { ...prev, usefulLinks: links };
    });
  };

  // Simulation de l'upload d'images
  const uploadImages = async (files: File[]): Promise<string[]> => {
    // Simulation d'upload - en production, utiliser un service d'upload
    return new Promise(resolve => {
      setTimeout(() => {
        const urls = files.map(() => `https://picsum.photos/seed/${Math.random()}/800/600.jpg`);
        resolve(urls);
      }, 1000);
    });
  };

  const uploadVideos = async (files: File[]): Promise<string[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const urls = files.map(() => `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_${Math.floor(Math.random()*100)}.mp4`);
        resolve(urls);
      }, 1200);
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: t('createShop.errors.loginRequiredTitle'),
        description: t('createShop.errors.loginRequiredDesc'),
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.description || !formData.wilaya || !logoFile) {
      toast({
        title: t('createShop.errors.requiredFieldsTitle'),
        description: t('createShop.errors.requiredFieldsDesc'),
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);

      // Upload du logo
      const logoUrl = await uploadImages([logoFile]);

      // Upload de la bannière
      const bannerUrls = bannerFile ? await uploadImages([bannerFile]) : [];

      // Upload des images des produits
      const productImageUrls = productFiles.length > 0 
        ? await uploadImages(productFiles) 
        : [];
      const productVideoUrls = videoFiles.length > 0
        ? await uploadVideos(videoFiles)
        : [];

      // Création de la boutique (simulation)
      const newShop = {
        id: `shop-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        wilaya: formData.wilaya,
        shopStatus: formData.shopStatus,
        phoneNumbers: formData.phoneNumbers.filter(phone => phone.trim() !== ''),
        logoUrl: logoUrl[0],
        productImageUrls,
        productVideoUrls,
        bannerUrl: bannerUrls[0] || '',
        isOnline: formData.isOnline,
        hasVideoStory: formData.hasVideoStory,
        isVerified: false, // Sera vérifié plus tard
        ownerId: user.id,
        
        // Nouveaux champs
        address: formData.address,
        postalCode: formData.postalCode,
        gpsCoordinates: formData.gpsCoordinates,
        openingHours: formData.openingHours,
        landmark: formData.landmark,
        website: formData.website,
        socialMedia: formData.socialMedia,
        secondaryEmail: formData.secondaryEmail,
        whatsappNumber: formData.whatsappNumber,
        mainCategory: formData.mainCategory,
        subcategories: formData.subcategories,
        keywords: formData.keywords,
        brandsDistributed: formData.brandsDistributed,
        deliveryOptions: formData.deliveryOptions,
        paymentMethods: formData.paymentMethods,
        warrantyInfo: formData.warrantyInfo,
        afterSalesService: formData.afterSalesService,
        presentationVideo: formData.presentationVideo,
        interiorPhotos: formData.interiorPhotos,
        catalogPdf: formData.catalogPdf,
        usefulLinks: formData.usefulLinks.filter(u => u.trim() !== '')
      };

      // Sauvegarde dans le localStorage (simulation)
      const existingShops = JSON.parse(localStorage.getItem('userShops') || '[]');
      existingShops.push(newShop);
      localStorage.setItem('userShops', safeStringify(existingShops));

      _setCreatedShopId(newShop.id);

      toast({
        title: t('createShop.success.title'),
        description: t('createShop.success.description'),
      });

      // Redirection vers la page de la boutique
      setTimeout(() => {
        navigate(getLocalizedPath(`/boutique/${newShop.id}`));
      }, 2000);

    } catch (error) {
      console.error('Error creating shop:', error);
      toast({
        title: t('createShop.errors.genericErrorTitle'),
        description: error instanceof Error ? error.message : t('createShop.errors.genericErrorDesc'),
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
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Store className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{t('createShop.title')}</h1>
                  <p className="text-purple-100 mt-1">{t('createShop.subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="bg-purple-50 border-purple-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  {t('createShop.tips.title')}
                </h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• {t('createShop.tips.clearName')}</li>
                  <li>• {t('createShop.tips.qualityLogo')}</li>
                  <li>• {t('createShop.tips.attractivePhotos')}</li>
                  <li>• {t('createShop.tips.detailedDescription')}</li>
                  <li>• {t('createShop.tips.reliableContact')}</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Colonne gauche */}
                  <div className="space-y-6">
                    {/* Nom de la boutique */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-bold flex items-center gap-2">
                        <Store className="h-5 w-5 text-purple-600" />
                        <span className="text-red-600">{t('createShop.shopInfo.name')} *</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={(e) => {
                          console.log('Name input focused');
                          e.target.select();
                        }}
                        onClick={(e) => {
                          console.log('Name input clicked');
                          e.stopPropagation();
                        }}
                        placeholder={t('createShop.shopInfo.namePlaceholder')}
                        required
                        className="text-base h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    {/* Statut de la Boutique */}
                    <div className="space-y-2">
                      <Label htmlFor="shopStatus" className="text-lg font-bold flex items-center gap-2">
                        <Store className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.shopStatus')}</span>
                      </Label>
                      <div onClick={(e) => e.stopPropagation()}>
                        <Select onValueChange={(value) => {
                          console.log('ShopStatus select change:', value);
                          handleSelectChange('shopStatus', value);
                        }}>
                          <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                            <SelectValue placeholder={t('createShop.shopInfo.selectShopStatus')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shops">{t('createShop.shopInfo.status.shops')}</SelectItem>
                            <SelectItem value="cabinets">{t('createShop.shopInfo.status.cabinets')}</SelectItem>
                            <SelectItem value="privateCompanies">{t('createShop.shopInfo.status.privateCompanies')}</SelectItem>
                            <SelectItem value="nationalCompanies">{t('createShop.shopInfo.status.nationalCompanies')}</SelectItem>
                            <SelectItem value="mobileCommerce">{t('createShop.shopInfo.status.mobileCommerce')}</SelectItem>
                            <SelectItem value="associations">{t('createShop.shopInfo.status.associations')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-lg font-bold">
                        <span className="text-red-600">{t('createShop.shopInfo.description')} *</span>
                      </Label>
                      <div className="text-sm text-muted-foreground mb-1">
                        {formData.description.length}/950 {t('createShop.shopInfo.characters')}
                      </div>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (e.target.value.length <= 950) {
                            handleInputChange(e);
                          }
                        }}
                        onFocus={(e) => {
                          console.log('Description textarea focused');
                          e.stopPropagation();
                        }}
                        onClick={(e) => {
                          console.log('Description textarea clicked');
                          e.stopPropagation();
                        }}
                        placeholder={t('createShop.shopInfo.descriptionPlaceholder')}
                        rows={6}
                        required
                        className="text-base rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                      />
                    </div>

                    {/* Localisation */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="wilaya" className="text-lg font-bold flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-purple-600" />
                          <span className="text-red-600">{t('createShop.shopInfo.wilaya')} *</span>
                        </Label>
                        <div onClick={(e) => e.stopPropagation()}>
                          <Select onValueChange={(value) => {
                            console.log('Wilaya select change:', value);
                            handleSelectChange('wilaya', value);
                          }} required>
                            <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                              <SelectValue placeholder={t('createShop.shopInfo.selectWilaya')} />
                            </SelectTrigger>
                            <SelectContent>
                              {wilayas.map(wilaya => (
                                <SelectItem key={wilaya.code} value={wilaya.name}>
                                  {wilaya.code.toString().padStart(2, '0')} - {wilaya.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-lg font-bold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.address')}</span>
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={t('createShop.shopInfo.addressPlaceholder')}
                        className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-lg font-bold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.postalCode')}</span>
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder={t('createShop.shopInfo.postalCodePlaceholder')}
                        className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    {/* Numéros de téléphone */}
                    <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-purple-600" />
                        <span className="text-red-600">{t('createShop.shopInfo.phoneNumbers')} *</span>
                      </h3>
                      
                      <div className="space-y-4">
                        {formData.phoneNumbers.map((phone, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="relative flex-1">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                value={phone}
                                onChange={(e) => handlePhoneChange(index, e.target.value)}
                                placeholder={t('createShop.shopInfo.phonePlaceholder')}
                                required={index === 0}
                                className={`pl-10 h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${index === 0 ? 'border-purple-300 bg-purple-50' : ''}`}
                              />
                            </div>
                            {formData.phoneNumbers.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => removePhoneField(index)}
                                className="h-12 w-12 rounded-lg border-gray-200 hover:bg-gray-100"
                              >
                                ×
                              </Button>
                            )}
                          </div>
                        ))}
                        
                        <Button
                          type="button"
                          variant="outline"
                          onClick={addPhoneField}
                          className="w-full h-12 rounded-lg border-dashed border-gray-300 text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {t('createShop.shopInfo.addPhone')}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-lg font-bold flex items-center gap-2">
                        <Globe className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.website')}</span>
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder={t('createShop.shopInfo.websitePlaceholder')}
                        className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.openingHours')}</span>
                      </h3>
                      <div className="grid grid-cols-3 gap-3 text-sm text-gray-500 mb-2">
                        <div>{t('createShop.shopInfo.day')}</div>
                        <div>{t('createShop.shopInfo.open')}</div>
                        <div>{t('createShop.shopInfo.close')}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.monday')}</div>
                          <Input type="time" value={formData.openingHours.monday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'monday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.monday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'monday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.tuesday')}</div>
                          <Input type="time" value={formData.openingHours.tuesday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'tuesday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.tuesday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'tuesday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.wednesday')}</div>
                          <Input type="time" value={formData.openingHours.wednesday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'wednesday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.wednesday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'wednesday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.thursday')}</div>
                          <Input type="time" value={formData.openingHours.thursday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'thursday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.thursday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'thursday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.friday')}</div>
                          <Input type="time" value={formData.openingHours.friday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'friday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.friday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'friday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.saturday')}</div>
                          <Input type="time" value={formData.openingHours.saturday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'saturday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.saturday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'saturday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-base font-medium">{t('createShop.shopInfo.days.sunday')}</div>
                          <Input type="time" value={formData.openingHours.sunday.open} onChange={(e) => _handleDoubleNestedChange('openingHours', 'sunday', 'open', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                          <Input type="time" value={formData.openingHours.sunday.close} onChange={(e) => _handleDoubleNestedChange('openingHours', 'sunday', 'close', e.target.value)} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Store className="h-5 w-5 text-purple-600" />
                        <span>{t('createShop.shopInfo.socialMedia')}</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="facebook" className="text-base font-medium">{t('createShop.shopInfo.facebook')}</Label>
                          <Input id="facebook" value={formData.socialMedia.facebook} onChange={(e) => _handleNestedChange('socialMedia', 'facebook', e.target.value)} placeholder={t('createShop.shopInfo.socialPlaceholder')} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instagram" className="text-base font-medium">{t('createShop.shopInfo.instagram')}</Label>
                          <Input id="instagram" value={formData.socialMedia.instagram} onChange={(e) => _handleNestedChange('socialMedia', 'instagram', e.target.value)} placeholder={t('createShop.shopInfo.socialPlaceholder')} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter" className="text-base font-medium">{t('createShop.shopInfo.twitter')}</Label>
                          <Input id="twitter" value={formData.socialMedia.twitter} onChange={(e) => _handleNestedChange('socialMedia', 'twitter', e.target.value)} placeholder={t('createShop.shopInfo.socialPlaceholder')} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="linkedin" className="text-base font-medium">{t('createShop.shopInfo.linkedin')}</Label>
                          <Input id="linkedin" value={formData.socialMedia.linkedin} onChange={(e) => _handleNestedChange('socialMedia', 'linkedin', e.target.value)} placeholder={t('createShop.shopInfo.socialPlaceholder')} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="youtube" className="text-base font-medium">{t('createShop.shopInfo.youtube')}</Label>
                          <Input id="youtube" value={formData.socialMedia.youtube} onChange={(e) => _handleNestedChange('socialMedia', 'youtube', e.target.value)} placeholder={t('createShop.shopInfo.socialPlaceholder')} className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite */}
                  <div className="space-y-6">
                    {/* Logo */}
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Store className="h-5 w-5 text-purple-600" />
                        <span className="text-red-600">{t('createShop.shopInfo.logo')} *</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                          id="logo-upload"
                        />
                        <label
                          htmlFor="logo-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {logoFile ? (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(logoFile)}
                                alt="Logo preview"
                                className="mx-auto h-20 w-20 object-cover rounded-lg mb-2"
                              />
                              <span className="text-sm text-gray-600">
                                {logoFile.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center">
                              <Upload className="mx-auto h-8 w-8 text-gray-400" />
                              <span className="mt-2 block text-sm text-gray-600">
                                {t('createShop.shopInfo.addLogo')}
                              </span>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Bannière */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Store className="h-5 w-5 text-blue-600" />
                        <span>{t('createShop.shopInfo.banner')}</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleBannerUpload}
                          className="hidden"
                          id="banner-upload"
                        />
                        <label
                          htmlFor="banner-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {bannerFile ? (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(bannerFile)}
                                alt="Banner preview"
                                className="mx-auto h-20 w-32 object-cover rounded-lg mb-2"
                              />
                              <span className="text-sm text-gray-600">
                                {bannerFile.name}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center">
                              <Upload className="mx-auto h-8 w-8 text-gray-400" />
                              <span className="mt-2 block text-sm text-gray-600">
                                {t('createShop.shopInfo.addBanner')}
                              </span>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Images des produits */}
                    <div className="bg-indigo-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Camera className="h-5 w-5 text-indigo-600" />
                        <span className="text-red-600">{t('createShop.shopInfo.productImages')} ({t('createShop.shopInfo.maxImages')})</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleProductImagesUpload}
                          className="hidden"
                          id="product-images-upload"
                        />
                        <label
                          htmlFor="product-images-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-gray-400" />
                            <span className="mt-2 block text-sm text-gray-600">
                              {t('createShop.shopInfo.addImages')}
                            </span>
                          </div>
                        </label>
                      </div>
                       
                      {productFiles.length > 0 && (
                        <div className="mt-4 grid grid-cols-4 gap-4">
                          {productFiles.map((file, index) => (
                            <div key={index} className="relative">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Product ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeProductImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Vidéos des produits */}
                    <div className="bg-indigo-50 p-6 rounded-xl mt-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Video className="h-5 w-5 text-indigo-600" />
                        <span className="text-red-600">{t('createShop.shopInfo.productVideos')} ({t('createShop.shopInfo.maxVideos')})</span>
                      </h3>
                      <div className="mt-2">
                        <input
                          type="file"
                          multiple
                          accept="video/*"
                          onChange={handleProductVideosUpload}
                          className="hidden"
                          id="product-videos-upload"
                        />
                        <label
                          htmlFor="product-videos-upload"
                          className="inline-flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="text-center">
                            <Upload className="mx-auto h-8 w-8 text-gray-400" />
                            <span className="mt-2 block text-sm text-gray-600">
                              {t('createShop.shopInfo.addVideos')}
                            </span>
                          </div>
                        </label>
                      </div>

                      {videoFiles.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          {videoFiles.map((file, index) => (
                            <div key={index} className="relative">
                              <video
                                src={URL.createObjectURL(file)}
                                className="w-full h-24 object-cover rounded-lg"
                                controls
                              />
                              <button
                                type="button"
                                onClick={() => removeProductVideo(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl mt-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{t('createShop.shopInfo.usefulLinks')}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="useful-link-1" className="text-base font-medium">{t('createShop.shopInfo.usefulLink1')}</Label>
                          <Input
                            id="useful-link-1"
                            value={formData.usefulLinks[0] || ''}
                            onChange={(e) => handleUsefulLinkChange(0, e.target.value)}
                            placeholder={t('createShop.shopInfo.usefulLinkPlaceholder')}
                            className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="useful-link-2" className="text-base font-medium">{t('createShop.shopInfo.usefulLink2')}</Label>
                          <Input
                            id="useful-link-2"
                            value={formData.usefulLinks[1] || ''}
                            onChange={(e) => handleUsefulLinkChange(1, e.target.value)}
                            placeholder={t('createShop.shopInfo.usefulLinkPlaceholder')}
                            className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="bg-amber-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-amber-600" />
                        <span className="text-red-600">Options</span>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="isOnline"
                              checked={formData.isOnline}
                              onCheckedChange={(checked) => {
                                console.log('isOnline checkbox changed:', checked);
                                setFormData(prev => ({ ...prev, isOnline: !!checked }));
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('isOnline checkbox clicked');
                              }}
                              className="h-5 w-5"
                            />
                            <div>
                              <Label
                                htmlFor="isOnline"
                                className="text-lg font-bold cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('isOnline label clicked');
                                  setFormData(prev => ({ ...prev, isOnline: !prev.isOnline }));
                                }}
                              >
                                <span className="text-black">{t('createShop.options.isOnline')}</span>
                              </Label>
                              <p className="text-sm text-gray-500">
                                <Badge variant="secondary" className="text-xs mt-1">
                                  <Store className="h-3 w-3 mr-1" />
                                  Boutique en ligne
                                </Badge>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="hasVideoStory"
                              checked={formData.hasVideoStory}
                              onCheckedChange={(checked) => {
                                console.log('hasVideoStory checkbox changed:', checked);
                                setFormData(prev => ({ ...prev, hasVideoStory: !!checked }));
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('hasVideoStory checkbox clicked');
                              }}
                              className="h-5 w-5"
                            />
                            <div>
                              <Label
                                htmlFor="hasVideoStory"
                                className="text-lg font-bold cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('hasVideoStory label clicked');
                                  setFormData(prev => ({ ...prev, hasVideoStory: !prev.hasVideoStory }));
                                }}
                              >
                                <span className="text-black">{t('createShop.options.hasVideoStory')}</span>
                              </Label>
                              <p className="text-sm text-gray-500">
                                <Badge variant="secondary" className="text-xs mt-1">
                                  <Camera className="h-3 w-3 mr-1" />
                                  Vidéo story
                                </Badge>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="deliveryAvailable"
                              checked={formData.deliveryOptions.available}
                              onCheckedChange={(checked) => _handleNestedChange('deliveryOptions', 'available', !!checked)}
                              className="h-5 w-5"
                            />
                            <Label htmlFor="deliveryAvailable" className="text-lg font-bold cursor-pointer">
                              <span className="text-black">{t('createShop.options.deliveryAvailable')}</span>
                            </Label>
                          </div>
                          {formData.deliveryOptions.available && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="deliveryPrice" className="text-base font-medium">{t('createShop.options.deliveryPrice')}</Label>
                                <Input
                                  id="deliveryPrice"
                                  value={formData.deliveryOptions.fees}
                                  onChange={(e) => _handleNestedChange('deliveryOptions', 'fees', e.target.value)}
                                  placeholder={t('createShop.options.deliveryPricePlaceholder')}
                                  className="h-12 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                                />
                              </div>
                              <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="deliveryAdditionalInfo" className="text-base font-medium">{t('createShop.options.deliveryAdditionalInfo')}</Label>
                                <Textarea
                                  id="deliveryAdditionalInfo"
                                  value={formData.deliveryOptions.additionalInfo || ''}
                                  onChange={(e) => _handleNestedChange('deliveryOptions', 'additionalInfo', e.target.value)}
                                  placeholder={t('createShop.options.deliveryAdditionalInfoPlaceholder')}
                                  className="rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <CreditCard className="h-5 w-5 text-amber-600" />
                            <span className="text-lg font-bold">{t('createShop.options.paymentMethods')}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="payment-cash"
                                checked={formData.paymentMethods.cash}
                                onCheckedChange={(checked) => handlePaymentMethodToggle('cash', !!checked)}
                                className="h-5 w-5"
                              />
                              <Label htmlFor="payment-cash" className="text-base font-medium">
                                {t('createShop.options.payment.cash')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="payment-card"
                                checked={formData.paymentMethods.card}
                                onCheckedChange={(checked) => handlePaymentMethodToggle('card', !!checked)}
                                className="h-5 w-5"
                              />
                              <Label htmlFor="payment-card" className="text-base font-medium">
                                {t('createShop.options.payment.card')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="payment-transfer"
                                checked={formData.paymentMethods.transfer}
                                onCheckedChange={(checked) => handlePaymentMethodToggle('transfer', !!checked)}
                                className="h-5 w-5"
                              />
                              <Label htmlFor="payment-transfer" className="text-base font-medium">
                                {t('createShop.options.payment.transfer')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="payment-check"
                                checked={formData.paymentMethods.check}
                                onCheckedChange={(checked) => handlePaymentMethodToggle('check', !!checked)}
                                className="h-5 w-5"
                              />
                              <Label htmlFor="payment-check" className="text-base font-medium">
                                {t('createShop.options.payment.check')}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="payment-cod"
                                checked={formData.paymentMethods.cashOnDelivery}
                                onCheckedChange={(checked) => handlePaymentMethodToggle('cashOnDelivery', !!checked)}
                                className="h-5 w-5"
                              />
                              <Label htmlFor="payment-cod" className="text-base font-medium">
                                {t('createShop.options.payment.cashOnDelivery')}
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <div className="bg-purple-50 border-purple-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      {t('createShop.help.title')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">{t('createShop.help.increasedVisibility.title')}</h4>
                        <p className="text-purple-800">
                          {t('createShop.help.increasedVisibility.description')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{t('createShop.help.simplifiedManagement.title')}</h4>
                        <p className="text-purple-800">
                          {t('createShop.help.simplifiedManagement.description')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{t('createShop.help.directContact.title')}</h4>
                        <p className="text-purple-800">
                          {t('createShop.help.directContact.description')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        clearDraft();
                        navigate(getLocalizedPath('/'));
                      }}
                      className="flex-1 h-12 rounded-lg"
                    >
                      {t('common.cancel')}
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="flex-1 h-14 text-lg font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all"
                    >
                      {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {t('createShop.createShop')}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateShopPage;