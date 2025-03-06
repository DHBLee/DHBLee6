import React from 'react';

import localImgMobile from '../../assets/images/homepage/locally-sourced-mobile.jpg';
import localImgTablet from '../../assets/images/homepage/locally-sourced-tablet.jpg';
import localImgDesktop from '../../assets/images/homepage/locally-sourced-desktop.jpg';

import patternDivide from '../../assets/images/patterns/pattern-divide.svg';

const Section2 = () => {
  return (
    <section>
        <picture>
            <source srcSet={localImgDesktop} media="(min-width: 1440px)" />
            
            <source srcSet={localImgTablet} media="(min-width: 768px)" />
            
            <img src={localImgMobile} alt="Local background" className='w-full'/>
        </picture>
        <img src={patternDivide} alt="" />
        <div>
            <h2>The most locally sourced food</h2>
            <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
        </div>
    </section>
  )
}

export default Section2