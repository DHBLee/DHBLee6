import React from 'react'
import Button from './Button';

const Footer = ({padding}) => {
  return (
    <footer className={`${padding} py-[100px] md:py-[70px] 1440:py-[120px] flex flex-col md:flex-row gap-[47px] items-start md:items-center md:justify-between`}>
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