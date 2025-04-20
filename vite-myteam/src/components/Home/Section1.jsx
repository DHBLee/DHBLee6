import React from 'react'
import homePattern1 from '../../assets/bg-pattern-home-2.svg';

const Section1 = ({padding}) => {
  return (
    <section className={`${padding} bg-MidnightGreen pt-8`}>
        <div className='flex flex-col items-center text-center gap-4 mb-[97px] max-w-[40rem] mx-auto'>
            <h1 className='heading2 1440:text-[100px] text-white'>Find the <br />best <span className='text-LightCoral'>talent</span></h1>
            <p className='heroSubtitle text-white'>finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
        </div>
        <img src={homePattern1} alt="" className='mx-auto'/>
    </section>
  )
}

export default Section1