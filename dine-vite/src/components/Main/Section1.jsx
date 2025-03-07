import React from 'react'
import enjoyableImgMobile from '../../assets/images/homepage/enjoyable-place-mobile.jpg'
import enjoyableImgTablet from '../../assets/images/homepage/enjoyable-place-tablet.jpg'
import enjoyableImgDesktop from '../../assets/images/homepage/enjoyable-place-desktop.jpg'

import patternRight from '../../assets/images/patterns/pattern-curve-top-right.svg';
import patternDivide from '../../assets/images/patterns/pattern-divide.svg';
const Section1 = ({px}) => {
  return (
    <section className={`relative ${px} flex flex-col 1440:flex-row items-center justify-center 1440:justify-start gap-12 md:gap-[56px] 1440:gap-[125px] text-center 1440:text-start`}>
        <picture>
            <source srcSet={enjoyableImgDesktop} media="(min-width: 1440px)" />
            
            <source srcSet={enjoyableImgTablet} media="(min-width: 768px)" />
            
            <img src={enjoyableImgMobile} alt="Enjoy background" className='relative z-10 w-full mt-[-5rem]'/>
        </picture>
        <div className='grid  place-content-center 1440:place-content-start gap-9 md:gap-[39px] 1440:gap-[59px]'>
          <img src={patternDivide} alt="" className='mx-auto 1440:mx-0'/>
          <div className='grid gap-[13px] md:gap-[27px] place-content-center 1440:place-content-start'>
              <h2 className='headingL'>Enjoyable place<br /> for all the family</h2>
              <p className='body2 md:body1 max-w-[40ch]'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the form before your meal.</p>
          </div>
        </div>
        <img src={patternRight} alt="" className='hidden absolute md:block w-[55%] 1440:w-[63%] h-[55%] 1440:h-[40%] top-[7rem] 1440:top-[16rem] left-0'/>
    </section>
  )
}

export default Section1