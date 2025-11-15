
import {
  Palette,
  Layout,
  Type,
  Smartphone,
  Monitor,
  Eye,
  Paintbrush,
  Grid3X3,
  Layers,
  Zap,
  Wand2,
  RefreshCw,
  Scan,
  Play,
  Sparkles,
  Wind,
  MousePointer,
  Waves,
  Accessibility,
  Sun,
  Moon,
  Star,
  Palette as GradientIcon,
  Square as ShadowIcon,
  BarChart3,
  Wifi,
  Download,
  Bell,
  RotateCcw as SyncIcon,
  Hand,
  Mic,
  User,
  Grid,
  Heart,
  Command as ShortcutIcon,
  Navigation,
  Target,
  Search,
  TrendingUp,
  Brain,
  Code,
  Users,
  GitBranch,
  Cloud
} from "lucide-react";

export const coreDesignFeatures = [
  {
    id: "globalThemeControl",
    name: "Contrôle Thème Global",
    description: "Modification complète du thème sur toutes les pages",
    icon: Palette,
    level: "Master",
    color: "text-purple-600",
    critical: true
  },
  {
    id: "dynamicLayoutEngine",
    name: "Moteur Layout Dynamique",
    description: "Restructuration automatique des mises en page",
    icon: Layout,
    level: "Advanced",
    color: "text-blue-600",
    critical: true
  },
  {
    id: "responsiveAutoDetect",
    name: "Responsive Auto-Détection",
    description: "Adaptation automatique mobile/tablet/desktop",
    icon: Smartphone,
    level: "Pro",
    color: "text-green-600",
    critical: false
  },
  {
    id: "pageAutoDiscovery",
    name: "Découverte Auto Pages",
    description: "Détection automatique des nouvelles pages créées",
    icon: Scan,
    level: "AI",
    color: "text-orange-600",
    critical: true
  },
  {
    id: "realTimePreview",
    name: "Aperçu Temps Réel",
    description: "Visualisation instantanée des modifications",
    icon: Eye,
    level: "Live",
    color: "text-red-600",
    critical: false
  },
  {
    id: "componentAutoGeneration",
    name: "Génération Auto Composants",
    description: "Création automatique de nouveaux composants",
    icon: Wand2,
    level: "AI+",
    color: "text-indigo-600",
    critical: false
  }
];

export const animationFeatures = [
  {
    id: "globalAnimationEngine",
    name: "Moteur Animations Global",
    description: "Système d'animations centralisé et configurable",
    icon: Play,
    level: "Master",
    color: "text-purple-600"
  },
  {
    id: "microInteractions",
    name: "Micro-interactions",
    description: "Animations subtiles pour améliorer l'UX",
    icon: Sparkles,
    level: "Pro",
    color: "text-pink-600"
  },
  {
    id: "advancedTransitions",
    name: "Transitions Avancées",
    description: "Transitions fluides entre pages et états",
    icon: Wind,
    level: "Advanced",
    color: "text-blue-600"
  },
  {
    id: "parallaxScrolling",
    name: "Défilement Parallaxe",
    description: "Effets de profondeur au défilement",
    icon: Waves,
    level: "Premium",
    color: "text-cyan-600"
  },
  {
    id: "morphingComponents",
    name: "Composants Morphing",
    description: "Transformation fluide entre composants",
    icon: Grid3X3,
    level: "Advanced",
    color: "text-indigo-600"
  },
  {
    id: "gestureAnimations",
    name: "Animations Gestuelles",
    description: "Animations déclenchées par gestes tactiles",
    icon: MousePointer,
    level: "Mobile",
    color: "text-green-600"
  }
];

export const themeFeatures = [
  {
    id: "seasonalThemes",
    name: "Thèmes Saisonniers",
    description: "Thèmes qui changent selon les saisons",
    icon: Star,
    level: "Creative",
    color: "text-yellow-600"
  },
  {
    id: "contextualThemes",
    name: "Thèmes Contextuels",
    description: "Adaptation automatique selon le contenu",
    icon: Sun,
    level: "Smart",
    color: "text-orange-600"
  },
  {
    id: "brandThemeGenerator",
    name: "Générateur Thème Marque",
    description: "Création automatique de thèmes de marque",
    icon: Paintbrush,
    level: "AI",
    color: "text-purple-600"
  },
  {
    id: "gradientDesigner",
    name: "Designer Dégradés",
    description: "Créateur avancé de dégradés personnalisés",
    icon: GradientIcon,
    level: "Pro",
    color: "text-pink-600"
  },
  {
    id: "shadowSystem",
    name: "Système Ombres",
    description: "Gestion avancée des ombres et profondeur",
    icon: ShadowIcon,
    level: "Design",
    color: "text-gray-600"
  },
  {
    id: "borderStyles",
    name: "Styles Bordures",
    description: "Système complet de styles de bordures",
    icon: Grid,
    level: "Basic",
    color: "text-blue-600"
  }
];

export const accessibilityFeatures = [
  {
    id: "colorBlindSupport",
    name: "Support Daltoniens",
    description: "Adaptation couleurs pour daltoniens",
    icon: Accessibility,
    level: "Essential",
    color: "text-green-600"
  },
  {
    id: "contrastOptimizer",
    name: "Optimiseur Contraste",
    description: "Optimisation automatique du contraste",
    icon: Sun,
    level: "Auto",
    color: "text-yellow-600"
  },
  {
    id: "fontSizeScaling",
    name: "Mise à l'échelle Police",
    description: "Ajustement dynamique taille des polices",
    icon: Type,
    level: "Adaptive",
    color: "text-blue-600"
  },
  {
    id: "keyboardNavigation",
    name: "Navigation Clavier",
    description: "Navigation complète au clavier",
    icon: ShortcutIcon,
    level: "Essential",
    color: "text-purple-600"
  },
  {
    id: "screenReaderOptimization",
    name: "Optimisation Lecteurs d'écran",
    description: "Support avancé lecteurs d'écran",
    icon: Mic,
    level: "Critical",
    color: "text-red-600"
  },
  {
    id: "motionReducedMode",
    name: "Mode Mouvement Réduit",
    description: "Réduction animations pour sensibilité",
    icon: Moon,
    level: "Comfort",
    color: "text-indigo-600"
  }
];

export const performanceFeatures = [
  {
    id: "lazyLoadingSystem",
    name: "Système Chargement Différé",
    description: "Chargement optimisé des ressources",
    icon: Download,
    level: "Performance",
    color: "text-green-600"
  },
  {
    id: "imageOptimization",
    name: "Optimisation Images",
    description: "Compression et redimensionnement auto",
    icon: Monitor,
    level: "Auto",
    color: "text-blue-600"
  },
  {
    id: "cacheManagement",
    name: "Gestion Cache",
    description: "Système de cache intelligent",
    icon: SyncIcon,
    level: "Smart",
    color: "text-purple-600"
  },
  {
    id: "bundleOptimization",
    name: "Optimisation Bundle",
    description: "Optimisation taille des bundles",
    icon: Code,
    level: "Build",
    color: "text-orange-600"
  },
  {
    id: "cdnIntegration",
    name: "Intégration CDN",
    description: "Distribution de contenu globale",
    icon: Cloud,
    level: "Global",
    color: "text-cyan-600"
  },
  {
    id: "performanceMonitoring",
    name: "Monitoring Performance",
    description: "Surveillance temps réel performances",
    icon: BarChart3,
    level: "Analytics",
    color: "text-red-600"
  }
];

export const pwaFeatures = [
  {
    id: "pwaCapabilities",
    name: "Capacités PWA",
    description: "Application web progressive complète",
    icon: Smartphone,
    level: "Modern",
    color: "text-green-600"
  },
  {
    id: "offlineMode",
    name: "Mode Hors-ligne",
    description: "Fonctionnement sans connexion",
    icon: Wifi,
    level: "Essential",
    color: "text-blue-600"
  },
  {
    id: "pushNotifications",
    name: "Notifications Push",
    description: "Système notifications en temps réel",
    icon: Bell,
    level: "Engagement",
    color: "text-red-600"
  },
  {
    id: "deviceSync",
    name: "Synchronisation Appareils",
    description: "Sync données entre appareils",
    icon: SyncIcon,
    level: "Cloud",
    color: "text-purple-600"
  },
  {
    id: "touchGestures",
    name: "Gestes Tactiles",
    description: "Support gestes tactiles avancés",
    icon: Hand,
    level: "Mobile",
    color: "text-pink-600"
  },
  {
    id: "voiceNavigation",
    name: "Navigation Vocale",
    description: "Contrôle vocal de l'interface",
    icon: Mic,
    level: "Voice",
    color: "text-orange-600"
  }
];

export const uxFeatures = [
  {
    id: "userPersonalization",
    name: "Personnalisation Utilisateur",
    description: "Adaptation interface par utilisateur",
    icon: User,
    level: "Personal",
    color: "text-blue-600"
  },
  {
    id: "layoutCustomizer",
    name: "Personnaliseur Layout",
    description: "Modification libre des layouts",
    icon: Layout,
    level: "Flexible",
    color: "text-green-600"
  },
  {
    id: "widgetSystem",
    name: "Système Widgets",
    description: "Widgets glisser-déposer",
    icon: Grid,
    level: "Modular",
    color: "text-purple-600"
  },
  {
    id: "shortcutCreator",
    name: "Créateur Raccourcis",
    description: "Raccourcis personnalisés utilisateur",
    icon: ShortcutIcon,
    level: "Productivity",
    color: "text-yellow-600"
  },
  {
    id: "workspaceBuilder",
    name: "Constructeur Espace Travail",
    description: "Espaces de travail personnalisés",
    icon: Layers,
    level: "Professional",
    color: "text-indigo-600"
  },
  {
    id: "favoriteManager",
    name: "Gestionnaire Favoris",
    description: "Système favoris avancé",
    icon: Heart,
    level: "Convenience",
    color: "text-red-600"
  }
];

export const navigationFeatures = [
  {
    id: "predictiveNavigation",
    name: "Navigation Prédictive",
    description: "Prédiction des actions utilisateur",
    icon: Navigation,
    level: "AI",
    color: "text-purple-600"
  },
  {
    id: "adaptiveMenus",
    name: "Menus Adaptatifs",
    description: "Menus qui s'adaptent au comportement",
    icon: Grid3X3,
    level: "Smart",
    color: "text-blue-600"
  },
  {
    id: "smartBreadcrumbs",
    name: "Fil d'Ariane Intelligent",
    description: "Navigation contextuelle avancée",
    icon: Navigation,
    level: "Context",
    color: "text-green-600"
  },
  {
    id: "contextualActions",
    name: "Actions Contextuelles",
    description: "Actions selon le contexte actuel",
    icon: Target,
    level: "Dynamic",
    color: "text-orange-600"
  },
  {
    id: "quickActions",
    name: "Actions Rapides",
    description: "Palette d'actions rapides",
    icon: Zap,
    level: "Fast",
    color: "text-yellow-600"
  },
  {
    id: "searchEverywhere",
    name: "Recherche Universelle",
    description: "Recherche globale dans l'app",
    icon: Search,
    level: "Universal",
    color: "text-red-600"
  }
];

export const analyticsFeatures = [
  {
    id: "interfaceAbTesting",
    name: "A/B Testing Interface",
    description: "Tests A/B automatiques sur l'UI",
    icon: TrendingUp,
    level: "Analytics",
    color: "text-green-600"
  },
  {
    id: "conversionOptimization",
    name: "Optimisation Conversion",
    description: "Optimisation automatique taux conversion",
    icon: Target,
    level: "Business",
    color: "text-blue-600"
  },
  {
    id: "heatmapGeneration",
    name: "Génération Heatmaps",
    description: "Cartes de chaleur interaction utilisateur",
    icon: BarChart3,
    level: "Visual",
    color: "text-red-600"
  },
  {
    id: "userFlowAnalysis",
    name: "Analyse Flux Utilisateur",
    description: "Analyse parcours utilisateur détaillée",
    icon: Navigation,
    level: "Journey",
    color: "text-purple-600"
  },
  {
    id: "clickTrackingAdvanced",
    name: "Tracking Clics Avancé",
    description: "Suivi détaillé interactions utilisateur",
    icon: MousePointer,
    level: "Detailed",
    color: "text-orange-600"
  },
  {
    id: "scrollBehaviorAnalysis",
    name: "Analyse Comportement Défilement",
    description: "Analyse patterns de défilement",
    icon: Waves,
    level: "Behavioral",
    color: "text-cyan-600"
  }
];

export const aiUIFeatures = [
  {
    id: "aiLayoutOptimization",
    name: "Optimisation Layout IA",
    description: "IA optimise layouts automatiquement",
    icon: Brain,
    level: "AI Master",
    color: "text-purple-600"
  },
  {
    id: "autoComponentGeneration",
    name: "Génération Auto Composants",
    description: "IA crée composants selon besoin",
    icon: Wand2,
    level: "AI Creator",
    color: "text-indigo-600"
  },
  {
    id: "intelligentSuggestions",
    name: "Suggestions Intelligentes",
    description: "IA suggère améliorations UI",
    icon: Sparkles,
    level: "AI Advisor",
    color: "text-pink-600"
  },
  {
    id: "contentAdaptation",
    name: "Adaptation Contenu",
    description: "IA adapte contenu selon contexte",
    icon: Type,
    level: "AI Content",
    color: "text-green-600"
  },
  {
    id: "userBehaviorPrediction",
    name: "Prédiction Comportement",
    description: "IA prédit actions utilisateur",
    icon: Eye,
    level: "AI Predict",
    color: "text-blue-600"
  },
  {
    id: "autoErrorFixing",
    name: "Correction Auto Erreurs",
    description: "IA corrige erreurs UI automatiquement",
    icon: RefreshCw,
    level: "AI Fix",
    color: "text-red-600"
  }
];

export const integrationFeatures = [
  {
    id: "apiDesignTools",
    name: "Outils Design API",
    description: "Interface design via API",
    icon: Code,
    level: "Developer",
    color: "text-gray-600"
  },
  {
    id: "realTimeCollaboration",
    name: "Collaboration Temps Réel",
    description: "Modification collaborative en direct",
    icon: Users,
    level: "Team",
    color: "text-blue-600"
  },
  {
    id: "versionControlUI",
    name: "Contrôle Version UI",
    description: "Versioning interface utilisateur",
    icon: GitBranch,
    level: "Pro",
    color: "text-green-600"
  },
  {
    id: "designSystemGenerator",
    name: "Générateur Design System",
    description: "Création automatique design systems",
    icon: Layers,
    level: "System",
    color: "text-purple-600"
  },
  {
    id: "crossPlatformSync",
    name: "Sync Cross-Platform",
    description: "Synchronisation multi-plateformes",
    icon: SyncIcon,
    level: "Universal",
    color: "text-orange-600"
  },
  {
    id: "cloudBasedDesign",
    name: "Design Basé Cloud",
    description: "Design et stockage cloud",
    icon: Cloud,
    level: "Cloud",
    color: "text-cyan-600"
  }
];
