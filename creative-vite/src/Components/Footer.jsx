import React from 'react'
import Button from './Button';

import waveRedIcon from '../assets/desktop/bg-pattern-wave-red.svg';

const Footer = ({padding}) => {
  return (
    <footer className={`relative ${padding} py-[100px] md:py-[70px] 1440:py-[120px] flex flex-col md:flex-row gap-[47px] items-start md:items-center md:justify-between`}>
        <img src={waveRedIcon} alt="" className='hidden 1440:block absolute top-1/2 translate-y-[-50%] left-[-2.5rem] w-[6rem]'/>
        <h2 className='designText text-BlackText'>
          Let's build someting great together.
        </h2>
        <Button extraStyle="bg-Red text-White w-max">
          Schedule a Call
        </Button>
    </footer>
  )
}

export default Footer