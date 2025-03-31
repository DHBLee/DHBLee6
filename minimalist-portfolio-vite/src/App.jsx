import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './components/Button';
import ProjectDetail from './components/ProjectDetail';

const pxStyling =  "px-[32px] md:px-[39px] 1440:px-[165px]";

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
        <Header padding={pxStyling}/>
        <Routes>
          <Route path='/' element={<Home padding={pxStyling}/>} />
          <Route path='/portfolio' element={<Portfolio padding={pxStyling}/>} />
          <Route path='/contact' element={<Contact padding={pxStyling}/>} />
          <Route path='/portfolio/:projectId' element={<ProjectDetail padding={pxStyling} /> } />
        </Routes>

        {!isContactPage && (
          <div className={`${pxStyling} mb-[80px] md:mb-[96px] 1440:mb-[150px] flex flex-col gap-[40px] text-center md:text-left items-center md:justify-between md:flex-row`}>
            <h1 className='heading2 max-w-[20ch]'>Interested in doing a project together?</h1>
            <Button route="contact">
              contact me
            </Button>
          </div>
        )}
        
        <Footer padding={pxStyling} />
    </> 
  )
}

export default App
