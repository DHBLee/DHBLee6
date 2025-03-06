import React from 'react'
import logoImg from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='flex flex-wrap bg-CodGray text-white'>
        <img src={logoImg} alt="" />
        <div>
            <p>MARTHWAITE, SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
        </div>
        <div>
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00am - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
    </footer>
  )
}

export default Footer