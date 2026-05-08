"use client";

import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const footerLinks = {   
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Contact Us", href: "#contact" },
  ],
  programs: [
    { name: "Cybersecurity Training", href: "#cybersecurity" },
    { name: "AI Training for Students", href: "#students" },
    { name: "AI for Working Professionals", href: "#professionals" },
    { name: "AI Training for 45+ Professionals", href: "#seniors" },
    { name: "Prompt Engineering Mastery", href: "#prompt" },
   
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "FAQs", href: "#faq" },
    { name: "Book a Free Demo", href: "#demo" },
    { name: "Batch Schedule", href: "#schedule" },
    { name: "Certification Info", href: "#certification" },
    { name: "Refund Policy", href: "#refund" },
  
  ],
};

const socialLinks = [
  { icon: FaFacebookSquare, href: "#", label: "Facebook" },
  { icon: FaInstagramSquare, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp Community" },
];

export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Ahead With AI — Subscribe to the Avatar Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get weekly AI tips, free prompts, course updates & exclusive offers — straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
              <button className="px-6 py-3 btn-color text-white font-semibold rounded-lg transition-colors duration-200">
                Subscribe →
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/assets/images/magnific__background__97576.png"
                  alt="Avatar Logo"
                  width={150}
                  height={60}
                />
              </div>
              <h4 className="text-white font-bold mb-2">Make Life Easy With AI.</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Avatar is India's most practical AI learning platform — helping students, professionals, and seniors master AI tools, Prompt Engineering, and Cybersecurity through live, hands-on training.
              </p>
              <p className="text-emerald-400 font-semibold text-sm mb-4">
                Learn AI. Use AI. Live Better.
              </p>
              
              <div className="space-y-2 text-sm">
                <a href="mailto:info@avatar.ai" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                  <FaEnvelope className="text-emerald-500" />
                  info@avatar.ai
                </a>
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
                  <FaPhone className="text-emerald-500" />
                  +91-XXXXX-XXXXX
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Programs */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Our Programs</h3>
              <ul className="space-y-2">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Support & Resources</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Reach Us</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Avatar AI Training Center</p>
                    <p>[Your Full Address]</p>
                    <p>[City, State – PIN Code]</p>
                  </div>
                </div>
                
                <a href="mailto:info@avatar.ai" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                  <FaEnvelope className="text-emerald-500" />
                  info@avatar.ai
                </a>
                
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                  <FaPhone className="text-emerald-500" />
                  +91-XXXXX-XXXXX
                </a>
                
                <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                  <FaWhatsapp className="text-emerald-500" />
                  +91-XXXXX-XXXXX
                </a>
                
                <div className="flex items-center gap-2">
                  <FaClock className="text-emerald-500" />
                  Mon–Sat | 10 AM – 7 PM
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center mb-6">
              <h4 className="text-white font-semibold mb-4">Follow Us & Join the AI Revolution</h4>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-200"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center mb-6">
              <p className="text-gray-400 italic">
                "Avatar isn't just a training platform. It's your partner in building an AI-powered life."
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      {/* <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Avatar AI Learning Pvt. Ltd. — All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-gray-200 transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#refund" className="hover:text-gray-200 transition-colors">Refund Policy</a>
              <span>|</span>
              <a href="#cookies" className="hover:text-gray-200 transition-colors">Cookie Policy</a>
              <span>|</span>
              <a href="#sitemap" className="hover:text-gray-200 transition-colors">Sitemap</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-3">
            Designed with ❤️ to make AI accessible for everyone.
          </p>
        </div>
      </div> */}

      {/* Sticky CTA Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#demo"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105"
        >
          🚀 Book Your Free Demo Today
        </a>
      </div> */}
    </>
  );
}
