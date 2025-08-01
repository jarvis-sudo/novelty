
import React, { useEffect, useState } from "react";
//import { TextAnimate } from "./magicui/text-animate;
import {AnimatePresence, motion} from "framer-motion";
import { TextAnimate } from "./magicui/text-animate";


  const images = ["/1.jpg", "/2.jpg"];

const Hero = () => {
const [index,setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev+1)%images.length);
  },5000);
  return () => clearInterval(interval);
},[])


  return (
    <div className="relative w-full h-screen overflow-hidden">

      <div className="w-full h-full absolute inset-0 animate-zoomLoop">
      <img
        src="/1.jpg"
        alt="Hero"
        className="w-full h-full object-cover transition-transform duration-300 md:hover:scale-200"
      />
      </div>

{/*
  <AnimatePresence mode="wait">
<motion.img
  key={images[index]}
  src={images[index]}
  alt="Hero"
  className="absolute w-full h-full object-cover z-0"
  initial={{ opacity: 0,scale:1.05 }}
  animate={{ opacity: 1,scale:1 }}
  exit={{ opacity: 0,scale:0.95 }}
  transition={{ duration: 1.2 }}
/>
  </AnimatePresence>

*/}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ca4143] via-transparent to-[#5eb8b2] opacity-80 mix-blend-multiply z-10"></div>

      <div className="relative z-30 flex flex-col items-start justify-center h-full px-4 sm:px-8 py-10 text-black">
        <div className="bg-white/25 p-4 md:p-8 rounded-lg max-w-xl w-full">
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
          className="text-2xl sm:text-3xl font-black text-[#5eb8b2]"
        >
          Novelty
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={3}
          className="text-2xl sm:text-3xl font-black text-[#ca4143]"
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

