import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Megaphone, 
  FolderTree, 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  Palette,
  Zap,
  Search,
  Bell,
  Activity
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: "Dashboard", exact: true },
    { path: "/admin/banners", icon: Megaphone, label: "Bannières" },
    { path: "/admin/categories", icon: FolderTree, label: "Catégories" },
    { path: "/admin/announcements", icon: FileText, label: "Annonces" },
    { path: "/admin/users", icon: Users, label: "Utilisateurs" },
    { path: "/admin/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/admin/search", icon: Search, label: "Système de Recherche" },
    { path: "/admin/features", icon: Zap, label: "Fonctionnalités", badge: "NOUVEAU" },
    { path: "/admin/notifications", icon: Bell, label: "Notifications", badge: "NOUVEAU" },
    { path: "/admin/content", icon: Palette, label: "Contenu" },
    { path: "/admin/system-status", icon: Activity, label: "Système Aladdin" },
    { path: "/admin/settings", icon: Settings, label: "Paramètres" },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">Administration</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path, item.exact)
                    ? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
