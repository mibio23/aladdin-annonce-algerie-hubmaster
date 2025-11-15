
import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update only once per minute to save performance
    const updateClock = () => setTime(new Date());
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000;
    
    let intervalId: NodeJS.Timeout;
    
    // Initial timeout to sync with minute boundary
    const initialTimeout = setTimeout(() => {
      updateClock();
      // Then update every minute
      intervalId = setInterval(updateClock, 60000);
    }, msUntilNextMinute);
    
    return () => {
      clearTimeout(initialTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const timeString = time.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const firstHourDigit = timeString.substring(0, 1);
  const restOfTime = timeString.substring(1);

  return (
    <div className="flex items-center text-3xl font-bold text-gray-700 dark:text-slate-300">
      <span>
        <span className="text-red-500">{firstHourDigit}</span>
        {restOfTime}
      </span>
    </div>
  );
};

export default DigitalClock;
