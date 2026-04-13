"use client";

import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f0f4f8] border-b border-gray-200">
      <div className=" mx-auto container px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-9 relative">
            <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="4" y="0" width="28" height="36" rx="3" fill="#4f46e5" opacity="0.85"/>
              <rect x="8" y="6" width="28" height="36" rx="3" fill="#6366f1" opacity="0.7"/>
              <rect x="0" y="4" width="28" height="36" rx="3" fill="#312e81"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">
            AVATAR<span className="text-emerald-500">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-lg font-medium transition-colors duration-200 ${
                  i === 0
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#courses"
          className="hidden md:flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white text-lg font-semibold px-5 py-2 rounded-full transition-colors duration-200"
        >
          <LogIn size={15} />
          Checkout Now
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f0f4f8] border-t px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#courses"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            <LogIn size={15} />
            Checkout Now
          </a>
        </div>
      )}
    </nav>
  );
}
