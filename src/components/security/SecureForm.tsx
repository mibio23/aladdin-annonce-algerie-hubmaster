import React, { useState, useCallback } from 'react';
import { validateUserInput } from '@/utils/securityValidators';
import { useSecurityAudit } from '@/hooks/useSecurityAudit';

interface SecureFormProps {
  onSubmit: (data: Record<string, string>) => Promise<void>;
  fields: Array<{
    name: string;
    type: 'text' | 'email' | 'password' | 'search';
    label: string;
    required?: boolean;
  }>;
  formType: string;
  children?: React.ReactNode;
}

export const SecureForm: React.FC<SecureFormProps> = ({
  onSubmit,
  fields,
  formType,
  children
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { logSecurityEvent } = useSecurityAudit();

  const handleInputChange = useCallback((name: string, value: string) => {
    // Validation en temps réel avec nettoyage
    const validation = validateUserInput({
      userText: value,
      searchQuery: name === 'search' ? value : undefined
    });

    if (!validation.isValid) {
      setErrors(prev => ({
        ...prev,
        [name]: validation.errors
      }));
      
      // Log des tentatives d'injection
      logSecurityEvent({
        actionType: 'input_validation_failed',
        resourceType: 'form_input',
        resourceId: `${formType}_${name}`,
        metadata: { 
          field: name, 
          errors: validation.errors,
          timestamp: new Date().toISOString()
        }
      });
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  }, [formType, logSecurityEvent]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Validation complète avant soumission
      const fullValidation = validateUserInput({
        userText: Object.values(formData).join(' '),
        searchQuery: formData.search
      });

      if (!fullValidation.isValid) {
        setErrors({ global: fullValidation.errors });
        
        logSecurityEvent({
          actionType: 'form_submission_blocked',
          resourceType: 'secure_form',
          resourceId: formType,
          metadata: { 
            errors: fullValidation.errors,
            timestamp: new Date().toISOString()
          }
        });
        
        return;
      }

      // Log de soumission sécurisée
      logSecurityEvent({
        actionType: 'secure_form_submitted',
        resourceType: 'secure_form',
        resourceId: formType,
        metadata: { 
          fields: Object.keys(formData),
          timestamp: new Date().toISOString()
        }
      });

      await onSubmit(formData);
      
    } catch (error) {
      logSecurityEvent({
        actionType: 'form_submission_error',
        resourceType: 'secure_form',
        resourceId: formType,
        metadata: { 
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        }
      });
      
      setErrors({ global: ['Erreur lors de la soumission. Veuillez réessayer.'] });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, formType, isSubmitting, logSecurityEvent, onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.global && (
        <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
          {errors.global.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          <label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </label>
          
          <input
            id={field.name}
            type={field.type}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            maxLength={field.type === 'search' ? 100 : 500}
          />
          
          {errors[field.name] && (
            <div className="text-sm text-destructive">
              {errors[field.name].map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {children}
      
      <button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
        className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};