'use client';

import { useEffect, useState } from 'react';

export default function CyberCountdownBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-02-21T23:59:59+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('openBookingModal');
    window.dispatchEvent(event);
  };

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className={`fixed bottom-0 left-0 right-0 w-full z-[1000] bg-black text-[var(--paper)] shadow-lg transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-row sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row md:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">⚡ LIMITED TIME OFFER ENDS IN:</span>
            <div className="flex gap-2 sm:gap-4 items-center">
              <div className="flex flex-col items-center min-w-[50px]">
                <span className="font-mono text-2xl sm:text-3xl font-bold leading-none">{formatNumber(timeLeft.days)}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-90 mt-1">DAYS</span>
              </div>
              <span className="text-xl font-bold opacity-70">:</span>
              <div className="flex flex-col items-center min-w-[50px]">
                <span className="font-mono text-2xl sm:text-3xl font-bold leading-none">{formatNumber(timeLeft.hours)}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-90 mt-1">HOURS</span>
              </div>
              <span className="text-xl font-bold opacity-70">:</span>
              <div className="flex flex-col items-center min-w-[50px]">
                <span className="font-mono text-2xl sm:text-3xl font-bold leading-none">{formatNumber(timeLeft.minutes)}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-90 mt-1">MINS</span>
              </div>
              <span className="text-xl font-bold opacity-70">:</span>
              <div className="flex flex-col items-center min-w-[50px]">
                <span className="font-mono text-2xl sm:text-3xl font-bold leading-none">{formatNumber(timeLeft.seconds)}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-90 mt-1">SECS</span>
              </div>
            </div>
          </div>
          <a href="#" className="bg-[var(--amber-deep)] hover:bg-[var(--amber)] text-[var(--paper)] px-4 sm:px-7 py-3 rounded-full font-semibold text-sm transition-all whitespace-nowrap" onClick={openModal}>
            Buy Now - ₹49
          </a>
        </div>
      </div>
    </div>
  );
}
