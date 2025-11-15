import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Plus, MapPin, Phone, Store, AlertCircle, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { wilayas } from '@/data/wilayaData';
import MultilingualText from '@/components/ui/MultilingualText';
import { detectLanguages } from '@/lib/utils/textDirection';
import { safeStringify } from '@/utils/safeStringify';

const CreateShopPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { t } = useSafeI18nWithRouter();
  const { getLocalizedPath } = useLanguageNavigation();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    wilaya: '',
    phoneNumbers: [''],
    logoUrl: '',
    productImageUrls: [] as string[],
    isOnline: false,
    hasVideoStory: false,
    isVerified: false
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [productFiles, setProductFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [createdShopId, setCreatedShopId] = useState<string | null>(null);
  const [detectedLanguages, setDetectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      navigate(getLocalizedPath('/connexion'));
      return;
    }
  }, [user, navigate, getLocalizedPath]);

  // Détecter les langues lors de la saisie
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Détecter les langues pour le nom et la description
    if (name === 'name' || name === 'description') {
      const languages = detectLanguages(value);
      setDetectedLanguages(languages);
    }
  };

  // Gestion des changements dans les sélecteurs
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
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

  // Gestion de l'upload des images des produits
  const handleProductImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setProductFiles(prev => [...prev, ...newFiles].slice(0, 8)); // Max 8 images
    }
  };

  const removeProductImage = (index: number) => {
    setProductFiles(prev => prev.filter((_, i) => i !== index));
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

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Erreur",
        description: "Vous devez être connecté pour créer une boutique",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.description || !formData.wilaya || !logoFile) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);

      // Upload du logo
      const logoUrl = await uploadImages([logoFile]);
      
      // Upload des images des produits
      const productImageUrls = productFiles.length > 0 
        ? await uploadImages(productFiles) 
        : [];

      // Création de la boutique (simulation)
      const newShop = {
        id: `shop-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        wilaya: formData.wilaya,
        phoneNumbers: formData.phoneNumbers.filter(phone => phone.trim() !== ''),
        logoUrl: logoUrl[0],
        productImageUrls,
        isOnline: formData.isOnline,
        hasVideoStory: formData.hasVideoStory,
        isVerified: false, // Sera vérifié plus tard
        ownerId: user.id,
        detectedLanguages // Stocker les langues détectées
      };

      // Sauvegarde dans le localStorage (simulation)
      const existingShops = JSON.parse(localStorage.getItem('userShops') || '[]');
      existingShops.push(newShop);
      localStorage.setItem('userShops', safeStringify(existingShops));

      setCreatedShopId(newShop.id);

      toast({
        title: "Succès !",
        description: "Votre boutique a été créée avec succès",
      });

      // Redirection vers la page de la boutique
      setTimeout(() => {
        navigate(getLocalizedPath(`/boutique/${newShop.id}`));
      }, 2000);

    } catch (error) {
      console.error('Error creating shop:', error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue",
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
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">{t('shop.createShop.title')}</CardTitle>
                  <CardDescription className="text-lg">
                    {t('shop.createShop.subtitle')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t('shop.createShop.tips.title')}
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• {t('shop.createShop.tips.tip1')}</li>
                  <li>• {t('shop.createShop.tips.tip2')}</li>
                  <li>• {t('shop.createShop.tips.tip3')}</li>
                  <li>• {t('shop.createShop.tips.tip4')}</li>
                  <li>• {t('shop.createShop.tips.tip5')}</li>
                </ul>
              </div>
              
              {/* Indicateur de langues détectées */}
              {detectedLanguages.length > 0 && (
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      Langues détectées : {detectedLanguages.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                    Votre boutique sera affichée exactement comme vous l'avez saisie, dans toutes les langues utilisées.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('shop.createShop.form.informations')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom de la boutique */}
                    <div>
                      <Label htmlFor="name">{t('shop.createShop.form.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('shop.createShop.form.namePlaceholder')}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Vous pouvez utiliser plusieurs langues (français, arabe, anglais, etc.)
                      </p>
                    </div>

                    {/* Description */}
                    <div>
                      <Label htmlFor="description">{t('shop.createShop.form.description')}</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder={t('shop.createShop.form.descriptionPlaceholder')}
                        rows={4}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Décrivez votre boutique dans la ou les langues de votre choix
                      </p>
                    </div>

                    {/* Localisation */}
                    <div>
                      <Label htmlFor="wilaya">{t('shop.createShop.form.wilaya')}</Label>
                      <Select onValueChange={(value) => handleSelectChange('wilaya', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder={t('shop.createShop.form.wilayaPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {wilayas.map(wilaya => (
                            <SelectItem key={wilaya.code} value={wilaya.name}>
                              {wilaya.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Numéros de téléphone */}
                    <div>
                      <Label>{t('shop.createShop.form.phone')}</Label>
                      {formData.phoneNumbers.map((phone, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={phone}
                            onChange={(event) => handlePhoneChange(index, event.target.value)}
                            placeholder="0555 XX XX XX"
                            required={index === 0}
                          />
                          {formData.phoneNumbers.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removePhoneField(index)}
                            >
                              Supprimer
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addPhoneField}
                        className="mt-2"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        {t('shop.createShop.form.addPhone')}
                      </Button>
                    </div>

                    {/* Logo */}
                    <div>
                      <Label>{t('shop.createShop.form.logo')}</Label>
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
                                {t('shop.createShop.form.logoUploadText')}
                              </span>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Images des produits */}
                    <div>
                      <Label>{t('shop.createShop.form.productImages')}</Label>
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
                              {t('shop.createShop.form.productImagesUploadText')}
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

                    {/* Options */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="isOnline"
                          checked={formData.isOnline}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, isOnline: !!checked }))
                          }
                        />
                        <Label htmlFor="isOnline" className="text-sm">
                          {t('shop.createShop.form.onlineShop')}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasVideoStory"
                          checked={formData.hasVideoStory}
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, hasVideoStory: !!checked }))
                          }
                        />
                        <Label htmlFor="hasVideoStory" className="text-sm">
                          {t('shop.createShop.form.videoStory')}
                        </Label>
                      </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(getLocalizedPath('/'))}
                        className="flex-1"
                      >
                        {t('shop.createShop.form.cancelButton')}
                      </Button>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="flex-1"
                      >
                        {loading ? t('shop.createShop.form.creatingButton') : t('shop.createShop.form.submitButton')}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Section d'aide */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    {t('shop.createShop.benefits.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">{t('shop.createShop.benefits.visibility.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('shop.createShop.benefits.visibility.description')}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('shop.createShop.benefits.management.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('shop.createShop.benefits.management.description')}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('shop.createShop.benefits.contact.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('shop.createShop.benefits.contact.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Guide multilingue */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Contenu Multilingue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p>
                      Votre boutique peut contenir du texte dans plusieurs langues.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h5 className="font-medium mb-2">Exemples :</h5>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">Nom :</p>
                          <MultilingualText text="Boutique El Hana - متجر الحنا" />
                        </div>
                        <div>
                          <p className="font-medium">Description :</p>
                          <MultilingualText text="Vente de produits traditionnels algériens. بيع المنتجات التقليدية الجزائرية" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Le contenu sera affiché exactement comme vous le saisissez, avec la direction appropriée (RTL/LTR).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateShopPage;