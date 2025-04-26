"use client";

import About from "@/src/section/About/About";
import Header from "@/src/section/Header/Header";
import Hero from "@/src/section/Hero/Hero";

export default function Home() {
  // Sample work experience data

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero/>
      <About/>
    </div>
  );
}
