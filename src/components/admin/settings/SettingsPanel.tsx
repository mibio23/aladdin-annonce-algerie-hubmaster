

import { useLoadingSettings } from "@/hooks/useLoadingSettings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsPanel = () => {
  const { settings, updateSettings } = useLoadingSettings();
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Paramètres du Site</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="integrations">Intégrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres Généraux</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="site-name">Nom du site</Label>
                  <Input id="site-name" defaultValue="AL@DDIN" />
                </div>
                <div>
                  <Label htmlFor="site-url">URL du site</Label>
                  <Input id="site-url" defaultValue="https://aladdin-dz.com" />
                </div>
              </div>

              <div>
                <Label htmlFor="site-description">Description du site</Label>
                <Textarea 
                  id="site-description" 
                  defaultValue="Plateforme de petites annonces en Algérie"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="admin-email">Email administrateur</Label>
                  <Input id="admin-email" defaultValue="admin@aladdin-dz.com" />
                </div>
                <div>
                  <Label htmlFor="support-email">Email support</Label>
                  <Input id="support-email" defaultValue="support@aladdin-dz.com" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" />
                <Label htmlFor="maintenance-mode">Mode maintenance</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="user-registration" defaultChecked />
                <Label htmlFor="user-registration">Permettre l'inscription des utilisateurs</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  id="loading-screen" 
                  checked={settings.isEnabled}
                  onCheckedChange={(checked) => updateSettings({ isEnabled: checked })}
                />
                <Label htmlFor="loading-screen">Afficher la page de chargement</Label>
              </div>

              {settings.isEnabled && (
                <div>
                  <Label htmlFor="loading-duration">Durée de chargement (secondes)</Label>
                  <Select 
                    value={String(settings.duration / 1000)} 
                    onValueChange={(value) => updateSettings({ duration: parseInt(value) * 1000 })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 secondes</SelectItem>
                      <SelectItem value="3">3 secondes</SelectItem>
                      <SelectItem value="4">4 secondes</SelectItem>
                      <SelectItem value="5">5 secondes</SelectItem>
                      <SelectItem value="6">6 secondes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button>Sauvegarder les modifications</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="meta-title">Titre Meta par défaut</Label>
                <Input 
                  id="meta-title" 
                  defaultValue="AL@DDIN - Petites annonces en Algérie"
                />
              </div>

              <div>
                <Label htmlFor="meta-description">Description Meta par défaut</Label>
                <Textarea 
                  id="meta-description" 
                  defaultValue="Découvrez AL@DDIN, la plateforme de petites annonces en Algérie. Achetez, vendez et trouvez tout ce dont vous avez besoin."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="meta-keywords">Mots-clés Meta</Label>
                <Input 
                  id="meta-keywords" 
                  defaultValue="annonces, algérie, vente, achat, immobilier, voiture"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="sitemap-auto" defaultChecked />
                <Label htmlFor="sitemap-auto">Génération automatique du sitemap</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="robots-index" defaultChecked />
                <Label htmlFor="robots-index">Permettre l'indexation par les moteurs de recherche</Label>
              </div>

              <Button>Sauvegarder les paramètres SEO</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications de nouvelles annonces</Label>
                    <p className="text-sm text-gray-500">Recevoir des notifications pour les nouvelles annonces</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications de modération</Label>
                    <p className="text-sm text-gray-500">Notifications pour les annonces à modérer</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rapports quotidiens</Label>
                    <p className="text-sm text-gray-500">Recevoir un rapport quotidien des activités</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertes de sécurité</Label>
                    <p className="text-sm text-gray-500">Notifications pour les problèmes de sécurité</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div>
                <Label htmlFor="notification-email">Email pour les notifications</Label>
                <Input id="notification-email" defaultValue="admin@aladdin-dz.com" />
              </div>

              <Button>Sauvegarder les paramètres de notifications</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de Sécurité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Authentification à deux facteurs</Label>
                  <p className="text-sm text-gray-500">Activer 2FA pour les administrateurs</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Limitation du taux de connexion</Label>
                  <p className="text-sm text-gray-500">Limiter les tentatives de connexion</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div>
                <Label htmlFor="session-timeout">Délai d'expiration de session (minutes)</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 heure</SelectItem>
                    <SelectItem value="120">2 heures</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="max-login-attempts">Tentatives de connexion maximales</Label>
                <Select defaultValue="5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 tentatives</SelectItem>
                    <SelectItem value="5">5 tentatives</SelectItem>
                    <SelectItem value="10">10 tentatives</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button>Sauvegarder les paramètres de sécurité</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Intégrations Tierces</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="google-analytics">Google Analytics ID</Label>
                <Input id="google-analytics" placeholder="GA-XXXXXXXXXX" />
              </div>

              <div>
                <Label htmlFor="facebook-pixel">Facebook Pixel ID</Label>
                <Input id="facebook-pixel" placeholder="123456789" />
              </div>

              <div>
                <Label htmlFor="smtp-server">Serveur SMTP</Label>
                <Input id="smtp-server" placeholder="smtp.gmail.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtp-username">Nom d'utilisateur SMTP</Label>
                  <Input id="smtp-username" placeholder="votre-email@gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtp-password">Mot de passe SMTP</Label>
                  <Input id="smtp-password" type="password" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="enable-analytics" />
                <Label htmlFor="enable-analytics">Activer Google Analytics</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="enable-pixel" />
                <Label htmlFor="enable-pixel">Activer Facebook Pixel</Label>
              </div>

              <Button>Sauvegarder les intégrations</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
