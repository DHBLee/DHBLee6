import React from 'react'
import Quote from '../../assets/icon-quotes.svg';
const Testimonials = ({image, message, name, title}) => {
  return (
    <div className='grid items-center text-center gap-4'>
      <img src={Quote} alt="" className='mx-auto relative bottom-[-3rem]'/>
        <p className='relative z-20 body2 text-white'>"{message}"</p>
        <div className='grid'>
            <p className='body1 text-RaptureBlue'>{name}</p>
            <span className='text-[13px] italic text-white'>{title}</span>
        </div>
        <img src={image} alt=""  className='mx-auto w-[62px] rounded-[50%] border-4 border-[#C4FFFE]'/>
    </div>
  )
}

export default Testimonials