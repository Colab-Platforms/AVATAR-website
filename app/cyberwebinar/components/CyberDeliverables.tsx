import { Check } from 'lucide-react';

export default function CyberDeliverables() {
  const deliverables = [
    { title: 'Printable Security Checklist (PDF)', description: '25 things to check on your phone and laptop today.' },
    { title: 'India Scam Playbook', description: 'Top 20 ongoing frauds with screenshots and countermeasures.' },
    { title: 'Emergency Response Card', description: 'Save it on your phone. Share it with your parents.' },
    { title: 'Recommended Tools List', description: 'Free and paid apps we personally trust.' },
    { title: 'Participation Certificate', description: 'Shareable directly on LinkedIn.' },
    { title: '30-Day WhatsApp Support', description: 'Ask doubts anytime after the session.' }
  ];

  return (
    <section className="border-b rule">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 05 — Deliverables</p>
        <h2 className="display text-3xl sm:text-5xl lh-head mb-12 max-w-3xl">
          You don't just attend. <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>You transform.</em>
        </h2>

        <ul className="border-t rule">
          {deliverables.map((item, index) => (
            <li key={index} className="border-b rule py-6 grid grid-cols-12 gap-4 items-start">
              <Check className="col-span-1 w-5 h-5 mt-1" style={{color:'var(--amber-deep)'}} />
              <div className="col-span-11">
                <h3 className="text-lg font-semibold lh-sub">{item.title}</h3>
                <p className="text-sm lh-body mt-1" style={{color:'var(--muted)'}}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
