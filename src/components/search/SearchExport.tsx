import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Download, FileText, Table } from 'lucide-react';
import { Announcement } from '@/hooks/useAnnouncements';
import { useToast } from '@/hooks/use-toast';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface SearchExportProps {
  announcements: Announcement[];
  searchQuery: string;
  isOpen: boolean;
  onClose: () => void;
}

const SearchExport: React.FC<SearchExportProps> = ({
  announcements,
  searchQuery,
  isOpen,
  onClose
}) => {
  const { t } = useSafeI18nWithRouter();
  const { toast } = useToast();
  const [exportFormat, setExportFormat] = useState<'csv' | 'pdf' | 'json'>('csv');
  const [selectedFields, setSelectedFields] = useState<string[]>([
    'title', 'price', 'location', 'created_at'
  ]);
  const [includeImages, setIncludeImages] = useState(false);

  const availableFields = [
    { id: 'title', label: t('fieldLabels.title') },
    { id: 'price', label: t('fieldLabels.price') },
    { id: 'location', label: t('fieldLabels.location') },
    { id: 'condition', label: t('fieldLabels.condition') },
    { id: 'created_at', label: t('fieldLabels.createdAt') },
    { id: 'description', label: t('fieldLabels.description') },
    { id: 'contact_phone', label: t('fieldLabels.contactPhone') },
    { id: 'contact_email', label: t('fieldLabels.contactEmail') },
    { id: 'views_count', label: t('fieldLabels.viewsCount') },
    { id: 'is_urgent', label: t('fieldLabels.isUrgent') },
    { id: 'is_featured', label: t('fieldLabels.isFeatured') }
  ];

  const handleFieldToggle = (fieldId: string, checked: boolean) => {
    if (checked) {
      setSelectedFields(prev => [...prev, fieldId]);
    } else {
      setSelectedFields(prev => prev.filter(id => id !== fieldId));
    }
  };

  const exportToCSV = () => {
    const headers = selectedFields.map(field => 
      availableFields.find(f => f.id === field)?.label || field
    );
    
    const rows = announcements.map(announcement => 
      selectedFields.map(field => {
        const value = announcement[field as keyof Announcement];
        if (typeof value === 'boolean') return value ? 'Oui' : 'Non';
        if (Array.isArray(value)) return value.join(', ');
        return String(value || '');
      })
    );

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const filename = `recherche_${searchQuery.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    
    toast({
      title: t('exportSuccess'),
      description: `${t('exportedDescription')} (${announcements.length} ${t('announcements')})`
    });
  };

  const exportToPDF = () => {
    // Create a simple HTML document for PDF export
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Résultats de recherche - ${searchQuery}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .announcement { border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 5px; }
          .title { font-size: 18px; font-weight: bold; margin-bottom: 5px; }
          .price { color: #e74c3c; font-weight: bold; font-size: 16px; }
          .details { margin-top: 10px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Résultats de recherche</h1>
          <h2>"${searchQuery}"</h2>
          <p>Exporté le ${new Date().toLocaleDateString('fr-FR')} - ${announcements.length} annonces</p>
        </div>
        ${announcements.map(announcement => `
          <div class="announcement">
            <div class="title">${announcement.title}</div>
            <div class="price">${announcement.price.toLocaleString('fr-DZ')} ${announcement.currency}</div>
            <div class="details">
              <p><strong>Localisation:</strong> ${announcement.location}</p>
              <p><strong>État:</strong> ${announcement.condition}</p>
              <p><strong>Date:</strong> ${new Date(announcement.created_at).toLocaleDateString('fr-FR')}</p>
              ${announcement.description ? `<p><strong>Description:</strong> ${announcement.description.substring(0, 200)}...</p>` : ''}
            </div>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    const filename = `recherche_${searchQuery.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.html`;
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    
    toast({
      title: t('exportSuccess'),
      description: `${t('exportedDescription')} (${announcements.length} ${t('announcements')})`
    });
  };

  const exportToJSON = () => {
    const dataToExport = {
      searchQuery,
      exportDate: new Date().toISOString(),
      totalResults: announcements.length,
      announcements: announcements.map(announcement => {
        const filtered: any = {};
        selectedFields.forEach(field => {
          filtered[field] = announcement[field as keyof Announcement];
        });
        return filtered;
      })
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    const filename = `recherche_${searchQuery.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    
    toast({
      title: t('exportSuccess'),
      description: `${t('exportedDescription')} (${announcements.length} ${t('announcements')})`
    });
  };

  const handleExport = () => {
    if (selectedFields.length === 0) {
      toast({
        title: t('exportError'),
        description: t('selectAtLeastOneField'),
        variant: 'destructive'
      });
      return;
    }

    switch (exportFormat) {
      case 'csv':
        exportToCSV();
        break;
      case 'pdf':
        exportToPDF();
        break;
      case 'json':
        exportToJSON();
        break;
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            {t('exportResults')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">{t('exportFormat')}</label>
            <Select value={exportFormat} onValueChange={(value: 'csv' | 'pdf' | 'json') => setExportFormat(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">
                  <div className="flex items-center gap-2">
                    <Table className="h-4 w-4" />
                    CSV (Excel)
                  </div>
                </SelectItem>
                <SelectItem value="pdf">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    HTML/PDF
                  </div>
                </SelectItem>
                <SelectItem value="json">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    JSON
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t('fieldsToInclude')}</label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {availableFields.map(field => (
                <div key={field.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={field.id}
                    checked={selectedFields.includes(field.id)}
                    onCheckedChange={(checked) => handleFieldToggle(field.id, checked as boolean)}
                  />
                  <label htmlFor={field.id} className="text-sm">
                    {field.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="includeImages"
              checked={includeImages}
              onCheckedChange={(checked) => setIncludeImages(checked as boolean)}
            />
            <label htmlFor="includeImages" className="text-sm">
              {t('includeImageUrls')}
            </label>
          </div>

          <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
            {announcements.length} {announcements.length === 1 ? t('announcement') : t('announcements')} {announcements.length === 1 ? t('willBeExported') : t('willBeExportedPlural')}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              {t('cancel')}
            </Button>
            <Button onClick={handleExport} className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              {t('export')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchExport;