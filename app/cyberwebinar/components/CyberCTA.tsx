'use client';

import { Flame, Hourglass, ShieldCheck } from 'lucide-react';

export default function CyberCTA() {
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('openBookingModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="cta" className="relative cover-grad grain dark-grain">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center" style={{color:'var(--paper)'}}>
        <div className="flex items-center justify-center gap-2 mb-8 font-mono text-[11px] uppercase tracking-widest" style={{color:'rgba(243,236,225,0.7)'}}>
          <span className="amber-dot" aria-hidden="true"></span>
          <span>Registration closing soon</span>
        </div>

        <h2 className="display text-4xl sm:text-6xl lg:text-7xl lh-head max-w-4xl mx-auto">
          The scammer isn't taking a day off.
          <em className="font-serif italic block mt-2" style={{color:'var(--amber)'}}>Should you?</em>
        </h2>

        <p className="mt-8 text-base sm:text-lg lh-body max-w-2xl mx-auto" style={{color:'rgba(243,236,225,0.85)'}}>
          Every day you delay is another day your accounts, data, and family stay exposed. One hour today = years of peace of mind.
        </p>

        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-3 rounded-full border rule-dark font-mono text-xs uppercase tracking-widest" style={{color:'rgba(243,236,225,0.85)'}}>
          <span className="flex items-center gap-2"><Flame className="w-3.5 h-3.5" style={{color:'var(--amber)'}} />Only 17 seats left</span>
          <span className="hidden sm:inline" style={{color:'rgba(243,236,225,0.3)'}}>·</span>
          <span className="flex items-center gap-2"><Hourglass className="w-3.5 h-3.5" style={{color:'var(--amber)'}} />Closes 21 Feb, 11:59 PM</span>
        </div>

        <div className="mt-10">
          <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full text-base font-medium transition-colors duration-200"
             style={{background:'var(--amber)', color:'var(--ink)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 40px -10px rgba(232,100,26,0.5)'}}
             onClick={openModal}>
            <ShieldCheck className="w-5 h-5" />
            Yes, Secure My Seat Now
          </a>
        </div>

        <p className="mt-8 text-sm lh-caption" style={{color:'rgba(243,236,225,0.6)'}}>
          Protected by our 100% Money-Back Guarantee. If it's not worth it, you pay nothing.
        </p>
      </div>
    </section>
  );
}
