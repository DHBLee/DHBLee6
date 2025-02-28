import React from 'react'

import headerLogo from '../assets/logo.svg';
import headerBg from '../assets/pattern-light-bg.svg';
import headerPatternMobile from '../assets/image-hero-mobile.webp';
import headerPatternTablet from '../assets/image-hero-tablet.webp';
import headerPatternDesktop from '../assets/image-hero-desktop.webp';
import arrowDown from '../assets/icon-arrow-down.svg';
import Review from './Review';
import Picture from './Picture';
import Button from './Button';

const headingSubtitle = "Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.";

const Header = () => {

  return (
    <header className='bg-cover bg-center- bg-no-repeat pt-6 px-4 md:px-8 [@media_(min-width:1440px)]:px-[135px] pb-20' style={{ backgroundImage: `linear-gradient(to bottom, hsla(17, 41%, 97%, 0.3) 70%, hsla(17, 41%, 97%, 1)), url(${headerBg})` }}>
        <img src={headerLogo} alt="" className='mb-12 md:mb-16 [@media_(min-width:1440px)]:mb-[80px] '/>
        <div className='flex flex-col [@media_(min-width:1440px)]:flex-row gap-16 [@media_(min-width:1440px)]:items-center'>

            <div className='flex flex-col gap-5 basis-1/2'>   
                <h1 className='textpreset1 text-transparent bg-clip-text bg-gradient-to-tl from-gray-900 to-orange-400'>Join the <br />ultimate tech book club</h1>
                <p className='textpreset5 text-[var(--clr-neutral700)]'>{headingSubtitle}</p>
                <Button>
                    REVIEW MEMBERSHIP OPTIONS
                    <img src={arrowDown} alt="" className='h-6' />    
                </Button>
                <Review />
            </div>

            <Picture mobileImage={headerPatternMobile} tabletImage={headerPatternTablet} desktopImage={headerPatternDesktop} className="basis-1/2"/>

        </div>
    </header>
  )
}

export default Header