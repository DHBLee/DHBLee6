import React from 'react'
import avatarImg from '../assets/image-avatars.webp';
import Stars from './Stars';


const Review = () => {
  return (
    <div className='flex gap-3'>
        <img src={avatarImg} alt="" className='w-[110px] h-auto'/>
        <div className='grid'>
          <Stars />
          <p className='textpreset7 text-[var(--clr-neutral700)]'>200+ developers joined already</p>
        </div>
    </div>
  )
}

export default Review