"use client";

import { motion } from "framer-motion";
import { Maximize2, CheckSquare, Mail, User } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Maximize2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Create Account",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam.",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    title: "Select Courses",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam.",
  },
  {
    icon: Mail,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Confirmation Mail",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam.",
  },
  {
    icon: User,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "Enjoy your Course",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam.",
  },
];

export default function VariousCourse() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-emerald-600 font-semibold text-sm mb-3">
              Join over 15,00+ tech people
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Various types of courses will scale up your skills
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Steps */}
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Icon */}
                <div
                  className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center`}
                >
                  <step.icon size={28} className={step.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-emerald-50 rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/landingimg2.png"
                alt="Student with books"
                width={600}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />  
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
