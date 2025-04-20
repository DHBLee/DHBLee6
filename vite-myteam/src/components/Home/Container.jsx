import React from 'react'

const Container = ({image, title, description}) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start md:gap-[23px] text-center md:text-left'>
        <img src={image} alt="" className='mx-auto md:mx-0 max-w-[72px] w-[72px]'/>
        <div className='grid gap-4'>
            <h5 className='body1 text-LightCoral'>{title}</h5>
            <p className='body2 text-white'>{description}</p>
        </div>
    </div>
  )
}

export default Container