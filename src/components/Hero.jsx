
import React from "react";
import { TextAnimate } from "./magicui/text-animate";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full absolute inset-0 animate-zoomLoop">
      <img
        src="/1.jpg"
        alt="Hero"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-200"
      />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#ca4143] via-transparent to-[#5eb8b2] opacity-80 mix-blend-multiply"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-black">
        <div className="bg-white/25 p-4 lg:p-8  py-16 mx-8">
        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={2}
            className="text-3xl md:text-5xl font-black-900"
        >
          Welcome to
        </TextAnimate>
        
        <span className="flex">
<TextAnimate
          animation="slideLeft"
          by="character"
          duration={3}
          className="text-3xl md:text-5xl font-black text-[#5eb8b2]"
        >
          Novelty
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={3}
          className="text-3xl md:text-5xl font-black text-[#ca4143]"
        >
           LifeSciences
        </TextAnimate>
        </span>
        

        <button className="bg-[#ef6c00] text-white px-4 py-2 rounded-md shadow hover:bg-orange-700 transition duration- mt-4">
          Contact Us
        </button>
        </div>
        </div>
      </div>
    
  );
};

export default Hero;

