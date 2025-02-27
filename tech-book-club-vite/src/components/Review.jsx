import React from 'react'
import avatarImg from '../assets/image-avatars.webp';
import starImg from '../assets/icon-star.svg';

const Review = () => {
  return (
    <div className='flex gap-3'>
        <img src={avatarImg} alt="" className='w-[110px] h-auto'/>
        <div className='grid'>
          <div className='flex'>
              {Array.from({ length: 5 }).map((_, index) => (
                  <img key={index} src={starImg} alt="Star Image" />
              ))}
          </div>
          <p className='textpreset7 text-[var(--clr-neutral700)]'>200+ developers joined already</p>
        </div>
    </div>
  )
}

export default Review