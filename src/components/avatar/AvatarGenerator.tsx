import React, { useState } from 'react';
import { Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { safeStringify } from '@/utils/safeStringify';

interface AvatarGeneratorProps {
  onAvatarGenerated: (avatarData: string) => void;
  onCancel: () => void;
  currentGender?: string;
}

const AvatarGenerator: React.FC<AvatarGeneratorProps> = ({ 
  onAvatarGenerated, 
  onCancel,
  currentGender = 'femme'
}) => {
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const [selectedEmotion, setSelectedEmotion] = useState('happy');
  const [selectedColor, setSelectedColor] = useState('#FFB366');

  const avatarStyles = {
    classic: {
      name: 'Classique',
      icon: '😊',
      emotions: {
        happy: '😊',
        sad: '😢',
        excited: '😄',
        cool: '😎',
        wink: '😉',
        laugh: '😂'
      }
    },
    funny: {
      name: 'Amusant',
      icon: '🤪',
      emotions: {
        happy: '🤪',
        sad: '😭',
        excited: '🤩',
        cool: '🤓',
        wink: '😜',
        laugh: '🤣'
      }
    },
    cute: {
      name: 'Mignon',
      icon: '🥰',
      emotions: {
        happy: '🥰',
        sad: '😔',
        excited: '😍',
        cool: '😌',
        wink: '😘',
        laugh: '😊'
      }
    },
    professional: {
      name: 'Professionnel',
      icon: '👨‍💼',
      emotions: {
        happy: currentGender === 'homme' ? '👨‍💼' : '👩‍💼',
        sad: currentGender === 'homme' ? '👨‍💻' : '👩‍💻',
        excited: currentGender === 'homme' ? '👨‍🎓' : '👩‍🎓',
        cool: currentGender === 'homme' ? '👨‍🏫' : '👩‍🏫',
        wink: currentGender === 'homme' ? '👨‍⚕️' : '👩‍⚕️',
        laugh: currentGender === 'homme' ? '👨‍🎨' : '👩‍🎨'
      }
    }
  };

  const emotions = [
    { key: 'happy', name: 'Joyeux', icon: '😊' },
    { key: 'excited', name: 'Excité', icon: '🤩' },
    { key: 'cool', name: 'Cool', icon: '😎' },
    { key: 'wink', name: 'Clin d\'œil', icon: '😉' },
    { key: 'laugh', name: 'Rieur', icon: '😂' },
    { key: 'sad', name: 'Triste', icon: '😢' }
  ];

  const colors = [
    '#FFB366', '#FF6B6B', '#4ECDC4', '#45B7D1', 
    '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471'
  ];

  const generateAvatar = () => {
    const currentStyle = avatarStyles[selectedStyle as keyof typeof avatarStyles];
    const avatar = currentStyle.emotions[selectedEmotion as keyof typeof currentStyle.emotions];
    
    // Créer un objet avec les données de l'avatar personnalisé
    const avatarData = {
      type: 'generated',
      style: selectedStyle,
      emotion: selectedEmotion,
      color: selectedColor,
      emoji: avatar,
      timestamp: Date.now()
    };
    
    onAvatarGenerated(safeStringify(avatarData));
  };

  const currentAvatar = avatarStyles[selectedStyle as keyof typeof avatarStyles]
    ?.emotions[selectedEmotion as keyof typeof avatarStyles['classic']['emotions']];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-2">
          <Palette className="h-5 w-5 text-primary" />
          Créateur d'Avatar
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Créez votre avatar personnalisé avec différents styles et émotions
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Aperçu de l'avatar */}
        <div className="flex justify-center">
          <div className="relative">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl border-4 border-dashed"
              style={{ borderColor: selectedColor, backgroundColor: `${selectedColor}20` }}
            >
              {currentAvatar}
            </div>
            <Badge 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              style={{ backgroundColor: selectedColor }}
            >
              Aperçu
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="style" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="style">Choisir un style</TabsTrigger>
            <TabsTrigger value="emotion">Choisir une émotion</TabsTrigger>
            <TabsTrigger value="color">Choisir une couleur</TabsTrigger>
          </TabsList>

          <TabsContent value="style" className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Choisir un style</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(avatarStyles).map(([key, style]) => (
                <Button
                  key={key}
                  variant={selectedStyle === key ? "default" : "outline"}
                  className={cn(
                    "h-20 flex-col space-y-2",
                    selectedStyle === key && "ring-2 ring-primary"
                  )}
                  onClick={() => setSelectedStyle(key)}
                >
                  <span className="text-2xl">{style.icon}</span>
                  <span className="text-xs">{style.name}</span>
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emotion" className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Choisir une émotion</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {emotions.map((emotion) => (
                <Button
                  key={emotion.key}
                  variant={selectedEmotion === emotion.key ? "default" : "outline"}
                  className={cn(
                    "h-16 flex-col space-y-1",
                    selectedEmotion === emotion.key && "ring-2 ring-primary"
                  )}
                  onClick={() => setSelectedEmotion(emotion.key)}
                >
                  <span className="text-xl">{emotion.icon}</span>
                  <span className="text-xs">{emotion.name}</span>
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="color" className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Choisir une couleur</h3>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform",
                    selectedColor === color && "ring-4 ring-primary ring-offset-2"
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="flex-1"
          >
            Annuler
          </Button>
          <Button 
            onClick={generateAvatar}
            className="flex-1"
          >
            <Zap className="h-4 w-4 mr-2" />
            Créer Avatar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvatarGenerator;