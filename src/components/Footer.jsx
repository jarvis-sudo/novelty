import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#111010] text-white py-12"
      /* style={{backgroundImage:"url('/footerbg.jpg')",
      backgroundSize: "1600px",
    }}
      */
    >
      <div className="max-w-7xl mx-auto z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About section - Green card */}
          {/*<div className='bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8 rounded-2xl'>
            <h3 className='text-3xl font-medium mb-4'>About</h3>
            <p className='text-white/95 leading-relaxed'>
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral meds via facilities in Telangana and HP. Trusted partner, part of reputed group.
            </p>
          </div>
          */}
          <div className=" text-white pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">About</h3>
            <div className="w-12 h-1 bg-white mb-6"></div>

            <p className="text-white/95 leading-relaxed">
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral
              meds via facilities in Telangana and HP. Trusted partner, part of
              reputed group.
            </p>
          </div>

          {/* Quick Links section */}
          <div className="pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">
              Quick Links
            </h3>
            <div className="w-12 h-1 bg-white mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
             {//   <span className="text-green-500 mr-2">▶</span>
}
                Home
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
             {//   <span className="text-green-500 mr-2">▶</span>
}
                About Us
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
             {//   <span className="text-green-500 mr-2">▶</span>
}
                Products
              </li>
              <li className="flex items-center text-white/95 hover:text-teal-600 cursor-pointer transition-colors">
           {//     <span className="text-green-500 mr-2">▶</span>
  }
    Contact Us
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="pl-8">
            <h3 className="text-3xl font-medium text-white mb-6">
              Contact
            </h3>
            <div className="w-12 h-1 bg-white mb-6"></div>

            <div className="space-y-4">
              <div className="flex items-start">
              {//  <span className="text-green-500 mr-3 mt-1">📍</span>
}
                <p className="text-white/95">
                  T Hub Phase 2 Inorbit Mall Road,
                  <br />
                  Madhapur, Hyderabad, Telangana
                  <br />
                  500081
                </p>
              </div>
              <div className="flex items-center">
             {//   <span className="text-green-500 mr-3">✉️</span>
}
                <p className="text-white/95">sales@noveltylifesciences.com</p>
              </div>
              <div className="flex items-center">
              {//  <span className="text-green-500 mr-3">📞</span>
}
                <p className="text-white/95">+91 9999999998, +91 9999999999</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#2a2a2a]">
          <div className="px-6 py-8 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
            <div className="text-xl font-semibold text-white text-center">
              Sign In and don't miss anything!
            </div>
            <div>
              <form className="flex max-w-full">
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
        </div>

        {/* Bottom section with logo and copyright */}
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
