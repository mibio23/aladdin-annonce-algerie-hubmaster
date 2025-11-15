import React, { useState, useEffect } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw, Calculator } from 'lucide-react';

interface CaptchaProps {
  onValidation: (isValid: boolean) => void;
  className?: string;
}

const Captcha: React.FC<CaptchaProps> = ({ onValidation, className = '' }) => {
  const { t } = useSafeI18nWithRouter();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const generateCaptcha = () => {
    const operators = ['+', '-', '*'];
    const selectedOperator = operators[Math.floor(Math.random() * operators.length)];
    let number1, number2;
    
    if (selectedOperator === '*') {
      // Pour la multiplication, utiliser des nombres plus petits
      number1 = Math.floor(Math.random() * 9) + 1;
      number2 = Math.floor(Math.random() * 9) + 1;
    } else if (selectedOperator === '-') {
      // Pour la soustraction, s'assurer que le résultat est positif
      number1 = Math.floor(Math.random() * 20) + 10;
      number2 = Math.floor(Math.random() * 10) + 1;
    } else {
      // Pour l'addition
      number1 = Math.floor(Math.random() * 20) + 1;
      number2 = Math.floor(Math.random() * 20) + 1;
    }

    setNum1(number1);
    setNum2(number2);
    setOperator(selectedOperator);
    setUserAnswer('');
    setIsValid(false);
    setShowError(false);
  };

  const calculateAnswer = () => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 0;
    }
  };

  const handleInputChange = (value: string) => {
    setUserAnswer(value);
    setShowError(false);
    
    const correctAnswer = calculateAnswer();
    const userValue = parseInt(value);
    const valid = userValue === correctAnswer;
    
    setIsValid(valid);
    onValidation(valid);
  };

  const handleRefresh = () => {
    generateCaptcha();
  };


  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className={`space-y-3 p-4 border rounded-lg bg-muted/50 ${className}`}>
      <div className="flex items-center gap-2">
        <Calculator className="h-4 w-4 text-primary" />
        <Label className="text-sm font-medium">{t('captcha.title')}</Label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRefresh}
          className="ml-auto h-7 w-7 p-0"
          title={t('captcha.refresh')}
        >
          <RefreshCw className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{t('captcha.instruction')}</p>
        
        <div className="flex items-center gap-3 justify-center">
          <div className="flex items-center gap-2 text-lg font-mono bg-background border rounded px-3 py-2">
            <span className="font-bold text-primary">{num1}</span>
            <span className="text-muted-foreground font-bold">{operator}</span>
            <span className="font-bold text-primary">{num2}</span>
            <span className="text-muted-foreground">=</span>
          </div>
          
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={t('captcha.placeholder')}
            className={`w-24 text-center font-mono ${isValid ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''} ${showError ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
            dir="ltr"
          />
        </div>
        
        {showError && (
          <p className="text-sm text-red-500 text-center">{t('captcha.error')}</p>
        )}
        
        {isValid && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center">✓ {t('auth.success.validAnswer') || 'صحيح!'}</p>
        )}
      </div>
    </div>
  );
};

export default Captcha;