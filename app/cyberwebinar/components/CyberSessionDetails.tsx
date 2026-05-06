import { Calendar, Clock, Timer, Monitor, Languages, IndianRupee, Gift } from 'lucide-react';

export default function CyberSessionDetails() {
  const details = [
    { icon: Calendar, label: 'Date', value: 'Sat, 22 Feb 2025' },
    { icon: Clock, label: 'Time', value: '6:00 PM IST' },
    { icon: Timer, label: 'Duration', value: '60 min + 15 Q&A' },
    { icon: Monitor, label: 'Format', value: 'Live · Zoom' },
    { icon: Languages, label: 'Language', value: 'English + Hindi' },
    { icon: IndianRupee, label: 'Fee', value: '₹49', extra: 'early-bird' }
  ];

  return (
    <section id="details" className="border-b rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 07 — Session Details</p>
            <h2 className="display text-3xl sm:text-5xl lh-head">The record.</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest" style={{color:'var(--muted)'}}>Ref · EGC-2025-01</p>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-l rule">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="border-b border-r rule p-6">
                <dt className="font-mono text-[11px] uppercase tracking-widest mb-3 flex items-center gap-2" style={{color:'var(--muted)'}}>
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </dt>
                <dd className="font-serif text-2xl lh-head" style={{letterSpacing:'-0.02em'}}>
                  {item.value} {item.extra && <span className="text-sm font-mono" style={{color:'var(--muted)'}}>{item.extra}</span>}
                </dd>
              </div>
            );
          })}
          <div className="border-b border-r rule p-6 col-span-2">
            <dt className="font-mono text-[11px] uppercase tracking-widest mb-3 flex items-center gap-2" style={{color:'var(--muted)'}}>
              <Gift className="w-3.5 h-3.5" />
              Bonus
            </dt>
            <dd className="font-serif text-2xl lh-head" style={{letterSpacing:'-0.02em'}}>First 50 registrants — free 1-on-1 security audit</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
