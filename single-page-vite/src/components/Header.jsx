import React from 'react'
import Navbar from './Navbar'
import profile from '../assets/images/image-profile-mobile.webp';
import circlePattern from '../assets/images/pattern-circle.svg';
import Link from './Link';


const Header = ({ringsPattern, pxStyling}) => {
  return (
    <header className={`${pxStyling} mb-[80px] md:mb-[60px] 1440:mb-[104px] 1440:pb-[105px] relative flex flex-col md:gap-[90px] items-center md:items-start justify-center text-center md:text-left overflow-hidden`}>
        <Navbar />
        <img src={profile} alt="" className='relative z-10 md:z-0 w-[174px] md:w-[332px] 1440:w-[445px] mt-[-90px] md:mt-0 mb-10 md:absolute right-0 1440:right-[8rem]' />
        <div className='grid gap-6 md:gap-[34px] 1440:gap-[43px] md:w-[64%] 1440:w-[70%]'>
            <h1 className='text-[40px] md:text-[72px] 1440:text-xl leading-none text-white md:mb-[26px] 1440:mb-0'>Nice to meet you! I'm <span className='underline decoration-Green underline-offset-8 md:underline-offset-[14px]'>Adam Keyes.</span></h1>
            <p className='text-[1rem] md:text-p text-Grey 1440:mb-[23px] 1440:max-w-[38ch]'>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
            <Link>
                CONTACT ME
            </Link>
        </div>


        <img src={circlePattern} alt="" className='absolute bottom-[15rem] md:bottom-0 1440:bottom-20 right-[-4rem] 1440:right-[31rem]'/>
        <img src={ringsPattern} alt="" className='absolute top-[8rem] md:top-[7rem] left-[-13rem]'/>
    </header>
  )
}

export default Header