import { GraduationCap, Briefcase, Store, Users, Home } from 'lucide-react';

export default function CyberAudience() {
  const audiences = [
    { icon: GraduationCap, title: 'Students', description: 'Protect scholarship money, secure social media, avoid internship scams.' },
    { icon: Briefcase, title: 'Working Professionals', description: 'Guard salary accounts, office data, and LinkedIn identity.' },
    { icon: Store, title: 'Business Owners & Freelancers', description: 'Prevent payment frauds and client data leaks.' },
    { icon: Users, title: 'Parents', description: 'Learn what to teach your kids and elderly parents.' },
    { icon: Home, title: 'Homemakers & Seniors', description: 'Spot fake "bank verification" calls instantly.' }
  ];

  return (
    <section className="border-b rule" style={{background:'var(--paper-dim)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 06 — Audience</p>
          <h2 className="display text-3xl sm:text-5xl lh-head">
            Built for everyday Indians. <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>Not for hackers.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={index} className="persona p-6 rounded-sm">
                <Icon className="w-6 h-6 mb-5" style={{color:'var(--amber-deep)'}} />
                <h3 className="font-serif text-xl lh-head mb-2" style={{letterSpacing:'-0.02em'}}>{item.title}</h3>
                <p className="text-sm lh-body" style={{color:'var(--muted)'}}>{item.description}</p>
              </article>
            );
          })}
          <article className="p-6 rounded-sm flex items-center" style={{background:'var(--ink)', color:'var(--paper)'}}>
            <p className="font-serif text-lg lh-sub italic" style={{letterSpacing:'-0.01em'}}>
              "If you can operate WhatsApp, you are ready for this session."
            </p>
          </article>
        </div>

        <div className="mt-10 border-t border-b rule py-6 text-center">
          <p className="font-serif text-xl sm:text-2xl lh-sub italic" style={{letterSpacing:'-0.02em'}}>
            If you use UPI, WhatsApp, Gmail, or online shopping — this session is for you.
          </p>
        </div>
      </div>
    </section>
  );
}
