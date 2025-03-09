import React from 'react'


import Button from '../Button';

const Section5 = ({px}) => {
  return (
    <section className={`${px} section5 py-[84px] md:py-[72px] flex flex-col justify-center items-center 1440:flex-row 1440:justify-between text-center`}>
        <h4 className='headingL text-white'>Ready to make a reservation?</h4>
        <Button classStyle="border-white text-white mt-[32px] 1440:mx-0 ">
            BOOK A TABLE
        </Button>
    </section>
  )
}

export default Section5