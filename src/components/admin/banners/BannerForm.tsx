import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload, X } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { AdvertisingBanner } from '@/hooks/useAdvertisingBanners';

interface BannerFormProps {
  banner?: AdvertisingBanner;
  onSave: () => void;
  onCancel: () => void;
}

const gradientOptions = [
  { value: 'from-orange-400 via-red-400 to-pink-500', label: 'Orange vers Rose', preview: 'from-orange-400 via-red-400 to-pink-500' },
  { value: 'from-pink-400 via-purple-400 to-indigo-500', label: 'Rose vers Indigo', preview: 'from-pink-400 via-purple-400 to-indigo-500' },
  { value: 'from-blue-400 via-cyan-400 to-teal-500', label: 'Bleu vers Sarcelle', preview: 'from-blue-400 via-cyan-400 to-teal-500' },
  { value: 'from-emerald-400 via-green-400 to-teal-500', label: 'Émeraude vers Sarcelle', preview: 'from-emerald-400 via-green-400 to-teal-500' },
  { value: 'from-yellow-400 via-orange-400 to-red-500', label: 'Jaune vers Rouge', preview: 'from-yellow-400 via-orange-400 to-red-500' },
  { value: 'from-purple-400 via-pink-400 to-red-500', label: 'Violet vers Rouge', preview: 'from-purple-400 via-pink-400 to-red-500' },
];

const isoToLocalInput = (iso?: string | null) => {
  if (!iso) return '';
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const BannerForm: React.FC<BannerFormProps> = ({ banner, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    button_text: 'Découvrir',
    link_url: '',
    background_gradient: 'from-blue-400 via-cyan-400 to-teal-500',
    icon_emoji: '🎯',
    position_order: 0,
    is_active: true,
  });

  const [translations, setTranslations] = useState({
    fr: { title: '', subtitle: '', description: '', button_text: 'Découvrir' },
    ar: { title: '', subtitle: '', description: '', button_text: 'اكتشف' },
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [isPermanent, setIsPermanent] = useState<boolean>(true);
  const [endAtLocal, setEndAtLocal] = useState<string>('');

  useEffect(() => {
    if (banner) {
      setFormData({
        title: banner.title,
        subtitle: banner.subtitle || '',
        description: banner.description || '',
        button_text: banner.button_text,
        link_url: banner.link_url || '',
        background_gradient: banner.background_gradient,
        icon_emoji: banner.icon_emoji || '🎯',
        position_order: banner.position_order,
        is_active: banner.is_active,
      });
      
      if (banner.image_url) {
        setImagePreview(banner.image_url);
        setMediaUrl(banner.image_url);
      }

      // Planification (arrêt automatique)
      if (banner.end_at) {
        setIsPermanent(false);
        setEndAtLocal(isoToLocalInput(banner.end_at));
      } else {
        setIsPermanent(true);
        setEndAtLocal('');
      }

      // Charger les traductions existantes
      loadTranslations(banner.id);
    }
  }, [banner]);

  const loadTranslations = async (bannerId: string) => {
    const { data } = await supabase
      .from('advertising_banner_translations')
      .select('*')
      .eq('banner_id', bannerId);

    if (data) {
      const newTranslations = { ...translations };
      data.forEach((t) => {
        if (t.language_code === 'fr' || t.language_code === 'ar') {
          newTranslations[t.language_code] = {
            title: t.title,
            subtitle: t.subtitle || '',
            description: t.description || '',
            button_text: t.button_text,
          };
        }
      });
      setTranslations(newTranslations);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    setUploading(true);
    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `banner-${Date.now()}.${fileExt}`;
      
      const { error } = await supabase.storage
        .from('banner-images')
        .upload(fileName, imageFile);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('banner-images')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Upload image if new
      let imageUrl: string | null = mediaUrl || banner?.image_url || null;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const bannerData: Partial<AdvertisingBanner> & { [key: string]: any } = {
        ...formData,
        image_url: imageUrl || undefined,
        end_at: isPermanent ? undefined : (endAtLocal ? new Date(endAtLocal).toISOString() : undefined),
        created_by: banner ? undefined : (await supabase.auth.getUser()).data.user?.id,
        updated_at: new Date().toISOString(),
      };

      let bannerId = banner?.id;

      if (banner) {
        // Update existing banner
        const { error } = await supabase
          .from('advertising_banners')
          .update(bannerData as any)
          .eq('id', banner.id);

        if (error) throw error;
      } else {
        // Create new banner
        const { data, error } = await supabase
          .from('advertising_banners')
          .insert([bannerData] as any)
          .select()
          .single();

        if (error) throw error;
        bannerId = data.id;
      }

      // Save translations
      if (bannerId) {
        for (const [lang, translation] of Object.entries(translations)) {
          if (translation.title) {
            const { error: translationError } = await supabase
              .from('advertising_banner_translations')
              .upsert({
                banner_id: bannerId,
                language_code: lang,
                ...translation,
                updated_at: new Date().toISOString(),
              });

            if (translationError) throw translationError;
          }
        }
      }

      onSave();
    } catch (error) {
      console.error('Error saving banner:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{banner ? 'Modifier la Bannière' : 'Créer une Nouvelle Bannière'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations principales */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Titre (par défaut)</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="button_text">Texte du bouton (par défaut)</Label>
              <Input
                id="button_text"
                value={formData.button_text}
                onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subtitle">Sous-titre (par défaut)</Label>
            <Input
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="description">Description (par défaut)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          {/* Traductions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Traductions</h3>
             
            {/* Français */}
            <div className="p-4 border rounded-lg space-y-3">
              <h4 className="font-medium">Français</h4>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Titre en français"
                  value={translations.fr.title}
                  onChange={(e) => setTranslations({
                    ...translations,
                    fr: { ...translations.fr, title: e.target.value }
                  })}
                />
                <Input
                  placeholder="Texte du bouton en français"
                  value={translations.fr.button_text}
                  onChange={(e) => setTranslations({
                    ...translations,
                    fr: { ...translations.fr, button_text: e.target.value }
                  })}
                />
              </div>
              <Input
                placeholder="Sous-titre en français"
                value={translations.fr.subtitle}
                onChange={(e) => setTranslations({
                  ...translations,
                  fr: { ...translations.fr, subtitle: e.target.value }
                })}
              />
              <Textarea
                placeholder="Description en français"
                value={translations.fr.description}
                onChange={(e) => setTranslations({
                  ...translations,
                  fr: { ...translations.fr, description: e.target.value }
                })}
                rows={2}
              />
            </div>

            {/* Arabe */}
            <div className="p-4 border rounded-lg space-y-3">
              <h4 className="font-medium">العربية</h4>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="العنوان بالعربية"
                  value={translations.ar.title}
                  onChange={(e) => setTranslations({
                    ...translations,
                    ar: { ...translations.ar, title: e.target.value }
                  })}
                  dir="rtl"
                />
                <Input
                  placeholder="نص الزر بالعربية"
                  value={translations.ar.button_text}
                  onChange={(e) => setTranslations({
                    ...translations,
                    ar: { ...translations.ar, button_text: e.target.value }
                  })}
                  dir="rtl"
                />
              </div>
              <Input
                placeholder="العنوان الفرعي بالعربية"
                value={translations.ar.subtitle}
                onChange={(e) => setTranslations({
                  ...translations,
                  ar: { ...translations.ar, subtitle: e.target.value }
                })}
                dir="rtl"
              />
              <Textarea
                placeholder="الوصف بالعربية"
                value={translations.ar.description}
                onChange={(e) => setTranslations({
                  ...translations,
                  ar: { ...translations.ar, description: e.target.value }
                })}
                rows={2}
                dir="rtl"
              />
            </div>
          </div>

          {/* Média (image/vidéo) */}
          <div>
            <Label>URL du média (image ou vidéo)</Label>
            <Input
              className="mt-2"
              placeholder="https://... (jpg, png, webp, mp4, webm, etc.)"
              value={mediaUrl}
              onChange={(e) => {
                setMediaUrl(e.target.value);
                setImagePreview(e.target.value);
              }}
            />
            <p className="text-xs text-muted-foreground mt-1">Vous pouvez coller un lien direct vers une image ou une vidéo. Sinon, importez une image ci-dessous.</p>

            <div className="mt-3">
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview('');
                      setImageFile(null);
                      setMediaUrl('');
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <label className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Cliquez pour ajouter une image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gradient">Dégradé de fond</Label>
              <Select
                value={formData.background_gradient}
                onValueChange={(value) => setFormData({ ...formData, background_gradient: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {gradientOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded bg-gradient-to-r ${option.preview}`}></div>
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="icon">Icône (emoji)</Label>
              <Input
                id="icon"
                value={formData.icon_emoji}
                onChange={(e) => setFormData({ ...formData, icon_emoji: e.target.value })}
                placeholder="🎯"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="link_url">URL de destination</Label>
              <Input
                id="link_url"
                type="url"
                value={formData.link_url}
                onChange={(e) => setFormData({ ...formData, link_url: e.target.value })}
                placeholder="https://example.com"
              />
            </div>

            <div>
              <Label htmlFor="position_order">Ordre d'affichage</Label>
              <Input
                id="position_order"
                type="number"
                value={formData.position_order}
                onChange={(e) => setFormData({ ...formData, position_order: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
            />
            <Label htmlFor="is_active">Bannière active</Label>
          </div>

          {/* Planification */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="is_permanent" checked={isPermanent} onCheckedChange={setIsPermanent} />
              <Label htmlFor="is_permanent">Publicité permanente</Label>
            </div>
            {!isPermanent && (
              <div>
                <Label htmlFor="end_at">Arrêt automatique (date & heure)</Label>
                <Input
                  id="end_at"
                  type="datetime-local"
                  value={endAtLocal}
                  onChange={(e) => setEndAtLocal(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Annuler
            </Button>
            <Button type="submit" disabled={saving || uploading}>
              {saving ? 'Enregistrement...' : (banner ? 'Mettre à jour' : 'Créer')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BannerForm;
