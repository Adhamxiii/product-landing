'use client'

import { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import Review from "./Review";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <About
        textOrder="lg:order-1"
        imageOrder="lg:order-2"
        linkText="Learn More"
        title="Pure sound, no added noise"
      />
      <About
        textOrder="lg:order-2"
        imageOrder="lg:order-1"
        linkText="Shop Now"
        title="Capture pure sound with the 70mm HD Driver"
      />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
