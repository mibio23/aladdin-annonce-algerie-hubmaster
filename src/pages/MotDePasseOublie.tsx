
import React, { useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const MotDePasseOublie = () => {
  const { t } = useSafeI18nWithRouter();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    
    try {
      const { error } = await resetPassword(email);
      
      if (error) {
        setMessage({ type: 'error', text: error.message });
        setIsLoading(false);
      } else {
        setIsSubmitted(true);
        setIsLoading(false);
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('motDePasseOublie.error') });
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">
                  {t('motDePasseOublie.emailSent')}
                </CardTitle>
                <CardDescription>
                  {t('motDePasseOublie.emailSentDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    {t('motDePasseOublie.checkEmail')} <strong>{email}</strong>
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 text-center">
                    {t('motDePasseOublie.emailNotReceived')}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsSubmitted(false)}
                  >
                    {t('motDePasseOublie.resendEmail')}
                  </Button>
                </div>

                <div className="text-center">
                  <Link to="/connexion" className="text-sm text-primary hover:underline">
                    <ArrowLeft className="h-4 w-4 inline mr-1" />
                    {t('motDePasseOublie.backToLogin')}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">
                {t('motDePasseOublie.title')}
              </CardTitle>
              <CardDescription>
                {t('motDePasseOublie.subtitle')}
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
                  <Label htmlFor="email">{t('motDePasseOublie.emailLabel')}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('motDePasseOublie.emailPlaceholder')}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    {t('motDePasseOublie.instructions')}
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t('motDePasseOublie.sending') : t('motDePasseOublie.sendButton')}
                </Button>
              </form>

              <div className="mt-6 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      {t('motDePasseOublie.or')}
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <Link to="/connexion" className="text-sm text-primary hover:underline block">
                    <ArrowLeft className="h-4 w-4 inline mr-1" />
                    {t('motDePasseOublie.backToLogin')}
                  </Link>
                  <p className="text-sm text-gray-600">
                    {t('motDePasseOublie.noAccount')}{' '}
                    <Link to="/inscription" className="text-primary hover:underline">
                      {t('motDePasseOublie.signupLink')}
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              {t('motDePasseOublie.securityTip')}
            </h4>
            <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
              <li>• {t('motDePasseOublie.tip1')}</li>
              <li>• {t('motDePasseOublie.tip2')}</li>
              <li>• {t('motDePasseOublie.tip3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotDePasseOublie;
