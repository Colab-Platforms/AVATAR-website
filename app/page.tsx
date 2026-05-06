import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import OurProgram from "./components/OurProgram";
import VariousCourse from "./components/VariousCourse";
import BestTeacher from "./components/BestTeacher";
import PopularCourses from "./components/PopularCourses";
import Testimonial from "./components/Testimonial";
import AvatarPromise from "./components/AvatarPromise";
import AchievedEmail from "./components/AchievedEmail";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurProgram />
      <WhatWeDo />
      <VariousCourse />
      {/* <BestTeacher /> */}
      {/* <PopularCourses /> */}
      <Testimonial />
      <AvatarPromise />
      {/* <AchievedEmail /> */}
      <Footer />
    </main>
  );
}
