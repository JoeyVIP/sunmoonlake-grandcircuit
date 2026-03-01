'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: '天', value: timeLeft.days },
    { label: '時', value: timeLeft.hours },
    { label: '分', value: timeLeft.minutes },
    { label: '秒', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-lake/50 backdrop-blur-sm border border-racing/30 rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold text-racing">
              {String(unit.value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-text-muted mt-2 font-bold">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
