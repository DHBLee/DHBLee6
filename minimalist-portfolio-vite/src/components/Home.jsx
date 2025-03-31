import React from 'react';
import { useNavigate } from 'react-router-dom';


import heroImgMobile from '../assets/images/homepage/mobile/image-homepage-hero.jpg';
import heroImgTablet from '../assets/images/homepage/tablet/image-homepage-hero.jpg';
import heroImgDesktop from '../assets/images/homepage/desktop/image-homepage-hero.jpg';

import profileImgMobile from '../assets/images/homepage/mobile/image-homepage-profile.jpg';
import profileImgTablet from '../assets/images/homepage/tablet/image-homepage-profile.jpg';
import profileImgDesktop from '../assets/images/homepage/desktop/image-homepage-profile.jpg';

import arrowDown from '../assets/images/icons/down-arrows.svg';
import Button from './Button';
import Picture from './Picture';
const Home = ({padding}) => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <main className={`${padding} grid gap-[96px] 1440:gap-[150px] mt-[40px] md:mt-[47px] 1440:mt-[54px] mb-[115px] md:mb-[96px] 1440:mb-[150px]`}>
      <section className='relative grid gap-3'>
        <Picture mobileImg={heroImgMobile} tabletImg={heroImgTablet} desktopImg={heroImgDesktop}/>
        <div className='md:absolute grid gap-[32px] md:gap-[48px] md:pt-[56px] md:pr-[56px] items-start justify-start bottom-0 left-0 bg-white'>
            <h1 className='heading2 md:heading1 md:max-w-[16ch] 1440:max-w-[13ch]'>Hey, I'm Alex Spence and I love building beautiful websites</h1>
            <button onClick={scrollToAbout} className='group mr-auto flex items-center gap-9 bg-Blue hover:bg-Cyan'>
              <img src={arrowDown} alt="" className='p-4 bg-[#1f3444] group-hover:bg-[#5ba293]' />
              <p className='linkStyling text-white mr-8'>about me</p>
            </button>
        </div>
      </section>

      <section id='about-section' className='flex flex-col md:flex-row md:gap-[69px] 1440:gap-[125px]'>
        <div className='md:w-[45%] self-start'>
          <Picture mobileImg={profileImgMobile} tabletImg={profileImgTablet} desktopImg={profileImgDesktop}/>
        </div>
        <div className='md:w-[55%] 1440:w-[33%] my-[32px] md:my-0 border-LightGray border-b-2 border-t-2'>
          <div className='grid gap-[28px] py-[32px]'>
            <h1 className="heading2 md:heading1">About Me</h1>
            <p className='body1 1440:max-w-[40ch]'>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
            <Button route="portfolio">
                go to portfolio
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home