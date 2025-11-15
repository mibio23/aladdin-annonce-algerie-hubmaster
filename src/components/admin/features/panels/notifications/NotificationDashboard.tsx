import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { Bell, Send, TestTube, MessageSquare, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const NotificationDashboard = () => {
  const [testEmail, setTestEmail] = useState('');
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info',
    category: 'system',
    channels: ['in_app'],
    priority: 'normal'
  });
  const [recentNotifications, setRecentNotifications] = useState<Array<{
    id: string;
    title: string;
    type: string;
    category: string;
    created_at: string;
    status: string;
  }>>([]);
  const [stats, setStats] = useState({
    totalSent: 0,
    delivered: 0,
    failed: 0,
    pending: 0
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Simuler le chargement des statistiques
      setStats({
        totalSent: 1247,
        delivered: 1198,
        failed: 23,
        pending: 26
      });

      // Simuler les notifications récentes
      setRecentNotifications([
        {
          id: '1',
          title: 'Notification de test',
          type: 'info',
          category: 'system',
          created_at: new Date().toISOString(),
          status: 'sent'
        },
        {
          id: '2',
          title: 'Alerte de sécurité',
          type: 'warning',
          category: 'security',
          created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          status: 'delivered'
        }
      ]);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const handleTestEmail = async () => {
    if (!testEmail) {
      toast.error('Veuillez saisir une adresse email');
      return;
    }

    setLoading(true);
    try {
      const result = { success: true };
      result; // Mark as used
      toast.success('Email de test simulé envoyé !');
      setTestEmail('');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du test');
    } finally {
      setLoading(false);
    }
  };

  const handleSendTestNotification = async () => {
    if (!newNotification.title || !newNotification.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setLoading(true);
    try {
      // Pour les tests, on utilise un user_id factice
      const result = { success: true };
      result; // Mark as used
      toast.success('Notification créée avec succès !');
      setNewNotification({
        title: '',
        message: '',
        type: 'info',
        category: 'system',
        channels: ['in_app'],
        priority: 'normal'
      });
      loadDashboardData();
    } catch (error) {
      toast.error('Erreur lors de la création de la notification');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary" | "outline"> = {
      sent: 'default',
      delivered: 'default',
      failed: 'destructive',
      pending: 'secondary'
    };
    
    const icons: Record<string, JSX.Element> = {
      sent: <Send className="w-3 h-3 mr-1" />,
      delivered: <CheckCircle2 className="w-3 h-3 mr-1" />,
      failed: <AlertCircle className="w-3 h-3 mr-1" />,
      pending: <Clock className="w-3 h-3 mr-1" />
    };

    return (
      <Badge variant={variants[status] || 'secondary'} className="text-xs">
        {icons[status] || null}
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Notifications</h2>
          <p className="text-muted-foreground">
            Gérez et surveillez vos notifications système
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total envoyé</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSent}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Livré</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.delivered}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Échoué</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test d'envoi d'email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="w-5 h-5" />
              Test d'envoi email
            </CardTitle>
            <CardDescription>
              Testez l'envoi d'emails via Resend
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="testEmail">Adresse email de test</Label>
              <Input
                id="testEmail"
                type="email"
                placeholder="test@exemple.com"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleTestEmail}
              disabled={loading || !testEmail}
              className="w-full"
            >
              {loading ? 'Envoi...' : 'Envoyer test email'}
            </Button>
          </CardContent>
        </Card>

        {/* Créer une notification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Créer une notification
            </CardTitle>
            <CardDescription>
              Créez une notification de test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                placeholder="Titre de la notification"
                value={newNotification.title}
                onChange={(e) => setNewNotification({...newNotification, title: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Contenu de la notification"
                value={newNotification.message}
                onChange={(e) => setNewNotification({...newNotification, message: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Type</Label>
                <Select 
                  value={newNotification.type} 
                  onValueChange={(value) => setNewNotification({...newNotification, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="success">Succès</SelectItem>
                    <SelectItem value="warning">Attention</SelectItem>
                    <SelectItem value="error">Erreur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Catégorie</Label>
                <Select 
                  value={newNotification.category} 
                  onValueChange={(value) => setNewNotification({...newNotification, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">Système</SelectItem>
                    <SelectItem value="announcement">Annonce</SelectItem>
                    <SelectItem value="message">Message</SelectItem>
                    <SelectItem value="security">Sécurité</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSendTestNotification}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Création...' : 'Créer notification'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Notifications récentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Notifications récentes
          </CardTitle>
          <CardDescription>
            Historique des dernières notifications envoyées
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {recentNotifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {notification.category} • {new Date(notification.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{notification.type}</Badge>
                    {getStatusBadge(notification.status)}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationDashboard;