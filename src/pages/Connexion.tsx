
import React, { useState } from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Captcha from '@/components/ui/captcha';
import { supabase } from '@/integrations/supabase/client';
const Connexion = () => {
  const { t } = useSafeI18nWithRouter();
  const { signIn, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setMessage({ type: 'error', text: t('captcha.error') });
      return;
    }
    
    try {
      const { error } = await signIn(formData.email, formData.password);
      if (error) {
        let errorMessage = t('auth.errors.loginFailed');
        
        if (error.message.includes('Invalid login credentials')) {
          errorMessage = t('auth.errors.invalidCredentials');
        } else if (error.message.includes('Email not confirmed')) {
          errorMessage = t('auth.errors.emailNotConfirmed');
        }
        
        setMessage({ type: 'error', text: errorMessage });
      } else {
        setMessage({ type: 'success', text: t('auth.success.loginSuccess') });
        // Navigation sera gérée par AuthContext
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('auth.errors.loginFailed') });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cleanupAuthState = () => {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          sessionStorage.removeItem(key);
        }
      });
    } catch { /* empty */ }
  };

  const handleOAuthSignIn = async (provider: 'google' | 'facebook') => {
    try {
      cleanupAuthState();
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch { /* empty */ }
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });
      if (error) {
        console.error('OAuth sign-in error:', error.message);
      }
    } catch (err) {
      console.error('Unexpected OAuth error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground bg-background border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('backToHome')}
            </Link>
          </div>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">
                {t('connexion.title')}
              </CardTitle>
              <CardDescription>
                {t('connexion.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {message && (
                <Alert className={`mb-4 ${message.type === 'error' ? 'border-destructive' : 'border-green-500'}`}>
                  <AlertDescription className={message.type === 'error' ? 'text-destructive' : 'text-green-600'}>
                    {message.text}
                  </AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('connexion.email')}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('connexion.emailPlaceholder')}
                      value={formData.email}
                      onChange={(event) => handleInputChange('email', event.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t('connexion.password')}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t('connexion.passwordPlaceholder')}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="rememberMe" className="text-sm">
                      {t('connexion.rememberMe')}
                    </Label>
                  </div>
                  <Link to="/mot-de-passe-oublie" className="text-sm text-primary hover:underline">
                    {t('connexion.forgotPassword')}
                  </Link>
                </div>

                <Captcha 
                  onValidation={setIsCaptchaValid}
                  className="mt-4"
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={!isCaptchaValid || loading}
                >
                  {loading ? t('auth.loading') : t('connexion.submit')}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      {t('connexion.or')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleOAuthSignIn('google')}
                  >
                    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                        <path fill="hsl(4 83% 57%)" d="M12 10.2v3.6h5.09c-.22 1.17-.9 2.16-1.9 2.83l3.08 2.39c1.8-1.66 2.83-4.1 2.83-6.99 0-.67-.06-1.31-.18-1.94H12z"/>
                        <path fill="hsl(137 56% 44%)" d="M6.53 14.32c-.31-.93-.49-1.93-.49-2.95s.18-2.02.49-2.95L3.36 5.98A9.996 9.996 0 0 0 2 11.37c0 1.62.39 3.15 1.08 4.49l3.45-1.54z"/>
                        <path fill="hsl(45 95% 51%)" d="M12 22c2.7 0 4.96-.89 6.61-2.41l-3.08-2.39c-.86.57-1.97.91-3.53.91-2.71 0-5.01-1.83-5.83-4.29l-3.45 1.54C4.27 19.49 7.83 22 12 22z"/>
                        <path fill="hsl(217 89% 60%)" d="M22 12.04c0-.66-.06-1.3-.18-1.93H12v3.64h5.09c-.23 1.16-.9 2.15-1.9 2.82v.02l3.08 2.39C20.83 17.89 22 15.21 22 12.04z"/>
                      </svg>
                    </span>
                    {t('connexion.google') || 'Continuer avec Google'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleOAuthSignIn('facebook')}
                  >
                      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                          <path fill="hsl(214 90% 52%)" d="M13 3h4a1 1 0 0 1 1 1v3h-3c-.55 0-1 .45-1 1v3h4l-1 4h-3v6h-4v-6H7v-4h3V8a5 5 0 0 1 5-5Z"/>
                        </svg>
                      </span>
                    {t('connexion.facebook') || 'Continuer avec Facebook'}
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('connexion.noAccount')}{' '}
                    <Link to="/inscription" className="text-primary hover:underline">
                      {t('connexion.signupLink')}
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
