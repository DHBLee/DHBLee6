import React from 'react'
import logoImg from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[42px] md:gap-[130px] 1440:gap-[193px] md:flex-row items-center justify-center md:justify-start md:items-start bg-CodGray text-white px-6 md:px-[97px] 1440:px-[165px] py-[80px] md:py-[66px]'>
        <img src={logoImg} alt="" />
        <div className='flex justify-center md:justify-start flex-wrap gap-[32px] 1440:gap-[120px]'>
          <div className='body3 grid text-center md:text-left gap-1'>
              <p>MARTHWAITE, SEDBERGH</p>
              <p>CUMBRIA</p>
              <p>+00 44 123 4567</p>
          </div>
          <div className='body3 grid text-center md:text-left gap-1'>
              <p>OPEN TIMES</p>
              <p>MON - FRI: 09:00am - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer