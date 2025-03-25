import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pxStyling =  "px-[32px] md:px-[39px] 1440:px-[165px]";

function App() {


  return (
    <>
        <Header padding={pxStyling}/>
        <Routes>
          <Route path='/' element={<Home padding={pxStyling}/>} />
          <Route path='/portfolio' element={<Portfolio padding={pxStyling}/>} />
          <Route path='/contact' element={<Contact padding={pxStyling}/>} />
        </Routes>
        <Footer />
    </> 
  )
}

export default App
