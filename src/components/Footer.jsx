{/*
  import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#111010] text-white py-12"
  //   style={{backgroundImage:"url('/footerbg.jpg')",
      backgroundSize: "1600px",
//    }}
      
    >
      <div className="max-w-7xl mx-auto z-10">
      //  Main footer content 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        //  About section - Green card 
        // <div className='bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8 rounded-2xl'>
            <h3 className='text-3xl font-medium mb-4'>About</h3>
            <p className='text-white/95 leading-relaxed'>
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral meds via facilities in Telangana and HP. Trusted partner, part of reputed group.
            </p>
       //   </div>
          
          <div className=" text-white pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">About</h3>
            <div className="w-12 h-1 bg-white mb-6"></div>

            <p className="text-white/95 leading-relaxed">
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral
              meds via facilities in Telangana and HP. Trusted partner, part of
              reputed group.
            </p>
          </div>

        
          <div className="pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">
              Quick Links
            </h3>
            <div className="w-12 h-1 bg-white mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                {
                  //   <span className="text-green-500 mr-2">▶</span>
                }
                Home
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                {
                  //   <span className="text-green-500 mr-2">▶</span>
                }
                About Us
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                {
                  //   <span className="text-green-500 mr-2">▶</span>
                }
                Products
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                {
                  //     <span className="text-green-500 mr-2">▶</span>
                }
                Contact Us
              </li>
            </ul>
          </div>

          
          <div className="pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">Contact</h3>
            <div className="w-12 h-1 bg-white mb-6"></div>

            <div className="space-y-4">
              <div className="flex items-start">
                {
                  //  <span className="text-green-500 mr-3 mt-1">📍</span>
                }
                <p className="text-white/95">
                  main road,
                  <br />
                  vanasthalipuram, Hyderabad, Telangana
                  <br />
                  500070
                </p>
              </div>
              <div className="flex items-center">
                {
                  //   <span className="text-green-500 mr-3">✉️</span>
                }
                <p className="text-white/95">sales@noveltylifesciences.com</p>
              </div>
              <div className="flex items-center">
                {
                  //  <span className="text-green-500 mr-3">📞</span>
                }
                <p className="text-white/95">+91 7837836626, +91 9381148576</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10">
          <div className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
            Sign in and don't miss anything!
          </div>
          <form className="flex w-full sm:max-w-md">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="flex-1 px-4 py-2 outline-none text-black rounded-l-full bg-white focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 font-semibold text-white px-6 py-2 rounded-r-full hover:bg-blue-500 transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-gray-400">
          <div className="md-2 md:mb-0">
            <img src="/logo.png" alt="logo" height={80} width={120} />
          </div>
          <div>
            <p className="text-sm text-center md:text-right">
              Copyright &copy; 2025 Novelty Life Sciences. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

*/}

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#111010] text-white py-12">
      <div className="max-w-7xl mx-auto z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4 sm:px-6 md:px-0">
          {/* About section */}
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">About</h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>

            <p className="text-sm md:text-base text-white/95 leading-relaxed">
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral
              meds via facilities in Telangana and HP. Trusted partner, part of
              reputed group.
            </p>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">
              Quick Links
            </h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm md:text-base text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                Home
              </li>
              <li className="text-sm md:text-base text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                About Us
              </li>
              <li className="text-sm md:text-base text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                Products
              </li>
              <li className="text-sm md:text-base text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">Contact</h3>
            <div className="w-12 h-1 bg-white mb-4 md:mb-6"></div>

            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-sm md:text-base text-white/95">
                  main road,
                  <br />
                  vanasthalipuram, Hyderabad, Telangana
                  <br />
                  500070
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-white/95">sales@noveltylifesciences.com</p>
              </div>
              <div>
                <p className="text-sm md:text-base text-white/95">+91 7837836626, +91 9381148576</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section - MOBILE OPTIMIZED */}
      <div className="w-full bg-[#2a2a2a] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 sm:items-center sm:justify-between">
            {/* Text */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white text-center sm:text-left whitespace-nowrap">
              Sign in and don't miss anything!
            </div>

            {/* Form - Stays inline on all screens */}
            <div className="flex gap-0 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2 outline-none text-black rounded-l-full bg-white focus:ring-2 focus:ring-red-500 text-xs sm:text-sm md:text-base"
              />
              <button
                onClick={handleSubmit}
                className="flex-shrink-0 bg-red-600 font-semibold text-white px-4 sm:px-6 py-2 rounded-r-full hover:bg-blue-500 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with logo and copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="logo" height={80} width={120} />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-center md:text-right">
              Copyright &copy; 2025 Novelty Life Sciences. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;