
import { useEffect, useRef, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

interface UseInactivityTimerOptions {
  timeout?: number; // en millisecondes
  warningTime?: number; // temps d'avertissement avant déconnexion
  enabled?: boolean;
}

export const useInactivityTimer = ({
  timeout = 15 * 60 * 1000, // 15 minutes par défaut
  warningTime = 2 * 60 * 1000, // 2 minutes d'avertissement
  enabled = true
}: UseInactivityTimerOptions = {}) => {
  const { user, signOut } = useAuth();
  const { t } = useSafeI18nWithRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const warningTimeoutRef = useRef<NodeJS.Timeout>();
  const lastActivityRef = useRef<number>(Date.now());

  const resetTimer = useCallback(() => {
    if (!enabled || !user) return;

    lastActivityRef.current = Date.now();

    // Clear existing timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }

    // Set warning timer
    warningTimeoutRef.current = setTimeout(() => {
      toast.warning(
        t('inactivity.warning'), 
        {
          duration: 10000,
          action: {
            label: t('inactivity.stayConnected'),
            onClick: () => resetTimer()
          }
        }
      );
    }, timeout - warningTime);

    // Set logout timer
    timeoutRef.current = setTimeout(async () => {
      toast.info(t('inactivity.disconnected'));
      await signOut();
    }, timeout);
  }, [enabled, user, signOut, timeout, warningTime, t]);

  const handleActivity = useCallback(() => {
    const now = Date.now();
    // Only reset if more than 1 minute has passed to avoid too frequent resets
    if (now - lastActivityRef.current > 60000) {
      resetTimer();
    }
  }, [resetTimer]);

  useEffect(() => {
    if (!enabled || !user) {
      // Clear timers if disabled or user not logged in
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
      return;
    }

    // Start the timer
    resetTimer();

    // Activity events to monitor
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'click'
    ];

    // Add event listeners
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [enabled, user, resetTimer, handleActivity]);

  return {
    resetTimer,
    lastActivity: lastActivityRef.current
  };
};
