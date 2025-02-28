import React from 'react'
import darkPattern from '../assets/pattern-light-bg.svg';
import Button from './Button';
import Review from './Review';
import arrowUp from '../assets/icon-arrow-up.svg';
import linkedIn from '../assets/logo-linkedin.svg';
import blueSky from '../assets/logo-bluesky.svg';
const Footer = () => {
  return (
    <footer className='grid text-center px-4 pt-12 md:px-8 [@media_(min-width:1440px)]:px-[135px] mt-16 md:mt-20 [@media_(min-width:1440px)]:mt-[120px] bg-cover bg-center bg-no-repeat gap-16' style={{backgroundColor: `var(--clr-neutral900)`, backgroundImage: `url(${darkPattern})`}}>
      <div className='flex flex-col items-center gap-10'>
        <h2 className='textpreset2  text-[var(--clr-neutral100)] max-w-[20ch]'>Ready to debug your reading list?</h2>
        <Button footerBtn={true}>
            REVIEW MEMBERSHIP OPTIONS 
            <img src={arrowUp} alt="" />
        </Button>
        <Review />
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 py-6 border-t-2 border-solid border-[#395159]'>
          <p className='textpreset7 text-[var(--clr-neutral100)]'>@ 2024 - Tech Book Club</p>
          <ul className='flex gap-6'>
            <li><img src={blueSky} alt="" /></li>
            <li><img src={linkedIn} alt="" /></li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer