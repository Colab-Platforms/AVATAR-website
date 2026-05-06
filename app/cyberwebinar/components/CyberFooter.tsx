import { Mail, MessageCircle } from 'lucide-react';

export default function CyberFooter() {
  return (
    <footer className="border-t rule-dark" style={{background:'var(--ink)', color:'var(--paper)'}}>
      <div className="max-w-7xl mx-auto px-4 pb-32 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full" style={{background:'var(--amber)'}}></span>
              <span className="font-serif text-xl" style={{letterSpacing:'-0.02em'}}>Ek Galat Click</span>
            </div>
            <p className="text-sm lh-body max-w-sm" style={{color:'rgba(243,236,225,0.65)'}}>
              Practical cyber safety education for Indians who use UPI, WhatsApp, and online banking every day.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{color:'rgba(243,236,225,0.5)'}}>Contact</p>
            <address className="not-italic text-sm lh-body space-y-2">
              <a href="mailto:support@ekgalatclick.com" className="flex items-center gap-2 link-underline">
                <Mail className="w-4 h-4" />
                support@ekgalatclick.com
              </a>
              <a href="#" className="flex items-center gap-2 link-underline">
                <MessageCircle className="w-4 h-4" />
                WhatsApp: +91-98765-43210
              </a>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{color:'rgba(243,236,225,0.5)'}}>Follow</p>
            <ul className="text-sm lh-body space-y-2">
              <li><a href="#" className="link-underline">LinkedIn</a></li>
              <li><a href="#" className="link-underline">Instagram</a></li>
              <li><a href="#" className="link-underline">YouTube</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-10 rule-dark" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono uppercase tracking-widest" style={{color:'rgba(243,236,225,0.5)'}}>
          <p>© 2025 Ek Galat Click · All rights reserved</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" className="link-underline">Privacy Policy</a></li>
            <li><a href="#" className="link-underline">Terms</a></li>
            <li><a href="#" className="link-underline">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
