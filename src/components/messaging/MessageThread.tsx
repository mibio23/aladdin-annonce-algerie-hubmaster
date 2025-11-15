import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

interface MessageThreadProps {
  conversationId: string;
  onBack: () => void;
}

const MessageThread: React.FC<MessageThreadProps> = ({ 
  conversationId: _conversationId, 
  onBack 
}) => {
  const { t } = useSafeI18nWithRouter();
  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="lg:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            {t('messages.conversations')}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>{t('messages.noConversations')}</p>
          <p className="text-sm">{t('messages.noConversationsDesc')}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageThread;