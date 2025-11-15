import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Save, RefreshCw, Key, Eye, EyeOff, MapPin, Wallet, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PaymentSettings {
  enabled: boolean;
  test_mode: boolean;
  currency: string;
  featured_ad_price: number;
  urgent_ad_price: number;
}

interface AlgerianPaymentSettings {
  enabled: boolean;
  test_mode: boolean;
  currency: string;
  featured_ad_price: number;
  urgent_ad_price: number;
  supported_cards: string[];
}

interface PayPalPaymentSettings {
  enabled: boolean;
  test_mode: boolean;
  currency: string;
  featured_ad_price: number;
  urgent_ad_price: number;
}

interface CardPaymentSettings {
  enabled: boolean;
  test_mode: boolean;
  currency: string;
  featured_ad_price: number;
  urgent_ad_price: number;
  supported_cards: string[];
  gateway_provider: string;
}

const PaymentSettingsPanel: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSecret, setSavingSecret] = useState(false);
  const [stripeSettings, setStripeSettings] = useState<PaymentSettings>({
    enabled: false,
    test_mode: true,
    currency: "dzd",
    featured_ad_price: 500,
    urgent_ad_price: 300
  });
  const [isStripeActive, setIsStripeActive] = useState(false);
  const [stripeSecretKey, setStripeSecretKey] = useState("");
  const [showSecretKey, setShowSecretKey] = useState(false);
  
  // Algerian Payment System State
  const [algerianSettings, setAlgerianSettings] = useState<AlgerianPaymentSettings>({
    enabled: false,
    test_mode: true,
    currency: "dzd",
    featured_ad_price: 500,
    urgent_ad_price: 300,
    supported_cards: ["eddahabia", "cib"]
  });
  const [isAlgerianActive, setIsAlgerianActive] = useState(false);
  const [algerianApiKey, setAlgerianApiKey] = useState("");
  const [showAlgerianKey, setShowAlgerianKey] = useState(false);
  
  // PayPal Payment System State
  const [paypalSettings, setPaypalSettings] = useState<PayPalPaymentSettings>({
    enabled: false,
    test_mode: true,
    currency: "usd",
    featured_ad_price: 5,
    urgent_ad_price: 3
  });
  const [isPaypalActive, setIsPaypalActive] = useState(false);
  const [paypalClientId, setPaypalClientId] = useState("");
  const [paypalClientSecret, setPaypalClientSecret] = useState("");
  const [showPaypalSecret, setShowPaypalSecret] = useState(false);
  
  // Card Payment System State
  const [cardSettings, setCardSettings] = useState<CardPaymentSettings>({
    enabled: false,
    test_mode: true,
    currency: "dzd",
    featured_ad_price: 500,
    urgent_ad_price: 300,
    supported_cards: ["visa", "mastercard"],
    gateway_provider: "custom"
  });
  const [isCardActive, setIsCardActive] = useState(false);
  const [cardGatewayApiKey, setCardGatewayApiKey] = useState("");
  const [cardMerchantId, setCardMerchantId] = useState("");
  const [showCardSecret, setShowCardSecret] = useState(false);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      
      // Fetch Stripe settings
      const { data: stripeData, error: stripeError } = await supabase
        .from('site_settings')
        .select('*')
        .eq('setting_key', 'stripe_payments')
        .single();

      if (stripeError && stripeError.code !== 'PGRST116') {
        throw stripeError;
      }

      if (stripeData) {
        setStripeSettings(stripeData.setting_value as unknown as PaymentSettings);
        setIsStripeActive(stripeData.is_active);
      }

      // Fetch Algerian payment settings
      const { data: algerianData, error: algerianError } = await supabase
        .from('site_settings')
        .select('*')
        .eq('setting_key', 'algerian_payments')
        .single();

      if (algerianError && algerianError.code !== 'PGRST116') {
        throw algerianError;
      }

      if (algerianData) {
        setAlgerianSettings(algerianData.setting_value as unknown as AlgerianPaymentSettings);
        setIsAlgerianActive(algerianData.is_active);
      }

      // Fetch PayPal payment settings
      const { data: paypalData, error: paypalError } = await supabase
        .from('site_settings')
        .select('*')
        .eq('setting_key', 'paypal_payments')
        .maybeSingle();

      if (paypalError && paypalError.code !== 'PGRST116') {
        throw paypalError;
      }

      if (paypalData) {
        setPaypalSettings(paypalData.setting_value as unknown as PayPalPaymentSettings);
        setIsPaypalActive(paypalData.is_active);
      }

      // Fetch Card payment settings
      const { data: cardData, error: cardError } = await supabase
        .from('site_settings')
        .select('*')
        .eq('setting_key', 'card_payments')
        .maybeSingle();

      if (cardError && cardError.code !== 'PGRST116') {
        throw cardError;
      }

      if (cardData) {
        setCardSettings(cardData.setting_value as unknown as CardPaymentSettings);
        setIsCardActive(cardData.is_active);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les paramètres de paiement",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    try {
      setSaving(true);
      
      // Save Stripe settings
      const { error: stripeError } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: 'stripe_payments',
          setting_value: stripeSettings as any,
          is_active: isStripeActive,
          updated_at: new Date().toISOString()
        }, { onConflict: 'setting_key' });

      if (stripeError) throw stripeError;

      // Save Algerian payment settings
      const { error: algerianError } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: 'algerian_payments',
          setting_value: algerianSettings as any,
          is_active: isAlgerianActive,
          updated_at: new Date().toISOString()
        }, { onConflict: 'setting_key' });

      if (algerianError) throw algerianError;

      // Save PayPal payment settings
      const { error: paypalError } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: 'paypal_payments',
          setting_value: paypalSettings as any,
          is_active: isPaypalActive,
          updated_at: new Date().toISOString()
        }, { onConflict: 'setting_key' });

      if (paypalError) throw paypalError;

      // Save Card payment settings
      const { error: cardError } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: 'card_payments',
          setting_value: cardSettings as any,
          is_active: isCardActive,
          updated_at: new Date().toISOString()
        }, { onConflict: 'setting_key' });

      if (cardError) throw cardError;

      toast({
        title: "Paramètres sauvegardés",
        description: "Les paramètres de paiement ont été mis à jour avec succès",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les paramètres",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const updateStripeSecret = async () => {
    if (!stripeSecretKey.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une clé secrète Stripe valide",
        variant: "destructive"
      });
      return;
    }

    try {
      setSavingSecret(true);
      const { data, error } = await supabase.functions.invoke('update-stripe-secret', {
        body: { stripe_secret_key: stripeSecretKey }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Clé mise à jour",
          description: "La clé secrète Stripe a été mise à jour avec succès",
        });
        setStripeSecretKey("");
      } else {
        throw new Error(data?.error || "Erreur inconnue");
      }
    } catch (error) {
      console.error('Error updating Stripe secret:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la clé secrète Stripe",
        variant: "destructive"
      });
    } finally {
      setSavingSecret(false);
    }
  };

  const updateAlgerianApiKey = async () => {
    if (!algerianApiKey.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une clé API algérienne valide",
        variant: "destructive"
      });
      return;
    }

    try {
      setSavingSecret(true);
      const { data, error } = await supabase.functions.invoke('update-algerian-key', {
        body: { algerian_api_key: algerianApiKey }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Clé mise à jour",
          description: "La clé API algérienne a été mise à jour avec succès",
        });
        setAlgerianApiKey("");
      } else {
        throw new Error(data?.error || "Erreur inconnue");
      }
    } catch (error) {
      console.error('Error updating Algerian API key:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la clé API algérienne",
        variant: "destructive"
      });
    } finally {
      setSavingSecret(false);
    }
  };

  const updateCardGatewayCredentials = async () => {
    if (!cardGatewayApiKey.trim() || !cardMerchantId.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer les identifiants de passerelle valides",
        variant: "destructive"
      });
      return;
    }

    try {
      setSavingSecret(true);
      const { data, error } = await supabase.functions.invoke('update-card-gateway', {
        body: { 
          api_key: cardGatewayApiKey,
          merchant_id: cardMerchantId
        }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Identifiants mis à jour",
          description: "Les identifiants de passerelle ont été mis à jour avec succès",
        });
        setCardGatewayApiKey("");
        setCardMerchantId("");
      } else {
        throw new Error(data?.error || "Erreur inconnue");
      }
    } catch (error) {
      console.error('Error updating card gateway credentials:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour les identifiants de passerelle",
        variant: "destructive"
      });
    } finally {
      setSavingSecret(false);
    }
  };

  const updatePaypalCredentials = async () => {
    if (!paypalClientId.trim() || !paypalClientSecret.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer les identifiants PayPal valides",
        variant: "destructive"
      });
      return;
    }

    try {
      setSavingSecret(true);
      const { data, error } = await supabase.functions.invoke('update-paypal-credentials', {
        body: { 
          paypal_client_id: paypalClientId,
          paypal_client_secret: paypalClientSecret
        }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Identifiants mis à jour",
          description: "Les identifiants PayPal ont été mis à jour avec succès",
        });
        setPaypalClientId("");
        setPaypalClientSecret("");
      } else {
        throw new Error(data?.error || "Erreur inconnue");
      }
    } catch (error) {
      console.error('Error updating PayPal credentials:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour les identifiants PayPal",
        variant: "destructive"
      });
    } finally {
      setSavingSecret(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="w-6 h-6 animate-spin" />
        <span className="ml-2">Chargement des paramètres...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stripe Configuration */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <span>Configuration Stripe</span>
            <Badge variant={isStripeActive ? "default" : "secondary"}>
              {isStripeActive ? "ACTIVÉ" : "DÉSACTIVÉ"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Master Switch */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <h4 className="font-medium">Activer les paiements Stripe</h4>
              <p className="text-sm text-gray-600">
                Permet aux utilisateurs de payer pour les annonces à la une et urgentes
              </p>
            </div>
            <Switch
              checked={isStripeActive}
              onCheckedChange={setIsStripeActive}
            />
          </div>

          {isStripeActive && (
            <div className="space-y-4">
              {/* Payment Enablement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <span>Paiements en ligne activés</span>
                  </Label>
                  <Switch
                    checked={stripeSettings.enabled}
                    onCheckedChange={(checked) => 
                      setStripeSettings(prev => ({ ...prev, enabled: checked }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mode de test</Label>
                  <Switch
                    checked={stripeSettings.test_mode}
                    onCheckedChange={(checked) => 
                      setStripeSettings(prev => ({ ...prev, test_mode: checked }))
                    }
                  />
                </div>
              </div>

              {/* Currency Selection */}
              <div className="space-y-2">
                <Label>Devise</Label>
                <Select
                  value={stripeSettings.currency}
                  onValueChange={(value) => 
                    setStripeSettings(prev => ({ ...prev, currency: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dzd">DZD - Dinar Algérien</SelectItem>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="usd">USD - Dollar US</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pricing Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce à la Une ({stripeSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={stripeSettings.featured_ad_price}
                    onChange={(e) => 
                      setStripeSettings(prev => ({ 
                        ...prev, 
                        featured_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce Urgente ({stripeSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={stripeSettings.urgent_ad_price}
                    onChange={(e) => 
                      setStripeSettings(prev => ({ 
                        ...prev, 
                        urgent_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              {/* Stripe Secret Key Management */}
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg space-y-4">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-yellow-600" />
                  <h4 className="font-medium text-yellow-800">Clé Secrète Stripe</h4>
                </div>
                <p className="text-sm text-yellow-700">
                  Mettre à jour la clé secrète Stripe utilisée pour les paiements. Cette clé est stockée de manière sécurisée.
                </p>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      type={showSecretKey ? "text" : "password"}
                      value={stripeSecretKey}
                      onChange={(e) => setStripeSecretKey(e.target.value)}
                      placeholder="sk_live_... ou sk_test_..."
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowSecretKey(!showSecretKey)}
                    >
                      {showSecretKey ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <Button 
                    onClick={updateStripeSecret} 
                    disabled={savingSecret || !stripeSecretKey.trim()}
                    variant="outline"
                  >
                    {savingSecret ? (
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Mettre à jour
                  </Button>
                </div>
              </div>

              {/* Status Display */}
              {stripeSettings.enabled && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Paiements Stripe {stripeSettings.test_mode ? 'TEST' : 'LIVE'} - Prêt
                    </span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    Prix: À la Une {stripeSettings.featured_ad_price} {stripeSettings.currency.toUpperCase()} • 
                    Urgente {stripeSettings.urgent_ad_price} {stripeSettings.currency.toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={fetchSettings}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={saveSettings} disabled={saving}>
              {saving ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Algerian Payment System Configuration */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-green-600" />
            <span>Système de Paiement Algérien</span>
            <Badge variant={isAlgerianActive ? "default" : "secondary"}>
              {isAlgerianActive ? "ACTIVÉ" : "DÉSACTIVÉ"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Master Switch */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <h4 className="font-medium">Activer les paiements algériens</h4>
              <p className="text-sm text-gray-600">
                Permet aux utilisateurs de payer avec Eddahabia et CIB
              </p>
            </div>
            <Switch
              checked={isAlgerianActive}
              onCheckedChange={setIsAlgerianActive}
            />
          </div>

          {isAlgerianActive && (
            <div className="space-y-4">
              {/* Payment Enablement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <span>Paiements algériens activés</span>
                  </Label>
                  <Switch
                    checked={algerianSettings.enabled}
                    onCheckedChange={(checked) => 
                      setAlgerianSettings(prev => ({ ...prev, enabled: checked }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mode de test</Label>
                  <Switch
                    checked={algerianSettings.test_mode}
                    onCheckedChange={(checked) => 
                      setAlgerianSettings(prev => ({ ...prev, test_mode: checked }))
                    }
                  />
                </div>
              </div>

              {/* Supported Cards */}
              <div className="space-y-2">
                <Label>Cartes supportées</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="eddahabia"
                      checked={algerianSettings.supported_cards.includes("eddahabia")}
                      onChange={(e) => {
                        const cards = algerianSettings.supported_cards;
                        if (e.target.checked) {
                          setAlgerianSettings(prev => ({ 
                            ...prev, 
                            supported_cards: [...cards, "eddahabia"] 
                          }));
                        } else {
                          setAlgerianSettings(prev => ({ 
                            ...prev, 
                            supported_cards: cards.filter(card => card !== "eddahabia")
                          }));
                        }
                      }}
                      className="rounded"
                    />
                    <Label htmlFor="eddahabia">Eddahabia</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cib"
                      checked={algerianSettings.supported_cards.includes("cib")}
                      onChange={(e) => {
                        const cards = algerianSettings.supported_cards;
                        if (e.target.checked) {
                          setAlgerianSettings(prev => ({ 
                            ...prev, 
                            supported_cards: [...cards, "cib"] 
                          }));
                        } else {
                          setAlgerianSettings(prev => ({ 
                            ...prev, 
                            supported_cards: cards.filter(card => card !== "cib")
                          }));
                        }
                      }}
                      className="rounded"
                    />
                    <Label htmlFor="cib">CIB</Label>
                  </div>
                </div>
              </div>

              {/* Currency Selection */}
              <div className="space-y-2">
                <Label>Devise</Label>
                <Select
                  value={algerianSettings.currency}
                  onValueChange={(value) => 
                    setAlgerianSettings(prev => ({ ...prev, currency: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dzd">DZD - Dinar Algérien</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pricing Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce à la Une ({algerianSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={algerianSettings.featured_ad_price}
                    onChange={(e) => 
                      setAlgerianSettings(prev => ({ 
                        ...prev, 
                        featured_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce Urgente ({algerianSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={algerianSettings.urgent_ad_price}
                    onChange={(e) => 
                      setAlgerianSettings(prev => ({ 
                        ...prev, 
                        urgent_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              {/* Algerian API Key Management */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-4">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-green-600" />
                  <h4 className="font-medium text-green-800">Clé API Système Algérien</h4>
                </div>
                <p className="text-sm text-green-700">
                  Mettre à jour la clé API du système de paiement algérien pour Eddahabia et CIB.
                </p>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      type={showAlgerianKey ? "text" : "password"}
                      value={algerianApiKey}
                      onChange={(e) => setAlgerianApiKey(e.target.value)}
                      placeholder="Clé API du système algérien..."
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowAlgerianKey(!showAlgerianKey)}
                    >
                      {showAlgerianKey ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <Button 
                    onClick={updateAlgerianApiKey} 
                    disabled={savingSecret || !algerianApiKey.trim()}
                    variant="outline"
                  >
                    {savingSecret ? (
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Mettre à jour
                  </Button>
                </div>
              </div>

              {/* Status Display */}
              {algerianSettings.enabled && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Paiements Algériens {algerianSettings.test_mode ? 'TEST' : 'LIVE'} - Prêt
                    </span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    Cartes: {algerianSettings.supported_cards.map(card => card.toUpperCase()).join(', ')} • 
                    Prix: À la Une {algerianSettings.featured_ad_price} {algerianSettings.currency.toUpperCase()} • 
                    Urgente {algerianSettings.urgent_ad_price} {algerianSettings.currency.toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={fetchSettings}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={saveSettings} disabled={saving}>
              {saving ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* PayPal Payment System Configuration */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="w-5 h-5 text-blue-600" />
            <span>Système de Paiement PayPal</span>
            <Badge variant={isPaypalActive ? "default" : "secondary"}>
              {isPaypalActive ? "ACTIVÉ" : "DÉSACTIVÉ"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Master Switch */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <h4 className="font-medium">Activer les paiements PayPal</h4>
              <p className="text-sm text-gray-600">
                Permet aux utilisateurs de payer avec leur compte PayPal
              </p>
            </div>
            <Switch
              checked={isPaypalActive}
              onCheckedChange={setIsPaypalActive}
            />
          </div>

          {isPaypalActive && (
            <div className="space-y-4">
              {/* Payment Enablement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <span>Paiements PayPal activés</span>
                  </Label>
                  <Switch
                    checked={paypalSettings.enabled}
                    onCheckedChange={(checked) => 
                      setPaypalSettings(prev => ({ ...prev, enabled: checked }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mode sandbox (test)</Label>
                  <Switch
                    checked={paypalSettings.test_mode}
                    onCheckedChange={(checked) => 
                      setPaypalSettings(prev => ({ ...prev, test_mode: checked }))
                    }
                  />
                </div>
              </div>

              {/* Currency Selection */}
              <div className="space-y-2">
                <Label>Devise</Label>
                <Select
                  value={paypalSettings.currency}
                  onValueChange={(value) => 
                    setPaypalSettings(prev => ({ ...prev, currency: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD - Dollar US</SelectItem>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="gbp">GBP - Livre Sterling</SelectItem>
                    <SelectItem value="cad">CAD - Dollar Canadien</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pricing Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce à la Une ({paypalSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={paypalSettings.featured_ad_price}
                    onChange={(e) => 
                      setPaypalSettings(prev => ({ 
                        ...prev, 
                        featured_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="0.5"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce Urgente ({paypalSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={paypalSettings.urgent_ad_price}
                    onChange={(e) => 
                      setPaypalSettings(prev => ({ 
                        ...prev, 
                        urgent_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="0.5"
                  />
                </div>
              </div>

              {/* PayPal Credentials Management */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-4">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-blue-800">Identifiants PayPal</h4>
                </div>
                <p className="text-sm text-blue-700">
                  Mettre à jour les identifiants PayPal (Client ID et Client Secret).
                </p>
                
                <div className="space-y-3">
                  {/* Client ID */}
                  <div className="space-y-2">
                    <Label>Client ID PayPal</Label>
                    <Input
                      type="text"
                      value={paypalClientId}
                      onChange={(e) => setPaypalClientId(e.target.value)}
                      placeholder="Client ID PayPal..."
                    />
                  </div>
                  
                  {/* Client Secret */}
                  <div className="space-y-2">
                    <Label>Client Secret PayPal</Label>
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <Input
                          type={showPaypalSecret ? "text" : "password"}
                          value={paypalClientSecret}
                          onChange={(e) => setPaypalClientSecret(e.target.value)}
                          placeholder="Client Secret PayPal..."
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPaypalSecret(!showPaypalSecret)}
                        >
                          {showPaypalSecret ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={updatePaypalCredentials} 
                    disabled={savingSecret || !paypalClientId.trim() || !paypalClientSecret.trim()}
                    variant="outline"
                    className="w-full"
                  >
                    {savingSecret ? (
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Mettre à jour les identifiants
                  </Button>
                </div>
              </div>

              {/* Status Display */}
              {paypalSettings.enabled && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Paiements PayPal {paypalSettings.test_mode ? 'SANDBOX' : 'LIVE'} - Prêt
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    Prix: À la Une {paypalSettings.featured_ad_price} {paypalSettings.currency.toUpperCase()} • 
                    Urgente {paypalSettings.urgent_ad_price} {paypalSettings.currency.toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={fetchSettings}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={saveSettings} disabled={saving}>
              {saving ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Card Payment System Configuration */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="w-5 h-5 text-purple-600" />
            <span>Paiement par Carte Bancaire</span>
            <Badge variant={isCardActive ? "default" : "secondary"}>
              {isCardActive ? "ACTIVÉ" : "DÉSACTIVÉ"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Master Switch */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <h4 className="font-medium">Activer les paiements par carte</h4>
              <p className="text-sm text-gray-600">
                Permet aux utilisateurs de payer avec Visa et Mastercard
              </p>
            </div>
            <Switch
              checked={isCardActive}
              onCheckedChange={setIsCardActive}
            />
          </div>

          {isCardActive && (
            <div className="space-y-4">
              {/* Payment Enablement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <span>Paiements par carte activés</span>
                  </Label>
                  <Switch
                    checked={cardSettings.enabled}
                    onCheckedChange={(checked) => 
                      setCardSettings(prev => ({ ...prev, enabled: checked }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mode test</Label>
                  <Switch
                    checked={cardSettings.test_mode}
                    onCheckedChange={(checked) => 
                      setCardSettings(prev => ({ ...prev, test_mode: checked }))
                    }
                  />
                </div>
              </div>

              {/* Supported Cards */}
              <div className="space-y-2">
                <Label>Cartes supportées</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="visa"
                      checked={cardSettings.supported_cards.includes("visa")}
                      onChange={(e) => {
                        const cards = cardSettings.supported_cards;
                        if (e.target.checked) {
                          setCardSettings(prev => ({ 
                            ...prev, 
                            supported_cards: [...cards, "visa"] 
                          }));
                        } else {
                          setCardSettings(prev => ({ 
                            ...prev, 
                            supported_cards: cards.filter(card => card !== "visa")
                          }));
                        }
                      }}
                      className="rounded"
                    />
                    <Label htmlFor="visa">Visa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="mastercard"
                      checked={cardSettings.supported_cards.includes("mastercard")}
                      onChange={(e) => {
                        const cards = cardSettings.supported_cards;
                        if (e.target.checked) {
                          setCardSettings(prev => ({ 
                            ...prev, 
                            supported_cards: [...cards, "mastercard"] 
                          }));
                        } else {
                          setCardSettings(prev => ({ 
                            ...prev, 
                            supported_cards: cards.filter(card => card !== "mastercard")
                          }));
                        }
                      }}
                      className="rounded"
                    />
                    <Label htmlFor="mastercard">Mastercard</Label>
                  </div>
                </div>
              </div>

              {/* Gateway Provider */}
              <div className="space-y-2">
                <Label>Fournisseur de passerelle</Label>
                <Select
                  value={cardSettings.gateway_provider}
                  onValueChange={(value) => 
                    setCardSettings(prev => ({ ...prev, gateway_provider: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom">Passerelle personnalisée</SelectItem>
                    <SelectItem value="cmi">CMI (Centre Monétique Interbancaire)</SelectItem>
                    <SelectItem value="satim">SATIM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Currency Selection */}
              <div className="space-y-2">
                <Label>Devise</Label>
                <Select
                  value={cardSettings.currency}
                  onValueChange={(value) => 
                    setCardSettings(prev => ({ ...prev, currency: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dzd">DZD - Dinar Algérien</SelectItem>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="usd">USD - Dollar US</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pricing Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce à la Une ({cardSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={cardSettings.featured_ad_price}
                    onChange={(e) => 
                      setCardSettings(prev => ({ 
                        ...prev, 
                        featured_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Prix Annonce Urgente ({cardSettings.currency.toUpperCase()})</span>
                  </Label>
                  <Input
                    type="number"
                    value={cardSettings.urgent_ad_price}
                    onChange={(e) => 
                      setCardSettings(prev => ({ 
                        ...prev, 
                        urgent_ad_price: Number(e.target.value) 
                      }))
                    }
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              {/* Gateway Credentials Management */}
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg space-y-4">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-purple-600" />
                  <h4 className="font-medium text-purple-800">Identifiants Passerelle Bancaire</h4>
                </div>
                <p className="text-sm text-purple-700">
                  Mettre à jour les identifiants de la passerelle bancaire pour traiter les paiements par carte.
                </p>
                
                <div className="space-y-3">
                  {/* API Key */}
                  <div className="space-y-2">
                    <Label>Clé API Passerelle</Label>
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <Input
                          type={showCardSecret ? "text" : "password"}
                          value={cardGatewayApiKey}
                          onChange={(e) => setCardGatewayApiKey(e.target.value)}
                          placeholder="Clé API de la passerelle..."
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowCardSecret(!showCardSecret)}
                        >
                          {showCardSecret ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Merchant ID */}
                  <div className="space-y-2">
                    <Label>ID Marchand</Label>
                    <Input
                      type="text"
                      value={cardMerchantId}
                      onChange={(e) => setCardMerchantId(e.target.value)}
                      placeholder="ID Marchand..."
                    />
                  </div>
                  
                  <Button 
                    onClick={updateCardGatewayCredentials} 
                    disabled={savingSecret || !cardGatewayApiKey.trim() || !cardMerchantId.trim()}
                    variant="outline"
                    className="w-full"
                  >
                    {savingSecret ? (
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Mettre à jour les identifiants
                  </Button>
                </div>
              </div>

              {/* Status Display */}
              {cardSettings.enabled && (
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-purple-700">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Paiements par Carte {cardSettings.test_mode ? 'TEST' : 'LIVE'} - Prêt
                    </span>
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    Cartes: {cardSettings.supported_cards.map(card => card.toUpperCase()).join(', ')} • 
                    Passerelle: {cardSettings.gateway_provider.toUpperCase()} • 
                    Prix: À la Une {cardSettings.featured_ad_price} {cardSettings.currency.toUpperCase()} • 
                    Urgente {cardSettings.urgent_ad_price} {cardSettings.currency.toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={fetchSettings}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={saveSettings} disabled={saving}>
              {saving ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSettingsPanel;