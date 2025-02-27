import React from 'react'

import headerLogo from '../assets/logo.svg';
import headerBg from '../assets/pattern-light-bg.svg';
import headerPatternMobile from '../assets/image-hero-mobile.webp';
import headerPatternTablet from '../assets/image-hero-tablet.webp';
import headerPatternDesktop from '../assets/image-hero-desktop.webp';
import arrowDown from '../assets/icon-arrow-down.svg';
import Review from './Review';

const headingSubtitle = "Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.";

const Header = () => {

  return (
    <header className='bg-cover bg-center- bg-no-repeat py-6 px-4' style={{ backgroundImage: `url(${headerBg})` }}>
        <img src={headerLogo} alt="" />
        <div className='flex flex-col min-[1440px]:flex-row gap-16'>

            <div className='flex flex-col gap-5'>   
                <h1 className='textpreset1-mobile text-transparent bg-clip-text bg-gradient-to-tl from-gray-900 to-orange-400'>Join the <br />ultimate tech book club</h1>
                <p className='textpreset5 text-[var(--clr-neutral700)]'>{headingSubtitle}</p>
                <button className='flex align-middle justify-center gap-4 border-2 rounded-lg border-solid border-neutral0 bg-[var(--clr-salmon50)] textpreset6-mobile py-3 px-6'>
                    REVIEW MEMBERSHIP OPTIONS
                    <img src={arrowDown} alt="" className='h-6' />   
                </button>
                <Review />
            </div>

            <div>
                <picture>
                    <source srcSet={headerPatternDesktop} media='(min-width: 1440px)' className='rounded-lg'/>

                    <source srcSet={headerPatternTablet} media='(min-width: 768px)' className='rounded-lg'/>

                    <img src={headerPatternMobile} alt="" className='rounded-lg'/>
                </picture>
            </div>

        </div>
    </header>
  )
}

export default Header