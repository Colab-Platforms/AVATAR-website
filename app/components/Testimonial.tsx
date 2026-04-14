"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Jack Andraka",
    role: "Digital Marketing",
    image: "/assets/images/student1.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris arurtum dolor vel molestie augue.",
    time: "This week",
    date: "07/02/2021 - 10:33 am",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Jacob Barnett",
    role: "Graphic Design",
    image: "/assets/images/student2.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris arurtum dolor vel molestie augue.",
    time: "This week",
    date: "06/02/2021 - 08:23 am",
    bgColor: "bg-pink-50",
  },
  {
    name: "Colin Carlson",
    role: "Web Development",
    image: "/assets/images/student3.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris arurtum dolor vel molestie augue.",
    time: "This week",
    date: "05/02/2021 - 07:20 pm",
    bgColor: "bg-yellow-50",
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-emerald-600 font-semibold text-sm mb-3">
              Testimonial
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What our students say about us in platform
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

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Student Image */}
              <div className="flex justify-center mb-6">
                <div className={`relative w-24 h-24 rounded-full ${testimonial.bgColor} p-1`}>
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Student Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <span className="text-emerald-600 text-4xl font-serif leading-none">"</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  {testimonial.quote}
                </p>
              </div>

              {/* Time and Date */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                <span className="font-medium">{testimonial.time}</span>
                <span>{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
