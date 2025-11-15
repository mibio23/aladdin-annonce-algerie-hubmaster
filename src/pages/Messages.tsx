import { useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import ConversationList from '@/components/messaging/ConversationList';
import MessageThread from '@/components/messaging/MessageThread';

const Messages = () => {
  const { t } = useSafeI18nWithRouter();
  const { user } = useAuth();
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">{t('auth.loginRequired')}</h2>
            <p className="text-muted-foreground">
              {t('messages.loginRequiredDesc')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{t('messages.title')}</CardTitle>
                  <CardDescription>{t('messages.subtitle')}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Liste des conversations */}
            <div className={`lg:col-span-1 ${selectedConversationId ? 'hidden lg:block' : ''}`}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{t('messages.conversations')}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] overflow-y-auto p-4">
                    <ConversationList
                      onSelectConversation={setSelectedConversationId}
                      selectedConversationId={selectedConversationId || undefined}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Thread de messages */}
            <div className={`lg:col-span-2 ${!selectedConversationId ? 'hidden lg:block' : ''}`}>
              {selectedConversationId ? (
                <MessageThread
                  conversationId={selectedConversationId}
                  onBack={() => setSelectedConversationId(null)}
                />
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center">
                    <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">
                      {t('messages.selectConversation')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('messages.selectConversationDesc')}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;