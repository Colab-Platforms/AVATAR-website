export default function CyberComparison() {
  const comparisons = [
    { youtube: 'Generic US-based advice', session: '100% India-specific scams' },
    { youtube: 'Hours of scattered content', session: 'Structured 60-minute system' },
    { youtube: 'No interaction', session: 'Live Q&A with expert' },
    { youtube: 'Outdated in 6 months', session: 'Updated for 2025 threats' }
  ];

  return (
    <section className="border-b rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 04 — Why this, not YouTube</p>
            <h2 className="display text-3xl sm:text-5xl lh-head mb-10">
              Why thousands chose this over <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>free</em> YouTube videos.
            </h2>

            <table className="tbl w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left w-1/2">Free YouTube</th>
                  <th className="text-left w-1/2">This Session</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index}>
                    <td className="lh-body" style={{color:'var(--muted)'}}>{item.youtube}</td>
                    <td className="lh-body font-medium">{item.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l rule">
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>Instructor</p>
            <figure className="mb-6 relative rounded-sm overflow-hidden" style={{aspectRatio: '4/3'}}>
              <div className="absolute inset-0" style={{background:'#0f0e0c'}}></div>
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=900&q=80&auto=format&fit=crop"
                alt="Cybersecurity workspace"
                className="absolute inset-0 w-full h-full object-cover"
                style={{mixBlendMode: 'luminosity', opacity:0.75}}
                loading="lazy"
              />
              <div className="absolute inset-0" style={{background:'linear-gradient(180deg, transparent 50%, rgba(15,14,12,0.7) 100%)'}}></div>
            </figure>
            <h3 className="font-serif text-2xl lh-head mb-3" style={{letterSpacing:'-0.02em'}}>Led by Aarav Mehta</h3>
            <p className="text-sm lh-body" style={{color:'var(--muted)'}}>
              Cybersecurity expert with 12 years of experience. Trained professionals at <span style={{color:'var(--ink)'}}>HDFC Bank, Infosys, and Razorpay</span>. Featured in <span style={{color:'var(--ink)'}}>The Hindu, Mint, and YourStory</span>.
            </p>
            <p className="mt-4 text-sm lh-body">
              I don't teach theory. I teach what actually saves real people from real scams in India.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
