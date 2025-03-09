import React from 'react'

import HeroImgMobile from '../assets/images/homepage/hero-bg-mobile.jpg';
import HeroImgTablet from '../assets/images/homepage/hero-bg-tablet.jpg';
import HeroImgDesktop from '../assets/images/homepage/hero-bg-desktop.jpg';
import logo from '../assets/images/logo.svg';
import Button from './Button';

const Header = () => { {/* Will need to fix the styling globals setup */}
  return (
    <header className='relative'>
        <picture>
            <source srcSet={HeroImgDesktop} media="(min-width: 1440px)" />
            
            <source srcSet={HeroImgTablet} media="(min-width: 768px)" />
            
            <img src={HeroImgMobile} alt="Hero background" className='w-full '/>
        </picture>

        <div className='px-6 1440:px-[165px] absolute top-[30%] md:top-[37%] 1440:top-[10%] left-[50%] 1440:left-0 w-[100%]  translate-x-[-50%] 1440:translate-x-0 grid gap-8 md:gap-[38px] 1440:gap-[153px] items-center justify-center 1440:justify-start'>
            <img src={logo} alt="" className='mx-auto 1440:mx-0'/>
            <div className=' text-white grid gap-[21px] text-center 1440:text-left'>
                <h1 className='headingXL font-light '>Exquisite dining<br /> since 1989</h1>
                <p className='body2 md:body1 max-w-[50ch]'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Button classStyle="border-white text-white mt-[32px] 1440:mx-0 ">
                    BOOK A TABLE
                </Button>
            </div>

        </div>
    </header>
  )
}

export default Header