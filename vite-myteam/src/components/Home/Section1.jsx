import React from 'react'
import homePattern1 from '../../assets/bg-pattern-home-2.svg';
import homePattern2 from '../../assets/bg-pattern-home-1.svg';

const Section1 = ({padding}) => {
  return (
    <section className={`${padding}  md:px-[97px] bg-MidnightGreen pt-8 1440:pt-[80px]`}>
        <div className='relative flex flex-col 1440:flex-row items-center 1440:items-end text-center 1440:text-left gap-4 1440:gap-[126px] mb-[97px] max-md:max-w-[30rem] mx-auto'>
            <img src={homePattern2} alt="" className='hidden 1440:block absolute left-[-17rem]'/>
            <h1 className='heading2 1440:text-[100px] text-white'>Find the <br />best <span className='text-LightCoral'>talent</span></h1>
            <p className='heroSubtitle text-white 1440:w-[40%]'>finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
        </div>
        <img src={homePattern1} alt="" className='mx-auto 1440:ml-auto 1440:mx-0'/>
    </section>
  )
}

export default Section1