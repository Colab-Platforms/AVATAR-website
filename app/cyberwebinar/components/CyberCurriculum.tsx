import { Radar, KeyRound, ShieldCheck, Banknote, Bug, CloudUpload, EyeOff, Smartphone, Siren } from 'lucide-react';

export default function CyberCurriculum() {
  const curriculum = [
    { icon: Radar, title: 'Spot fake calls, SMS and emails', subtitle: 'Scam Radar', description: 'Pattern recognition in under five seconds.' },
    { icon: KeyRound, title: 'One strong system, zero stress', subtitle: 'Password Mastery', description: 'Stop reusing passwords — without a headache.' },
    { icon: ShieldCheck, title: 'The 2-minute setup that blocks 99%', subtitle: '2FA Shield', description: 'Enable two-factor the right way, everywhere.' },
    { icon: Banknote, title: 'Rules your bank won\'t tell you', subtitle: 'UPI & Banking', description: 'Transaction hygiene, limits, and silent defences.' },
    { icon: Bug, title: 'Free tools that actually work', subtitle: 'Device Protection', description: 'The short list of apps worth installing.' },
    { icon: CloudUpload, title: 'Never lose photos or documents', subtitle: 'Smart Backups', description: 'A two-layer backup plan anyone can follow.' },
    { icon: EyeOff, title: 'Stop apps from spying on you', subtitle: 'Private Browsing', description: 'Permissions, tracking, and simple lockdowns.' },
    { icon: Smartphone, title: 'What to check on your phone today', subtitle: 'Mobile Lockdown', description: 'A 10-point audit you\'ll finish during the session.' },
    { icon: Siren, title: 'The first 10 minutes of a hack', subtitle: 'Emergency Protocol', description: 'What to do, who to call, what to freeze first.' }
  ];

  return (
    <section id="learn" className="border-b rule" style={{background:'var(--paper-dim)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 03 — Curriculum</p>
          <h2 className="display text-3xl sm:text-5xl lg:text-6xl lh-head">
            60 minutes. 9 life-saving skills. <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>Zero jargon.</em>
          </h2>
          <p className="mt-6 text-base sm:text-lg lh-body" style={{color:'var(--muted)'}}>
            A practical, example-driven session for real Indians who use UPI, WhatsApp, online banking, and shopping apps every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l rule">
          {curriculum.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={index} className="border-b border-r rule p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5" style={{color:'var(--amber-deep)'}} />
                  <span className="font-mono text-[11px] uppercase tracking-widest" style={{color:'var(--muted)'}}>
                    {String(index + 1).padStart(2, '0')} {item.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lh-head mb-2" style={{letterSpacing:'-0.02em'}}>{item.title}</h3>
                <p className="text-sm lh-body" style={{color:'var(--muted)'}}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
