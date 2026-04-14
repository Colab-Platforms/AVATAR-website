"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const instructors = [
  {
    name: "Jaime Escalante",
    specialty: "Digital Marketing",
    rating: 4.9,
    students: "643,512",
    courses: 33,
    image: "/assets/images/instructor1.jpg",
  },
  {
    name: "Anne Sullivan",
    specialty: "UI Design",
    rating: 4.7,
    students: "634,152",
    courses: 35,
    image: "/assets/images/instructor2.jpg",
  },
  {
    name: "Marva Collins",
    specialty: "UX Design",
    rating: 4.8,
    students: "672,212",
    courses: 34,
    image: "/assets/images/instructor3.jpg",
  },
  {
    name: "Steve Wozniak",
    specialty: "Graphic Design",
    rating: 4.9,
    students: "643,512",
    courses: 35,
    image: "/assets/images/instructor4.jpg",
  },
  {
    name: "Peter Tabichi",
    specialty: "Web Development",
    rating: 4.7,
    students: "643,522",
    courses: 37,
    image: "/assets/images/instructor5.jpg",
  },
  {
    name: "Spike Lee",
    specialty: "APP Development",
    rating: 4.8,
    students: "643,212",
    courses: 36,
    image: "/assets/images/instructor6.jpg",
  },
];

export default function BestTeacher() {
  return (
    <section className="py-20 bg-[#e8f5f0]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-emerald-600 font-semibold text-sm mb-3">
              Best teacher's
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Online courses form 150+ top instructor
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

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Instructor Image */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Instructor Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {instructor.specialty}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-sm font-semibold text-gray-900">
                      {instructor.rating}
                    </span>
                    <Star size={14} className="text-orange-400 fill-orange-400" />
                    <span className="text-xs text-orange-400 font-medium">
                      Instructor Rating
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-700">
                    <span className="font-semibold">
                      {instructor.students}{" "}
                      <span className="font-normal text-gray-600">Students</span>
                    </span>
                    <span className="font-semibold">
                      {instructor.courses}{" "}
                      <span className="font-normal text-gray-600">Course</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
