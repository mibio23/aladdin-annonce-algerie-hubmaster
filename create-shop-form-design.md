# Design du formulaire de création de boutique

## Structure du composant CreateShopPage

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Plus, MapPin, Phone, Store, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { wilayas } from '@/data/wilayaData';
```

## État du formulaire

```tsx
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
```

## Structure du formulaire

### 1. En-tête de la page

```tsx
<Card className="mb-8">
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 p-3 rounded-full">
        <Store className="h-8 w-8 text-primary" />
      </div>
      <div>
        <CardTitle className="text-3xl">Créer votre boutique</CardTitle>
        <CardDescription className="text-lg">
          Présentez vos produits et services à des milliers de clients potentiels
        </CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
        Conseils pour une boutique réussie :
      </h3>
      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
        <li>• Choisissez un nom clair et mémorable</li>
        <li>• Ajoutez un logo de bonne qualité</li>
        <li>• Présentez vos produits avec des photos attractives</li>
        <li>• Rédigez une description détaillée de vos activités</li>
        <li>• Indiquez des coordonnées fiables pour être contacté</li>
      </ul>
    </div>
  </CardContent>
</Card>
```

### 2. Formulaire principal

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Formulaire */}
  <div className="lg:col-span-2">
    <Card>
      <CardHeader>
        <CardTitle>Informations de la boutique</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom de la boutique */}
          <div>
            <Label htmlFor="name">Nom de la boutique *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ex: Boutique Mode Alger"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Décrivez votre boutique, vos produits et services..."
              rows={4}
              required
            />
          </div>

          {/* Localisation */}
          <div>
            <Label htmlFor="wilaya">Wilaya *</Label>
            <Select onValueChange={(value) => handleSelectChange('wilaya', value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Choisir une wilaya" />
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
            <Label>Numéros de téléphone *</Label>
            {formData.phoneNumbers.map((phone, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e.target.value)}
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
              Ajouter un numéro
            </Button>
          </div>

          {/* Logo */}
          <div>
            <Label>Logo de la boutique *</Label>
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
                      Cliquez pour ajouter un logo
                    </span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Images des produits */}
          <div>
            <Label>Photos des produits (max 8)</Label>
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
                    Cliquez pour ajouter des photos
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
                Boutique en ligne (vente sur internet)
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
                Story vidéo disponible
              </Label>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading ? 'Création...' : 'Créer la boutique'}
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
          Pourquoi créer une boutique ?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Visibilité accrue</h4>
            <p className="text-muted-foreground">
              Votre boutique sera visible par des milliers de clients potentiels à travers toute l'Algérie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Gestion simplifiée</h4>
            <p className="text-muted-foreground">
              Ajoutez, modifiez et supprimez vos produits facilement depuis votre espace personnel.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact direct</h4>
            <p className="text-muted-foreground">
              Les clients peuvent vous contacter directement via votre boutique pour plus d'informations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
```

## Fonctions de gestion du formulaire

```tsx
// Gestion des changements dans les champs
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
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
      ownerId: user.id
    };

    // Sauvegarde dans le localStorage (simulation)
    const existingShops = JSON.parse(localStorage.getItem('userShops') || '[]');
    existingShops.push(newShop);
    localStorage.setItem('userShops', JSON.stringify(existingShops));

    setCreatedShopId(newShop.id);

    toast({
      title: "Succès !",
      description: "Votre boutique a été créée avec succès",
    });

    // Redirection vers la page de la boutique
    setTimeout(() => {
      navigate(`/boutique/${newShop.id}`);
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