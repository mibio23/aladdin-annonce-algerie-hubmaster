import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, FolderTree, Eye, Settings, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CategoryEditor from "./CategoryEditor";
import CategoryTreeView from "./CategoryTreeView";
import CategoryBulkActions from "./CategoryBulkActions";
import { toast } from "@/components/ui/use-toast";

interface CategoryData {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  children: CategoryData[];
  isActive: boolean;
  sortOrder: number;
  announcementCount: number;
  seoTitle?: string;
  seoDescription?: string;
  metaTags?: string[];
}

const CategoryManagement = () => {
  const [categories, setCategories] = useState<CategoryData[]>([
    { 
      id: "1", 
      name: "Immobilier", 
      slug: "immobilier", 
      description: "Vente et location de biens immobiliers",
      parentId: undefined,
      children: [
        { id: "1-1", name: "Vente", slug: "vente", parentId: "1", children: [], isActive: true, sortOrder: 1, announcementCount: 456 },
        { id: "1-2", name: "Location", slug: "location", parentId: "1", children: [], isActive: true, sortOrder: 2, announcementCount: 778 }
      ],
      isActive: true, 
      sortOrder: 1, 
      announcementCount: 1234,
      seoTitle: "Annonces Immobilier Algérie - Vente et Location",
      seoDescription: "Trouvez votre bien immobilier en Algérie",
      metaTags: ["immobilier", "vente", "location", "algérie"]
    },
    { 
      id: "2", 
      name: "Véhicules", 
      slug: "vehicules", 
      description: "Voitures, motos et véhicules utilitaires",
      parentId: undefined,
      children: [
        { id: "2-1", name: "Voitures", slug: "voitures", parentId: "2", children: [], isActive: true, sortOrder: 1, announcementCount: 567 },
        { id: "2-2", name: "Motos", slug: "motos", parentId: "2", children: [], isActive: true, sortOrder: 2, announcementCount: 234 },
        { id: "2-3", name: "Utilitaires", slug: "utilitaires", parentId: "2", children: [], isActive: true, sortOrder: 3, announcementCount: 91 }
      ],
      isActive: true, 
      sortOrder: 2, 
      announcementCount: 892,
      seoTitle: "Véhicules Occasion Algérie - Voitures et Motos",
      seoDescription: "Achat et vente de véhicules d'occasion en Algérie",
      metaTags: ["véhicules", "voitures", "motos", "occasion"]
    },
    { 
      id: "3", 
      name: "Électronique", 
      slug: "electronique", 
      description: "Appareils électroniques et high-tech",
      parentId: undefined,
      children: [
        { id: "3-1", name: "Smartphones", slug: "smartphones", parentId: "3", children: [], isActive: true, sortOrder: 1, announcementCount: 234 },
        { id: "3-2", name: "Ordinateurs", slug: "ordinateurs", parentId: "3", children: [], isActive: true, sortOrder: 2, announcementCount: 189 },
        { id: "3-3", name: "TV & Audio", slug: "tv-audio", parentId: "3", children: [], isActive: true, sortOrder: 3, announcementCount: 144 }
      ],
      isActive: true, 
      sortOrder: 3, 
      announcementCount: 567,
      seoTitle: "Électronique Algérie - Smartphones, PC, TV",
      seoDescription: "Achat et vente d'appareils électroniques en Algérie",
      metaTags: ["électronique", "smartphones", "ordinateurs", "tv"]
    },
    { 
      id: "4", 
      name: "Mode", 
      slug: "mode", 
      description: "Vêtements, chaussures et accessoires",
      parentId: undefined,
      children: [
        { id: "4-1", name: "Femme", slug: "femme", parentId: "4", children: [], isActive: true, sortOrder: 1, announcementCount: 178 },
        { id: "4-2", name: "Homme", slug: "homme", parentId: "4", children: [], isActive: true, sortOrder: 2, announcementCount: 123 },
        { id: "4-3", name: "Enfant", slug: "enfant", parentId: "4", children: [], isActive: true, sortOrder: 3, announcementCount: 44 }
      ],
      isActive: true, 
      sortOrder: 4, 
      announcementCount: 345,
      seoTitle: "Mode & Vêtements Algérie - Femme, Homme, Enfant",
      seoDescription: "Vêtements et accessoires de mode en Algérie",
      metaTags: ["mode", "vêtements", "chaussures", "accessoires"]
    },
    { 
      id: "5", 
      name: "Emploi", 
      slug: "emploi", 
      description: "Offres d'emploi et recrutement",
      parentId: undefined,
      children: [
        { id: "5-1", name: "CDI", slug: "cdi", parentId: "5", children: [], isActive: true, sortOrder: 1, announcementCount: 345 },
        { id: "5-2", name: "CDD", slug: "cdd", parentId: "5", children: [], isActive: true, sortOrder: 2, announcementCount: 234 },
        { id: "5-3", name: "Freelance", slug: "freelance", parentId: "5", children: [], isActive: true, sortOrder: 3, announcementCount: 99 }
      ],
      isActive: true, 
      sortOrder: 5, 
      announcementCount: 678,
      seoTitle: "Emploi Algérie - Offres de travail et recrutement",
      seoDescription: "Trouvez votre emploi idéal en Algérie",
      metaTags: ["emploi", "travail", "recrutement", "carrière"]
    },
  ]);

  const [editingCategory, setEditingCategory] = useState<CategoryData | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("list");

  const handleSaveCategory = (categoryData: any) => {
    if (editingCategory) {
      // Mise à jour
      setCategories(prev => updateCategoryInTree(prev, editingCategory.id, categoryData));
      toast({
        title: "Catégorie mise à jour",
        description: `La catégorie "${categoryData.name}" a été mise à jour avec succès`
      });
    } else {
      // Création
      const newCategory: CategoryData = {
        ...categoryData,
        id: Date.now().toString(),
        children: [],
        announcementCount: 0
      };
      
      if (categoryData.parentId) {
        setCategories(prev => addChildToCategory(prev, categoryData.parentId, newCategory));
      } else {
        setCategories(prev => [...prev, newCategory]);
      }
      
      toast({
        title: "Catégorie créée",
        description: `La catégorie "${categoryData.name}" a été créée avec succès`
      });
    }
    
    setIsEditorOpen(false);
    setEditingCategory(null);
  };

  const handleEditCategory = (category: CategoryData) => {
    setEditingCategory(category);
    setIsEditorOpen(true);
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(prev => removeCategoryFromTree(prev, categoryId));
    toast({
      title: "Catégorie supprimée",
      description: "La catégorie a été supprimée avec succès"
    });
  };

  const handleToggleStatus = (categoryId: string, isActive: boolean) => {
    setCategories(prev => updateCategoryInTree(prev, categoryId, { isActive }));
    toast({
      title: isActive ? "Catégorie activée" : "Catégorie désactivée",
      description: "Le statut de la catégorie a été mis à jour"
    });
  };

  const handleMoveCategory = () => {
    // Logique de déplacement des catégories
    toast({
      title: "Catégorie déplacée",
      description: "La hiérarchie a été mise à jour"
    });
  };

  // Fonctions utilitaires pour manipuler l'arbre de catégories
  const updateCategoryInTree = (categories: CategoryData[], categoryId: string, updates: Partial<CategoryData>): CategoryData[] => {
    return categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, ...updates };
      }
      if (category.children.length > 0) {
        return {
          ...category,
          children: updateCategoryInTree(category.children, categoryId, updates)
        };
      }
      return category;
    });
  };

  const removeCategoryFromTree = (categories: CategoryData[], categoryId: string): CategoryData[] => {
    return categories.filter(category => {
      if (category.id === categoryId) {
        return false;
      }
      if (category.children.length > 0) {
        category.children = removeCategoryFromTree(category.children, categoryId);
      }
      return true;
    });
  };

  const addChildToCategory = (categories: CategoryData[], parentId: string, newCategory: CategoryData): CategoryData[] => {
    return categories.map(category => {
      if (category.id === parentId) {
        return {
          ...category,
          children: [...category.children, newCategory]
        };
      }
      if (category.children.length > 0) {
        return {
          ...category,
          children: addChildToCategory(category.children, parentId, newCategory)
        };
      }
      return category;
    });
  };

  const getAllCategoriesFlat = (categories: CategoryData[]): CategoryData[] => {
    const flat: CategoryData[] = [];
    const traverse = (cats: CategoryData[]) => {
      cats.forEach(cat => {
        flat.push(cat);
        if (cat.children.length > 0) {
          traverse(cat.children);
        }
      });
    };
    traverse(categories);
    return flat;
  };

  const totalCategories = getAllCategoriesFlat(categories).length;
  const activeCategories = getAllCategoriesFlat(categories).filter(cat => cat.isActive).length;
  const totalAnnouncements = getAllCategoriesFlat(categories).reduce((sum, cat) => sum + cat.announcementCount, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion des Catégories</h1>
        <Button onClick={() => { setEditingCategory(null); setIsEditorOpen(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle Catégorie
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Catégories Totales</CardTitle>
            <FolderTree className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCategories}</div>
            <p className="text-xs text-muted-foreground">{activeCategories} actives</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Catégories Principales</CardTitle>
            <FolderTree className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">Niveau racine</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sous-catégories</CardTitle>
            <FolderTree className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCategories - categories.length}</div>
            <p className="text-xs text-muted-foreground">Niveaux inférieurs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annonces Totales</CardTitle>
            <Eye className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAnnouncements.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Dans toutes les catégories</p>
          </CardContent>
        </Card>
      </div>

      {/* Onglets principaux */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="list">Liste & Arborescence</TabsTrigger>
          <TabsTrigger value="bulk">Actions en Lot</TabsTrigger>
          <TabsTrigger value="settings">Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-6">
          <CategoryTreeView
            categories={categories}
            onEdit={handleEditCategory}
            onDelete={handleDeleteCategory}
            onToggleStatus={handleToggleStatus}
            onMove={handleMoveCategory}
          />
        </TabsContent>

        <TabsContent value="bulk">
          <CategoryBulkActions />
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Configuration Générale</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Profondeur maximale de l'arborescence</Label>
                  <Input type="number" defaultValue="3" />
                </div>
                <div>
                  <Label>Nombre max de catégories par niveau</Label>
                  <Input type="number" defaultValue="50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <Label>Génération automatique des slugs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <Label>Validation automatique des nouvelles catégories</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch />
                  <Label>Sauvegarde automatique des modifications</Label>
                </div>
              </div>

              <Button>
                <Database className="w-4 h-4 mr-2" />
                Sauvegarder la configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialogue d'édition */}
      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCategory ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
            </DialogTitle>
          </DialogHeader>
          <CategoryEditor
            category={editingCategory || undefined}
            parentCategories={getAllCategoriesFlat(categories).filter(cat => !editingCategory || cat.id !== editingCategory.id)}
            onSave={handleSaveCategory}
            onCancel={() => setIsEditorOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryManagement;
