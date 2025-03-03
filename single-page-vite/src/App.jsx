import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ringsPattern from './assets/images/pattern-rings.svg';

const pxStyling = "px-4 md:px-8 1440:px-[165px]";

function App() {

  return (
    <>
      <Header ringsPattern={ringsPattern} pxStyling={pxStyling}/>
      <Main ringsPattern={ringsPattern} pxStyling={pxStyling}/>
      <Footer ringsPattern={ringsPattern} pxStyling={pxStyling}/>
    </>
  )
}

export default App
