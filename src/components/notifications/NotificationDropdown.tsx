import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationDropdown: React.FC = () => {
  return (
    <Button variant="ghost" size="sm">
      <Bell className="h-4 w-4" />
    </Button>
  );
};

export default NotificationDropdown;