
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Eye, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { OfflineMode } from "@/components/offline/OfflineMode";


const DashboardHome = () => {
  const stats = [
    { title: "Utilisateurs Actifs", value: "12,345", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Annonces Publiées", value: "8,920", change: "+8%", icon: FileText, color: "text-green-600" },
    { title: "Vues Aujourd'hui", value: "45,678", change: "+15%", icon: Eye, color: "text-purple-600" },
    { title: "Revenus Publicitaires", value: "€3,456", change: "+23%", icon: TrendingUp, color: "text-orange-600" },
  ];

  const chartData = [
    { name: 'Jan', annonces: 400, utilisateurs: 240 },
    { name: 'Fév', annonces: 300, utilisateurs: 139 },
    { name: 'Mar', annonces: 200, utilisateurs: 980 },
    { name: 'Avr', annonces: 278, utilisateurs: 390 },
    { name: 'Mai', annonces: 189, utilisateurs: 480 },
    { name: 'Juin', annonces: 239, utilisateurs: 380 },
  ];

  const recentActivities = [
    { id: 1, type: "success", message: "Nouvelle annonce publiée: iPhone 15 Pro", time: "Il y a 2 min" },
    { id: 2, type: "warning", message: "Annonce signalée pour modération", time: "Il y a 5 min" },
    { id: 3, type: "info", message: "Nouvel utilisateur inscrit", time: "Il y a 10 min" },
    { id: 4, type: "success", message: "Bannière publicitaire activée", time: "Il y a 15 min" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Évolution des Annonces</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="annonces" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs par Mois</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="utilisateurs" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activités Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mode Hors-Ligne */}
      <OfflineMode />
    </div>
  );
};

export default DashboardHome;
