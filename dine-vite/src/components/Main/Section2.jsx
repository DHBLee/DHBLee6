import React from 'react';

import localImgMobile from '../../assets/images/homepage/locally-sourced-mobile.jpg';
import localImgTablet from '../../assets/images/homepage/locally-sourced-tablet.jpg';
import localImgDesktop from '../../assets/images/homepage/locally-sourced-desktop.jpg';

import patternLeft from '../../assets/images/patterns/pattern-curve-top-left.svg';
import patternLines from '../../assets/images/patterns/pattern-lines.svg';
import patternDivide from '../../assets/images/patterns/pattern-divide.svg';

const Section2 = ({px}) => {
  return (
    <section className={`relative ${px} flex flex-col 1440:flex-row-reverse items-center justify-center 1440:justify-start gap-12 md:gap-[56px] 1440:gap-[125px] text-center 1440:text-start`}>
        <picture>
            <source srcSet={localImgDesktop} media="(min-width: 1440px)" />
            
            <source srcSet={localImgTablet} media="(min-width: 768px)" />
            
            <img src={localImgMobile} alt="Local background" className='relative z-10 w-full 1440:mb-[-5rem]'/>
        </picture>
        <div className='grid  place-content-center 1440:place-content-start gap-9 md:gap-[39px] 1440:gap-[59px]'>
          <img src={patternDivide} alt="" className='mx-auto 1440:mx-0'/>
          <div className='grid gap-[13px] md:gap-[27px] place-content-center 1440:place-content-start'>
              <h2 className='headingL'>The most locally<br /> sourced food</h2>
              <p className='body2 md:body1 max-w-[40ch]'>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
          </div>
        </div>
        <img src={patternLeft} alt="" className='hidden absolute md:block w-[50%] 1440:w-[60%] h-[40%] right-0 bottom-[-6rem]'/>
        <img src={patternLines} alt="" className='hidden absolute z-20 md:block right-[5%] top-[15rem]'/>
    </section>
  )
}

export default Section2