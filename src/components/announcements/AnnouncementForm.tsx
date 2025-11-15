import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  X, 
  MapPin, 
  Phone, 
  Mail,
  Loader2
} from 'lucide-react';
import { CreateAnnouncementData } from '@/hooks/useAnnouncements';
import { useAnnouncements } from '@/hooks/useAnnouncements';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useCategories } from '@/services/supabaseCategoriesService';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { cn } from '@/lib/utils';
import { wilayas } from '@/data/wilayaData';

interface AnnouncementFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  className?: string;
}

const CONDITIONS = [
  { value: 'new', label: 'Neuf' },
  { value: 'like_new', label: 'Comme neuf' },
  { value: 'good', label: 'Bon état' },
  { value: 'fair', label: 'État correct' },
  { value: 'poor', label: 'À rénover' },
] as const;

const AnnouncementForm: React.FC<AnnouncementFormProps> = ({
  onSuccess,
  onCancel,
  className
}) => {
  const { language } = useSafeI18nWithRouter();
  const { createAnnouncement, creating } = useAnnouncements();
  const { searchLocation } = useGeolocation();
  
  const [formData, setFormData] = useState<CreateAnnouncementData>({
    title: '',
    description: '',
    price: 0,
    category_id: '',
    condition: 'good',
    images: [],
    location: '',
    wilaya: '',
    phone: '',
    email: '',
    is_urgent: false,
    currency: 'DZD',
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [locationSearch, setLocationSearch] = useState('');
  const [locationResults, setLocationResults] = useState<any[]>([]);

  // Utiliser le hook useCategories pour récupérer les catégories
  const { data: categoryMenu = [], isLoading: categoriesLoading } = useCategories(language);

  const handleInputChange = (field: keyof CreateAnnouncementData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + selectedImages.length > 10) {
      alert('Maximum 10 images autorisées');
      return;
    }

    const newImages = [...selectedImages, ...files];
    setSelectedImages(newImages);
    
    // Créer les URLs de prévisualisation
    const newUrls = files.map(file => URL.createObjectURL(file));
    setImagePreviewUrls(prev => [...prev, ...newUrls]);
    
    handleInputChange('images', newImages);
  };

  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    const newUrls = imagePreviewUrls.filter((_, i) => i !== index);
    
    // Révoquer l'URL de l'objet pour éviter les fuites mémoire
    URL.revokeObjectURL(imagePreviewUrls[index]);
    
    setSelectedImages(newImages);
    setImagePreviewUrls(newUrls);
    handleInputChange('images', newImages);
  };

  const searchLocationHandler = async (query: string) => {
    if (query.length > 2) {
      try {
        const results = await searchLocation(query);
        setLocationResults(results);
      } catch (error) {
        console.error('Error searching location:', error);
      }
    } else {
      setLocationResults([]);
    }
  };

  const selectLocation = (location: any) => {
    handleInputChange('location', location.display_name);
    setLocationSearch(location.display_name);
    setLocationResults([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (selectedImages.length === 0) {
      alert('Veuillez ajouter au moins une image');
      return;
    }

    const result = await createAnnouncement(formData);
    
    if (result) {
      // Nettoyer les URLs de prévisualisation
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
      onSuccess?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Informations de base */}
      <Card>
        <CardHeader>
          <CardTitle>Informations de base</CardTitle>
          <CardDescription>
            Décrivez votre annonce avec des détails précis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Titre de l'annonce *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Ex: iPhone 14 Pro 256GB état neuf"
              maxLength={100}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Décrivez votre produit en détail..."
              rows={4}
              maxLength={2000}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Prix (DZD) *</Label>
              <Input
                id="price"
                type="number"
                value={formData.price || ''}
                onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                placeholder="0"
                min="0"
                required
              />
            </div>

            <div>
              <Label htmlFor="condition">État</Label>
              <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CONDITIONS.map((condition) => (
                    <SelectItem key={condition.value} value={condition.value}>
                      {condition.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="urgent"
              checked={formData.is_urgent}
              onChange={(e) => handleInputChange('is_urgent', e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="urgent">Annonce urgente</Label>
          </div>
        </CardContent>
      </Card>

      {/* Catégories */}
      <Card>
        <CardHeader>
          <CardTitle>Catégorie</CardTitle>
          <CardDescription>
            Choisissez la catégorie qui correspond le mieux à votre annonce
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="category">Catégorie *</Label>
            <Select value={formData.category_id} onValueChange={(value) => handleInputChange('category_id', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categoriesLoading ? (
                  <SelectItem value="" disabled>
                    Chargement des catégories...
                  </SelectItem>
                ) : (
                  categoryMenu.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Images */}
      <Card>
        <CardHeader>
          <CardTitle>Photos</CardTitle>
          <CardDescription>
            Ajoutez jusqu'à 10 photos de votre produit (la première sera la photo principale)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Zone d'upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">Cliquez pour ajouter des photos</p>
                <p className="text-sm text-gray-500">PNG, JPG jusqu'à 10MB chacune</p>
              </label>
            </div>

            {/* Prévisualisation des images */}
            {imagePreviewUrls.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imagePreviewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <Badge className="absolute bottom-2 left-2 bg-primary">
                        Principal
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Localisation */}
      <Card>
        <CardHeader>
          <CardTitle>Localisation</CardTitle>
          <CardDescription>
            Indiquez où se trouve votre produit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Label htmlFor="location">Adresse *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="location"
                value={locationSearch}
                onChange={(e) => {
                  setLocationSearch(e.target.value);
                  searchLocationHandler(e.target.value);
                }}
                placeholder="Recherchez une adresse..."
                className="pl-10"
                required
              />
            </div>
            
            {locationResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {locationResults.map((location, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectLocation(location)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0"
                  >
                    <div className="font-medium">{location.display_name}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="wilaya">Wilaya</Label>
            <Select value={formData.wilaya} onValueChange={(value) => handleInputChange('wilaya', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre wilaya" />
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

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Informations de contact</CardTitle>
          <CardDescription>
            Comment les acheteurs peuvent vous contacter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+213 XXX XXX XXX"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="votre@email.com"
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-4 pt-6">
        <Button
          type="submit"
          disabled={creating}
          className="flex-1"
        >
          {creating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Publication en cours...
            </>
          ) : (
            'Publier l\'annonce'
          )}
        </Button>
        
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={creating}
          >
            Annuler
          </Button>
        )}
      </div>
    </form>
  );
};

export default AnnouncementForm;