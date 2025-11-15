
export interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export type NotificationAction = 'markAsRead' | 'markAllAsRead' | 'delete';
