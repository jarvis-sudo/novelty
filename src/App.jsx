import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/products' element={<Product/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
