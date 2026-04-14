import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import VariousCourse from "./components/VariousCourse";
import BestTeacher from "./components/BestTeacher";
import PopularCourses from "./components/PopularCourses";
import Testimonial from "./components/Testimonial";
import AchievedEmail from "./components/AchievedEmail";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <VariousCourse />
      <BestTeacher />
      <PopularCourses />
      <Testimonial />
      <AchievedEmail />
      <Footer />
    </main>
  );
}
