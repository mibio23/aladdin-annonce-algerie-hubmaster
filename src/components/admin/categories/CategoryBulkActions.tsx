import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Upload, 
  RefreshCw, 
  Database, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Pause,
  Settings
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface BulkOperation {
  id: string;
  type: 'import' | 'export' | 'update' | 'generate';
  status: 'pending' | 'running' | 'completed' | 'error';
  progress: number;
  message: string;
  createdAt: Date;
  completedAt?: Date;
}

const CategoryBulkActions: React.FC = () => {
  const [operations, setOperations] = useState<BulkOperation[]>([]);
  const [importData, setImportData] = useState<string>("");
  const [selectedOperation, setSelectedOperation] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImportCategories = async () => {
    if (!importData.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir des données à importer",
        variant: "destructive"
      });
      return;
    }

    const newOperation: BulkOperation = {
      id: Date.now().toString(),
      type: 'import',
      status: 'running',
      progress: 0,
      message: "Importation en cours...",
      createdAt: new Date()
    };

    setOperations(prev => [newOperation, ...prev]);
    setIsProcessing(true);

    // Simulation du processus d'importation
    try {
      const lines = importData.split('\n').filter(line => line.trim());
      const total = lines.length;

      for (let i = 0; i < total; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setOperations(prev => prev.map(op => 
          op.id === newOperation.id 
            ? { ...op, progress: Math.round(((i + 1) / total) * 100) }
            : op
        ));
      }

      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'completed', 
              progress: 100, 
              message: `${total} catégories importées avec succès`,
              completedAt: new Date()
            }
          : op
      ));

      toast({
        title: "Import terminé",
        description: `${total} catégories ont été importées avec succès`
      });

      setImportData("");
    } catch (error) {
      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'error', 
              message: "Erreur lors de l'importation",
              completedAt: new Date()
            }
          : op
      ));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExportCategories = async () => {
    const newOperation: BulkOperation = {
      id: Date.now().toString(),
      type: 'export',
      status: 'running',
      progress: 0,
      message: "Exportation en cours...",
      createdAt: new Date()
    };

    setOperations(prev => [newOperation, ...prev]);

    // Simulation de l'exportation
    try {
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setOperations(prev => prev.map(op => 
          op.id === newOperation.id 
            ? { ...op, progress: i }
            : op
        ));
      }

      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'completed', 
              progress: 100, 
              message: "Export terminé - Téléchargement disponible",
              completedAt: new Date()
            }
          : op
      ));

      // Simulation du téléchargement
      const csvContent = "nom,slug,parent,description\nÉlectronique,electronique,,Produits électroniques";
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'categories.csv';
      a.click();
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export terminé",
        description: "Le fichier CSV a été téléchargé"
      });
    } catch (error) {
      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'error', 
              message: "Erreur lors de l'exportation",
              completedAt: new Date()
            }
          : op
      ));
    }
  };

  const handleAutoGenerate = async () => {
    const newOperation: BulkOperation = {
      id: Date.now().toString(),
      type: 'generate',
      status: 'running',
      progress: 0,
      message: "Génération automatique des sous-catégories...",
      createdAt: new Date()
    };

    setOperations(prev => [newOperation, ...prev]);

    try {
      const categories = [
        "Smartphones", "Ordinateurs portables", "Tablettes", "Écouteurs",
        "Montres connectées", "Appareils photo", "Consoles de jeu", "Télévisions"
      ];

      for (let i = 0; i < categories.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        setOperations(prev => prev.map(op => 
          op.id === newOperation.id 
            ? { 
                ...op, 
                progress: Math.round(((i + 1) / categories.length) * 100),
                message: `Génération: ${categories[i]}...`
              }
            : op
        ));
      }

      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'completed', 
              progress: 100, 
              message: `${categories.length} sous-catégories générées automatiquement`,
              completedAt: new Date()
            }
          : op
      ));

      toast({
        title: "Génération terminée",
        description: `${categories.length} sous-catégories ont été créées automatiquement`
      });
    } catch (error) {
      setOperations(prev => prev.map(op => 
        op.id === newOperation.id 
          ? { 
              ...op, 
              status: 'error', 
              message: "Erreur lors de la génération automatique",
              completedAt: new Date()
            }
          : op
      ));
    }
  };

  const getStatusIcon = (status: BulkOperation['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'running':
        return <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />;
      default:
        return <Pause className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: BulkOperation['status']) => {
    const variants = {
      completed: 'default',
      error: 'destructive',
      running: 'secondary',
      pending: 'outline'
    } as const;

    return (
      <Badge variant={variants[status]}>
        {status === 'completed' ? 'Terminé' :
         status === 'error' ? 'Erreur' :
         status === 'running' ? 'En cours' : 'En attente'}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <span>Actions en Lot</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="import" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="import">Import</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
              <TabsTrigger value="update">Mise à jour</TabsTrigger>
              <TabsTrigger value="generate">Auto-génération</TabsTrigger>
            </TabsList>

            <TabsContent value="import" className="space-y-4">
              <div>
                <Label>Données CSV à importer</Label>
                <Textarea
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  placeholder="nom,slug,parent,description&#10;Électronique,electronique,,Produits électroniques&#10;Smartphones,smartphones,electronique,Téléphones intelligents"
                  rows={6}
                  className="font-mono text-sm"
                />
              </div>
              <Button 
                onClick={handleImportCategories} 
                disabled={isProcessing}
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                Importer les catégories
              </Button>
            </TabsContent>

            <TabsContent value="export" className="space-y-4">
              <div className="space-y-2">
                <Label>Format d'exportation</Label>
                <Select defaultValue="csv">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleExportCategories} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Exporter toutes les catégories
              </Button>
            </TabsContent>

            <TabsContent value="update" className="space-y-4">
              <div className="space-y-2">
                <Label>Type de mise à jour</Label>
                <Select value={selectedOperation} onValueChange={setSelectedOperation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une opération" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="update-slugs">Régénérer tous les slugs</SelectItem>
                    <SelectItem value="update-counts">Recalculer les compteurs</SelectItem>
                    <SelectItem value="update-seo">Optimiser le SEO</SelectItem>
                    <SelectItem value="update-images">Optimiser les images</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                disabled={!selectedOperation}
                className="w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Exécuter la mise à jour
              </Button>
            </TabsContent>

            <TabsContent value="generate" className="space-y-4">
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-medium text-blue-900 mb-2">Génération automatique</h4>
                <p className="text-sm text-blue-700">
                  Cette fonction va analyser vos catégories existantes et générer automatiquement 
                  des sous-catégories pertinentes basées sur l'intelligence artificielle.
                </p>
              </div>
              <Button onClick={handleAutoGenerate} className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Générer automatiquement
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Historique des Opérations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {operations.length > 0 ? (
              operations.map((operation) => (
                <div key={operation.id} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(operation.status)}
                      <span className="font-medium capitalize">
                        {operation.type === 'import' ? 'Import' :
                         operation.type === 'export' ? 'Export' :
                         operation.type === 'update' ? 'Mise à jour' : 'Génération'}
                      </span>
                      {getStatusBadge(operation.status)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {operation.createdAt.toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{operation.message}</span>
                      <span>{operation.progress}%</span>
                    </div>
                    <Progress value={operation.progress} className="h-2" />
                  </div>
                  
                  {operation.completedAt && (
                    <div className="text-xs text-gray-500">
                      Terminé à {operation.completedAt.toLocaleTimeString()}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Aucune opération en cours
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryBulkActions;
