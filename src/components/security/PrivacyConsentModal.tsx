import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { usePrivacyConsent, ConsentType } from '@/hooks/usePrivacyConsent';
import { Shield, Eye, Mail } from 'lucide-react';

interface PrivacyConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requiredConsents?: ConsentType[];
  onConsentComplete?: () => void;
}

const consentConfig = {
  behavioral_tracking: {
    icon: Eye,
    title: 'Suivi comportemental',
    description: 'Nous analyserons votre comportement de navigation pour améliorer votre expérience et vous proposer du contenu pertinent.',
    required: false
  },
  data_collection: {
    icon: Shield,
    title: 'Collecte de données',
    description: 'Nous collecterons vos données de recherche et d\'interaction pour personnaliser le service et générer des statistiques anonymes.',
    required: true
  },
  marketing: {
    icon: Mail,
    title: 'Communications marketing',
    description: 'Nous pourrons vous envoyer des notifications et des recommandations personnalisées basées sur vos préférences.',
    required: false
  }
};

export const PrivacyConsentModal: React.FC<PrivacyConsentModalProps> = ({
  open,
  onOpenChange,
  requiredConsents = [],
  onConsentComplete
}) => {
  const { updateConsent, hasConsent, loading } = usePrivacyConsent();
  const [selectedConsents, setSelectedConsents] = useState<Record<ConsentType, boolean>>({
    behavioral_tracking: hasConsent('behavioral_tracking'),
    data_collection: hasConsent('data_collection'),
    marketing: hasConsent('marketing')
  });

  const handleConsentChange = (consentType: ConsentType, checked: boolean) => {
    setSelectedConsents(prev => ({
      ...prev,
      [consentType]: checked
    }));
  };

  const handleSave = async () => {
    for (const [consentType, granted] of Object.entries(selectedConsents)) {
      await updateConsent(consentType as ConsentType, granted);
    }

    onConsentComplete?.();
    onOpenChange(false);
  };

  const allRequiredConsentsGiven = requiredConsents.every(
    consent => consentConfig[consent].required ? selectedConsents[consent] : true
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Préférences de confidentialité
          </DialogTitle>
          <DialogDescription>
            Gérez vos préférences de confidentialité et de traitement des données.
            Ces paramètres vous permettent de contrôler comment nous utilisons vos informations.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {Object.entries(consentConfig).map(([consentType, config]) => {
            const Icon = config.icon;
            const isRequired = config.required;
            const isChecked = selectedConsents[consentType as ConsentType];

            return (
              <div key={consentType} className="flex items-start space-x-3 p-4 rounded-lg border">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">
                      {config.title}
                      {isRequired && <span className="text-destructive">*</span>}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {config.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Checkbox
                    id={consentType}
                    checked={isChecked}
                    onCheckedChange={(checked) => 
                      handleConsentChange(consentType as ConsentType, checked as boolean)
                    }
                    disabled={isRequired && requiredConsents.includes(consentType as ConsentType)}
                  />
                </div>
              </div>
            );
          })}

          <div className="text-xs text-muted-foreground p-4 bg-muted rounded-lg">
            <strong>Note sur la sécurité :</strong> Vos données sont protégées par des mesures de sécurité avancées incluant 
            le chiffrement, l'audit des accès, et la limitation du taux de requêtes. 
            Vous pouvez modifier ces préférences à tout moment dans les paramètres.
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Annuler
          </Button>
          <Button
            onClick={handleSave}
            disabled={loading || !allRequiredConsentsGiven}
          >
            {loading ? 'Enregistrement...' : 'Enregistrer les préférences'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};