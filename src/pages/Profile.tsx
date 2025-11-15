import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarDays, MapPin, Briefcase, User, Mail, Phone, Save, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ProfileAvatar } from '@/components/profile/ProfileAvatar';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, loading, saving, updateProfile } = useProfile();
  const { t } = useSafeI18nWithRouter();
  const [isEditing, setIsEditing] = useState(false);

  const profileSchema = z.object({
    display_name: z.string().min(2, t('profile.validation.nameMinLength')),
    first_name: z.string().min(2, t('profile.validation.nameMinLength')),
    last_name: z.string().min(2, t('profile.validation.nameMinLength')),
    gender: z.enum(['homme', 'femme']).nullable(),
    phone: z.string().optional(),
    date_of_birth: z.string().optional(),
    location: z.string().optional(),
    profession: z.string().max(100, t('profile.validation.professionMaxLength')).optional(),
    bio: z.string().max(500, t('profile.validation.bioMaxLength')).optional(),
  });

  type ProfileFormData = z.infer<typeof profileSchema>;

  // Helper function to safely convert gender string to expected enum or null
  const normalizeGender = (gender: string | null): "homme" | "femme" | null => {
    if (!gender) return null;
    const lowerGender = gender.toLowerCase();
    if (lowerGender === 'homme' || lowerGender === 'femme') {
      return lowerGender as "homme" | "femme";
    }
    return null;
  };

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      display_name: profile?.display_name || '',
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
      gender: normalizeGender(profile?.gender),
      phone: profile?.phone || '',
      date_of_birth: profile?.date_of_birth || '',
      location: profile?.location || '',
      profession: profile?.profession || '',
      bio: profile?.bio || '',
    },
  });

  React.useEffect(() => {
    if (profile) {
      form.reset({
        display_name: profile.display_name || '',
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        gender: normalizeGender(profile.gender),
        phone: profile.phone || '',
        date_of_birth: profile.date_of_birth || '',
        location: profile.location || '',
        profession: profile.profession || '',
        bio: profile.bio || '',
      });
    }
  }, [profile, form]);

  const onSubmit = async (data: ProfileFormData) => {
    const success = await updateProfile(data);
    if (success) {
      setIsEditing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>{t('profile.loading')}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="text-muted-foreground hover:text-foreground"
            >
              ← {t('navigation.backToDashboard')}
            </Button>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {t('profile.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('profile.subtitle')}
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Profile Photo Section */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <User className="h-5 w-5 text-primary" />
                      {t('profile.profilePhoto')}
                    </CardTitle>
                    <CardDescription>
                      {t('profile.profilePhotoDesc')}
                    </CardDescription>
                  </div>
                  {!isEditing && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      {t('profile.editProfile')}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <ProfileAvatar size="xl" editable={isEditing} />
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">
                      {profile?.display_name || 
                       `${profile?.first_name} ${profile?.last_name}`.trim() || 
                       t('profile.user')}
                    </h3>
                    {user?.email && (
                      <p className="text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
                        <Mail className="h-4 w-4" />
                        {user.email}
                      </p>
                    )}
                    {profile?.location && (
                      <p className="text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
                        <MapPin className="h-4 w-4" />
                        {profile.location}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {t('profile.personalInfo')}
                </CardTitle>
                <CardDescription>
                  {t('profile.personalInfoDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.firstName')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('profile.firstNamePlaceholder')} 
                            {...field} 
                            disabled={!isEditing}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.lastName')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('profile.lastNamePlaceholder')} 
                            {...field} 
                            disabled={!isEditing}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="display_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('profile.displayName')}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('profile.displayNamePlaceholder')} 
                          {...field} 
                          disabled={!isEditing}
                          className="bg-background"
                        />
                      </FormControl>
                      <FormDescription>
                        {t('profile.displayNameDesc')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.gender')}</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value || ''} 
                          disabled={!isEditing}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder={t('profile.selectGender')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="homme">{t('profile.homme')}</SelectItem>
                            <SelectItem value="femme">{t('profile.femme')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.phone')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('profile.phonePlaceholder')} 
                            {...field} 
                            disabled={!isEditing}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Additional Details */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {t('profile.personalDetails')}
                </CardTitle>
                <CardDescription>
                  {t('profile.personalDetailsDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.dateOfBirth')}</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                            disabled={!isEditing}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('profile.location')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('profile.locationPlaceholder')} 
                            {...field} 
                            disabled={!isEditing}
                            className="bg-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('profile.profession')}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('profile.professionPlaceholder')} 
                          {...field} 
                          disabled={!isEditing}
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('profile.bio')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('profile.bioPlaceholder')}
                          className="resize-none bg-background"
                          rows={4}
                          {...field}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormDescription>
                        {field.value?.length || 0}/500 {t('profile.characters')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {isEditing && (
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        form.reset();
                      }}
                      disabled={saving}
                    >
                      {t('profile.cancel')}
                    </Button>
                    <Button
                      type="submit"
                      disabled={saving}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t('profile.saving')}
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          {t('profile.save')}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
