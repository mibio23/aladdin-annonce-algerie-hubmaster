import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSecureContact } from '@/hooks/useSecureContact';
import { useToast } from '@/hooks/use-toast';
import { Shield, Mail, User, MessageSquare } from 'lucide-react';

interface SecureContactFormProps {
  announcementId: string;
  announcementTitle: string;
  onSuccess?: () => void;
}

export const SecureContactForm: React.FC<SecureContactFormProps> = ({
  announcementId,
  announcementTitle,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    requesterEmail: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { submitContactRequest, loading } = useSecureContact();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.requesterName.trim()) {
      newErrors.requesterName = 'Le nom est requis';
    } else if (formData.requesterName.length < 2) {
      newErrors.requesterName = 'Le nom doit contenir au moins 2 caractères';
    }

    if (!formData.requesterEmail.trim()) {
      newErrors.requesterEmail = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.requesterEmail)) {
      newErrors.requesterEmail = 'Format d\'email invalide';
    }

    if (formData.message.length > 500) {
      newErrors.message = 'Le message ne peut pas dépasser 500 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const result = await submitContactRequest({
      announcementId,
      requesterEmail: formData.requesterEmail,
      requesterName: formData.requesterName,
      message: formData.message
    });

    if (result.success) {
      toast({
        title: 'Demande de contact envoyée',
        description: 'Votre demande a été transmise au vendeur. Il vous contactera directement par email.',
      });
      
      setFormData({
        requesterName: '',
        requesterEmail: '',
        message: ''
      });
      
      onSuccess?.();
    } else {
      toast({
        title: 'Erreur',
        description: 'Impossible d\'envoyer votre demande. Veuillez réessayer.',
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Contact sécurisé
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Contactez le vendeur pour: {announcementTitle}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="requesterName" className="text-sm font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              Votre nom *
            </label>
            <Input
              id="requesterName"
              type="text"
              value={formData.requesterName}
              onChange={(e) => handleInputChange('requesterName', e.target.value)}
              placeholder="Votre nom complet"
              className={errors.requesterName ? 'border-destructive' : ''}
            />
            {errors.requesterName && (
              <p className="text-sm text-destructive">{errors.requesterName}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="requesterEmail" className="text-sm font-medium flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Votre email *
            </label>
            <Input
              id="requesterEmail"
              type="email"
              value={formData.requesterEmail}
              onChange={(e) => handleInputChange('requesterEmail', e.target.value)}
              placeholder="votre.email@exemple.com"
              className={errors.requesterEmail ? 'border-destructive' : ''}
            />
            {errors.requesterEmail && (
              <p className="text-sm text-destructive">{errors.requesterEmail}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Message (optionnel)
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Votre message au vendeur..."
              rows={3}
              maxLength={500}
              className={errors.message ? 'border-destructive' : ''}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {errors.message && (
                <span className="text-destructive">{errors.message}</span>
              )}
              <span className="ml-auto">{formData.message.length}/500</span>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <Shield className="h-3 w-3 inline mr-1" />
              Votre demande est sécurisée. Le vendeur recevra vos coordonnées par email 
              et pourra vous contacter directement. Vos données ne sont pas partagées avec des tiers.
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};