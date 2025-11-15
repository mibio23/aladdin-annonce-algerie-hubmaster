
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";

const ContentManagement = () => {
  const pages = [
    { id: 1, title: "Notre Histoire", slug: "notre-histoire", status: "published", lastModified: "2024-01-15" },
    { id: 2, title: "Carrières", slug: "carrieres", status: "published", lastModified: "2024-01-14" },
    { id: 3, title: "Conditions d'utilisation", slug: "conditions", status: "draft", lastModified: "2024-01-13" },
    { id: 4, title: "Politique de confidentialité", slug: "privacy", status: "published", lastModified: "2024-01-12" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion du Contenu</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle Page
        </Button>
      </div>

      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="menus">Menus</TabsTrigger>
          <TabsTrigger value="translations">Traductions</TabsTrigger>
          <TabsTrigger value="media">Médias</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{page.title}</h3>
                      <p className="text-sm text-gray-500">/{page.slug}</p>
                      <p className="text-xs text-gray-400">
                        Modifié le {page.lastModified} • Statut: {page.status}
                      </p>
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

        <TabsContent value="menus" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Structure des Menus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Menu Principal</h3>
                  <p className="text-sm text-gray-500">Navigation principale du site</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Menu Footer</h3>
                  <p className="text-sm text-gray-500">Liens dans le pied de page</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="translations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Traductions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Langue Source</Label>
                    <p className="text-sm text-gray-600">Français (Primaire)</p>
                  </div>
                  <div>
                    <Label>Langues Disponibles</Label>
                    <p className="text-sm text-gray-600">Arabe, Anglais, Espagnol, Allemand</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Interface Utilisateur</span>
                    <div className="space-x-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">100% FR</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">85% AR</span>
                      <Button variant="outline" size="sm">Modifier</Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Catégories</span>
                    <div className="space-x-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">100% FR</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">100% AR</span>
                      <Button variant="outline" size="sm">Modifier</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bibliothèque de Médias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <div className="w-full h-24 bg-gray-100 rounded mb-2"></div>
                  <p className="text-xs">logo-aladdin.png</p>
                  <p className="text-xs text-gray-500">125KB</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="w-full h-24 bg-gray-100 rounded mb-2"></div>
                  <p className="text-xs">banner-promo.jpg</p>
                  <p className="text-xs text-gray-500">452KB</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="w-full h-24 bg-gray-100 rounded mb-2"></div>
                  <p className="text-xs">hero-background.jpg</p>
                  <p className="text-xs text-gray-500">1.2MB</p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400">
                  <Plus className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-xs text-gray-500">Ajouter un média</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
