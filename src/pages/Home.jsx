
import About from '@/components/About'
import Contact from '@/components/Contact'
import Focus from '@/components/Focus'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Positives from '@/components/Positives'
import Products from '@/components/Products'

import Range from '@/components/Range'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Focus/>
    <Range/>
    <Products/>
    <Positives/>
    
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home