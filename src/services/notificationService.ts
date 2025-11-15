// Notification service stub
export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
}

export interface NotificationData {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  created_at: string;
}

export const notificationService = {
  async getNotifications(): Promise<NotificationData[]> {
    return [];
  },

  async markAsRead(notificationId: string): Promise<void> {
    console.log('Marking notification as read:', notificationId);
  },

  async getPreferences(): Promise<NotificationPreferences> {
    return { email: true, push: true, sms: false };
  },

  async updatePreferences(preferences: Partial<NotificationPreferences>): Promise<void> {
    console.log('Updating preferences:', preferences);
  }
};

export default notificationService;