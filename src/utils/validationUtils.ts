
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  // Format algérien : +213 ou 0 suivi de 9 chiffres
  const phoneRegex = /^(\+213|0)[5-7]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const isValidPassword = (password: string): boolean => {
  // Au moins 8 caractères, une majuscule, une minuscule, un chiffre
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateRequired = (value: string): string | null => {
  return value.trim() ? null : 'Ce champ est requis';
};

export const validateMinLength = (value: string, minLength: number): string | null => {
  return value.length >= minLength ? null : `Minimum ${minLength} caractères requis`;
};

export const validateMaxLength = (value: string, maxLength: number): string | null => {
  return value.length <= maxLength ? null : `Maximum ${maxLength} caractères autorisés`;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return 'Email requis';
  if (!isValidEmail(email)) return 'Format d\'email invalide';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return 'Numéro de téléphone requis';
  if (!isValidPhone(phone)) return 'Format de téléphone invalide';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Mot de passe requis';
  if (!isValidPassword(password)) {
    return 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre';
  }
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword) return 'Confirmation du mot de passe requise';
  if (password !== confirmPassword) return 'Les mots de passe ne correspondent pas';
  return null;
};
