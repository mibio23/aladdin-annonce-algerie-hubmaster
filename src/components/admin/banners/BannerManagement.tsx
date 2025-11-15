import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2, Eye, BarChart3, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BannerManagement = () => {
  const [banners] = useState([
    {
      id: 1,
      name: "Bannière Promotion Électronique",
      type: "static",
      position: "top-left",
      status: "active",
      clicks: 234,
      impressions: 5678,
      startDate: "2024-01-15",
      endDate: "2024-02-15"
    },
    {
      id: 2,
      name: "Carrousel Automobiles",
      type: "carousel",
      position: "top-right",
      status: "active",
      clicks: 456,
      impressions: 8910,
      startDate: "2024-01-10",
      endDate: "2024-03-10"
    },
    {
      id: 3,
      name: "Bannière Immobilier",
      type: "static",
      position: "bottom-left",
      status: "paused",
      clicks: 123,
      impressions: 2345,
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion des Bannières Publicitaires</h1>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2"  />
          Nouvelle Bannière
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="static">Bannières Statiques</TabsTrigger>
          <TabsTrigger value="carousel">Carrousels</TabsTrigger>
          <TabsTrigger value="analytics">Analyses</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bannières Actives</CardTitle>
                <Eye className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 cette semaine</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Impressions Totales</CardTitle>
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,623</div>
                <p className="text-xs text-muted-foreground">+15% vs mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taux de Clic</CardTitle>
                <BarChart3 className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% vs mois dernier</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                <BarChart3 className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€2,456</div>
                <p className="text-xs text-muted-foreground">+23% vs mois dernier</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Configuration des Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold">Bannières Statiques (Côte à Côte)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-lg">
                      <p className="text-sm text-gray-500">Position Gauche</p>
                      <p className="text-xs text-gray-400">300x250px</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-lg">
                      <p className="text-sm text-gray-500">Position Droite</p>
                      <p className="text-xs text-gray-400">300x250px</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Carrousels (Côte à Côte)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-blue-300 p-4 text-center rounded-lg">
                      <p className="text-sm text-blue-600">Carrousel Gauche</p>
                      <p className="text-xs text-blue-400">Jusqu'à 5 slides</p>
                    </div>
                    <div className="border-2 border-dashed border-blue-300 p-4 text-center rounded-lg">
                      <p className="text-sm text-blue-600">Carrousel Droite</p>
                      <p className="text-xs text-blue-400">Jusqu'à 5 slides</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="static" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bannières Statiques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {banners.filter(b => b.type === 'static').map((banner) => (
                  <div key={banner.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{banner.name}</h3>
                        <p className="text-sm text-gray-500">Position: {banner.position}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={banner.status === 'active' ? 'default' : 'secondary'}>
                            {banner.status}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {banner.clicks} clics / {banner.impressions} vues
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="carousel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Carrousels Publicitaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {banners.filter(b => b.type === 'carousel').map((banner) => (
                  <div key={banner.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{banner.name}</h3>
                        <p className="text-sm text-gray-500">Position: {banner.position}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={banner.status === 'active' ? 'default' : 'secondary'}>
                            {banner.status}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {banner.clicks} clics / {banner.impressions} vues
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance par Bannière</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {banners.map((banner) => (
                    <div key={banner.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{banner.name}</p>
                        <p className="text-sm text-gray-500">CTR: {(banner.clicks / banner.impressions * 100).toFixed(2)}%</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{banner.clicks} clics</p>
                        <p className="text-sm text-gray-500">{banner.impressions} vues</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ciblage et Audiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Utilisateurs ciblés</span>
                    <span className="font-medium">15,432</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taux de conversion</span>
                    <span className="font-medium">2.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coût par clic</span>
                    <span className="font-medium">€0.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI</span>
                    <span className="font-medium text-green-600">+145%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {showCreateForm && (
        <Card className="fixed inset-0 z-50 m-8 overflow-y-auto">
          <CardHeader>
            <CardTitle>Créer une Nouvelle Bannière</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nom de la bannière</Label>
                <Input id="name" placeholder="Ex: Promotion Électronique" />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="static">Bannière Statique</SelectItem>
                    <SelectItem value="carousel">Carrousel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="position">Position</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner la position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-left">Haut Gauche</SelectItem>
                    <SelectItem value="top-right">Haut Droite</SelectItem>
                    <SelectItem value="bottom-left">Bas Gauche</SelectItem>
                    <SelectItem value="bottom-right">Bas Droite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category">Catégorie ciblée</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes</SelectItem>
                    <SelectItem value="electronics">Électronique</SelectItem>
                    <SelectItem value="auto">Automobile</SelectItem>
                    <SelectItem value="real-estate">Immobilier</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">Date de début</Label>
                <Input id="start-date" type="date" />
              </div>
              <div>
                <Label htmlFor="end-date">Date de fin</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="url">URL de destination</Label>
              <Input id="url" placeholder="https://example.com" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description de la bannière..." />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="active" />
              <Label htmlFor="active">Activer immédiatement</Label>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Annuler
              </Button>
              <Button onClick={() => setShowCreateForm(false)}>
                Créer la Bannière
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BannerManagement;
