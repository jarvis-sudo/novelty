import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App() {
  

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        
          <Route path="/about" element={<About/>}/>
        
        
          <Route path='/products' element={<Product/>}/>
       
        
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
