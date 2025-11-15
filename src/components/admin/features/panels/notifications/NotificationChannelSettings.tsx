import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Mail, MessageSquare, Bell, Settings, CheckCircle2, AlertCircle } from "lucide-react";

const NotificationChannelSettings = () => {
  const [emailSettings, setEmailSettings] = useState({
    provider: 'resend',
    apiKey: '***************',
    fromEmail: 'notifications@monapp.com',
    enabled: true,
    dailyLimit: 1000
  });

  const [smsSettings, setSmsSettings] = useState({
    provider: '',
    apiKey: '',
    fromNumber: '',
    enabled: false,
    dailyLimit: 100
  });

  const [testEmail, setTestEmail] = useState('');
  const [testPhone, setTestPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTestEmail = async () => {
    if (!testEmail) {
      toast.error('Veuillez saisir une adresse email');
      return;
    }

    setLoading(true);
    try {
      // Simulation d'envoi de test
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Email de test envoyé avec succès !');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi de l\'email de test');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = () => {
    toast.success('Paramètres sauvegardés');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Canaux de Notification</h2>
          <p className="text-muted-foreground">
            Configurez les différents canaux d'envoi de notifications
          </p>
        </div>
      </div>

      <Tabs defaultValue="email" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            SMS
          </TabsTrigger>
          <TabsTrigger value="push" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Push
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Configuration Email
                  </CardTitle>
                  <CardDescription>
                    Resend - Plan gratuit (3000 emails/mois)
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Actif
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="provider">Fournisseur</Label>
                  <Input
                    id="provider"
                    value="Resend"
                    disabled
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromEmail">Email expéditeur</Label>
                  <Input
                    id="fromEmail"
                    value={emailSettings.fromEmail}
                    onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                    placeholder="notifications@monapp.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dailyLimitEmail">Limite quotidienne</Label>
                  <Input
                    id="dailyLimitEmail"
                    type="number"
                    value={emailSettings.dailyLimit}
                    onChange={(e) => setEmailSettings({...emailSettings, dailyLimit: parseInt(e.target.value)})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Statut</Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={emailSettings.enabled}
                      onCheckedChange={(checked) => setEmailSettings({...emailSettings, enabled: checked})}
                    />
                    <span className="text-sm text-muted-foreground">
                      {emailSettings.enabled ? 'Activé' : 'Désactivé'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Test d'envoi</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="email@exemple.com"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleTestEmail}
                    disabled={loading}
                  >
                    {loading ? 'Envoi...' : 'Tester'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Configuration SMS
                  </CardTitle>
                  <CardDescription>
                    À configurer - Support pour Twilio, TextMagic, etc.
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    En attente
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-900">Configuration future</h4>
                    <p className="text-sm text-orange-700 mt-1">
                      Cette section sera activée lorsque vous choisirez un fournisseur SMS.
                      Fournisseurs recommandés : Twilio, TextMagic, SMS.to
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smsProvider">Fournisseur SMS</Label>
                  <Input
                    id="smsProvider"
                    placeholder="Ex: Twilio, TextMagic..."
                    value={smsSettings.provider}
                    onChange={(e) => setSmsSettings({...smsSettings, provider: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromNumber">Numéro expéditeur</Label>
                  <Input
                    id="fromNumber"
                    placeholder="+33123456789"
                    value={smsSettings.fromNumber}
                    onChange={(e) => setSmsSettings({...smsSettings, fromNumber: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smsApiKey">Clé API</Label>
                  <Input
                    id="smsApiKey"
                    type="password"
                    placeholder="Votre clé API SMS"
                    value={smsSettings.apiKey}
                    onChange={(e) => setSmsSettings({...smsSettings, apiKey: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyLimitSms">Limite quotidienne</Label>
                  <Input
                    id="dailyLimitSms"
                    type="number"
                    value={smsSettings.dailyLimit}
                    onChange={(e) => setSmsSettings({...smsSettings, dailyLimit: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Test d'envoi</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="+33612345678"
                    value={testPhone}
                    onChange={(e) => setTestPhone(e.target.value)}
                    className="flex-1"
                    disabled
                  />
                  <Button disabled>
                    Tester (Bientôt)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="push" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications Push
              </CardTitle>
              <CardDescription>
                Notifications dans l'application (déjà implémentées)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">Système actif</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Les notifications dans l'application fonctionnent déjà via le hook useNotifications.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Annuler</Button>
        <Button onClick={handleSaveSettings}>
          Sauvegarder les paramètres
        </Button>
      </div>
    </div>
  );
};

export default NotificationChannelSettings;