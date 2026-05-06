'use client';

import { useEffect, useState } from 'react';
import { X, User, Mail, Phone, Lock, ShieldCheck } from 'lucide-react';

export default function CyberBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => setIsActive(true), 10);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openBookingModal' as any, handleOpen);
    return () => window.removeEventListener('openBookingModal' as any, handleOpen);
  }, []);

  const closeModal = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_a5yw8pg';
      const templateID = 'template_xw4t70j';
      const publicKey = 'E_aA_E3qJeAJMB6Zi';

      // @ts-ignore
      if (typeof emailjs !== 'undefined') {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: `New booking request from ${formData.name}`,
          to_name: 'TakeSolution Admin',
        };

        // @ts-ignore
        await emailjs.send(serviceID, templateID, templateParams, publicKey);
        
        alert(`Inquiry sent successfully! Our team will contact you soon and send the Zoom link to ${formData.email}`);
        closeModal();
        setFormData({ name: '', email: '', phone: '' });
      } else {
        console.error('EmailJS not loaded');
        alert('Email service not configured. Please contact support.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Oops! Something went wrong. Please try again later or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-[rgba(15,14,12,0.85)] backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} onClick={handleOverlayClick}>
      <div className={`w-full max-w-[520px] max-h-[90vh] overflow-y-auto transition-transform duration-400 ${isActive ? 'translate-y-0' : 'translate-y-5'}`}>
        <div className="bg-[var(--paper)] border border-[var(--rule)] rounded-[20px] relative shadow-2xl">
          <button className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center border border-[var(--rule)] rounded-full bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-all z-10" onClick={closeModal} aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-10 sm:p-10 pt-10 pb-6 border-b border-[var(--rule)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full" style={{background:'var(--amber)'}}></span>
              <span className="font-mono text-xs uppercase tracking-widest" style={{color:'var(--muted)'}}>Secure Your Seat</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lh-head" style={{letterSpacing:'-0.02em'}}>
              One step away from <em className="italic" style={{color:'var(--amber-deep)'}}>cyber safety</em>
            </h2>
            <p className="mt-3 text-sm lh-body" style={{color:'var(--muted)'}}>
              Fill in your details below. We'll send the Zoom link to your email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-6">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2" style={{color:'var(--ink)'}}>
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3.5 border border-[var(--rule)] rounded bg-[var(--paper)] text-[var(--ink)] text-[15px] transition-all focus:outline-none focus:border-[var(--amber-deep)] focus:shadow-[0_0_0_3px_rgba(232,100,26,0.1)]" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2" style={{color:'var(--ink)'}}>
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3.5 border border-[var(--rule)] rounded bg-[var(--paper)] text-[var(--ink)] text-[15px] transition-all focus:outline-none focus:border-[var(--amber-deep)] focus:shadow-[0_0_0_3px_rgba(232,100,26,0.1)]" 
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium mb-2" style={{color:'var(--ink)'}}>
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full px-4 py-3.5 border border-[var(--rule)] rounded bg-[var(--paper)] text-[var(--ink)] text-[15px] transition-all focus:outline-none focus:border-[var(--amber-deep)] focus:shadow-[0_0_0_3px_rgba(232,100,26,0.1)]" 
                placeholder="+91 98765 43210"
                pattern="[0-9+\s\-()]+"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--rule)]">
              <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--ink)] text-[var(--paper)] rounded-full text-[15px] font-semibold transition-all hover:bg-[var(--amber-deep)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'}}>
                <Lock className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Confirm Booking — ₹49'}
              </button>
              <p className="text-xs text-center lh-caption mt-3 flex items-center justify-center gap-1" style={{color:'var(--muted)'}}>
                <ShieldCheck className="w-3 h-3" />
                100% Money-Back Guarantee · Secure Payment
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
