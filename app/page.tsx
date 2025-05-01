"use client";

import About from "@/src/section/About/About";
import Contact from "@/src/section/Contact/Contact";
import Header from "@/src/section/Header/Header";
import Hero from "@/src/section/Hero/Hero";
import Skills from "@/src/section/Skills/Skills";
import Footer from "@/src/shared/Footer/Footer";

export default function Home() {
  // Sample work experience data

  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
