import { useState, Suspense, lazy, useEffect, Component } from 'react';
import type { ReactNode } from 'react';
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
import { Briefcase, Loader2, FileText, MapPin, DollarSign, Camera, Check, Phone, Mail, Clock, Star, AlertTriangle, RefreshCw, Plus, X } from 'lucide-react';
import { GeolocationCoords } from '@/hooks/useGeolocation';
import { wilayas } from '@/data/wilayaData';

// Import dynamique pour éviter les erreurs de chargement
const GeolocationPicker = lazy(() => import('@/components/geolocation/GeolocationPicker'));
const ImageUpload = lazy(() => import('@/components/ui/ImageUpload'));

// Composant Error Boundary pour capturer les erreurs de rendu
class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const DeposerOffreMetier = () => {
  console.log('DeposerOffreMetier component loaded');
  const { t, language, isRTL } = useSafeI18nWithRouter();
  console.log('Current language:', language);
  const { user, loading: authLoading } = useAuth();
  console.log('User authenticated:', !!user);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<GeolocationCoords | null>(null);
  const [componentError, setComponentError] = useState<string | null>(null);

  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    if (!authLoading && !user) {
      toast({
        title: t('auth.errors.loginRequired') || "Connexion requise",
        description: t('auth.errors.loginRequired') || "Vous devez être connecté pour déposer une offre de métiers",
        variant: 'destructive',
      });
      // Stocker l'URL de redirection avant de rediriger vers la page de connexion
      sessionStorage.setItem('authRedirectUrl', window.location.pathname);
      navigate('/connexion');
    }
  }, [user, authLoading, navigate, toast]);

  // Si l'authentification est en cours de chargement
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Si l'utilisateur n'est pas connecté
  if (!user) {
    return null; // La redirection est gérée par useEffect
  }

  // Gestionnaire d'erreurs pour capturer les erreurs de rendu
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error in DeposerOffreMetier:', event.error);
      setComponentError(event.error?.message || 'Une erreur est survenue');
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    profession: '',
    specialite: '',
    experience: '',
    disponibilite: '',
    salaire: '',
    devise: 'DZD',
    telephones: ['', '', ''], // Tableau pour jusqu'à 3 numéros de téléphone
    email: '',
    wilaya: '',
    location: '',
    diplome: false,
    deplacement: false,
    urgent: false,
    expires_at: ''
  });

  // Liste des métiers les plus courants en Algérie
  const metiers = [
    { key: 'plumber', value: t('jobOffer.professions.plumber') },
    { key: 'electrician', value: t('jobOffer.professions.electrician') },
    { key: 'mechanic', value: t('jobOffer.professions.mechanic') },
    { key: 'woodworker', value: t('jobOffer.professions.woodworker') },
    { key: 'painter', value: t('jobOffer.professions.painter') },
    { key: 'mason', value: t('jobOffer.professions.mason') },
    { key: 'roofer', value: t('jobOffer.professions.roofer') },
    { key: 'tiler', value: t('jobOffer.professions.tiler') },
    { key: 'gardener', value: t('jobOffer.professions.gardener') },
    { key: 'tailor', value: t('jobOffer.professions.tailor') },
    { key: 'cook', value: t('jobOffer.professions.cook') },
    { key: 'hairdresser', value: t('jobOffer.professions.hairdresser') },
    { key: 'beautician', value: t('jobOffer.professions.beautician') },
    { key: 'computerTechnician', value: t('jobOffer.professions.computerTechnician') },
    { key: 'heatingTechnician', value: t('jobOffer.professions.heatingTechnician') },
    { key: 'applianceRepairman', value: t('jobOffer.professions.applianceRepairman') },
    { key: 'welder', value: t('jobOffer.professions.welder') },
    { key: 'ironworker', value: t('jobOffer.professions.ironworker') },
    { key: 'glazier', value: t('jobOffer.professions.glazier') },
    { key: 'bodyworker', value: t('jobOffer.professions.bodyworker') },
    { key: 'cabinetmaker', value: t('jobOffer.professions.cabinetmaker') },
    { key: 'upholsterer', value: t('jobOffer.professions.upholsterer') },
    { key: 'airConditioningTechnician', value: t('jobOffer.professions.airConditioningTechnician') },
    { key: 'photographer', value: t('jobOffer.professions.photographer') },
    { key: 'videographer', value: t('jobOffer.professions.videographer') },
    { key: 'translator', value: t('jobOffer.professions.translator') },
    { key: 'secretary', value: t('jobOffer.professions.secretary') },
    { key: 'accountant', value: t('jobOffer.professions.accountant') },
    { key: 'privateTeacher', value: t('jobOffer.professions.privateTeacher') }
  ];

  // Niveaux d'expérience
  const niveauxExperience = [
    { key: 'beginner', value: t('jobOffer.experienceLevels.beginner') },
    { key: 'intermediate', value: t('jobOffer.experienceLevels.intermediate') },
    { key: 'confirmed', value: t('jobOffer.experienceLevels.confirmed') },
    { key: 'expert', value: t('jobOffer.experienceLevels.expert') }
  ];

  // Disponibilités
  const disponibilites = [
    { key: 'fullTime', value: t('jobOffer.availability.fullTime') },
    { key: 'partTime', value: t('jobOffer.availability.partTime') },
    { key: 'weekend', value: t('jobOffer.availability.weekend') },
    { key: 'evenings', value: t('jobOffer.availability.evenings') },
    { key: 'seasonal', value: t('jobOffer.availability.seasonal') },
    { key: 'occasional', value: t('jobOffer.availability.occasional') }
  ];


  // Fonction pour gérer les changements dans les numéros de téléphone
  const handleTelephoneChange = (index: number, value: string) => {
    const newTelephones = [...formData.telephones];
    newTelephones[index] = value;
    setFormData(prev => ({ ...prev, telephones: newTelephones }));
  };

  // Fonction pour ajouter un nouveau champ de téléphone
  const addTelephoneField = () => {
    const emptyIndex = formData.telephones.findIndex(tel => tel === '');
    if (emptyIndex !== -1) {
      // Activer le champ vide existant
      const newTelephones = [...formData.telephones];
      setFormData(prev => ({ ...prev, telephones: newTelephones }));
    }
  };

  // Fonction pour supprimer un champ de téléphone
  const removeTelephoneField = (index: number) => {
    const newTelephones = [...formData.telephones];
    newTelephones[index] = '';
    setFormData(prev => ({ ...prev, telephones: newTelephones }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: t('auth.errors.loginFailed') || "Connexion requise",
        description: t('auth.errors.loginRequired') || "Vous devez être connecté pour publier une offre",
        variant: 'destructive',
      });
      return;
    }

    // Validation
    const hasValidTelephone = formData.telephones.some(tel => tel.trim() !== '');
    if (!formData.title.trim() || !formData.profession || !formData.description || !hasValidTelephone || !formData.wilaya) {
      toast({
        title: t('jobOffer.requiredFields') || "Champs obligatoires",
        description: t('jobOffer.requiredFieldsDesc') || "Veuillez remplir tous les champs obligatoires, y compris au moins un numéro de téléphone",
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const offreData = {
        user_id: user.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        profession: formData.profession,
        specialite: formData.specialite || null,
        experience: formData.experience || null,
        disponibilite: formData.disponibilite || null,
        salaire: formData.salaire ? parseFloat(formData.salaire) : null,
        devise: formData.devise,
        telephone: formData.telephones.filter(tel => tel.trim() !== '').join(', '), // Joindre les numéros valides
        email: formData.email.trim() || null,
        wilaya: formData.wilaya,
        location: selectedLocation?.address || formData.location || null,
        diplome: formData.diplome,
        deplacement: formData.deplacement,
        urgent: formData.urgent,
        images: images,
        expires_at: formData.expires_at ? new Date(formData.expires_at).toISOString() : null,
        is_active: true,
        views_count: 0,
        type: 'offre_metier'
      };

      const { data, error } = await supabase
        .from('advertising_banners')
        .insert({
          title: formData.title,
          description: formData.description,
          button_text: 'Contacter',
          link_url: formData.telephones.filter(tel => tel.trim() !== '').join(', ') || '',
          created_by: user.id,
          is_active: true,
          type: 'offre_metier'
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      toast({
        title: t('jobOffer.offerPublishedSuccess') || "Offre publiée avec succès !",
        description: t('jobOffer.offerPublishedDesc') || "Votre offre de métier a été publiée avec succès",
      });

      // Rediriger vers la nouvelle offre
      navigate(`/offre-metier/${data.id}`);
      
    } catch (error) {
      console.error('Error creating job offer:', error);
      toast({
        title: t('jobOffer.error') || "Erreur",
        description: t('jobOffer.publishErrorDesc') || "Impossible de publier l'offre. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (componentError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-6">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-xl font-bold mb-2">{t('jobOffer.loadingError') || "Erreur de chargement"}</h2>
          <p className="text-muted-foreground mb-4">
            {t('jobOffer.loadingErrorDesc') || "Une erreur est survenue lors du chargement du formulaire. Veuillez réessayer."}
          </p>
          <Button onClick={() => window.location.reload()}>
            {t('jobOffer.refreshPage') || "Actualiser la page"}
          </Button>
        </div>
      </div>
    );
  }

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

  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="max-w-md mx-auto text-center p-6">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-bold mb-2">{t('jobOffer.loadingError') || "Erreur de chargement"}</h2>
            <p className="text-muted-foreground mb-4">
              {t('jobOffer.loadingErrorDesc') || "Une erreur est survenue lors du chargement du formulaire. Veuillez réessayer."}
            </p>
            <Button onClick={() => window.location.reload()}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('jobOffer.refreshPage') || "Actualiser la page"}
            </Button>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{t('jobOffer.title')}</h1>
                    <p className="text-blue-100 mt-1">{t('jobOffer.subtitle')}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Colonne gauche */}
                    <div className="space-y-6">
                      {/* Titre de l'offre */}
                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-lg font-bold flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="text-red-600">{t('jobOffer.offerTitle')}</span>
                        </Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(event) => handleInputChange('title', event.target.value)}
                          placeholder={t('jobOffer.offerTitlePlaceholder')}
                          required
                          className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {/* Profession */}
                      <div className="space-y-2">
                        <Label htmlFor="profession" className="text-lg font-bold flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          <span className="text-red-600">{t('jobOffer.profession')}</span>
                        </Label>
                        <Select value={formData.profession} onValueChange={(value) => handleInputChange('profession', value)}>
                          <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder={t('jobOffer.selectProfession')} />
                          </SelectTrigger>
                          <SelectContent>
                            {metiers.map((metier) => (
                              <SelectItem key={metier.key} value={metier.value}>
                                {metier.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Spécialité */}
                      <div className="space-y-2">
                        <Label htmlFor="specialite" className="text-lg font-bold">
                          <span className="text-red-600">{t('jobOffer.specialty')}</span>
                        </Label>
                        <Input
                          id="specialite"
                          value={formData.specialite}
                          onChange={(e) => handleInputChange('specialite', e.target.value)}
                          placeholder={t('jobOffer.specialtyPlaceholder')}
                          className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {/* Description détaillée */}
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-lg font-bold">
                          <span className="text-red-600">{t('jobOffer.description')}</span>
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder={t('jobOffer.descriptionPlaceholder')}
                          rows={6}
                          required
                          className="text-base rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        />
                      </div>

                      {/* Localisation */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-lg font-bold flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <span className="text-red-600">{t('jobOffer.workArea')}</span>
                          </Label>
                          <Suspense fallback={<div className="text-sm text-muted-foreground p-3 bg-gray-50 rounded-lg">{t('jobOffer.loadingLocation')}</div>}>
                            <GeolocationPicker
                              onLocationSelect={(coords) => {
                                setSelectedLocation(coords);
                                handleInputChange('location', coords.address || `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`);
                              }}
                              selectedLocation={selectedLocation?.address}
                            />
                          </Suspense>
                          {selectedLocation && (
                            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                              <MapPin className="h-4 w-4 text-blue-600" />
                              <p className="text-sm text-blue-800">
                                {selectedLocation.address}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="wilaya" className="text-lg font-bold">
                            <span className="text-red-600">{t('jobOffer.wilaya')}</span>
                          </Label>
                          <Select value={formData.wilaya} onValueChange={(value) => handleInputChange('wilaya', value)}>
                            <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder={t('jobOffer.selectWilaya')} />
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

                      {/* Contact */}
                      <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                          <Phone className="h-5 w-5 text-blue-600" />
                          <span className="text-red-600">{t('jobOffer.phoneNumbers')}</span>
                        </h3>
                        
                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">
                            {t('jobOffer.phoneNumbersDesc')}
                          </p>
                          
                          {formData.telephones.map((telephone, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="relative flex-1">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                  type="tel"
                                  value={telephone}
                                  onChange={(e) => handleTelephoneChange(index, e.target.value)}
                                  placeholder={t('jobOffer.phoneNumber').replace('{index}', (index + 1).toString())}
                                  className={`pl-10 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${index === 0 ? 'border-blue-300 bg-blue-50' : ''}`}
                                />
                              </div>
                              {index > 0 && (
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeTelephoneField(index)}
                                  className="h-12 w-12 rounded-lg border-gray-200 hover:bg-gray-100"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          ))}
                          
                          {formData.telephones.filter(tel => tel.trim() !== '').length < 3 && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={addTelephoneField}
                              className="w-full h-12 rounded-lg border-dashed border-gray-300 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              {t('jobOffer.addPhoneNumber')}
                            </Button>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <span className="text-red-600">{t('jobOffer.email')}</span>
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder=""
                              className="pl-10 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Colonne droite */}
                    <div className="space-y-6">
                      {/* Expérience et Disponibilité */}
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          {t('jobOffer.professionalInfo')}
                        </h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="experience" className="text-lg font-bold">
                              <span className="text-red-600">{t('jobOffer.experience')}</span>
                            </Label>
                            <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                              <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                <SelectValue placeholder={t('jobOffer.selectExperience')} />
                              </SelectTrigger>
                              <SelectContent>
                                {niveauxExperience.map((niveau) => (
                                  <SelectItem key={niveau.key} value={niveau.value}>
                                    {niveau.value}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="disponibilite" className="text-lg font-bold">
                              <span className="text-red-600">{t('jobOffer.availability')}</span>
                            </Label>
                            <Select value={formData.disponibilite} onValueChange={(value) => handleInputChange('disponibilite', value)}>
                              <SelectTrigger className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                <SelectValue placeholder={t('jobOffer.selectAvailability')} />
                              </SelectTrigger>
                              <SelectContent>
                                {disponibilites.map((disp) => (
                                  <SelectItem key={disp.key} value={disp.value}>
                                    {disp.value}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Salaire */}
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <span className="text-red-600">{t('jobOffer.rate')}</span>
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-2 space-y-2">
                            <Input
                              id="salaire"
                              type="number"
                              value={formData.salaire}
                              onChange={(e) => handleInputChange('salaire', e.target.value)}
                              placeholder={t('jobOffer.ratePlaceholder')}
                              min="0"
                              step="100"
                              className="text-base h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Select value={formData.devise} onValueChange={(value) => handleInputChange('devise', value)}>
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

                      {/* Options et certifications */}
                      <div className="bg-amber-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5 text-amber-600" />
                          <span className="text-red-600">{t('jobOffer.optionsCertifications')}</span>
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="diplome"
                                checked={formData.diplome}
                                onCheckedChange={(checked) => handleInputChange('diplome', checked as boolean)}
                                className="h-5 w-5"
                              />
                              <div>
                                <Label htmlFor="diplome" className="text-lg font-bold cursor-pointer">
                                  <span className="text-black">{t('jobOffer.graduateCertified')}</span>
                                </Label>
                                <p className="text-sm text-gray-500">
                                  <Badge variant="secondary" className="text-xs mt-1">
                                    <Star className="h-3 w-3 mr-1" />
                                    <span className="text-black">{t('jobOffer.qualified')}</span>
                                  </Badge>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="deplacement"
                                checked={formData.deplacement}
                                onCheckedChange={(checked) => handleInputChange('deplacement', checked as boolean)}
                                className="h-5 w-5"
                              />
                              <div>
                                <Label htmlFor="deplacement" className="text-lg font-bold cursor-pointer">
                                  <span className="text-black">{t('jobOffer.homeVisit')}</span>
                                </Label>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="urgent"
                                checked={formData.urgent}
                                onCheckedChange={(checked) => handleInputChange('urgent', checked as boolean)}
                                className="h-5 w-5"
                              />
                              <div>
                                <Label htmlFor="urgent" className="text-lg font-bold cursor-pointer">
                                  <span className="text-black">{t('jobOffer.emergencyAvailable')}</span>
                                </Label>
                                <p className="text-sm text-gray-500">
                                  <Badge variant="destructive" className="text-xs mt-1">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {t('jobOffer.URGENT')}
                                  </Badge>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Images */}
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Camera className="h-5 w-5 text-purple-600" />
                          <span className="text-red-600">{t('jobOffer.photos')}</span>
                        </h3>
                        <Suspense fallback={<div className="text-sm text-muted-foreground p-3 bg-gray-50 rounded-lg">{t('jobOffer.loadingUpload')}</div>}>
                          <ImageUpload
                            onImagesChange={setImages}
                            maxImages={6}
                            bucket="job-offer-images"
                            initialImages={images}
                          />
                        </Suspense>
                      </div>

                      {/* Date d'expiration */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-600" />
                          <span className="text-red-600">{t('jobOffer.expirationDate')}</span>
                        </h3>
                        <Input
                          id="expires_at"
                          type="date"
                          value={formData.expires_at}
                          onChange={(e) => handleInputChange('expires_at', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="text-base h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <Alert className="bg-blue-50 border-blue-200 text-blue-800">
                      <Check className="h-4 w-4" />
                      <AlertDescription>
                        {t('jobOffer.termsAcceptance')}
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" className="w-full h-14 text-lg font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all mt-6" disabled={loading}>
                      {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {t('jobOffer.publishOffer')}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DeposerOffreMetier;