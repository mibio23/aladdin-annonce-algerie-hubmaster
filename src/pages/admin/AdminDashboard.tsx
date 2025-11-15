
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardHome from "@/components/admin/dashboard/DashboardHome";
import EnhancedBannerManagement from "@/components/admin/banners/EnhancedBannerManagement";
import CategoryManagement from "@/components/admin/categories/CategoryManagement";
import AnnouncementManagement from "@/components/admin/announcements/AnnouncementManagement";
import UserManagement from "@/components/admin/users/UserManagement";
import AnalyticsPanel from "@/components/admin/analytics/AnalyticsPanel";
import SettingsPanel from "@/components/admin/settings/SettingsPanel";
import ContentManagement from "@/components/admin/content/ContentManagement";
import FeatureManagement from "@/components/admin/features/FeatureManagement";
import SearchManagement from "@/components/admin/SearchManagement";
import NotificationSystemPanel from "@/components/admin/features/panels/notifications/NotificationSystemPanel";
import { AdminProtectedRoute } from "@/components/admin/AdminProtectedRoute";


const AdminDashboard = () => {
  return (
    <AdminProtectedRoute>
      <div className="min-h-screen bg-gray-100 flex">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/banners" element={<EnhancedBannerManagement />} />
              <Route path="/categories" element={<CategoryManagement />} />
              <Route path="/announcements" element={<AnnouncementManagement />} />
              <Route path="/users" element={
                <AdminProtectedRoute requireAdmin={true}>
                  <UserManagement />
                </AdminProtectedRoute>
              } />
              <Route path="/analytics" element={<AnalyticsPanel />} />
              <Route path="/search" element={<SearchManagement />} />
              <Route path="/features" element={
                <AdminProtectedRoute requireAdmin={true}>
                  <FeatureManagement />
                </AdminProtectedRoute>
              } />
              <Route path="/notifications" element={<NotificationSystemPanel />} />
              <Route path="/content" element={<ContentManagement />} />
              <Route path="/settings" element={
                <AdminProtectedRoute requireAdmin={true}>
                  <SettingsPanel />
                </AdminProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </AdminProtectedRoute>
  );
};

export default AdminDashboard;
