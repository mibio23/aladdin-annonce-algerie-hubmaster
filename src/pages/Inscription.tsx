
import React, { useState } from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import RegisterForm from '@/components/auth/RegisterForm';
import Captcha from '@/components/ui/captcha';
import { supabase } from '@/integrations/supabase/client';

const Inscription = () => {
  const { t } = useSafeI18nWithRouter();
  const { loading: authLoading } = useAuth();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [_isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  const handleOAuthSignIn = async (provider: 'google' | 'facebook') => {
    try {
      setOauthLoading(true);
      setMessage(null);
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        setMessage({ type: 'error', text: error.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('auth.errors.oauthFailed') });
    } finally {
      setOauthLoading(false);
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
                {t('inscription.title')}
              </CardTitle>
              <CardDescription>
                {t('inscription.subtitle')}
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

              <RegisterForm onMessage={setMessage} />

              <div className="mt-6 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      {t('auth.orContinueWith')}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full"
                    onClick={() => handleOAuthSignIn('google')}
                    disabled={oauthLoading}
                  >
                    {oauthLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    )}
                    {t('auth.continueWithGoogle')}
                  </Button>
                </div>
              </div>

              <Captcha 
                onValidation={setIsCaptchaValid}
                className="mt-4"
              />

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {t('auth.alreadyAccount')}{' '}
                  <Link to="/connexion" className="text-primary hover:underline">
                    {t('auth.signIn')}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
