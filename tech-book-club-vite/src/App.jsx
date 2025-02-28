import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

import notAverageImageMobile from './assets/image-not-average-mobile.webp';
import notAverageImageTablet from './assets/image-not-average-tablet.webp';
import notAverageImageDesktop from './assets/image-not-average-desktop.webp';

import readTogetherImageMobile from './assets/image-read-together-mobile.webp';
import readTogetherImageTablet from './assets/image-read-together-tablet.webp';
import readTogetherImageDesktop from './assets/image-read-together-desktop.webp';

const h2Styling = 'textpreset2 text-[var(--clr-neutral900)]';
function App() {
  return (
    <>
        <Header />
        <main className='grid gap-16 md:gap-20 [@media_(min-width:1440px)]:gap-[120px] pt-16 md:pt-20 [@media_(min-width:1440px)]:pt-[120px]
         px-4 md:px-8 [@media_(min-width:1440px)]:px-[135px] '>

          <Section1 mobileImage={readTogetherImageMobile} tabletImage={readTogetherImageTablet} desktopImage={readTogetherImageDesktop} title="Read together, grow together" identifier="read" h2Style={h2Styling}/>

          <Section1 mobileImage={notAverageImageMobile} tabletImage={notAverageImageTablet} desktopImage={notAverageImageDesktop} title="Not your average book club" identifier="average" h2Style={h2Styling}/>

          <Section2 h2Style={h2Styling}/>

          <Section3 h2Style={h2Styling}/>

          <Section4 />
        </main>
        <Footer />
    </> 
  )
}

export default App
