import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'

const pxStyling = "px-[24px] md:px-[39px] 1440:px-[165px]";

function App() {


  return (
    <>
      <Header padding={pxStyling} />
      <main>
        <Section1 padding={pxStyling} />
        <Section2 padding={pxStyling} />
        <Section3 padding={pxStyling} />
        <Section4 padding={pxStyling} />
      </main>
      <Footer padding={pxStyling}/>
    </>
  )
}

export default App
