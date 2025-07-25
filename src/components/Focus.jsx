import { areas } from '@/data';
import React from 'react'

const Focus = () => {
  return (
    <div className='flex flex-col gap-16 p-16 m-8'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-[#ef6c00] mb-2'>Our Key Areas of Focus</h1>
            <h3 className='text-lg font-bold text-[#5eb8b2] mb-2'>Pharmaceutical Marketing</h3>
            <p className='text-gray-600 text-md'>Strategic promotion of products to healthcare providers and consumers. Tailored campaigns, market analysis, and ethical practices to drive brand awareness and market penetration.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {areas.map((item,index) => (
                <div className='flex flex-col items-center'>
                    <img src={item.pic} alt='image' className='w-16'/>
                    <h3 className="text-lg font-bold text-[#ef6c00] mb-2">{item.main}</h3>
                    <p className="text-gray-600 text-md">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Focus;