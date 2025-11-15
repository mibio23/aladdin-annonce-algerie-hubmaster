import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Smartphone, 
  Monitor,
  Wifi, 
  Star,
  CheckCircle,
  ArrowDown
} from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { toast } from 'sonner';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const TelechargerApp = () => {
  const { t } = useSafeI18nWithRouter();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Empêcher l'affichage automatique du prompt
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    checkIfInstalled();

    // Enregistrer le service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker enregistré:', registration);
        })
        .catch((error) => {
          console.log('Erreur Service Worker:', error);
        });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      toast.error(t('pwa.notAvailable'));
      return;
    }

    setIsInstalling(true);

    try {
      // Afficher le prompt d'installation
      await deferredPrompt.prompt();
      
      // Attendre la réponse de l'utilisateur
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        toast.success(t('pwa.installSuccess'));
        setIsInstalled(true);
      } else {
        toast.info(t('pwa.installCancelled'));
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
      toast.error(t('pwa.installError'));
    } finally {
      setIsInstalling(false);
    }
  };

  const features = [
    {
      icon: <Wifi className="h-5 w-5" />,
      title: t('pwa.features.offline.title'),
      description: t('pwa.features.offline.description')
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: t('pwa.features.mobile.title'),
      description: t('pwa.features.mobile.description')
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: t('pwa.features.fast.title'),
      description: t('pwa.features.fast.description')
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: t('pwa.features.notifications.title'),
      description: t('pwa.features.notifications.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Monitor className="h-12 w-12 text-primary-foreground" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-green-500">PWA</Badge>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('pwa.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('pwa.subtitle')}
            </p>

            {isInstalled ? (
              <div className="flex items-center justify-center gap-2 text-green-600 mb-8">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{t('pwa.alreadyInstalled')}</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={handleInstallClick}
                  disabled={!deferredPrompt || isInstalling}
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  {isInstalling ? t('pwa.installing') : t('pwa.installButton')}
                </Button>
                
                {!deferredPrompt && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('pwa.notAvailable')}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Instructions */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{t('pwa.instructions.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Desktop */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  {t('pwa.instructions.desktop.title')}
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                    <span>{t('pwa.instructions.desktop.step1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    <span>{t('pwa.instructions.desktop.step2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                    <span>{t('pwa.instructions.desktop.step3')}</span>
                  </li>
                </ol>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  {t('pwa.instructions.mobile.title')}
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                    <span>{t('pwa.instructions.mobile.step1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    <span>{t('pwa.instructions.mobile.step2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                    <span>{t('pwa.instructions.mobile.step3')}</span>
                  </li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Browser Support */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">{t('pwa.browserSupport.title')}</h3>
            <div className="flex flex-wrap gap-4">
              {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser) => (
                <Badge key={browser} variant="secondary">{browser}</Badge>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default TelechargerApp;