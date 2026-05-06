import { Star } from 'lucide-react';

export default function CyberTestimonials() {
  const testimonials = [
    { quote: 'I was about to transfer ₹80,000 to a "customer care" number when I remembered what was taught. It literally saved my savings.', name: 'Rajesh M.', location: 'Pune' },
    { quote: 'Simple enough for my mother to understand. She now knows not to share OTPs with "bank wale bhaiya".', name: 'Priya S.', location: 'Delhi' },
    { quote: 'Worth 10× the fee. I made my entire 15-person team attend.', name: 'Amit K.', location: 'Startup Founder, Bangalore' }
  ];

  return (
    <section className="border-b rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 08 — Voices</p>
          <h2 className="display text-3xl sm:text-5xl lh-head">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <figure key={index} className="p-7 rounded-sm border rule flex flex-col" style={{background:'var(--paper-dim)'}}>
              <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{color:'var(--amber-deep)'}} />
                ))}
              </div>
              <blockquote className="font-serif text-lg lh-sub flex-1" style={{letterSpacing:'-0.01em'}}>
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t rule text-sm">
                <span className="font-medium">{item.name}</span>
                <span style={{color:'var(--muted)'}}> · {item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
