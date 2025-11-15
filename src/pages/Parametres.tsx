import React, { useState, useEffect } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Settings, User, Bell, Shield, Globe, Palette, MapPin, Phone, UserCircle, Camera, Lock } from 'lucide-react';
import { ProfileAvatar } from '@/components/profile/ProfileAvatar';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { wilayas } from '@/data/wilayaData';

const Parametres = () => {
  const { t } = useSafeI18nWithRouter();
  const { user } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile();
  const { toast } = useToast();
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    // Confidentialité
    profileVisible: true,
    phoneVisible: true, // Toujours activé pour éviter les arnaques
    emailVisible: true, // Toujours activé pour éviter les arnaques
    // Préférences
    language: 'fr',
    currency: 'DZD',
    theme: 'system',
    // Localisation
    searchRadius: '10'
  });
  const [exportingData, setExportingData] = useState(false);

  useEffect(() => {
    if (profile?.date_of_birth) {
      setDateOfBirth(new Date(profile.date_of_birth));
    }
  }, [profile]);

  const handleProfileUpdate = async (field: string, value: any) => {
    if (!profile) return;
    
    // Check if trying to update locked fields
    if (profile.profile_locked && (field === 'first_name' || field === 'last_name')) {
      toast({
        title: t('profile.error'),
        description: t('profile.fieldsLocked'),
        variant: 'destructive',
      });
      return;
    }

    const updates: any = { [field]: value };
    
    // Auto-lock profile when first_name and last_name are both set
    if ((field === 'first_name' || field === 'last_name') && 
        profile.first_name && profile.last_name && 
        value && !profile.profile_locked) {
      updates.profile_locked = true;
    }

    await updateProfile(updates);
  };

  const handleDateOfBirthChange = (date: Date | undefined) => {
    setDateOfBirth(date);
    if (date) {
      handleProfileUpdate('date_of_birth', format(date, 'yyyy-MM-dd'));
    }
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleExportData = async () => {
    if (!user) return;

    setExportingData(true);
    try {
      // Récupérer les données utilisateur
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      const { data: announcementsData } = await supabase
        .from('announcements')
        .select('*')
        .eq('user_id', user.id);

      const exportData = {
        profile: profileData,
        announcements: announcementsData,
        exportDate: new Date().toISOString(),
      };

      // Créer et télécharger le fichier JSON
      const dataStr = JSON.stringify(exportData, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `donnees_compte_${format(new Date(), 'yyyy-MM-dd')}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();

      toast({
        title: t('parametres.dataExported'),
        description: t('parametres.dataExportedDesc'),
      });
    } catch (error: any) {
      toast({
        title: t('parametres.error'),
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setExportingData(false);
    }
  };

  if (profileLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t('profile.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{t('parametres.title')}</CardTitle>
                  <CardDescription>{t('parametres.subtitle')}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                {t('parametres.profile')}
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                {t('parametres.notifications')}
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Shield className="h-4 w-4 mr-2" />
                {t('parametres.privacy')}
              </TabsTrigger>
              <TabsTrigger value="preferences">
                <Globe className="h-4 w-4 mr-2" />
                {t('parametres.preferences')}
              </TabsTrigger>
              <TabsTrigger value="advanced">
                <Palette className="h-4 w-4 mr-2" />
                {t('parametres.advanced')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              {/* Photo de profil */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    {t('profile.profilePhoto')}
                  </CardTitle>
                  <CardDescription>{t('profile.profilePhotoDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <ProfileAvatar size="xl" editable={true} />
                  </div>
                </CardContent>
              </Card>

              {/* Informations personnelles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5" />
                    {t('profile.personalInfo')}
                    {profile?.profile_locked && (
                      <Lock className="h-4 w-4 text-muted-foreground ml-2" />
                    )}
                  </CardTitle>
                  <CardDescription>
                    {t('profile.personalInfoDesc')}
                    {profile?.profile_locked && (
                      <div className="text-amber-600 text-sm mt-1 flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        {t('profile.fieldsLocked')}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('profile.firstName')} *</Label>
                      <Input
                        id="firstName"
                        value={profile?.first_name || ''}
                        onChange={(event) => handleProfileUpdate('first_name', event.target.value)}
                        placeholder={t('profile.firstNamePlaceholder')}
                        disabled={profile?.profile_locked}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('profile.lastName')} *</Label>
                      <Input
                        id="lastName"
                        value={profile?.last_name || ''}
                        onChange={(e) => handleProfileUpdate('last_name', e.target.value)}
                        placeholder={t('profile.lastNamePlaceholder')}
                        disabled={profile?.profile_locked}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nickname">{t('profile.nickname')}</Label>
                    <Input
                      id="nickname"
                      value={profile?.nickname || ''}
                      onChange={(e) => handleProfileUpdate('nickname', e.target.value)}
                      placeholder={t('profile.nicknamePlaceholder')}
                    />
                    <p className="text-xs text-muted-foreground">{t('profile.nicknameDesc')}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{t('profile.gender')}</Label>
                      <Select 
                        value={profile?.gender || ''} 
                        onValueChange={(value) => handleProfileUpdate('gender', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('profile.selectGender')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homme">{t('profile.homme')}</SelectItem>
                          <SelectItem value="femme">{t('profile.femme')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>{t('profile.dateOfBirth')}</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dateOfBirth && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateOfBirth ? format(dateOfBirth, "dd/MM/yyyy") : t('profile.dateOfBirthPlaceholder')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dateOfBirth}
                            onSelect={handleDateOfBirthChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession">{t('profile.profession')}</Label>
                    <Input
                      id="profession"
                      value={profile?.profession || ''}
                      onChange={(e) => handleProfileUpdate('profession', e.target.value)}
                      placeholder={t('profile.professionPlaceholder')}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Informations de contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    {t('profile.contactInfo')}
                  </CardTitle>
                  <CardDescription>{t('profile.contactInfoDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('profile.phone')} *</Label>
                    <Input
                      id="phone"
                      value={profile?.phone || ''}
                      onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                      placeholder={t('profile.phonePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phoneSecondary">{t('profile.phoneSecondary')}</Label>
                    <Input
                      id="phoneSecondary"
                      value={profile?.phone_secondary || ''}
                      onChange={(e) => handleProfileUpdate('phone_secondary', e.target.value)}
                      placeholder={t('profile.phoneSecondaryPlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phoneTertiary">{t('profile.phoneTertiary')}</Label>
                    <Input
                      id="phoneTertiary"
                      value={profile?.phone_tertiary || ''}
                      onChange={(e) => handleProfileUpdate('phone_tertiary', e.target.value)}
                      placeholder={t('profile.phoneTertiaryPlaceholder')}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Informations de localisation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {t('profile.locationInfo')}
                  </CardTitle>
                  <CardDescription>{t('profile.locationInfoDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">{t('profile.address')}</Label>
                    <Input
                      id="address"
                      value={profile?.address || ''}
                      onChange={(e) => handleProfileUpdate('address', e.target.value)}
                      placeholder={t('profile.addressPlaceholder')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="commune">{t('profile.commune')} *</Label>
                      <Input
                        id="commune"
                        value={profile?.commune || ''}
                        onChange={(e) => handleProfileUpdate('commune', e.target.value)}
                        placeholder={t('profile.communePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>{t('profile.wilaya')} *</Label>
                      <Select 
                        value={profile?.wilaya || ''} 
                        onValueChange={(value) => handleProfileUpdate('wilaya', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('profile.wilayaPlaceholder')} />
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

                  <div className="space-y-2">
                    <Label htmlFor="country">{t('profile.country')}</Label>
                    <Select 
                      value={profile?.country || 'Algeria'} 
                      onValueChange={(value) => handleProfileUpdate('country', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t('profile.countryPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Algeria">Algérie</SelectItem>
                        <SelectItem value="Morocco">Maroc</SelectItem>
                        <SelectItem value="Tunisia">Tunisie</SelectItem>
                        <SelectItem value="France">France</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Biographie */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('profile.biography')}</CardTitle>
                  <CardDescription>{t('profile.biographyDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="bio">{t('profile.bio')}</Label>
                    <Textarea
                      id="bio"
                      value={profile?.bio || ''}
                      onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                      placeholder={t('profile.bioPlaceholder')}
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      {profile?.bio?.length || 0}/500 {t('profile.characters')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('parametres.notificationSettings')}</CardTitle>
                  <CardDescription>{t('parametres.notificationSettingsDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.emailNotifications')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.emailNotificationsDesc')}</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.smsNotifications')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.smsNotificationsDesc')}</p>
                    </div>
                    <Switch
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.pushNotifications')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.pushNotificationsDesc')}</p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.marketingEmails')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.marketingEmailsDesc')}</p>
                    </div>
                    <Switch
                      checked={settings.marketingEmails}
                      onCheckedChange={(checked) => handleSettingChange('marketingEmails', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('parametres.privacySettings')}</CardTitle>
                  <CardDescription>{t('parametres.privacySettingsDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.profileVisible')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.profileVisibleDesc')}</p>
                    </div>
                    <Switch
                      checked={true}
                      disabled={true}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.phoneVisible')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.phoneVisibleDesc')}</p>
                    </div>
                    <Switch
                      checked={true}
                      disabled={true}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('parametres.emailVisible')}</Label>
                      <p className="text-sm text-muted-foreground">{t('parametres.emailVisibleDesc')}</p>
                    </div>
                    <Switch
                      checked={true}
                      disabled={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('parametres.generalPreferences')}</CardTitle>
                  <CardDescription>{t('parametres.generalPreferencesDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{t('parametres.language')}</Label>
                      <Select value={settings.language} onValueChange={(value) => handleSettingChange('language', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>{t('parametres.currency')}</Label>
                      <Select value={settings.currency} onValueChange={(value) => handleSettingChange('currency', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DZD">Dinar Algérien (DZD)</SelectItem>
                          <SelectItem value="EUR">Euro (EUR)</SelectItem>
                          <SelectItem value="USD">Dollar US (USD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{t('parametres.searchRadius')}</Label>
                    <Select value={settings.searchRadius} onValueChange={(value) => handleSettingChange('searchRadius', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 km</SelectItem>
                        <SelectItem value="10">10 km</SelectItem>
                        <SelectItem value="25">25 km</SelectItem>
                        <SelectItem value="50">50 km</SelectItem>
                        <SelectItem value="100">100 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              {/* Data Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    {t('parametres.dataManagement')}
                  </CardTitle>
                  <CardDescription>{t('parametres.dataManagementDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleExportData} 
                    disabled={exportingData}
                    className="w-full"
                  >
                    {exportingData ? t('parametres.exporting') : t('parametres.export')}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {t('parametres.exportDataDesc')}
                  </p>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Shield className="h-5 w-5" />
                    {t('parametres.accountSecurity')}
                  </CardTitle>
                  <CardDescription className="text-green-600">
                    {t('parametres.accountSecurityDesc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Lock className="h-4 w-4" />
                    {t('parametres.protected')}
                  </div>
                </CardContent>
              </Card>

              {/* Platform Safety Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    {t('parametres.platformSafety')}
                  </CardTitle>
                  <CardDescription>{t('parametres.platformSafetyDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h4 className="font-medium text-foreground">
                    {t('parametres.whyNoDelete')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('parametres.whyNoDeleteDesc')}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
