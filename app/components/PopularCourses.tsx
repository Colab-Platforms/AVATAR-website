"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, BarChart3 } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "UI Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/assets/images/course-ui.jpg",
    duration: "22 hr 30 min",
    lessons: 64,
    hasProgressChart: true,
    buttonStyle: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
  {
    title: "UX Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/assets/images/course-ux.jpg",
    duration: "22 hr 30 min",
    lessons: 64,
    hasProgressChart: true,
    buttonStyle: "bg-transparent text-indigo-600 hover:text-indigo-700",
  },
  {
    title: "Digital Marketing",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/assets/images/course-marketing.jpg",
    duration: "22 hr 30 min",
    lessons: 64,
    hasProgressChart: true,
    buttonStyle: "bg-transparent text-indigo-600 hover:text-indigo-700",
  },
  // {
  //   title: "Graphic Design",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   image: "/assets/images/course-graphic.jpg",
  //   duration: "22 hr 30 min",
  //   lessons: 64,
  //   hasProgressChart: true,
  //   buttonStyle: "bg-transparent text-indigo-600 hover:text-indigo-700",
  // },
  // {
  //   title: "Web Development",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   image: "/assets/images/course-web.jpg",
  //   duration: "22 hr 30 min",
  //   lessons: 64,
  //   hasProgressChart: true,
  //   buttonStyle: "bg-transparent text-indigo-600 hover:text-indigo-700",
  // },
  // {
  //   title: "APP Development",
  //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   image: "/assets/images/course-app.jpg",
  //   duration: "22 hr 30 min",
  //   lessons: 64,
  //   hasProgressChart: true,
  //   buttonStyle: "bg-transparent text-indigo-600 hover:text-indigo-700",
  // },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-[#e8f5f0]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-emerald-600 font-semibold text-sm mb-3">
              Popular courses
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our most popular courses in students
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

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-56 bg-gray-200">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-orange-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} className="text-indigo-400" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  {course.hasProgressChart && (
                    <div className="flex items-center gap-1">
                      <BarChart3 size={16} className="text-indigo-400" />
                      <span>Progress chart</span>
                    </div>
                  )}
                </div>

                {/* Learn More Button */}
                <button
                  className={`${course.buttonStyle} font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200`}
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
