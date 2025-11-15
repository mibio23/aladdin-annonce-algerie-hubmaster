import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  MessageCircle, 
  Users, 
  Send, 
  Settings, 
  BarChart3,
  Target,
  Smartphone,
  Calendar,
  FileText,
  Share2,
  Star,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MarketingPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const MarketingPanel: React.FC<MarketingPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();
  const [campaignSettings, setCampaignSettings] = useState({
    emailSubject: "Découvrez Aladdin - Votre nouvelle plateforme de vente en ligne !",
    emailContent: "Rejoignez des milliers d'utilisateurs qui font confiance à Aladdin pour acheter et vendre en ligne. Inscrivez-vous maintenant !",
    smsContent: "🌟 Découvrez Aladdin ! La plateforme de vente n°1 en Algérie. Inscription gratuite ➡️ [LIEN]",
    targetAudience: "all",
    sendTime: "immediate",
    frequency: "once"
  });

  const [campaignStats, setCampaignStats] = useState({
    totalEmails: 0,
    totalSMS: 0,
    emailDelivered: 0,
    smsDelivered: 0,
    clickRate: 0,
    conversionRate: 0
  });

  const handleCampaignChange = (key: string, value: string) => {
    setCampaignSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const sendEmailCampaign = async () => {
    toast({
      title: "Campagne Email Lancée",
      description: "La campagne d'emails en masse a été démarrée avec succès",
      variant: "default"
    });
    
    // Simulation des stats
    setCampaignStats(prev => ({
      ...prev,
      totalEmails: prev.totalEmails + 1000,
      emailDelivered: prev.emailDelivered + 950
    }));
  };

  const sendSMSCampaign = async () => {
    toast({
      title: "Campagne SMS Lancée",
      description: "La campagne de SMS gratuits a été démarrée avec succès",
      variant: "default"
    });
    
    // Simulation des stats
    setCampaignStats(prev => ({
      ...prev,
      totalSMS: prev.totalSMS + 500,
      smsDelivered: prev.smsDelivered + 485
    }));
  };

  const marketingFeatures = [
    {
      id: "massEmailMarketing",
      name: "Marketing Email Masse",
      description: "Envoi d'emails en masse vers tous les utilisateurs",
      icon: Mail,
      status: activeFeatures.massEmailMarketing,
      level: "Pro",
      color: "text-blue-600"
    },
    {
      id: "freeSMSMarketing",
      name: "SMS Marketing Gratuit",
      description: "Envoi de SMS gratuits de promotion",
      icon: MessageCircle,
      status: activeFeatures.freeSMSMarketing,
      level: "Premium",
      color: "text-green-600"
    },
    {
      id: "userSegmentation",
      name: "Segmentation Utilisateurs",
      description: "Ciblage par catégories d'utilisateurs",
      icon: Users,
      status: activeFeatures.userSegmentation,
      level: "Advanced",
      color: "text-purple-600"
    },
    {
      id: "campaignAnalytics",
      name: "Analytics Campagnes",
      description: "Analyse détaillée des performances",
      icon: BarChart3,
      status: activeFeatures.campaignAnalytics,
      level: "Analytics",
      color: "text-orange-600"
    },
    {
      id: "viralReferrals",
      name: "Partage Viral",
      description: "Système de parrainage utilisateur",
      icon: Share2,
      status: activeFeatures.viralReferrals,
      level: "Growth",
      color: "text-pink-600"
    },
    {
      id: "scheduledCampaigns",
      name: "Campagnes Programmées",
      description: "Planification automatique des envois",
      icon: Calendar,
      status: activeFeatures.scheduledCampaigns,
      level: "Automation",
      color: "text-cyan-600"
    }
  ];

  const handleFeatureToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Fonctionnalité Désactivée" : "Fonctionnalité Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Send className="w-5 h-5 text-green-600" />
            <span>Système Marketing Aladdin - Emails & SMS Gratuits</span>
            <Badge variant="outline" className="bg-green-100 animate-pulse">
              MARKETING PRO
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="email">Email Campaign</TabsTrigger>
              <TabsTrigger value="sms">SMS Campaign</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-600">
                    <Target className="w-5 h-5" />
                    <span>🚀 Fonctionnalités Marketing Avancées</span>
                    <Badge variant="outline" className="bg-white/50">
                      {marketingFeatures.filter(f => f.status).length}/{marketingFeatures.length} actives
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {marketingFeatures.map((feature) => (
                    <Card key={feature.id} className="p-4 bg-white/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <feature.icon className={`w-6 h-6 ${feature.color}`} />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{feature.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {feature.level}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={feature.status}
                            onCheckedChange={() => handleFeatureToggle(feature.id, feature.name)}
                          />
                          <Button variant="ghost" size="sm" disabled={!feature.status}>
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {feature.status && (
                        <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                          <div className="flex items-center space-x-2 text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Système Actif</span>
                            <Badge variant="outline" className="text-xs">LIVE</Badge>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="email" className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-xl mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  Campagne Email en Masse
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="emailSubject">Sujet de l'Email</Label>
                    <Input
                      id="emailSubject"
                      value={campaignSettings.emailSubject}
                      onChange={(e) => handleCampaignChange('emailSubject', e.target.value)}
                      placeholder="Entrez le sujet de votre email..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="emailContent">Contenu de l'Email</Label>
                    <Textarea
                      id="emailContent"
                      value={campaignSettings.emailContent}
                      onChange={(e) => handleCampaignChange('emailContent', e.target.value)}
                      placeholder="Rédigez le contenu de votre email..."
                      rows={6}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="targetAudience">Audience Cible</Label>
                      <Select value={campaignSettings.targetAudience} onValueChange={(value) => handleCampaignChange('targetAudience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner l'audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous les utilisateurs</SelectItem>
                          <SelectItem value="active">Utilisateurs actifs</SelectItem>
                          <SelectItem value="buyers">Acheteurs</SelectItem>
                          <SelectItem value="sellers">Vendeurs</SelectItem>
                          <SelectItem value="new">Nouveaux utilisateurs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="sendTime">Heure d'envoi</Label>
                      <Select value={campaignSettings.sendTime} onValueChange={(value) => handleCampaignChange('sendTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Quand envoyer?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immédiatement</SelectItem>
                          <SelectItem value="morning">Demain matin (9h)</SelectItem>
                          <SelectItem value="afternoon">Demain après-midi (14h)</SelectItem>
                          <SelectItem value="evening">Demain soir (18h)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button onClick={sendEmailCampaign} className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Lancer Campagne Email
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Aperçu
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="sms" className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-xl mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-green-600" />
                  Campagne SMS Gratuite
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="smsContent">Message SMS (160 caractères max)</Label>
                    <Textarea
                      id="smsContent"
                      value={campaignSettings.smsContent}
                      onChange={(e) => handleCampaignChange('smsContent', e.target.value)}
                      placeholder="Rédigez votre SMS de promotion..."
                      maxLength={160}
                      rows={4}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {campaignSettings.smsContent.length}/160 caractères
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="smsAudience">Audience SMS</Label>
                      <Select value={campaignSettings.targetAudience} onValueChange={(value) => handleCampaignChange('targetAudience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner l'audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous (avec numéro)</SelectItem>
                          <SelectItem value="algeria">Algérie uniquement</SelectItem>
                          <SelectItem value="active">Utilisateurs actifs</SelectItem>
                          <SelectItem value="verified">Numéros vérifiés</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="smsFrequency">Fréquence</Label>
                      <Select value={campaignSettings.frequency} onValueChange={(value) => handleCampaignChange('frequency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Fréquence d'envoi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="once">Une seule fois</SelectItem>
                          <SelectItem value="weekly">Hebdomadaire</SelectItem>
                          <SelectItem value="monthly">Mensuel</SelectItem>
                          <SelectItem value="special">Événements spéciaux</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 text-green-700 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">SMS Gratuits Activés</span>
                    </div>
                    <p className="text-sm text-green-600">
                      Les SMS sont envoyés gratuitement via notre partenariat avec les opérateurs algériens.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button onClick={sendSMSCampaign} className="flex-1 bg-green-600 hover:bg-green-700">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Lancer Campagne SMS
                    </Button>
                    <Button variant="outline">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Test SMS
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-sm">Emails Envoyés</span>
                  </div>
                  <div className="text-2xl font-bold">{campaignStats.totalEmails.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Total campagnes</div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-sm">SMS Envoyés</span>
                  </div>
                  <div className="text-2xl font-bold">{campaignStats.totalSMS.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Total campagnes</div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-sm">Taux de Clic</span>
                  </div>
                  <div className="text-2xl font-bold">{campaignStats.clickRate}%</div>
                  <div className="text-xs text-gray-500">Clics/envois</div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-sm">Conversion</span>
                  </div>
                  <div className="text-2xl font-bold">{campaignStats.conversionRate}%</div>
                  <div className="text-xs text-gray-500">Inscriptions</div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                  Performance des Campagnes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Dernière Campagne Email</h4>
                      <p className="text-sm text-gray-600">Envoyée il y a 2 heures</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-500">Délivrés</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Dernière Campagne SMS</h4>
                      <p className="text-sm text-gray-600">Envoyée il y a 1 heure</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">97%</div>
                      <div className="text-xs text-gray-500">Délivrés</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingPanel;
