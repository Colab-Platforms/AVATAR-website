"use client";

import { motion } from "framer-motion";
import { ArrowRight, Store, Layers, Code } from "lucide-react";

const services = [
  {
    icon: Store,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Digital Marketing Solution & Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa.",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    buttonText: "text-white",
  },
  {
    icon: Layers,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "UI / UX Design Solution & Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa.",
    buttonColor: "bg-transparent",
    buttonText: "text-indigo-600 hover:text-indigo-700",
  },
  {
    icon: Code,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Web and App Development Solution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa.",
    buttonColor: "bg-transparent",
    buttonText: "text-indigo-600 hover:text-indigo-700",
  },
];

export default function WhatWeDo() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-emerald-600 font-semibold text-sm mb-3">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our education system will give you the perfect solution
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
              risus id ligula ullamcorper sollicitudin. Mauris quis convallis
              nunc. Class aptent taciti sociosqu.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div
                className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <service.icon size={28} className={service.iconColor} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button
                className={`${service.buttonColor} ${service.buttonText} font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200`}
              >
                Learn More
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
