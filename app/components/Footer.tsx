"use client";

import { FaFacebookSquare, FaInstagramSquare, FaGooglePlusSquare, FaDribbbleSquare } from "react-icons/fa";

const footerLinks = {   
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Support", href: "#" },
    { name: "Latest Blog", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  feature: [
    { name: "Data Analytics", href: "#" },
    { name: "Email Marketing", href: "#" },
    { name: "Seo Ranking", href: "#" },
    { name: "Website Growth", href: "#" },
    { name: "Affiliate", href: "#" },
  ],
  help: [
    { name: "Find a Job?", href: "#" },
    { name: "Looking Consultant?", href: "#" },
    { name: "Download App", href: "#" },
    { name: "Create a Account", href: "#" },
    { name: "Much More", href: "#" },
  ],
};

const socialLinks = [
  { icon: FaFacebookSquare, href: "#", label: "Facebook" },
  { icon: FaInstagramSquare, href: "#", label: "Instagram" },
  { icon: FaDribbbleSquare, href: "#", label: "Dribbble" },
  { icon: FaGooglePlusSquare, href: "#", label: "Google Plus" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Clas<span className="text-emerald-500">rom</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Our Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-emerald-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Feature
            </h3>
            <ul className="space-y-3">
              {footerLinks.feature.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-emerald-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Need Help?
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-emerald-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
