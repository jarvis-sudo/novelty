import React from 'react'

const Contact = () => {
  return (
    <div className='py-16 px-4 bg-gray-100' 
    style={{backgroundImage:"url('/footerbg.jpg')",
        backgroundSize : "1600px",
    }}
    >
        
        <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl font-bold text-[#ef6c00] mb-4'>Contact Us</h1>
            <p className='text-gray-600'>Explore Our Portfolio - Request a full product catalog or discuss custom manufacturing.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center text-center mb-16 justify-center gap-10 md:gap-48 my-16'>
            <span>
                <h3 className='text-xl font-semibold text-[#ef6c00] mb-3'>Corporate office</h3>
                <p className='text-gray-600 text-lg'>Adress*</p>
            </span>
            <span>
                <h3 className='text-xl font-semibold text-[#ef6c00] mb-3'>Mobile</h3>
                <p className='text-gray-600 text-lg'>+91 999999999</p>
            </span>
        </div>
        <div className='text-center'>
            <h3 className='text-xl font-semibold text-[#ef6c00] mb-3'>Email</h3>
            <p className='text-gray-600 text-lg'>
                admin@noveltylifesciences.com,
                <br className='md:hidden'/>
                sales@noveltylifesciences.com
                </p>
        </div>
    </div>
  )
}

export default Contact;