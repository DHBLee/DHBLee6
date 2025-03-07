import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

const pxStyling = "px-6 md:px-[97px] 1440:px-[165px]";

const Main = () => {
  return (
    <main className=' grid gap-[101px]'>
        <Section1 px={pxStyling} />
        <Section2 px={pxStyling} />
        <Section3 px={pxStyling} />
        <Section4 px={pxStyling} />
        <Section5 px={pxStyling} />
    </main>
  )
}

export default Main