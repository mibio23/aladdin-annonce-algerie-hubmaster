import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ValidationRule {
  field: string;
  validate: (value: any) => boolean;
  message: string;
}

interface FormValidatorProps {
  data: any;
  rules: ValidationRule[];
  onValidationChange?: (isValid: boolean) => void;
}

export const FormValidator: React.FC<FormValidatorProps> = ({ 
  data, 
  rules, 
  onValidationChange 
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [suggestions, setSuggestions] = useState<{ [key: string]: string }>({});
  
  useEffect(() => {
    const newErrors: { [key: string]: string } = {};
    const newSuggestions: { [key: string]: string } = {};
    let isValid = true;
    
    rules.forEach(rule => {
      const value = data[rule.field];
      if (!rule.validate(value)) {
        newErrors[rule.field] = rule.message;
        isValid = false;
      } else {
        // Ajouter des suggestions basées sur les données
        if (rule.field === 'title' && value.length < 10) {
          newSuggestions[rule.field] = "Un titre plus détaillé pourrait attirer plus d'acheteurs";
        }
        if (rule.field === 'description' && value.length < 50) {
          newSuggestions[rule.field] = "Ajoutez plus de détails pour améliorer la visibilité";
        }
        if (rule.field === 'price' && parseFloat(value) > 100000) {
          newSuggestions[rule.field] = "Pour les articles coûteux, incluez des photos de haute qualité";
        }
        if (rule.field === 'name' && value.length < 3) {
          newSuggestions[rule.field] = "Un nom plus descriptif pourrait améliorer la visibilité de votre boutique";
        }
        if (rule.field === 'phoneNumbers' && (!value || value.length === 0 || (value.length > 0 && !value[0]))) {
          newSuggestions[rule.field] = "Ajoutez au moins un numéro de téléphone pour que les clients puissent vous contacter";
        }
      }
    });
    
    setErrors(newErrors);
    setSuggestions(newSuggestions);
    onValidationChange?.(isValid);
  }, [data, rules, onValidationChange]);
  
  return (
    <div className="space-y-2">
      {Object.entries(errors).map(([field, message]) => (
        <Alert key={field} variant="destructive" className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      ))}
      {Object.entries(suggestions).map(([field, message]) => (
        <Alert key={field} variant="default" className="flex items-center gap-2 bg-blue-50 border-blue-200">
          <CheckCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">{message}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
};