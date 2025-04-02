import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'

function App() {


  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </>
  )
}

export default App
