import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, BarChart3, ExternalLink } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { AdvertisingBanner } from '@/hooks/useAdvertisingBanners';
import BannerForm from './BannerForm';

const EnhancedBannerManagement = () => {
  const [banners, setBanners] = useState<AdvertisingBanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<AdvertisingBanner | undefined>();
  const [stats, setStats] = useState({
    totalBanners: 0,
    activeBanners: 0,
    totalClicks: 0,
    totalImpressions: 0,
  });

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('advertising_banners')
        .select('*')
        .order('position_order');

      if (error) throw error;

      setBanners((data || []).map(banner => ({
        ...banner,
        description: banner.description || undefined,
        image_url: banner.image_url || undefined,
        link_url: banner.link_url || undefined,
        end_at: banner.end_at || undefined,
        icon_emoji: banner.icon_emoji || undefined,
        created_by: banner.created_by || undefined,
      })));
      
      // Calculate stats
      const activeBanners = data?.filter(b => b.is_active).length || 0;
      setStats({
        totalBanners: data?.length || 0,
        activeBanners,
        totalClicks: 0, // À implémenter avec analytics
        totalImpressions: 0, // À implémenter avec analytics
      });
    } catch (error) {
      console.error('Error fetching banners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bannerId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette bannière ?')) return;

    try {
      const { error } = await supabase
        .from('advertising_banners')
        .delete()
        .eq('id', bannerId);

      if (error) throw error;
      fetchBanners();
    } catch (error) {
      console.error('Error deleting banner:', error);
    }
  };

  const handleToggleActive = async (banner: AdvertisingBanner) => {
    try {
      const { error } = await supabase
        .from('advertising_banners')
        .update({ is_active: !banner.is_active })
        .eq('id', banner.id);

      if (error) throw error;
      fetchBanners();
    } catch (error) {
      console.error('Error updating banner:', error);
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setEditingBanner(undefined);
    fetchBanners();
  };

  const handleEdit = (banner: AdvertisingBanner) => {
    setEditingBanner(banner);
    setShowForm(true);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  if (showForm) {
    return (
      <div className="p-6">
        <BannerForm
          banner={editingBanner}
          onSave={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingBanner(undefined);
          }}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion du Carrousel Publicitaire</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle Bannière
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bannières</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBanners}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bannières Actives</CardTitle>
            <Eye className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeBanners}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clics Totaux</CardTitle>
            <ExternalLink className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClicks}</div>
            <p className="text-xs text-muted-foreground">Analytics à venir</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalImpressions}</div>
            <p className="text-xs text-muted-foreground">Analytics à venir</p>
          </CardContent>
        </Card>
      </div>

      {/* Aperçu du carrousel */}
      <Card>
        <CardHeader>
          <CardTitle>Aperçu du Carrousel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
            {banners.filter(b => b.is_active).length > 0 ? (
              <div className="flex space-x-4 p-4">
                {banners.filter(b => b.is_active).slice(0, 3).map((banner) => (
                  <div
                    key={banner.id}
                    className={`flex-1 h-40 rounded-lg bg-gradient-to-r ${banner.background_gradient} p-4 text-white`}
                  >
                    <div className="flex items-center justify-between h-full">
                      <div>
                        <h3 className="font-bold text-lg">{banner.title}</h3>
                        {banner.subtitle && (
                          <p className="text-sm opacity-90">{banner.subtitle}</p>
                        )}
                      </div>
                      <div className="text-3xl">
                        {banner.icon_emoji || '🎯'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Aucune bannière active
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Liste des bannières */}
      <Card>
        <CardHeader>
          <CardTitle>Toutes les Bannières</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Chargement...</div>
          ) : banners.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Aucune bannière créée. Cliquez sur "Nouvelle Bannière" pour commencer.
            </div>
          ) : (
            <div className="space-y-4">
              {banners.map((banner) => (
                <div key={banner.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${banner.background_gradient} flex items-center justify-center text-white text-2xl`}>
                      {banner.image_url ? (
                        <img 
                          src={banner.image_url} 
                          alt={banner.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        banner.icon_emoji || '🎯'
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{banner.title}</h3>
                      {banner.subtitle && (
                        <p className="text-sm text-gray-500">{banner.subtitle}</p>
                      )}
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={banner.is_active ? 'default' : 'secondary'}>
                          {banner.is_active ? 'Actif' : 'Inactif'}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          Ordre: {banner.position_order}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(banner)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(banner)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(banner.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedBannerManagement;
