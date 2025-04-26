import React from 'react';
import homePattern1 from '../../assets/bg-pattern-about-1-mobile-nav-1.svg'

const Section1 = ({padding}) => {
  return (
    <section className={`${padding} relative md:px-[97px] bg-MidnightGreen pb-8 1440:pt-[80px] overflow-hidden`}>
            <div className='relative flex flex-col 1440:flex-row items-center 1440:items-start gap-4 1440:gap-[186px] mb-[97px] md:max-w-[30rem] 1440:max-w-full mx-auto'>
                <h1 className='heading2 text-white'>About</h1>
                <p className='heroSubtitle text-white text-center 1440:w-[60%] 1440:text-left'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </div>
            <img src={homePattern1} alt="" className='absolute bottom-[-5rem] md:bottom-0 right-[-6rem]'/>
    </section>
  )
}

export default Section1