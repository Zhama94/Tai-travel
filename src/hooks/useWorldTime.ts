import { useState, useEffect } from 'react';

export interface WorldClockTime {
  bishkek: string;
  paris: string;
  tokyo: string;
}

export function useWorldTime() {
  const [times, setTimes] = useState<WorldClockTime>(() => getFormattedTimes());

  function getFormattedTimes(): WorldClockTime {
    const now = new Date();

    const formatZone = (timeZone: string) => {
      try {
        return new Intl.DateTimeFormat('ru-RU', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
      } catch {
        return '--:--:--';
      }
    };

    return {
      bishkek: formatZone('Asia/Bishkek'),
      paris: formatZone('Europe/Paris'),
      tokyo: formatZone('Asia/Tokyo'),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes(getFormattedTimes());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return times;
}
