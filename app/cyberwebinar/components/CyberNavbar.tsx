'use client';

export default function CyberNavbar() {
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('openBookingModal');
    window.dispatchEvent(event);
  };

  return (
    <header className="border-b rule sticky top-0 left-0 z-10 bg-[#f3ece1] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{background:'var(--amber)'}}></span>
          <span className="font-serif text-lg" style={{fontVariationSettings:"'opsz' 144", letterSpacing:'-0.02em'}}>Ek Galat Click</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#problem" className="link-underline">The Problem</a>
          <a href="#learn" className="link-underline">Curriculum</a>
          <a href="#details" className="link-underline">Session</a>
          <a href="#faq" className="link-underline">FAQ</a>
        </nav>
        <a href="#cta" className="btn-primary text-sm px-4 py-2 rounded-full" onClick={openModal}>Book Seat</a>
      </div>
    </header>
  );
}
