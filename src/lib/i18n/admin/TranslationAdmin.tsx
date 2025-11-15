import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Download, 
  Search, 
  Edit3, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  RefreshCw,
  Info,
  Eye,
  EyeOff
} from 'lucide-react';
import { Language, TranslationMetrics } from '../types/comprehensive';
import { translationValidator } from '../validation/advanced-validator';
import translations from '../translations';

interface TranslationEntry {
  key: string;
  values: Record<Language, string>;
  isEditing: boolean;
  hasChanges: boolean;
}

interface AdminProps {
  onClose?: () => void;
}

const TranslationAdmin: React.FC<AdminProps> = ({ onClose }) => {
  const [activeLanguage, setActiveLanguage] = useState<Language>('fr');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDomain, setActiveDomain] = useState('all');
  const [translationEntries, setTranslationEntries] = useState<TranslationEntry[]>([]);
  const [metrics, setMetrics] = useState<TranslationMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showOnlyMissing, setShowOnlyMissing] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  const languages: Language[] = ['fr', 'ar', 'en', 'de', 'es', 'it'];
  const domains = [
    'all', 'auth', 'search', 'navigation', 'categories', 
    'announcements', 'reviews', 'userMenu', 'profile', 
    'pwa', 'intelligentAssistant', 'hero', 'footer', 
    'stats', 'notifications', 'banner', 'common'
  ];

  useEffect(() => {
    loadTranslations();
    loadMetrics();
  }, []);

  const loadTranslations = () => {
    const entries: TranslationEntry[] = [];
    const allKeys = new Set<string>();

    // Collect all unique keys from all languages
    languages.forEach(lang => {
      const langTranslations = translations[lang];
      collectKeys(langTranslations, '', allKeys);
    });

    // Create entries for each key
    Array.from(allKeys).forEach(key => {
      const values: Record<Language, string> = {} as Record<Language, string>;
      
      languages.forEach(lang => {
        values[lang] = getNestedValue(translations[lang], key) || '';
      });

      entries.push({
        key,
        values,
        isEditing: false,
        hasChanges: false,
      });
    });

    setTranslationEntries(entries.sort((a, b) => a.key.localeCompare(b.key)));
  };

  const loadMetrics = async () => {
    setIsLoading(true);
    try {
      const validationMetrics = await translationValidator.validateAll();
      setMetrics(validationMetrics);
    } catch (error) {
      console.error('Failed to load metrics:', error);
    }
    setIsLoading(false);
  };

  const collectKeys = (obj: any, prefix: string, keys: Set<string>) => {
    if (!obj || typeof obj !== 'object') return;

    Object.keys(obj).forEach(key => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'string') {
        keys.add(fullKey);
      } else if (typeof obj[key] === 'object') {
        collectKeys(obj[key], fullKey, keys);
      }
    });
  };

  const getNestedValue = (obj: any, key: string): string | null => {
    if (!obj || typeof obj !== 'object') return null;

    if (obj[key]) {
      return typeof obj[key] === 'string' ? obj[key] : null;
    }

    const keys = key.split('.');
    let current = obj;

    for (const k of keys) {
      if (current && typeof current === 'object' && current[k] !== undefined) {
        current = current[k];
      } else {
        return null;
      }
    }

    return typeof current === 'string' ? current : null;
  };

  const filteredEntries = translationEntries.filter(entry => {
    const matchesSearch = entry.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         Object.values(entry.values).some(value => 
                           value.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesDomain = activeDomain === 'all' || entry.key.startsWith(activeDomain + '.');
    
    const matchesFilter = !showOnlyMissing || 
                         languages.some(lang => !entry.values[lang]);

    return matchesSearch && matchesDomain && matchesFilter;
  });

  const handleEditEntry = (key: string) => {
    setEditingKey(key);
  };

  const handleSaveEntry = (key: string, newValues: Record<Language, string>) => {
    setTranslationEntries(prev => prev.map(entry => 
      entry.key === key 
        ? { ...entry, values: newValues, isEditing: false, hasChanges: true }
        : entry
    ));
    setEditingKey(null);
  };

  const handleDeleteEntry = (key: string) => {
    setTranslationEntries(prev => prev.filter(entry => entry.key !== key));
  };

  const handleAddEntry = () => {
    if (!newKey || !newValue) return;

    const values: Record<Language, string> = {} as Record<Language, string>;
    languages.forEach(lang => {
      values[lang] = lang === activeLanguage ? newValue : '';
    });

    const newEntry: TranslationEntry = {
      key: newKey,
      values,
      isEditing: false,
      hasChanges: true,
    };

    setTranslationEntries(prev => [...prev, newEntry].sort((a, b) => a.key.localeCompare(b.key)));
    setNewKey('');
    setNewValue('');
  };

  const exportTranslations = (language: Language) => {
    const langEntries = translationEntries.reduce((acc, entry) => {
      if (entry.values[language]) {
        acc[entry.key] = entry.values[language];
      }
      return acc;
    }, {} as Record<string, string>);

    const blob = new Blob([JSON.stringify(langEntries, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `translations-${language}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importTranslations = (language: Language, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        
        setTranslationEntries(prev => prev.map(entry => ({
          ...entry,
          values: {
            ...entry.values,
            [language]: imported[entry.key] || entry.values[language],
          },
          hasChanges: true,
        })));
      } catch (error) {
        console.error('Failed to import translations:', error);
      }
    };
    reader.readAsText(file);
  };

  const getCoverageColor = (coverage: number) => {
    if (coverage >= 95) return 'text-green-600';
    if (coverage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCoverageStatus = (coverage: number) => {
    if (coverage >= 95) return 'Excellent';
    if (coverage >= 85) return 'Good';
    if (coverage >= 70) return 'Needs Work';
    return 'Critical';
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-7xl h-[90vh] flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Translation Management System</h2>
            <p className="text-muted-foreground">
              Manage translations across all languages and domains
            </p>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <Tabs defaultValue="manage" className="flex-1 flex flex-col">
          <TabsList className="mx-6 mt-4">
            <TabsTrigger value="manage">Manage Translations</TabsTrigger>
            <TabsTrigger value="metrics">Coverage Metrics</TabsTrigger>
            <TabsTrigger value="import-export">Import/Export</TabsTrigger>
          </TabsList>

          <TabsContent value="manage" className="flex-1 p-6 overflow-hidden">
            <div className="flex flex-col h-full space-y-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search keys or values..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Domain</Label>
                  <select
                    value={activeDomain}
                    onChange={(e) => setActiveDomain(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-input rounded-md"
                  >
                    {domains.map(domain => (
                      <option key={domain} value={domain}>
                        {domain === 'all' ? 'All Domains' : domain}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label>Language</Label>
                  <select
                    value={activeLanguage}
                    onChange={(e) => setActiveLanguage(e.target.value as Language)}
                    className="mt-1 block w-full px-3 py-2 border border-input rounded-md"
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>
                        {lang.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2 mt-6">
                  <Button
                    variant={showOnlyMissing ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOnlyMissing(!showOnlyMissing)}
                  >
                    {showOnlyMissing ? <Eye className="h-4 w-4 mr-2" /> : <EyeOff className="h-4 w-4 mr-2" />}
                    Missing Only
                  </Button>
                  <Button variant="outline" size="sm" onClick={loadMetrics}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </div>

              {/* Add new translation */}
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-3">Add New Translation</h3>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="new-key">Translation Key</Label>
                    <Input
                      id="new-key"
                      placeholder="domain.context.element"
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="new-value">Value ({activeLanguage.toUpperCase()})</Label>
                    <Input
                      id="new-value"
                      placeholder="Translation value"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleAddEntry} disabled={!newKey || !newValue}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Translation entries */}
              <div className="flex-1 overflow-auto">
                <div className="space-y-2">
                  {filteredEntries.map(entry => (
                    <TranslationEntryRow
                      key={entry.key}
                      entry={entry}
                      languages={languages}
                      isEditing={editingKey === entry.key}
                      onEdit={() => handleEditEntry(entry.key)}
                      onSave={(newValues) => handleSaveEntry(entry.key, newValues)}
                      onDelete={() => handleDeleteEntry(entry.key)}
                      onCancel={() => setEditingKey(null)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="flex-1 p-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <RefreshCw className="h-8 w-8 animate-spin" />
              </div>
            ) : metrics ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {languages.map(lang => (
                    <Card key={lang} className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{lang.toUpperCase()}</h3>
                        <Badge variant={metrics.coverage[lang] >= 95 ? "default" : "destructive"}>
                          {getCoverageStatus(metrics.coverage[lang])}
                        </Badge>
                      </div>
                      <Progress value={metrics.coverage[lang]} className="mb-2" />
                      <p className={`text-sm ${getCoverageColor(metrics.coverage[lang])}`}>
                        {metrics.coverage[lang].toFixed(1)}% complete
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {metrics.missingByLanguage[lang]?.length || 0} missing keys
                      </p>
                    </Card>
                  ))}
                </div>

                {/* Domain coverage */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Domain Coverage</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(metrics.domains).map(([domain, result]) => (
                      <div key={domain} className="text-center">
                        <p className="font-medium">{domain}</p>
                        <Progress value={result.coverage} className="my-2" />
                        <p className={`text-sm ${getCoverageColor(result.coverage)}`}>
                          {result.coverage.toFixed(1)}%
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ) : (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Click "Refresh" to load translation metrics.
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="import-export" className="flex-1 p-6">
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Export Translations</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map(lang => (
                    <Button 
                      key={lang}
                      variant="outline" 
                      onClick={() => exportTranslations(lang)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export {lang.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Import Translations</h3>
                <div className="space-y-4">
                  {languages.map(lang => (
                    <div key={lang} className="flex items-center gap-4">
                      <Label className="w-20">{lang.toUpperCase()}</Label>
                      <input
                        type="file"
                        accept=".json"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) importTranslations(lang, file);
                        }}
                        className="flex-1"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

interface EntryRowProps {
  entry: TranslationEntry;
  languages: Language[];
  isEditing: boolean;
  onEdit: () => void;
  onSave: (values: Record<Language, string>) => void;
  onDelete: () => void;
  onCancel: () => void;
}

const TranslationEntryRow: React.FC<EntryRowProps> = ({
  entry,
  languages,
  isEditing,
  onEdit,
  onSave,
  onDelete,
  onCancel,
}) => {
  const [editValues, setEditValues] = useState(entry.values);

  useEffect(() => {
    setEditValues(entry.values);
  }, [entry.values, isEditing]);

  const handleSave = () => {
    onSave(editValues);
  };

  const missingCount = languages.filter(lang => !entry.values[lang]).length;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="font-medium text-sm">{entry.key}</h4>
          {missingCount > 0 && (
            <Badge variant="destructive" className="text-xs mt-1">
              {missingCount} missing
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          {!isEditing ? (
            <>
              <Button variant="ghost" size="sm" onClick={onEdit}>
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onDelete}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onCancel}>
                <X className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {languages.map(lang => (
          <div key={lang}>
            <Label className="text-xs font-medium">{lang.toUpperCase()}</Label>
            {isEditing ? (
              <Textarea
                value={editValues[lang] || ''}
                onChange={(e) => setEditValues(prev => ({
                  ...prev,
                  [lang]: e.target.value,
                }))}
                className="mt-1 min-h-[60px] text-sm"
                placeholder={`Enter ${lang} translation...`}
              />
            ) : (
              <div className={`mt-1 p-2 bg-muted rounded text-sm min-h-[60px] ${
                !entry.values[lang] ? 'text-muted-foreground italic' : ''
              }`}>
                {entry.values[lang] || 'No translation'}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TranslationAdmin;