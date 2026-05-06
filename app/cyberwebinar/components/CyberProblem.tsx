export default function CyberProblem() {
  const problems = [
    '"Sir, main SBI se bol raha hoon…" and your account is empty in three minutes.',
    'That APK your uncle forwarded on WhatsApp? It\'s already reading your OTPs.',
    'A "₹500 cashback" link that drains ₹50,000 from your account.',
    'An "HR interview" call that walks away with your Aadhaar and PAN.',
    'KBC lottery winner? The only winner is the fraudster on the other end.',
    'Same password everywhere? One leak and everything falls.'
  ];

  return (
    <section id="problem" className="border-b rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 02 — The Problem</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display text-3xl sm:text-5xl lg:text-6xl lh-head">
              If any of this sounds familiar, you're <em className="font-serif italic" style={{color:'var(--amber-deep)'}}>already</em> at risk.
            </h2>
            <p className="mt-6 text-base sm:text-lg lh-body max-w-[60ch]" style={{color:'var(--muted)'}}>
              Scammers today don't hide behind foreign accents anymore. They speak your language, know your bank, and use your fear against you.
            </p>
          </div>
        </div>

        <ol className="border-t rule">
          {problems.map((problem, index) => (
            <li key={index} className="num-line border-b rule py-6 sm:py-8 grid grid-cols-12 gap-4 items-baseline">
              <span className="col-span-2 sm:col-span-1 font-mono text-xs pt-2" style={{color:'var(--amber-deep)'}}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="col-span-10 sm:col-span-11 font-serif text-xl sm:text-3xl lh-head" style={{letterSpacing:'-0.02em'}}>
                {problem}
              </p>
            </li>
          ))}
        </ol>

        <figure className="mt-16 sm:mt-20 max-w-3xl">
          <blockquote className="font-serif text-2xl sm:text-4xl italic lh-head" style={{letterSpacing:'-0.02em'}}>
            "You don't get hacked because you're careless. You get hacked because nobody taught you the rules of the new game."
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
