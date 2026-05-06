'use client';

import { Check, Lock, Play } from 'lucide-react';

export default function CyberHero() {
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('openBookingModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative border-b rule grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 entry entry-1">
            <div className="flex items-center gap-3 mb-8 lh-caption">
              <span className="amber-dot" aria-hidden="true"></span>
              <span className="font-mono text-xs uppercase tracking-widest" style={{color:'var(--muted)'}}>
                Live 1-Hour Session · English + Hindi
              </span>
            </div>

            <h1 className="display text-[2.5rem] sm:text-6xl lg:text-[5.5rem]">
              Ek Galat Click.<br />
              <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>Zindagi Bhar</em> Ka Pachtawa.
            </h1>

            <p className="mt-8 text-lg sm:text-xl lh-sub max-w-[32ch]" style={{color:'var(--ink)'}}>
              Learn how to protect your money, phone, and family from online scams — in just 60 minutes. No tech background needed.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium" onClick={openModal}>
                <Lock className="w-4 h-4" />
                Book My Seat — ₹49
              </a>
              <a href="#preview" className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium">
                <Play className="w-4 h-4" />
                Watch 60-Second Preview
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 entry entry-2">
            <figure className="relative rounded-sm overflow-hidden border rule" style={{aspectRatio: '4/5'}}>
              <div className="absolute inset-0" style={{background: 'linear-gradient(160deg, #1a1714 0%, #0f0e0c 100%)'}}></div>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop"
                alt="Phone screen illuminated in darkness"
                className="absolute inset-0 w-full h-full object-cover"
                style={{mixBlendMode: 'luminosity', opacity: 0.7}}
                loading="eager"
              />
              <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 40%, rgba(15,14,12,0.85) 100%)'}}></div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-[var(--paper)]">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-2">Report · RBI · FY 2023–24</p>
                <p className="font-serif text-2xl lh-head" style={{letterSpacing:'-0.02em'}}>
                  <span style={{color:'var(--amber)'}}>₹11,000 cr</span> lost to cyber fraud in India last year.
                </p>
                <p className="mt-2 text-xs lh-caption opacity-80">Most victims were educated, careful people — just like you.</p>
              </figcaption>
            </figure>
          </aside>
        </div>

        <hr className="my-10 sm:my-14 rule" />
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-sm lh-caption">
          <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{color:'var(--amber-deep)'}} /><span>2,000+ Indians Trained</span></li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{color:'var(--amber-deep)'}} /><span>4.9/5 Rating</span></li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{color:'var(--amber-deep)'}} /><span>Money-Back Guarantee</span></li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{color:'var(--amber-deep)'}} /><span>Certificate Included</span></li>
        </ul>
      </div>
    </section>
  );
}
