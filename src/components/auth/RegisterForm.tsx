import React, { useState } from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Mail, Lock, User, Phone, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

interface RegisterFormProps {
  onMessage: (message: { type: 'success' | 'error'; text: string } | null) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onMessage }) => {
  const { t } = useSafeI18nWithRouter();
  const { signUp } = useAuth();
  const { getLocalizedPath } = useLanguageNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptNewsletter: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      onMessage({ type: 'error', text: t('auth.errors.passwordMismatch') });
      return false;
    }

    if (formData.password.length < 6) {
      onMessage({ type: 'error', text: t('auth.errors.passwordTooShort') });
      return false;
    }

    if (!formData.acceptTerms) {
      onMessage({ type: 'error', text: t('auth.errors.acceptTerms') });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onMessage(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const metadata = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        full_name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: formData.phone,
        gender: formData.gender,
        accept_newsletter: formData.acceptNewsletter
      };

      const { error } = await signUp(formData.email, formData.password, metadata);
      
      if (error) {
        let errorMessage = t('auth.errors.signupFailed');
        
        if (error.message.includes('User already registered')) {
          errorMessage = t('auth.errors.userExists');
        } else if (error.message.includes('Password should be at least')) {
          errorMessage = t('auth.errors.passwordTooShort');
        } else if (error.message.includes('Invalid email')) {
          errorMessage = t('auth.errors.invalidEmail');
        }
        
        onMessage({ type: 'error', text: errorMessage });
      } else {
        onMessage({ 
          type: 'success', 
          text: t('auth.success.signupSuccess') 
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gender: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
          acceptNewsletter: false
        });
        
        // Rediriger vers la page de connexion après inscription réussie
        setTimeout(() => {
          window.location.href = getLocalizedPath('/connexion');
        }, 2000);
      }
    } catch (error) {
      onMessage({ type: 'error', text: t('auth.errors.signupFailed') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">{t('auth.firstName')} *</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="firstName"
              type="text"
              placeholder={t('auth.firstNamePlaceholder')}
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">{t('auth.lastName')} *</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="lastName"
              type="text"
              placeholder={t('auth.lastNamePlaceholder')}
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t('auth.email')} *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder={t('auth.emailPlaceholder')}
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t('auth.phone')}</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="phone"
            type="tel"
            placeholder={t('auth.phonePlaceholder')}
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t('auth.gender')}</Label>
        <RadioGroup
          value={formData.gender}
          onValueChange={(value) => handleInputChange('gender', value)}
          className="flex flex-row space-x-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="homme" id="homme" />
            <Label htmlFor="homme">{t('auth.male')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="femme" id="femme" />
            <Label htmlFor="femme">{t('auth.female')}</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t('auth.password')} *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t('auth.passwordPlaceholder')}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">{t('auth.confirmPassword')} *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder={t('auth.confirmPasswordPlaceholder')}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
            required
          />
          <Label htmlFor="acceptTerms" className="text-sm">
            {t('auth.acceptTerms')}{' '}
            <a href="/conditions-generales" className="text-primary hover:underline">
              {t('auth.terms')}
            </a>
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="acceptNewsletter"
            checked={formData.acceptNewsletter}
            onCheckedChange={(checked) => handleInputChange('acceptNewsletter', checked as boolean)}
          />
          <Label htmlFor="acceptNewsletter" className="text-sm">
            {t('auth.acceptNewsletter')}
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading || !formData.acceptTerms}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t('auth.signUp')}
      </Button>
    </form>
  );
};

export default RegisterForm;
