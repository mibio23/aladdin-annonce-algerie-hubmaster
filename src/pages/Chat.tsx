import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const Chat = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              {t('chat.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>{t('chat.inDevelopment')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;