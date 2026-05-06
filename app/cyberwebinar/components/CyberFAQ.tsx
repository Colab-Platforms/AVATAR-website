'use client';

export default function CyberFAQ() {
  const faqs = [
    { question: 'I\'m not a tech person. Will I understand?', answer: 'Absolutely. If you can use WhatsApp, you can follow this. Zero jargon — everything explained with real Indian examples.' },
    { question: 'Will I get the recording?', answer: 'Yes. The recording stays with you for 30 days after the session.' },
    { question: 'Is this useful for my parents or elders?', answer: 'It\'s designed for them too. We strongly recommend seniors attend — the session is paced accordingly.' },
    { question: 'What if I can\'t attend live?', answer: 'Full recording, all resources, and WhatsApp support — same as live attendees.' },
    { question: 'Is there a refund policy?', answer: '100% refund within 24 hours of the session if you don\'t find value. No questions asked.' },
    { question: 'Will you sell my data?', answer: 'Never. We\'re cybersecurity experts. We practice what we preach.' }
  ];

  return (
    <section id="faq" className="border-b rule">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{color:'var(--muted)'}}>§ 09 — FAQ</p>
        <h2 className="display text-3xl sm:text-5xl lh-head mb-12">
          Quick answers to your doubts.
        </h2>

        <div className="border-t rule">
          {faqs.map((item, index) => (
            <details key={index} className="border-b rule py-6 group">
              <summary className="flex items-start justify-between gap-6 cursor-pointer">
                <h3 className="font-serif text-xl sm:text-2xl lh-sub" style={{letterSpacing:'-0.02em'}}>{item.question}</h3>
                <span className="faq-plus mt-1 text-2xl font-light shrink-0" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 text-sm lh-body max-w-[65ch]" style={{color:'var(--muted)'}}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
