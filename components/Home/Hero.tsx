import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col bg-pink-800 bg_clip">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div data-aos="fade-up">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl my-6 leading-[2.5rem] md:leading-[3.5rem] font-bold">
            Superior sound, tangible quality
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base font-medium ">
            Sit back, relax and prepare to experience a new level of audio
            excellence. These headphones combine cutting-edge technology with
            the finest craftsmanship, for the ultimate listening experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-auto px-10 py-3 bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#004e9b] before:to-[rgb(105, 124, 184)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              Buy Now
            </button>
            <button className="w-auto px-10 py-3 bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#1a9b00] before:to-[rgb(114, 184, 105)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              Explore More
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="mx-auto hidden xl:block "
        >
          <Image
            src="/images/hero.png"
            alt="image"
            width={380}
            height={380}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
