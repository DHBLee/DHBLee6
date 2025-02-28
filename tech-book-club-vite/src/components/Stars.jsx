import React from 'react'
import starImg from '../assets/icon-star.svg';

const Stars = () => {
  return (
    <div className='flex'>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <img key={index} src={starImg} alt="Star Image" />
                  ))}
    </div>
  )
}

export default Stars