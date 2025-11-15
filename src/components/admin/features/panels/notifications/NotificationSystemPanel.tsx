import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationChannelSettings from "./NotificationChannelSettings";
import NotificationDashboard from "./NotificationDashboard";
import { Settings, BarChart3 } from "lucide-react";

const NotificationSystemPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Système de Notifications</h1>
          <p className="text-muted-foreground">
            Gérez les notifications multi-canaux avec Resend et futurs SMS
          </p>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Configuration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <NotificationDashboard />
        </TabsContent>

        <TabsContent value="settings">
          <NotificationChannelSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationSystemPanel;