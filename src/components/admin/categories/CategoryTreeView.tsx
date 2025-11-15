import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ChevronDown, 
  ChevronRight, 
  Edit, 
  Trash2, 
  Move,
  Search,
  FolderTree,
  Eye,
  EyeOff
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CategoryTreeItem {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  children: CategoryTreeItem[];
  isActive: boolean;
  sortOrder: number;
  announcementCount: number;
}

interface CategoryTreeViewProps {
  categories: CategoryTreeItem[];
  onEdit: (category: CategoryTreeItem) => void;
  onDelete: (categoryId: string) => void;
  onToggleStatus: (categoryId: string, isActive: boolean) => void;
  onMove: (categoryId: string, newParentId?: string, newSortOrder?: number) => void;
}

const CategoryTreeView: React.FC<CategoryTreeViewProps> = ({
  categories,
  onEdit,
  onDelete,
  onToggleStatus,
  onMove
}) => {
  const { toast } = useToast();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<CategoryTreeItem[]>(categories);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCategories(categories);
      return;
    }

    const filterCategories = (items: CategoryTreeItem[]): CategoryTreeItem[] => {
      return items.reduce((acc: CategoryTreeItem[], item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.slug.toLowerCase().includes(searchTerm.toLowerCase());
        
        const filteredChildren = filterCategories(item.children);
        
        if (matchesSearch || filteredChildren.length > 0) {
          acc.push({
            ...item,
            children: filteredChildren
          });
          
          if (filteredChildren.length > 0) {
            setExpandedItems(prev => new Set([...prev, item.id]));
          }
        }
        
        return acc;
      }, []);
    };

    setFilteredCategories(filterCategories(categories));
  }, [searchTerm, categories]);

  const toggleExpanded = (categoryId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleDragStart = (e: React.DragEvent, categoryId: string) => {
    setDraggedItem(categoryId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetCategoryId?: string) => {
    e.preventDefault();
    if (draggedItem && draggedItem !== targetCategoryId) {
      onMove(draggedItem, targetCategoryId);
      toast({
        title: "Catégorie déplacée",
        description: "La hiérarchie des catégories a été mise à jour"
      });
    }
    setDraggedItem(null);
  };

  const renderCategoryItem = (category: CategoryTreeItem, level = 0) => {
    const isExpanded = expandedItems.has(category.id);
    const hasChildren = category.children.length > 0;
    const indent = level * 24;

    return (
      <div key={category.id} className="w-full">
        <div 
          className={`flex items-center p-2 border rounded-lg mb-1 ${
            draggedItem === category.id ? 'opacity-50' : ''
          } ${!category.isActive ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 cursor-pointer`}
          style={{ marginLeft: `${indent}px` }}
          draggable
          onDragStart={(e) => handleDragStart(e, category.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, category.id)}
        >
          <div className="flex items-center flex-1 space-x-2">
            {hasChildren ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded(category.id)}
                className="p-1 h-6 w-6"
              >
                {isExpanded ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                }
              </Button>
            ) : (
              <div className="w-6" />
            )}
            
            <FolderTree className="w-4 h-4 text-blue-500" />
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className={`font-medium ${!category.isActive ? 'text-gray-500' : ''}`}>
                  {category.name}
                </span>
                <Badge variant="outline" className="text-xs">
                  {category.announcementCount} annonces
                </Badge>
                {!category.isActive && (
                  <Badge variant="secondary" className="text-xs">
                    Inactif
                  </Badge>
                )}
              </div>
              <div className="text-sm text-gray-500">
                /{category.slug}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleStatus(category.id, !category.isActive)}
              className="p-1 h-8 w-8"
              title={category.isActive ? "Désactiver" : "Activer"}
            >
              {category.isActive ? 
                <Eye className="w-4 h-4 text-green-600" /> : 
                <EyeOff className="w-4 h-4 text-gray-400" />
              }
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(category)}
              className="p-1 h-8 w-8"
              title="Modifier"
            >
              <Edit className="w-4 h-4 text-blue-600" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(category.id)}
              className="p-1 h-8 w-8"
              title="Supprimer"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </Button>
            
            <div className="p-1 h-8 w-8 flex items-center justify-center cursor-move" title="Glisser pour déplacer">
              <Move className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-4">
            {category.children.map(child => renderCategoryItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FolderTree className="w-5 h-5" />
            <span>Arborescence des Catégories</span>
          </div>
          <Badge variant="outline">
            {categories.length} catégories
          </Badge>
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-400" />
          <Input
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="space-y-1 max-h-96 overflow-y-auto"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e)}
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map(category => renderCategoryItem(category))
          ) : (
            <div className="text-center py-8 text-gray-500">
              {searchTerm ? "Aucune catégorie trouvée" : "Aucune catégorie disponible"}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryTreeView;
