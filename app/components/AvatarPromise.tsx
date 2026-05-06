"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function AvatarPromise() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#e8f5f0" }}
    >
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a7d9c4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
             The Avatar Promise
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Avatar, our philosophy is simple — AI should make your life easier, not more complicated. 
            Every course we build, every session we run, and every tool we teach is chosen for one reason: 
            <span className="font-bold text-gray-900"> it must be immediately useful to YOU.</span>
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
             Ready to Upgrade Your Life with AI?
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg cursor-pointer text-base flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Free Demo
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-md cursor-pointer text-base border-2 border-gray-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Talk to an Advisor
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
