

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-700 px-6 py-12 relative overflow-hidden'
    style={{backgroundImage:"url('/footerbg.jpg')",
      backgroundSize: "1600px",
    }}
    >
    
      

      <div className='max-w-7xl mx-auto relative z-10'>
        

        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {/* About section - Green card */}
          <div className='bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8 rounded-2xl'>
            <h3 className='text-3xl font-bold mb-4'>About</h3>
            <p className='text-white/95 leading-relaxed'>
              Novelty LifeSciences (est. 2014, Hyderabad) produces niche oral meds via facilities in Telangana and HP. Trusted partner, part of reputed group.
            </p>
          </div>

          {/* Quick Links section */}
          <div className='pl-8'>
            <h3 className='text-3xl font-bold text-[#ef6c00] mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              <li className='flex items-center text-gray-700 hover:text-teal-600 cursor-pointer transition-colors'>
                <span className='text-green-500 mr-2'>▶</span>
                Home
              </li>
              <li className='flex items-center text-gray-700 hover:text-teal-600 cursor-pointer transition-colors'>
                <span className='text-green-500 mr-2'>▶</span>
                About Us
              </li>
              <li className='flex items-center text-gray-700 hover:text-teal-600 cursor-pointer transition-colors'>
                <span className='text-green-500 mr-2'>▶</span>
                Products
              </li>
              <li className='flex items-center text-gray-700 hover:text-teal-600 cursor-pointer transition-colors'>
                <span className='text-green-500 mr-2'>▶</span>
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className='pl-8'>
            <h3 className='text-3xl font-bold text-[#ef6c00] mb-6'>Contact</h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <span className='text-green-500 mr-3 mt-1'>📍</span>
                <p className='text-gray-700'>
                  T Hub Phase 2 Inorbit Mall Road,<br />
                  Madhapur, Hyderabad, Telangana<br />
                  500081
                </p>
              </div>
              <div className='flex items-center'>
                <span className='text-green-500 mr-3'>✉️</span>
                <p className='text-gray-700'>sales@noveltylifesciences.com</p>
              </div>
              <div className='flex items-center'>
                <span className='text-green-500 mr-3'>📞</span>
                <p className='text-gray-700'>+91 94993 88888, +91 9700730167</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with logo and copyright */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-400'>
          
          
          <div className='md-2 md:mb-0'>
            <img src="/logo.png" alt="logo" height={80} width={120}/>
        </div>
        <div>
            <p className='text-sm text-center md:text-right'>Copyright &copy; 2025 Novelty Life Sciences. All rights reserved.</p>
        </div>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer