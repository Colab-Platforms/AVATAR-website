"use client";

import { useState } from "react";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Webinars",
    dropdown: [
      { label: "Cyber Safety Webinar", href: "/cyberwebinar" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="mx-auto container px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">

        <div>
          <Image 
            src="/assets/images/magnific__background__97576.png" 
            alt="Avatar Logo" 
            width={150}
            height={60}
          
          />

        </div>

          
        </Link>

        {/* ✅ Desktop Nav (Hover Dropdown) */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">

              {/* Normal Link */}
              {!link.dropdown ? (
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  {/* Dropdown Trigger */}
                  <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-gray-900 font-medium">
                    {link.label}
                    <ChevronDown size={16} />
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-8 w-56 bg-white shadow-lg rounded-md py-2 
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#courses"
          className="hidden md:flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm"
        >
          <LogIn size={15} />
          Checkout Now
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (unchanged) */}
      {menuOpen && (
        <div className="md:hidden bg-[#f0f4f8] border-t px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <div className="text-gray-600 font-medium text-sm mb-2">
                      {link.label}
                    </div>
                    <div className="pl-4 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-gray-500 hover:text-gray-900 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/#courses"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white text-sm px-5 py-2 rounded-full"
          >
            <LogIn size={15} />
            Checkout Now
          </Link>
        </div>
      )}
    </nav>
  );
}