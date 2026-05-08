"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    whatOthersTeach: "Machine Learning & Algorithms",
    whatAvatarTeaches: "AI Tools you use from Day 1",
  },
  {
    whatOthersTeach: "Theory & Concepts",
    whatAvatarTeaches: "Hands-on, role-specific practice",
  },
  {
    whatOthersTeach: "Complex Coding",
    whatAvatarTeaches: "Prompt Engineering & no-code AI",
  },
  {
    whatOthersTeach: "One-size-fits-all",
    whatAvatarTeaches: "Tailored to your age, role & goals",
  },
];

export default function WhatWeDo() {
  return (
    <section id="about" className="py-20  from-white to-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-emerald-600 font-semibold text-sm mb-3 uppercase tracking-wide">
            Why Avatar
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We Don&apos;t Teach AI Like a Textbook. We Teach It Like Life.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Avatar, our entire philosophy is simple — AI should make your life easier, not complicated. 
            Every course we build, every session we run, every tool we teach is chosen for one reason: 
            it must be immediately useful to you.
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="p-6 md:p-8 border-r border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X size={20} className="text-red-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">What Others Teach</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">What Avatar Teaches</h3>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`grid grid-cols-2 ${
                index !== comparisons.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="p-6 md:p-8 border-r border-gray-200 bg-red-50/30">
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  {item.whatOthersTeach}
                </p>
              </div>
              <div className="p-6 md:p-8 bg-emerald-50/30">
                <p className="text-gray-900 font-semibold text-base md:text-lg">
                  {item.whatAvatarTeaches}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
