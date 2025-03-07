import React from 'react'

import patternDivide from '../../assets/images/patterns/pattern-divide.svg';


const Menu = ({mobileImg, desktopImg, title, description, lineStyle}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-9 md:gap-[62px] ${lineStyle}`}>
        <div className='relative z-20'>
          <picture>
              <source srcSet={desktopImg} media="(min-width: 768px)" />
              
              <img src={mobileImg} alt="Image" className='w-full'/>
          </picture>
          <img src={patternDivide} alt="" className='hidden md:block absolute top-[1rem] right-[-1.5rem] -z-10' />
        </div>
        <div className='gird gap-[6px] md:text-left'>
            <h4 className='body1 !font-bold text-white'>{title}</h4>
            <p className='body2 text-white'>{description}</p>
        </div>
    </div>
  )
}

export default Menu