// components/Hero.tsx
"use client";
import React from "react";
import TextGenerateEffect from "../ui/typewritter";
import { inter } from "../fonts";


const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4 md:w-[600px] wrap-normal">
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-primary md:w-[600px] wrap-normal">
          Transform Your Digital Ideas into Reality
        </h1> */}
        <TextGenerateEffect
          words="Transform Your Digital Ideas into Reality"
          className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-primary "
        />
        
        <p className={`text-lg md:text-xl mb-6 max-w-2xl ${inter.className} tracking-widest`}>
          We are specializing in cutting-edge solutions for businesses. we make technology work for you.
        </p>
        {/* <WrapButton
        href="#contact"
        className="mx-0 md:mx-2"
        >
          <Globe className="mx-2 animate-spin" />
          Contact Us
        </WrapButton> */}
      </div>
    </section>
  );
};

export default Hero;
