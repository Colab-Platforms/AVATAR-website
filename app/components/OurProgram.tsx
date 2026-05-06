"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Shield, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "AI for Students",
    description:
      "Build your future before the world catches up. Learn Prompt Engineering, ChatGPT, Gemini & Claude — and turn AI into your unfair advantage.",
    link: "#students",
    linkText: "Explore Student Program",
    accentColor: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "AI for Working Professionals",
    description:
      "Domain-specific AI training tailored to your exact role — Admin, HR, Design, Video, Development, Content & more.",
    link: "#professionals",
    linkText: "Explore Professional Program",
    accentColor: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "AI for Professionals 45+",
    description:
      "Age is no bar. A program built with patience, empathy, and zero jargon — so your experience meets AI's power.",
    link: "#45plus",
    linkText: "Explore 45+ Program",
    accentColor: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Cybersecurity Training",
    description:
      "Stay safe online. Learn to spot scams, phishing, and digital threats — before they find you.",
    link: "#cybersecurity",
    linkText: "Explore Cybersecurity Program",
    accentColor: "from-red-500 to-red-600",
  },
];

export default function OurProgram() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Training Built for Every Stage of Life
            </h2>
          </motion.div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div
                className={`${program.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <program.icon size={28} className={program.iconColor} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Link */}
              <a
                href={program.link}
                className={`inline-flex items-center gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r ${program.accentColor} group-hover:gap-3 transition-all duration-300`}
              >
                {program.linkText}
                <ArrowRight size={18} className={`${program.iconColor} group-hover:translate-x-1 transition-transform duration-300`} />
              </a>

              {/* Decorative gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.accentColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
