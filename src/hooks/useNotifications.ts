
import { useState, useCallback, useEffect } from 'react';
import { Notification } from '@/types/notification';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

export const useNotifications = () => {
  const { t } = useSafeI18nWithRouter();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Initialize notifications after the i18n context is ready
  useEffect(() => {
    const getInitialNotifications = (): Notification[] => [
      {
        id: '1',
        type: 'success',
        title: t('notifications.publishedAd'),
        message: `${t('notifications.published')} 'iPhone 14 Pro'`,
        timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
        isRead: false,
      },
      {
        id: '2',
        type: 'info',
        title: t('notifications.newResponse'),
        message: `${t('notifications.responded')} 'Appartement Alger'`,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        isRead: false,
      },
      {
        id: '3',
        type: 'warning',
        title: t('notifications.adExpiringSoon'),
        message: `'MacBook Pro' ${t('notifications.expires')} 3 ${t('notifications.days')}`,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        isRead: false,
      },
    ];

    setNotifications(getInitialNotifications());
  }, [t]);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  }, []);

  const deleteNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
};
