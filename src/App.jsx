import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import axios from 'axios';
import Home from './component/home'
import About from './component/about'
import Porto from './component/porto'
import Navbar from './component/navbar'
import { Route, Routes } from 'react-router-dom';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya terjadi sekali
    });
  }, []);
  
  return (

    
    <div className='container  '>
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/porto" element={<Porto />} />
        </Routes>
      </div>
      
      <Navbar />
    </div>
  )
}

export default App


// const fetchAPI = async () =>{
//   const response = await axios.get("http://localhost:8080/api");
//   console.log(response.data.fruits);
// }