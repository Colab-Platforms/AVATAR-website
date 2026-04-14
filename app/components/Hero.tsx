"use client";

import { motion } from "framer-motion";
import { Play, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center    relative overflow-hidden"
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

      {/* Decorative bookmark icon top right — hidden on very small screens */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-16 md:right-32 opacity-30">
        <svg width="26" height="34" viewBox="0 0 32 40" fill="none">
          <path
            d="M2 2h28v36l-14-8L2 38V2z"
            stroke="#2d7a5f"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="w-full container mx-auto px-5 sm:px-8 md:px-12 xl:px-20 py-10 md:py-16 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-10 items-center">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 z-10 w-full"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm w-fit border border-gray-100">
            <span className="bg-gray-900 text-white text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap">
              New
            </span>
            <p className="text-xs sm:text-sm text-gray-600 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
            Develop your{" "}
            <span className="text-emerald-500 italic">skills</span>
            <br />
            in a new and
            <br />
            unique way.
          </h1>

          {/* Subtext */}
          <div className="space-y-1">
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Your dream courses are waiting for you. 👋
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
              Join thousands of learners and unlock your potential with
              expert-led courses tailored to your goals.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-10 py-1">
            <div>
              <p className="text-xl sm:text-2xl font-black text-gray-900">200+</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Courses</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl font-black text-gray-900">6.7k</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Students</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl font-black text-gray-900">50+</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Mentors</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 sm:gap-5 mt-1 flex-wrap">
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-colors duration-200 shadow-lg cursor-pointer text-sm sm:text-base"
            >
              Get Started
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 text-gray-700 font-semibold hover:text-gray-900 transition-colors duration-200"
            >
              <span className="bg-gray-900 text-white p-3 sm:p-3.5 rounded-full shadow-md flex items-center justify-center">
                <Play size={14} fill="white" />
              </span>
              <span className="text-sm sm:text-base">Play Video</span>
            </motion.button>
          </div>
        </motion.div>

        {/* ── RIGHT IMAGE + FLOATING CARDS ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center items-center w-full"
        >
          {/* Decorative oval behind student */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
            <div
              className="w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px] rounded-[50%] opacity-60"
              style={{ backgroundColor: "#c8e9db" }}
            />
          </div>

          {/* Main image */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[400px] h-[340px] sm:h-[420px] md:h-[460px] lg:h-[520px] z-10 flex items-end justify-center">
            <img
              src="/assets/images/heroimg.png"
              alt="Student learning"
              className="object-cover object-bottom w-full h-full drop-shadow-2xl"
            />
          </div>

          {/* ── Floating Card: Our Rating (top-left) ── */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-4 sm:top-8 left-0 sm:left-2 bg-white rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-base sm:text-xl">⭐</span>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Our Rating</p>
              <div className="flex items-center gap-1">
                <p className="text-xs sm:text-sm font-black text-gray-900">4.9</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Floating Card: Web Design (top-right) ── */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-2 sm:top-4 right-0 sm:-right-2 bg-white rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-gray-900">Web Design</p>
              <p className="text-[10px] sm:text-xs text-gray-400">128 lessons</p>
            </div>
          </motion.div>

          {/* ── Floating Card: Active Students (bottom-left) ── */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
            className="absolute bottom-10 sm:bottom-14 left-0 sm:-left-2 bg-white rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-gray-900">6,700+</p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium">Active Students</p>
            </div>
          </motion.div>

          {/* ── Floating Card: Top Mentors (right-center) ── */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            className="absolute top-1/2 right-0 sm:-right-2 -translate-y-1/2 bg-white rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 z-20"
          >
            <p className="text-[10px] sm:text-xs font-bold text-gray-700 mb-1.5 sm:mb-2">Top Mentors</p>
            <div className="flex items-center">
              {[
                { letter: "A", bg: "bg-pink-500" },
                { letter: "B", bg: "bg-blue-500" },
                { letter: "C", bg: "bg-teal-500" },
                { letter: "D", bg: "bg-orange-400" },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${m.bg} rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold border-2 border-white`}
                  style={{ marginLeft: i > 0 ? -8 : 0 }}
                >
                  {m.letter}
                </div>
              ))}
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-[10px] sm:text-xs font-bold border-2 border-white"
                style={{ marginLeft: -8 }}
              >
                +9
              </div>
            </div>
          </motion.div>

          {/* ── Floating Card: Congratulations (bottom-right) ── */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="absolute bottom-2 sm:bottom-6 right-0 sm:-right-2 bg-white rounded-2xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 z-20"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-gray-900">Congratulations! 🎉</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Course completed</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-end">
                <p className="text-[10px] sm:text-xs text-gray-400">86% done</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2" style={{ minWidth: 130 }}>
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: "86%" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
