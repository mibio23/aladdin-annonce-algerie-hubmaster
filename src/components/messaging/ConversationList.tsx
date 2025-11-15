import { MessageCircle } from 'lucide-react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

interface ConversationListProps {
  onSelectConversation: (conversationId: string) => void;
  selectedConversationId?: string;
}

const ConversationList: React.FC<ConversationListProps> = ({ 
  onSelectConversation: _onSelectConversation, 
  selectedConversationId: _selectedConversationId 
}) => {
  const { t } = useSafeI18nWithRouter();
  return (
    <div className="space-y-2">
      <div className="text-center py-8 text-muted-foreground">
        <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>{t('messages.noConversations')}</p>
        <p className="text-sm">{t('messages.noConversationsDesc')}</p>
      </div>
    </div>
  );
};

export default ConversationList;