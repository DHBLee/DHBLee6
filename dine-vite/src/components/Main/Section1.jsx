import React from 'react'
import enjoyableImgMobile from '../../assets/images/homepage/enjoyable-place-mobile.jpg'
import enjoyableImgTablet from '../../assets/images/homepage/enjoyable-place-tablet.jpg'
import enjoyableImgDesktop from '../../assets/images/homepage/enjoyable-place-desktop.jpg'

import patternDivide from '../../assets/images/patterns/pattern-divide.svg';
const Section1 = () => {
  return (
    <section>
        <picture>
            <source srcSet={enjoyableImgDesktop} media="(min-width: 1440px)" />
            
            <source srcSet={enjoyableImgTablet} media="(min-width: 768px)" />
            
            <img src={enjoyableImgMobile} alt="Enjoy background" className='w-full'/>
        </picture>
        <img src={patternDivide} alt="" />
        <div>
            <h2>Enjoyable place for all the family</h2>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the form before your meal.</p>
        </div>
    </section>
  )
}

export default Section1